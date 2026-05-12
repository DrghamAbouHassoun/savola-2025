import { useState } from "react";
import HeaderBg from "../assets/images/new-headers/fostering.jpg";
import NewHeader from "../modules/common/components/headers/NewHeader";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import { useLocale } from "../modules/common/hooks/useLocale";
import SmallContainer from "../modules/common/components/container/SmallContainer";
import AnimationSlideTop from "../modules/common/components/Animations/AnimationSlideTop";
// import employeesImg from "../assets/images/esg/fostering/employees.png";
import frameworkImg from "../assets/images/esg/fostering/framework.png";
import shrmImg from "../assets/images/esg/fostering/shrm-mena-25.jpg";
import smartPhoneImg from "../assets/images/esg/fostering/smart-phone.png";
import icon1 from "../assets/icons/esg/fostering/1.svg";
import icon2 from "../assets/icons/esg/fostering/2.svg";
import icon3 from "../assets/icons/esg/fostering/3.svg";
import icon4 from "../assets/icons/esg/fostering/4.svg";
import icon5 from "../assets/icons/esg/fostering/5.svg";
import icon6 from "../assets/icons/esg/fostering/6.svg";
import accordionArrow from "../assets/icons/geo/accordion-arrow.png";
import FlowerIcon from "../assets/icons/flower.svg";
import AnimationPopUp from "../modules/common/components/Animations/AnimationPopUp";
import SavolaWorldImage from "../assets/images/esg/fostering/savola-world.png";
import NutritionImage from "../assets/images/esg/fostering/nutrition.png";

const PILLAR_ICONS = [icon1, icon2, icon3, icon4, icon5, icon6];

const FosteringCommunityWellnessPage = () => {
  const { t, tArray } = useTranslation("esg-review");
  const { lang } = useLocale();

  const [activeTab, setActiveTab] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleCard = (idx: number) => {
    setFlippedCards((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };
  const [activeSubTab, setActiveSubTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number>(0);
  const [openValuesAccordion, setOpenValuesAccordion] = useState<number>(-1);

  const SectionTitle = ({ text }: { text: string }) => (
    <AnimationSlideTop>
      <h3
        className={`text-xl md:text-2xl font-bold text-savola-orange mb-4`}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </AnimationSlideTop>
  );

  const SubSectionTitle = ({ text }: { text: string }) => (
    <AnimationSlideTop>
      <h4
        className={`text-base md:text-lg font-bold text-savola-cool-grey mb-3`}
      >
        {text}
      </h4>
    </AnimationSlideTop>
  );

  const Paragraph = ({ text }: { text: string }) => (
    <AnimationSlideTop>
      <p
        className={`text-savola-cool-grey text-sm leading-relaxed mb-3`}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </AnimationSlideTop>
  );

  const BulletList = ({
    items,
    color = "orange",
  }: {
    items: string[];
    color?: "orange" | "green" | "grey";
  }) => (
    <AnimationSlideTop>
      <ul className="space-y-2 mb-4">
        {items.map((item, i) => (
          <li
            key={i}
            className={`flex items-start gap-2 text-savola-cool-grey text-sm`}
          >
            <span
              className={`shrink-0 font-bold mt-0.5 ${
                color === "green"
                  ? "text-savola-green"
                  : color === "grey"
                    ? "text-savola-cool-grey"
                    : "text-savola-orange"
              }`}
            >
              •
            </span>
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>
    </AnimationSlideTop>
  );

  const BoxesList = ({
    items,
  }: {
    items: { title: string; desc: string }[];
  }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mb-4">
        {items.map((item) => (
          <AnimationPopUp>
            <div
              key={item.title}
              className="h-full bg-savola-orange-20 text-savola-cool-grey text-sm p-4 py-6 rounded-xl hover:scale-105 transition-all duration-700"
            >
              <h4 className="font-bold text-savola-orange mb-2">
                {item.title}
              </h4>
              <p>{item.desc}</p>
            </div>
          </AnimationPopUp>
        ))}
      </div>
    );
  };

  return (
    <div>
      <NewHeader imageUrl={HeaderBg} title={t("fostering.pageTitle")} />

      {/* ── Main Tab Bar ── */}
      <div className=" sticky top-0 z-10">
        <SmallContainer>
          <div
            className={`flex flex-col md:flex-row bg-savola-orange-20 rounded-lg p-2 overflow-hidden`}
          >
            <button
              onClick={() => setActiveTab(0)}
              className={`px-6 py-4 font-semibold transition-all duration-200 flex-1 rounded-lg ${
                activeTab === 0
                  ? "bg-savola-green text-white"
                  : "text-savola-green"
              }`}
            >
              {t("fostering.tabs.0.tabename")}
            </button>
            <button
              onClick={() => setActiveTab(1)}
              className={`px-6 py-4 font-semibold transition-all duration-200 flex-1 rounded-lg ${
                activeTab === 1
                  ? "bg-savola-green text-white"
                  : "text-savola-green"
              }`}
            >
              {t("fostering.tabs.1.tabName")}
            </button>
          </div>
        </SmallContainer>
      </div>

      {/* ══════════════════════════════════
          TAB 0 – Our People
      ══════════════════════════════════ */}
      {activeTab === 0 && (
        <div>
          {/* ── Intro + Section 0: Empowering Our People ── */}
          <div className="">
            <section className="py-20">
              <SmallContainer>
                <AnimationSlideTop>
                  <h2 className={`text-2xl md:text-3xl font-bold mb-8 `}>
                    {t("fostering.tabs.0.ourPeople.title")}
                  </h2>
                </AnimationSlideTop>

                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <div className="flex-1">
                    <AnimationSlideTop>
                      <h3
                        className={`text-xl font-bold text-savola-orange mb-4`}
                      >
                        {t("fostering.tabs.0.ourPeople.ourPeople.title")}
                      </h3>
                    </AnimationSlideTop>
                    <Paragraph
                      text={t("fostering.tabs.0.ourPeople.ourPeople.desc")}
                    />

                    <AnimationSlideTop>
                      <h4
                        className={`text-base font-bold text-savola-cool-grey mt-6 mb-3`}
                      >
                        {t(
                          "fostering.tabs.0.ourPeople.ourPeople.sections.0.title",
                        )}
                      </h4>
                    </AnimationSlideTop>
                    <Paragraph
                      text={t(
                        "fostering.tabs.0.ourPeople.ourPeople.sections.0.paragraphs.0",
                      )}
                    />
                    <Paragraph
                      text={t(
                        "fostering.tabs.0.ourPeople.ourPeople.sections.0.paragraphs.1",
                      )}
                    />

                    <AnimationSlideTop>
                      <div className="inline-block max-w-48">
                        <img
                          src={FlowerIcon}
                          alt=""
                          className="w-8 h-8 object-contain my-2"
                        />
                        <p
                          className={`mb-1 leading-snug text-savola-cool-grey font-bold`}
                        >
                          {t(
                            "fostering.tabs.0.ourPeople.ourPeople.sections.0.label.title",
                          )}
                        </p>
                        <p className="text-4xl font-bold flex text-savola-green">
                          <span>97</span>
                          <span>
                            {t(
                              "fostering.tabs.0.ourPeople.ourPeople.sections.0.label.number.suffix",
                            )}
                          </span>
                        </p>
                      </div>
                    </AnimationSlideTop>
                  </div>
                </div>
              </SmallContainer>
            </section>
          </div>

          {/* ── Section 1: Workforce by Numbers ── */}
          <section className="py-4 bg-white">
            <SmallContainer>
              <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
                <div className="flex-1">
                  <SubSectionTitle
                    text={t(
                      "fostering.tabs.0.ourPeople.ourPeople.sections.1.title",
                    )}
                  />
                  <Paragraph
                    text={t(
                      "fostering.tabs.0.ourPeople.ourPeople.sections.1.desc",
                    )}
                  />
                </div>
                {/* <AnimationSlideTop className="shrink-0 flex-1 border-b-2 border-t-2 border-black items-center ">
                  <div className="flex items-center">
                    <p
                      className="text-xl text-savola-cool-grey font-semibold leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: t(
                          "fostering.tabs.0.ourPeople.ourPeople.sections.1.label.text",
                        ),
                      }}
                    />
                    <AnimationSlideTop className="shrink-0 w-full md:w-64 lg:w-72">
                      <img
                        src={employeesImg}
                        alt=""
                        className="w-full object-contain"
                      />
                    </AnimationSlideTop>
                  </div>
                </AnimationSlideTop> */}
              </div>

              <AnimationSlideTop>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="">
                        {tArray(
                          "fostering.tabs.0.ourPeople.ourPeople.sections.1.table.headers",
                        ).map((header, i) => (
                          <th
                            key={i}
                            className={`px-3 py-2 font-semibold border-b-2 border-b-savola-orange ${lang === "ar" || i === 0 ? "text-start" : "text-end"}`}
                            dangerouslySetInnerHTML={{ __html: header }}
                          />
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[0, 1, 2, 3].map((rowIdx) => {
                        const row = tArray(
                          `fostering.tabs.0.ourPeople.ourPeople.sections.1.table.raws.${rowIdx}`,
                        );
                        return (
                          <tr key={rowIdx} className={""}>
                            {row.map((cell, ci) => (
                              <td
                                key={ci}
                                className={`px-3 py-2 text-center border border-savola-cool-grey-10 ${lang === "en" && ci !== 0 ? "text-end" : "text-start"} ${ci % 2 !== 0 ? "bg-savola-green-20" : ""} ${ci === 0 ? "font-bold" : ""}`}
                              >
                                {ci > 0
                                  ? Number(cell).toLocaleString("en")
                                  : cell}
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </AnimationSlideTop>

              <AnimationSlideTop>
                <p className={`text-savola-cool-grey text-sm leading-relaxed `}>
                  {t("fostering.tabs.0.ourPeople.ourPeople.sections.1.note")}
                </p>
              </AnimationSlideTop>
            </SmallContainer>
          </section>

          {/* ── Section 2: Clarifying Expectations ── */}
          <section className="pt-2">
            <SmallContainer>
              <SubSectionTitle
                text={t(
                  "fostering.tabs.0.ourPeople.ourPeople.sections.2.title",
                )}
              />
              {[0, 1, 2, 3, 4].map((i) => (
                <Paragraph
                  key={i}
                  text={t(
                    `fostering.tabs.0.ourPeople.ourPeople.sections.2.paragraphs.${i}`,
                  )}
                />
              ))}
            </SmallContainer>
          </section>

          {/* ── Section 3: Desired Culture Framework ── */}
          <section className="pb-4 bg-white pt-4">
            <SmallContainer>
              <SubSectionTitle
                text={t(
                  "fostering.tabs.0.ourPeople.ourPeople.sections.3.title",
                )}
              />
              {(lang === "ar" ? [0] : [0, 1]).map((i) => (
                <Paragraph
                  key={i}
                  text={t(
                    `fostering.tabs.0.ourPeople.ourPeople.sections.3.paragraphs.${i}`,
                  )}
                />
              ))}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {PILLAR_ICONS.map((icon, cardIdx) => {
                  const listItems = tArray(
                    `fostering.tabs.0.ourPeople.ourPeople.sections.3.cards.${cardIdx}.list`,
                  );
                  const isFlipped = flippedCards[cardIdx] ?? false;
                  return (
                    <AnimationSlideTop key={cardIdx}>
                      {/* Flip card container — fixed height so front/back share space */}
                      <div
                        className="group relative h-48 cursor-pointer"
                        style={{ perspective: "1000px" }}
                        onClick={() => toggleCard(cardIdx)}
                      >
                        {/* Inner wrapper that rotates */}
                        <div
                          className="relative w-full h-full transition-transform duration-500"
                          style={{
                            transformStyle: "preserve-3d",
                            transform:
                              isFlipped
                                ? "rotateY(180deg)"
                                : "rotateY(0deg)",
                          }}
                        >
                          {/* ── FRONT ── */}
                          <div
                            className="absolute inset-0 bg-savola-orange-20 rounded-xl flex flex-col items-center justify-center gap-3 p-4"
                            style={{ backfaceVisibility: "hidden" }}
                          >
                            <img
                              src={icon}
                              alt=""
                              className="w-12 h-12 object-contain"
                            />
                            <h5 className="text-savola-orange font-bold text-sm leading-tight text-center">
                              {t(
                                `fostering.tabs.0.ourPeople.ourPeople.sections.3.cards.${cardIdx}.title`,
                              )}
                            </h5>
                          </div>

                          {/* ── BACK ── */}
                          <div
                            className="absolute inset-0 bg-savola-orange rounded-xl p-4 overflow-y-auto"
                            style={{
                              backfaceVisibility: "hidden",
                              transform: "rotateY(180deg)",
                            }}
                          >
                            <ul className="space-y-1">
                              {listItems.filter(Boolean).map((item, li) => (
                                <li
                                  key={li}
                                  className="text-white text-xs flex items-start gap-1.5"
                                >
                                  <span className="shrink-0 mt-0.5 font-bold">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                            {cardIdx === 5 && (
                              <p className="text-white/80 mt-2 text-xs">
                                {t(
                                  "fostering.tabs.0.ourPeople.ourPeople.sections.3.cards.5.note",
                                )}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </AnimationSlideTop>
                  );
                })}
              </div>
            </SmallContainer>
          </section>

          {/* ── Section 4: Embedding Culture ── */}
          <section className="py-4">
            <SmallContainer>
              <SubSectionTitle
                text={t(
                  "fostering.tabs.0.ourPeople.ourPeople.sections.4.title",
                )}
              />
              {[0, 1, 2, 3, 4].map((i) => (
                <Paragraph
                  key={i}
                  text={t(
                    `fostering.tabs.0.ourPeople.ourPeople.sections.4.paragraphs.${i}`,
                  )}
                />
              ))}
            </SmallContainer>
          </section>

          {/* ── Our Values ── */}
          <section className="py-16 bg-savola-green-20">
            <SmallContainer>
              <SectionTitle text={t("fostering.tabs.0.ourValues.title")} />
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="flex-1">
                  <Paragraph
                    text={t("fostering.tabs.0.ourValues.paragraphs.0")}
                  />
                  <div className="flex flex-col gap-0.75 my-4">
                    {[0, 1, 2].map((accIdx) => {
                      const isOpen = openValuesAccordion === accIdx;
                      return (
                        <div key={accIdx} className="overflow-hidden">
                          <button
                            onClick={() =>
                              setOpenValuesAccordion(isOpen ? -1 : accIdx)
                            }
                            className="w-full flex items-center justify-between px-5 py-4 bg-savola-green-20 hover:bg-savola-green-50/40 transition-colors duration-200 cursor-pointer"
                          >
                            <span className="text-savola-orange font-bold text-base text-start">
                              {t(
                                `fostering.tabs.0.ourValues.accordion.${accIdx}.title`,
                              )}
                            </span>
                            <img
                              src={accordionArrow}
                              alt=""
                              className={`w-5 h-5 shrink-0 object-contain transition-transform duration-300 ${
                                isOpen ? "rotate-180" : "rotate-0"
                              }`}
                            />
                          </button>
                          <div
                            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                              isOpen ? "max-h-300" : "max-h-0"
                            }`}
                          >
                            <div className="p-5">
                              <p
                                className="text-savola-cool-grey text-sm leading-relaxed"
                                dangerouslySetInnerHTML={{
                                  __html: t(
                                    `fostering.tabs.0.ourValues.accordion.${accIdx}.content`,
                                  ),
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <Paragraph
                    text={t("fostering.tabs.0.ourValues.paragraphs.4")}
                  />
                </div>
                <AnimationSlideTop className="flex-1 w-full md:max-w-66">
                  <img
                    src={frameworkImg}
                    alt=""
                    className="w-full object-contain"
                  />
                  <div className=" p-6 mb-4">
                    <p
                      className="font-bold text-xl leading-snug text-savola-cool-grey"
                      dangerouslySetInnerHTML={{
                        __html: t("fostering.tabs.0.ourValues.label"),
                      }}
                    />
                  </div>
                </AnimationSlideTop>
              </div>
            </SmallContainer>
          </section>

          {/* ── Building Capability ── */}
          <section className="py-16">
            <SmallContainer>
              <SectionTitle text={t("fostering.tabs.0.capability.title")} />
              <Paragraph text={t("fostering.tabs.0.capability.desc")} />

              {/* Div 0: Strengthening Functional */}
              <div className="mt-6 mb-8">
                <SubSectionTitle
                  text={t("fostering.tabs.0.capability.divs.0.title")}
                />
                {[0, 1, 2].map((i) => (
                  <Paragraph
                    key={i}
                    text={t(
                      `fostering.tabs.0.capability.divs.0.paragraphs.${i}`,
                    )}
                  />
                ))}
              </div>

              {/* Div 1: Developing Leaders */}
              <div className="mb-8">
                <SubSectionTitle
                  text={t("fostering.tabs.0.capability.divs.1.title")}
                />
                {[0, 1].map((i) => (
                  <Paragraph
                    key={i}
                    text={t(
                      `fostering.tabs.0.capability.divs.1.paragraphs.${i}`,
                    )}
                  />
                ))}
              </div>

              {/* Div 2: Digital Skills — table */}
              <div className="mb-8">
                <SubSectionTitle
                  text={t("fostering.tabs.0.capability.divs.2.title")}
                />
                <Paragraph
                  text={t("fostering.tabs.0.capability.divs.2.desc")}
                />
                <AnimationSlideTop>
                  <div className="overflow-x-auto mt-2">
                    <table className="w-full">
                      <thead>
                        <tr className="">
                          {tArray(
                            "fostering.tabs.0.capability.divs.2.table.headers",
                          ).map((header, i) => (
                            <th
                              key={i}
                              className={`px-4 py-2 font-semibold text-start border-b-2 border-b-savola-orange`}
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[0, 1, 2, 3].map((rowIdx) => {
                          const row = tArray(
                            `fostering.tabs.0.capability.divs.2.table.raws.${rowIdx}`,
                          );
                          return (
                            <tr key={rowIdx} className={""}>
                              <td
                                className={`px-4 py-3 font-semibold align-top border border-savola-cool-grey-10 whitespace-nowrap`}
                              >
                                {row[0]}
                              </td>
                              <td
                                className={`px-4 py-3 text-sm font-normal leading-relaxed align-top border border-savola-cool-grey-10`}
                              >
                                {row[1]}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </AnimationSlideTop>
              </div>

              {/* Div 3: Learning Scale + SHRM Award */}
              <div className="mb-4">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <SubSectionTitle
                      text={t("fostering.tabs.0.capability.divs.3.title")}
                    />
                    <div className="flex-1">
                      {[0, 1, 2].map((i) => (
                        <Paragraph
                          key={i}
                          text={t(
                            `fostering.tabs.0.capability.divs.3.paragraphs.${i}`,
                          )}
                        />
                      ))}
                    </div>
                    {lang === "ar" && (
                      <>
                        <h5 className="font-bold text-savola-cool-grey mb-2">
                          {t("fostering.tabs.0.capability.divs.4.title")}
                        </h5>
                        <div className="flex-1">
                          {[0, 1].map((i) => (
                            <Paragraph
                              key={i}
                              text={t(
                                `fostering.tabs.0.capability.divs.4.paragraphs.${i}`,
                              )}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  <AnimationSlideTop className="shrink-0 w-full md:max-w-84">
                    <div className="text-2xl">
                      <img
                        src={shrmImg}
                        alt="SHRM MENA"
                        className="w-45 h-auto mb-3"
                      />
                      <p className="text-savola-black font-bold text-lg mb-1">
                        {t("fostering.tabs.0.capability.divs.3.label.subtitle")}
                      </p>
                      <span className="text-savola-orange font-bold text-lg mb-2">
                        {t("fostering.tabs.0.capability.divs.3.label.title")}
                      </span>{" "}
                      <span className="text-savola-black text-lg leading-relaxed">
                        {t(
                          "fostering.tabs.0.capability.divs.3.label.description",
                        )}
                      </span>
                    </div>
                  </AnimationSlideTop>
                </div>
              </div>
            </SmallContainer>
          </section>

          {/* ── Sub-tabs: Health / Diversity / Nationalization ── */}
          <section className="py-16 bg-savola-cool-grey-7">
            <SmallContainer>
              <div
                className={`flex flex-wrap gap-4 mb-8 border-b border-savola-cool-grey-10 `}
              >
                {[0, 1, 2].map((subIdx) => {
                  const labelKey =
                    subIdx === 0
                      ? "fostering.tabs.0.capability.tabs.0.tabHeader"
                      : `fostering.tabs.0.capability.tabs.${subIdx}.tabName`;
                  return (
                    <button
                      key={subIdx}
                      onClick={() => setActiveSubTab(subIdx)}
                      className={`rounded-full px-4 py-3 flex-1 font-semibold border-2 transition-all duration-200 ${
                        activeSubTab === subIdx
                          ? "border-savola-orange bg-savola-orange text-white"
                          : "border-transparent bg-savola-cool-grey hover:bg-savola-cool-grey/80 text-white"
                      }`}
                    >
                      {t(labelKey)}
                    </button>
                  );
                })}
              </div>

              {/* Sub-tab 0: Health & Wellness */}
              {activeSubTab === 0 && (
                <div>
                  <SectionTitle
                    text={t("fostering.tabs.0.capability.tabs.0.content.title")}
                  />
                  <Paragraph
                    text={t("fostering.tabs.0.capability.tabs.0.content.desc")}
                  />
                  {[0, 1, 2].map((divIdx) => (
                    <div key={divIdx} className="mt-6">
                      <SubSectionTitle
                        text={t(
                          `fostering.tabs.0.capability.tabs.0.content.divs.${divIdx}.title`,
                        )}
                      />
                      {tArray(
                        `fostering.tabs.0.capability.tabs.0.content.divs.${divIdx}.paragraphs`,
                      ).map((para, i) => (
                        <Paragraph key={i} text={para} />
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {/* Sub-tab 1: Diversity, Equity & Inclusion */}
              {activeSubTab === 1 && (
                <div>
                  <SectionTitle
                    text={t("fostering.tabs.0.capability.tabs.1.title")}
                  />
                  <Paragraph
                    text={t("fostering.tabs.0.capability.tabs.1.desc")}
                  />
                  {[0, 1, 2, 3].map((divIdx) => (
                    <div
                      key={divIdx}
                      className="mt-6 flex flex-col md:flex-row"
                    >
                      <div>
                        <SubSectionTitle
                          text={t(
                            `fostering.tabs.0.capability.tabs.1.divs.${divIdx}.title`,
                          )}
                        />
                        {tArray(
                          `fostering.tabs.0.capability.tabs.1.divs.${divIdx}.paragraphs`,
                        ).map((para, i) => (
                          <Paragraph key={i} text={para} />
                        ))}
                      </div>
                      {divIdx === 1 && (
                        <div className=" w-full max-w-64">
                          <AnimationSlideTop>
                            <div className="inline-block mt-3 border-b-2 border-t-2 border-black py-4">
                              <p
                                className={` mb-1 leading-snug text-lg text-savola-cool-grey font-bold`}
                              >
                                {t(
                                  "fostering.tabs.0.capability.tabs.1.divs.1.label.text",
                                )}
                              </p>
                              <p className="text-savola-green text-4xl font-bold">
                                65
                                {t(
                                  "fostering.tabs.0.capability.tabs.1.divs.1.label.number.suffix",
                                )}
                              </p>
                            </div>
                          </AnimationSlideTop>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Sub-tab 2: Nationalization */}
              {activeSubTab === 2 && (
                <div>
                  <SectionTitle
                    text={t("fostering.tabs.0.capability.tabs.2.title")}
                  />
                  <AnimationSlideTop>
                    <p
                      className={`text-savola-cool-grey text-sm leading-relaxed mb-3`}
                      dangerouslySetInnerHTML={{
                        __html: t("fostering.tabs.0.capability.tabs.2.desc"),
                      }}
                    />
                  </AnimationSlideTop>
                  {[0, 1].map((divIdx) => (
                    <div key={divIdx} className="mt-6">
                      <SubSectionTitle
                        text={t(
                          `fostering.tabs.0.capability.tabs.2.divs.${divIdx}.title`,
                        )}
                      />
                      {tArray(
                        `fostering.tabs.0.capability.tabs.2.divs.${divIdx}.paragraphs`,
                      ).map((para, i) => (
                        <Paragraph key={i} text={para} />
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </SmallContainer>
          </section>
        </div>
      )}

      {/* ══════════════════════════════════
          TAB 1 – Community Impact & Investment
      ══════════════════════════════════ */}
      {activeTab === 1 && (
        <div>
          {/* ── Intro ── */}
          <div className="">
            <section className="pt-16">
              <SmallContainer>
                <AnimationSlideTop>
                  <h2
                    className={`text-2xl md:text-3xl font-bold text-black mb-6`}
                  >
                    {t("fostering.tabs.1.intro.title")}
                  </h2>
                </AnimationSlideTop>
              </SmallContainer>
            </section>
          </div>

          {/* ── Section 0: Savola World Foundation ── */}
          <section className="py-4">
            <div className="w-full relative">
              <div className="flex max-w-5xl mx-auto">
                <div className="flex-1 py-32 px-4">
                  <AnimationSlideTop>
                    <p className={`font-bold text-savola-cool-grey mb-3`}>
                      {t("fostering.tabs.1.intro.subtitle")}
                    </p>
                  </AnimationSlideTop>
                  <BulletList
                    items={tArray("fostering.tabs.1.intro.list")}
                    color="grey"
                  />
                  <Paragraph text={t("fostering.tabs.1.intro.p")} />
                  <SectionTitle text={t("fostering.tabs.1.sections.0.title")} />
                  <AnimationSlideTop>
                    <div className="">
                      <SubSectionTitle
                        text={t("fostering.tabs.1.sections.0.div.title")}
                      />
                      <Paragraph
                        text={t("fostering.tabs.1.sections.0.div.desc")}
                      />
                    </div>
                  </AnimationSlideTop>
                </div>
                <div className="flex-1 flex justify-end "></div>
              </div>
              <img
                src={SavolaWorldImage}
                alt=""
                className={`w-full lg:w-auto h-full object-contain ${lang === "ar" ? "object-left left-0 rotate-y-180" : "object-right right-0"} xl:absolute top-0`}
              />
            </div>
          </section>

          {/* ── Section 1: Savola World 2025 ── */}
          <section className="py-4">
            <SmallContainer>
              <SectionTitle text={t("fostering.tabs.1.sections.1.title")} />
              <SubSectionTitle
                text={t("fostering.tabs.1.sections.1.div.title")}
              />
              <Paragraph text={t("fostering.tabs.1.sections.1.div.desc")} />
              <BulletList
                items={tArray("fostering.tabs.1.sections.1.div.list")}
                color="grey"
              />
              <Paragraph text={t("fostering.tabs.1.sections.1.div.p")} />

              {/* Accordion */}
              <div className="flex flex-col gap-0.75 mt-6">
                {[0, 1, 2].map((accIdx) => {
                  const isOpen = openAccordion === accIdx;
                  const pKey =
                    accIdx < 2
                      ? `fostering.tabs.1.sections.1.div.accordion.${accIdx}.content.p`
                      : `fostering.tabs.1.sections.1.div.accordion.${accIdx}.p`;
                  const listKey =
                    accIdx < 2
                      ? `fostering.tabs.1.sections.1.div.accordion.${accIdx}.content.list`
                      : `fostering.tabs.1.sections.1.div.accordion.${accIdx}.list`;
                  const p2Key =
                    accIdx === 0
                      ? null
                      : accIdx === 1
                        ? "fostering.tabs.1.sections.1.div.accordion.1.content.p2"
                        : "fostering.tabs.1.sections.1.div.accordion.2.p2";

                  return (
                    <div key={accIdx} className="overflow-hidden">
                      <button
                        onClick={() => setOpenAccordion(isOpen ? -1 : accIdx)}
                        className={`w-full flex items-center justify-between px-5 py-4 bg-savola-green-20 hover:bg-savola-green-50/40 transition-colors duration-200 cursor-pointer`}
                      >
                        <span
                          className={`text-savola-orange font-bold text-base`}
                        >
                          {t(
                            `fostering.tabs.1.sections.1.div.accordion.${accIdx}.title`,
                          )}
                        </span>
                        <img
                          src={accordionArrow}
                          alt=""
                          className={`w-5 h-5 shrink-0 object-contain transition-transform duration-300 ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                          isOpen ? "max-h-300" : "max-h-0"
                        }`}
                      >
                        <div className="p-5 bg-white">
                          <p
                            className={`text-savola-cool-grey text-sm leading-relaxed mb-3`}
                            dangerouslySetInnerHTML={{ __html: t(pKey) }}
                          />
                          <ul className="space-y-2 mb-3">
                            {tArray(listKey).map((item, li) => (
                              <li
                                key={li}
                                className={`flex items-start gap-2 text-savola-cool-grey text-sm`}
                              >
                                <span className="text-savola-cool-grey shrink-0 font-bold mt-0.5">
                                  •
                                </span>
                                <span
                                  dangerouslySetInnerHTML={{ __html: item }}
                                />
                              </li>
                            ))}
                          </ul>
                          {p2Key && (
                            <p
                              className={`text-savola-cool-grey text-sm leading-relaxed`}
                              dangerouslySetInnerHTML={{ __html: t(p2Key) }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Foundation report + smartphone mockup */}
              <div
                className={`flex flex-col md:flex-row gap-8 items-center mt-10 bg-savola-orange-20`}
              >
                <AnimationSlideTop className="flex-1 flex justify-center">
                  <p
                    className={`text-savola-cool-grey text-sm leading-relaxed max-w-90`}
                    dangerouslySetInnerHTML={{
                      __html: t(
                        "fostering.tabs.1.sections.1.div.foundationReport.text",
                      ),
                    }}
                  />
                </AnimationSlideTop>
                <AnimationSlideTop className="flex-1 flex justify-center w-full md:w-44">
                  <img
                    src={smartPhoneImg}
                    alt=""
                    className="w-full object-contain h-auto max-w-120"
                  />
                </AnimationSlideTop>
              </div>
            </SmallContainer>
          </section>

          {/* ── Section 2: Operating Group Contributions ── */}
          <section className="py-4 bg-white">
            <SmallContainer>
              <SectionTitle text={t("fostering.tabs.1.sections.2.title")} />
              <AnimationSlideTop>
                <h4
                  className={`text-base font-bold text-savola-cool-grey mb-4`}
                >
                  {t("fostering.tabs.1.sections.2.subtitle")}
                </h4>
              </AnimationSlideTop>
              {[0, 1, 2].map((i) => (
                <Paragraph
                  key={i}
                  text={t(`fostering.tabs.1.sections.2.paragraphs.${i}`)}
                />
              ))}
            </SmallContainer>
          </section>

          {/* ── Section 3: Food Quality and Safety ── */}
          <section className="py-4">
            <SmallContainer>
              <SectionTitle text={t("fostering.tabs.1.sections.3.title")} />
              <AnimationSlideTop>
                <p
                  className={`text-savola-cool-grey text-sm leading-relaxed mb-1`}
                  dangerouslySetInnerHTML={{
                    __html: t("fostering.tabs.1.sections.3.desc"),
                  }}
                />
              </AnimationSlideTop>
              <BoxesList
                items={
                  tArray("fostering.tabs.1.sections.3.list") as unknown as {
                    title: string;
                    desc: string;
                  }[]
                }
                // color="grey"
              />
              <div className="">
                {[0, 1].map((divIdx) => (
                  <AnimationSlideTop key={divIdx}>
                    <div className="h-full">
                      <h4 className={`font-bold text-savola-cool-grey mb-2`}>
                        {t(`fostering.tabs.1.sections.3.divs.${divIdx}.title`)}
                      </h4>
                      <p
                        className={`text-savola-cool-grey text-sm leading-relaxed`}
                        dangerouslySetInnerHTML={{
                          __html: t(
                            `fostering.tabs.1.sections.3.divs.${divIdx}.desc`,
                          ),
                        }}
                      />
                    </div>
                  </AnimationSlideTop>
                ))}
              </div>
            </SmallContainer>
          </section>

          {/* ── Section 4: Nutrition and Health ── */}
          <section className=" ">
            <div className="w-full relative ">
              <div className=" py-16 w-full flex flex-col lg:flex-row  max-w-5xl mx-auto px-4">
                <div className="flex-1">
                  <SectionTitle text={t("fostering.tabs.1.sections.4.title")} />
                  <Paragraph text={t("fostering.tabs.1.sections.4.p")} />
                  <BulletList
                    items={tArray("fostering.tabs.1.sections.4.list")}
                    color="grey"
                  />
                  <div className="">
                    <AnimationSlideTop>
                      <div className="">
                        <h4 className={`font-bold text-savola-cool-grey mb-3`}>
                          {t("fostering.tabs.1.sections.4.divs.0.title")}
                        </h4>
                        {tArray(
                          "fostering.tabs.1.sections.4.divs.0.paragraphs",
                        ).map((para, i) => (
                          <p
                            key={i}
                            className={`text-savola-cool-grey text-sm leading-relaxed mb-2`}
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    </AnimationSlideTop>
                    <AnimationSlideTop>
                      <div className="h-full mt-4">
                        <h4 className={`font-bold text-savola-cool-grey mb-3`}>
                          {t("fostering.tabs.1.sections.4.divs.1.title")}
                        </h4>
                        <p
                          className={`text-savola-cool-grey text-sm leading-relaxed mb-3`}
                        >
                          {t("fostering.tabs.1.sections.4.divs.1.p")}
                        </p>
                        <ul className="space-y-2 text-sm">
                          {tArray(
                            "fostering.tabs.1.sections.4.divs.1.list",
                          ).map((item, i) => (
                            <li
                              key={i}
                              className={`flex items-start gap-2 text-savola-cool-grey`}
                            >
                              <span className="text-savola-cool-grey shrink-0 font-bold mt-0.5">
                                •
                              </span>
                              <span
                                dangerouslySetInnerHTML={{ __html: item }}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AnimationSlideTop>
                  </div>
                </div>
                <div className="flex-1"></div>
              </div>
              <img
                src={NutritionImage}
                alt=""
                className={`h-full w-full lg:w-auto lg:max-w-[50%] object-contain lg:absolute bottom-0 ${lang === "ar" ? "left-0 object-bottom-left rotate-y-180" : "right-0 object-bottom-right"}`}
              />
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default FosteringCommunityWellnessPage;
