import MainHeader from "../modules/common/components/headers/MainHeader";
import ThemeOfTheYearHeader from "../assets/images/headers/theme-of-the-year.png";
import ThemeOfTheYearMobileHeader from "../assets/images/headers/theme-of-the-year-mobile.png";
import Container from "../modules/common/components/container/Container";

const ThemeOfTheYearPage = () => {
  return (
    <div>
      <MainHeader
        imageUrl={ThemeOfTheYearHeader}
        mobileImageUrl={ThemeOfTheYearMobileHeader}
        title="Theme of the Year"
      />
      <div className="bg-linear-180 from-savola-green-20 to-savola-green-20/0 py-32">
        <Container className="max-w-250">
          <h2 className="text-4xl text-savola-green font-bold mb-8">
            A new era of focused growth
          </h2>
          <p className="text-2xl text-savola-cool-grey font-bold mb-4">
            Savola entered 2025 following one of the most significant
            transformations in its recent history. The Group emerged leaner,
            more focused and strategically aligned around scaling food and
            retail operations through clearly defined value creation pathways.
            Deliberate portfolio reshaping, structural simplification and
            capital discipline culminated in a streamlined operating model
            anchored in food, supported by a strengthened operating backbone and
            renewed strategic clarity. What defined the year was not change for
            change’s sake, but the confidence that comes from knowing where to
            compete, how to win and where to allocate resources for a lasting
            impact.
          </p>
          <p className="mb-4 text-lg">
            With the exit of certain non-core, low-return investments and a
            sharper focus on strategic priorities, Savola has effectively moved
            from transformation to execution. The Group’s simplified structure
            now enables faster decision-making, clearer accountability, and
            stronger operational performance across its business sectors.
            Anchored by its two principal investments, Savola Foods and Panda
            Retail, the Group is driving organic growth through innovation,
            category expansion, and the strength of its leading brands, while
            maintaining a selective and disciplined approach to pursuing new
            growth opportunities that offer attractive returns, align with its
            strategic direction, and deliver the targeted benefits. This clarity
            of direction allows Savola to advance with confidence, striking a
            careful balance between growth ambition, financial prudence, and
            capital discipline.
          </p>
          <p className="mb-4 text-lg">
            At the same time, Savola’s role as a regionally distinctive
            integrated food platform became more pronounced. The Group operates
            across manufacturing, retail and food services in a way that few
            regional companies can match in scale and breadth. This integration
            enables Savola to capture value across the food chain, respond more
            effectively to consumer needs and contribute meaningfully to food
            security, economic development and national priorities.
          </p>
          <p className="mb-4 text-lg">
            2025 marked a fundamental shift for the Group, as Savola evolved
            from a traditional investment holding company into a strategic,
            food-led operating company, managing its business with clear
            direction and strong accountability. The Group’s emphasis on
            disciplined growth, operational excellence and organizational
            capability reflects a forward-looking institution that stays true to
            its heritage while strengthening its integrated operating model.
            With a strengthened foundation and sharper strategic identity,
            Savola enters its next phase positioned to scale with confidence and
            create long-term value for its shareholders.
          </p>
        </Container>
      </div>
    </div>
  );
};

export default ThemeOfTheYearPage;
