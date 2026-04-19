import { useContext, useState, useRef, useEffect } from "react";
import MainLogo from "../../../../assets/logo/logo.svg";
import { pages } from "../../../../router/Router";
import type { Section } from "../../../../router/Router";
import SavolaAngle from "../vectors/SavolaAngle";
import { RouterContext } from "../../contexts/RouterProvider";
import { useTranslation } from "../../hooks/useTranslation";
import { useLocale } from "../../hooks/useLocale";
import { Download, Grip } from "lucide-react";
import { MenuContext } from "../../contexts/MenuProvider";

const NavDropdown = ({ section }: { section: Section }) => {
  const { navigate } = useContext(RouterContext);
  const { t } = useTranslation("common");
  const { lang } = useLocale();
  const [open, setOpen] = useState(false);
  const [dropdownAlign, setDropdownAlign] = useState<"start" | "end">("start");
  const ref = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      if (lang === "ar") {
        // In RTL, default opens toward the left; overflow happens at left edge
        setDropdownAlign(rect.left < 0 ? "start" : "end");
      } else {
        // In LTR, default opens toward the right; overflow happens at right edge
        setDropdownAlign(rect.right > window.innerWidth ? "end" : "start");
      }
    }
  }, [open, lang]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        className="font-medium text-gray-700 flex justify-center items-center gap-2"
        onClick={() => setOpen((prev) => !prev)}
      >
        {t(`nav.sections.${section.id}`)}
        <span
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <SavolaAngle />
        </span>
      </button>

      {open && (
        <div
          ref={dropdownRef}
          className={`absolute top-full mt-2 flex flex-col bg-savola-green shadow-lg rounded-md z-9999 w-56 ${dropdownAlign === "end" ? "inset-e-0" : "inset-s-0"} ${lang === "ar" ? "right-0" : "left-0"}`}
        >
          {section.pages.map((page) => {
            const appearKey = `nav.pages.${page.id}-appear`;
            const appearTranslation = t(appearKey);
            const hasAppear = appearTranslation !== appearKey;

            return (
              <button
                key={page.id}
                type="button"
                className="block text-start text-lg px-4 py-2 text-black hover:bg-white/50 first-of-type:pt-4 last-of-type:pb-4 w-full"
                onClick={() => {
                  navigate(page.path);
                  setOpen(false);
                }}
              >
                {hasAppear ? (
                  <span dangerouslySetInnerHTML={{ __html: appearTranslation }} />
                ) : (
                  t(`nav.pages.${page.id}`)
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const { t } = useTranslation("common");
  const { lang, setLang } = useLocale();
  const { toggleMenu } = useContext(MenuContext);
  const { goHome, homeKey } = useContext(RouterContext);

  return (
    <div key={homeKey} className="w-full absolute top-0 left-0 z-50 isolate animate-fade-down-100 active animate-delay-6_8s">
      <div className={`w-full max-w-7xl mx-auto py-4 ${lang === "ar" ? "px-4 lg:pr-16 xl:pr-4" : " px-4 lg:pl-16 xl:pl-4"} flex justify-between items-center gap-4`}>
        <button type="button" className="w-35" onClick={goHome}>
          <img src={MainLogo} alt="Savola Logo" className="w-full h-auto" />
        </button>
        <div className="flex-1 hidden xl:flex gap-6 items-center justify-center">
          {pages.map((section) => (
            <NavDropdown key={section.id} section={section} />
          ))}
        </div>
        <div className="flex gap-4 justify-center items-center text-savola-cool-grey">
          <button
            type="button"
            className="text-lg font-bold hover:text-savola-green transition-all duration-500"
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
          >
            {t("nav.language")}
          </button>
          <button type="button" className=" hover:text-savola-green transition-all duration-500">
            <Download />
          </button>
          <button type="button" className="block xl:hidden  hover:text-savola-green transition-all duration-500" onClick={() => toggleMenu(true)}>
            <Grip size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
