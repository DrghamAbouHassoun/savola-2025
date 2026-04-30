import { useContext, useEffect, useRef } from "react";
import { useCountUp } from "react-countup";
import HeaderBg from "../assets/images/new-headers/al-kabeer-group.png";
import AlKabeerLogo from "../assets/images/business-review/al-kabeer.png";
import TrapeziumShape from "../assets/vectors/business-review/trapezium.svg";
import NewHeader from "../modules/common/components/headers/NewHeader";
import SmallContainer from "../modules/common/components/container/SmallContainer";
import AnimationPopUp from "../modules/common/components/Animations/AnimationPopUp";
import AnimationSlideTop from "../modules/common/components/Animations/AnimationSlideTop";
import CountUp from "../modules/common/components/Animations/CountUp";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import { LangContext } from "../modules/common/contexts/LangProvider";
import useInView from "../modules/common/hooks/useInView";

interface ChartBarProps {
  year: string;
  value: number;
  maxValue: number;
  index: number;
  inView: boolean;
  isRtl: boolean;
  highlight: boolean;
}

const ChartBar = ({
  year,
  value,
  maxValue,
  index,
  inView,
  isRtl,
  highlight,
}: ChartBarProps) => {
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
    if (inView) start();
    else reset();
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

interface ChartDataItem {
  year: string;
  value: number;
}

interface ChartProps {
  title: string;
  titleUnit: string;
  data: ChartDataItem[];
  isRtl: boolean;
  yearSuffix: string;
}

const Chart = ({ title, titleUnit, data, isRtl, yearSuffix }: ChartProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const maxValue = Math.max(...data.map((d) => d.value)) * 1.1;

  return (
    <article
      ref={ref}
      className="flex flex-col gap-2.5 bg-linear-to-b from-savola-green-20 to-savola-green/0 px-2 py-4"
    >
      <AnimationSlideTop>
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="font-bold text-savola-navy text-base mb-0.5">
              {title}
            </span>
            <span
              className="text-savola-cool-grey text-sm ms-2"
              dangerouslySetInnerHTML={{ __html: titleUnit }}
            />
          </div>
          <span className="text-savola-green text-lg leading-none">▲</span>
        </div>
      </AnimationSlideTop>
      <div className="flex flex-col gap-3">
        {data.map((item, i) => (
          <ChartBar
            key={item.year}
            year={`${item.year}${yearSuffix}`}
            value={item.value}
            maxValue={maxValue}
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

const AlKabeerGroupPage = () => {
  const { lang, translations } = useContext(LangContext);
  const { t, tArray } = useTranslation("business-review");

  const isRtl = lang === "ar";
  const yearSuffix = isRtl ? "م" : "";

  const strategicParagraphs = tArray("alKabeer.strategicHighlights.paragraphs");
  const alKabeerData = translations[lang as "en" | "ar"]["business-review"].alKabeer;
  const charts = alKabeerData.charts;
  const labels = alKabeerData.intro.labels;

  return (
    <div>
      {/* 1. Header */}
      <NewHeader imageUrl={HeaderBg} title={t("alKabeer.pageTitle")} />

      {/* 2. Intro header with trapezium + logo */}
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
                  <p className="font-bold text-savola-cool-grey text-base md:text-lg leading-relaxed mb-4">
                    {t("alKabeer.header.text")}
                  </p>
                  <p className="font-bold text-savola-orange text-base">
                    {t("alKabeer.header.label1")}
                  </p>
                  <p className="font-bold text-savola-orange text-base">
                    {t("alKabeer.header.label2")}
                  </p>
                </AnimationPopUp>
              </div>
            </div>
            <div className="flex md:justify-start items-end h-full w-full">
              <AnimationPopUp>
                <img
                  src={AlKabeerLogo}
                  alt="Al Kabeer"
                  className="h-24 w-auto"
                />
              </AnimationPopUp>
            </div>
          </div>
        </SmallContainer>
      </section>

      {/* 3. Intro description */}
      <section>
        <SmallContainer>
          <AnimationSlideTop>
            <p className="text-savola-cool-grey leading-relaxed text-xl mb-4">
              {t("alKabeer.intro.desc")}
            </p>
          </AnimationSlideTop>
        </SmallContainer>
      </section>

      {/* 4. Shareholding + Net Revenue labels */}
      <section className="py-6">
        <SmallContainer>
          <AnimationPopUp>
            <div className="flex flex-wrap items-center gap-8">
              {labels.map((label, i) => (
                <div key={i}>
                  <p
                    className="text-savola-cool-grey text-sm font-semibold mb-1"
                    dangerouslySetInnerHTML={{ __html: label.title }}
                  />
                  <p className="font-black text-2xl text-savola-orange leading-none">
                    <span
                      dangerouslySetInnerHTML={{ __html: label.number.prefix ?? "" }}
                    />
                    <CountUp end={label.number.num} />
                    <span
                      className="ms-1"
                      dangerouslySetInnerHTML={{ __html: label.number.suffix }}
                    />
                  </p>
                </div>
              ))}
            </div>
          </AnimationPopUp>
        </SmallContainer>
      </section>

      {/* 5. Operations paragraph */}
      <section className="pb-8">
        <SmallContainer>
          <AnimationSlideTop>
            <p
              className="text-savola-cool-grey leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t("alKabeer.intro.paragraph") }}
            />
          </AnimationSlideTop>
        </SmallContainer>
      </section>

      {/* 6. Financial Highlights + Charts side by side */}
      <section className="py-8 md:py-12">
        <SmallContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Text content */}
            <div>
              <AnimationSlideTop>
                <h2 className="font-bold text-savola-navy mb-3">
                  {t("alKabeer.financialHighlights.title")}
                </h2>
                <p
                  className="text-savola-cool-grey leading-relaxed text-sm mb-8"
                  dangerouslySetInnerHTML={{
                    __html: t("alKabeer.financialHighlights.text"),
                  }}
                />
              </AnimationSlideTop>

              <AnimationSlideTop>
                <h2 className="font-bold text-savola-navy mb-3">
                  {t("alKabeer.strategicHighlights.title")}
                </h2>
                {strategicParagraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-savola-cool-grey leading-relaxed text-sm mb-4"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </AnimationSlideTop>
            </div>

            {/* Charts */}
            <div className="flex flex-col gap-6">
              {charts.map((chart, i) => (
                <Chart
                  key={i}
                  title={chart.title}
                  titleUnit={chart.titleUnit}
                  data={chart.data}
                  isRtl={isRtl}
                  yearSuffix={yearSuffix}
                />
              ))}
            </div>
          </div>
        </SmallContainer>
      </section>
    </div>
  );
};

export default AlKabeerGroupPage;
