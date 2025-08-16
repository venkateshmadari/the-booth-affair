import { Link } from "react-router-dom";
import { TextFade } from "../Animations/TextFade";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-8 md:px-16">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col space-y-4">
          <TextFade direction="up">
            <Link to="/" className="text-xs hover:underline">
              Home
            </Link>
          </TextFade>
          <TextFade direction="up">
            <Link to="/services" className="text-xs hover:underline">
              Services
            </Link>
          </TextFade>
          <TextFade direction="up">
            <Link to="/about-us" className="text-xs hover:underline">
              About Us
            </Link>
          </TextFade>
          <TextFade direction="up">
            <Link to="/contact-us" className="text-xs hover:underline">
              Contact Us
            </Link>
          </TextFade>
        </div>

        <div className="flex flex-col space-y-4">
          <TextFade direction="up">
            <Link to="/our-blogs" className="text-xs hover:underline">
              Our Blogs
            </Link>
          </TextFade>
          <TextFade direction="up">
            <Link to="/privacy-policy" className="text-xs hover:underline">
              Privacy Policy
            </Link>
          </TextFade>
          <TextFade direction="up">
            <Link
              to="/terms-and-conditions"
              className="text-xs hover:underline"
            >
              Terms And Conditions
            </Link>
          </TextFade>
          <TextFade direction="up">
            <Link to="/faqs" className="text-xs hover:underline">
              Frequently Asked Questions (FAQ's)
            </Link>
          </TextFade>
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link to="#" className="text-xs hover:underline">
              Legal Notes
            </Link>
          </motion.div> */}
        </div>
      </div>

      <div className="flex justify-between items-center mt-12 md:flex-row flex-col-reverse md:gap-0 gap-6">
        <div className="">
          <TextFade direction="down" className="text-xs text-gray-600">
            Copyright {currentYear} The Booth Affair - All Rights Reserved
          </TextFade>
        </div>

        <div className="flex items-center gap-6">
          <TextFade direction="up">
            <Link
              to="https://wa.me/+919550800865"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Whatsapp"
            >
              <FaWhatsapp size={18} className="text-primary" />
            </Link>
          </TextFade>

          <TextFade direction="up">
            <Link
              to="https://www.instagram.com/theboothaffair/?igsh=MXU4cmlicnRxNW8xNQ%3D%3D&utm_source=qr#"
              aria-label="Instagram"
              target="_blank"
            >
              <FaInstagram size={18} className="text-primary" />
            </Link>
          </TextFade>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
