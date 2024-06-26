import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack?: string;
  imageSrc?: string;
  Url?: string;
}

export default function ProjectCard({ title, description, techStack, imageSrc, Url }: ProjectCardProps) {
  return (
    <Link href={Url || "#"} passHref className="block bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 font-montserrat text-shadow flex flex-col h-full relative">
      <div className="flex items-center mb-4">
        {imageSrc && (
          <div className="w-12 h-12 mr-4 relative">
            <Image src={imageSrc} alt={title} layout="fill" objectFit="contain" className="rounded-md" />
          </div>
        )}
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <hr className="my-2 border-gray-300 opacity-50 " />
      <div className="flex-grow">
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className="flex-shrink-0 mt-4">
        <hr className="border-gray-300 opacity-50 mb-2" />
        {techStack && (
          <p className="text-sm opacity-75">
            <strong>Tech Stack:</strong> {techStack}
          </p>
        )}
      </div>
    </Link>
  );
}
