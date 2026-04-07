import { X } from "lucide-react";
import { pages } from "../../../../router/Router";
import { useContext, useEffect, useState } from "react";
import { RouterContext } from "../../contexts/RouterProvider";
import { MenuContext } from "../../contexts/MenuProvider";
import savolaAngel from "../../../../assets/icons/savola-angel.svg";
import { useTranslation } from "../../hooks/useTranslation";
import { useLocale } from "../../hooks/useLocale";

const Menu = () => {
  const { lang } = useLocale();
  const { t } = useTranslation("common");
  const { currentRoute, navigate } = useContext(RouterContext);
  const { toggleMenu, isOpen } = useContext(MenuContext);
  const [openSection, setOpenSection] = useState<string>(pages[0].id);

  useEffect(() => {
    toggleMenu(false);
  }, [currentRoute]);

  const handleSectionClick = (sectionId: string) => {
    setOpenSection((prev) => (prev === sectionId ? "" : sectionId));
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-savola-green z-50 flex justify-center items-center transition-all duration-700 ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
    >
      <button
        type="button"
        className={`absolute ${lang === "ar" ? "left-4" : "right-4"} top-8 text-black text-2xl group`}
        onClick={() => toggleMenu(false)}
      >
        <X
          size={32}
          className="group-hover:scale-120 transition-all duration-500"
        />
      </button>
      <div className="w-full h-full overflow-auto hidden-scrollbar mx-auto px-4 flex flex-col items-center gap-2 pt-16 pb-8">
        <div className="flex flex-col w-full max-w-md gap-1">
          {pages.map((section) => {
            const isExpanded = openSection === section.id;
            return (
              <div key={section.id} className="w-full">
                <button
                  type="button"
                  onClick={() => handleSectionClick(section.id)}
                  className="w-full flex items-center justify-center gap-4 px-4 py-3 rounded-lg hover:bg-black/5 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-black">
                      {t(`nav.sections.${section.id}`)}
                    </span>
                  </div>
                  <img
                    src={savolaAngel}
                    alt="Savola"
                    className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="flex flex-col gap-1 px-4 pb-3 pt-1 items-center">
                    {section.pages.map((page) => (
                      <button
                        key={page.id}
                        type="button"
                        onClick={() => navigate(page.path)}
                        className="text-center text-base text-black hover:text-savola-cool-grey transition-colors duration-300 py-1"
                      >
                        {t(`nav.pages.${page.id}`)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
