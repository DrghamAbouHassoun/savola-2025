import SmallContainer from "../../common/components/container/SmallContainer";

const OPERATIONAL = [
  "Savola Foods' production volumes reached a yearly record 3.74 million metric tons.",
  "Savola Foods sustained growth across markets and categories:",
  [
    "Afia, Arabi, Shams drove 55%+ share in Saudi oils.",
    "Osra held 60%+ share in Saudi sugar.",
    "Afia tuna launch extended Afia beyond oils in Saudi.",
    "Rawaby and Ganna reached ~40% share in Egypt ghee.",
    "Algeria exited 2025 at 40% market share.",
  ],
  "Bayara led GCC with 35% share in nuts, pulses, and spices.",
  "Panda added 20 new stores in 2025 (42 new stores over 3 years).",
  "Panda loyalty platform membership exceeded 14 million customers in 2025, with around 9 million active members.",
];

const SUSTAINABILITY = [
  "Savola Foods reduced greenhouse gas emissions intensity by 16.3% per metric ton.",
  "Energy-efficiency and utilities optimization initiatives delivered SAR 104 million in energy-related cost savings.",
  "1,091 employees received training, with 1,724 classroom training days and 2,867 virtual training hours delivered across the Group.",
  "Savola Group ranked second for Best Sustainability and ESG Reports in the MENA region for its 2024 report by MEIRA.",
  'Savola World partnered with Eta\'am on the "Hajj Without Waste" initiative, saving 1,259,992 food units and 2,014 sacrificial offerings, with a total value exceeding SAR 17.3 million.',
  "Savola Group financed 14 SMEs through the Savola World's Entrepreneurs' Financing Portfolio Program in collaboration with the Social Development Bank.",
];

type BulletItem = string | string[];

const Bullet = ({ text }: { text: string }) => (
  <li className="flex gap-2 leading-relaxed text-sm">
    <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-savola-green" />
    <span>{text}</span>
  </li>
);

const BulletList = ({ items }: { items: BulletItem[] }) => (
  <ul className="space-y-2.5">
    {items.map((item, index) =>
      Array.isArray(item) ? (
        <li key={index} className="list-none">
          <ul className="mt-1 space-y-1.5 ps-5">
            {item.map((subItem) => (
              <Bullet key={subItem} text={subItem} />
            ))}
          </ul>
        </li>
      ) : (
        <Bullet key={item} text={item} />
      )
    )}
  </ul>
);

const Highlights = () => (
  <section className="bg-white py-8 md:py-10">
    <SmallContainer>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="mb-4 text-xl font-black tracking-[0.02em] text-savola-cool-grey md:mb-5">
            Operational Highlights
          </h2>
          <BulletList items={OPERATIONAL} />
        </div>

        <div>
          <h2 className="mb-4 text-xl font-black tracking-[0.02em] text-savola-cool-grey md:mb-5">
            Sustainability Highlights
          </h2>
          <BulletList items={SUSTAINABILITY} />
        </div>
      </div>
    </SmallContainer>
  </section>
);

export default Highlights;
