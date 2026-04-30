import HeaderBg from "../assets/images/new-headers/esg-aproach.jpg";
import NewHeader from "../modules/common/components/headers/NewHeader";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import { useLocale } from "../modules/common/hooks/useLocale";
import SmallContainer from "../modules/common/components/container/SmallContainer";
import AnimationSlideTop from "../modules/common/components/Animations/AnimationSlideTop";
import AnimationPopUp from "../modules/common/components/Animations/AnimationPopUp";

const PILLAR_COUNT = 5;

const OurESGApproachPage = () => {
  const { t } = useTranslation("esg-review");
  const { t: tCommon } = useTranslation("common");
  const { lang } = useLocale();
  const isAr = lang === "ar";

  const roadmapTitle = t("approach.roadmap.title");

  const renderRoadmapTitle = () => {
    if (isAr) {
      const splitIndex = roadmapTitle.indexOf("5");
      if (splitIndex !== -1) {
        return (
          <>
            <span>{roadmapTitle.slice(0, splitIndex)}</span>
            <span className="text-savola-green">
              {roadmapTitle.slice(splitIndex)}
            </span>
          </>
        );
      }
      return <span>{roadmapTitle}</span>;
    }
    return (
      <>
        <span>{roadmapTitle} </span>
        <span className="text-savola-green">
          {t("approach.roadmap.titleAfter")}
        </span>
      </>
    );
  };

  return (
    <div>
      <NewHeader
        imageUrl={HeaderBg}
        title={tCommon("nav.pages.our-esg-approach")}
      />

      <section className="py-20 bg-linear-to-b from-savola-orange-20 to-transparent">
        <SmallContainer>
          <AnimationSlideTop>
            <p className="text-xl md:text-2xl font-bold text-black leading-snug mb-10">
              {t("approach.intro")}
            </p>
          </AnimationSlideTop>
          {Array.from({ length: 2 }, (_, i) => (
            <AnimationSlideTop key={i}>
              <p className="text-black text-base leading-relaxed mb-6 last:mb-0">
                {t(`approach.paragraphs.${i}`)}
              </p>
            </AnimationSlideTop>
          ))}
        </SmallContainer>
      </section>

      <section className="pb-20">
        <SmallContainer>
          <AnimationSlideTop>
            <h3 className="text-xl md:text-2xl font-bold text-savola-navy mb-8">
              {renderRoadmapTitle()}
            </h3>
          </AnimationSlideTop>

          <div className="bg-savola-green">
            <div
              className={`grid grid-cols-5 py-3 ${isAr ? "flex-row-reverse" : ""}`}
            >
              {Array.from({ length: PILLAR_COUNT }, (_, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center p-6 text-center border-e border-white/20 last:border-e-0"
                >
                  <div className="w-14 h-14 rounded-full bg-linear-to-r from-white/50 to-white/0 flex items-center justify-center mb-4">
                    <AnimationPopUp>
                      <span className="text-white font-bold text-base">
                        {t(`approach.roadmap.pillars.${i}.index`)}
                      </span>
                    </AnimationPopUp>
                  </div>
                  <AnimationSlideTop>
                    <p className="text-white font-semibold text-sm leading-tight">
                      {t(`approach.roadmap.pillars.${i}.name`)}
                    </p>
                  </AnimationSlideTop>
                </div>
              ))}
            </div>
            <div className="px-6 py-4">
              <p className="text-white text-sm leading-relaxed">
                {t("approach.roadmap.note")}
              </p>
            </div>
          </div>
        </SmallContainer>
      </section>
    </div>
  );
};

export default OurESGApproachPage;
