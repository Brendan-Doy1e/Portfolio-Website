import React from 'react';
import Link from 'next/link';

interface ButtonLinkProps {
  href: string;
  text: string;
  description: string;
}

export default function ButtonLink({ href, text, description }: ButtonLinkProps) {
  return (
    <Link href={href} legacyBehavior>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-lg border border-transparent px-4 py-3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex items-center justify-center w-2/3 mx-auto transform hover:scale-105 transition-transform animate-slideInRight"
      >
        <div className="text-center text-white text-shadow-lg">
          <h2 className="mb-3 text-2xl font-semibold">
            {text}
            <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            {description}
          </p>
        </div>
      </a>
    </Link>
  );
}
