import { useEffect, useRef, useContext } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { LangContext } from "../../common/contexts/LangProvider";
import { useTranslation } from "../../common/hooks/useTranslation";
import Ellipse1 from "../../../assets/images/year-in-review/ellipse-1.png";
import Ellipse2 from "../../../assets/images/year-in-review/ellipse-2.png";


interface MonthEvent {
  title: string;
  body: string;
  body2?: string;
  image?: string;
}

interface MonthData {
  flex?: number;
  month: string;
  events: MonthEvent[];
}

// Each month column transition requires ~80vh; section = (months - 1) * 80 + 100 (viewport)
const MONTH_COUNT = 9;
const SECTION_HEIGHT_VH = (MONTH_COUNT - 1) * 80 + 100;

const YearInReviewSlider = () => {
  const { lang } = useContext(LangContext);
  const isRtl = lang === "ar";
  const { t } = useTranslation("overview");

  const MONTHS: MonthData[] = [
    {
      flex: 1,
      month: t("yearInReview.months.march.name"),
      events: [
        {
          title: t("yearInReview.months.march.e1title"),
          body: t("yearInReview.months.march.e1body"),
        },
      ],
    },
    {
      flex: 1,
      month: t("yearInReview.months.april.name"),
      events: [
        {
          title: t("yearInReview.months.april.e1title"),
          body: t("yearInReview.months.april.e1body"),
        },
        {
          title: t("yearInReview.months.april.e2title"),
          body: t("yearInReview.months.april.e2body"),
        },
      ],
    },
    {
      flex: 1,
      month: t("yearInReview.months.may.name"),
      events: [
        {
          title: t("yearInReview.months.may.e1title"),
          body: t("yearInReview.months.may.e1body"),
        },
        // {
        //   title: t("yearInReview.months.may.e2title"),
        //   body: t("yearInReview.months.may.e2body"),
        // },
      ],
    },
    {
      flex: 1,
      month: t("yearInReview.months.june.name"),
      events: [
        {
          title: t("yearInReview.months.june.e1title"),
          body: t("yearInReview.months.june.e1body"),
        },
        {
          title: t("yearInReview.months.june.e2title"),
          body: t("yearInReview.months.june.e2body"),
        },
      ],
    },
    {
      flex: 1,
      month: t("yearInReview.months.july.name"),
      events: [
        {
          title: t("yearInReview.months.july.e1title"),
          body: t("yearInReview.months.july.e1body"),
        },
        {
          title: t("yearInReview.months.july.e2title"),
          body: t("yearInReview.months.july.e2body"),
        },
      ],
    },
    {
      flex: 1,
      month: t("yearInReview.months.september.name"),
      events: [
        {
          title: t("yearInReview.months.september.e1title"),
          body: t("yearInReview.months.september.e1body"),
        },
        {
          title: t("yearInReview.months.september.e2title"),
          body: t("yearInReview.months.september.e2body"),
        },
      ],
    },
    {
      flex: 3,
      month: t("yearInReview.months.october.name"),
      events: [
        {
          title: t("yearInReview.months.october.e1title"),
          body: t("yearInReview.months.october.e1body"),
          image: Ellipse1,
        },
        {
          title: t("yearInReview.months.october.e2title"),
          body: t("yearInReview.months.october.e2body2"),
          // body2: t("yearInReview.months.october.e2body2"),
          image: Ellipse2,
        },
      ],
    },
    {
      flex: 1,
      month: t("yearInReview.months.november.name"),
      events: [
        {
          title: t("yearInReview.months.november.e1title"),
          body: t("yearInReview.months.november.e1body"),
        },
        // {
        //   title: t("yearInReview.months.november.e2title"),
        //   body: t("yearInReview.months.november.e2body"),
        // },
      ],
    },
    {
      flex: 3,
      month: t("yearInReview.months.december.name"),
      events: [
        {
          title: t("yearInReview.months.december.e1title"),
          body: t("yearInReview.months.december.e1body"),
        },
        {
          title: t("yearInReview.months.december.e2title"),
          body: t("yearInReview.months.december.e2body"),
        },
        {
          title: t("yearInReview.months.december.e3title"),
          body: t("yearInReview.months.december.e3body"),
        },
      ],
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const monthItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "x",
    direction: isRtl ? "rtl" : "ltr",
    dragFree: false,
    containScroll: "trimSnaps",
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !emblaApi) return;

    const container = emblaApi.containerNode();
    const viewport = container.parentElement as HTMLElement;

    // Snapshot each month's natural screen-left position at translateX=0.
    // We use this instead of calling getBoundingClientRect() inside the scroll
    // handler (which races against the transform we just applied).
    container.style.transform = "translate3d(0, 0, 0)";
    const naturalLefts = monthItemRefs.current.map((el) =>
      el ? el.getBoundingClientRect().left : 0
    );

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const scrolledIn = Math.max(0, -rect.top);
      const progress = Math.min(1, Math.max(0, scrolledIn / scrollable));

      const maxTranslate = container.scrollWidth - viewport.clientWidth;
      const translateX = isRtl
        ? progress * maxTranslate
        : -progress * maxTranslate;

      // Each month's current screen-left = its natural left + current translateX offset.
      // Animation window = half the viewport: line draws while the column crosses
      // the middle half of the screen, making the effect clearly visible.
      const vw = window.innerWidth;
      const entryWindow = vw * 0.5;
      naturalLefts.forEach((naturalLeft, i) => {
        const screenLeft = naturalLeft + translateX;
        // 0 → leading edge at right viewport edge; 1 → leading edge entryWindow px inside
        const entry = Math.min(1, Math.max(0, (vw - screenLeft) / entryWindow));

        // Line draws from leading edge (width 0 → 100%)
        const lineEl = lineRefs.current[i];
        if (lineEl) lineEl.style.width = `${entry * 100}%`;

        // Dot pops in once line is 30% drawn
        const dotEl = dotRefs.current[i];
        if (dotEl) {
          const p = Math.min(1, Math.max(0, (entry - 0.3) / 0.5));
          dotEl.style.transform = `scale(${p})`;
          dotEl.style.opacity = String(p);
        }

        // Content fades + rises once line is 50% drawn
        const contentEl = contentRefs.current[i];
        if (contentEl) {
          const p = Math.min(1, Math.max(0, (entry - 0.5) / 0.5));
          contentEl.style.opacity = String(p);
          contentEl.style.transform = `translateY(${(1 - p) * 22}px)`;
        }
      });

      container.style.transform = `translate3d(${translateX}px, 0px, 0px)`;
    };

    onScroll();
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
        <div className="h-full flex flex-col justify-center">
          {/* Embla carousel — overflow visible so columns bleed off-edge */}
          <div key={lang} ref={emblaRef} className="overflow-visible">
            <div className="flex ps-4 md:ps-[calc((100vw-65rem)/2+1rem)]">
              {MONTHS.map((monthData, idx) => (
                <div
                  key={monthData.month}
                  ref={(el) => { monthItemRefs.current[idx] = el; }}
                  className={`shrink-0 ${
                    monthData.flex === 3
                      ? "w-[85vw] sm:w-[55vw] md:w-[42vw] lg:w-screen min-w-300"
                      : monthData.events.length === 1
                        ? "w-[85vw] sm:w-[55vw] md:w-[42vw] lg:w-[35vw] "
                        : monthData.events.length === 2
                          ? "w-[170vw] sm:w-[110vw] md:w-[164vw] lg:w-[60vw] "
                          : "w-[170vw] sm:w-[110vw] md:w-[164vw] lg:w-[80vw]"
                  }`}
                >
                  {/* Month label */}
                  <div className="mb-4 pt-8 relative">
                    <div
                      ref={(el) => { lineRefs.current[idx] = el; }}
                      className="h-2 bg-savola-green absolute -top-1.5"
                      style={{ width: "0%", transition: "width 0.15s ease-out" }}
                    />
                    <span
                      ref={(el) => { dotRefs.current[idx] = el; }}
                      className="w-8 h-8 bg-savola-green absolute -top-4.5 inset-s-0 rounded-full"
                      style={{ transform: "scale(0)", opacity: 0, transition: "transform 0.2s ease-out, opacity 0.2s ease-out" }}
                    />
                    <div
                      ref={(el) => { contentRefs.current[idx] = el; }}
                      style={{ opacity: 0, transform: "translateY(22px)", transition: "opacity 0.3s ease-out, transform 0.3s ease-out" }}
                    >
                      <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-savola-cool-grey tracking-wide">
                        {monthData.month}
                      </span>

                      {/* Events */}
                      <div className="flex gap-3 overflow-y-auto max-h-[calc(100vh-220px)] mt-4">
                        {monthData.events.map((event, i) => (
                          <div key={i} className="flex flex-1">
                            <div className="pe-4">
                              <h3 className="font-bold text-savola-orange text-xl sm:text-2xl lg:text-3xl leading-snug mb-2">
                                {event.title}
                              </h3>
                              <div className="flex gap-2">
                                <p
                                  className="text-savola-cool-grey/70 text-sm sm:text-base lg:text-lg leading-relaxed"
                                  dangerouslySetInnerHTML={{ __html: event.body }}
                                />
                                {event.body2 && (
                                  <p
                                    className="text-savola-cool-grey/70 text-sm sm:text-base lg:text-lg leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: event.body2 }}
                                  />
                                )}
                              </div>
                            </div>
                            {event.image && (
                              <div
                                className={`h-auto w-90 bg-white flex items-end justify-center ${lang === "ar" ? "pl-6" : "pr-6"}`}
                              >
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
