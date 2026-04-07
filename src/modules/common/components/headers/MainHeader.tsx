import SpikeBg from "../../../../assets/vectors/spike-bg.svg";
import SpikeIcon from "../../../../assets/vectors/spike-icon.svg";
import Container from "../container/Container";
import TrapeziumLight from "../../../../assets/vectors/trapezium-light.svg";

interface MainHeaderProps {
  imageUrl: string;
  title: string;
}

const MainHeader = ({ imageUrl, title }: MainHeaderProps) => {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute bottom-0 right-0 w-[50vw] h-[80vh]">
        <img
          src={TrapeziumLight}
          alt="Trapezium Light"
          className="w-full h-full object-cover object-top absolute right-0 bottom-0"
        />
        <img
          src={imageUrl}
          alt={title}
          className="w-[90%] h-[90%] object-cover object-top absolute right-0 bottom-0"
        />
      </div>
      <div className="w-full h-screen flex flex-col">
        <div className="flex-1 h-[50vh]">
          <Container>
            <img
              src={SpikeBg}
              alt={title}
              className="w-100 h-full object-cover object-top"
            />
          </Container>
        </div>
        <div className="flex-1 flex justify-center h-full bg-savola-cool-grey">
          <Container>
            <div className="h-full flex items-center">
              <h1 className="text-5xl font-bold text-center flex gap-4 items-center text-savola-green">
                <img src={SpikeIcon} alt="Spike Icon" className="w-12 h-12" />
                <span>{title}</span>
              </h1>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
