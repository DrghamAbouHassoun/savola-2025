import forbes from "../../../assets/images/awards/Frame 1977.png";
import meira from "../../../assets/images/awards/meira.png";
import human from "../../../assets/images/awards/human.png";
import advantage from "../../../assets/images/awards/advantage.png";
import silver from "../../../assets/images/awards/silver.png";
import shrmMena from "../../../assets/images/awards/sharm-mena.png";
import effie from "../../../assets/images/awards/effie.png";
import cgc from "../../../assets/images/awards/cgc.png";
import top from "../../../assets/images/awards/top.png";
import SmallContainer from "../../common/components/container/SmallContainer";
import { useTranslation } from "../../common/hooks/useTranslation";

interface Award {
  key: string;
  logo: string;
  logoAlt: string;
  title: string;
  body: string;
}

const AwardsHighlights = () => {
  const { t } = useTranslation("at-a-glance");

  const AWARDS: Award[] = [
    {
      key: "forbes-top-100",
      logo: forbes,
      logoAlt: "Forbes",
      title: t("awards.forbes100Title"),
      body: t("awards.forbes100Body"),
    },
    {
      key: "meira",
      logo: meira,
      logoAlt: "Middle East Investor Relations Association",
      title: t("awards.meiraTitle"),
      body: t("awards.meiraBody"),
    },
    {
      key: "hrsd",
      logo: human,
      logoAlt: "Human Resources and Social Development",
      title: t("awards.hrsdTitle"),
      body: t("awards.hrsdBody"),
    },
    {
      key: "forbes-sustainability",
      logo: forbes,
      logoAlt: "Forbes",
      title: t("awards.forbesSustTitle"),
      body: t("awards.forbesSustBody"),
    },
    {
      key: "advantage",
      logo: advantage,
      logoAlt: "Advantage",
      title: t("awards.advantageTitle"),
      body: t("awards.advantageBody"),
    },
    {
      key: "silver-cx",
      logo: silver,
      logoAlt: "Silver Award",
      title: t("awards.silverTitle"),
      body: t("awards.silverBody"),
    },
    {
      key: "shrm-mena",
      logo: shrmMena,
      logoAlt: "SHRM MENA 25 Annual Conference & Expo",
      title: t("awards.shrmTitle"),
      body: t("awards.shrmBody"),
    },
    {
      key: "effie",
      logo: effie,
      logoAlt: "Effie Awards",
      title: t("awards.effieTitle"),
      body: t("awards.effieBody"),
    },
    {
      key: "cgc",
      logo: cgc,
      logoAlt: "Corporate Governance Center - Alfaisal University",
      title: t("awards.cgcTitle"),
      body: t("awards.cgcBody"),
    },
    {
      key: "top-employer",
      logo: top,
      logoAlt: "Top Employer Egypt 2025",
      title: t("awards.topTitle"),
      body: t("awards.topBody"),
    },
  ];

  return (
    <section className="bg-white py-8 md:py-10">
      <SmallContainer className="max-w-5xl mb-8 md:mb-10">
        <h2 className="text-xl font-black tracking-[0.02em] text-savola-cool-grey">
          {t("awards.title")}
        </h2>
      </SmallContainer>

      {/* Infinite horizontal ticker — non-interactive */}
      <div className="overflow-hidden select-none pointer-events-none">
        <div
          className="flex"
          style={{
            gap: "1.5rem",
            animation: "awards-ticker 55s linear infinite",
            width: "max-content",
          }}
        >
          {[...AWARDS, ...AWARDS].map((award, i) => (
            <article
              key={`${award.key}-${i}`}
              className="shrink-0 w-74 flex flex-col gap-3"
            >
              {/* Logo */}
              <div className="h-24 flex items-center justify-center px-3">
                <img
                  src={award.logo}
                  alt={award.logoAlt}
                  className="max-h-18 max-w-40 w-auto object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-center text-sm font-semibold leading-tight text-savola-cool-grey min-h-10 px-1">
                {award.title}
              </h3>

              {/* Body */}
              <div className="flex-1 rounded-b-[1.25rem] bg-linear-180 from-savola-orange-20/0 to-savola-orange-20 px-4 py-3 shadow-[0_12px_28px_rgba(78,95,109,0.06)] border-t-2 border-t-savola-green">
                <p className=" leading-relaxed text-savola-cool-grey/75 text-sm">
                  {award.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsHighlights;
