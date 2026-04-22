import NewHeader from "../modules/common/components/headers/NewHeader";
import GeoHeader from "../assets/images/new-headers/geo.jpg";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import SmallContainer from "../modules/common/components/container/SmallContainer";
import GeoMapEn from "../assets/vectors/geo/map-en.svg";
import GeoMapAr from "../assets/vectors/geo/map-ar.svg";
import { useLocale } from "../modules/common/hooks/useLocale";
import AnimationSlideTop from "../modules/common/components/Animations/AnimationSlideTop";
import AnimationPopUp from "../modules/common/components/Animations/AnimationPopUp";

const GeographicalFootprintPage = () => {
  const { t } = useTranslation("overview");
  const { lang } = useLocale();

  return (
    <div>
      <NewHeader
        imageUrl={GeoHeader}
        title={t("geographicalFootprint.pageTitle")}
      />
      <div className="w-full bg-linear-to-b from-savola-green-50 to-savola-green-50/0">
        <SmallContainer className="py-30">
          <AnimationSlideTop>
            <h2 className="text-savola-green text-3xl font-bold mb-4">
              {t("geographicalFootprint.mainTitle")}
            </h2>
          </AnimationSlideTop>
          <AnimationSlideTop>
            <p className="text-savola-green-700 text-lg font-bold">
              {t("geographicalFootprint.desc")}
            </p>
          </AnimationSlideTop>
        </SmallContainer>
      </div>
      <div className="w-full min-h-[80vh] lg:min-h-screen bg-savola-orange-20 py-30">
        <SmallContainer>
          <AnimationPopUp>
            <img
              src={lang === "en" ? GeoMapEn : GeoMapAr}
              alt="Geographical Footprint Map"
              className="w-full h-auto object-contain"
            />
          </AnimationPopUp>
        </SmallContainer>
      </div>
    </div>
  );
};

export default GeographicalFootprintPage;
