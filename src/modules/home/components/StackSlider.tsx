import { useCallback, useEffect, useRef, useState } from "react";
import Image1 from "../../../assets/images/home/slider/1-green-1.png";
import Image1Ar from "../../../assets/images/home/slider/1-green-1-ar.png";
import Image2 from "../../../assets/images/home/slider/2-orange-1.png";
import Image3 from "../../../assets/images/home/slider/3-gray-1.png";
import { useLocale } from "../../common/hooks/useLocale";

const slidesEn = [Image1, Image2, Image3];
const slidesAr = [Image1Ar, Image2, Image3];
const N = slidesEn.length;

const mod = (x: number, n: number) => ((x % n) + n) % n;
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

const StackSlider = () => {
  const { lang } = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerW, setContainerW] = useState(0);

  const targetRef = useRef(0);
  const posRef = useRef(0);
  const velRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTRef = useRef<number | null>(null);
  const langRef = useRef(lang);
  useEffect(() => {
    langRef.current = lang;
    // reset carousel position when language switches
    targetRef.current = 0;
    posRef.current = 0;
    velRef.current = 0;
    lastTRef.current = null;
  }, [lang]);

  const [, setTick] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHasLoaded(true), 4500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) setContainerW(containerRef.current.offsetWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const tick = useCallback(() => {
    const now = performance.now();
    const dt = lastTRef.current
      ? Math.min((now - lastTRef.current) / 1000, 0.15)
      : 0.016;
    lastTRef.current = now;

    const diff = targetRef.current - posRef.current;
    const acc = 34 * diff - 10 * velRef.current;
    velRef.current += acc * dt;
    posRef.current += velRef.current * dt;

    if (Math.abs(diff) < 0.0005 && Math.abs(velRef.current) < 0.001) {
      posRef.current = targetRef.current;
      velRef.current = 0;
    }

    setTick((c) => c + 1);
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    lastTRef.current = null;
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [tick]);

  useEffect(() => {
    const id = setInterval(() => {
      // same direction for both languages — dir on x handles the EN/AR mirror
      targetRef.current -= 1;
      velRef.current = 0;
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const isRTL = lang === "ar";
  const dir = isRTL ? -1 : 1;
  const slides = isRTL ? slidesAr : slidesEn;

  // Static layout reference (LTR):
  //   off=0 → right: 0,   width: 90%   z:2  (front)
  //   off=1 → right: 20%, width: 80%   z:1
  //   off=2 → right: 40%, width: 70%   z:0
  //
  // Each card is bottom-anchored and the width/right-offset steps by 10%/20% per level.
  // For RTL the whole layout is mirrored: use `left` instead of `right`.
  // Exiting card (off < 0) slides off the trailing side of the screen.

  const W = containerW;

  // Center-x offset from the container's midpoint, derived from the static positions:
  //   center_x(off) = W - right(off) - width(off)/2
  //   LTR off=0: W - 0 - 0.45W = 0.55W  → x = 0.55W - 0.5W =  0.05W
  //   LTR off=1: W - 0.2W - 0.4W = 0.4W  → x = -0.10W
  //   LTR off=2: W - 0.4W - 0.35W = 0.25W → x = -0.25W
  // General: x_ltr = 0.05W - off * 0.15W
  //
  // Exiting (off < 0): continues past off=0 in the trailing direction
  //   LTR exits LEFT: x_ltr = 0.05W + off * W  (off=-1 → x = -0.95W, off-screen left)
  const STEP = W * 0.15;      // spacing between stack positions
  const LEAD = W * 0.05;      // front card offset from center

  const curPos = posRef.current;
  const center = Math.round(curPos);
  const items: { key: number; ri: number; x: number; w: number; op: number; z: number; entranceDelay: number }[] = [];

  for (let i = center - 1; i <= center + 3; i++) {
    const ri = mod(i, N);
    const off = i - curPos;

    const x_ltr = off < 0
      ? LEAD - off * W             // off=-1 → LEAD+W: new card enters from right (EN) / left (AR)
      : LEAD - off * STEP;         // stack positions: off=0 front-right, off=1 left, off=2 further left

    const x = x_ltr * dir;

    const w = W * clamp(0.9 - Math.max(0, off) * 0.1, 0.6, 0.9);

    // incoming card (off<0) must render above everything so it visibly replaces the top
    const z = off < 0 ? 40 : off === 0 ? 30 : 30 - Math.round(off * 10);

    const op = off < 0
      ? clamp(1 + off, 0, 1)       // fades as it exits
      : clamp(2.8 - off, 0, 1);    // visible for off=0,1,2

    const entranceDelay = 3.0 + clamp(Math.max(0, off), 0, 2) * 0.3;
    items.push({ key: i, ri, x, w, op, z, entranceDelay });
  }

  return (
    <div ref={containerRef} className={`h-[65vh] w-[110vw] fixed bottom-0 ${lang === "ar" ? "-left-[20vw]" : "-right-[20vw]"} `}>
      {W > 0 && items.map(({ key, ri, x, w, op, z, entranceDelay }) => (
        <div
          key={key}
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            width: w,
            height: "100%",
            transform: `translateX(calc(-50% + ${x}px))`,
            zIndex: z,
            opacity: op,
            willChange: "transform, width",
            pointerEvents: "none",
          }}
        >
          <div
            className={hasLoaded ? "w-full h-full" : "animate-fade-up-entrance w-full h-full"}
            style={hasLoaded ? undefined : { animationDelay: `${entranceDelay}s` }}
          >
            <img
              src={slides[ri]}
              alt={`Slide ${ri + 1}`}
              draggable={false}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: isRTL ? "bottom left" : "bottom right",
                display: "block",
                transform: isRTL && ri !== 0 ? "scaleX(-1)" : undefined,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StackSlider;
