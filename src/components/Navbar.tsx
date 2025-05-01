import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Book Now", href: "/book-now" },
    { name: "Our Blogs", href: "/our-blogs" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const navbarVariants = {
    visible: { y: 0 },
    hidden: { y: "-100%" },
  };

  const sidebarVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "tween",
        duration: 0.4,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  const linkVariants = {
    closed: {
      opacity: 0,
      y: 20,
    },
    open: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={isVisible ? "visible" : "hidden"}
        variants={navbarVariants}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-[1000] bg-primary shadow-xs"
      >
        <div className="container mx-auto px-4 h-24 flex items-center justify-between">
          <button
            onClick={() => setIsOpen(true)}
            className="text-secondary px-3 py-2 z-10 font-medium uppercase transition-colors cursor-pointer font-Inter text-sm"
            aria-label="Open menu"
          >
            <RxHamburgerMenu className=" text-secondary/75" size={22} />
          </button>

          <div className="flex-1 flex justify-center">
            <Link to="/">
              <img
                src="/booth-affair.jpg"
                alt="the-booth-affair"
                className="md:h-20 h-16 md:ml-0 -ml-4 object-contain"
              />
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-20"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={sidebarRef}
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-0 left-0 h-full bg-primary z-[1000] w-4/5 lg:w-1/5 md:w-2/5 shadow-xl"
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-10">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-black p-3 rounded-4xl text-third font-medium hover:text-third/80 cursor-pointer font-Inter uppercase transition-colors text-sm"
                  aria-label="Close menu"
                >
                  <span className="sr-only">Close</span>
                  <IoMdClose size={22} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div key={index} variants={linkVariants}>
                    <Link
                      to={link.href}
                      className="text-4xl font-medium text-secondary z-[1000] font-Cormorant hover:text-third transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
