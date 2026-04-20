import NewHeader from "../modules/common/components/headers/NewHeader";
import GeoHeader from "../assets/images/new-headers/geo.jpg";
import { useTranslation } from "../modules/common/hooks/useTranslation";

const GeographicalFootprintPage = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <NewHeader
        imageUrl={GeoHeader}
        title={t("nav.pages.geographical-footprint")}
      />
    </div>
  );
};

export default GeographicalFootprintPage;
