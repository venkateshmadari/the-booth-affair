import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import BookNow from "../pages/BookNow";
import Contact from "../pages/Contact";
import Navbar from "../components/Navbar";

const MainRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
