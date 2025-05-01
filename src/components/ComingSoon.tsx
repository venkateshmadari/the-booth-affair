import { AnimatedText } from "../Animations/AnimatedText";
import { TextFade } from "../Animations/TextFade";

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] flex-col">
      <TextFade direction="down">
        <p className="font-Cormorant text-xl md:text-2xl pb-1 text-subheading">
          We're
        </p>
      </TextFade>
      <AnimatedText
        text="Coming  Soon"
        className="gradient-text"
      />
      <TextFade direction="down">
        <p className="font-Inter italic text-xs text-center md:text-base text-subheading">
          We’re busy building something bold, brilliant, and brand new.
          <br />
          Launching shortly.
        </p>
      </TextFade>
    </div>
  );
};

export default ComingSoon;
