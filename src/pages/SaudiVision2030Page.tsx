import JourneyBg from "../assets/images/new-headers/journey.jpg";
import NewHeader from "../modules/common/components/headers/NewHeader";
import SmallContainer from "../modules/common/components/container/SmallContainer";
import AnimationSlideTop from "../modules/common/components/Animations/AnimationSlideTop";
import AnimationFadeIn from "../modules/common/components/Animations/AnimationFadeIn";
import { useTranslation } from "../modules/common/hooks/useTranslation";

const SaudiVision2030Page = () => {
  const { t, tArray } = useTranslation("strategic-review");

  const pageTitle = t("saudiVision.pageTitle");
  const title = t("saudiVision.title");
  const subtitle = t("saudiVision.subtitle");
  const p1 = t("saudiVision.p1");
  const p2 = t("saudiVision.p2");
  const p3 = t("saudiVision.p3");
  const label = t("saudiVision.label");

  const tableHeaders = [0, 1, 2].map((i) =>
    t(`saudiVision.table.headers.${i}`),
  );

  const tableRows = Array.from({ length: 8 }, (_, i) => ({
    pillar: {
      title: t(`saudiVision.table.rows.${i}.0.title`),
      subtitle: t(`saudiVision.table.rows.${i}.0.subtitle`),
    },
    objectives: tArray(`saudiVision.table.rows.${i}.1.list`),
    achievements: tArray(`saudiVision.table.rows.${i}.2.list`),
  }));

  return (
    <div>
      <NewHeader imageUrl={JourneyBg} title={pageTitle} />

      {/* Section 1 — Intro */}
      <div className="bg-linear-to-b from-savola-orange-20 to-savola-orange-20/0 py-16">
        <SmallContainer>
          <div className="relative">
            <AnimationSlideTop>
              <h1 className="text-savola-green font-bold text-3xl md:text-4xl mb-6 md:w-2/3">
                {title}
              </h1>
            </AnimationSlideTop>

            <AnimationSlideTop style={{ animationDelay: "0.1s" }}>
              <p className="font-bold text-savola-navy text-base md:text-lg mb-8 md:w-2/3 leading-relaxed">
                {subtitle}
              </p>
            </AnimationSlideTop>

            <div className="space-y-4 text-sm text-savola-cool-grey leading-relaxed md:w-2/3">
              <AnimationFadeIn>
                <p>{p1}</p>
              </AnimationFadeIn>
              <AnimationFadeIn>
                <p>{p2}</p>
              </AnimationFadeIn>
              <AnimationFadeIn>
                <p>{p3}</p>
              </AnimationFadeIn>
            </div>

            {/* Circular green badge */}
            <div className="hidden md:flex absolute top-8 inset-e-0 w-44 h-44 rounded-full bg-savola-green items-center justify-center text-center p-5">
              <p
                className="text-white text-xs font-semibold leading-snug"
                dangerouslySetInnerHTML={{ __html: label }}
              />
            </div>
          </div>
        </SmallContainer>
      </div>

      {/* Section 2 — Table */}
      <div className="py-16">
        <SmallContainer>
          <AnimationFadeIn>
            {/* Table header row */}
            <div className="grid grid-cols-3 bg-savola-green-20 rounded-t-xl overflow-hidden sticky top-0 z-10">
              {tableHeaders.map((h, i) => (
                <div
                  key={i}
                  className="p-4 border-e border-white/50 last:border-e-0"
                >
                  <p className="font-extrabold text-savola-cool-grey text-sm">
                    {h}
                  </p>
                </div>
              ))}
            </div>

            {/* Table rows */}
            <div className="rounded-b-xl overflow-hidden divide-y divide-savola-cool-grey-10 bg-white shadow-sm">
              {tableRows.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 divide-x divide-savola-cool-grey-10"
                >
                  {/* Col 1: Pillar */}
                  <div className="p-4">
                    <p className="font-bold text-savola-orange text-sm mb-1">
                      {row.pillar.title}
                    </p>
                    <p className="text-savola-cool-grey text-xs leading-relaxed">
                      {row.pillar.subtitle}
                    </p>
                  </div>

                  {/* Col 2: Strategic Objectives */}
                  <div className="p-4">
                    <ul className="space-y-2">
                      {row.objectives.map((item, j) => (
                        <li
                          key={j}
                          className="text-savola-cool-grey text-xs flex items-start gap-2 leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-savola-green shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Col 3: 2025 Achievements */}
                  <div className="p-4">
                    <ul className="space-y-2">
                      {row.achievements.map((item, j) => (
                        <li
                          key={j}
                          className="text-savola-cool-grey text-xs flex items-start gap-2 leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-savola-green shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </AnimationFadeIn>
        </SmallContainer>
      </div>
    </div>
  );
};

export default SaudiVision2030Page;
