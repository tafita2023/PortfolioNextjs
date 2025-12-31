"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Particles from '@/components/Effets/Particle';

function Hero() {
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setImageVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id='home' className="relative w-full min-h-[100vh] max-h-[120vh] mt-4 overflow-hidden">
      {/* Particles en arrière-plan - div avec taille fixe */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Particles
          particleCount={150}
          particleSpread={15}
          speed={0.08}
          particleColors={['#00FFFF', '#00BFFF', '#87CEEB']}
          moveParticlesOnHover={true}
          particleHoverFactor={0.5}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={1}
          cameraDistance={25}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>
        <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between text-white w-full h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-20 md:pt-24 lg:pt-28 pb-8 md:pb-12 lg:pb-16">
          
          {/* Conteneur desktop: Texte à gauche (premier sur desktop) */}
          <div className="hidden md:flex flex-1 flex-col justify-center items-start space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 w-full md:w-auto md:pr-4 lg:pr-6 xl:pr-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight sm:leading-snug">
              Bonjour, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">je suis RAVELONARIVO Tafitasoa</span>
            </h1>

            <div className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed">
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                <span>Je suis un</span>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 font-semibold">
                  <Typewriter
                    options={{
                      strings: [
                        "Développeur Full Stack.",
                        "UX/UI Designer."
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 50,
                    }}
                  />
                </div>
              </div>
              <p className="max-w-xl sm:max-w-2xl text-gray-400 text-xs sm:text-sm md:text-base">
                Passionné par la technologie et la création d'applications web modernes,
                performantes et intuitives qui offrent des expériences utilisateur exceptionnelles.
              </p>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-3 mt-3 sm:mt-4 md:mt-5">
              <button className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-xs sm:text-sm md:text-base cursor-pointer">
                Télécharger mon CV
              </button>
            </div>

            {/* Section contact - Version desktop */}
            <div className="space-y-4 mt-4">
              <div className="space-y-3">
                <div className="flex space-x-4 pt-2">
                  {/* Icône GitHub */}
                  <a
                    href="https://github.com/tafita2023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-lg hover:bg-cyan-500/10 transition-colors group"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  
                  {/* Icône LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/tafitasoa-ravelonarivo-143a1229b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-lg hover:bg-cyan-500/10 transition-colors group"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  
                  {/* Icône Facebook */}
                  <a
                    href="https://web.facebook.com/tafita.ravelonarivo.1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-lg hover:bg-cyan-500/10 transition-colors group"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Image EN HAUT sur mobile, à DROITE sur desktop */}
          <div
            className={`flex-shrink-0 flex items-center justify-center mb-8 md:mb-0 md:mt-0 transition-all duration-1000 transform ${
              imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative w-[180px] xs:w-[200px] sm:w-[220px] md:w-[240px] lg:w-[280px] xl:w-[300px] 2xl:w-[320px]">
              <div className="absolute -inset-1 sm:-inset-2 md:-inset-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-sm sm:blur-md md:blur-lg"></div>
              <Image
                src="/images/moi4.png"
                alt="Image de Tafita"
                width={300}
                height={300}
                priority
                className="relative w-full h-auto rounded-full border-2 sm:border-3 border-gray-800/50 shadow-lg hover:border-cyan-500/30 transition-all duration-500 hover:scale-[1.03] cursor-pointer"
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, (max-width: 1024px) 240px, (max-width: 1280px) 280px, 300px"
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-br from-transparent via-cyan-500/5 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Espacement entre image et texte sur desktop */}
          <div className="hidden md:block flex-shrink-0 w-4 lg:w-6 xl:w-8 2xl:w-10"></div>

          {/* Texte EN BAS sur mobile, à GAUCHE sur desktop (version mobile visible) */}
          <div className="md:hidden flex-1 flex flex-col justify-center items-center text-center space-y-3 w-full">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
              Bonjour, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 block">je suis RAVELONARIVO Tafitasoa</span>
            </h1>

            <div className="text-base sm:text-lg text-gray-300 leading-relaxed">
              <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
                <span>Je suis un</span>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 font-semibold">
                  <Typewriter
                    options={{
                      strings: [
                        "Développeur Full Stack.",
                        "UX/UI Designer."
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 50,
                    }}
                  />
                </div>
              </div>
              <p className="text-gray-400 text-sm sm:text-base px-4">
                Passionné par la technologie et la création d'applications web modernes,
                performantes et intuitives qui offrent des expériences utilisateur exceptionnelles.
              </p>
            </div>

            {/* Boutons d'action - version mobile */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <button className="px-4 sm:px-5 py-2.5 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-sm sm:text-base cursor-pointer">
                Télécharger mon CV
              </button>
            </div>
            
            {/* Section contact - Version mobile */}
            <div className="space-y-4 mt-6">
              <div className="space-y-3">
                <div className="flex justify-center space-x-4 pt-2">
                  {/* Icône GitHub */}
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-lg hover:bg-cyan-500/10 transition-colors group"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  
                  {/* Icône LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-lg hover:bg-cyan-500/10 transition-colors group"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  
                  {/* Icône Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-lg hover:bg-cyan-500/10 transition-colors group"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
    </div>
  );
}

export default Hero;