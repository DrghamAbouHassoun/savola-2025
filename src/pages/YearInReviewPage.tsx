import MainHeader from "../modules/common/components/headers/MainHeader";
import YearInReviewHeader from "../assets/images/headers/year-in-review.png";
import SmallContainer from "../modules/common/components/container/SmallContainer";
import YearInReviewSlider from "../modules/year-in-review/components/YearInReviewSlider";
import { useTranslation } from "../modules/common/hooks/useTranslation";

const YearInReviewPage = () => {
  const { t } = useTranslation("overview");

  return (
    <div>
      <MainHeader imageUrl={YearInReviewHeader} title={t("yearInReview.pageTitle")} />
      <div className="py-32 bg-linear-180 from-savola-orange-20 to-savola-green-20/0">
        <SmallContainer>
          <h3 className="text-4xl text-savola-green font-extrabold mb-8 max-w-150">
            {t("yearInReview.heading")}
          </h3>
          <p className="text-2xl font-bold">
            {t("yearInReview.introParagraph")}
          </p>
        </SmallContainer>
      </div>
      <YearInReviewSlider />
    </div>
  );
};

export default YearInReviewPage;
