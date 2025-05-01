import { AnimatedText } from "../Animations/AnimatedText";
import { TextFade } from "../Animations/TextFade";

const TermsAndCondition = () => {
  return (
    <div className="min-h-screen p-8 mt-32 max-w-6xl mx-auto">
      <AnimatedText
        text="terms and conditions"
        className="md:text-5xl text-4xl capitalize font-semibold font-Cormorant text-center text-primary"
      />
      <TextFade direction="down">
        <p className="font-Inter my-6 md:text-lg text-subheading">
          By using our website and services, you agree to the following terms:
        </p>
      </TextFade>

      {/* 1st TermsAndCondition */}
      <div className="my-8">
        <AnimatedText
          text="1.  Booking & Payment:"
          className="md:text-3xl text-xl capitalize font-semibold font-Inter text-primary"
        />
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            • All bookings are subject to availability.
          </p>
        </TextFade>
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            • Full payment is required to confirm a slot.
          </p>
        </TextFade>
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            • Once booked, your session is valid for 3 days from the date of
            booking.
          </p>
        </TextFade>
      </div>

      {/* 2nd TermsAndCondition */}
      <div className="my-8">
        <AnimatedText
          text="2. Cancellations & Refunds:"
          className="md:text-3xl text-xl capitalize font-semibold font-Inter text-primary"
        />
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            • No cancellations, rescheduling, or refunds are allowed.
          </p>
        </TextFade>
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            • Please ensure you use your session within 3 days using your issued
            QR code.
          </p>
        </TextFade>
      </div>

      {/* 3rd TermsAndCondition */}
      <div className="my-8">
        <AnimatedText
          text="3. Service Description:"
          className="md:text-3xl text-xl capitalize font-semibold font-Inter text-primary"
        />
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            • We offer a premium photo booth experience with both digital and
            printed photos.
          </p>
        </TextFade>
      </div>

      {/* 4th TermsAndCondition */}
      <div className="my-8">
        <AnimatedText
          text="4. Liability"
          className="md:text-3xl text-xl capitalize font-semibold font-Inter text-primary"
        />
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            • We are not liable for any damage, loss, or delay beyond our
            control.
          </p>
        </TextFade>
      </div>

      {/* 5th  */}
      <div className="my-8">
        <AnimatedText
          text="5. Intellectual Property:"
          className="md:text-3xl text-xl capitalize font-semibold font-Inter text-primary"
        />
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            • All content, including photos and branding, is owned by The Booth
            Affair.
          </p>
        </TextFade>
      </div>
      {/* 6th  */}
      <div className="my-8">
        <AnimatedText
          text="6. Changes to Terms:"
          className="md:text-3xl text-xl capitalize font-semibold font-Inter text-primary"
        />
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            • We reserve the right to modify these terms at any time.
          </p>
        </TextFade>
      </div>
    </div>
  );
};

export default TermsAndCondition;
