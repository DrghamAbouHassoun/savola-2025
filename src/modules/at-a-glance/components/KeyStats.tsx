import SmallContainer from "../../common/components/container/SmallContainer";

const STATS = [
  {
    bg: "bg-savola-orange",
    label: "Panda loyalty platform membership exceeded",
    value: "14MN",
    sub: "customers",
    textColor: "text-white",
  },
  {
    bg: "bg-savola-green",
    label: "Production volumes reached a yearly record",
    value: "3.74 MN",
    sub: "metric tons",
    textColor: "text-white",
  },
  {
    bg: "bg-savola-cool-grey/20",
    label: "Energy-related cost savings",
    value: '<i class="riyal-icon"></i> 104 MN',
    sub: "",
    textColor: "text-savola-cool-grey",
  },
];

const KeyStats = () => (
  <section className="bg-white py-10 md:py-14">
    <SmallContainer>
      <div className="flex flex-wrap justify-between gap-6 md:gap-10">
        {STATS.map((stat, i) => (
          <div
            key={i}
            className={`${stat.bg} ${stat.textColor} flex h-40 w-40 flex-col items-center justify-center rounded-full p-6 text-center shadow-[0_18px_35px_rgba(78,95,109,0.08)] sm:h-48 sm:w-48 md:h-52 md:w-52`}
          >
            <p
              className="mb-3 max-w-34 leading-snug opacity-90 text-sm"
              dangerouslySetInnerHTML={{ __html: stat.label }}
            ></p>
            <p
              className=" font-black leading-none"
              dangerouslySetInnerHTML={{ __html: stat.value }}
            ></p>
            {stat.sub && (
              <p
                className="mt-1 text-xs font-bold opacity-90 sm:text-sm"
                dangerouslySetInnerHTML={{ __html: stat.sub }}
              ></p>
            )}
          </div>
        ))}
      </div>
    </SmallContainer>
  </section>
);

export default KeyStats;
