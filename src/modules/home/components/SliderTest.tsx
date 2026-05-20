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

const SliderTest = () => {
  const { lang } = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });

  const targetRef = useRef(0);
  const posRef = useRef(0);
  const velRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTRef = useRef<number | null>(null);
  const langRef = useRef(lang);
  useEffect(() => { langRef.current = lang; }, [lang]);

  const [, setTick] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setContainerSize({
          w: containerRef.current.offsetWidth,
          h: window.innerHeight,
        });
      }
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
      targetRef.current += langRef.current === "ar" ? -1 : 1;
      velRef.current = 0;
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const { w: containerW, h: viewH } = containerSize;
  const isRTL = lang === "ar";
  const slides = isRTL ? slidesAr : slidesEn;
  const dir = isRTL ? -1 : 1;

  const isMobile = containerW > 0 && containerW < 768;
  const isTablet = containerW >= 768 && containerW < 1024;

  // slideW as a % of containerW per breakpoint
  const slideW = isMobile
    ? containerW
    : isTablet
      ? containerW * 0.80
      : containerW * 0.55;

  // spacing is always 54.5% of slideW → overlap is always 45.5% of slideW, every breakpoint
  const spacing = slideW * 0.545;

  const offsetX = isMobile
    ? -dir * spacing          // centers the lead item on screen
    : isTablet
      ? -containerW * 0.26 * dir
      : containerW * 0.025 * dir;

  const BASE_H = viewH * 0.85;

  const curPos = posRef.current;
  const center = Math.round(curPos);
  const items: { key: number; ri: number; h: number; w: number; x: number; op: number; z: number; entranceDelay: number }[] = [];

  for (let i = center - 2; i <= center + 2; i++) {
    const ri = mod(i, N);
    const off = i - curPos;

    const sc = clamp(0.82 + 0.18 * off * dir, 0.1, 1.0);
    const h = BASE_H * sc;

    const widthScale = isMobile ? 1.0 : clamp(0.8 + 0.2 * off * dir, 0.1, 1.0);
    const w = slideW * widthScale;

    const edgeAnchor = isMobile ? 0 : slideW * (1 - widthScale) / 2 * dir;
    const trailNudge = Math.max(0, -off * dir) * containerW * 0.05 * dir;
    const x = off * spacing + offsetX + edgeAnchor + trailNudge;

    const op = isMobile
      ? clamp(1 - Math.abs(off * dir - 1), 0, 1)
      : isTablet
        ? clamp(1.5 - Math.abs(off * dir - 0.5), 0, 1)
        : clamp(2 - Math.abs(off), 0, 1);

    const z = 10 + Math.round(off * dir);
    // lead=3.0s, center=3.3s, trailing=3.6s — after splash screen fades out at ~3s
    const entranceDelay = 3.0 + clamp(1 - Math.round(off * dir), 0, 2) * 0.3;
    items.push({ key: i, ri, h, w, x, op, z, entranceDelay });
  }

  return (
    <div ref={containerRef} className="w-full h-[85vh] fixed bottom-0 overflow-hidden">
      {containerW > 0 && items.map(({ key, ri, h, w, x, op, z, entranceDelay }) => (
        <div
          key={key}
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            width: w,
            height: h,
            transform: `translateX(calc(-50% + ${x}px))`,
            zIndex: z,
            opacity: op,
            willChange: "transform, height",
            pointerEvents: "none",
          }}
        >
          <div
            className="animate-fade-up-entrance w-full h-full"
            style={{ animationDelay: `${entranceDelay}s` }}
          >
            <img
              src={slides[ri]}
              alt={`Slide ${ri + 1}`}
              draggable={false}
              style={{
                width: "100%",
                height: "100%",
                objectFit: isMobile ? "contain" : "cover",
                objectPosition: isMobile ? "bottom" : isRTL ? "top right" : "top left",
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

export default SliderTest;
