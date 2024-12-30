import Image from "next/image";

// image
import bulb from "/public/bulb.png"

const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
      <Image 
        src={bulb}
        width={260}
        height={200}
        alt="Lightbulb"
        className="w-full h-full"
      />
    </div>
  );
};

export default Bulb;
