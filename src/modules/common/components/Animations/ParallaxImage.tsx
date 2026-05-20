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

    const scaleFactor = 1 + yPercent / 100;

    const update = () => {
      const rect = container.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = 1 - (rect.bottom / (viewH + rect.height));
      const clamped = Math.min(1, Math.max(0, progress));
      const offset = (clamped * 2 - 1) * yPercent;
      image.style.transform = `scale(${scaleFactor}) translateY(${offset}%)`;
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
        style={style}
      />
    </div>
  );
};

export default ParallaxImage;
