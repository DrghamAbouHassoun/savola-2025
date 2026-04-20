import { useEffect, useRef, useState, useContext } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { LangContext } from "../../common/contexts/LangProvider";
import { useTranslation } from "../../common/hooks/useTranslation";
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

interface AwardData {
  key: string;
  logo: string;
  logoAlt: string;
  titleKey: string;
  bodyKey: string;
}

const AWARDS_DATA: AwardData[] = [
  { key: "forbes-top-100", logo: forbes, logoAlt: "Forbes", titleKey: "awards.forbes100Title", bodyKey: "awards.forbes100Body" },
  { key: "meira", logo: meira, logoAlt: "Middle East Investor Relations Association", titleKey: "awards.meiraTitle", bodyKey: "awards.meiraBody" },
  { key: "hrsd", logo: human, logoAlt: "Human Resources and Social Development", titleKey: "awards.hrsdTitle", bodyKey: "awards.hrsdBody" },
  { key: "forbes-sustainability", logo: forbes, logoAlt: "Forbes", titleKey: "awards.forbesSustTitle", bodyKey: "awards.forbesSustBody" },
  { key: "advantage", logo: advantage, logoAlt: "Advantage", titleKey: "awards.advantageTitle", bodyKey: "awards.advantageBody" },
  { key: "silver-cx", logo: silver, logoAlt: "Silver Award", titleKey: "awards.silverTitle", bodyKey: "awards.silverBody" },
  { key: "shrm-mena", logo: shrmMena, logoAlt: "SHRM MENA 25 Annual Conference & Expo", titleKey: "awards.shrmTitle", bodyKey: "awards.shrmBody" },
  { key: "effie", logo: effie, logoAlt: "Effie Awards", titleKey: "awards.effieTitle", bodyKey: "awards.effieBody" },
  { key: "cgc", logo: cgc, logoAlt: "Corporate Governance Center - Alfaisal University", titleKey: "awards.cgcTitle", bodyKey: "awards.cgcBody" },
  { key: "top-employer", logo: top, logoAlt: "Top Employer Egypt 2025", titleKey: "awards.topTitle", bodyKey: "awards.topBody" },
];

const SCROLL_PER_AWARD_VH = 80;
const SECTION_HEIGHT_VH = (AWARDS_DATA.length - 1) * SCROLL_PER_AWARD_VH + 100;

const ProgressDots = ({ total, active }: { total: number; active: number }) => (
  <div className="flex gap-2 mt-8">
    {Array.from({ length: total }).map((_, i) => (
      <span
        key={i}
        className="block rounded-full transition-all duration-300"
        style={{
          width: i === active ? "1.5rem" : "0.5rem",
          height: "0.5rem",
          backgroundColor:
            i === active
              ? "var(--color-savola-green)"
              : "var(--color-savola-cool-grey)",
          opacity: i !== active ? 0.3 : 1,
        }}
      />
    ))}
  </div>
);

const AwardsSlider = () => {
  const { lang } = useContext(LangContext);
  const isRtl = lang === "ar";
  const { t } = useTranslation("at-a-glance");

  const sectionRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "x",
    direction: isRtl ? "rtl" : "ltr",
    dragFree: false,
    containScroll: "trimSnaps",
  });

  useEffect(() => {
    emblaApi?.reInit({ direction: isRtl ? "rtl" : "ltr" });
  }, [lang, emblaApi]);

  useEffect(() => {
    const onScroll = () => {
      if (window.innerWidth < 768) return;
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const scrolledIn = Math.max(0, -rect.top);
      const progress = Math.min(1, Math.max(0, scrolledIn / scrollable));
      const newIndex = Math.round(progress * (AWARDS_DATA.length - 1));
      if (newIndex !== activeIndexRef.current) {
        activeIndexRef.current = newIndex;
        setActiveIndex(newIndex);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Desktop sticky reveal ── */}
      <section
        ref={sectionRef}
        style={{ height: `${SECTION_HEIGHT_VH}vh` }}
        dir={isRtl ? "rtl" : "ltr"}
        className="relative hidden md:block"
      >
        <div className="sticky top-0 h-screen overflow-hidden bg-savola-cool-grey-10">
          <div className="absolute top-0 inset-x-0 h-1 bg-savola-green" />

          <Container className="h-full flex items-center">
            <div className="grid grid-cols-2 gap-12 lg:gap-20 w-full items-center">

              {/* LEFT: Text panel */}
              <div>
                <p className="text-savola-green text-sm font-bold uppercase tracking-widest mb-6">
                  {t("awards.title")}
                </p>

                <div className="relative">
                  {AWARDS_DATA.map((award, i) => (
                    <div
                      key={award.key}
                      style={{
                        opacity: activeIndex === i ? 1 : 0,
                        transform:
                          activeIndex === i
                            ? "translateY(0)"
                            : "translateY(10px)",
                        transition: "opacity 0.5s ease, transform 0.5s ease",
                        position: i === 0 ? "relative" : "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        pointerEvents: activeIndex === i ? "auto" : "none",
                      }}
                    >
                      <h2 className="text-2xl lg:text-3xl font-black text-savola-cool-grey leading-snug mb-4">
                        {t(award.titleKey)}
                      </h2>
                      <p className="text-savola-cool-grey/70 text-base leading-relaxed">
                        {t(award.bodyKey)}
                      </p>
                    </div>
                  ))}
                </div>

                <ProgressDots total={AWARDS_DATA.length} active={activeIndex} />
              </div>

              {/* RIGHT: Image cross-fade panel */}
              <div className="relative flex items-center justify-center min-h-64">
                {AWARDS_DATA.map((award, i) => (
                  <img
                    key={award.key}
                    src={award.logo}
                    alt={award.logoAlt}
                    style={{
                      opacity: activeIndex === i ? 1 : 0,
                      transition: "opacity 0.6s ease",
                      position: i === 0 ? "relative" : "absolute",
                      willChange: "opacity",
                    }}
                    className="max-h-72 max-w-full object-contain"
                  />
                ))}
              </div>

            </div>
          </Container>
        </div>
      </section>

      {/* ── Mobile Embla slider ── */}
      <div
        dir={isRtl ? "rtl" : "ltr"}
        className="block md:hidden bg-savola-cool-grey-10 py-10"
      >
        <div className="absolute top-0 inset-x-0 h-1 bg-savola-green" />

        <Container className="mb-6">
          <p className="text-savola-green text-sm font-bold uppercase tracking-widest mb-1">
            {t("awards.title")}
          </p>
        </Container>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex ps-4 pe-4">
            {AWARDS_DATA.map((award) => (
              <div
                key={award.key}
                className="shrink-0 w-[85vw] sm:w-[65vw] me-4 last:me-0"
              >
                <div className="bg-white rounded-2xl overflow-hidden h-full flex flex-col shadow-sm border border-savola-cool-grey-10">
                  <div className="h-40 bg-savola-green-20 flex items-center justify-center border-b border-savola-cool-grey-10">
                    <img
                      src={award.logo}
                      alt={award.logoAlt}
                      className="max-h-28 max-w-full object-contain px-4"
                    />
                  </div>
                  <div className="h-0.5 bg-savola-green/30" />
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <h3 className="font-bold text-savola-cool-grey text-sm leading-snug">
                      {t(award.titleKey)}
                    </h3>
                    <p className="text-savola-cool-grey/70 text-sm leading-relaxed">
                      {t(award.bodyKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AwardsSlider;
