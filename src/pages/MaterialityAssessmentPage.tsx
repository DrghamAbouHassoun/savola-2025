import HeaderBg from "../assets/images/new-headers/materiality.jpg";
import NewHeader from "../modules/common/components/headers/NewHeader";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import { useLocale } from "../modules/common/hooks/useLocale";
import SmallContainer from "../modules/common/components/container/SmallContainer";
import AnimationSlideTop from "../modules/common/components/Animations/AnimationSlideTop";
import FlowerImage from "../assets/icons/flower.svg";
import ChartEn from "../assets/vectors/esg/materiality-chart-en.svg";
import ChartAr from "../assets/vectors/esg/materiality-chart-ar.svg";

const getMaterialityIconUrl = (index: number) =>
  new URL(`../assets/icons/esg/materiality/${index}.svg`, import.meta.url).href;

const MOST_IMPORTANT_COUNT = 6;
const VERY_IMPORTANT_COUNT = 5;
const IMPORTANT_COUNT = 5;

const MaterialityAssessmentPage = () => {
  const { t } = useTranslation("esg-review");
  const { lang } = useLocale();
  const isAr = lang === "ar";

  const keyColorClass: Record<string, string> = {
    grey: "bg-savola-navy",
    green: "bg-savola-green",
    orange: "bg-savola-orange",
  };

  return (
    <div>
      <NewHeader imageUrl={HeaderBg} title={t("materiality.pageTitle")} />

      <div className="bg-linear-to-b from-savola-orange-20 to-transparent">
        {/* Intro */}
        <section className="py-20 ">
          <SmallContainer>
            <AnimationSlideTop>
              <p className="text-xl md:text-2xl font-semibold text-black leading-snug">
                {t("materiality.intro")}
              </p>
            </AnimationSlideTop>
          </SmallContainer>
        </section>

        {/* Materiality Matrix */}
        <section className="pb-20">
          <SmallContainer>
            {/* Section header */}
            <AnimationSlideTop>
              <div
                className={`flex items-start gap-4 mb-10 `}
              >
                <img
                  src={FlowerImage}
                  alt=""
                  className="w-12 h-12 object-contain shrink-0"
                />
                <div className={isAr ? "text-end" : ""}>
                  <h3 className="text-xl font-bold text-savola-green mb-1">
                    {t("materiality.matrix.title")}
                  </h3>
                  <p className="text-savola-cool-grey text-sm leading-relaxed max-w-xl">
                    {t("materiality.matrix.subtitle")}
                  </p>
                </div>
              </div>
            </AnimationSlideTop>

            {/* Chart */}
            <AnimationSlideTop>
              <div className="mb-12 max-w-170">
                <img
                  src={isAr ? ChartAr : ChartEn}
                  alt="Materiality Matrix Chart"
                  className="w-full object-contain"
                />
              </div>
            </AnimationSlideTop>

            {/* Legend columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-220">
              {/* Most Important */}
              <div>
                <AnimationSlideTop>
                  <div className="bg-linear-to-r from-savola-green to-savola-green via-white text-black text-center py-2 px-4 font-semibold text-sm rounded-full mb-5">
                    {t("materiality.points.mostImportant.title")}
                  </div>
                </AnimationSlideTop>
                <div className="space-y-4">
                  {Array.from({ length: MOST_IMPORTANT_COUNT }, (_, i) => (
                    <AnimationSlideTop key={i}>
                      <div
                        className={`flex items-start gap-2 `}
                      >
                        <img
                          src={getMaterialityIconUrl(i + 1)}
                          alt={`${i + 1}`}
                          className="w-7 h-7 shrink-0"
                        />
                        <span
                          className={`text-xs text-savola-cool-grey leading-tight ${isAr ? "text-end" : ""}`}
                        >
                          {t(
                            `materiality.points.mostImportant.list.${i}.title`,
                          )}
                        </span>
                      </div>
                    </AnimationSlideTop>
                  ))}
                </div>
              </div>

              {/* Very Important */}
              <div>
                <AnimationSlideTop>
                  <div className="bg-linear-to-r from-savola-orange to-savola-orange via-white text-black text-center py-2 px-4 font-semibold text-sm rounded-full mb-5">
                    {t("materiality.points.veryImportant.title")}
                  </div>
                </AnimationSlideTop>
                <div className="space-y-4">
                  {Array.from({ length: VERY_IMPORTANT_COUNT }, (_, i) => (
                    <AnimationSlideTop key={i}>
                      <div
                        className={`flex items-start gap-2`}
                      >
                        <img
                          src={getMaterialityIconUrl(i + 7)}
                          alt={`${i + 7}`}
                          className="w-7 h-7 shrink-0"
                        />
                        <span
                          className={`text-xs text-savola-cool-grey leading-tight ${isAr ? "text-end" : ""}`}
                        >
                          {t(
                            `materiality.points.veryImportant.list.${i}.title`,
                          )}
                        </span>
                      </div>
                    </AnimationSlideTop>
                  ))}
                </div>
              </div>

              {/* Important */}
              <div>
                <AnimationSlideTop>
                  <div className="bg-linear-to-r from-savola-cool-grey to-savola-cool-grey via-white text-black text-center py-2 px-4 font-semibold text-sm rounded-full mb-5">
                    {t("materiality.points.important.title")}
                  </div>
                </AnimationSlideTop>
                <div className="space-y-4">
                  {Array.from({ length: IMPORTANT_COUNT }, (_, i) => (
                    <AnimationSlideTop key={i}>
                      <div
                        className={`flex items-start gap-2 `}
                      >
                        <img
                          src={getMaterialityIconUrl(i + 12)}
                          alt={`${i + 12}`}
                          className="w-7 h-7 shrink-0"
                        />
                        <span
                          className={`text-xs text-savola-cool-grey leading-tight ${isAr ? "text-end" : ""}`}
                        >
                          {t(`materiality.points.important.list.${i}.title`)}
                        </span>
                      </div>
                    </AnimationSlideTop>
                  ))}
                </div>
              </div>
            </div>

            {/* Color key */}
            <AnimationSlideTop>
              <div
                className={`flex items-center gap-8`}
              >
                {Array.from({ length: 3 }, (_, i) => {
                  const color = t(`materiality.points.keys.${i}.color`);
                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-2`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full shrink-0 ${keyColorClass[color] ?? "bg-savola-navy"}`}
                      />
                      <span className="text-savola-cool-grey text-sm font-medium">
                        {t(`materiality.points.keys.${i}.text`)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </AnimationSlideTop>
          </SmallContainer>
        </section>
      </div>
    </div>
  );
};

export default MaterialityAssessmentPage;
