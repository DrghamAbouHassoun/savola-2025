import Container from "../../common/components/container/Container";

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
    value: "SAR 104 MN",
    sub: "",
    textColor: "text-savola-cool-grey",
  },
];

const KeyStats = () => (
  <section className="bg-white py-10 md:py-14">
    <Container className="max-w-5xl">
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {STATS.map((stat, i) => (
          <div
            key={i}
            className={`${stat.bg} ${stat.textColor} flex h-40 w-40 flex-col items-center justify-center rounded-full p-6 text-center shadow-[0_18px_35px_rgba(78,95,109,0.08)] sm:h-48 sm:w-48 md:h-52 md:w-52`}
          >
            <p className="mb-3 max-w-[8.5rem] text-[0.64rem] leading-snug opacity-90 sm:text-[0.7rem]">
              {stat.label}
            </p>
            <p className="text-2xl font-black leading-none sm:text-[2rem]">
              {stat.value}
            </p>
            {stat.sub && (
              <p className="mt-1 text-xs font-bold opacity-90 sm:text-sm">
                {stat.sub}
              </p>
            )}
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default KeyStats;
