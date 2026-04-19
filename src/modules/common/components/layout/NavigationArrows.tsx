import SavolaAngleGreen from "../../../../assets/vectors/savola-angel-green.svg";
import { useLocale } from "../../hooks/useLocale";
import { useContext, useEffect, useState } from "react";
import { RouterContext } from "../../contexts/RouterProvider";
import { pages } from "../../../../router/Router";

const flatPages = pages.flatMap((section) => section.pages);

const NavigationArrows = () => {
  const { lang } = useLocale();
  const { currentRoute, navigate } = useContext(RouterContext);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (currentRoute !== "" ) {
      setIsVisible(window.scrollY > 100);
    }
  };

  const handleNavigateTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateNextPage = () => {
    const currentIndex = flatPages.findIndex((p) => p.path === currentRoute);
    if (currentIndex !== -1) {
      const nextPage = flatPages[currentIndex + 1];
      if (nextPage) {
        window.scrollTo({ top: 0 });
        navigate(nextPage.path);
      }
    }
  };

  const handleNavigatePreviousPage = () => {
    const currentIndex = flatPages.findIndex((p) => p.path === currentRoute);
    if (currentIndex !== -1) {
      const previousPage = flatPages[currentIndex - 1];
      if (previousPage) {
        window.scrollTo({ top: 0 });
        navigate(previousPage.path);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentRoute]);

  return (
    <div
      className={`fixed z-40 bottom-8 ${lang === "ar" ? "left-8" : "right-8"} flex flex-col justify-center ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"} transition-all duration-500`}
    >
      <div className="w-full flex justify-center items-center">
        <button
          type="button"
          className="w-12 h-12 rounded-full border border-savola-orange bg-white hover:scale-110 transition-all duration-500 flex justify-center items-center"
          onClick={handleNavigateTop}
        >
          <img src={SavolaAngleGreen} className="" />
        </button>
      </div>
      <div className="w-full flex justify-center items-center gap-4">
        <button
          type="button"
          className="w-12 h-12 rounded-full border border-savola-orange bg-white hover:scale-110 transition-all duration-500 flex justify-center items-center"
          onClick={handleNavigatePreviousPage}
        >
          <img
            src={SavolaAngleGreen}
            className={lang === "ar" ? "rotate-90" : "rotate-270"}
          />
        </button>
        <button
          type="button"
          className="w-12 h-12 rounded-full border border-savola-orange bg-white hover:scale-110 transition-all duration-500 flex justify-center items-center"
          onClick={handleNavigateNextPage}
        >
          <img
            src={SavolaAngleGreen}
            className={lang === "ar" ? "rotate-270" : "rotate-90"}
          />
        </button>
      </div>
    </div>
  );
};

export default NavigationArrows;
