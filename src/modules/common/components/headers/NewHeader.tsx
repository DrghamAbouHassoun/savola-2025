import MaskImage from "../../../../assets/images/common/savola-mask-angel-colorful.png";

interface NewHeaderProps {
  imageUrl: string;
  title: string;
}

const NewHeader = ({ imageUrl, title }: NewHeaderProps) => {
  return (
    <div className="w-full h-screen relative flex items-center justify-center">
      {/* Image — absolute so it doesn't affect title alignment */}
      <div
        className="absolute right-0 top-[50%] -translate-y-1/2 bottom-0 w-auto h-[70vh] flex items-center overflow-hidden"
        style={{
          WebkitMaskImage: `url(${MaskImage})`,
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskImage: `url(${MaskImage})`,
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
        }}
      >
        <img
          src={imageUrl}
          className="animate-pan-lr"
          style={{
            width: "120%",
            height: "100%",
            maxHeight: "70vh",
            objectFit: "contain",
            flexShrink: 0,
          }}
        />
      </div>
      {/* Title — same max-w and padding as navbar */}
      <div className="relative w-full max-w-7xl mx-auto px-4 lg:pl-16 xl:pl-4">
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default NewHeader;
