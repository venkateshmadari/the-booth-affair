"use client";
import { motion } from "framer-motion";
import { useMediaQuery } from "../hooks/use-media-query";

const images = [
  "https://i.pinimg.com/736x/48/c3/c7/48c3c7d476141eef78a308cba15b8837.jpg",
  "https://i.pinimg.com/736x/c5/5d/39/c55d396616245df2b703c37d91189e4d.jpg",
  "https://i.pinimg.com/736x/b7/83/c9/b783c9bd42f3385726150e519cb8bb25.jpg",
  "https://i.pinimg.com/736x/5c/cb/a8/5ccba8e542a39be1c9b90e208d7b9c34.jpg",
  "https://i.pinimg.com/736x/a2/2a/b6/a22ab603de1d56f51966be522a3f2277.jpg",
  "https://i.pinimg.com/736x/a8/78/29/a878293ece04f95ead938d3f371eb705.jpg",
  "https://i.pinimg.com/736x/dd/f1/24/ddf124bcc3669827406f08fe2fd24808.jpg",
];

const rotations = {
  small: ["-rotate-12", "rotate-0", "rotate-12"], 
  medium: ["-rotate-8", "-rotate-4", "rotate-0", "rotate-4", "rotate-8"],
  large: [
    "-rotate-10",
    "-rotate-5",
    "rotate-0",
    "rotate-5",
    "rotate-10",
    "rotate-15",
    "rotate-20",
  ], // For 7 cards (desktop)
};

const zIndices = ["z-10", "z-20", "z-30", "z-40", "z-50", "z-40", "z-30"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function CardStack() {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  const isMediumScreen = useMediaQuery("(max-width: 768px)");

  const visibleImages = isSmallScreen
    ? images.slice(0, 3)
    : isMediumScreen
    ? images.slice(0, 5)
    : images;

  const getRotation = (index: number) => {
    if (isSmallScreen) return rotations.small[index];
    if (isMediumScreen) return rotations.medium[index];
    return rotations.large[index];
  };

  // Reduced negative margins to make rotations more visible
  const getMargin = (index: number) => {
    if (index === 0) return "ml-0";
    if (isSmallScreen) return "-ml-4"; // Reduced from -ml-6
    if (isMediumScreen) return "-ml-6"; // Reduced from -ml-8
    return "-ml-8"; // Reduced from -ml-10
  };

  return (
    <div className="flex items-center justify-center py-10 px-4">
      <motion.div
        className="relative flex"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {visibleImages.map((src, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.1,
              y: -10,
              zIndex: 60,
              rotate: 0,
              transition: { type: "spring", stiffness: 300 },
            }}
            className={`
              flex-shrink-0
              ${
                isSmallScreen
                  ? "w-[110px] h-[160px]" // Slightly larger for mobile
                  : isMediumScreen
                  ? "w-[120px] h-[170px]"
                  : "w-[150px] h-[200px]"
              }
              rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 cursor-pointer
              ${getRotation(index)} ${zIndices[index]} ${getMargin(index)}
            `}
          >
            <img
              src={src}
              alt={`stacked-image-${index}`}
              className="w-full h-full object-cover grayscale-50 hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
