import SmallContainer from "../../common/components/container/SmallContainer";
import { useTranslation } from "../../common/hooks/useTranslation";
import AnimationSlideTop from "../../common/components/Animations/AnimationSlideTop";
import CountUp from "../../common/components/Animations/CountUp";
import { useLocale } from "../../common/hooks/useLocale";
import {
  operationalHighlightsAr,
  operationalHighlightsEn,
  sustainabilityListAr,
  sustainabilityListEn,
} from "../data/highlights";

const navy = "text-[#1D3461]";
const lbl = `text-xl leading-relaxed ${navy}`;

// const SCard = ({
//   children,
//   className = "",
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => (
//   <div
//     className={`bg-linear-180 from-savola-orange-20 to-savola-orange-20/0 p-5 ${className}`}
//   >
//     {children}
//   </div>
// );

// const OCard = ({
//   children,
//   className = "",
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => (
//   <div
//     className={`bg-linear-180 from-savola-green-20 to-savola-green-20/0 p-5 ${className}`}
//   >
//     {children}
//   </div>
// );

const OperCard = ({
  span1,
  num1,
  span2,
  num2,
  span3,
  num3,
}: {
  span1?: string;
  num1?: {
    suffix: string;
    number: number;
    prefix: string;
  };
  span2?: string;
  num2?: {
    suffix: string;
    number: number;
    prefix: string;
  };
  span3?: string;
  num3?: {
    suffix: string;
    number: number;
    prefix: string;
  };
}) => {
  return (
    <div
      className={`bg-linear-180 from-savola-green-20 to-savola-green-20/0 p-5 text-savola-navy`}
    >
      {span1 && <p className="text-lg">{span1}</p>}
      {num1 && (
        <CountUp
          end={num1.number}
          suffix={num1.prefix}
          prefix={num1.suffix || ""}
          className="text-4xl font-bold"
        />
      )}
      {span2 && <p className="text-lg">{span2}</p>}
      {num2 && (
        <CountUp
          end={num2.number}
          suffix={num2.prefix}
          prefix={num2.suffix || ""}
          className="text-4xl font-bold"
        />
      )}
      {span3 && <p className="text-lg">{span3}</p>}
      {num3 && (
        <CountUp
          end={num3.number}
          suffix={num3.prefix}
          prefix={num3.suffix || ""}
          className="text-2xl"
        />
      )}
    </div>
  );
};

const OperCardSecondary = ({
  span1,
  num1,
  span2,
  num2,
  span3,
  num3,
}: {
  span1?: string;
  num1?: {
    suffix: string;
    number: number;
    prefix: string;
  };
  span2?: string;
  num2?: {
    suffix: string;
    number: number;
    prefix: string;
  };
  span3?: string;
  num3?: {
    suffix: string;
    number: number;
    prefix: string;
  };
}) => {
  return (
    <div className={``}>
      {span1 && <p className="text-lg">{span1}</p>}
      {num1 && (
        <CountUp
          end={num1.number}
          suffix={num1.prefix}
          prefix={num1.suffix || ""}
          className="text-4xl font-bold"
        />
      )}
      {span2 && <p className="text-lg">{span2}</p>}
      {num2 && (
        <CountUp
          end={num2.number}
          suffix={num2.prefix}
          prefix={num2.suffix || ""}
          className="text-4xl font-bold"
        />
      )}
      {span3 && <p className="text-lg">{span3}</p>}
      {num3 && (
        <CountUp
          end={num3.number}
          suffix={num3.prefix}
          prefix={num3.suffix || ""}
          className="text-2xl"
        />
      )}
    </div>
  );
};

const SustCard = ({
  span1,
  num1,
  span2,
  num2,
  span3,
  num3,
  span4
}: {
  span1?: string;
  num1?: {
    suffix: string;
    number: number;
    prefix: string;
  };
  span2?: string;
  num2?: {
    suffix: string;
    number: number;
    prefix: string;
  };
  span3?: string;
  num3?: {
    suffix: string;
    number: number;
    prefix: string;
  };
  span4?: string;
}) => {
  return (
    <div
      className={`bg-linear-180 text-lg from-savola-orange-20 to-savola-orange-20/0 p-5 text-savola-navy`}
    >
      {span1 && <p className="text-lg">{span1}</p>}
      {num1 && (
        <div className="flex items-end gap-1">
          {num1.suffix && (
            <span
              className="text-4xl font-bold"
              dangerouslySetInnerHTML={{ __html: num1.suffix }}
            />
          )}
          <CountUp end={num1.number} className="text-4xl font-bold" />
          {num1.prefix && (
            <span
              className="text-4xl font-bold"
              dangerouslySetInnerHTML={{ __html: num1.prefix }}
            />
          )}
        </div>
      )}
      {span2 && <p>{span2}</p>}
      {num2 && (
        <div className="flex items-end gap-1">
          {num2.suffix && (
            <span
              className="text-4xl font-bold"
              dangerouslySetInnerHTML={{ __html: num2.suffix }}
            />
          )}
          <CountUp end={num2.number} className="text-4xl font-bold" />
          {num2.prefix && (
            <span
              className="text-4xl font-bold"
              dangerouslySetInnerHTML={{ __html: num2.prefix }}
            />
          )}
        </div>
      )}
      {span3 && <p>{span3}</p>}
      {num3 && (
        <div className="flex items-end gap-1">
          {num3.suffix && (
            <span
              className="text-4xl font-bold"
              dangerouslySetInnerHTML={{ __html: num3.suffix }}
            />
          )}
          <CountUp end={num3.number} className="text-4xl font-bold" />
          {num3.prefix && (
            <span
              className="text-4xl font-bold"
              dangerouslySetInnerHTML={{ __html: num3.prefix }}
            />
          )}
        </div>
      )}
      {span4 && <p>{span4}</p>}
    </div>
  );
};

const Highlights = () => {
  const { t } = useTranslation("at-a-glance");
  const { lang } = useLocale();

  const operationalData =
    lang === "ar" ? operationalHighlightsAr : operationalHighlightsEn;

  const sustainData =
    lang === "ar" ? sustainabilityListAr : sustainabilityListEn;

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
              <OperCard
                span1={operationalData.prodCard.span1}
                num1={operationalData.prodCard.num1}
                span2={operationalData.prodCard?.span2 || ""}
              />
            </AnimationSlideTop>
            {operationalData.bayaraCard && (
              <AnimationSlideTop style={{ animationDelay: "0ms" }}>
                <OperCard
                  span1={operationalData.bayaraCard?.span1}
                  num1={operationalData.bayaraCard.num1}
                  span2={operationalData.bayaraCard?.span2 || ""}
                />
              </AnimationSlideTop>
            )}

            {/* Row 2 */}
            <AnimationSlideTop style={{ animationDelay: "100ms" }}>
              <OperCard
                span1={operationalData.pandaCard.span1}
                num1={operationalData.pandaCard.num1}
                span2={operationalData.pandaCard.span2}
              />
            </AnimationSlideTop>
            <AnimationSlideTop style={{ animationDelay: "200ms" }}>
              <OperCard
                span1={operationalData.pandaLoyaltyCard.span1}
                span2={operationalData.pandaLoyaltyCard.span2}
                span3={operationalData.pandaLoyaltyCard.span3}
                num1={operationalData.pandaLoyaltyCard.num1}
                num2={operationalData.pandaLoyaltyCard.num2}
              />
            </AnimationSlideTop>

            {/* Row 3 — full width */}
            <AnimationSlideTop
              className="md:col-span-2"
              style={{ animationDelay: "400ms" }}
            >
              <div className="bg-linear-180 from-savola-green-20 to-savola-green-20/0 p-5 text-savola-navy">
                <p className={`${lbl} mb-5`}>{operationalData.savolaFood.p1}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6">
                  {operationalData.savolaFood.items.map((item) => (
                    <OperCardSecondary
                      span1={item.span1}
                      span2={item.span2}
                      num1={item.num1}
                    />
                  ))}
                </div>
              </div>
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
              <SustCard span1={sustainData.rank.span1} />
            </AnimationSlideTop>

            <AnimationSlideTop style={{ animationDelay: "100ms" }}>
              <SustCard
                span1={sustainData.foods.span1}
                span2={sustainData.foods.span2}
                num1={sustainData.foods.num1}
              />
            </AnimationSlideTop>

            {/* Row 2 */}
            <AnimationSlideTop style={{ animationDelay: "200ms" }}>
              <SustCard
                span1={sustainData.energy.span1}
                span2={sustainData.energy.span2}
                num1={sustainData.energy.num1}
              />
            </AnimationSlideTop>

            <AnimationSlideTop style={{ animationDelay: "300ms" }}>
              <SustCard
                span1={sustainData.employees.span1}
                span2={sustainData.employees.span2}
                span3={sustainData.employees.span3}
                span4={sustainData.employees.span4}
                num1={sustainData.employees.num1}
                num2={sustainData.employees.num2}
              />
            </AnimationSlideTop>

            {/* Row 3 */}
            <AnimationSlideTop style={{ animationDelay: "400ms" }}>
              <SustCard
                span1={sustainData.rank.span1}
              />
            </AnimationSlideTop>

            <AnimationSlideTop style={{ animationDelay: "500ms" }}>
              <SustCard
                span1={sustainData.world.span1}
                span2={sustainData.world.span2}
                num1={sustainData.world.num1}
                num2={sustainData.world.num2}
              />
            </AnimationSlideTop>

            <AnimationSlideTop style={{ animationDelay: "500ms" }}>
              <SustCard
                span1={sustainData.finance.span1}
                span2={sustainData.finance.span2}
                num1={sustainData.finance.num1}
              />
            </AnimationSlideTop>
          </div>
        </div>
      </SmallContainer>
    </section>
  );
};

export default Highlights;
