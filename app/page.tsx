"use client";
import React from 'react';
import AboutMeSection from '@/components/AboutMeSection';
import ButtonLink from '@/components/ButtonLink';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24 bg-cover bg-center" style={{ backgroundImage: 'url(/img/background.jpg)', backgroundBlendMode: 'darken', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="flex w-full max-w-7xl lg:flex-row flex-col items-center justify-center">
        <AboutMeSection />
        <div className="flex-1 mb-32 lg:mb-0 lg:w-1/3 lg:text-left text-center flex flex-col space-y-4 justify-center">
          <ButtonLink
            href="https://www.linkedin.com/in/brendan-j-doyle/"
            text="LinkedIn"
            description="Find out more about me on LinkedIn."
          />
          <ButtonLink
            href="https://www.github.com/Brendan-Doy1e"
            text="Github"
            description="See my projects on Github."
          />
          <ButtonLink
            href="/projects"
            text="My Projects"
            description="Check out my projects."
          />
        </div>
      </div>
    </main>
  );
}
