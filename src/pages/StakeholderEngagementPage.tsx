import { useState } from "react";
import NewHeader from "../modules/common/components/headers/NewHeader";
import StakeholderHeader from "../assets/images/new-headers/stackholder.jpg";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import SmallContainer from "../modules/common/components/container/SmallContainer";
import AnimationSlideTop from "../modules/common/components/Animations/AnimationSlideTop";

import investorsIcon from "../assets/icons/geo/investors.png";
import suppliersIcon from "../assets/icons/geo/suppliers.png";
import operatingCompaniesIcon from "../assets/icons/geo/operating-companies.png";
import employeesIcon from "../assets/icons/geo/employees.png";
import communityIcon from "../assets/icons/geo/community.png";
import consumersIcon from "../assets/icons/geo/consumers.png";
import boardIcon from "../assets/icons/geo/board.png";
import ngosIcon from "../assets/icons/geo/ngos.png";
import partnersIcon from "../assets/icons/geo/partners.png";
import governmentIcon from "../assets/icons/geo/goverment.png";
import accordionArrow from "../assets/icons/geo/accordion-arrow.png";

const STAKEHOLDERS = [
  { key: "investors", icon: investorsIcon },
  { key: "suppliers", icon: suppliersIcon },
  { key: "operatingCompanies", icon: operatingCompaniesIcon },
  { key: "employees", icon: employeesIcon },
  { key: "community", icon: communityIcon },
  { key: "consumers", icon: consumersIcon },
  { key: "board", icon: boardIcon },
  { key: "ngos", icon: ngosIcon },
  { key: "partners", icon: partnersIcon },
  { key: "government", icon: governmentIcon },
] as const;

const StakeholderEngagementPage = () => {
  const { t: tCommon } = useTranslation("common");
  const { t, tArray } = useTranslation("overview");
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div>
      <NewHeader
        imageUrl={StakeholderHeader}
        title={tCommon("nav.pages.stakeholder-engagement")}
      />

      <section className="py-30 bg-linear-to-b from-savola-green-20 to-savola-green-50/0">
        <SmallContainer>
          <AnimationSlideTop>
            <h2
              className="text-savola-green font-bold text-2xl md:text-3xl leading-snug mb-5"
              dangerouslySetInnerHTML={{
                __html: t("stakeholderEngagement.heading"),
              }}
            />
          </AnimationSlideTop>
          <AnimationSlideTop>
            <p className="text-black text-lg font-bold leading-relaxed mb-12">
              {t("stakeholderEngagement.intro")}
            </p>
          </AnimationSlideTop>
        </SmallContainer>
      </section>
      <section className="pb-16">
        <SmallContainer>
          <div className="flex flex-col gap-0.75">
            {STAKEHOLDERS.map(({ key, icon }, index) => {
              const isOpen = openIndex === index;
              const concerns = tArray(`stakeholderEngagement.${key}.concerns`);
              const channels = tArray(`stakeholderEngagement.${key}.channels`);

              return (
                <div key={key} className="overflow-hidden ">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-savola-green-20 hover:bg-savola-green-50/40 transition-colors duration-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={icon}
                        alt=""
                        className="w-8 h-8 object-contain shrink-0"
                      />
                      <span className="text-savola-orange font-bold text-base md:text-lg text-start">
                        {t(`stakeholderEngagement.${key}.title`)}
                      </span>
                    </div>
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
                    <div className="grid grid-cols-1 md:grid-cols-3 bg-white">
                      <div className="p-5">
                        <h4 className="text-savola-green font-bold text-lg uppercase tracking-wider mb-3">
                          {t("stakeholderEngagement.commitmentLabel")}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {t(`stakeholderEngagement.${key}.commitment`)}
                        </p>
                      </div>

                      <div className="p-5">
                        <h4 className="text-savola-green font-bold text-lg uppercase tracking-wider mb-3">
                          {t("stakeholderEngagement.concernsLabel")}
                        </h4>
                        <ul className="space-y-2">
                          {concerns.map((item, i) => (
                            <li
                              key={i}
                              className="text-gray-600 text-sm flex items-start gap-2"
                            >
                              <span className="text-savola-green mt-0.5 shrink-0 font-bold">
                                •
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-5">
                        <h4 className="text-savola-green font-bold text-lg uppercase tracking-wider mb-3">
                          {t("stakeholderEngagement.channelsLabel")}
                        </h4>
                        <ul className="space-y-2">
                          {channels.map((item, i) => (
                            <li
                              key={i}
                              className="text-gray-600 text-sm flex items-start gap-2"
                            >
                              <span className="text-savola-green mt-0.5 shrink-0 font-bold">
                                •
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </SmallContainer>
      </section>
    </div>
  );
};

export default StakeholderEngagementPage;
