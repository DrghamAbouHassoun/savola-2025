import { useContext } from "react";
import NewHeader from "../modules/common/components/headers/NewHeader";
import TAIBg from "../assets/images/new-headers/technology-and-innovation.jpg";
import SmallContainer from "../modules/common/components/container/SmallContainer";
import { LangContext } from "../modules/common/contexts/LangProvider";

type TechnologyData = {
  pageTitle: string;
  title: string;
  desc1: string;
  desc2: string;
  foucs: { title: string; p1: string; p2: string };
  impact: { title: string; p1: string; p2: string; p3: string };
  drivingValue: { title: string; p1: string };
};

const TechnologyAndInnovationPage = () => {
  const { lang, translations } = useContext(LangContext);
  const data = (
    translations as unknown as Record<
      string,
      Record<string, { technology: TechnologyData }>
    >
  )[lang]["strategic-review"].technology;

  return (
    <div>
      <NewHeader imageUrl={TAIBg} title={data.pageTitle} />

      {/* Intro */}
      <section className="py-16 bg-linear-to-b from-savola-orange-20 to-savola-orange-20/30">
        <SmallContainer>
          <h2 className="text-savola-green font-extrabold text-2xl md:text-3xl mb-6 leading-snug">
            {data.title}
          </h2>
          <p className="text-xl font-bold leading-relaxed text-savola-cool-grey mb-6">
            {data.desc1}
          </p>
          <p className="text-xl font-bold leading-relaxed text-savola-cool-grey">
            {data.desc2}
          </p>
        </SmallContainer>
      </section>

      {/* Content Sections */}
      <section className="pb-20 bg-savola-orange-20/30">
        <SmallContainer>
          <div className="flex flex-col gap-10 pt-10">

            {/* Technology and Innovation Focus */}
            <div>
              <h3 className="text-savola-cool-grey font-bold text-base md:text-lg mb-4">
                {data.foucs.title}
              </h3>
              <p className="text-savola-cool-grey text-sm leading-relaxed mb-4">
                {data.foucs.p1}
              </p>
              <p className="text-savola-cool-grey text-sm leading-relaxed">
                {data.foucs.p2}
              </p>
            </div>

            {/* Innovation and Measurable Impact */}
            <div>
              <h3 className="text-savola-cool-grey font-bold text-base md:text-lg mb-4">
                {data.impact.title}
              </h3>
              <p className="text-savola-cool-grey text-sm leading-relaxed mb-4">
                {data.impact.p1}
              </p>
              <p className="text-savola-cool-grey text-sm leading-relaxed mb-4">
                {data.impact.p2}
              </p>
              <p className="text-savola-cool-grey text-sm leading-relaxed">
                {data.impact.p3}
              </p>
            </div>

            {/* Technology Partnerships Driving Value */}
            <div>
              <h3 className="text-savola-cool-grey font-bold text-base md:text-lg mb-4">
                {data.drivingValue.title}
              </h3>
              <p className="text-savola-cool-grey text-sm leading-relaxed">
                {data.drivingValue.p1}
              </p>
            </div>

          </div>
        </SmallContainer>
      </section>
    </div>
  );
};

export default TechnologyAndInnovationPage;
