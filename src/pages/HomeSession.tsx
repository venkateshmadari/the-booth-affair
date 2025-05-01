import { IoIosArrowRoundForward } from "react-icons/io";
import { TextFade } from "../Animations/TextFade";
import { Link } from "react-router-dom";

const HomeSession = () => {
  return (
    <main className="flex-grow grid grid-cols-1 md:grid-cols-2">
      <div className="relative h-[250px] md:h-auto overflow-hidden  flex flex-col items-center justify-center text-center p-10">
        <img
          src="https://i.pinimg.com/736x/30/93/8e/30938e4243a52fd6f14121efee652198.jpg"
          alt="Marble Bust"
          className="absolute inset-0 z-0 opacity-90 object-cover w-full h-full grayscale-50"
        />
        <div className="relative -top-[8%] z-10 max-w-md mx-auto">
          <div className="">
            <TextFade direction="up">
              <p className="text-3xl md:text-4xl font-medium leading-relaxed text-primary font-Cormorant">
                Flash. Flirt. Repeat.
              </p>
            </TextFade>
            <TextFade direction="up">
              <p className="text-base md:text-xl font-medium leading-relaxed text-primary font-Cormorant">
                That’s not just our tagline — it’s our philosophy.
              </p>
            </TextFade>
          </div>
          <TextFade direction="up">
            <Link
              to={"/about-us"}
              className="text-base flex items-center justify-center md:text-xl mt-20 cursor-pointer underline   font-medium leading-relaxed md:text-primary text-secondary font-Cormorant"
            >
              Learn More <IoIosArrowRoundForward />
            </Link>
          </TextFade>
        </div>
      </div>

      <div className="relative h-[250px] md:h-auto overflow-hidden bg-white flex flex-col items-center justify-center text-center p-10">
        <img
          src="https://i.pinimg.com/736x/82/cc/94/82cc941ffbae8a13a7bb4d9bd7eaaa2c.jpg"
          alt="Dioscuri Illustration"
          className="absolute inset-0 z-0 opacity-90 object-cover w-full h-full grayscale-50"
        />
        <div className="relative z-10 max-w-md mx-auto">
          <TextFade direction="up">
            <p className="text-3xl md:text-4xl mb-20 capitalize md:mb-32 font-medium leading-relaxed text-primary font-Cormorant">
              Born from Nostalgia. <br />
              Built for Today.
            </p>
          </TextFade>
          <TextFade direction="up">
            <Link
              to={"/book-now"}
              className="text-base flex items-center justify-center md:text-xl mt-20 cursor-pointer underline font-medium leading-relaxed md:text-secondary text-primary font-Cormorant"
            >
              Learn More <IoIosArrowRoundForward />
            </Link>
          </TextFade>
        </div>
      </div>
    </main>
  );
};

export default HomeSession;
