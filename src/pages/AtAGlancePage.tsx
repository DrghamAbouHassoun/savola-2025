import MainHeader from "../modules/common/components/headers/MainHeader";
import AtAGlanceHeader from "../assets/images/headers/at-a-glance.png";
import FinancialKPIs from "../modules/at-a-glance/components/FinancialKPIs";
import Highlights from "../modules/at-a-glance/components/Highlights";
import AwardsHighlights from "../modules/at-a-glance/components/AwardsHighlights";
import KeyStats from "../modules/at-a-glance/components/KeyStats";
// import AwardsSlider from "../modules/at-a-glance/components/AwardsSlider";

const AtAGlancePage = () => {
  return (
    <div>
      <MainHeader
        imageUrl={AtAGlanceHeader}
        title="2025 at a Glance"
      />
      <FinancialKPIs />
      <Highlights />
      <AwardsHighlights />
      <KeyStats />
      {/* <AwardsSlider /> */}
    </div>
  );
};

export default AtAGlancePage;
