import MainHeader from "../modules/common/components/headers/MainHeader";
import YearInReviewHeader from "../assets/images/headers/year-in-review.png";
import SmallContainer from "../modules/common/components/container/SmallContainer";
import YearInReviewSlider from "../modules/year-in-review/components/YearInReviewSlider";

const YearInReviewPage = () => {
  return (
    <div>
      <MainHeader imageUrl={YearInReviewHeader} title="Year in Review" />
      <div className="py-32 bg-linear-180 from-savola-orange-20 to-savola-green-20/0">
        <SmallContainer>
          <h3 className="text-4xl text-savola-green font-extrabold mb-8 max-w-150">A Year of Sharper Focus and Purposeful Execution</h3>
          <p className="text-2xl font-bold">
            2025 marked a defining chapter for Savola as the Group aligned
            leadership, strategy and operations around a clearer growth agenda.
            Throughout the year, progress was reflected in stronger market
            presence, responsible impact initiatives, leadership milestones and
            external recognition, reinforcing Savola’s direction as a focused,
            disciplined and forward-looking group.
          </p>
        </SmallContainer>
      </div>
      <YearInReviewSlider />
    </div>
  );
};

export default YearInReviewPage;
