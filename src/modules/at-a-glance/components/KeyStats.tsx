import AnimationPopUp from "../../common/components/Animations/AnimationPopUp";
import SmallContainer from "../../common/components/container/SmallContainer";
import { useTranslation } from "../../common/hooks/useTranslation";

const KeyStats = ({ column = false }: { column?: boolean }) => {
  const { t } = useTranslation("at-a-glance");

  const STATS = [
    {
      id: "panda-loyalty",
      bg: "bg-savola-orange",
      label: t("keyStats.stat1Label"),
      value: t("keyStats.stat1Value"),
      sub: t("keyStats.stat1Sub"),
      textColor: "text-white",
    },
    {
      id: "production",
      bg: "bg-savola-green",
      label: t("keyStats.stat2Label"),
      value: t("keyStats.stat2Value"),
      sub: t("keyStats.stat2Sub"),
      textColor: "text-white",
    },
    {
      id: "energy",
      bg: "bg-savola-cool-grey/20",
      label: t("keyStats.stat3Label"),
      value: t("keyStats.stat3Value"),
      sub: "",
      textColor: "text-savola-cool-grey",
    },
  ];

  if (column) {
    return (
      <div className="flex flex-col items-center gap-5 xl:gap-6">
        {STATS.map((stat) => (
          <AnimationPopUp
            key={stat.id}
            className={`${stat.bg} ${stat.textColor} flex h-40 w-40 xl:h-44 xl:w-44 flex-col items-center justify-center rounded-full p-5 text-center shadow-[0_18px_35px_rgba(78,95,109,0.08)]`}
          >
            <p className="mb-3 max-w-28 leading-snug opacity-90 text-xs xl:text-sm">
              {stat.label}
            </p>
            <p
              className="font-black leading-none"
              dangerouslySetInnerHTML={{ __html: stat.value }}
            ></p>
            {stat.sub && (
              <p className="mt-1 text-xs font-bold opacity-90">
                {stat.sub}
              </p>
            )}
          </AnimationPopUp>
        ))}
      </div>
    );
  }

  return (
    <section className="bg-white py-10 md:py-14">
      <SmallContainer>
        <div className="flex flex-wrap justify-between gap-6 md:gap-10">
          {STATS.map((stat) => (
            <AnimationPopUp
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
            </AnimationPopUp>
          ))}
        </div>
      </SmallContainer>
    </section>
  );
};

export default KeyStats;
