import AnimationPopUp from "../../common/components/Animations/AnimationPopUp";
import TrapeziumeShape from "../../../assets/vectors/business-review/trapezium.svg";
import { useLocale } from "../../common/hooks/useLocale";

interface BusinessReviewProps {
  title: string;
  subtitle: string;
  logoUrl: string;
}

const BusinessReviewHeader = ({
  title,
  subtitle,
  logoUrl,
}: BusinessReviewProps) => {
  const { lang } = useLocale();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8 md:mb-10 min-h-90">
      <div className="relative w-full h-full flex items-end">
        <div className={`absolute top-0 left-0 w-full h-full ${lang === "ar" ? "rotate-y-180" : ""}`}>
          <img
            src={TrapeziumeShape}
            className="w-full h-full object-contain object-bottom-left"
          />
        </div>
        <div className="p-4">
          <AnimationPopUp>
            <p className="font-bold text-savola-orange text-2xl md:text-xl leading-tight mb-3">
              {title}
            </p>
            <p className="text-savola-cool-grey font-bold leading-relaxed">
              {subtitle}
            </p>
          </AnimationPopUp>
        </div>
      </div>
      <div className="flex md:justify-start items-end h-full w-full">
        <AnimationPopUp>
          <div className="">
            <img src={logoUrl} alt="Panda" className="h-24 w-auto" />
          </div>
        </AnimationPopUp>
      </div>
    </div>
  );
};

export default BusinessReviewHeader;
