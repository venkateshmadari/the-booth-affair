import { TextFade } from "../Animations/TextFade";
import { PiNumberFourBold } from "react-icons/pi";
import { RiImageCircleFill } from "react-icons/ri";
import { AnimatedText } from "../Animations/AnimatedText";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] flex-col">
      <TextFade direction="down">
        <p className="flex items-center uppercase font-semibold font-Cormorant text-center text-primary">
          <PiNumberFourBold size={25} /> <RiImageCircleFill size={25} />
          <PiNumberFourBold size={25} />
        </p>
      </TextFade>
      <AnimatedText
        text="Page  Not  Found"
        className="md:text-5xl lg:text-6xl text-4xl pt-1 uppercase font-semibold font-Cormorant text-center text-primary"
      />
      <TextFade direction="down">
        <p className="font-Inter italic text-xl mt-2 text-center md:text-base  text-subheading">
          Sorry, we couldn't find this page.
        </p>
      </TextFade>
    </div>
  );
};

export default PageNotFound;
