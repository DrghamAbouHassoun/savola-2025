import MainHeader from "../modules/common/components/headers/MainHeader";
import ThemeOfTheYearHeader from "../assets/images/headers/theme-of-the-year.png";
import ThemeOfTheYearMobileHeader from "../assets/images/headers/theme-of-the-year-mobile.png";
import Container from "../modules/common/components/container/Container";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import AnimationSlideTop from "../modules/common/components/Animations/AnimationSlideTop";

const ThemeOfTheYearPage = () => {
  const { t } = useTranslation("overview");

  return (
    <div>
      <MainHeader
        imageUrl={ThemeOfTheYearHeader}
        mobileImageUrl={ThemeOfTheYearMobileHeader}
        title={t("themeOfTheYear.pageTitle")}
      />
      <div className="bg-linear-180 from-savola-green-20 to-savola-green-20/0 py-32">
        <Container className="max-w-250">
          <AnimationSlideTop>
            <h2 className="text-4xl text-savola-green font-bold mb-8">
              {t("themeOfTheYear.heading")}
            </h2>
          </AnimationSlideTop>
          <AnimationSlideTop>
            <p className="text-2xl text-savola-cool-grey font-bold mb-4">
              {t("themeOfTheYear.p1")}
            </p>
          </AnimationSlideTop>
          <AnimationSlideTop>
            <p className="mb-4 text-lg">{t("themeOfTheYear.p2")}</p>
          </AnimationSlideTop>
          <AnimationSlideTop>
            <p className="mb-4 text-lg">{t("themeOfTheYear.p3")}</p>
          </AnimationSlideTop>
          <AnimationSlideTop>
            <p className="mb-4 text-lg">{t("themeOfTheYear.p4")}</p>
          </AnimationSlideTop>
        </Container>
      </div>
    </div>
  );
};

export default ThemeOfTheYearPage;
