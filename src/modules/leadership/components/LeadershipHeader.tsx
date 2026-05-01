import LeadershipTrapezium from "../../../assets/images/leadership/head-trapezium.png";
import SmallContainer from "../../common/components/container/SmallContainer";
import AnimationFadeIn from "../../common/components/Animations/AnimationFadeIn";
import AnimationSlideTop from "../../common/components/Animations/AnimationSlideTop";
import { useLocale } from "../../common/hooks/useLocale";

interface LeadershipHeaderProps {
  imageUrl: string;
  signImageUrl: string;
  title: string;
  name: string;
  quote: string;
}

const LeadershipHeader = ({
  imageUrl,
  signImageUrl,
  title,
  name,
  quote,
}: LeadershipHeaderProps) => {
  const { lang } = useLocale();
  return (
    <SmallContainer>
      <div className="relative w-full h-full flex flex-col md:flex-row px-4 gap-6 md:gap-0 py-8 md:py-0">
        {/* Person image */}
        <AnimationFadeIn className="flex justify-center md:flex-1 md:w-full md:flex md:items-end">
          <img
            src={imageUrl}
            alt={title}
            className={`w-40 h-auto md:w-auto md:h-[95%] object-contain ${lang === "ar" ? "rotate-y-180" : ""}`}
          />
        </AnimationFadeIn>

        {/* Name & title — hidden on mobile (shown in combined block below) */}
        <AnimationSlideTop className="hidden md:flex md:flex-1 flex-col justify-center items-center animate-delay-0_2s">
          <div className="flex flex-col">
            <img
              src={signImageUrl}
              alt={`${name}'s signature`}
              className="w-16 h-auto mt-2 md:mt-4"
            />
            <h2 className="text-lg text-savola-green font-semibold">{name}</h2>
            <h4 className="text-savola-cool-grey font-thin">{title}</h4>
          </div>
        </AnimationSlideTop>

        {/* Quote, signature, and name/title on mobile */}
        <AnimationSlideTop className="flex flex-col items-center text-center md:items-start md:text-start md:flex-1 md:justify-center md:pt-16 gap-2 animate-delay-0_4s">
          {/* Name/title visible only on mobile */}
          <div className="md:hidden">
            <img
              src={signImageUrl}
              alt={`${name}'s signature`}
              className="w-18 h-auto mt-2 md:mt-4 mx-auto"
            />
            <h2 className="text-lg text-savola-green font-semibold">{name}</h2>
            <h4 className="text-savola-cool-grey font-thin">{title}</h4>
          </div>
          <p className="text-savola-cool-grey text-base md:text-lg font-extrabold">
            {quote}
          </p>
        </AnimationSlideTop>

        {/* Background trapezium */}
        <div
          className={`absolute flex top-0 ${lang === "ar" ? "left-0 rotate-y-180 justify-end" : "left-0"} w-full h-full -z-10`}
        >
          <img
            src={LeadershipTrapezium}
            alt="Leadership Trapezium"
            className="w-auto h-full object-contain"
          />
        </div>
      </div>
    </SmallContainer>
  );
};

export default LeadershipHeader;
