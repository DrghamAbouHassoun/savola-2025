import { useState } from "react";
import JourneyBg from "../assets/images/new-headers/journey.jpg";
import NewHeader from "../modules/common/components/headers/NewHeader";
import SmallContainer from "../modules/common/components/container/SmallContainer";
import AnimationSlideTop from "../modules/common/components/Animations/AnimationSlideTop";
import AnimationFadeIn from "../modules/common/components/Animations/AnimationFadeIn";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import QuoteIcon from "../assets/icons/qoute.png";
import { useLocale } from "../modules/common/hooks/useLocale";

const SavolaGroupsTransformationJourneyPage = () => {
  const { t, tArray } = useTranslation("strategic-review");
  const { lang } = useLocale();
  const [activeTab, setActiveTab] = useState(0);

  const section1 = {
    title: t("journey.section1.title"),
    quote: {
      text: t("journey.section1.qoute.text"),
      name: t("journey.section1.qoute.name"),
      position: t("journey.section1.qoute.position"),
    },
    d1: {
      title: t("journey.section1.d1.title"),
      desc: t("journey.section1.d1.desc"),
    },
    d2: {
      title: t("journey.section1.d2.title"),
      desc: t("journey.section1.d2.desc"),
    },
    d3: {
      title: t("journey.section1.d3.title"),
      p1: t("journey.section1.d3.p1"),
      p2: t("journey.section1.d3.p2"),
    },
    whatChanged: {
      title: t("journey.section1.whatChanged.title"),
      desc: t("journey.section1.whatChanged.desc"),
      list: tArray("journey.section1.whatChanged.list"),
      card1: {
        title: t("journey.section1.whatChanged.card1.title"),
        subtitle: t("journey.section1.whatChanged.card1.subtitle"),
        list: tArray("journey.section1.whatChanged.card1.list"),
      },
      card2: {
        title: t("journey.section1.whatChanged.card2.title"),
        list: tArray("journey.section1.whatChanged.card2.list"),
      },
    },
  };

  const section2 = {
    title: t("journey.section2.savloaGroupJourney.title"),
    quote: {
      text: t("journey.section2.qoute.text"),
      name: t("journey.section2.qoute.name"),
      position: t("journey.section2.qoute.position"),
    },
    portfolio: {
      pre2024: t("journey.section2.portfolio.pre2024"),
      y2024: t("journey.section2.portfolio.y2024"),
      y2025: t("journey.section2.portfolio.y2025"),
      lookingAhed: t("journey.section2.portfolio.lookingAhed"),
      lookingAhedPart: {
        title: t("journey.section2.portfolio.lookingAhedPart.title"),
        desc: t("journey.section2.portfolio.lookingAhedPart.desc"),
      },
    },
    journey: {
      strategicPhaseText: t(
        "journey.section2.savloaGroupJourney.strategicPhaseText",
      ),
      netIncomeText: t("journey.section2.savloaGroupJourney.netIncomeText"),
      keyChallengesText: t(
        "journey.section2.savloaGroupJourney.keyChallengesText",
      ),
      tabs: [0, 1, 2].map((i) => ({
        title: t(`journey.section2.savloaGroupJourney.tabs.${i}.title`),
        strategicPhase: t(
          `journey.section2.savloaGroupJourney.tabs.${i}.strategicPhase.text`,
        ),
        netIncome: tArray(
          `journey.section2.savloaGroupJourney.tabs.${i}.netIncome.list`,
        ),
        keyChallenges: tArray(
          `journey.section2.savloaGroupJourney.tabs.${i}.keyChallenges.list`,
        ),
      })),
    },
  };

  const QuoteBlock = ({
    text,
    name,
    position,
  }: {
    text: string;
    name: string;
    position: string;
  }) => (
    <div className="bg-linear-to-b from-savola-green-50 to-savola-green-50/0 p-8 my-8">
      <img src={QuoteIcon} alt="" className="w-10 mb-4" />
      <p
        className="font-bold text-savola-navy text-base md:text-lg leading-relaxed italic"
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <p className="font-bold text-savola-cool-grey mt-4">{name}</p>
      <p className="text-savola-cool-grey text-sm">{position}</p>
    </div>
  );

  const activeTabData = section2.journey.tabs[activeTab];

  return (
    <div>
      <NewHeader imageUrl={JourneyBg} title={t("journey.pageTitle")} />

      <div className="bg-linear-to-b from-savola-orange-20 to-savola-orange-20/0">
        {/* Section 1 */}
        <div className="py-16">
          <SmallContainer>
            <AnimationSlideTop>
              <h1 className="text-savola-green font-bold text-3xl md:text-4xl mb-8">
                {section1.title}
              </h1>
            </AnimationSlideTop>

            <AnimationFadeIn>
              <QuoteBlock
                text={section1.quote.text}
                name={section1.quote.name}
                position={section1.quote.position}
              />
            </AnimationFadeIn>

            <div className="space-y-8 text-sm">
              <AnimationSlideTop style={{ animationDelay: "0.1s" }}>
                <h3 className="font-extrabold text-savola-cool-grey mb-2">
                  {section1.d1.title}
                </h3>
                <p className="text-savola-cool-grey leading-relaxed">
                  {section1.d1.desc}
                </p>
              </AnimationSlideTop>

              <AnimationSlideTop style={{ animationDelay: "0.2s" }}>
                <h3 className="font-extrabold text-savola-cool-grey mb-2">
                  {section1.d2.title}
                </h3>
                <p className="text-savola-cool-grey leading-relaxed">
                  {section1.d2.desc}
                </p>
              </AnimationSlideTop>

              <AnimationSlideTop style={{ animationDelay: "0.3s" }}>
                <h3 className="font-extrabold text-savola-cool-grey mb-2">
                  {section1.d3.title}
                </h3>
                <p className="text-savola-cool-grey leading-relaxed mb-4">
                  {section1.d3.p1}
                </p>
                <p className="text-savola-cool-grey leading-relaxed">
                  {section1.d3.p2}
                </p>
              </AnimationSlideTop>
            </div>

            {/* What Changed */}
            <AnimationSlideTop
              style={{ animationDelay: "0.4s" }}
              className="mt-12"
            >
              <h3 className="font-extrabold text-savola-cool-grey text-base mb-2">
                {section1.whatChanged.title}
              </h3>
              <p className="text-savola-cool-grey text-sm leading-relaxed mb-6">
                {section1.whatChanged.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {section1.whatChanged.list.map((item, i) => (
                  <div
                    key={i}
                    className="bg-linear-to-b from-savola-green-20 to-savola-green-20/0 p-4 text-savola-cool-grey text-sm leading-relaxed"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="bg-savola-cool-grey/10 rounded-xl p-6">
                  <div className="bg-linear-to-l from-savola-orange/20 to-savola-orange/0 rounded-xl w-fit pr-4 py-0.5">
                    <p className=" font-extrabold text-sm mb-1">
                      {section1.whatChanged.card1.title}
                    </p>
                    <p className="text-savola-cool-grey text-xs mb-3">
                      {section1.whatChanged.card1.subtitle}
                    </p>
                  </div>
                  <ul className="space-y-1">
                    {section1.whatChanged.card1.list.map((item, i) => (
                      <li
                        key={i}
                        className="text-savola-cool-grey text-sm flex items-start gap-2"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-savola-cool-grey shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card 2 */}
                <div className="bg-savola-cool-grey/10 rounded-xl p-6">
                  <p className="font-extrabold text-sm mb-3">
                    {section1.whatChanged.card2.title}
                  </p>
                  <ul className="space-y-1">
                    {section1.whatChanged.card2.list.map((item, i) => (
                      <li
                        key={i}
                        className="text-savola-cool-grey text-sm flex items-start gap-2"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-savola-cool-grey" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimationSlideTop>
          </SmallContainer>
        </div>

        {/* Section 2 */}
        <div className="py-16">
          <SmallContainer>
            <AnimationSlideTop>
              <h2
                className="text-savola-green font-extrabold text-3xl md:text-4xl mb-8"
                dangerouslySetInnerHTML={{ __html: section2.title }}
              />
            </AnimationSlideTop>

            <AnimationFadeIn>
              <QuoteBlock
                text={section2.quote.text}
                name={section2.quote.name}
                position={section2.quote.position}
              />
            </AnimationFadeIn>

            {/* Portfolio timeline pills */}
            <AnimationSlideTop
              style={{ animationDelay: "0.1s" }}
              className="my-8 space-y-3"
            >
              {[
                section2.portfolio.pre2024,
                section2.portfolio.y2024,
                section2.portfolio.y2025,
                section2.portfolio.lookingAhed,
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg px-4 py-3 text-savola-cool-grey text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </AnimationSlideTop>

            {/* Looking Ahead */}
            <AnimationSlideTop
              style={{ animationDelay: "0.2s" }}
              className="mb-12"
            >
              <h3 className="font-extrabold text-savola-cool-grey mb-3">
                {section2.portfolio.lookingAhedPart.title}
              </h3>
              <p className="text-savola-cool-grey text-sm leading-relaxed">
                {section2.portfolio.lookingAhedPart.desc}
              </p>
            </AnimationSlideTop>

            {/* Journey Table */}
            <AnimationFadeIn>
              {/* Tabs */}
              <div className="flex justify-center gap-2 mb-6">
                {section2.journey.tabs.map((tab, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`px-8 py-2 ${lang === "ar" ? "rounded-bl-2xl" : "rounded-br-2xl"} text-lg font-bold transition-colors text-savola-cool-grey ${
                      activeTab === i
                        ? "bg-savola-green"
                        : "bg-savola-cool-grey-7 hover:bg-savola-green-50"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Table body */}
              <div className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
                  {/* Headers */}

                  {/* Strategic Phase */}
                  <div className={`p-4 pb-16 ${lang === "ar" ? "bg-linear-to-l rounded-br-[64px]" : "bg-linear-to-r"} from-savola-green-20 to-savola-green-20/0`}>
                    <div className="mb-4">
                      <p className="font-bold text-savola-cool-grey text-lg">
                        {section2.journey.strategicPhaseText}
                      </p>
                    </div>
                    <p className="text-savola-cool-grey text-sm leading-relaxed">
                      {activeTabData.strategicPhase}
                    </p>
                  </div>

                  {/* Net Income */}
                  <div className={`p-4 pb-16 ${lang === "ar" ? "bg-linear-to-l rounded-br-[64px]" : "bg-linear-to-r"} from-savola-orange-20 to-savola-orange-20/0`}>
                    <div className="mb-4">
                      <p
                        className="font-bold text-savola-cool-grey text-lg"
                        dangerouslySetInnerHTML={{
                          __html: section2.journey.netIncomeText,
                        }}
                      ></p>
                    </div>
                    <ul className="space-y-1">
                      {activeTabData.netIncome.map((item, i) => (
                        <li
                          key={i}
                          className="text-savola-cool-grey text-sm flex items-start gap-2"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-savola-cool-grey shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Challenges */}
                  <div className={`p-4 pb-16 ${lang === "ar" ? "bg-linear-to-l rounded-br-[64px]" : "bg-linear-to-r"} from-savola-cool-grey-10 to-savola-cool-grey-10/0`}>
                    <div className="mb-4">
                      <p className="font-bold text-savola-cool-grey text-lg">
                        {section2.journey.keyChallengesText}
                      </p>
                    </div>

                    <ul className="space-y-2">
                      {activeTabData.keyChallenges.map((item, i) => (
                        <li
                          key={i}
                          className="text-savola-cool-grey text-sm flex items-start gap-2 [&_ul]:list-disc [&_ul]:ps-4 [&_ul]:mt-1 [&_ul]:space-y-1"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-savola-cool-grey shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: item }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimationFadeIn>
          </SmallContainer>
        </div>
      </div>
    </div>
  );
};

export default SavolaGroupsTransformationJourneyPage;
