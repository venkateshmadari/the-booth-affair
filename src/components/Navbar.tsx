import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Click outside sidebar handler
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

  // Prevent scrolling when sidebar is open
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
    { name: "Services", href: "/services" },
    { name: "Book Now", href: "/booking" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Navbar animation variants
  const navbarVariants = {
    visible: { y: 0 },
    hidden: { y: "-100%" },
  };

  // Sidebar animation variants
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

  // Link animation variants
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
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: 0 }}
        animate={isVisible ? "visible" : "hidden"}
        variants={navbarVariants}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-10 bg-primary shadow-xs"
      >
        <div className="container mx-auto px-4 h-24 flex items-center justify-between">
          <button
            onClick={() => setIsOpen(true)}
            className="text-secondary px-3 py-2 font-semibold uppercase transition-colors cursor-pointer font-Inter text-sm"
            aria-label="Open menu"
          >
            Menu
          </button>

          <div className="absolute left-1/2 -translate-x-1/2">
            <div className="flex flex-col gap-0.5">
              <h1 className="text-2xl uppercase font-Cormorant text-secondary font-semibold">
                the booth affair
              </h1>
              <p className="capitalize text-secondary text-sm italic text-center">
                flash. flirt. repeat
              </p>
            </div>
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
            className="fixed top-0 left-0 h-full bg-primary z-30 w-4/5 md:w-1/5 shadow-xl"
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-10">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-black px-3 py-2 rounded-4xl text-third font-medium hover:text-third/80 cursor-pointer font-Inter uppercase transition-colors text-sm"
                  aria-label="Close menu"
                >
                  Close
                </button>
              </div>

              <div className="flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div key={index} variants={linkVariants}>
                    <Link
                      to={link.href}
                      className="text-4xl font-medium text-secondary font-Cormorant hover:text-third transition-colors"
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
