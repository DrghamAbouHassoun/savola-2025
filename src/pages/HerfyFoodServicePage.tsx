import { useContext, useEffect, useRef } from "react";
import { useCountUp } from "react-countup";
import HeaderBg from "../assets/images/new-headers/herfy.jpg";
import HerfyLogo from "../assets/images/business-review/herfy.png";
import TrapeziumShape from "../assets/vectors/business-review/trapezium.svg";
import NewHeader from "../modules/common/components/headers/NewHeader";
import SmallContainer from "../modules/common/components/container/SmallContainer";
import AnimationPopUp from "../modules/common/components/Animations/AnimationPopUp";
import AnimationSlideTop from "../modules/common/components/Animations/AnimationSlideTop";
import CountUp from "../modules/common/components/Animations/CountUp";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import { LangContext } from "../modules/common/contexts/LangProvider";
import useInView from "../modules/common/hooks/useInView";

function parseValue(v: number | string): number {
  if (typeof v === "number") return v;
  const match = v.match(/\d+/);
  return match ? -parseInt(match[0], 10) : 0;
}

interface ChartBarProps {
  year: string | number;
  rawValue: number | string;
  maxAbs: number;
  index: number;
  inView: boolean;
  isRtl: boolean;
  highlight: boolean;
}

const ChartBar = ({
  year,
  rawValue,
  maxAbs,
  index,
  inView,
  isRtl,
  highlight,
}: ChartBarProps) => {
  const numeric = parseValue(rawValue);
  const isNegative = numeric < 0;
  const absVal = Math.abs(numeric);
  const spanRef = useRef<HTMLSpanElement>(null);

  const { start, reset } = useCountUp({
    ref: spanRef as React.RefObject<HTMLElement>,
    end: absVal,
    startOnMount: false,
    duration: 1.5,
    separator: ",",
    delay: (index * 120 + 400) / 1000,
  });

  useEffect(() => {
    if (inView) start();
    else reset();
  }, [inView]);

  const pct = Math.max(16, (absVal / maxAbs) * 100);
  const valuePct = pct > 45 ? `${pct - 15}%` : "30%";
  const barColor = isNegative
    ? highlight
      ? "bg-savola-orange"
      : "bg-savola-orange/70"
    : highlight
      ? "bg-savola-green"
      : "bg-savola-green/75";

  return (
    <div className="grid items-center gap-3">
      <div className="relative h-5 overflow-hidden">
        <span
          className={`absolute font-bold text-savola-cool-grey/80 z-10 ${isRtl ? "right-2" : "left-2"}`}
        >
          {year}
        </span>
        <div
          className={`h-full transition-[width] ease-out ${
            isRtl ? "rounded-tl-full" : "rounded-tr-full"
          } ${barColor}`}
          style={{
            width: inView ? `${pct}%` : "0%",
            minWidth: inView ? "45%" : "0%",
            transitionDuration: "700ms",
            transitionDelay: inView ? `${index * 120}ms` : "0ms",
            ...(isRtl ? { marginLeft: "auto" } : {}),
          }}
        />
        {isNegative ? (
          <span
            className="absolute top-1/2 -translate-y-1/2 font-black mt-0.5 text-white transition-opacity duration-300"
            style={{
              [isRtl ? "right" : "left"]: valuePct,
              opacity: inView ? 1 : 0,
              transitionDelay: inView ? `${index * 120 + 300}ms` : "0ms",
            }}
          >
            ({absVal})
          </span>
        ) : (
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
        )}
      </div>
    </div>
  );
};

interface ChartDataItem {
  year: string | number;
  value: number | string;
}

interface ChartProps {
  title: string;
  unit: string;
  data: ChartDataItem[];
  isRtl: boolean;
}

const Chart = ({ title, unit, data, isRtl }: ChartProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const maxAbs = Math.max(...data.map((d) => Math.abs(parseValue(d.value)))) * 1.1;
  const hasNegative = data.some((d) => parseValue(d.value) < 0);

  return (
    <article
      ref={ref}
      className="flex flex-col gap-2.5 bg-linear-to-b from-savola-green-20 to-savola-green/0 px-2 py-4"
    >
      <AnimationSlideTop>
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="font-bold text-savola-navy text-base">
              {title}
            </span>
            <span
              className="text-savola-cool-grey text-sm ms-2"
              dangerouslySetInnerHTML={{ __html: unit }}
            />
          </div>
          <span
            className={`text-lg leading-none ${hasNegative ? "text-savola-orange" : "text-savola-green"}`}
          >
            {hasNegative ? "▼" : "▲"}
          </span>
        </div>
      </AnimationSlideTop>
      <div className="flex flex-col gap-3">
        {data.map((item, i) => (
          <ChartBar
            key={String(item.year)}
            year={item.year}
            rawValue={item.value}
            maxAbs={maxAbs}
            index={i}
            inView={inView}
            isRtl={isRtl}
            highlight={i === data.length - 1}
          />
        ))}
      </div>
    </article>
  );
};

const HerfyFoodServicePage = () => {
  const { lang, translations } = useContext(LangContext);
  const { t, tArray } = useTranslation("business-review");

  const isRtl = lang === "ar";
  const herfyData = translations[lang as "en" | "ar"]["business-review"].herfy;
  const strategicParagraphs = tArray("herfy.strategicHighlights.paragraphs");
  const labels = herfyData.labels;
  const charts = herfyData.charts;

  return (
    <div>
      {/* 1. Header */}
      <NewHeader imageUrl={HeaderBg} title={t("herfy.pageTitle")} />

      {/* 2. Intro trapezium + logo */}
      <section className="py-12 md:py-16">
        <SmallContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8 md:mb-10 min-h-90">
            <div className="relative w-full h-full flex items-end">
              <div
                className={`absolute top-0 left-0 w-full h-full ${isRtl ? "rotate-y-180" : ""}`}
              >
                <img
                  src={TrapeziumShape}
                  className="w-full h-full object-contain object-bottom-left"
                  alt=""
                />
              </div>
              <div className="p-4">
                <AnimationPopUp>
                  <p className="font-bold text-savola-cool-grey text-base md:text-lg leading-relaxed">
                    {t("herfy.header.text")}
                  </p>
                </AnimationPopUp>
              </div>
            </div>
            <div className="flex md:justify-start items-end h-full w-full">
              <AnimationPopUp>
                <img src={HerfyLogo} alt="Herfy" className="h-24 w-auto" />
              </AnimationPopUp>
            </div>
          </div>
        </SmallContainer>
      </section>

      {/* 3. Large intro text */}
      <section className="pb-8">
        <SmallContainer>
          <AnimationSlideTop>
            <p className="text-savola-cool-grey text-xl md:text-3xl font-bold leading-snug">
              {t("herfy.intro")}
            </p>
          </AnimationSlideTop>
        </SmallContainer>
      </section>

      {/* 4. Main content: text left, charts right */}
      <section className="py-8 md:py-12">
        <SmallContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left: paragraphs + highlights + labels */}
            <div>
              <AnimationSlideTop>
                <p
                  className="text-savola-cool-grey leading-relaxed text-sm mb-8"
                  dangerouslySetInnerHTML={{ __html: t("herfy.p") }}
                />
              </AnimationSlideTop>

              <AnimationSlideTop>
                <h2 className="font-bold text-savola-navy mb-3">
                  {t("herfy.financialHighlights.title")}
                </h2>
                <p
                  className="text-savola-cool-grey leading-relaxed text-sm mb-8"
                  dangerouslySetInnerHTML={{
                    __html: t("herfy.financialHighlights.desc"),
                  }}
                />
              </AnimationSlideTop>

              <AnimationSlideTop>
                <h2 className="font-bold text-savola-navy mb-3">
                  {t("herfy.strategicHighlights.title")}
                </h2>
                {strategicParagraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-savola-cool-grey leading-relaxed text-sm mb-4"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </AnimationSlideTop>

              {/* Labels */}
              <AnimationPopUp>
                <div className="flex flex-wrap items-center gap-8 mt-6">
                  {labels.map((label, i) => (
                    <div key={i}>
                      <p
                        className="text-savola-cool-grey text-sm font-semibold mb-1"
                        dangerouslySetInnerHTML={{ __html: label.title }}
                      />
                      <p className="font-black text-2xl text-savola-orange leading-none">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: label.number.prefix ?? "",
                          }}
                        />
                        <CountUp end={label.number.num} />
                        <span
                          className="ms-1"
                          dangerouslySetInnerHTML={{
                            __html: label.number.suffix,
                          }}
                        />
                      </p>
                    </div>
                  ))}
                </div>
              </AnimationPopUp>
            </div>

            {/* Right: charts */}
            <div className="flex flex-col gap-6">
              {/* Top row: first two charts side by side */}
              <div className="grid grid-cols-2 gap-4">
                {charts.slice(0, 2).map((chart, i) => (
                  <Chart
                    key={i}
                    title={chart.title}
                    unit={chart.unit}
                    data={chart.data}
                    isRtl={isRtl}
                  />
                ))}
              </div>
              {/* Bottom: third chart full width */}
              {charts[2] && (
                <Chart
                  title={charts[2].title}
                  unit={charts[2].unit}
                  data={charts[2].data}
                  isRtl={isRtl}
                />
              )}
            </div>
          </div>
        </SmallContainer>
      </section>
    </div>
  );
};

export default HerfyFoodServicePage;
