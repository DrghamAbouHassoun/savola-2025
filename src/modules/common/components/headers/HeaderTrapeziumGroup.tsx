import Trapezium1 from "../../../../assets/vectors/trapezium-group/1.svg";
import Trapezium2 from "../../../../assets/vectors/trapezium-group/2.svg";
import Trapezium3 from "../../../../assets/vectors/trapezium-group/3.svg";
import { useLocale } from "../../hooks/useLocale";

const layers = [
  { src: Trapezium3, ltr: "animate-trapezium-layer3", rtl: "animate-trapezium-layer3-ar" },
  { src: Trapezium2, ltr: "animate-trapezium-layer2", rtl: "animate-trapezium-layer2-ar" },
  { src: Trapezium1, ltr: "animate-trapezium-layer1", rtl: "animate-trapezium-layer1-ar" },
];

const HeaderTrapeziumGroup = () => {
  const { lang } = useLocale();
  const isAr = lang === "ar";

  return (
    <div className="relative w-full h-full overflow-hidden">
      {layers.map(({ src, ltr, rtl }) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute bottom-0 h-[80vh] w-auto object-contain ${
            isAr
              ? `object-left left-0 ${rtl}`
              : `object-right right-0 ${ltr}`
          }`}
        />
      ))}
    </div>
  );
};

export default HeaderTrapeziumGroup;
