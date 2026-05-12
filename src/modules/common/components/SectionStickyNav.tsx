import { useContext } from "react";
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

  const section = pages.find((s) => s.id === sectionId);
  if (!section) return null;

  return (
    <div className="sticky top-0 z-10">
      <SmallContainer>
        <div className="flex flex-col md:flex-row bg-savola-orange-20 rounded-lg p-2 overflow-hidden">
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
