import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
  }
  
  export default function ProjectCard({ title, description }: ProjectCardProps) {
    return (
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 text-white text-shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
  