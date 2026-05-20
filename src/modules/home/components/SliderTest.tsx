import { useCallback, useEffect, useRef, useState } from "react";
import Image1 from "../../../assets/images/home/slider/1-green.png";
import Image2 from "../../../assets/images/home/slider/2-orange.png";
import Image3 from "../../../assets/images/home/slider/3-gray.png";

const slides = [Image1, Image2, Image3];
const N = slides.length;

const mod = (x: number, n: number) => ((x % n) + n) % n;
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

const SliderTest = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });

  const targetRef = useRef(0);
  const posRef = useRef(0);
  const velRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTRef = useRef<number | null>(null);

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
      targetRef.current += 1;
      velRef.current = 0;
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const { w: containerW, h: viewH } = containerSize;

  // Matches static layout: 50vw wide, 30vw spacing between right edges, right-aligned
  // off=+1 (right): right-0, 85vh tall
  // off= 0 (center): right-[30vw], ~64vh tall
  // off=-1 (left): right-[60vw], ~43vh tall
  const slideW = containerW * 0.5;
  const spacing = containerW * 0.3;
  // offsetX shifts the carousel so off=+1 right edge aligns to the container's right edge
  const offsetX = -containerW * 0.05;
  const BASE_H = viewH * 0.85;

  const curPos = posRef.current;
  const center = Math.round(curPos);
  const items: { key: number; ri: number; h: number; x: number; op: number; z: number }[] = [];

  for (let i = center - 2; i <= center + 2; i++) {
    const ri = mod(i, N);
    const off = i - curPos;
    const sc = clamp(0.75 + 0.25 * off, 0.1, 1.0);
    const h = BASE_H * sc;
    const x = off * spacing + offsetX;
    const op = clamp(2 - Math.abs(off), 0, 1);
    // right item always on top, matching the static z-2/z-1/z-0 stacking
    const z = 10 + Math.round(off);
    items.push({ key: i, ri, h, x, op, z });
  }

  return (
    <div ref={containerRef} className="w-full h-[85vh] fixed bottom-0">
      {containerW > 0 && items.map(({ key, ri, h, x, op, z }) => (
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
              objectPosition: "top left",
              display: "block",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default SliderTest;
