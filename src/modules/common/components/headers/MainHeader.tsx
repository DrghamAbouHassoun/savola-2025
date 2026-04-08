import SpikeIcon from "../../../../assets/vectors/spike-icon.svg";
import Container from "../container/Container";
import TrapeziumLight from "../../../../assets/vectors/trapezium-light.svg";
import SavolaTransparentAngle from "../../../../assets/vectors/savola-transparent-angle.svg";
import "../../../../Animations.css";

interface MainHeaderProps {
  imageUrl: string;
  title: string;
  sliderImages?: string[];
}

const SLIDE_DURATION = 6; // seconds per image

const MainHeader = ({ imageUrl, title, sliderImages }: MainHeaderProps) => {
  const images = sliderImages ?? [
    SavolaTransparentAngle,
    SavolaTransparentAngle,
    SavolaTransparentAngle,
  ];
  // Duplicate for seamless loop
  const track = [...images, ...images];
  const totalDuration = SLIDE_DURATION * images.length;

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
        <div className="flex-1 h-[50vh] flex justify-center items-center w-full">
          <Container>
            <div className="w-100 flex justify-center">
              <div className="w-45 overflow-hidden h-[50vh]">
                <div
                  className="animate-slide-up-loop"
                  style={{ animationDuration: `${totalDuration}s` }}
                >
                  {track.map((src, i) => (
                    <div key={i} className="h-[50vh] flex items-center justify-center">
                      <img
                        src={src}
                        alt={title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
