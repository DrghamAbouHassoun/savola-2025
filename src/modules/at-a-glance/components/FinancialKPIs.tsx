import SmallContainer from "../../common/components/container/SmallContainer";

interface KpiItem {
  year: string;
  value: number;
  highlight?: boolean;
}

interface KpiGroup {
  label: string;
  unit: string;
  items: KpiItem[];
  maxValue: number;
}

const KPI_GROUPS: KpiGroup[] = [
  {
    label: "Net Profit",
    unit: '<i class="riyal-icon"></i> million',
    maxValue: 9974,
    items: [
      { year: "2023", value: 899 },
      { year: "2024", value: 9974 },
      { year: "2025", value: 874, highlight: true },
    ],
  },
  {
    label: "Total Assets",
    unit: '<i class="riyal-icon"></i> million',
    maxValue: 29937,
    items: [
      { year: "2023", value: 29937 },
      { year: "2024", value: 21394 },
      { year: "2025", value: 20480, highlight: true },
    ],
  },
  {
    label: "Revenue",
    unit: '<i class="riyal-icon"></i> million',
    maxValue: 26081,
    items: [
      { year: "2023", value: 24150 },
      { year: "2024", value: 23046 },
      { year: "2025", value: 26081, highlight: true },
    ],
  },
  {
    label: "Shareholders' Equity",
    unit: '<i class="riyal-icon"></i> million',
    maxValue: 8397,
    items: [
      { year: "2023", value: 8397 },
      { year: "2024", value: 4620 },
      { year: "2025", value: 5516, highlight: true },
    ],
  },
  {
    label: "Gross Profit",
    unit: '<i class="riyal-icon"></i> million',
    maxValue: 5089,
    items: [
      { year: "2023", value: 5046 },
      { year: "2024", value: 4833 },
      { year: "2025", value: 5089, highlight: true },
    ],
  },
  {
    label: "Capital Expenditure",
    unit: '<i class="riyal-icon"></i> million',
    maxValue: 915,
    items: [
      { year: "2023", value: 915 },
      { year: "2024", value: 744 },
      { year: "2025", value: 859, highlight: true },
    ],
  },
];

const formatValue = (v: number) =>
  v >= 1000 ? v.toLocaleString() : v.toString();

const KpiCard = ({ group }: { group: KpiGroup }) => (
  <article className="flex flex-col gap-2.5">
    <div className="mb-1 flex items-baseline gap-1.5">
      <span className="leading-tight text-savola-cool-grey text-lg font-semibold">
        {group.label}
      </span>
      (
      <span
        className="text-xs  text-savola-cool-grey/55"
        dangerouslySetInnerHTML={{ __html: group.unit }}
      ></span>
      )
    </div>
    {group.items.map((item) => {
      const pct = Math.max(16, (item.value / group.maxValue) * 100);
      return (
        <div key={item.year} className="grid  items-center gap-3">
          <div className="relative h-5 overflow-hidden bg-savola-green-20">
            <span className="absolute left-2 font-bold text-savola-cool-grey/80">
              {item.year}
            </span>
            <div
              className={`h-full rounded-tr-full transition-all duration-700 ${
                item.highlight ? "bg-savola-green" : "bg-savola-green/75"
              }`}
              style={{ width: `${pct}%`, minWidth: "45%" }}
            />
            <span
              className={`absolute top-1/2 -translate-y-1/2 font-black ${
                item.highlight ? "text-white" : "text-savola-cool-grey"
              }`}
              style={{ left: pct > 45 ? `${pct - 20}%` : "45%" }}
            >
              {formatValue(item.value)}
            </span>
          </div>
        </div>
      );
    })}
  </article>
);

const FinancialKPIs = () => (
  <section className="bg-linear-180 from-savola-green-20 via-white to-white py-14 md:py-18">
    <SmallContainer className="max-w-5xl">
      <div className="space-y-10 md:space-y-12">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-black leading-tight text-savola-green md:text-4xl md:leading-[1.05]">
            Unlocked New Opportunities, Paving the Way for a Future of Endless
            Potential
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
          {KPI_GROUPS.map((group) => (
            <KpiCard key={group.label} group={group} />
          ))}
        </div>
      </div>
    </SmallContainer>
  </section>
);

export default FinancialKPIs;
