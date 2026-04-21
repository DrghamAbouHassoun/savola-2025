// import MainHeader from "../modules/common/components/headers/MainHeader";
import CfoHeader from "../assets/images/new-headers/cfo.jpg";
// import CfoMobileHeader from "../assets/images/headers/cfo-mobile.png";
import LeadershipHeader from "../modules/leadership/components/LeadershipHeader";
import CfoPersonImage from "../assets/images/leadership/cfo.png";
import CfoSignImage from "../assets/images/leadership/cfo-sign.png";
import SmallContainer from "../modules/common/components/container/SmallContainer";
import AnimationSlideTop from "../modules/common/components/Animations/AnimationSlideTop";
import AnimationFadeIn from "../modules/common/components/Animations/AnimationFadeIn";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import NewHeader from "../modules/common/components/headers/NewHeader";

const sectionKeys = [
  "strengthenedPosition",
  "food",
  "retail",
  "turkey",
  "riskManagement",
] as const;

const ChiefFinancialOfficerReviewPage = () => {
  const { t, tArray } = useTranslation("leadership");

  return (
    <div>
      {/* <MainHeader
        title={t("cfo.pageTitle")}
        imageUrl={CfoHeader}
        mobileImageUrl={CfoMobileHeader}
      /> */}
      <NewHeader 
        imageUrl={CfoHeader}
        title={t("cfo.pageTitle")}
      />
      <div className="py-16">
        <LeadershipHeader
          imageUrl={CfoPersonImage}
          signImageUrl={CfoSignImage}
          title={t("cfo.title")}
          name={t("cfo.name")}
          quote={t("cfo.quote")}
        />
      </div>

      {/* Main content */}
      <div className="py-12 text-sm">
        <SmallContainer>
          {/* Page title */}
          <AnimationSlideTop>
            <h2 className="text-3xl md:text-4xl font-extrabold text-savola-green mb-6" dangerouslySetInnerHTML={{ __html: t("cfo.mainTitle")}}>
              
            </h2>
          </AnimationSlideTop>

          {/* Intro paragraphs */}
          <AnimationFadeIn className="mb-12 space-y-4">
            <p className="text-savola-cool-grey leading-relaxed" dangerouslySetInnerHTML={{ __html: t("cfo.introParagraph") }} />
            <p className="text-savola-cool-grey leading-relaxed" dangerouslySetInnerHTML={{ __html: t("cfo.introFinancials") }} />
          </AnimationFadeIn>

          {/* Content sections */}
          <div className="space-y-10">
            {sectionKeys.map((key, i) => {
              const paragraphs = tArray(`cfo.sections.${key}.paragraphs`);
              const bullets = tArray(`cfo.sections.${key}.bullets`);
              const closingParagraph = t(`cfo.sections.${key}.closingParagraph`);
              const hasClosing = closingParagraph !== `cfo.sections.${key}.closingParagraph`;

              return (
                <AnimationSlideTop key={key} style={{ animationDelay: `${i * 0.1}s` }}>
                  <h3 className="text-savola-cool-grey mb-1 font-extrabold">
                    {t(`cfo.sections.${key}.title`)}
                  </h3>
                  <div className="space-y-4">
                    {paragraphs.map((para, j) => (
                      <p key={j} className="text-savola-cool-grey leading-relaxed" dangerouslySetInnerHTML={{ __html: para }} />
                    ))}
                    {bullets.length > 0 && (
                      <ul className="list-disc list-inside space-y-1 text-savola-cool-grey ps-2">
                        {bullets.map((bullet, j) => (
                          <li key={j} dangerouslySetInnerHTML={{ __html: bullet }} />
                        ))}
                      </ul>
                    )}
                    {hasClosing && (
                      <p className="text-savola-cool-grey leading-relaxed" dangerouslySetInnerHTML={{ __html: closingParagraph }} />
                    )}
                  </div>
                </AnimationSlideTop>
              );
            })}
          </div>

          {/* Looking Ahead highlighted box */}
          <AnimationFadeIn className="py-16">
            <h3 className=" font-extrabold text-savola-cool-grey mb-4 flex items-center gap-2">
              {t("cfo.outlookTitle")}
            </h3>
            <p className="text-savola-cool-grey leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t("cfo.outlookParagraph") }} />
            {tArray("cfo.outlookBullets").length > 0 && (
              <ul className="list-disc list-inside space-y-1 text-savola-cool-grey ps-2 mb-4">
                {tArray("cfo.outlookBullets").map((bullet, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: bullet }} />
                ))}
              </ul>
            )}
            <p className="text-savola-cool-grey leading-relaxed" dangerouslySetInnerHTML={{ __html: t("cfo.outlookClosing") }} />
          </AnimationFadeIn>

          {/* Closing quote
          <AnimationSlideTop className="mt-12 mb-16">
            <p className="text-savola-cool-grey text-xl md:text-2xl font-extrabold" dangerouslySetInnerHTML={{ __html: t("cfo.outlookClosing") }} />
          </AnimationSlideTop> */}
        </SmallContainer>
      </div>
    </div>
  );
};

export default ChiefFinancialOfficerReviewPage;
