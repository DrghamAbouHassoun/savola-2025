import TrapeziumItem1 from "../../../../assets/vectors/trapezium-group/main.svg";
// import TrapeziumItem2 from "../../../../assets/vectors/trapezium-group/2.svg";
// import TrapeziumItem3 from "../../../../assets/vectors/trapezium-group/3.svg";
// import { useLocale } from "../../hooks/useLocale";

const HeaderTrapeziumGroup = () => {
  // const { lang } = useLocale();
  return (
    <div className="relative w-full h-full">
      <div key="1" className={`w-full h-full animate-fade-down-left`}>
        <img
          src={TrapeziumItem1}
          alt=""
          className={`w-full h-full object-contain absolute top-0 object-right right-0`}
        />
      </div>
      <div key="2" className={`w-full h-full animate-fade-down-left animate-delay-0_2s`}>
        <img
          src={TrapeziumItem1}
          alt=""
          className={`w-full h-full object-contain absolute top-0 object-right right-0`}
        />
      </div>
      <div key="2" className={`w-full h-full animate-fade-down-left animate-delay-0_4s`}>
        <img
          src={TrapeziumItem1}
          alt=""
          className={`w-full h-full object-contain absolute top-0 object-right right-0`}
        />
      </div>
      {/* <div
        className={`w-full h-full origin-center ${lang === "ar" ? "rotate-y-180" : ""}`}
      >
        <img
          src={TrapeziumItem2}
          alt=""
          className={`w-full h-full object-contain absolute top-0 object-right right-0`}
        />
      </div>
      <div
        className={`w-full h-full origin-center ${lang === "ar" ? "rotate-y-180" : ""}`}
      >
        <img
          src={TrapeziumItem3}
          alt=""
          className={`w-full h-full object-contain absolute top-0 object-right right-0`}
        />
      </div> */}
    </div>
  );
};

export default HeaderTrapeziumGroup;
