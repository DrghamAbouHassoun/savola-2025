import { useEffect, useRef } from "react";

interface ParallaxImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  yPercent?: number;
}

const ParallaxImage = ({
  containerClassName,
  className,
  yPercent = 30,
  style,
  ...imgProps
}: ParallaxImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    const update = () => {
      const rect = container.getBoundingClientRect();
      const viewH = window.innerHeight;
      // progress: 1 when top of container is at bottom of viewport, 0 when bottom is at top
      const progress = 1 - (rect.bottom / (viewH + rect.height));
      const clamped = Math.min(1, Math.max(0, progress));
      // map 0→1 to -yPercent→+yPercent
      const offset = (clamped * 2 - 1) * yPercent;
      image.style.transform = `translateY(${offset}%)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [yPercent]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${containerClassName ?? ""}`}
    >
      <img
        ref={imageRef}
        {...imgProps}
        className={`w-full h-full object-cover will-change-transform ${className ?? ""}`}
        style={{ ...style, scale: `${1 + yPercent / 100}` }}
      />
    </div>
  );
};

export default ParallaxImage;
