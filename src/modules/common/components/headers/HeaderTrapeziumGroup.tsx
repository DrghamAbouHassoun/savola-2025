import TrapeziumItem1 from "../../../../assets/vectors/trapezium-group/main.svg";

const HeaderTrapeziumGroup = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {[0.2, 0.4, 0.8].map((delay) => (
        <img
          key={delay}
          src={TrapeziumItem1}
          alt=""
          className="absolute bottom-0 right-0 h-[80vh] w-auto object-contain object-right animate-trapezium-cycle"
          style={{ animationDelay: `${delay}s`, right: `${delay * 10}px` }}
        />
      ))}
    </div>
  );
};

export default HeaderTrapeziumGroup;
