import { useContext, useEffect, useRef, useState } from "react";
import { RouterContext } from "../contexts/RouterProvider";
import { pages } from "../../../router/Router";
import SmallContainer from "./container/SmallContainer";
import { useTranslation } from "../hooks/useTranslation";

interface SectionStickyNavProps {
  sectionId: string;
}

const SectionStickyNav = ({ sectionId }: SectionStickyNavProps) => {
  const { currentRoute, navigate } = useContext(RouterContext);
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const section = pages.find((s) => s.id === sectionId);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!section) return null;

  const activePage = section.pages.find((p) => p.path === currentRoute) ?? section.pages[0];

  return (
    <div className="sticky top-0 z-10">
      <SmallContainer>
        {/* Mobile: custom dropdown */}
        <div className="md:hidden bg-savola-orange-20 rounded-lg p-2 relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="w-full px-6 py-4 font-semibold bg-savola-green text-white rounded-lg flex items-center justify-between gap-2"
          >
            <span>{t(`nav.pages.${activePage.id}`)}</span>
            <svg
              className={`w-4 h-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          {open && (
            <div className="absolute left-2 right-2 top-[calc(100%-0.25rem)] bg-savola-orange-20 rounded-b-lg pt-1 pb-2 px-2 flex flex-col gap-1 shadow-lg">
              {section.pages
                .filter((page) => page.path !== currentRoute)
                .map((page) => (
                  <button
                    key={page.id}
                    onClick={() => {
                      navigate(page.path);
                      setOpen(false);
                    }}
                    className="w-full px-6 py-4 font-semibold text-savola-green rounded-lg text-left hover:bg-savola-green hover:text-white transition-all duration-200"
                  >
                    {t(`nav.pages.${page.id}`)}
                  </button>
                ))}
            </div>
          )}
        </div>

        {/* Desktop: buttons */}
        <div className="hidden md:flex flex-row bg-savola-orange-20 rounded-lg p-2 overflow-hidden">
          {section.pages.map((page) => (
            <button
              key={page.id}
              onClick={() => navigate(page.path)}
              className={`px-6 py-4 font-semibold transition-all duration-200 flex-1 rounded-lg ${
                currentRoute === page.path
                  ? "bg-savola-green text-white"
                  : "text-savola-green"
              }`}
            >
              {t(`nav.pages.${page.id}`)}
            </button>
          ))}
        </div>
      </SmallContainer>
    </div>
  );
};

export default SectionStickyNav;
