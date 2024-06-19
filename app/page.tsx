"use client";

import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24 bg-cover bg-center" style={{ backgroundImage: 'url(/img/background.jpg)', backgroundBlendMode: 'darken', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="flex w-full max-w-7xl lg:flex-row flex-col items-center justify-center">
        
        <div className="flex-1 mb-32 lg:mb-0 lg:w-2/3 lg:text-left text-center flex flex-col justify-center bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
          <div className="h-32">
            <div className="mb-3 text-3xl font-semibold text-white text-shadow-lg">
              <TypeAnimation
                sequence={['public String welcome() {']}
                wrapper="div"
                cursor={false}
                repeat={0}
              />
            </div>
            <div className="mb-3 text-3xl font-semibold text-white text-shadow-lg">
              <TypeAnimation
                sequence={[
                  1200, 
                  '        return "Hello world, I\'m Brendan!";'.replace(/ /g, '\u00a0'), // 8 non-breaking spaces for 2 tabs
                ]}
                wrapper="div"
                cursor={false}
                repeat={0}
              />
            </div>
            <div className="mb-3 text-3xl font-semibold text-white text-shadow-lg">
              <TypeAnimation
                sequence={[
                  4200, 
                  '}',
                ]}
                wrapper="div"
                cursor={true}
                repeat={0}
              />
            </div>
          </div>
          <hr className="my-4 border-t-2 border-gray-300 opacity-50" />
          <p className="max-w-[80ch] text-lg leading-relaxed text-white text-shadow-lg">
            I am a recent graduate of computer science at BCIT. I am actively seeking software development positions where I can grow my technical skills and passion for innovation.
            <br /><br />
            I am an avid golfer and extreme sports enthusiast. I hold a license in skydiving, advanced scuba diving, certified ski instructor and represented the national team in skeleton sliding.
          </p>
        </div>

        <div className="flex-1 mb-32 lg:mb-0 lg:w-1/3 lg:text-left text-center flex flex-col space-y-4 justify-center">
          <a
            href="https://www.linkedin.com/in/brendan-j-doyle/"
            className="group rounded-lg border border-transparent px-4 py-3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex items-center justify-center w-2/3 mx-auto transform hover:scale-105 transition-transform animate-slideInRight"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-center text-white text-shadow-lg">
              <h2 className="mb-3 text-2xl font-semibold">
                LinkedIn{" "}
                <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Find out more about me on LinkedIn.
              </p>
            </div>
          </a>

          <a
            href="https://www.github.com/Brendan-Doy1e"
            className="group rounded-lg border border-transparent px-4 py-3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex items-center justify-center w-2/3 mx-auto transform hover:scale-105 transition-transform animate-slideInRight"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-center text-white text-shadow-lg">
              <h2 className="mb-3 text-2xl font-semibold">
                Github{" "}
                <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                See my projects on Github.
              </p>
            </div>
          </a>

          <Link href="/projects" legacyBehavior>
            <a className="group rounded-lg border border-transparent px-4 py-3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex items-center justify-center w-2/3 mx-auto transform hover:scale-105 transition-transform animate-slideInRight">
              <div className="text-center text-white text-shadow-lg">
                <h2 className="mb-3 text-2xl font-semibold">
                  My Projects{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  Check out my projects.
                </p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
}
