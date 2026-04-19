import { useEffect, useRef, useState } from "react";
import useInView from "../../hooks/useInView";

interface CountUpProps {
  end: number;
  decimals?: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  separator?: string;
}

const CountUp = ({
  end,
  decimals = 0,
  duration = 1400,
  className = "",
  prefix = "",
  suffix = "",
  separator = ",",
}: CountUpProps) => {
  const { inView, ref } = useInView<HTMLSpanElement>({ partial: true, triggerOnce: true });
  const [value, setValue] = useState(0);
  const frameRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!inView || hasStarted.current) return;
    hasStarted.current = true;
    startRef.current = null;

    const animate = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * end);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, [inView, end, duration]);

  const format = (v: number) => {
    const fixed = v.toFixed(decimals);
    if (!separator) return `${prefix}${fixed}${suffix}`;
    const [int, dec] = fixed.split(".");
    const withSep = int.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return `${prefix}${dec !== undefined ? `${withSep}.${dec}` : withSep}${suffix}`;
  };

  return (
    <span ref={ref} className={className}>
      {format(value)}
    </span>
  );
};

export default CountUp;
