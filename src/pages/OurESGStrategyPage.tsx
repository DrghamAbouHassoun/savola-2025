import HeaderBg from "../assets/images/new-headers/esg-strategy.jpg";
import NewHeader from "../modules/common/components/headers/NewHeader";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import { useLocale } from "../modules/common/hooks/useLocale";
import SmallContainer from "../modules/common/components/container/SmallContainer";
import AnimationSlideTop from "../modules/common/components/Animations/AnimationSlideTop";
import SpikesImage from "../assets/vectors/esg/group-of-spikes.png";

const PILLAR_COUNT = 3;

const getIconUrl = (index: number) =>
  new URL(`../assets/icons/esg/strategy/${index}.svg`, import.meta.url).href;

const OurESGStrategyPage = () => {
  const { t, tArray } = useTranslation("esg-review");
  const { t: tCommon } = useTranslation("common");
  const { lang } = useLocale();
  const isAr = lang === "ar";

  return (
    <div>
      <NewHeader
        imageUrl={HeaderBg}
        title={tCommon("nav.pages.our-esg-strategy")}
      />

      <section className="pt-20 bg-linear-to-b from-savola-orange-20 to-transparent">
        <SmallContainer>
          <AnimationSlideTop>
            <p className="text-xl md:text-2xl font-bold text-black leading-snug mb-16">
              {t("strategy.intro")}
            </p>
          </AnimationSlideTop>

          {/* Framework & Vision header */}
          <AnimationSlideTop>
            <div
              className={`flex items-start gap-6 mb-10`}
            >
              <div className={``}>
                <h3 className="text-xl md:text-2xl font-bold text-savola-orange leading-tight max-w-50">
                  {t("strategy.frameWorkAndVision.framework")}
                </h3>
              </div>
              <div className={`h-full `}>
                <div
                  className={` border-savola-green  border-s-2 ps-4`}
                >
                  <div className="flex gap-4 h-full">
                    <span className="text-savola-green font-semibold text-xl block mb-1 max-w-20">
                      {t("strategy.frameWorkAndVision.vision.title")}
                    </span>
                    <p className="text-savola-cool-grey leading-snug max-w-xs">
                      {t("strategy.frameWorkAndVision.vision.subtitle")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimationSlideTop>

          {/* Pillars */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 border border-savola-cool-grey-10`}
          >
            {Array.from({ length: PILLAR_COUNT }, (_, i) => {
              const iconsIndexes = tArray(`strategy.pillars.${i}.iconsIndexes`);
              return (
                <AnimationSlideTop key={i}>
                  <div
                    className={`flex flex-col p-6 h-full bg-linear-to-b divide-y text-center ${
                      i === 0 ? 
                      "from-savola-cool-grey-10 to-savola-cool-grey-10/0" :
                      i === 1 ?
                      "from-savola-orange-20 to-savola-orange-20/0 divide-savola-orange" :
                      "from-savola-green-50 to-savola-green-50/0 divide-savola-green"
                    }`}
                  >
                    <h4 className="font-bold text-sm text-savola-navy leading-snug text-center pb-4">
                      {t(`strategy.pillars.${i}.title`)}
                    </h4>
                    <div>
                    {isAr && (
                      <span className="text-savola-cool-grey text-xs font-semibold pt-4 block">
                        {t(`strategy.pillars.${i}.description`)}
                      </span>
                    )}
                    <p className="text-savola-cool-grey text-xs leading-relaxed flex-1 py-4">
                      {t(`strategy.pillars.${i}.subtitle`)}
                    </p>
                    </div>
                    <div
                      className={`flex flex-wrap gap-2 mt-6 ${isAr ? "justify-end" : "justify-start"}`}
                    >
                      {iconsIndexes.map((iconIdx) => (
                        <img
                          key={iconIdx}
                          src={getIconUrl(Number(iconIdx))}
                          alt={`SDG ${iconIdx}`}
                          className="w-8 h-8 object-contain"
                        />
                      ))}
                    </div>
                  </div>
                </AnimationSlideTop>
              );
            })}
          </div>

          {/* Drivers + Spikes image */}
          <div
            className={`flex items-start flex-col md:flex-row gap-10`}
          >
            <div className="flex-1">
              <AnimationSlideTop>
                <h4
                  className={`text-savola-orange font-bold text-lg mb-4 ${isAr ? "text-end" : ""}`}
                >
                  {t("strategy.driversText")}
                </h4>
              </AnimationSlideTop>
              <ul className={`space-y-2 ${isAr ? "text-end" : ""}`}>
                {Array.from({ length: 6 }, (_, i) => (
                  <AnimationSlideTop key={i}>
                    <li
                      className={`flex items-start justify-start text-start gap-2 text-savola-cool-grey text-sm border-b border-savola-green`}
                    >
                      <span className="mt-1 shrink-0">•</span>
                      <span>{t(`strategy.drivers.${i}`)}</span>
                    </li>
                  </AnimationSlideTop>
                ))}
              </ul>
            </div>
            <div className="w-auto h-full shrink-0 flex-1">
              <img
                src={SpikesImage}
                alt="wheat spikes"
                className="w-full object-contain"
              />
            </div>
          </div>
        </SmallContainer>
      </section>
    </div>
  );
};

export default OurESGStrategyPage;
