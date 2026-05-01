import { useState, useContext } from "react";
import NewHeader from "../modules/common/components/headers/NewHeader";
import BusinessModelBg from "../assets/images/new-headers/business-model.jpg";
import SmallContainer from "../modules/common/components/container/SmallContainer";
import { LangContext } from "../modules/common/contexts/LangProvider";

import OurStrengthsIcon from "../assets/icons/business-model/our-strengths.svg";
import OurChallengesIcon from "../assets/icons/business-model/our-challenges.svg";
import HowWeAddValueIcon from "../assets/icons/business-model/how-we-add-value.svg";
import OurCorporateValuesIcon from "../assets/icons/business-model/our-corporate-values.svg";

import SavolaAngleGreen from "../assets/vectors/savola-angel-green.svg";
import FlowerTwoIcon from "../assets/icons/flower-2.svg";

type StrengthItem = { title: string; desc: string };
type AddValueItem = { title: string; desc: string };
type CorporateValueItem = { desc?: string; title?: string; list?: string[] };
type BusinessModel = {
  pageTitle: string;
  title: string;
  desc: string;
  ourStrengths: { title: string; items: StrengthItem[] };
  ourChallenges: { title: string; items: string[] };
  howWeAddedValue: { title: string; items: AddValueItem[] };
  ourCorporateValue: { title: string; items: CorporateValueItem[] };
  outro: string;
};

const StrategyAndBusinessModelPage = () => {
  const { lang, translations } = useContext(LangContext);
  const data = (
    translations as unknown as Record<
      string,
      Record<string, { businessModel: BusinessModel }>
    >
  )[lang]["strategic-review"].businessModel;

  const [openSection, setOpenSection] = useState<number | null>(null);
  const toggle = (idx: number) =>
    setOpenSection(openSection === idx ? null : idx);

  const sections = [
    { icon: OurStrengthsIcon, title: data.ourStrengths.title, idx: 0 },
    { icon: OurChallengesIcon, title: data.ourChallenges.title, idx: 1 },
    { icon: HowWeAddValueIcon, title: data.howWeAddedValue.title, idx: 2 },
    {
      icon: OurCorporateValuesIcon,
      title: data.ourCorporateValue.title,
      idx: 3,
    },
  ];

  return (
    <div>
      <NewHeader imageUrl={BusinessModelBg} title={data.pageTitle} />

      {/* Intro */}
      <section className="py-16 bg-linear-to-b from-savola-orange-20 to-savola-orange-20/30">
        <SmallContainer>
          <h2 className="text-savola-green font-extrabold text-2xl md:text-3xl mb-6 leading-snug">
            {data.title}
          </h2>
          <p className="text-xl font-bold leading-relaxed text-savola-cool-grey">
            {data.desc}
          </p>
        </SmallContainer>
      </section>

      {/* Accordions */}
      <section className="pb-20 bg-savola-orange-20/30">
        <SmallContainer>
          <div className="flex flex-col gap-2">
            {sections.map(({ icon, title, idx }) => {
              const isOpen = openSection === idx;
              return (
                <div key={idx} className="overflow-hidden">
                  {/* Accordion header */}
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-savola-green-20 hover:bg-savola-green-50/50 transition-colors duration-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={icon}
                        alt=""
                        className="w-7 h-7 object-contain shrink-0"
                      />
                      <span className="text-savola-orange font-bold text-base md:text-lg text-start">
                        {title}
                      </span>
                    </div>
                    <img
                      src={SavolaAngleGreen}
                      alt=""
                      className={`w-4 h-4 ${openSection === idx && "rotate-180"}`}
                    />
                  </button>

                  {/* Accordion body */}
                  <div
                    className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                      isOpen ? "max-h-500" : "max-h-0"
                    }`}
                  >
                    <div className="p-6">
                      {/* Our Strengths */}
                      {idx === 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                          {data.ourStrengths.items.map((item, i) => (
                            <div key={i}>
                              <h4 className="text-savola-green font-bold text-base mb-2">
                                {item.title}
                              </h4>
                              <p className="text-savola-cool-grey text-sm leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Our Challenges */}
                      {idx === 1 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                          {data.ourChallenges.items.map((item, i) => (
                            <p
                              key={i}
                              className="text-savola-cool-grey text-sm leading-relaxed [&_b]:font-bold [&_b]:text-savola-cool-grey"
                              dangerouslySetInnerHTML={{ __html: item }}
                            />
                          ))}
                        </div>
                      )}

                      {/* How We Add Value */}
                      {idx === 2 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                          {data.howWeAddedValue.items.map((item, i) => (
                            <div key={i}>
                              <h4 className="text-savola-green font-bold text-base mb-2">
                                {item.title}
                              </h4>
                              <div
                                className="text-savola-cool-grey text-sm leading-relaxed [&_ul]:list-disc [&_ul]:ps-5 [&_li]:mb-1"
                                dangerouslySetInnerHTML={{ __html: item.desc }}
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Our Corporate Values */}
                      {idx === 3 && (
                        <div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                            {data.ourCorporateValue.items[0]?.desc && (
                              <p className="text-savola-cool-grey text-sm leading-relaxed mb-8">
                                {data.ourCorporateValue.items[0].desc}
                              </p>
                            )}
                            {data.ourCorporateValue.items
                              .slice(1)
                              .map((item, i) => (
                                <div key={i}>
                                  <h4 className="text-savola-green font-bold text-base mb-3">
                                    {item.title}
                                  </h4>
                                  <ul className="space-y-2 list-outside list-disc px-4">
                                    {item.list?.map((li, j) => (
                                      <li
                                        key={j}
                                        className="text-savola-cool-grey text-sm leading-relaxed [&_b]:font-bold"
                                        dangerouslySetInnerHTML={{
                                          __html: `${li}`,
                                        }}
                                      />
                                    ))}
                                  </ul>
                                </div>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <h3 className='text-2xl text-savola-cool-grey font-bold p-4 py-8 bg-linear-to-b from-savola-green-20 to-savola-green/0 flex justify-center mt-32 gap-4'>
            <img src={FlowerTwoIcon} alt="" className="w-16 h-16" />{data.outro}
          </h3>
        </SmallContainer>
      </section>
    </div>
  );
};

export default StrategyAndBusinessModelPage;
