import SmallContainer from "../../common/components/container/SmallContainer";

const navy = "text-[#1D3461]";
const bigNum = `font-black text-4xl ${navy}`;
const lbl = `text-xl leading-relaxed ${navy}`;

const SCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`bg-linear-180 from-savola-orange-20 to-savola-orange-20/0 p-5 ${className}`}>{children}</div>;

const OCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`bg-linear-180 from-savola-green-20 to-savola-green-20/0 p-5 ${className}`}
  >
    {children}
  </div>
);

const Riyal = ({ className = "" }: { className?: string }) => (
  <i className={`riyal-icon ${className}`} />
);

const Highlights = () => (
  <section className="bg-white py-8 md:py-10">
    <SmallContainer>
      {/* Operational Highlights */}
      <div>
        <h2 className={`mb-4 text-xl font-black ${navy}`}>
          Operational Highlights
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Row 1 */}
          <OCard>
            <p className={`${lbl} mb-3 text-xl`}>
              Savola Foods' production volumes reached a yearly record.
            </p>
            <div className="flex items-baseline gap-2">
              <span className={bigNum}>3.74</span>
              <span className={`text-lg font-extrabold ${navy}`}>
                million metric tons
              </span>
            </div>
          </OCard>

          <OCard>
            <p className={lbl}>
              Panda added{" "}
              <span
                className={`text-4xl font-black ${navy} leading-none align-bottom`}
              >
                20
              </span>{" "}
              new stores in 2025 (42 new stores over 3 years).
            </p>
          </OCard>

          {/* Row 2 */}
          <OCard>
            <p className={`${lbl} mb-3`}>
              Bayara led GCC with share in nuts, pulses, and spices.
            </p>
            <span className={bigNum}>35%</span>
          </OCard>

          <OCard>
            <p className={lbl}>
              Panda loyalty platform membership exceeded{" "}
              <span
                className={`text-5xl font-black ${navy} leading-none align-bottom`}
              >
                14
              </span>
            </p>
            <p className={lbl}>
              <span className="font-bold">million customers</span> in 2025, with
              around{" "}
              <span
                className={`text-5xl font-black ${navy} leading-none align-bottom`}
              >
                9
              </span>{" "}
              <span className="font-bold">million active members.</span>
            </p>
          </OCard>

          {/* Row 3 — full width */}
          <OCard className="md:col-span-2">
            <p className={`${lbl} mb-5`}>
              Savola Foods sustained growth across markets and categories.
            </p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-5">
              <div>
                <p className={`${lbl} mb-1`}>
                  Afia, Arabi, Shams drove share in Saudi oils.
                </p>
                <span className={bigNum}>55%+</span>
              </div>
              <div>
                <p className={`${lbl} mb-1`}>
                  Rawaby and Ganna reached share in Egypt ghee.
                </p>
                <span className={bigNum}>~40%</span>
              </div>
              <div>
                <p className={`${lbl} mb-1`}>Osra held share in Saudi sugar.</p>
                <span className={bigNum}>60%+</span>
              </div>
              <div>
                <p className={`${lbl} mb-1`}>Algeria exited 2025</p>
                <span className={bigNum}>40%</span>
                <span className={`text-sm font-bold ${navy} ml-1`}>
                  market share.
                </span>
              </div>
            </div>
            <p className={`${lbl} mt-5`}>
              Afia tuna launch extended Afia beyond oils in Saudi.
            </p>
          </OCard>
        </div>
      </div>

      {/* Sustainability Highlights */}
      <div className="mt-8 md:mt-12">
        <h2 className={`mb-4 text-xl font-black ${navy}`}>
          Sustainability Highlights
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Row 1 */}
          <SCard>
            <p className={lbl}>
              Savola Group ranked second for Best Sustainability and ESG Reports
              in the MENA region for its 2024 report by MEIRA.
            </p>
          </SCard>

          <SCard>
            <p className={`${lbl} mb-3`}>
              Savola Foods reduced greenhouse gas emissions intensity.
            </p>
            <div className="flex items-baseline gap-2">
              <span className={bigNum}>16.3%</span>
              <span className={`text-sm font-bold ${navy}`}>
                per metric ton
              </span>
            </div>
          </SCard>

          {/* Row 2 */}
          <SCard>
            <p className={`${lbl} mb-3`}>
              Energy-efficiency and utilities optimization initiatives delivered
            </p>
            <div className="flex flex-wrap items-baseline gap-x-1.5">
              <Riyal className={`text-3xl font-black ${navy}`} />
              <span className={bigNum}>104</span>
              <span className={`text-sm font-bold ${navy}`}>million</span>
              <span className={lbl}>in energy-related cost savings.</span>
            </div>
          </SCard>

          <SCard>
            <p className={`${lbl} mb-3`}>
              Savola Group financed through the Savola World's Entrepreneurs'
              Financing Portfolio Program in collaboration with the Social
              Development Bank.
            </p>
            <div className="flex items-baseline gap-2">
              <span className={bigNum}>14</span>
              <span className={`text-sm font-bold ${navy}`}>SMEs</span>
            </div>
          </SCard>

          {/* Row 3 */}
          <SCard>
            <span className={bigNum}>1,091</span>
            <p className={`${lbl} mb-3 mt-1`}>employees received training</p>
            <span className={bigNum}>1,724</span>
            <p className={`${lbl} mb-3 mt-1`}>classroom training days</p>
            <span className={bigNum}>2,867</span>
            <p className={`${lbl} mt-1`}>
              virtual training hours delivered across the Group.
            </p>
          </SCard>

          <SCard>
            <p className={`${lbl} mb-3`}>
              Savola World partnered with Eta'am on the "Hajj Without Waste"
              initiative, saving
            </p>
            <div className="flex items-baseline gap-2 mb-1">
              <span className={`font-black text-3xl ${navy}`}>1,259,992</span>
              <span className={`text-xs font-bold ${navy}`}>food units</span>
            </div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className={bigNum}>2,014</span>
              <span className={`text-xs font-bold ${navy}`}>
                sacrificial offerings
              </span>
            </div>
            <p className={`${lbl} mb-2`}>with a total value exceeding</p>
            <div className="flex items-baseline gap-1.5">
              <Riyal className={`text-3xl font-black ${navy}`} />
              <span className={bigNum}>17.3</span>
              <span className={`text-sm font-bold ${navy}`}>million</span>
            </div>
          </SCard>
        </div>
      </div>
    </SmallContainer>
  </section>
);

export default Highlights;
