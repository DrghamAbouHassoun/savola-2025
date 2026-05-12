import Trapezium1 from "../../../../assets/vectors/trapezium-group/1.svg";
import Trapezium2 from "../../../../assets/vectors/trapezium-group/2.svg";
import Trapezium3 from "../../../../assets/vectors/trapezium-group/3.svg";
// import { useLocale } from "../../hooks/useLocale";

const layers = [
  {
    src: Trapezium3,
    ltr: "animate-trapezium-layer3",
    rtl: "animate-trapezium-layer3-ar",
    zIndex: "z-10",
  },
  {
    src: Trapezium2,
    ltr: "animate-trapezium-layer2",
    rtl: "animate-trapezium-layer2-ar",
    zIndex: "z-20",
  },
  {
    src: Trapezium1,
    ltr: "animate-trapezium-layer1",
    rtl: "animate-trapezium-layer1-ar",
    zIndex: "z-30",
  },
];

const HeaderTrapeziumGroup = () => {
  // const { lang } = useLocale();
  // const isAr = lang === "ar";

  return (
    <div className="relative w-full h-full overflow-hidden">
      {layers.map(({ src }, index) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          draggable={false}
          className={`absolute right-0 animate-trapezium-layer1 ${index === 1 ? "animate-delay-1s" : index === 2 ? "animate-delay-2s" : ""}`}
        />
      ))}
    </div>
  );
};

export default HeaderTrapeziumGroup;
