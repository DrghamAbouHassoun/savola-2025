import MainHeader from "../modules/common/components/headers/MainHeader";
import CeoHeader from "../assets/images/headers/ceo.png";
import CeoMobileHeader from "../assets/images/headers/ceo-mobile.png";
import LeadershipHeader from "../modules/leadership/components/LeadershipHeader";
import CeoPersonImage from "../assets/images/leadership/ceo.png";
import CeoSignImage from "../assets/images/leadership/ceo-sign.png";
import SmallContainer from "../modules/common/components/container/SmallContainer";
import { useTranslation } from "../modules/common/hooks/useTranslation";

const sectionKeys = [
  "definingStory",
  "financialPerformance",
  "operationalPerformance",
  "technology",
  "people",
  "esg",
] as const;

const GroupCEOMessagePage = () => {
  const { t, tArray } = useTranslation("leadership");

  const sections = sectionKeys.map((key) => ({
    title: t(`ceo.sections.${key}.title`),
    paragraphs: tArray(`ceo.sections.${key}.paragraphs`),
  }));

  return (
    <div>
      <MainHeader
        title={t("ceo.pageTitle")}
        imageUrl={CeoHeader}
        mobileImageUrl={CeoMobileHeader}
      />
      <div className="py-16">
        <LeadershipHeader
          imageUrl={CeoPersonImage}
          signImageUrl={CeoSignImage}
          title={t("ceo.title")}
          name={t("ceo.name")}
          quote={t("ceo.quote")}
        />
      </div>

      {/* Main content */}
      <div className="py-12 text-sm">
        <SmallContainer>
          {/* Page title */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-savola-green mb-6">
            {t("ceo.mainTitle")}
          </h2>

          {/* Intro paragraph */}
          <div className="mb-12">
            <p className="text-savola-cool-grey leading-relaxed">
              {t("ceo.introParagraph")}
            </p>
          </div>

          {/* Content sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-savola-cool-grey mb-1 font-extrabold">
                  {section.title}
                </h3>
                <div className="space-y-4">
                  {section.paragraphs.map((para, i) => (
                    <p key={i} className="text-savola-cool-grey leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Outlook highlighted box */}
          <div className="mt-6">
            <h3 className=" font-extrabold text-savola-cool-grey mb-4 flex items-center gap-2">
              {t("ceo.outlookTitle")}
            </h3>
            <div className="space-y-4">
              {tArray("ceo.outlookParagraphs").map((para, i) => (
                <p key={i} className="text-savola-cool-grey leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Closing section */}
          <div className="mt-12">
            <h4 className="text-savola-cool-grey font-extrabold">
              {t("ceo.closingTitle")}
            </h4>
            <p className="text-savola-cool-grey leading-relaxed mb-4">
              {t("ceo.closingP1")}
            </p>
            <p className="text-savola-cool-grey leading-relaxed mb-8">
              {t("ceo.closingP2")}
            </p>

            {/* Closing quote */}
            <div className="mb-16">
              <p className="text-savola-cool-grey text-xl md:text-2xl font-extrabold">
                {t("ceo.closingQuote")}
              </p>
            </div>
          </div>
        </SmallContainer>
      </div>
    </div>
  );
};

export default GroupCEOMessagePage;
