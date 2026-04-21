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
        }
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
          body: t("yearInReview.months.october.e2body"),
          body2: t("yearInReview.months.october.e2body2"),
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

  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "x",
    direction: isRtl ? "rtl" : "ltr",
    dragFree: false,
    containScroll: "trimSnaps",
  });

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
              {MONTHS.map((monthData) => (
                <div
                  key={monthData.month}
                  className={`shrink-0 ${monthData.flex === 3 ? "w-[85vw] sm:w-[55vw] md:w-[42vw] lg:w-screen" : monthData.events.length === 1 ? "w-[85vw] sm:w-[55vw] md:w-[42vw] lg:w-[35vw] " : monthData.events.length === 2 ? "w-[170vw] sm:w-[110vw] md:w-[164vw] lg:w-[60vw] " : "w-[170vw] sm:w-[110vw] md:w-[164vw] lg:w-[80vw] "}`}
                >
                  {/* Month label */}
                  <div className="mb-4 pt-8 border-t-4 border-savola-green relative">
                    <span className="w-8 h-8 bg-savola-green absolute -top-4.5 inset-s-0 rounded-full" />
                    <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-savola-cool-grey tracking-wide">
                      {monthData.month}
                    </span>
                  </div>

                  {/* Events stacked vertically */}
                  <div className="flex gap-3 overflow-y-auto max-h-[calc(100vh-220px)]">
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
                            ></p>
                            {event.body2 && (
                              <p
                                className="text-savola-cool-grey/70 text-sm sm:text-base lg:text-lg leading-relaxed"
                                dangerouslySetInnerHTML={{
                                  __html: event.body2,
                                }}
                              ></p>
                            )}
                          </div>
                        </div>
                        {event.image && (
                          <div className={`h-auto w-90 bg-white flex items-end justify-center ${lang === "ar" ? "pl-6" : "pr-6"}`}>
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
