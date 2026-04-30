import { useContext, useEffect, useRef } from "react";
import { useCountUp } from "react-countup";
import NewHeader from "../modules/common/components/headers/NewHeader";
import SavolaFoodBg from "../assets/images/new-headers/savola-foods.jpg";
import SavolaFoodLogo from "../assets/logo/savola-food-logo.png";
import SmallContainer from "../modules/common/components/container/SmallContainer";
import AnimationPopUp from "../modules/common/components/Animations/AnimationPopUp";
import AnimationSlideTop from "../modules/common/components/Animations/AnimationSlideTop";
import CountUp from "../modules/common/components/Animations/CountUp";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import BusinessReviewHeader from "../modules/business-review/components/BusinessReviewHeader";
import { LangContext } from "../modules/common/contexts/LangProvider";
import useInView from "../modules/common/hooks/useInView";
import FlowerIcon from "../assets/icons/flower.svg";
import TrapeziumShape from "../assets/vectors/business-review/trapezium-card.svg";

const FOODS_2025_NUMS = [13280, 1024, 7.7, 481];
const FOODS_2025_DECIMALS = [0, 0, 1, 0];

const REVENUE_ITEMS = [
  { y2024: 6181, y2025: 7092 },
  { y2024: 528, y2025: 545 },
  { y2024: 3644, y2025: 4868 },
  { y2024: 623, y2025: 741 },
];

const ITEMS2_NUMS = [1322, 2162, 263, 32];

const COUNTRY_COUNT = 6;

interface RevenueBarProps {
  year: string;
  value: number;
  maxValue: number;
  index: number;
  inView: boolean;
  isRtl: boolean;
  highlight: boolean;
}

const RevenueBar = ({
  year,
  value,
  maxValue,
  index,
  inView,
  isRtl,
  highlight,
}: RevenueBarProps) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const { start, reset } = useCountUp({
    ref: spanRef as React.RefObject<HTMLElement>,
    end: value,
    startOnMount: false,
    duration: 1.5,
    separator: ",",
    delay: (index * 120 + 400) / 1000,
  });

  useEffect(() => {
    if (inView) {
      start();
    } else {
      reset();
    }
  }, [inView]);

  const pct = Math.max(16, (value / maxValue) * 100);
  const valuePct = pct > 45 ? `${pct - 15}%` : "30%";

  return (
    <div className="grid items-center gap-3">
      <div className="relative h-5 overflow-hidden">
        <span
          className={`absolute font-bold text-savola-cool-grey/80 ${isRtl ? "right-2" : "left-2"}`}
        >
          {year}
        </span>
        <div
          className={`h-full transition-[width] ease-out ${
            isRtl ? "rounded-tl-full" : "rounded-tr-full"
          } ${highlight ? "bg-savola-green" : "bg-savola-green/75"}`}
          style={{
            width: inView ? `${pct}%` : "0%",
            minWidth: inView ? "45%" : "0%",
            transitionDuration: "700ms",
            transitionDelay: inView ? `${index * 120}ms` : "0ms",
            ...(isRtl ? { marginLeft: "auto" } : {}),
          }}
        />
        <span
          ref={spanRef}
          className={`absolute top-1/2 -translate-y-1/2 font-black mt-0.5 transition-opacity duration-300 ${
            highlight ? "text-white" : "text-savola-cool-grey"
          }`}
          style={{
            [isRtl ? "right" : "left"]: valuePct,
            opacity: inView ? 1 : 0,
            transitionDelay: inView ? `${index * 120 + 300}ms` : "0ms",
          }}
        />
      </div>
    </div>
  );
};

interface RevenueChartProps {
  subtitle: string;
  y2024: number;
  y2025: number;
  yearSuffix: string;
  isRtl: boolean;
}

const RevenueChart = ({
  subtitle,
  y2024,
  y2025,
  yearSuffix,
  isRtl,
}: RevenueChartProps) => {
  const { t } = useTranslation("business-review");
  const { ref, inView } = useInView<HTMLDivElement>();
  const maxValue = Math.max(y2024, y2025) * 1.1;

  return (
    <article
      ref={ref}
      className="flex flex-col gap-2.5 bg-linear-to-b from-savola-orange-20 to-savola-orange/0 px-2 py-4"
    >
      {/* Revenue title */}
      <AnimationSlideTop>
        <p className="font-bold text-savola-navy text-lg mb-1 inline">
          {t("savolaFoods.revenue.title")}
        </p>
        <span
          className="text-savola-cool-grey text-sm ms-2"
          dangerouslySetInnerHTML={{
            __html: t("savolaFoods.revenue.titleAfter"),
          }}
        />
      </AnimationSlideTop>
      <AnimationSlideTop>
        <p className="text-savola-cool-grey text-sm font-semibold mb-1 leading-snug">
          {subtitle}
        </p>
      </AnimationSlideTop>
      <div className="max-w-90 flex flex-col gap-3">
        <RevenueBar
          year={`2024${yearSuffix}`}
          value={y2024}
          maxValue={maxValue}
          index={0}
          inView={inView}
          isRtl={isRtl}
          highlight={false}
        />
        <RevenueBar
          year={`2025${yearSuffix}`}
          value={y2025}
          maxValue={maxValue}
          index={1}
          inView={inView}
          isRtl={isRtl}
          highlight={true}
        />
      </div>
    </article>
  );
};

const SavolaFoodPage = () => {
  const { lang } = useContext(LangContext);
  const { t, tArray } = useTranslation("business-review");

  const isRtl = lang === "ar";
  const yearSuffix = isRtl ? "م" : "";

  const outroLabels = tArray("savolaFoods.drivingSustainable.outro.label");
  const countryParagraphs = Array.from({ length: COUNTRY_COUNT }, (_, i) =>
    tArray(`savolaFoods.winningLocally.countries.${i}.paragraphs`),
  );

  return (
    <div>
      {/* 1. Header */}
      <NewHeader imageUrl={SavolaFoodBg} title={t("savolaFoods.pageTitle")} />

      {/* 2. Intro + BusinessReviewHeader */}
      <section className="py-12 md:py-16">
        <SmallContainer>
          <BusinessReviewHeader
            title={t("savolaFoods.intro.title")}
            subtitle={t("savolaFoods.intro.desc")}
            logoUrl={SavolaFoodLogo}
          />
        </SmallContainer>
      </section>

      {/* 3. Production Volumes + Strategic Focus */}
      <section className="pb-12 md:pb-16">
        <SmallContainer>
          <div className="">
            {/* Production volumes */}
            <AnimationPopUp>
              <div className="mb-2">
                <img src={FlowerIcon} alt="" className="w-8 h-8" />
              </div>
              <p className="text-savola-cool-grey font-semibold ">
                {t("savolaFoods.productionVolumes.title")}
              </p>
              <p className="font-black text-4xl text-savola-green leading-none my-2">
                <CountUp end={3.74} decimals={2} />
                {t("savolaFoods.productionVolumes.number.suffix")}
              </p>
              <p className="text-savola-cool-grey text-sm mt-2">
                {t("savolaFoods.productionVolumes.unit")}
              </p>
            </AnimationPopUp>

            {/* Strategic focus */}
            <AnimationSlideTop>
              <div className="my-8">
                <p className="font-bold text-savola-navy mb-2">
                  {t("savolaFoods.strategicFocus.title")}
                </p>
                <p className="text-savola-cool-grey leading-relaxed text-sm">
                  {t("savolaFoods.strategicFocus.desc")}
                </p>
              </div>
            </AnimationSlideTop>
          </div>
        </SmallContainer>
      </section>

      {/* 4. Savola Foods in 2025 — Financial KPI Cards */}
      <section className="">
        <SmallContainer>
          <div className="bg-linear-to-b from-savola-orange-20 to-savola-orange-20/0 p-2 py-4">
            <AnimationSlideTop>
              <p className="font-bold text-savola-cool-grey text-lg mb-1">
                {t("savolaFoods.foodsIn2025.title")}
              </p>
              <p className="text-savola-orange text-sm font-bold mb-6">
                {t("savolaFoods.foodsIn2025.subtitle")}
              </p>
            </AnimationSlideTop>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-savola-navy">
              {FOODS_2025_NUMS.map((num, i) => (
                <AnimationPopUp key={i}>
                  <div className="h-full py-3">
                    <p
                      className="text-savola-green font-bold mb-3 leading-snug"
                      dangerouslySetInnerHTML={{
                        __html: t(`savolaFoods.foodsIn2025.items.${i}.title`),
                      }}
                    />
                    <p className="font-black text-2xl text-savola-cool-grey leading-none">
                      <CountUp end={num} decimals={FOODS_2025_DECIMALS[i]} />
                      <span
                        className="text-base ms-1 font-bold"
                        dangerouslySetInnerHTML={{
                          __html: t(
                            `savolaFoods.foodsIn2025.items.${i}.number.suffix`,
                          ),
                        }}
                      />
                    </p>
                  </div>
                </AnimationPopUp>
              ))}
            </div>
          </div>
        </SmallContainer>
      </section>

      {/* 5. Revenue Bar Charts + Volume Metrics */}
      <section className="py-8 md:py-12">
        <SmallContainer>
          {/* Revenue charts — 2×2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 mb-12">
            {REVENUE_ITEMS.map((item, i) => (
              <RevenueChart
                key={i}
                subtitle={t(`savolaFoods.revenue.items.${i}.subtitle`)}
                y2024={item.y2024}
                y2025={item.y2025}
                yearSuffix={yearSuffix}
                isRtl={isRtl}
              />
            ))}
          </div>

          {/* Volume metrics (items2) */}
          <div className="pt-4 flex flex-col lg:flex-row w-full">
            {ITEMS2_NUMS.map((num, i) => (
              <div key={i} className={`relative w-full flex-1 `}>
                <div className={`absolute w-full h-full top-0 left-0 -z-10 ${lang === 'ar' ? "rotate-y-180" : ""}`}>
                  <img
                    src={TrapeziumShape}
                    alt=""
                    className="w-full h-full object-cover object-right"
                  />
                </div>
                <div className="py-6 px-4 w-full h-full">
                  <p className="font-black text-3xl text-savola-cool-grey leading-none mb-1">
                    <CountUp end={num} separator="," />
                  </p>
                  <p className="text-savola-cool-grey text-xs leading-snug">
                    {t(`savolaFoods.revenue.items2.${i}.text`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SmallContainer>
      </section>

      {/* 6. Winning Locally */}
      <section className="">
        <SmallContainer>
          <AnimationSlideTop>
            <h2 className="text-xl md:text-2xl font-bold text-savola-navy mb-10">
              {t("savolaFoods.winningLocally.title")}
            </h2>
          </AnimationSlideTop>

          {Array.from({ length: COUNTRY_COUNT }, (_, i) => (
            <div key={i} className="mb-10 last:mb-0">
              <AnimationSlideTop>
                <h3 className="text-lg font-bold text-savola-navy">
                  {t(`savolaFoods.winningLocally.countries.${i}.title`)}
                </h3>
                <p className="text-savola-orange font-semibold mb-1">
                  {t(`savolaFoods.winningLocally.countries.${i}.subtitle`)}
                </p>
                {countryParagraphs[i].map((p, j) => (
                  <p
                    key={j}
                    className="text-savola-cool-grey leading-relaxed mb-3 text-sm"
                  >
                    {p}
                  </p>
                ))}
              </AnimationSlideTop>
            </div>
          ))}
        </SmallContainer>
      </section>

      {/* 7. Driving Sustainable Growth */}
      <section className="py-12 md:py-16">
        <SmallContainer>
          <AnimationSlideTop>
            <h2 className="text-xl font-bold text-savola-navy mb-6">
              {t("savolaFoods.drivingSustainable.title")}
            </h2>
            <p
              className="text-savola-cool-grey leading-relaxed mb-4 text-sm"
              dangerouslySetInnerHTML={{
                __html: t("savolaFoods.drivingSustainable.p1"),
              }}
            ></p>
            <p
              className="text-savola-cool-grey leading-relaxed mb-4 text-sm"
              dangerouslySetInnerHTML={{
                __html: t("savolaFoods.drivingSustainable.p2"),
              }}
            ></p>
            <p
              className="text-savola-cool-grey leading-relaxed mb-10 text-sm"
              dangerouslySetInnerHTML={{
                __html: t("savolaFoods.drivingSustainable.p3"),
              }}
            ></p>
          </AnimationSlideTop>

          {/* Outro: text + 3 pillars */}
          <div className="flex flex-col lg:flex-row gap-4">
            <AnimationPopUp className="flex-1">
              <p
                className="text-savola-cool-grey text-lg leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: t("savolaFoods.drivingSustainable.outro.text"),
                }}
              />
            </AnimationPopUp>
            <AnimationPopUp className="flex-1">
              <div className="">
                {outroLabels.map((label, i) => (
                  <p
                    key={i}
                    className={`font-black text-4xl md:text-4xl leading-tight ${
                      i === 0
                        ? "text-savola-green"
                        : i === 1
                          ? "text-savola-orange"
                          : "text-savola-cool-grey"
                    }`}
                  >
                    {label}
                  </p>
                ))}
              </div>
            </AnimationPopUp>
          </div>
        </SmallContainer>
      </section>
    </div>
  );
};

export default SavolaFoodPage;
