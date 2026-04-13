import { useCallback, useEffect, useRef, useState } from "react";
import Container from "../../common/components/container/Container";
import SliderImage1 from "../../../assets/images/home/slider/1.jpg";
import SliderImage2 from "../../../assets/images/home/slider/2.jpg";
import SliderImage3 from "../../../assets/images/home/slider/3.jpg";
import Trapezium from "../../../assets/vectors/trapezium.png";
import Logo from "../../../assets/logo/logo.svg";

const slides = [SliderImage1, SliderImage2, SliderImage3];
const N = slides.length;
const GAP = 16;

const mod = (x: number, n: number) => ((x % n) + n) % n;
const clamp = (v: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, v));

// scale: prev=-1 → 0.5, active=0 → 1, next=+1 → 1.5  (linear steps of 0.5)
const scaleForOffset = (off: number) => clamp(1 + 0.5 * off, 0.1, 2.5);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });

  // Spring physics state — all in refs to avoid re-render overhead
  const targetRef = useRef(0);
  const posRef = useRef(0);
  const velRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTRef = useRef<number | null>(null);

  // Force re-render on each RAF tick so the DOM reflects current posRef
  const [, setTick] = useState(0);

  // Measure container on mount and resize
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setContainerSize({
          w: containerRef.current.offsetWidth,
          h: containerRef.current.offsetHeight,
        });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Animation loop
  const tick = useCallback(() => {
    const now = performance.now();
    const dt = lastTRef.current
      ? Math.min((now - lastTRef.current) / 1000, 0.15)
      : 0.016;
    lastTRef.current = now;

    {
      const diff = targetRef.current - posRef.current;
      const acc = 34 * diff - 10 * velRef.current;
      velRef.current += acc * dt;
      posRef.current += velRef.current * dt;

      if (Math.abs(diff) < 0.0005 && Math.abs(velRef.current) < 0.001) {
        posRef.current = targetRef.current;
        velRef.current = 0;
      }
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

  // Auto-advance every 5 seconds
  useEffect(() => {
    const id = setInterval(() => {
      targetRef.current += 1;
      velRef.current = 0;
    }, 5000);
    return () => clearInterval(id);
  }, []);

  // Derived layout values
  const { w: containerW, h: containerH } = containerSize;
  // slideW sized so ~20% of the adjacent slide peeks in on each side:
  //   containerW/2 - slideW/2 - GAP = 0.2 * slideW  →  slideW = (containerW/2 - GAP) / 0.7
  const slideW = containerW > 0 ? (containerW / 2 - GAP) / 0.7 : 0;
  // BASE_H: active slide fills the container; next (×1.5) extends above (clipped by outer overflow-hidden)
  const BASE_H = containerH;

  // Build visible slide items
  const curPos = posRef.current;
  const center = Math.round(curPos);
  const items: {
    key: number;
    ri: number;
    h: number;
    x: number;
    op: number;
    z: number;
  }[] = [];

  for (let i = center - 3; i <= center + 3; i++) {
    const ri = mod(i, N);
    const off = i - curPos;
    const sc = scaleForOffset(off);
    const h = BASE_H * sc;
    const x = off * (slideW + GAP);
    const op = clamp(1 - Math.max(0, Math.abs(off) - 2.2), 0, 1);
    const z = 200 - Math.round(Math.abs(off) * 10);
    items.push({ key: i, ri, h, x, op, z });
  }

  return (
    <>
      <div className="fixed w-full h-screen top-0 left-0 z-30 flex justify-center items-center bg-white animate-fade-out animate-delay-2s">
        <img src={Logo} alt="Savola Logo" className="w-70 h-auto" />
      </div>
      <div className="w-full h-screen relative overflow-hidden">
        <div className="fixed right-0 bottom-0 w-[50%] h-auto max-h-[85vh] animate-open-down active animate-delay-4_6s z-30">
          <img
            src={Trapezium}
            alt="Trapezium"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col w-full h-full">
          <div className="flex-[0.9] flex flex-col justify-end py-32 text-savola-cool-grey animate-fade-left-100 active animate-delay-4_6s">
            <Container>
              <h1 className="text-5xl font-bold mb-4">
                A new era of
                <br /> focused growth
              </h1>
              <h2 className="text-3xl font-bold">
                Annual Report <span className="text-savola-green">2025</span>
              </h2>
            </Container>
          </div>

          {/* Carousel — no overflow-hidden so slides remain fully visible */}
          <div ref={containerRef} className="flex-[1.1] relative animate-fade-right-100 active animate-delay-4s">
            {containerW > 0 &&
              items.map(({ key, ri, h, x, op, z }) => (
                <div
                  key={key}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    width: slideW,
                    height: h,
                    transform: `translateX(calc(-50% + ${x}px))`,
                    zIndex: z,
                    opacity: op,
                    willChange: "transform, height",
                    pointerEvents: "none",
                  }}
                >
                  <img
                    src={slides[ri]}
                    alt={`Slide ${ri + 1}`}
                    draggable={false}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      display: "block",
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
