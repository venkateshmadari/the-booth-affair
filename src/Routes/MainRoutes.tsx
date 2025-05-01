import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import BookNow from "../pages/BookNow";
import Contact from "../pages/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndCondition from "../pages/TermsAndCondition";
import FrequentlyAskedQuestions from "../pages/FrequentlyAskedQuestions";
import PageNotFound from "../components/PageNotFound";
import Blogs from "../pages/Blogs";

const MainRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/our-blogs" element={<Blogs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
        <Route path="/faqs" element={<FrequentlyAskedQuestions />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default MainRoutes;
