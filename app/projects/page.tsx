"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import MyCarousel from '@/components/MyCarousel';
import { isMobile } from 'react-device-detect';

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw"
  },
  in: {
    opacity: 1,
    x: 0
  },
  out: {
    opacity: 0,
    x: "100vw"
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.8
};

export default function ProjectsPage() {
  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={`min-h-screen flex ${isMobile ? "flex-col justify-start pt-4 px-2" : "items-center justify-center pt-12 px-24"} bg-cover bg-center`}
    >
      <div className={`w-full ${isMobile ? "mt-4" : "mx-auto mb-4 lg:mb-8"}`}>
        <MyCarousel />
      </div>
      <Link href="/" legacyBehavior>
        <a className={`absolute bottom-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-700 transition-colors`}>
          Go Back
        </a>
      </Link>
    </motion.main>
  );
}
