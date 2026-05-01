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
import HerfyChartsEn from "../assets/images/business-review/herfy-charts-en.svg";
import HerfyChartsAr from "../assets/images/business-review/hrefy-charts-ar.svg";

function parseValue(v: number | string): number {
  if (typeof v === "number") return v;
  const match = v.match(/\d+/);
  return match ? -parseInt(match[0], 10) : 0;
}

const HALF_HEIGHT = 180;

interface ChartBarProps {
  year: string | number;
  rawValue: number | string;
  maxAbs: number;
  index: number;
  inView: boolean;
  highlight: boolean;
  hasNegative: boolean;
  hasPositive: boolean;
  isRtl: boolean;
}

const ChartBar = ({
  year,
  rawValue,
  maxAbs,
  index,
  inView,
  highlight,
  hasNegative,
  hasPositive,
  isRtl,
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

  const barHeightPx = Math.max(20, (absVal / maxAbs) * HALF_HEIGHT);
  // Match SVG colors exactly: #A4CE4E (highlight) and #D1E6A6 (non-highlight)
  const barBg = highlight ? "bg-savola-green" : "bg-savola-green-50";
  // Match SVG text: white on highlight, dark on non-highlight
  const valueTextClass = highlight ? "text-white" : "text-savola-cool-grey";
  const isMixed = hasNegative && hasPositive;
  const showInside = barHeightPx >= 36;
  // Single rounded corner per bar (matches Figma SVG: only the leading-end corner is rounded)
  const positiveBorderRadius = isRtl ? "0 9999px 0 0" : "9999px 0 0 0";
  const negativeBorderRadius = isRtl ? "0 0 9999px 0" : "0 0 0 9999px";

  return (
    <div className="flex flex-col items-center flex-1 min-w-0">
      {/* Positive bar area — bars grow up from bottom */}
      {hasPositive && (
        <div
          className="relative flex items-end w-full"
          style={{ height: HALF_HEIGHT, overflow: "visible" }}
        >
          {!isNegative && (
            <div
              className={`relative w-full ${barBg}`}
              style={{
                height: inView ? `${barHeightPx}px` : "0px",
                borderRadius: positiveBorderRadius,
                transition: "height 700ms ease-out",
                transitionDelay: inView ? `${index * 120}ms` : "0ms",
              }}
            >
              {showInside ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    ref={spanRef}
                    className={`font-black text-xs transition-opacity duration-300 ${valueTextClass}`}
                    style={{
                      writingMode: "vertical-lr",
                      opacity: inView ? 1 : 0,
                      transitionDelay: inView
                        ? `${index * 120 + 300}ms`
                        : "0ms",
                    }}
                  />
                </div>
              ) : (
                <div
                  className="absolute w-full flex justify-center"
                  style={{ bottom: "100%", paddingBottom: 4 }}
                >
                  <span
                    ref={spanRef}
                    className="font-black text-xs text-savola-cool-grey transition-opacity duration-300"
                    style={{
                      writingMode: "vertical-lr",
                      opacity: inView ? 1 : 0,
                      transitionDelay: inView
                        ? `${index * 120 + 300}ms`
                        : "0ms",
                    }}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Zero baseline */}
      {isMixed && <div className="w-full h-0.5 bg-savola-cool-grey/30" />}

      {/* Negative bar area — bars grow down from top */}
      {hasNegative && (
        <div
          className="relative flex items-start w-full"
          style={{ height: HALF_HEIGHT, overflow: "visible" }}
        >
          {isNegative && (
            <div
              className={`relative w-full ${barBg}`}
              style={{
                height: inView ? `${barHeightPx}px` : "0px",
                borderRadius: negativeBorderRadius,
                transition: "height 700ms ease-out",
                transitionDelay: inView ? `${index * 120}ms` : "0ms",
              }}
            >
              {showInside ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={`font-black text-xs transition-opacity duration-300 ${valueTextClass}`}
                    style={{
                      writingMode: "vertical-lr",
                      opacity: inView ? 1 : 0,
                      transitionDelay: inView
                        ? `${index * 120 + 300}ms`
                        : "0ms",
                    }}
                  >
                    ({absVal.toLocaleString()})
                  </span>
                </div>
              ) : (
                <div
                  className="absolute w-full flex justify-center"
                  style={{ top: "100%", paddingTop: 4 }}
                >
                  <span
                    className="font-black text-xs text-savola-cool-grey transition-opacity duration-300"
                    style={{
                      writingMode: "vertical-lr",
                      opacity: inView ? 1 : 0,
                      transitionDelay: inView
                        ? `${index * 120 + 300}ms`
                        : "0ms",
                    }}
                  >
                    ({absVal.toLocaleString()})
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Year label — rotated to read bottom-to-top */}
      <div
        className="mt-3 text-xs font-bold text-savola-cool-grey"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        {year}
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

export const Chart = ({ title, unit, data, isRtl }: ChartProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const maxAbs =
    Math.max(...data.map((d) => Math.abs(parseValue(d.value)))) * 1.1;
  const hasNegative = data.some((d) => parseValue(d.value) < 0);
  const hasPositive = data.some((d) => parseValue(d.value) >= 0);

  return (
    <article
      ref={ref}
      className="flex flex-col gap-2.5 bg-savola-orange-20 px-3 py-4"
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
          <span className="text-lg leading-none text-savola-green">
            {hasNegative ? "▼" : "▲"}
          </span>
        </div>
      </AnimationSlideTop>
      <div className="flex gap-3">
        {data.map((item, i) => (
          <ChartBar
            key={String(item.year)}
            year={item.year}
            rawValue={item.value}
            maxAbs={maxAbs}
            index={i}
            inView={inView}
            highlight={i === data.length - 1}
            hasNegative={hasNegative}
            hasPositive={hasPositive}
            isRtl={isRtl}
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
  // const charts = herfyData.charts;

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
            {/* <div className="flex flex-col gap-6">
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
              {charts[2] && (
                <Chart
                  title={charts[2].title}
                  unit={charts[2].unit}
                  data={charts[2].data}
                  isRtl={isRtl}
                />
              )}
            </div> */}
            <div className="flex-1">
              <img
                src={lang === "ar" ? HerfyChartsAr : HerfyChartsEn}
                className="w-full h-auto object-contain"
                alt=""
              />
            </div>
          </div>
        </SmallContainer>
      </section>
    </div>
  );
};

export default HerfyFoodServicePage;
