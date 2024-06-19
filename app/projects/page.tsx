"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Project One', description: 'Description of project one.' },
  { id: 2, title: 'Project Two', description: 'Description of project two.' },
  { id: 3, title: 'Project Three', description: 'Description of project three.' },
  // Add more projects as needed
];

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

export default function Projects() {
  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen p-24 bg-cover bg-center"
      style={{ backgroundImage: 'url(/img/background.jpg)' }}
    >
      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-4xl font-semibold text-white text-shadow-lg mb-8">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 text-white text-shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
        <Link href="/" legacyBehavior>
          <a className="mt-8 inline-block text-xl text-white underline">Go back</a>
        </Link>
      </div>
    </motion.main>
  );
}
