import { useEffect, useRef, useState } from "react";
import useInView from "../../hooks/useInView";

interface AnimationSlideTopProps extends React.HTMLAttributes<HTMLDivElement> {}

const AnimationSlideTop = ({ className, children, style, ...rest }: AnimationSlideTopProps) => {
  const { inView, ref } = useInView<HTMLDivElement>({ partial: true });
  const [animKey, setAnimKey] = useState(0);
  const prevInView = useRef(false);

  useEffect(() => {
    if (inView && !prevInView.current) {
      setAnimKey((k) => k + 1);
    }
    prevInView.current = inView;
  }, [inView]);

  return (
    <div
      key={animKey}
      {...rest}
      ref={ref}
      style={style}
      className={`animate-slide-up-20px ${inView ? "active" : ""} ${className ?? ""}`.trim()}
    >
      {children}
    </div>
  );
};

export default AnimationSlideTop;
