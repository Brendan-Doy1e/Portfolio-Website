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
      className="min-h-screen pt-12 px-24 bg-cover bg-center"
    >
      <div className="max-w-7xl mx-auto py-4">
        <h1 className="text-4xl font-bold text-white text-shadow-lg mb-8 text-center">Brendan's Projects</h1>
        <MyCarousel />
        <Link href="/" legacyBehavior>
          <a className="mt-8 inline-block text-xl text-white underline">Go back</a>
        </Link>
      </div>
    </motion.main>
  );
}
