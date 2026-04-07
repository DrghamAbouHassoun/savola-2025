import Container from "../../common/components/container/Container";
import forbes from "../../../assets/images/awards/Frame 1977.png";
import meira from "../../../assets/images/awards/meira.png";
import human from "../../../assets/images/awards/human.png";
import advantage from "../../../assets/images/awards/advantage.png";
import silver from "../../../assets/images/awards/silver.png";
import shrmMena from "../../../assets/images/awards/sharm-mena.png";
import effie from "../../../assets/images/awards/effie.png";
import cgc from "../../../assets/images/awards/cgc.png";
import top from "../../../assets/images/awards/top.png";

interface Award {
  key: string;
  logo: string;
  logoAlt: string;
  title: string;
  body: string;
}

const AWARDS: Award[] = [
  {
    key: "forbes-top-100",
    logo: forbes,
    logoAlt: "Forbes",
    title: "Ranked among Top 100 Listed Companies in the Middle East",
    body: "Savola Group was recognized by Forbes Middle East as one of the Top 100 listed companies in the Middle East.",
  },
  {
    key: "meira",
    logo: meira,
    logoAlt: "Middle East Investor Relations Association",
    title: "Second Rank - Best Sustainability and ESG Report",
    body: "Savola Group received second place from the Middle East Investor Relations Association (MEIRA) for Sustainability and ESG Reporting at the MENA level.",
  },
  {
    key: "hrsd",
    logo: human,
    logoAlt: "Human Resources and Social Development",
    title: "CSR Award - Gold Category",
    body: "Savola Group was honored by the Ministry of Human Resources and Social Development (Saudi Arabia) with the Gold Category Corporate Social Responsibility Award.",
  },
  {
    key: "forbes-sustainability",
    logo: forbes,
    logoAlt: "Forbes",
    title: "Sustainability Leaders Ranking",
    body: "Savola Group's CEO was ranked among the Sustainability Leaders by Forbes Middle East, recognizing leadership in sustainability.",
  },
  {
    key: "advantage",
    logo: advantage,
    logoAlt: "Advantage",
    title: "#1 Retailer - Voice of the Supplier",
    body: "Panda Retail Company was ranked first by Advantage Group for excellence in supplier engagement and relationships.",
  },
  {
    key: "silver-cx",
    logo: silver,
    logoAlt: "Silver Award",
    title: "Silver Award - Best CX in Retail",
    body: "Panda Retail Company received the Silver Award for Best Customer Experience in Retail from the Customer Experience Awards (CX World Forum, Riyadh).",
  },
  {
    key: "shrm-mena",
    logo: shrmMena,
    logoAlt: "SHRM MENA 25 Annual Conference & Expo",
    title: "Comprehensive Performance and Rewards Award",
    body: "Panda Foods was recognized at the SHRM MENA Regional Awards for HR excellence and leading people practices.",
  },
  {
    key: "effie",
    logo: effie,
    logoAlt: "Effie Awards",
    title: "Multiple Effie Awards - Ganna Brand (Egypt)",
    body: "Savola Foods' Ganna brand in Egypt received two Bronze Effie Awards for New product line extension and Product innovation.",
  },
  {
    key: "cgc",
    logo: cgc,
    logoAlt: "Corporate Governance Center - Alfaisal University",
    title: "Excellence in the Corporate Governance Index",
    body: "Savola Group was recognized for excellence in corporate governance by the Corporate Governance Center at Alfaisal University under the Alfaisal Corporate Governance Index.",
  },
  {
    key: "top-employer",
    logo: top,
    logoAlt: "Top Employer Egypt 2025",
    title: "Savola Foods Egypt Top Employer Certification",
    body: "Savola Foods Egypt was certified as a Top Employer by Top Employer Egypt, making it one of Egypt's leading employers.",
  },
];

const AwardsHighlights = () => (
  <section className="bg-white py-8 md:py-10">
    <Container className="max-w-5xl mb-8 md:mb-10">
      <h2 className="text-sm font-black tracking-[0.02em] text-savola-cool-grey">
        Awards and Recognitions
      </h2>
    </Container>

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
            className="shrink-0 w-54 flex flex-col gap-3"
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
            <h3 className="text-center text-[0.75rem] font-black leading-tight text-savola-cool-grey min-h-10 px-1">
              {award.title}
            </h3>

            {/* Body */}
            <div className="flex-1 rounded-[1.25rem] bg-[#fbf1df] px-4 py-3 shadow-[0_12px_28px_rgba(78,95,109,0.06)]">
              <p className="text-[0.68rem] leading-relaxed text-savola-cool-grey/75">
                {award.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default AwardsHighlights;
