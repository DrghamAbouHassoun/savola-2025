import { useState } from "react";
import HeaderBg from "../assets/images/new-headers/driving-environmental.jpg";
import NewHeader from "../modules/common/components/headers/NewHeader";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import { useLocale } from "../modules/common/hooks/useLocale";
import SmallContainer from "../modules/common/components/container/SmallContainer";
import AnimationSlideTop from "../modules/common/components/Animations/AnimationSlideTop";
import SBTiImage from "../assets/images/esg/science-based-targets.png";
import PandaStockEn from "../assets/images/esg/panda-stock.svg";
import PandaStockAr from "../assets/images/esg/panda-stock-ar.svg";

const CLIMATE_PARAGRAPHS = 3;
const CLEAN_ENERGY_PARAGRAPHS = 3;
const WASTE_PARAGRAPHS = 3;
const WATER_PARAGRAPHS = 5;
const PACKAGING_PARAGRAPHS = 7;

const MENU_ITEMS = [
  { key: "climatChange", labelKey: "environmental.climatChange.title" },
  { key: "cleanEnergy",  labelKey: "environmental.cleanEnergy.title" },
  { key: "waste",        labelKey: "environmental.waste.title" },
  { key: "water",        labelKey: "environmental.water.title" },
  { key: "packaging",    labelKey: "environmental.packaging.title" },
];

const DrivingEnvironmentalStewardshipPage = () => {
  const { t } = useTranslation("esg-review");
  const { lang } = useLocale();
  const isAr = lang === "ar";
  const [activeSection, setActiveSection] = useState(0);

  const SectionTitle = ({ translationKey }: { translationKey: string }) => (
    <div className="flex items-start gap-4 mb-4">
      <h2 className={`text-xl md:text-2xl font-bold text-savola-orange `}>
        {t(translationKey)}
      </h2>
    </div>
  );

  const SectionDesc = ({ text }: { text: string }) => (
    <p
      className="text-savola-cool-grey text-sm leading-relaxed mb-4"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );

  const ProgressSubtitle = ({ text }: { text: string }) => (
    <p className="text-savola-cool-grey font-bold text-sm ">{text}</p>
  );

  const SectionParagraph = ({ text }: { text: string }) => (
    <p
      className="text-savola-cool-grey text-sm leading-relaxed py-2"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );

  return (
    <div>
      <NewHeader imageUrl={HeaderBg} title={t("environmental.pageTitle")} />

      {/* Intro */}
      <div className="bg-linear-to-b from-savola-orange-20 to-transparent">
        <section className="py-20">
          <SmallContainer>
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <AnimationSlideTop className="flex-1">
                <p className="text-xl md:text-2xl font-bold text-black leading-snug">
                  {t("environmental.intro")}
                </p>
              </AnimationSlideTop>
              <AnimationSlideTop>
                <div className="w-full md:w-70 h-full flex items-stretch flex-col">
                  <p className="text-savola-cool-grey leading-relaxed mb-4">
                    {t("environmental.SBTi.text")}
                  </p>
                  <img
                    src={SBTiImage}
                    alt="Science Based Targets"
                    className="w-full object-contain max-w-40 mx-auto"
                  />
                </div>
              </AnimationSlideTop>
            </div>
          </SmallContainer>
        </section>

        {/* Tabbed sections with left sidebar menu */}
        <section className="pb-20">
          <SmallContainer>
            <div className={`flex flex-col md:flex-row gap-8 items-start `}>

              {/* Left sidebar menu */}
              <div className="w-full md:w-64 shrink-0 md:sticky md:top-4">
                <nav className="flex flex-col overflow-x-auto md:overflow-visible gap-1 pb-2 md:pb-0">
                  {MENU_ITEMS.map((item, idx) => (
                    <button
                      key={item.key}
                      onClick={() => setActiveSection(idx)}
                      className={`text-start px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 w-auto md:w-full shrink-0 md:shrink ${
                        activeSection === idx
                          ? "bg-savola-orange text-white"
                          : "text-savola-cool-grey hover:bg-savola-orange-20 hover:text-savola-orange"
                      }`}
                    >
                      {t(item.labelKey)}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Right content area */}
              <div className="flex-1 min-w-0">

                {/* Climate Change and Emissions */}
                {activeSection === 0 && (
                  <div>
                    <AnimationSlideTop>
                      <SectionTitle translationKey="environmental.climatChange.title" />
                    </AnimationSlideTop>
                    <AnimationSlideTop>
                      <SectionDesc text={t("environmental.climatChange.desc")} />
                    </AnimationSlideTop>
                    <AnimationSlideTop>
                      <ProgressSubtitle text={t("environmental.climatChange.subtitle")} />
                    </AnimationSlideTop>
                    {Array.from({ length: CLIMATE_PARAGRAPHS }, (_, i) => (
                      <AnimationSlideTop key={i}>
                        <SectionParagraph text={t(`environmental.climatChange.paragraphs.${i}`)} />
                      </AnimationSlideTop>
                    ))}
                  </div>
                )}

                {/* Clean and Efficient Energy */}
                {activeSection === 1 && (
                  <div>
                    <AnimationSlideTop>
                      <SectionTitle translationKey="environmental.cleanEnergy.title" />
                    </AnimationSlideTop>
                    <AnimationSlideTop>
                      <SectionDesc text={t("environmental.cleanEnergy.desc")} />
                    </AnimationSlideTop>
                    <AnimationSlideTop>
                      <ProgressSubtitle text={t("environmental.cleanEnergy.subtitle")} />
                    </AnimationSlideTop>
                    {Array.from({ length: CLEAN_ENERGY_PARAGRAPHS }, (_, i) => (
                      <AnimationSlideTop key={i}>
                        <SectionParagraph text={t(`environmental.cleanEnergy.paragraphs.${i}`)} />
                      </AnimationSlideTop>
                    ))}
                  </div>
                )}

                {/* Waste and Circular Economy */}
                {activeSection === 2 && (
                  <div>
                    <AnimationSlideTop>
                      <SectionTitle translationKey="environmental.waste.title" />
                    </AnimationSlideTop>
                    <div className="flex flex-col md:flex-row gap-10 items-start">
                      <div className="flex-1">
                        <AnimationSlideTop>
                          <SectionDesc text={t("environmental.waste.desc")} />
                        </AnimationSlideTop>
                        <AnimationSlideTop>
                          <SectionDesc text={t("environmental.waste.desc2")} />
                        </AnimationSlideTop>
                        <AnimationSlideTop>
                          <ProgressSubtitle text={t("environmental.waste.subtitle")} />
                        </AnimationSlideTop>
                        {Array.from({ length: WASTE_PARAGRAPHS }, (_, i) => (
                          <AnimationSlideTop key={i}>
                            <SectionParagraph text={t(`environmental.waste.paragraphs.${i}`)} />
                          </AnimationSlideTop>
                        ))}
                      </div>
                      <AnimationSlideTop>
                        <div className="shrink-0 w-full md:w-56">
                          <img
                            src={isAr ? PandaStockAr : PandaStockEn}
                            alt="Panda stock loss"
                            className="w-full object-contain"
                          />
                        </div>
                      </AnimationSlideTop>
                    </div>
                  </div>
                )}

                {/* Water */}
                {activeSection === 3 && (
                  <div>
                    <AnimationSlideTop>
                      <SectionTitle translationKey="environmental.water.title" />
                    </AnimationSlideTop>
                    <AnimationSlideTop>
                      <SectionDesc text={t("environmental.water.desc")} />
                    </AnimationSlideTop>
                    <AnimationSlideTop>
                      <SectionDesc text={t("environmental.water.desc2")} />
                    </AnimationSlideTop>
                    <AnimationSlideTop>
                      <ProgressSubtitle text={t("environmental.water.subtitle")} />
                    </AnimationSlideTop>
                    {Array.from({ length: WATER_PARAGRAPHS }, (_, i) => (
                      <AnimationSlideTop key={i}>
                        <SectionParagraph text={t(`environmental.water.paragraphs.${i}`)} />
                      </AnimationSlideTop>
                    ))}
                  </div>
                )}

                {/* Sustainable Packaging */}
                {activeSection === 4 && (
                  <div>
                    <AnimationSlideTop>
                      <SectionTitle translationKey="environmental.packaging.title" />
                    </AnimationSlideTop>
                    <AnimationSlideTop>
                      <SectionDesc text={t("environmental.packaging.desc")} />
                    </AnimationSlideTop>
                    <AnimationSlideTop>
                      <SectionDesc text={t("environmental.packaging.desc2")} />
                    </AnimationSlideTop>
                    <AnimationSlideTop>
                      <ProgressSubtitle text={t("environmental.packaging.subtitle")} />
                    </AnimationSlideTop>
                    {Array.from({ length: PACKAGING_PARAGRAPHS }, (_, i) => (
                      <AnimationSlideTop key={i}>
                        <SectionParagraph text={t(`environmental.packaging.paragraphs.${i}`)} />
                      </AnimationSlideTop>
                    ))}
                  </div>
                )}

              </div>
            </div>
          </SmallContainer>
        </section>
      </div>
    </div>
  );
};

export default DrivingEnvironmentalStewardshipPage;
