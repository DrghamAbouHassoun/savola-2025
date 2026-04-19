import SmallContainer from "../../common/components/container/SmallContainer";
import { useTranslation } from "../../common/hooks/useTranslation";

const KeyStats = () => {
  const { t } = useTranslation("at-a-glance");

  const STATS = [
    {
      id: "panda-loyalty",
      bg: "bg-savola-orange",
      label: t("keyStats.stat1Label"),
      value: "14MN",
      sub: t("keyStats.stat1Sub"),
      textColor: "text-white",
    },
    {
      id: "production",
      bg: "bg-savola-green",
      label: t("keyStats.stat2Label"),
      value: "3.74 MN",
      sub: t("keyStats.stat2Sub"),
      textColor: "text-white",
    },
    {
      id: "energy",
      bg: "bg-savola-cool-grey/20",
      label: t("keyStats.stat3Label"),
      value: '<i class="riyal-icon"></i> 104 MN',
      sub: "",
      textColor: "text-savola-cool-grey",
    },
  ];

  return (
    <section className="bg-white py-10 md:py-14">
      <SmallContainer>
        <div className="flex flex-wrap justify-between gap-6 md:gap-10">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              className={`${stat.bg} ${stat.textColor} flex h-40 w-40 flex-col items-center justify-center rounded-full p-6 text-center shadow-[0_18px_35px_rgba(78,95,109,0.08)] sm:h-48 sm:w-48 md:h-52 md:w-52`}
            >
              <p className="mb-3 max-w-34 leading-snug opacity-90 text-sm">
                {stat.label}
              </p>
              <p
                className=" font-black leading-none"
                dangerouslySetInnerHTML={{ __html: stat.value }}
              ></p>
              {stat.sub && (
                <p className="mt-1 text-xs font-bold opacity-90 sm:text-sm">
                  {stat.sub}
                </p>
              )}
            </div>
          ))}
        </div>
      </SmallContainer>
    </section>
  );
};

export default KeyStats;
