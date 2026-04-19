import MaskImage from "../../../../assets/images/common/savola-mask-angel-colorful.png";
import useInView from "../../hooks/useInView";
import AnimationPopUp from "../Animations/AnimationPopUp";
import { useLocale } from "../../hooks/useLocale";

interface NewHeaderProps {
  imageUrl: string;
  title: string;
}

const NewHeader = ({ imageUrl, title }: NewHeaderProps) => {
  const { ref, inView } = useInView();
  const { lang } = useLocale();
  const isAr = lang === "ar";
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row lg:items-center lg:relative overflow-hidden">
      {/* Title */}
      <div className="w-full max-w-7xl mx-auto px-4 py-16 lg:pl-16 xl:pl-4 pt-32 lg:pt-0 lg:relative">
        <AnimationPopUp>
          <h1 className="text-4xl font-bold">{title}</h1>
        </AnimationPopUp>
      </div>

      {/* Image — stacked below on mobile/tablet, absolute on desktop */}
      <div
        ref={ref}
        className={`animate-header-angle-top ${inView ? "active" : ""} w-full h-[50vh] lg:h-[70vh] lg:absolute ${isAr ? "lg:left-0" : "lg:right-0"} lg:top-[15vh] lg:w-3/5 flex items-center overflow-hidden`}
        style={{
          WebkitMaskImage: `url(${MaskImage})`,
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskImage: `url(${MaskImage})`,
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
        }}
      >
        <img
          src={imageUrl}
          className="animate-pan-lr"
          style={{ width: "120%", height: "100%", objectFit: "cover", flexShrink: 0 }}
        />
      </div>
    </div>
  );
};

export default NewHeader;
