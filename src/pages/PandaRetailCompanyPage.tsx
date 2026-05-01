import NewHeader from "../modules/common/components/headers/NewHeader";
import HeaderBg from "../assets/images/new-headers/panda.jpg";
import PandaLogo from "../assets/images/business-review/panda-logo.png";
import ActiveCustomers from "../assets/images/business-review/active-customers-reached.png";
import InflationIcon from "../assets/icons/business-model/panda/inflation.svg";
import DiscountersIcon from "../assets/icons/business-model/panda/discounters.svg";
import EcommerceIcon from "../assets/icons/business-model/panda/ecommerce.svg";
import ShareOfWalletIcon from "../assets/icons/business-model/panda/share-of-wallet.svg";
import ChangeInConsumerIcon from "../assets/icons/business-model/panda/change-in-consumer.svg";
import TurnaroundIcon from "../assets/icons/business-model/panda/turnaround.svg";
import TransformationIcon from "../assets/icons/business-model/panda/transformation.svg";
import GrowAndSustainIcon from "../assets/icons/business-model/panda/grow-and-sustain.svg";
import DeliveryIcon from "../assets/icons/business-model/panda/delivery-preformance.svg";
import MembershipIcon from "../assets/icons/business-model/panda/memebership-exceeded.svg";
import RevenueGrowthIcon from "../assets/icons/business-model/panda/revenue-growth.svg";
import SmallContainer from "../modules/common/components/container/SmallContainer";
import AnimationPopUp from "../modules/common/components/Animations/AnimationPopUp";
import AnimationSlideTop from "../modules/common/components/Animations/AnimationSlideTop";
import CountUp from "../modules/common/components/Animations/CountUp";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import BusinessReviewHeader from "../modules/business-review/components/BusinessReviewHeader";

const CHALLENGE_ICONS = [
  InflationIcon,
  DiscountersIcon,
  EcommerceIcon,
  ShareOfWalletIcon,
  ChangeInConsumerIcon,
];

const JOURNEY_CONFIG = [
  {
    icon: TurnaroundIcon,
    background: "bg-savola-cool-grey-7",
    headerGradient: "from-savola-cool-grey/0 to-savola-cool-grey",
    iconBg: "bg-savola-navy",
  },
  {
    icon: TransformationIcon,
    background: "bg-savola-orange-20",
    headerGradient: "from-savola-orange/0 to-savola-orange",
    iconBg: "bg-savola-orange",
  },
  {
    icon: GrowAndSustainIcon,
    background: "bg-savola-green-20",
    headerGradient: "from-savola-green/0 to-savola-green",
    iconBg: "bg-savola-green",
  },
];

const KPI_ICONS = [DeliveryIcon, MembershipIcon, RevenueGrowthIcon];
const KPI_NUMS = [92, 14, 26];

const PandaRetailCompanyPage = () => {
  const { t, tArray } = useTranslation("business-review");

  const challengeLabels = tArray("panda.together.economic.labels");
  const outperformingParagraphs = tArray("panda.outperforming.paragraphs");
  const transformingParagraphs = tArray(
    "panda.together.transforming.paragraphs",
  );
  const newLaunchesParagraphs = tArray("panda.together.newLaunches.paragraphs");
  const powSubParagraphs = [0, 1, 2, 3, 4].map((i) =>
    tArray(`panda.together.powering.subsections.${i}.paragraphs`),
  );

  return (
    <div>
      {/* 1. Header */}
      <NewHeader imageUrl={HeaderBg} title={t("panda.pageTitle")} />

      {/* 2. Intro + Callout */}
      <section className="py-12 md:py-16">
        <SmallContainer>
          {/* Title + Logo row */}
          <BusinessReviewHeader
            title={t("panda.title")}
            subtitle={t("panda.desc")}
            logoUrl={PandaLogo}
          />
        </SmallContainer>
      </section>

      <section>
        <SmallContainer>
          {/* Full-width intro paragraphs */}
          <AnimationSlideTop>
            <p className="text-savola-cool-grey leading-relaxed text-xl mb-4">
              {t("panda.intro.main")}
            </p>
          </AnimationSlideTop>
          <AnimationSlideTop>
            <p className="text-savola-cool-grey leading-relaxed">
              {t("panda.intro.sub")}
            </p>
          </AnimationSlideTop>
        </SmallContainer>
      </section>
      {/* 3. Outperforming the Market */}
      <section className="py-4 md:py-6">
        <SmallContainer>
          <AnimationSlideTop>
            <h2 className="font-bold text-savola-navy mb-2">
              {t("panda.outperforming.title")}
            </h2>
            {outperformingParagraphs.map((p, i) => (
              <p
                key={i}
                className="text-savola-cool-grey leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </AnimationSlideTop>
        </SmallContainer>
      </section>

      {/* 4. Together Title Block */}
      <section className="">
        <SmallContainer>
          <AnimationSlideTop>
            <p className="text-xl md:text-3xl font-bold text-savola-navy">
              {t("panda.together.title")}
            </p>
          </AnimationSlideTop>
        </SmallContainer>
      </section>

      {/* 5. Transforming the Network */}
      <section className="py-4 md:py-6">
        <SmallContainer>
          <AnimationSlideTop>
            <h2 className=" font-bold text-savola-navy mb-2">
              {t("panda.together.transforming.title")}
            </h2>
            {transformingParagraphs.map((p, i) => (
              <p
                key={i}
                className="text-savola-cool-grey leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </AnimationSlideTop>
        </SmallContainer>
      </section>

      {/* 6. Economic & Market Challenges */}
      <section className="py-4 md:py-6">
        <SmallContainer>
          <AnimationSlideTop>
            <h2 className=" font-bold text-savola-navy mb-2">
              {t("panda.together.economic.title")}
            </h2>
          </AnimationSlideTop>

          {/* Challenge labels */}
          <div className="flex flex-wrap gap-3 mb-10">
            {challengeLabels.map((label, i) => (
              <AnimationPopUp key={i}>
                <div className="flex items-center gap-2">
                  <img
                    src={CHALLENGE_ICONS[i]}
                    alt={label}
                    className="h-6 w-6 object-contain"
                  />
                  <span className="text-sm text-savola-cool-grey font-medium">
                    {label}
                  </span>
                </div>
              </AnimationPopUp>
            ))}
          </div>

          {/* Journey cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {JOURNEY_CONFIG.map((config, i) => (
              <AnimationPopUp key={i}>
                <div
                  className={`rounded-2xl overflow-hidden ${config.background} h-full flex flex-col py-6 px-4`}
                >
                  <div
                    className={`flex justify-between items-center bg-linear-to-r ${config.headerGradient} p-2 rounded-xl mb-3`}
                  >
                    <h3 className={`text-lg font-bold`}>
                      {t(`panda.together.economic.cards.${i}.title`)}
                    </h3>
                    <img
                      src={config.icon}
                      alt=""
                      className="h-6 w-6 object-contain"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>
                  <p className="text-xs text-savola-cool-grey mb-2 font-medium ">
                    {t(`panda.together.economic.cards.${i}.year`)}
                  </p>
                  <p className="text-xs font-semibold text-savola-cool-grey mb-3 uppercase tracking-wide">
                    {t(`panda.together.economic.cards.${i}.subtitle`)}
                  </p>
                  <p className="text-sm text-savola-cool-grey leading-relaxed">
                    {t(`panda.together.economic.cards.${i}.desc`)}
                  </p>
                </div>
              </AnimationPopUp>
            ))}
          </div>
        </SmallContainer>
      </section>

      {/* 7. Powering Omnichannel Growth */}
      <section className="py-12 md:py-16">
        <SmallContainer>
          <AnimationSlideTop>
            <h2 className="text-savola-navy font-bold mb-2">
              {t("panda.together.powering.title")}
            </h2>
            <p className="text-savola-cool-grey leading-relaxed mb-10">
              {t("panda.together.powering.desc")}
            </p>
          </AnimationSlideTop>

          {/* Subsection 0: E-Commerce + Active Customers card */}
          <div className="mb-12">
            <h3 className="text-savola-orange font-bold mb-2">
              {t("panda.together.powering.subsections.0.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                {powSubParagraphs[0].map((p, i) => (
                  <p
                    key={i}
                    className="text-savola-cool-grey leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </div>
              <AnimationPopUp>
                <div className="bg-savola-green-20 rounded-2xl p-6 flex items-center">
                  <div>
                    <p className="text-savola-cool-grey text-2xl max-w-40 mb-2 leading-snug font-bold">
                      {t("panda.together.powering.subsections.0.card.title")}
                    </p>
                    <p className="font-black text-5xl text-savola-green leading-none">
                      <CountUp end={9} />
                    </p>
                    <p className="text-savola-cool-grey text-base font-semibold mt-1">
                      {t(
                        "panda.together.powering.subsections.0.card.number.unit",
                      )}
                    </p>
                  </div>
                  <div className="">
                    <img
                      src={ActiveCustomers}
                      alt="Active Customers"
                      className="w-36 h-36 object-contain mx-auto mb-3 scale-200 origin-bottom translate-y-12"
                    />
                  </div>
                </div>
              </AnimationPopUp>
            </div>
          </div>

          {/* Subsections 1 & 2: plain text */}
          {[1, 2].map((i) => (
            <div key={i} className="mb-12">
              <h3 className="text-savola-orange font-bold mb-2">
                {t(`panda.together.powering.subsections.${i}.title`)}
              </h3>
              {powSubParagraphs[i].map((p, j) => (
                <p
                  key={j}
                  className="text-savola-cool-grey leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
            </div>
          ))}

          {/* Subsection 3: Digital Operations + KPI cards */}
          <div className="mb-12">
            <h3 className="font-bold text-savola-navy mb-4">
              {t("panda.together.powering.subsections.3.title")}
            </h3>
            {powSubParagraphs[3].map((p, i) => (
              <p
                key={i}
                className="text-savola-cool-grey leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
              {KPI_ICONS.map((icon, i) => (
                <AnimationPopUp key={i}>
                  <div className=" p-6">
                    <img
                      src={icon}
                      alt=""
                      className="h-10 w-auto mb-3 object-contain"
                    />
                    <p className="text-lg text-savola-cool-grey my-4 font-bold">
                      {t(
                        `panda.together.powering.subsections.3.cards.${i}.title`,
                      )}
                    </p>
                    <p className="font-black text-4xl text-savola-green leading-none">
                      <CountUp end={KPI_NUMS[i]} />
                      <span className="text-4xl ms-1">
                        {t(
                          `panda.together.powering.subsections.3.cards.${i}.number.suffix`,
                        )}
                      </span>
                    </p>
                  </div>
                </AnimationPopUp>
              ))}
            </div>
          </div>

          {/* Subsection 4: Strategic Enablement */}
          <div>
            <h3 className="text-savola-orange font-bold">
              {t("panda.together.powering.subsections.4.title")}
            </h3>
            {powSubParagraphs[4].map((p, i) => (
              <p
                key={i}
                className="text-savola-cool-grey leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>
        </SmallContainer>
      </section>

      {/* 8. New Launches */}
      <section className="">
        <SmallContainer>
          <AnimationSlideTop>
            <h2 className="text-lg md:text-xl font-bold text-savola-navy mb-6">
              {t("panda.together.newLaunches.title")}
            </h2>
            {newLaunchesParagraphs.map((p, i) => (
              <p
                key={i}
                className="text-savola-cool-grey leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </AnimationSlideTop>
        </SmallContainer>
      </section>
    </div>
  );
};

export default PandaRetailCompanyPage;
