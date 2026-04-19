import LeadershipTrapezium from "../../../assets/images/leadership/head-trapezium.png";
import SmallContainer from "../../common/components/container/SmallContainer";
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
      <div className="relative w-full h-full flex px-4">
        <div className="flex-1 w-full flex items-end ">
          <img
            src={imageUrl}
            alt={title}
            className={`w-auto h-[95%] object-contain ${lang === "ar" ? "rotate-y-180" : ""}`}
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="flex flex-col">
            <h2 className="text-lg text-savola-green font-semibold">{name}</h2>
            <h4 className="text-savola-cool-grey font-thin">{title}</h4>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-start pt-16">
          <p className="text-savola-cool-grey text-lg font-extrabold">{quote}</p>
          <img
            src={signImageUrl}
            alt={`${name}'s signature`}
            className="w-14 h-auto mt-4"
          />
        </div>
        <div className={`absolute flex top-0 ${lang === "ar" ? "left-0 rotate-y-180 justify-end" : "left-0"} w-full h-full -z-10`}>
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
