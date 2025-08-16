import { Link } from "react-router-dom";
import { AnimatedText } from "../Animations/AnimatedText";
import { TextFade } from "../Animations/TextFade";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen p-8 mt-32 max-w-6xl mx-auto">
      <AnimatedText
        text="privacy policy"
        className="md:text-5xl text-4xl capitalize font-semibold font-Cormorant text-center text-[#BF3327]"
      />
      <TextFade direction="down">
        <p className="font-Inter my-8 md:text-lg text-subheading">
          <span className="italic">The Booth Affair, </span>
          based in India, compliant with the{" "}
          <span className="font-semibold">
            Information Technology (Reasonable Security Practices and Procedures
            and Sensitive Personal Data or Information) Rules, 2011
          </span>{" "}
          under the <span className="font-semibold">IT Act, 2000:</span>
        </p>
      </TextFade>
      <TextFade direction="down">
        <p className="font-Inter md:text-lg text-subheading">
          <span className="font-semibold">Effective Date:</span> May 1, 2025
        </p>
      </TextFade>
      <TextFade direction="down">
        <p className="font-Inter my-8 md:text-lg text-subheading">
          <span className="italic">The Booth Affair </span>
          (“Company”, “we”, “us”, or “our”), we value your privacy. This Privacy
          Policy describes how we collect, use, disclose, and protect your
          information when you visit our website or use our photo booth
          services.
        </p>
      </TextFade>
      <TextFade direction="down">
        <p className="font-Inter my-8 md:text-lg text-subheading">
          By accessing or using our services, you agree to this policy
        </p>
      </TextFade>

      {/* first policy  */}
      <div className="my-8">
        <AnimatedText
          text="1.  Information We Collect"
          className="md:text-3xl text-xl capitalize font-semibold font-Inter text-primary"
        />
        <TextFade direction="down">
          <p className="font-Inter pt-2 md:text-lg text-subheading">
            We may collect the following types of personal and non-personal
            information:
          </p>
        </TextFade>
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            <span className="text-subheading font-medium">
              • Personal Information :
            </span>{" "}
            Name, phone number, email address, photograph(s), and other details
            you voluntarily provide.
          </p>
        </TextFade>
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            <span className="text-subheading font-medium">
              • Usage Information :
            </span>{" "}
            IP address, browser type, access time, and browsing behavior through
            cookies and analytics tools.
          </p>
        </TextFade>
      </div>

      {/* second policy  */}
      <div className="my-8">
        <AnimatedText
          text="2.   How We Use Your Information"
          className="md:text-3xl text-xl capitalize font-semibold font-Inter text-primary"
        />
        <TextFade direction="down">
          <p className="font-Inter pt-2 md:text-lg text-subheading">
            We use your information for the following purposes:
          </p>
        </TextFade>
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            • To operate and maintain our website and services
          </p>
        </TextFade>
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            • To contact you regarding bookings or service updates
          </p>
        </TextFade>
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            • To provide digital and printed photo deliverables
          </p>
        </TextFade>
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            • To personalize your experience
          </p>
        </TextFade>
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            • For legal and administrative purposes
          </p>
        </TextFade>
      </div>

      {/* third policy  */}
      <div className="my-8">
        <AnimatedText
          text="3.  Data Storage and Security"
          className="md:text-3xl text-xl capitalize font-semibold font-Inter text-primary"
        />
        <TextFade direction="down">
          <p className="font-Inter pt-2 md:text-lg text-subheading">
            We use reasonable security practices and procedures to protect your
            data from unauthorized access, use, or disclosure. However, no
            internet transmission is 100% secure.
          </p>
        </TextFade>
      </div>

      {/* fourth policy  */}
      <div className="my-8">
        <AnimatedText
          text="4.  Sharing of Information"
          className="md:text-3xl text-xl capitalize font-semibold font-Inter text-primary"
        />
        <TextFade direction="down">
          <p className="font-Inter pt-2 md:text-lg text-subheading">
            We do not sell or rent your personal data. Your information may be
            shared with:
          </p>
        </TextFade>
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            • Service providers who help us deliver our services
          </p>
        </TextFade>
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            • Legal authorities if required by law
          </p>
        </TextFade>
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            • Successors in the event of a business transfer
          </p>
        </TextFade>
      </div>

      {/* fifth policy  */}
      <div className="my-8">
        <AnimatedText
          text="5.  Your Rights"
          className="md:text-3xl text-xl capitalize font-semibold font-Inter text-primary"
        />
        <TextFade direction="down">
          <p className="font-Inter pt-2 md:text-lg text-subheading">
            You have the right to:
          </p>
        </TextFade>
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            • Access your personal information
          </p>
        </TextFade>
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            • Correct inaccuracies
          </p>
        </TextFade>
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            • Withdraw consent (by emailing us)
          </p>
        </TextFade>
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            • Request deletion of your data
          </p>
        </TextFade>
        <TextFade direction="down">
          <p className="font-Inter pt-2 md:text-lg text-subheading">
            To make any of these requests, contact us at the email below.
          </p>
        </TextFade>
      </div>

      {/* sixth policy  */}
      <div className="my-8">
        <AnimatedText
          text="6.  Cookies"
          className="md:text-3xl text-xl capitalize font-semibold font-Inter text-primary"
        />
        <TextFade direction="down">
          <p className="font-Inter pt-2 md:text-lg text-subheading">
            We use cookies to enhance your experience. You can control cookies
            through your browser settings.
          </p>
        </TextFade>
      </div>

      {/* seventh policy  */}
      <div className="my-8">
        <AnimatedText
          text="7.  Children’s Privacy"
          className="md:text-3xl text-xl capitalize font-semibold font-Inter text-primary"
        />
        <TextFade direction="down">
          <p className="font-Inter pt-2 md:text-lg text-subheading">
            Our services are not intended for individuals under 18 years of age.
            We do not knowingly collect data from minors.
          </p>
        </TextFade>
      </div>

      {/* 8th policy  */}
      <div className="my-8">
        <AnimatedText
          text="8.  Changes to This Policy"
          className="md:text-3xl text-xl capitalize font-semibold font-Inter text-primary"
        />
        <TextFade direction="down">
          <p className="font-Inter pt-2 md:text-lg text-subheading">
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated effective date.
          </p>
        </TextFade>
      </div>

      {/* 9th policy  */}
      <div className="my-8">
        <AnimatedText
          text="9.  Contact Us"
          className="md:text-3xl text-xl capitalize font-semibold font-Inter text-primary"
        />
        <TextFade direction="down">
          <p className="font-Inter pt-2 md:text-lg text-subheading">
            If you have any questions or concerns about this policy or our data
            practices, please contact us at:
          </p>
        </TextFade>
        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            <span className="text-subheading font-medium">Email:</span>{" "}
            <Link
              to="mailto:theboothaffair@gmail.com"
              className="hover:underline text-subheading"
            >
              theboothaffair@gmail.com
            </Link>
          </p>
        </TextFade>

        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            <span className="text-subheading font-medium">Phone:</span>{" "}
            <Link
              to="tel:9550800865"
              className="hover:underline text-subheading"
            >
              +91 95508 00865
            </Link>
          </p>
        </TextFade>

        <TextFade direction="down">
          <p className="font-Inter pt-2 ml-5 md:text-lg text-subheading">
            <span className="text-subheading font-medium">Address:</span>{" "}
            <Link
              to="https://www.google.com/maps/search/?api=1&query=Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-subheading"
            >
              Hyderabad
            </Link>
          </p>
        </TextFade>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
