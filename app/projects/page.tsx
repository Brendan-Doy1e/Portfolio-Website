"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import projects from '../projects.json';

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
      className="min-h-screen pt-2 px-24 bg-cover bg-center"
      style={{ backgroundImage: 'url(/img/background.jpg)' }}
    >
      <div className="max-w-7xl mx-auto py-8">
        <h1 className="text-4xl font-semibold text-white text-shadow-lg mb-8">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              imageSrc={project.imageSrc}
            />
          ))}
        </div>
        <Link href="/" legacyBehavior>
          <a className="mt-8 inline-block text-xl text-white underline">Go back</a>
        </Link>
      </div>
    </motion.main>
  );
}
