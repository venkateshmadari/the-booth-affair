import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeTwo() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2 },
    },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 font-light">
      {/* Header */}
      <header className="py-6 px-8 flex justify-between items-center border-b border-gray-100">
        <button className="text-sm tracking-widest">MENU</button>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute left-1/2 transform -translate-x-1/2"
        >
          <img
            src="/logo.png"
            alt="Brunello Cucinelli"
            width={120}
            height={40}
            className="object-contain"
          />
        </motion.div>
      </header>

      {/* Main Grid */}
      <main className="flex-grow grid grid-cols-1 md:grid-cols-2">
        {/* Top Left - Philosophy Section */}
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          className="relative h-[500px] md:h-auto bg-[#e8e0d4] flex flex-col items-center justify-center text-center p-10"
        >
          <img
            src="/bust.png"
            alt="Marble Bust"
            className="absolute inset-0 z-0 opacity-90 object-cover"
          />
          <div className="relative z-10 max-w-md mx-auto">
            <motion.p
              variants={slideUp}
              className="text-sm tracking-wider mb-6"
            >
              Philosophy, History, Company & Solomeo
            </motion.p>
            <motion.h2
              variants={slideUp}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-serif mb-4 leading-relaxed"
            >
              "Beauty is the symbol of the morally good"
            </motion.h2>
            <motion.p
              variants={slideUp}
              transition={{ delay: 0.3 }}
              className="text-sm mb-8"
            >
              I. Kant
            </motion.p>
            <motion.button
              variants={slideUp}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="text-xs tracking-widest border-b border-gray-800 pb-1 hover:pb-2 transition-all duration-300"
            >
              EXPLORE
            </motion.button>
          </div>
        </motion.div>

        {/* Top Right - AI Section */}
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          className="relative h-[500px] md:h-auto bg-white flex flex-col items-center justify-center text-center p-10"
        >
          <img
            src="/dioscuri.png"
            alt="Dioscuri Illustration"
            className="absolute inset-0 z-0 opacity-90 object-contain"
          />
          <div className="relative z-10 max-w-md mx-auto">
            <motion.p
              variants={slideUp}
              className="text-sm tracking-wider mb-6"
            >
              Brunello Cucinelli AI
            </motion.p>
            <motion.h2
              variants={slideUp}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-serif mb-8 leading-relaxed"
            >
              Where Human and Artificial Intelligence meet
            </motion.h2>
            <motion.button
              variants={slideUp}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="text-xs tracking-widest border-b border-gray-800 pb-1 hover:pb-2 transition-all duration-300"
            >
              DISCOVER THE NEW WEBSITE
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Left - Boutique Section */}
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ delay: 0.3 }}
          className="relative h-[500px] md:h-auto bg-[#d8cfc0] flex flex-col items-center justify-end p-10"
        >
          <img
            src="/boutique.png"
            alt="Fashion Models"
            className="absolute inset-0 z-0 object-cover"
          />
          <motion.div variants={slideUp} className="relative z-10 mb-10">
            <Link
              to="#"
              className="text-xs tracking-widest border-b border-white text-white pb-1 hover:pb-2 transition-all duration-300"
            >
              ONLINE BOUTIQUE
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Right - Investor Relations Section */}
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ delay: 0.4 }}
          className="relative h-[500px] md:h-auto bg-gray-900 flex flex-col items-center justify-end p-10"
        >
          <img
            src="/investor.png"
            alt="Monument"
            className="absolute inset-0 z-0 grayscale object-cover"
          />
          <motion.div variants={slideUp} className="relative z-10 mb-10">
            <Link
              to="#"
              className="text-xs tracking-widest border-b border-white text-white pb-1 hover:pb-2 transition-all duration-300"
            >
              INVESTOR RELATIONS
            </Link>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-8 md:px-16 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link to="#" className="text-xs hover:underline">
                Online Boutique
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link to="#" className="text-xs hover:underline">
                Investor Relations
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link to="#" className="text-xs hover:underline">
                Contacts
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Link to="#" className="text-xs hover:underline">
                Human Resources
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-col space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link to="#" className="text-xs hover:underline">
                Privacy Policy
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link to="#" className="text-xs hover:underline">
                Cookie Policy
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link to="#" className="text-xs hover:underline">
                Legal Notes
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xs text-gray-500"
          >
            Copyright 2025 Brunello Cucinelli SpA - All Rights Reserved - VAT
            01886120540
          </motion.p>

          <div className="flex items-center space-x-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.2 }}
            >
              <Link to="#" aria-label="Instagram">
                <Instagram size={18} className="text-gray-800" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ scale: 1.2 }}
            >
              <Link to="#" aria-label="Facebook">
                <Facebook size={18} className="text-gray-800" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.2 }}
            >
              <Link to="#" aria-label="LinkedIn">
                <Linkedin size={18} className="text-gray-800" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="ml-6"
            >
              <button className="text-xs hover:underline">English</button>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}
