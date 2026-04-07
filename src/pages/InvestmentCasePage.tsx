import InvestmentHeader from "../assets/images/headers/investment.png";
import SmallContainer from "../modules/common/components/container/SmallContainer";
import MainHeader from "../modules/common/components/headers/MainHeader";

const InvestmentCasePage = () => {
  return (
    <div>
      <MainHeader imageUrl={InvestmentHeader} title="Investment Case" />
      <div className="py-32 bg-linear-180 from-savola-green-20 to-savola-green-20/0">
        <SmallContainer>
          <h3 className="text-4xl text-savola-green font-extrabold mb-8 max-w-150">
            A Unique Investment Proposition
          </h3>
          <p className="text-2xl font-bold">
            Savola manages an investment portfolio of leading food and retail
            brands, supported by strong manufacturing and retail platforms. By
            aligning its investments with attractive demographics and long-term
            growth trends across the MENA region, the Group continues to create
            value for shareholders and reinforce its strategic position in its
            core markets.
          </p>
          <div className="flex  items-center justify-around gap-16 my-16 leading-none">
            <div className="rounded-full w-60 h-50 text-center bg-savola-green flex justify-center items-center flex-col gap-2">
              <span className="text-lg font-extrabold text-white">
                Dominance in <br />
                Food and Retail
              </span>
              <span className="text-lg font-extrabold text-white">1</span>
            </div>
            <div className="rounded-full w-60 h-50 text-center bg-savola-cool-grey flex justify-center items-center flex-col gap-2">
              <span className="text-lg font-extrabold text-white">
                Strategic <br />
                Presence and
                <br /> Regional <br />
                Adaptability
              </span>
              <span className="text-lg font-extrabold text-white">2</span>
            </div>
            <div className="rounded-full w-60 h-50 text-center bg-white flex justify-center items-center flex-col gap-2">
              <span className="text-lg font-extrabold text-savola-cool-grey">
                Dynamic
                <br />
                Capital
                <br />
                Allocation and
                <br />
                Leadership
                <br />
                Excellence
              </span>
              <span className="text-lg font-extrabold text-savola-cool-grey">
                3
              </span>
            </div>
            <div className="rounded-full w-60 h-50 text-center bg-savola-orange flex justify-center items-center flex-col gap-2">
              <span className="text-lg font-extrabold text-white">
                Commitment to<br /> 
                ESG Principles
              </span>
              <span className="text-lg font-extrabold text-white">4</span>
            </div>
          </div>
        </SmallContainer>
      </div>
    </div>
  );
};

export default InvestmentCasePage;
