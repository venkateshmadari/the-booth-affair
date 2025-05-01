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
      <div className="flex flex-col items-center justify-center -mt-14 mb-12 px-3 ">
        <div className="flex  border-[1.6px] w-full max-w-2xl ">
          <p className="w-full placeholder:text-primary font-Cormorant font-semibold md:text-xl  border border-r-[1.6px] border-y-0 border-l-0 bg-transparent placeholder-gold text-gold py-2 px-4">
            Email address
          </p>
          <p className="w-full placeholder:text-primary font-Cormorant font-semibold md:text-xl  bg-transparent placeholder-gold text-gold py-2 px-4">
            What brings you here?
          </p>
        </div>
      </div>
      <HomeSession />
    </>
  );
};

export default Home;
