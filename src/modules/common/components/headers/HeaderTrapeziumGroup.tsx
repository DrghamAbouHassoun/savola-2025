import TrapeziumGroup from "../../../../assets/vectors/trapezium-group/group.svg";
import { useLocale } from "../../hooks/useLocale";

const HeaderTrapeziumGroup = () => {
  const { lang } = useLocale();
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* {[0.2, 0.4, 0.8].map((delay) => (
        <img
          key={delay}
          src={TrapeziumItem1}
          alt=""
          className="absolute bottom-0 right-0 h-[80vh] w-auto object-contain object-right animate-trapezium-cycle"
          style={{ animationDelay: `${delay}s`, right: `${delay * 10}px` }}
        />
      ))} */}
      <div className={`absolute bottom-0 h-[80vh] w-auto object-contain ${lang === "ar" ? "object-left animate-trapezium-cycle-ar left-0" : "object-right animate-trapezium-cycle right-0"} `}>
      <img src={TrapeziumGroup} alt="" className={`w-full h-full object-contain ${lang === "ar" ? "rotate-y-180" : ""}`} />
      </div>
    </div>
  );
};

export default HeaderTrapeziumGroup;
