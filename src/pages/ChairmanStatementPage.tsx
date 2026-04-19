import MainHeader from "../modules/common/components/headers/MainHeader";
import ChairmanHeader from "../assets/images/headers/chairman.png";
import ChairmanMobileHeader from "../assets/images/headers/chairman-mobile.png";
import LeadershipHeader from "../modules/leadership/components/LeadershipHeader";
import ChairmanPersonImage from "../assets/images/leadership/chairman.png";
import ChairmanSignImage from "../assets/images/leadership/chairman-sign.png";
import SmallContainer from "../modules/common/components/container/SmallContainer";
import StarIcon from "../assets/icons/star.png";
import { useTranslation } from "../modules/common/hooks/useTranslation";

const sectionKeys = [
  "strategicEvolution",
  "vision2030",
  "geographic",
  "financial",
  "market",
  "governance",
] as const;

const ChairmanStatementPage = () => {
  const { t, tArray } = useTranslation("leadership");

  const sections = sectionKeys.map((key) => ({
    title: t(`chairman.sections.${key}.title`),
    paragraphs: tArray(`chairman.sections.${key}.paragraphs`),
  }));

  return (
    <div>
      <MainHeader
        title={t("chairman.pageTitle")}
        imageUrl={ChairmanHeader}
        mobileImageUrl={ChairmanMobileHeader}
      />
      <div className="py-16">
        <LeadershipHeader
          imageUrl={ChairmanPersonImage}
          signImageUrl={ChairmanSignImage}
          title={t("chairman.title")}
          name={t("chairman.name")}
          quote={t("chairman.quote")}
        />
      </div>

      {/* Main content */}
      <div className="py-12 text-sm">
        <SmallContainer>
          {/* Page title */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-savola-green mb-6">
            {t("chairman.mainTitle")}
          </h2>

          {/* Intro section */}
          <div className="mb-12">
            <h3 className="text-2xl text-savola-cool-grey mb-6 font-extrabold">
              {t("chairman.introTitle")}
            </h3>
            <p className="text-savola-cool-grey leading-relaxed">
              {t("chairman.introParagraph")}
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

          {/* Outlook 2026 highlighted box */}
          <div className="mt-12 bg-savola-green-20 p-8">
            <h3 className="text-2xl font-bold text-savola-cool-grey mb-4 flex items-center gap-2">
              <img src={StarIcon} alt="Star" className="inline-block w-8 h-8" />
              {t("chairman.outlookTitle")}
            </h3>
            <p className="text-savola-cool-grey leading-relaxed">
              {t("chairman.outlookParagraph")}
            </p>
          </div>

          {/* Closing section */}
          <div className="mt-12">
            <h4 className="text-savola-cool-grey font-extrabold">
              {t("chairman.closingTitle")}
            </h4>
            <p className="text-savola-cool-grey leading-relaxed mb-4">
              {t("chairman.closingP1")}
            </p>
            <p className="text-savola-cool-grey leading-relaxed mb-8">
              {t("chairman.closingP2")}
            </p>

            {/* Closing quote */}
            <div className="mb-16">
              <p className="text-savola-cool-grey text-xl md:text-2xl font-extrabold">
                {t("chairman.closingQuote")}
              </p>
            </div>
          </div>
        </SmallContainer>
      </div>
    </div>
  );
};

export default ChairmanStatementPage;
