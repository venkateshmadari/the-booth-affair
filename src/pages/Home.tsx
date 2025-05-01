import CardStack from "./CardStack";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TextFade } from "../Animations/TextFade";
import { AnimatedText } from "../Animations/AnimatedText";
import HomeSession from "./HomeSession";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="h-screen flex items-center justify-center flex-col mt-11">
        <div className="flex md:gap-4 gap-2">
          <AnimatedText
            text="the"
            className="uppercase font-Cormorant 2xl:text-7xl xl:text-6xl md:text-5xl text-4xl font-bold gradient-text  -mt-8"
          />
          <AnimatedText
            text="booth"
            className="uppercase font-Cormorant 2xl:text-7xl xl:text-6xl md:text-5xl text-4xl font-bold gradient-text "
          />
          <AnimatedText
            text="affair"
            className="uppercase font-Cormorant 2xl:text-7xl xl:text-6xl md:text-5xl text-4xl font-bold gradient-text  mt-3"
          />
        </div>

        <CardStack />
        <AnimatedText
          text="flash. flirt. repeat"
          className="capitalize font-Cormorant italic text-2xl font-semibold text-primary"
        />
        <TextFade direction="up">
          <p className="text-center md:max-w-md font-Cormorant text-lg  font-semibold text-primary/80">
            A vision sparked by a love for European culture, vintage drama, and
            the timeless romance of old-world elegance.
          </p>
        </TextFade>
        <button className="text-center font-Cormorant capitalize text-2xl border-b mt-6 cursor-pointer font-medium">
          <TextFade direction="up" className="flex items-center gap-1.5">
            <Link to={"/book-now"}>book now</Link>
            <IoIosArrowRoundForward />
          </TextFade>
        </button>
      </section>
      <HomeSession />
    </>
  );
};

export default Home;
