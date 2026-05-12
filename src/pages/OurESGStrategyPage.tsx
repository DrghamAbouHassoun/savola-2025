import HeaderBg from "../assets/images/new-headers/esg-strategy.jpg";
import NewHeader from "../modules/common/components/headers/NewHeader";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import { useLocale } from "../modules/common/hooks/useLocale";
import SmallContainer from "../modules/common/components/container/SmallContainer";
import AnimationSlideTop from "../modules/common/components/Animations/AnimationSlideTop";
import SpikesImage from "../assets/vectors/esg/group-of-spikes.png";
import { useState } from "react";

const PILLAR_COUNT = 3;

const getIconUrl = (index: number) =>
  new URL(`../assets/icons/esg/strategy/${index}.svg`, import.meta.url).href;

const pillarDividerColor = (i: number) =>
  i === 1 ? "border-savola-orange" : i === 2 ? "border-savola-green" : "border-savola-cool-grey";

const OurESGStrategyPage = () => {
  const { t, tArray } = useTranslation("esg-review");
  const { t: tCommon } = useTranslation("common");
  const { lang } = useLocale();
  const isAr = lang === "ar";
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);
  const [lockedPillar, setLockedPillar] = useState<number | null>(null);

  const isPillarOpen = (i: number) => hoveredPillar === i || lockedPillar === i;

  const handlePillarClick = (i: number) => {
    setLockedPillar((prev) => (prev === i ? null : i));
  };

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
              className={`flex items-center gap-6 mb-10`}
            >
              <div className={``}>
                <h3 className="text-xl md:text-3xl font-bold text-savola-orange leading-tight max-w-50">
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
                    <p className="text-savola-cool-grey font-semibold text-xl leading-snug max-w-xs">
                      {t("strategy.frameWorkAndVision.vision.subtitle")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimationSlideTop>

          {/* Pillars */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 border border-savola-cool-grey-10 min-h-40`}
          >
            {Array.from({ length: PILLAR_COUNT }, (_, i) => {
              const iconsIndexes = tArray(`strategy.pillars.${i}.iconsIndexes`);
              const isOpen = isPillarOpen(i);
              return (
                <AnimationSlideTop key={i}>
                  <div
                    className={`flex flex-col p-6 bg-linear-to-b text-center cursor-pointer select-none transition-shadow duration-300 ${
                      i === 0
                        ? "from-savola-cool-grey-10 to-savola-cool-grey-10/0"
                        : i === 1
                        ? "from-savola-orange-20 to-savola-orange-20/0"
                        : "from-savola-green-50 to-savola-green-50/0"
                    }`}
                    onMouseEnter={() => setHoveredPillar(i)}
                    onMouseLeave={() => setHoveredPillar(null)}
                    onClick={() => handlePillarClick(i)}
                  >
                    <h4 className="font-bold text-sm text-savola-navy leading-snug text-center pb-4">
                      {t(`strategy.pillars.${i}.title`)}
                    </h4>

                    {/* Animated divider between title and body */}
                    <div
                      className={`border-t transition-all duration-500 ${isAr ? "origin-right" : "origin-left"} ${pillarDividerColor(i)} ${
                        isOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                      }`}
                    />

                    {/* Expandable content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
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

                      {/* Animated divider before SDG icons */}
                      <div
                        className={`border-t transition-all duration-700 delay-100 ${isAr ? "origin-right" : "origin-left"} ${pillarDividerColor(i)} ${
                          isOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                        }`}
                      />

                      <div
                        className={`flex flex-wrap gap-2 mt-2 pt-2 ${isAr ? "justify-end" : "justify-start"}`}
                      >
                        {iconsIndexes.map((iconIdx) => (
                          <img
                            key={iconIdx}
                            src={getIconUrl(Number(iconIdx))}
                            alt={`SDG ${iconIdx}`}
                            className="w-10 h-10 object-contain"
                          />
                        ))}
                      </div>
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
                  className={`text-savola-orange font-bold text-lg mb-4`}
                >
                  {t("strategy.driversText")}
                </h4>
              </AnimationSlideTop>
              <ul className={`space-y-2 ${isAr ? "text-end" : ""}`}>
                {Array.from({ length: 6 }, (_, i) => (
                  <AnimationSlideTop key={i}>
                    <li
                      className={`flex items-center justify-start text-start gap-2 text-savola-cool-grey text-sm border-b border-savola-green`}
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
                className="w-full max-w-90 object-contain"
                style={{ animation: "spike-wave 6s ease-in-out infinite", transformOrigin: "bottom" }}
              />
            </div>
          </div>
        </SmallContainer>
      </section>
    </div>
  );
};

export default OurESGStrategyPage;
