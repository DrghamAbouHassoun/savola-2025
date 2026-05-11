import NewHeader from "../modules/common/components/headers/NewHeader";
import DownloadCenterContent from "../modules/download-center/components/DownloadCenterContent";
import HeaderBg from "../assets/images/headers/download-center.jpg";
import { useTranslation } from "../modules/common/hooks/useTranslation";

const DownloadCenterPage = () => {
  const { t } = useTranslation("common")
  return (
    <div>
      <NewHeader 
        imageUrl={HeaderBg}
        title={t("nav.pages.download-center")}
      />
      <DownloadCenterContent />
    </div>
  );
};

export default DownloadCenterPage;
