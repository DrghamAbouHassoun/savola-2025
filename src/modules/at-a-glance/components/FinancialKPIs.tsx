import { useContext, useEffect, useRef } from "react";
import { useCountUp } from "react-countup";
import SmallContainer from "../../common/components/container/SmallContainer";
import useInView from "../../common/hooks/useInView";
import { useTranslation } from "../../common/hooks/useTranslation";
import AnimationSlideTop from "../../common/components/Animations/AnimationSlideTop";
import { LangContext } from "../../common/contexts/LangProvider";

interface KpiItem {
  year: string;
  value: number;
  highlight?: boolean;
}

interface KpiGroup {
  id: string;
  labelKey: string;
  unit: string;
  items: KpiItem[];
  maxValue: number;
}

interface KpiBarProps {
  item: KpiItem;
  maxValue: number;
  index: number;
  inView: boolean;
  isRtl: boolean;
  yearSuffix: string;
}

const KpiBar = ({ item, maxValue, index, inView, isRtl, yearSuffix }: KpiBarProps) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const { start, reset } = useCountUp({
    ref: spanRef as React.RefObject<HTMLElement>,
    end: item.value,
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

  const pct = Math.max(16, (item.value / maxValue) * 100);
  const valuePct = pct > 45 ? `${pct - 20}%` : "30%";

  return (
    <div className="grid items-center gap-3">
      <div className="relative h-5 overflow-hidden bg-savola-green-20">
        <span
          className={`absolute font-bold text-savola-cool-grey/80 ${
            isRtl ? "right-2" : "left-2"
          }`}
        >
          {item.year}{yearSuffix}
        </span>
        <div
          className={`h-full transition-[width] ease-out ${
            isRtl ? "rounded-tl-full" : "rounded-tr-full"
          } ${item.highlight ? "bg-savola-green" : "bg-savola-green/75"}`}
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
            item.highlight ? "text-white" : "text-savola-cool-grey"
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

const KpiCard = ({ group, yearSuffix }: { group: KpiGroup; yearSuffix: string }) => {
  const { ref, inView } = useInView<HTMLParagraphElement>();
  const { lang } = useContext(LangContext);
  const isRtl = lang === "ar";

  return (
    <article ref={ref} className="flex flex-col gap-2.5">
      <div className="mb-1 flex items-baseline gap-1.5">
        <AnimationSlideTop>
          <span className="leading-tight text-savola-cool-grey text-lg font-semibold">
            {group.labelKey}
          </span>
        </AnimationSlideTop>
        (
        <span
          className="text-xs text-savola-cool-grey/55"
          dangerouslySetInnerHTML={{ __html: group.unit }}
        />
        )
      </div>
      {group.items.map((item, i) => (
        <KpiBar
          key={item.year}
          item={item}
          maxValue={group.maxValue}
          index={i}
          inView={inView}
          isRtl={isRtl}
          yearSuffix={yearSuffix}
        />
      ))}
    </article>
  );
};

const FinancialKPIs = () => {
  const { t } = useTranslation("at-a-glance");
  const { lang } = useContext(LangContext);
  const isRtl = lang === "ar";

  const unit = isRtl ? `${t("financialKPIs.million")} <i class="riyal-icon"></i>` : `<i class="riyal-icon"></i> ${t("financialKPIs.million")}`;
  const yearSuffix = t("financialKPIs.yearSuffix");

  const KPI_GROUPS: KpiGroup[] = [
    {
      id: "netProfit",
      labelKey: t("financialKPIs.netProfit"),
      unit,
      maxValue: 9974,
      items: [
        { year: "2023", value: 899 },
        { year: "2024", value: 9974 },
        { year: "2025", value: 874, highlight: true },
      ],
    },
    {
      id: "totalAssets",
      labelKey: t("financialKPIs.totalAssets"),
      unit,
      maxValue: 29937,
      items: [
        { year: "2023", value: 29937 },
        { year: "2024", value: 21394 },
        { year: "2025", value: 20480, highlight: true },
      ],
    },
    {
      id: "revenue",
      labelKey: t("financialKPIs.revenue"),
      unit,
      maxValue: 26081,
      items: [
        { year: "2023", value: 24150 },
        { year: "2024", value: 23046 },
        { year: "2025", value: 26081, highlight: true },
      ],
    },
    {
      id: "shareholdersEquity",
      labelKey: t("financialKPIs.shareholdersEquity"),
      unit,
      maxValue: 8397,
      items: [
        { year: "2023", value: 8397 },
        { year: "2024", value: 4620 },
        { year: "2025", value: 5516, highlight: true },
      ],
    },
    {
      id: "grossProfit",
      labelKey: t("financialKPIs.grossProfit"),
      unit,
      maxValue: 5089,
      items: [
        { year: "2023", value: 5046 },
        { year: "2024", value: 4833 },
        { year: "2025", value: 5089, highlight: true },
      ],
    },
    {
      id: "capex",
      labelKey: t("financialKPIs.capex"),
      unit,
      maxValue: 915,
      items: [
        { year: "2023", value: 915 },
        { year: "2024", value: 774 },
        { year: "2025", value: 859, highlight: true },
      ],
    },
  ];

  return (
    <section className="bg-linear-180 from-savola-green-20 via-white to-white py-14 md:py-18">
      <SmallContainer className="max-w-5xl">
        <div className="space-y-10 md:space-y-12">
          <div className="max-w-4xl">
            <AnimationSlideTop>
              <h2 className="text-2xl font-black leading-tight text-savola-green md:text-4xl md:leading-[1.05]">
                {t("financialKPIs.heading")}
              </h2>
            </AnimationSlideTop>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
            {KPI_GROUPS.map((group) => (
              <KpiCard key={group.id} group={group} yearSuffix={yearSuffix} />
            ))}
          </div>
        </div>
      </SmallContainer>
    </section>
  );
};

export default FinancialKPIs;
