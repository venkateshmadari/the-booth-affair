import { Link } from "react-router-dom";
import { AnimatedText } from "../Animations/AnimatedText";
import { TextFade } from "../Animations/TextFade";

const FrequentlyAskedQuestions = () => {
  return (
    <div className="min-h-screen p-8 mt-32 max-w-6xl mx-auto">
      <AnimatedText
        text="FAQs - The Booth Affair"
        className="md:text-5xl text-4xl capitalize font-semibold font-Cormorant text-center text-redshade"
      />

      {/* 1st  */}
      <div className="my-8">
        <AnimatedText
          text="1.  How long does each photo booth session take?"
          className="md:text-3xl text-xl font-semibold font-Inter text-primary"
        />
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            A typical session lasts around 2-3 minutes per guest.
          </p>
        </TextFade>
      </div>

      {/* 2nd  */}
      <div className="my-8">
        <AnimatedText
          text="2. Do I get printed photos?"
          className="md:text-3xl text-xl  font-semibold font-Inter text-primary"
        />
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            Yes, we provide both printed and digital copies of your photos.
          </p>
        </TextFade>
      </div>

      {/* 3rd  */}
      <div className="my-8">
        <AnimatedText
          text="3. How do I book a session?"
          className="md:text-3xl text-xl  font-semibold font-Inter text-primary"
        />
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            Click on the
            <Link
              to="/book-now"
              className="mx-1.5 cursor-pointer text-black font-semibold"
            >
              "Book Now"
            </Link>
            button on our website and follow the steps.
          </p>
        </TextFade>
      </div>

      {/* 4th  */}
      <div className="my-8">
        <AnimatedText
          text="4. Can I reschedule?"
          className="md:text-3xl text-xl  font-semibold font-Inter text-primary"
        />
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            No, once a booking is confirmed, it cannot be rescheduled. You have
            3 days to use your booth session.
          </p>
        </TextFade>
      </div>

      {/* 5th  */}
      <div className="my-8">
        <AnimatedText
          text="5. Are props included?"
          className="md:text-3xl text-xl capitalize font-semibold font-Inter text-primary"
        />
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            No, we maintain a minimal, vintage look without props.
          </p>
        </TextFade>
      </div>

      {/* 6th  */}
      <div className="my-8">
        <AnimatedText
          text="6. How will I receive my photos?"
          className="md:text-3xl text-xl capitalize font-semibold font-Inter text-primary"
        />
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            Your photos will be printed on-site and also sent to you via a
            digital link or email.
          </p>
        </TextFade>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
