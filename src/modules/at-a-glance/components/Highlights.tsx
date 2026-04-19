import SmallContainer from "../../common/components/container/SmallContainer";
import { useTranslation } from "../../common/hooks/useTranslation";
import AnimationSlideTop from "../../common/components/Animations/AnimationSlideTop";
import CountUp from "../../common/components/Animations/CountUp";

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

const Highlights = () => {
  const { t } = useTranslation("at-a-glance");

  return (
    <section className="bg-white py-8 md:py-10">
      <SmallContainer>
        {/* Operational Highlights */}
        <div>
          <h2 className={`mb-4 text-xl font-black ${navy}`}>
            {t("highlights.operationalTitle")}
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Row 1 */}
            <AnimationSlideTop style={{ animationDelay: "0ms" }}>
              <OCard>
                <p className={`${lbl} mb-3 text-xl`}>
                  {t("highlights.prodLabel")}
                </p>
                <div className="flex items-baseline gap-2">
                  <CountUp end={3.74} decimals={2} className={bigNum} />
                  <span className={`text-lg font-extrabold ${navy}`}>
                    {t("highlights.prodUnit")}
                  </span>
                </div>
              </OCard>
            </AnimationSlideTop>

            <AnimationSlideTop style={{ animationDelay: "100ms" }}>
              <OCard>
                <p className={lbl}>
                  {t("highlights.pandaStoresBefore")}{" "}
                  <CountUp
                    end={20}
                    className={`text-4xl font-black ${navy} leading-none align-bottom`}
                  />{" "}
                  {t("highlights.pandaStoresAfter")}
                </p>
              </OCard>
            </AnimationSlideTop>

            {/* Row 2 */}
            <AnimationSlideTop style={{ animationDelay: "200ms" }}>
              <OCard>
                <p className={`${lbl} mb-3`}>
                  {t("highlights.bayaraLabel")}
                </p>
                <CountUp end={35} suffix="%" className={bigNum} />
              </OCard>
            </AnimationSlideTop>

            <AnimationSlideTop style={{ animationDelay: "300ms" }}>
              <OCard>
                <p className={lbl}>
                  {t("highlights.pandaLoyaltyBefore")}{" "}
                  <CountUp
                    end={14}
                    className={`text-5xl font-black ${navy} leading-none align-bottom`}
                  />
                </p>
                <p className={lbl}>
                  <span className="font-bold">{t("highlights.pandaLoyaltyMidBold")}</span>{" "}
                  {t("highlights.pandaLoyaltyMid")}{" "}
                  <CountUp
                    end={9}
                    className={`text-5xl font-black ${navy} leading-none align-bottom`}
                  />{" "}
                  <span className="font-bold">{t("highlights.pandaLoyaltyAfterBold")}</span>
                </p>
              </OCard>
            </AnimationSlideTop>

            {/* Row 3 — full width */}
            <AnimationSlideTop className="md:col-span-2" style={{ animationDelay: "400ms" }}>
              <OCard className="md:col-span-2">
                <p className={`${lbl} mb-5`}>
                  {t("highlights.marketLabel")}
                </p>
                <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                  <div>
                    <p className={`${lbl} mb-1`}>
                      {t("highlights.afiaSaudiOils")}
                    </p>
                    <CountUp end={55} suffix="%+" className={bigNum} />
                  </div>
                  <div>
                    <p className={`${lbl} mb-1`}>
                      {t("highlights.rawabyEgyptGhee")}
                    </p>
                    <CountUp end={40} prefix="~" suffix="%" className={bigNum} />
                  </div>
                  <div>
                    <p className={`${lbl} mb-1`}>{t("highlights.osraSaudiSugar")}</p>
                    <CountUp end={60} suffix="%+" className={bigNum} />
                  </div>
                  <div>
                    <p className={`${lbl} mb-1`}>{t("highlights.algeriaLabel")}</p>
                    <CountUp end={40} suffix="%" className={bigNum} />
                    <span className={`text-sm font-bold ${navy} ml-1`}>
                      {t("highlights.algeriaSuffix")}
                    </span>
                  </div>
                </div>
                <p className={`${lbl} mt-5`}>
                  {t("highlights.afiaTuna")}
                </p>
              </OCard>
            </AnimationSlideTop>
          </div>
        </div>

        {/* Sustainability Highlights */}
        <div className="mt-8 md:mt-12">
          <h2 className={`mb-4 text-xl font-black ${navy}`}>
            {t("highlights.sustainabilityTitle")}
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Row 1 */}
            <AnimationSlideTop style={{ animationDelay: "0ms" }}>
              <SCard>
                <p className={lbl}>
                  {t("highlights.meiraText")}
                </p>
              </SCard>
            </AnimationSlideTop>

            <AnimationSlideTop style={{ animationDelay: "100ms" }}>
              <SCard>
                <p className={`${lbl} mb-3`}>
                  {t("highlights.ghgLabel")}
                </p>
                <div className="flex items-baseline gap-2">
                  <CountUp end={16.3} decimals={1} suffix="%" className={bigNum} />
                  <span className={`text-sm font-bold ${navy}`}>
                    {t("highlights.ghgUnit")}
                  </span>
                </div>
              </SCard>
            </AnimationSlideTop>

            {/* Row 2 */}
            <AnimationSlideTop style={{ animationDelay: "200ms" }}>
              <SCard>
                <p className={`${lbl} mb-3`}>
                  {t("highlights.energyLabel")}
                </p>
                <div className="flex flex-wrap items-baseline gap-x-1.5">
                  <Riyal className={`text-3xl font-black ${navy}`} />
                  <CountUp end={104} className={bigNum} />
                  <span className={`text-sm font-bold ${navy}`}>{t("financialKPIs.million")}</span>
                  <span className={lbl}>{t("highlights.energyUnit")}</span>
                </div>
              </SCard>
            </AnimationSlideTop>

            <AnimationSlideTop style={{ animationDelay: "300ms" }}>
              <SCard>
                <p className={`${lbl} mb-3`}>
                  {t("highlights.smesLabel")}
                </p>
                <div className="flex items-baseline gap-2">
                  <CountUp end={14} className={bigNum} />
                  <span className={`text-sm font-bold ${navy}`}>{t("highlights.smesUnit")}</span>
                </div>
              </SCard>
            </AnimationSlideTop>

            {/* Row 3 */}
            <AnimationSlideTop style={{ animationDelay: "400ms" }}>
              <SCard>
                <CountUp end={1091} className={bigNum} />
                <p className={`${lbl} mb-3 mt-1`}>{t("highlights.trainingA")}</p>
                <CountUp end={1724} className={bigNum} />
                <p className={`${lbl} mb-3 mt-1`}>{t("highlights.trainingB")}</p>
                <CountUp end={2867} className={bigNum} />
                <p className={`${lbl} mt-1`}>
                  {t("highlights.trainingC")}
                </p>
              </SCard>
            </AnimationSlideTop>

            <AnimationSlideTop style={{ animationDelay: "500ms" }}>
              <SCard>
                <p className={`${lbl} mb-3`}>
                  {t("highlights.hajjLabel")}
                </p>
                <div className="flex items-baseline gap-2 mb-1">
                  <CountUp end={1259992} className={`font-black text-3xl ${navy}`} />
                  <span className={`text-xs font-bold ${navy}`}>{t("highlights.hajjFoodUnit")}</span>
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <CountUp end={2014} className={bigNum} />
                  <span className={`text-xs font-bold ${navy}`}>
                    {t("highlights.hajjSacrificeUnit")}
                  </span>
                </div>
                <p className={`${lbl} mb-2`}>{t("highlights.hajjValueLabel")}</p>
                <div className="flex items-baseline gap-1.5">
                  <Riyal className={`text-3xl font-black ${navy}`} />
                  <CountUp end={17.3} decimals={1} className={bigNum} />
                  <span className={`text-sm font-bold ${navy}`}>{t("highlights.hajjValueUnit")}</span>
                </div>
              </SCard>
            </AnimationSlideTop>
          </div>
        </div>
      </SmallContainer>
    </section>
  );
};

export default Highlights;
