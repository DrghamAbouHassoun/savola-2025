import { useCallback, useEffect, useRef, useState } from "react";
import Container from "../../common/components/container/Container";
import SliderImage1 from "../../../assets/images/home/slider/1-green.png";
import SliderImage2 from "../../../assets/images/home/slider/2-orange.png";
import SliderImage3 from "../../../assets/images/home/slider/3-gray.png";
// import SliderImage3Ar from "../../../assets/images/home/slider/3-arabic.png";
// import Trapezium from "../../../assets/vectors/trapezium.png";
// import TrapeziumGray from "../../../assets/vectors/trapezium-grey.svg";
// import TrapeziumOrange from "../../../assets/vectors/trapezium-orang.svg";
// import TGreen from "../../../assets/vectors/hero/green-t.svg"
// import TOrange from "../../../assets/vectors/hero/orange-t.svg"
// import TGray from "../../../assets/vectors/hero/gray-t.svg"
// import Logo from "../../../assets/logo/logo.svg";
import { useTranslation } from "../../common/hooks/useTranslation";
import { useLocale } from "../../common/hooks/useLocale";
import Logo from "../../common/components/vectors/Logo";
import SliderTest from "./SliderTest";

const slidesEn = [SliderImage1, SliderImage2, SliderImage3];
// const slidesAr = [SliderImage1, SliderImage2, SliderImage3Ar];
const N = slidesEn.length;
const GAP = 16;

const mod = (x: number, n: number) => ((x % n) + n) % n;
const clamp = (v: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, v));

// right(+1)=1.0→80vh, center(0)=0.75→60vh, left(-1)=0.5→40vh
const scaleForOffset = (off: number) => clamp(0.75 + 0.25 * off, 0.1, 1.0);

const Hero = () => {
  const { lang } = useLocale();
  const { t } = useTranslation("home");
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });
  // const slides = lang === "ar" ? slidesAr : slidesEn;

  // Spring physics state — all in refs to avoid re-render overhead
  const targetRef = useRef(0);
  const posRef = useRef(0);
  const velRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTRef = useRef<number | null>(null);
  const langRef = useRef(lang);
  useEffect(() => {
    langRef.current = lang;
  }, [lang]);

  // Force re-render on each RAF tick so the DOM reflects current posRef
  const [, setTick] = useState(0);

  // Measure container on mount and resize
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setContainerSize({
          w: containerRef.current.offsetWidth,
          h: window.innerHeight,
        });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Animation loop
  const tick = useCallback(() => {
    const now = performance.now();
    const dt = lastTRef.current
      ? Math.min((now - lastTRef.current) / 1000, 0.15)
      : 0.016;
    lastTRef.current = now;

    {
      const diff = targetRef.current - posRef.current;
      const acc = 34 * diff - 10 * velRef.current;
      velRef.current += acc * dt;
      posRef.current += velRef.current * dt;

      if (Math.abs(diff) < 0.0005 && Math.abs(velRef.current) < 0.001) {
        posRef.current = targetRef.current;
        velRef.current = 0;
      }
    }

    setTick((c) => c + 1);
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    lastTRef.current = null;
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [tick]);

  // Auto-advance every 5 seconds, reversing direction for RTL
  useEffect(() => {
    const id = setInterval(() => {
      targetRef.current += langRef.current === "ar" ? -1 : 1;
      velRef.current = 0;
    }, 5000);
    return () => clearInterval(id);
  }, []);

  // Derived layout values
  const { w: containerW, h: viewH } = containerSize;
  const BASE_H = viewH * 0.8;

  const isMobile = containerW > 0 && containerW < 768;
  const isTablet = containerW >= 768 && containerW < 1024;

  // slideW and offsetX per breakpoint:
  // mobile  → 1 image centered
  // tablet  → 2 images (off=0 left, off=+1 right), slideW=(containerW-GAP)/2, offsetX=-(containerW+GAP)/4
  // desktop → 3 images, slideW=(containerW/2-GAP)/1.5, offsetX=0
  const slideW = isMobile
    ? containerW - 2 * GAP
    : isTablet
      ? (containerW - GAP) / 2
      : containerW > 0
        ? (containerW / 2 - GAP) / 1.5
        : 0;

  const isRTL = lang === "ar";
  const heroAnimationKey = `hero-${lang}`;
  const dir = isRTL ? -1 : 1;
  // tablet: shift carousel so both visible slides fit flush; flip direction for RTL
  const offsetX = isTablet ? (-(containerW + GAP) / 4) * dir : 0;

  // Build visible slide items
  const curPos = posRef.current;
  const center = Math.round(curPos);
  const items: {
    key: number;
    ri: number;
    h: number;
    x: number;
    op: number;
    z: number;
  }[] = [];

  for (let i = center - 3; i <= center + 3; i++) {
    const ri = mod(i, N);
    const off = i - curPos;
    // flip scale for RTL so the left slide is the largest
    const sc = scaleForOffset(off * dir);
    const h = BASE_H * sc;
    // desktop: 30% overlap between slides; tablet/mobile: keep gap-based spacing
    const spacing = !isMobile && !isTablet ? slideW * 0.7 : slideW + GAP;
    const x = off * spacing + offsetX;
    // mobile: only center visible; tablet: hide the non-leading side; desktop: 3 items only
    const op = isMobile
      ? clamp(1.5 - Math.abs(off), 0, 1)
      : isTablet
        ? clamp(1 - Math.max(0, -off * dir - 0.5), 0, 1)
        : clamp(2 - Math.abs(off), 0, 1);
    // LTR: right item covers center (higher z), center covers left; RTL: reversed
    const z = 10 + Math.round(off * dir);
    items.push({ key: i, ri, h, x, op, z });
  }

  return (
    <>
      <div
        key={`${heroAnimationKey}-logo-splash`}
        className="fixed w-full h-screen overflow-hidden top-0 left-0 z-30 flex justify-center items-center bg-white animate-fade-out animate-delay-2s"
        // className="fixed w-full h-screen overflow-hidden top-0 left-0 z-30 flex justify-center items-center bg-white"
      >
        {/* <img
          src={Logo}
          alt="Savola Logo"
          className="w-70 h-auto object-top-left"
        /> */}
        <div className="animate-zoom-in max-w-90 h-auto animate-delay-1s">
          <Logo />
        </div>
      </div>
      <div className="w-full h-screen relative overflow-hidden">
        {/* <div
          key={`${heroAnimationKey}-trapezium`}
          className={`fixed flex items-end ${lang === "ar" ? "left-0 rotate-y-180 flex-row-reverse" : "right-0"} bottom-0 w-full h-auto max-h-[85vh] animate-open-down active animate-delay-5_6s -z-10`}
        >
          <div className={`hidden lg:block absolute ${lang === "ar" ? "left-0" : "right-0"} bottom-0 flex-1 h-[50vh] w-full -z-10`}>
            <img
              src={TGray}
              alt=""
              className={`w-screen h-full object-cover ${lang === "ar" ? "object-top-left" : "object-top-right"}`}
            />
          </div>
          <div className={`hidden absolute lg:flex ${lang === "ar" ? "left-0" : "right-0 justify-end"} bottom-0 flex-1 h-[70vh] w-full z-0 bg-transparent`}>
            <img
              src={TOrange}
              alt=""
              className={`w-[75vw] h-full object-cover ${lang === "ar" ? "object-top-left" : "object-top-right"}`}
            />
          </div>
          <div className={`flex-1 h-[65vh] sm:h-[83vh] bg-transparant z-10 flex ${lang === "ar" ? "justify-start" : "justify-end"}`}>
            <img
              src={TGreen}
              alt="Trapezium"
              className={`lg:w-[50vw] h-full object-cover ${lang === "ar" ? "object-top-left" : "object-top-right"}`}
            />
          </div>
        </div> */}
        <div className="flex flex-col w-full h-full ">
          <div
            className={`flex-[0.9] flex flex-col sm:justify-start py-32 pt-24 lg:pt-42 text-savola-cool-grey ${
              isRTL ? "animate-fade-right-100" : "animate-fade-left-100"
            } active animate-delay-5_6s relative z-20`}
          >
            <Container>
              <h1 className="text-3xl sm:text-5xl font-bold mb-4 whitespace-pre-line">
                {t("hero.heading")}
              </h1>
              <h2 className="text-xl sm:text-3xl font-bold">
                {t("hero.annualReport")}{" "}
                <span className="text-savola-green">2025</span>
              </h2>
            </Container>
          </div>

          {/* Carousel — no overflow-hidden so slides remain fully visible */}
          {/* <div
            ref={containerRef}
            className={`flex-[1.1] relative ${
              isRTL ? "animate-fade-left-100" : "animate-fade-right-100"
            } animation-duration-2s active animate-delay-4s`}
          >
            {containerW > 0 &&
              items.map(({ key, ri, h, x, op, z }) => (
                <div
                  key={key}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    width: slideW,
                    // width: "70vw",
                    height: h,
                    transform: `translateX(calc(-50% + ${x}px))`,
                    // transformOrigin: "bottom right",
                    zIndex: z,
                    opacity: op,
                    willChange: "transform, height",
                    pointerEvents: "none",
                  }}
                >
                  <img
                    src={slides[ri]}
                    alt={`Slide ${ri + 1}`}
                    draggable={false}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition:
                        isRTL && ri === 2 ? "top right" : "top left",
                      display: "block",
                      transform: isRTL && ri !== 2 ? "scaleX(-1)" : undefined,
                    }}
                  />
                </div>
              ))}
          </div> */}
          <SliderTest />
        </div>
      </div>
    </>
  );
};

export default Hero;
