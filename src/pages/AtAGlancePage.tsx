import NewHeader from "../modules/common/components/headers/NewHeader";
import AtAGlanceHeader from "../assets/images/new-headers/at-a-glance.jpg";
import FinancialKPIs from "../modules/at-a-glance/components/FinancialKPIs";
import Highlights from "../modules/at-a-glance/components/Highlights";
// import AwardsHighlights from "../modules/at-a-glance/components/AwardsHighlights";
import KeyStats from "../modules/at-a-glance/components/KeyStats";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import AwardsSlider from "../modules/at-a-glance/components/AwardsSlider";

const AtAGlancePage = () => {
  const { t } = useTranslation("at-a-glance");

  return (
    <div>
      <NewHeader
        imageUrl={AtAGlanceHeader}
        title={t("pageTitle")}
      />
      <FinancialKPIs />
      <Highlights />
      {/* <AwardsHighlights /> */}

      {/* ── Tablet / small laptop: stacked ── */}
      <div className="lg:hidden">
        <KeyStats />
        <AwardsSlider />
      </div>

      {/* ── Desktop: KeyStats sticky column beside AwardsSlider ── */}
      <div className="hidden lg:flex">
        <div className="w-72 xl:w-80 shrink-0 bg-white">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <KeyStats column />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <AwardsSlider />
        </div>
      </div>
    </div>
  );
};

export default AtAGlancePage;
