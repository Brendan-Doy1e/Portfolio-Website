"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import MyCarousel from '@/components/MyCarousel';

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
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
    >
      <div className="w-full mx-auto py-4 px-4 md:px-8 lg:px-24">
        <MyCarousel />
      </div>
      <Link href="/" legacyBehavior>
        <a className="absolute bottom-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-700 transition-colors">
          Go Back
        </a>
      </Link>
    </motion.main>
  );
}
