import NewHeader from "../modules/common/components/headers/NewHeader";
import StakeholderHeader from "../assets/images/new-headers/stackholder.jpg";
import { useTranslation } from "../modules/common/hooks/useTranslation";

const StakeholderEngagementPage = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <NewHeader
        imageUrl={StakeholderHeader}
        title={t("nav.pages.stakeholder-engagement")}
      />
    </div>
  );
};

export default StakeholderEngagementPage;
