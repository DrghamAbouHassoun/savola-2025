import MainHeader from "../modules/common/components/headers/MainHeader";
import AtAGlanceHeader from "../assets/images/headers/at-a-glance.png";
import FinancialKPIs from "../modules/at-a-glance/components/FinancialKPIs";
import Highlights from "../modules/at-a-glance/components/Highlights";
import AwardsHighlights from "../modules/at-a-glance/components/AwardsHighlights";
import KeyStats from "../modules/at-a-glance/components/KeyStats";
import { useTranslation } from "../modules/common/hooks/useTranslation";
// import AwardsSlider from "../modules/at-a-glance/components/AwardsSlider";

const AtAGlancePage = () => {
  const { t } = useTranslation("at-a-glance");

  return (
    <div>
      <MainHeader
        imageUrl={AtAGlanceHeader}
        title={t("pageTitle")}
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
