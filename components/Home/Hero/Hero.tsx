"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import ClickSpark from '@/components/Effets/ClickSpark';
import Particles from '@/components/Effets/Particle';

function Hero() {
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setImageVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id='home' className="relative w-full min-h-[100vh] max-h-[120vh] overflow-hidden">
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
          className="w-full"
        />
      </div>
      
      {/* ClickSpark par-dessus */}
      <ClickSpark
        sparkColor="#00FFFF"
        sparkSize={10}
        sparkRadius={25}
        sparkCount={10}
        duration={500}
        easing="ease-out"
        extraScale={1.0}
        className="relative z-10 w-full h-full"
      >
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
                        "Développeur Frontend.",
                        "Développeur Backend.",
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
              <button className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-medium rounded-lg hover:from-cyan-700 hover:to-blue-800 transition-all duration-300 shadow hover:shadow-cyan-500/20 text-xs sm:text-sm md:text-base">
                Voir mes projets
              </button>
              <button className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-xs sm:text-sm md:text-base cursor-pointer">
                Télécharger mon CV
              </button>
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
                        "Développeur Frontend.",
                        "Développeur Backend.",
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
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <button className="px-4 sm:px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-medium rounded-lg hover:from-cyan-700 hover:to-blue-800 transition-all duration-300 shadow hover:shadow-cyan-500/20 text-sm sm:text-base">
                Voir mes projets
              </button>
              <button className="px-4 sm:px-5 py-2.5 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-sm sm:text-base cursor-pointer">
                Télécharger mon CV
              </button>
            </div>
          </div>

        </div>
      </ClickSpark>
    </div>
  );
}

export default Hero;