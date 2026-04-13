import { useEffect, useRef, useContext } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { LangContext } from "../../common/contexts/LangProvider";

import Ellipse1 from "../../../assets/images/year-in-review/ellipse-1.png";
import Ellipse2 from "../../../assets/images/year-in-review/ellipse-2.png";

interface MonthEvent {
  title: string;
  body: string;
  image?: string;
}

interface MonthData {
  flex?: number;
  month: string;
  events: MonthEvent[];
}

const MONTHS: MonthData[] = [
  {
    flex: 1,
    month: "March",
    events: [
      {
        title: "MoU with Ehsan platform",
        body: "Panda Retail Company signed a memorandum of understanding with Ehsan, a platform under the Saudi Data and AI Authority, to strengthen community initiatives and support programs that empower vulnerable groups.",
      },
    ],
  },
  {
    flex: 1,
    month: "April",
    events: [
      {
        title: 'Launch of "Negaderha Sawa" podcast',
        body: 'Panda Retail Company launched the "Negaderha Sawa" podcast with Wellbeing Foundation as a community initiative featuring diverse program topics, strengthening local partnerships and supporting programs that empower vulnerable groups.',
      },
      {
        title: "Top 10 most influential brands in the Kingdom",
        body: "Panda was ranked among the top 10 most influential brands in Saudi Arabia and secured first place overall, reflecting strong consumer trust and brand relevance in the retail sector.",
      },
    ],
  },
  {
    flex: 1,
    month: "May",
    events: [
      {
        title: "Saudi Food Show in Riyadh – Platinum sponsorship",
        body: "Savola Food Company participated as a Platinum Sponsor at the Saudi Food Show in Riyadh, showcasing a rich selection featuring a live tasting station powered by Saudi chef partner Albarakah and freshly baked products using Savola's iconic flour, the Alawal brand.",
      },
      {
        title: "Top 100 listed companies by Forbes Middle East",
        body: "Savola Group was ranked among the Top 100 listed Companies in the Middle East by Forbes Middle East, underscoring its operational excellence and strong market position.",
        // image: TopImg,
      },
    ],
  },
  {
    flex: 1,
    month: "June",
    events: [
      {
        title: '"Haj Without Waste" initiative',
        body: 'Savola Food Company partnered with Fann.ai and the Saudi Food Bank during the 2025 Haj season on the "Haj Without Waste" initiative, resulting in 7,259,062 donated meals and 2,019 saved sacrifices with a total value of SAR 11,737,644.',
      },
      {
        title: "Support for Purple Saturday initiative",
        body: "Savola Group operating companies participated in the Purple Saturday initiative in collaboration with the Federation of People with Disability, supporting inclusion and accessibility across communities.",
      },
    ],
  },
  {
    flex: 1,
    month: "July",
    events: [
      {
        title: "Appointment of Group Chief Executive Officer",
        body: "Savola Group announced the appointment of Mr. Sameh Hasan as Group Chief Executive Officer, building on his role as CEO of Savola Foods Company since December 2018 and reinforcing leadership continuity and strategic alignment.",
      },
    ],
  },
  {
    flex: 1,
    month: "September",
    events: [
      {
        title: "Best Sustainability and ESG Report recognition",
        body: "Savola Group achieved several awards for the Best Sustainability and ESG Report in the MENA region, as recognized by the Middle East Investor Relations Association, reflecting the strength and transparency of its 2024 disclosures.",
        // image: MeiraImg,
      },
    ],
  },
  {
    flex: 2,
    month: "October",
    events: [
      {
        title: "Forbes Middle East CEO Leadership recognition",
        body: "Savola Group Chief Executive Officer Mr. Sameh Hasan was ranked among the Forbes Middle East CEO Sustainability Leaders in the MENA region, recognized by Forbes Middle East for leadership impact and commitment to sustainability.",
        image: Ellipse1,
      },
      {
        title: "Corporate Social Responsibility Award – Gold category",
        body: "The Ministry of Human Resources and Social Development awarded Savola Group the Gold Category CSR Award, recognizing the Group's commitment to community development and positive societal impact.",
        image: Ellipse2,
      },
    ],
  },
  {
    flex: 1,
    month: "November",
    events: [
      {
        title: "Participation in Gulf Food Manufacturing",
        body: "Savola participated in Gulf Food Manufacturing Dubai 2025, showcasing the full Savola portfolio with live tasting stations featuring seasoning expertise and bakery applications using Savola Pro and Safio margarines.",
      },
      {
        title: "Corporate governance excellence",
        body: "Savola participated in Gulf Food Manufacturing and was recognized for its excellence in corporate governance, reflecting commitment to transparency and responsible business conduct.",
      },
    ],
  },
  {
    flex: 2,
    month: "December",
    events: [
      {
        title: "Corporate governance excellence",
        body: "For the 4th consecutive year, Savola Group ranked in the Top 5 at the Saudi Exchange Corporate Governance Award, recognized for its performance in transparency, accountability, and investor relations.",
      },
      {
        title: "Strategic charter of Savola Turkey",
        body: "Savola entered a strategic partnership with Tripoli Anadolu, part of the leading Tripoli Agri Group in Turkey, restructuring operations into a renewed entity and acquiring a 20.5% stake through a rights offering.",
      },
      {
        title: "Best CX in Retail Award recognition",
        body: "Panda Retail received the Silver Award for Best Customer Experience in the Retail Category at the Customer Experience Awards during the CX World Forum in London, recognizing the Group's commitment to customer experience through technology and partnership.",
      },
    ],
  },
];

// Each month column transition requires ~80vh; section = (months - 1) * 80 + 100 (viewport)
const SECTION_HEIGHT_VH = (MONTHS.length - 1) * 80 + 100;

const YearInReviewSlider = () => {
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
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        {/* Top accent bar */}
        {/* <div className="absolute top-0 left-0 right-0 h-1 bg-savola-green" /> */}

        <div className="h-full flex flex-col justify-center">

          {/* Embla carousel — overflow visible so columns bleed off-edge */}
          <div ref={emblaRef} className="overflow-visible">
            <div className="flex ps-4 md:ps-[calc((100vw-65rem)/2+1rem)]">
              {MONTHS.map((monthData) => (
                <div
                  key={monthData.month}
                  className={`shrink-0 ${monthData.flex === 1 ? "w-[85vw] sm:w-[55vw] md:w-[42vw] lg:w-[60vw] " : "w-[170vw] sm:w-[110vw] md:w-[164vw] lg:w-screen "}`}
                >
                  {/* Month label */}
                  <div className="mb-4 pt-8 border-t-4 border-savola-green relative">
                    <span className="w-8 h-8 bg-savola-green absolute -top-4.5 left-0 rounded-full" />
                    <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-savola-cool-grey tracking-wide">
                      {monthData.month}
                    </span>
                  </div>

                  {/* Events stacked vertically */}
                  <div className="flex flex-col gap-3 overflow-y-auto max-h-[calc(100vh-220px)]">
                    {monthData.events.map((event, i) => (
                      <div
                        key={i}
                        className=" flex"
                      >
                        
                        <div className="pr-4">
                          <h3 className="font-bold text-savola-orange text-xl sm:text-2xl lg:text-3xl leading-snug mb-2">
                            {event.title}
                          </h3>
                          <p className="text-savola-cool-grey/70 text-sm sm:text-base lg:text-lg leading-relaxed">
                            {event.body}
                          </p>
                        </div>
                        {event.image && (
                          <div className="h-auto w-90 bg-white flex items-end justify-center pr-4">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="max-h-40 max-w-40 object-contain"
                            />
                          </div>
                        )}
                      </div>
                    ))}
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

export default YearInReviewSlider;
