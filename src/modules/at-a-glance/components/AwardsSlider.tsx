import { useEffect, useState, useContext } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { LangContext } from "../../common/contexts/LangProvider";
import { useTranslation } from "../../common/hooks/useTranslation";
import Container from "../../common/components/container/Container";
// import SavolaAngleGreen from "../../../assets/vectors/savola-angel-green.svg";
import SliderArrow from "../../../assets/icons/slider-arrow.svg";
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
  {
    key: "forbes-top-100",
    logo: forbes,
    logoAlt: "Forbes",
    titleKey: "awards.forbes100Title",
    bodyKey: "awards.forbes100Body",
  },
  {
    key: "meira",
    logo: meira,
    logoAlt: "Middle East Investor Relations Association",
    titleKey: "awards.meiraTitle",
    bodyKey: "awards.meiraBody",
  },
  {
    key: "hrsd",
    logo: human,
    logoAlt: "Human Resources and Social Development",
    titleKey: "awards.hrsdTitle",
    bodyKey: "awards.hrsdBody",
  },
  {
    key: "forbes-sustainability",
    logo: forbes,
    logoAlt: "Forbes",
    titleKey: "awards.forbesSustTitle",
    bodyKey: "awards.forbesSustBody",
  },
  {
    key: "advantage",
    logo: advantage,
    logoAlt: "Advantage",
    titleKey: "awards.advantageTitle",
    bodyKey: "awards.advantageBody",
  },
  {
    key: "silver-cx",
    logo: silver,
    logoAlt: "Silver Award",
    titleKey: "awards.silverTitle",
    bodyKey: "awards.silverBody",
  },
  {
    key: "shrm-mena",
    logo: shrmMena,
    logoAlt: "SHRM MENA 25 Annual Conference & Expo",
    titleKey: "awards.shrmTitle",
    bodyKey: "awards.shrmBody",
  },
  {
    key: "effie",
    logo: effie,
    logoAlt: "Effie Awards",
    titleKey: "awards.effieTitle",
    bodyKey: "awards.effieBody",
  },
  {
    key: "cgc",
    logo: cgc,
    logoAlt: "Corporate Governance Center - Alfaisal University",
    titleKey: "awards.cgcTitle",
    bodyKey: "awards.cgcBody",
  },
  {
    key: "top-employer",
    logo: top,
    logoAlt: "Top Employer Egypt 2025",
    titleKey: "awards.topTitle",
    bodyKey: "awards.topBody",
  },
];

const ProgressDots = ({ total, active }: { total: number; active: number }) => (
  <div className="flex gap-2">
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

  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

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
    if (!emblaApi) return;
    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section dir={isRtl ? "rtl" : "ltr"} className="py-16">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <p className="text-savola-green text-sm font-bold uppercase tracking-widest">
            {t("awards.title")}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={scrollPrev}
              disabled={!canPrev}
              className="w-12 h-12 flex justify-center items-center disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Previous"
            >
              <img src={SliderArrow} className={`${isRtl ? "rotate-180" : ""} w-8 h-8`} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canNext}
              className="w-12 h-12 flex justify-center items-center disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Next"
            >
              <img src={SliderArrow} className={`${isRtl ? "" : "rotate-180"} w-8 h-8`} />
            </button>
          </div>
        </div>
      </Container>

      <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
        <div className="flex">
          {AWARDS_DATA.map((award) => (
            <div key={award.key} className="shrink-0 w-full">
              <Container>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
                {/* Text panel */}
                <div>
                  <h2 className="text-2xl lg:text-3xl font-black text-savola-cool-grey leading-snug mb-4">
                    {t(award.titleKey)}
                  </h2>
                  <p
                    className="text-savola-cool-grey/70 text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: t(award.bodyKey) }}
                  />
                </div>

                {/* Image panel */}
                <div className="flex items-center justify-center min-h-48 md:min-h-64">
                  <img
                    src={award.logo}
                    alt={award.logoAlt}
                    className="max-h-64 max-w-full object-contain"
                    draggable={false}
                  />
                </div>
              </div>
              </Container>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <Container>
        <div className="mt-8">
          <ProgressDots total={AWARDS_DATA.length} active={activeIndex} />
        </div>
      </Container>
    </section>
  );
};

export default AwardsSlider;
