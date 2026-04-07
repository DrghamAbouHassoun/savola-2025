import { useEffect, useRef, useContext } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { LangContext } from "../../common/contexts/LangProvider";
import Container from "../../common/components/container/Container";

interface Award {
  key: string;
  title: string;
  body: string;
}

const AWARDS: Award[] = [
  {
    key: "forbes",
    title: "Ranked among Top 100 Listed Companies in the Middle East",
    body: "Savola Group was recognized by Forbes Middle East as one of the Top 100 listed companies in the Middle East.",
  },
  {
    key: "meira",
    title: "Second Rank – Best Sustainability and ESG Report",
    body: "Savola Group received second place from the Middle East Investor Relations Association (MEIRA) for Sustainability and ESG Reporting at the MENA level.",
  },
  {
    key: "hrsd",
    title: "CSR Award – Gold Category",
    body: "Savola Group was honored by the Ministry of Human Resources and Social Development (Saudi Arabia) with the Gold Category Corporate Social Responsibility Award.",
  },
  {
    key: "forbes-sustainability",
    title: "Sustainability Leaders Ranking",
    body: "Savola Group's CEO was ranked among the Sustainability Leaders by Forbes Middle East, recognizing leadership in sustainability.",
  },
];

// Each slide transition requires ~80vh of scroll; section = transitions * 80 + 100 (viewport)
const SECTION_HEIGHT_VH = (AWARDS.length - 1) * 80 + 100;

const AwardsSlider = () => {
  const { lang } = useContext(LangContext);
  const isRtl = lang === "ar";

  const sectionRef = useRef<HTMLDivElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "x",
    direction: isRtl ? "rtl" : "ltr",
    dragFree: false,
    containScroll: "trimSnaps",
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit({ direction: isRtl ? "rtl" : "ltr" });
    }
  }, [lang, emblaApi]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !emblaApi) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const scrolledIn = Math.max(0, -rect.top);
      const progress = Math.min(1, Math.max(0, scrolledIn / scrollable));

      const container = emblaApi.containerNode();
      const viewport = container.parentElement as HTMLElement;
      const maxTranslate = container.scrollWidth - viewport.clientWidth;
      const translateX = isRtl
        ? progress * maxTranslate
        : -progress * maxTranslate;
      container.style.transform = `translate3d(${translateX}px, 0px, 0px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [emblaApi, isRtl]);

  return (
    <section
      ref={sectionRef}
      style={{ height: `${SECTION_HEIGHT_VH}vh` }}
      dir={isRtl ? "rtl" : "ltr"}
      className="relative"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-savola-cool-grey-10">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-savola-green" />

        <div className="h-full flex flex-col justify-center">
          <Container>
            {/* Section heading */}
            <h2 className="text-2xl font-bold text-savola-cool-grey mb-10">
              Awards{" "}
              <span className="text-savola-green">&amp;</span>{" "}
              Recognitions
            </h2>
          </Container>

          {/* Embla carousel — overflow visible so cards bleed off-edge */}
          <div ref={emblaRef} className="overflow-visible px-4 md:px-0">
            <div className="flex ps-4 md:ps-[calc((100vw-80rem)/2+1rem)]">
              {AWARDS.map((award) => (
                <div
                  key={award.key}
                  className="shrink-0 w-[82vw] sm:w-[52vw] md:w-[38vw] lg:w-[28vw] me-6 last:me-0"
                >
                  <div className="bg-white rounded-2xl overflow-hidden h-full flex flex-col shadow-sm border border-savola-cool-grey-10">
                    {/* Logo placeholder */}
                    <div className="h-40 bg-savola-green-20 flex items-center justify-center border-b border-savola-cool-grey-10">
                      <span className="text-savola-cool-grey/40 text-xs uppercase tracking-widest">
                        Logo
                      </span>
                    </div>
                    {/* Divider */}
                    <div className="h-0.5 bg-savola-green/30" />
                    {/* Text */}
                    <div className="p-6 flex flex-col gap-3 flex-1">
                      <h3 className="font-bold text-savola-cool-grey text-sm leading-snug">
                        {award.title}
                      </h3>
                      <p className="text-savola-cool-grey/70 text-sm leading-relaxed">
                        {award.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSlider;
