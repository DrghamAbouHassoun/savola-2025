import { useState } from "react";
import InvestmentHeader from "../assets/images/headers/investment.png";
import ConsumersIcon from "../assets/vectors/consumers.svg";
import AnnualTransactionsIcon from "../assets/vectors/annual-transactions.svg";
import SmallContainer from "../modules/common/components/container/SmallContainer";
import MainHeader from "../modules/common/components/headers/MainHeader";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import { useLocale } from "../modules/common/hooks/useLocale";

const InvestmentCasePage = () => {
  const { t } = useTranslation("overview");
  const { lang } = useLocale();
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  const pillars = [
    {
      bg: "bg-savola-green",
      contentBg: "from-savola-green-20 to-savola-green-20/0",
      textColor: "text-white",
      borderColor: "border-savola-green",
      statValueColor: "text-savola-green",
      label: t("investmentCase.pillar1"),
      number: 1,
      stats: [
        {
          label: t("investmentCase.pillar1Detail.stat1Label"),
          value: t("investmentCase.pillar1Detail.stat1Value"),
          icon: ConsumersIcon,
        },
        {
          label: t("investmentCase.pillar1Detail.stat2Label"),
          value: t("investmentCase.pillar1Detail.stat2Value"),
          icon: AnnualTransactionsIcon,
        },
      ] as { label: string; value: string; icon: string }[] | null,
      bullets: [
        {
          title: t("investmentCase.pillar1Detail.b1Title"),
          body: t("investmentCase.pillar1Detail.b1Body"),
        },
        {
          title: t("investmentCase.pillar1Detail.b2Title"),
          body: t("investmentCase.pillar1Detail.b2Body"),
        },
        {
          title: t("investmentCase.pillar1Detail.b3Title"),
          body: t("investmentCase.pillar1Detail.b3Body"),
        },
      ],
    },
    {
      bg: "bg-savola-cool-grey",
      contentBg: "from-white to-white/0",
      textColor: "text-white",
      borderColor: "border-savola-cool-grey",
      statValueColor: "text-savola-cool-grey",
      label: t("investmentCase.pillar2"),
      number: 2,
      stats: null as { label: string; value: string; icon: string }[] | null,
      bullets: [
        {
          title: t("investmentCase.pillar2Detail.b1Title"),
          body: t("investmentCase.pillar2Detail.b1Body"),
        },
        {
          title: t("investmentCase.pillar2Detail.b2Title"),
          body: t("investmentCase.pillar2Detail.b2Body"),
        },
        {
          title: t("investmentCase.pillar2Detail.b3Title"),
          body: t("investmentCase.pillar2Detail.b3Body"),
        },
        {
          title: t("investmentCase.pillar2Detail.b4Title"),
          body: t("investmentCase.pillar2Detail.b4Body"),
        },
        {
          title: t("investmentCase.pillar2Detail.b5Title"),
          body: t("investmentCase.pillar2Detail.b5Body"),
        },
        {
          title: t("investmentCase.pillar2Detail.b6Title"),
          body: t("investmentCase.pillar2Detail.b6Body"),
        },
        {
          title: t("investmentCase.pillar2Detail.b7Title"),
          body: t("investmentCase.pillar2Detail.b7Body"),
        },
      ],
    },
    {
      bg: "bg-white",
      contentBg: "from-savola-green-20 to-savola-green-20/0",
      textColor: "text-savola-cool-grey",
      borderColor: "border-savola-green",
      statValueColor: "text-savola-green",
      label: t("investmentCase.pillar3"),
      number: 3,
      stats: [
        {
          label: t("investmentCase.pillar3Detail.stat1Label"),
          value: t("investmentCase.pillar3Detail.stat1Value"),
          icon: ConsumersIcon,
        },
        {
          label: t("investmentCase.pillar3Detail.stat2Label"),
          value: t("investmentCase.pillar3Detail.stat2Value"),
          icon: AnnualTransactionsIcon,
        },
      ] as { label: string; value: string; icon: string }[] | null,
      bullets: [
        {
          title: t("investmentCase.pillar3Detail.b1Title"),
          body: t("investmentCase.pillar3Detail.b1Body"),
        },
        {
          title: t("investmentCase.pillar3Detail.b2Title"),
          body: t("investmentCase.pillar3Detail.b2Body"),
        },
        {
          title: t("investmentCase.pillar3Detail.b3Title"),
          body: t("investmentCase.pillar3Detail.b3Body"),
        },
      ],
    },
    {
      bg: "bg-savola-orange",
      contentBg: "from-savola-orange-20 to-savola-orange-20/0",
      textColor: "text-white",
      borderColor: "border-savola-orange",
      statValueColor: "text-savola-orange",
      label: t("investmentCase.pillar4"),
      number: 4,
      stats: null as { label: string; value: string; icon: string }[] | null,
      bullets: [
        {
          title: t("investmentCase.pillar4Detail.b1Title"),
          body: t("investmentCase.pillar4Detail.b1Body"),
        },
        {
          title: t("investmentCase.pillar4Detail.b2Title"),
          body: t("investmentCase.pillar4Detail.b2Body"),
        },
        {
          title: t("investmentCase.pillar4Detail.b3Title"),
          body: t("investmentCase.pillar4Detail.b3Body"),
        },
        {
          title: t("investmentCase.pillar4Detail.b4Title"),
          body: t("investmentCase.pillar4Detail.b4Body"),
        },
      ],
    },
  ];

  const renderPanelContent = ({
    pillar,
    lang,
  }: {
    pillar: (typeof pillars)[number];
    lang: "en" | "ar";
  }) => (
    <div
      className={`${lang === "ar" ? "rounded-br-2xl bg-linear-to-l" : "rounded-bl-[64px] bg-linear-to-r"} ${pillar.contentBg}  p-6 `}
    >
      {/* Stats row */}
      {pillar.stats && (
        <div className="flex items-start gap-4 mb-5 pb-5 border-b border-gray-100">
          <div className="flex-1 min-w-0">
            <img src={pillar.stats[0].icon} className="w-6 h-6 mb-1" alt="" />
            <p className=" text-savola-cool-grey leading-snug">
              {pillar.stats[0].label}
            </p>
            <p className={`text-2xl font-black text-savola-cool-grey`}>
              {pillar.stats[0].value}
            </p>
          </div>
          <div className="w-px self-stretch bg-gray-200 shrink-0" />
          <div className="flex-1 min-w-0">
            <img src={pillar.stats[1].icon} className="w-6 h-6 mb-1" alt="" />
            <p className=" text-savola-cool-grey leading-snug">
              {pillar.stats[1].label}
            </p>
            <p className={`text-2xl font-black text-savola-cool-grey`}>
              {pillar.stats[1].value}
            </p>
          </div>
        </div>
      )}

      {/* Bullet points — 2 columns on desktop for wider panel */}
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {pillar.bullets.map((bullet, bIdx) => (
          <li
            key={bIdx}
            className="flex gap-2 text-sm leading-relaxed text-savola-cool-grey"
          >
            <span className="text-savola-green shrink-0 mt-0.5">•</span>
            <span>
              <span className="font-bold">{bullet.title}: </span>
              {bullet.body}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div>
      <MainHeader
        imageUrl={InvestmentHeader}
        title={t("investmentCase.pageTitle")}
      />
      <div className="py-32 bg-linear-180 from-savola-green-20 to-savola-green-20/0">
        <SmallContainer>
          <h3 className="text-4xl text-savola-green font-extrabold mb-8 max-w-150">
            {t("investmentCase.heading")}
          </h3>
          <p className="text-2xl font-bold">
            {t("investmentCase.introParagraph")}
          </p>

          <div className="my-16">
            {/*
              Wrapper is relative so desktop panels can be absolutely positioned.
              lg:min-h pre-allocates space = circle (200px) + gap (16px) + tallest panel (~500px)
              so page scroll height never changes on hover.
            */}
            <div className="relative lg:min-h-187.5">
              {/* Pillars circles row */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center"
                    onMouseEnter={() => setHoveredPillar(idx)}
                    onMouseLeave={() => setHoveredPillar(null)}
                  >
                    {/* Circle */}
                    <div
                      className={`rounded-full w-50 h-50 shrink-0 text-center ${pillar.bg} flex justify-center items-center flex-col gap-2 hover:scale-105 transition-transform duration-500 cursor-default`}
                    >
                      <span
                        className={`text-lg font-extrabold ${pillar.textColor} whitespace-pre-line leading-tight px-4 text-center`}
                      >
                        {pillar.label}
                      </span>
                      <span
                        className={`text-lg font-extrabold ${pillar.textColor}`}
                      >
                        {pillar.number}
                      </span>
                    </div>

                    {/* Mobile / tablet panel — always in flow, hidden on desktop */}
                    <div className="w-full mt-4 lg:hidden">
                      {renderPanelContent({
                        pillar: pillar,
                        lang: lang as "en" | "ar",
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop panels — absolutely positioned over full container width, never affect scroll */}
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className={`hidden lg:block absolute left-0 w-full top-54 transition-opacity duration-300 ${
                    hoveredPillar === idx
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  {renderPanelContent({ pillar, lang: lang as "en" | "ar" })}
                </div>
              ))}
            </div>
          </div>
        </SmallContainer>
      </div>
    </div>
  );
};

export default InvestmentCasePage;
