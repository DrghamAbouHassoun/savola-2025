import { useEffect, useState } from "react";
import Container from "../../common/components/container/Container";
import SliderImage1 from "../../../assets/images/home/slider/1.jpg";
import SliderImage2 from "../../../assets/images/home/slider/2.jpg";
import SliderImage3 from "../../../assets/images/home/slider/3.jpg";
import Trapezium from "../../../assets/vectors/trapezium.png";

const slides = [SliderImage1, SliderImage2, SliderImage3];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[50%] h-auto max-h-[85vh]">
        <img
          src={Trapezium}
          alt="Trapezium"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col w-full h-full">
        <div className="flex-1 flex flex-col justify-end py-32 text-savola-cool-grey">
          <Container>
            <h1 className="text-5xl font-bold mb-4">
              A new era of
              <br /> focused growth
            </h1>
            <h2 className="text-3xl font-bold">
              Annual Report <span className="text-savola-green">2025</span>
            </h2>
          </Container>
        </div>
        <div className="flex-1 overflow-hidden flex">
          {slides.map((src, i) => (
            <div
              key={i}
              style={{
                width: current === i ? "100%" : "0%",
                transition: "width 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                overflow: "hidden",
                height: "100%",
                flexShrink: 0,
              }}
            >
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
