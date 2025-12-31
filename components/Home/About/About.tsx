"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineLineRef = useRef<HTMLDivElement>(null);

  // Fonction pour ajouter une référence au tableau
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      timelineItemsRef.current[index] = el;
    }
  };

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trouver l'index dans le tableau de refs
          const index = timelineItemsRef.current.findIndex(ref => ref && ref === entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisibleItems(prev => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observer chaque élément de timeline
    timelineItemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => {
      timelineItemsRef.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  // Effet pour animer la ligne de timeline
  useEffect(() => {
    if (timelineLineRef.current && visibleItems.length > 0) {
      const progress = Math.min(1, visibleItems.length * 0.25);
      timelineLineRef.current.style.transform = `translateX(-50%) scaleY(${progress})`;
      timelineLineRef.current.style.opacity = '1';
    }
  }, [visibleItems]);

  return (
    <div className="min-h-screen text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 -left-20 w-64 h-64 md:w-80 md:h-80 bg-cyan-500/10 rounded-full blur-3xl transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-20 -right-20 w-64 h-64 md:w-80 md:h-80 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-6xl">
          {/* Header Section */}
          <div className={`text-center mb-8 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              <span className="text-cyan-400 font-semibold tracking-wider text-sm md:text-base">A PROPOS</span>
              <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6">
              Qui suis<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">-je</span> ?
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-2 md:px-4">
              Passionné par la création d'expériences digitales qui marquent les esprits
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start mb-8 md:mb-20">
            {/* Left Column - Photo */}
            <div className={`space-y-4 md:space-y-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              {/* Profile Image Card */}
              <div className="relative group">
                <div className={`absolute -inset-1 md:-inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg md:rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500 ${isVisible ? 'scale-100' : 'scale-95'}`}></div>
                <div className="relative rounded-lg md:rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                  {/* Container avec ratio d'aspect réduit */}
                  <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                    <Image
                      src="/images/moi2.png"
                      alt="Image de Tafita"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 40vw, 33vw"
                    />
                  </div>
                  {/* Nom superposé */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 sm:p-4 md:p-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Ravelonarivo Tafita</h3>
                    <p className="text-cyan-400 font-medium text-sm sm:text-base mt-1">Développeur Full-Stack</p>
                  </div>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 md:p-4 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-1">1+</div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-400">Années d'expérience</div>
                </div>
                <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 md:p-4 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-1">10+</div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-400">Projets réalisés</div>
                </div>
              </div>
            </div>

            {/* Right Column - Story */}
            <div className={`space-y-6 md:space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              {/* Histoire Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg md:rounded-xl p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                  <span className="w-4 md:w-6 h-0.5 bg-cyan-500"></span>
                  Mon Histoire
                </h2>
                
                <div className="space-y-3 md:space-y-4">
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                    Passionné par la technologie depuis mon plus jeune âge, j'ai transformé ma curiosité en expertise. 
                    Mon parcours a commencé avec une fascination pour la manière dont le code peut donner vie à des idées.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                    Au fil des années, j'ai développé une approche unique qui combine créativité artistique et rigueur technique. 
                    Pour moi, chaque projet est une opportunité de créer quelque chose d'exceptionnel qui dépasse les attentes.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                    Mon objectif est simple : transformer vos visions en expériences digitales mémorables qui captivent, 
                    engagent et inspirent. Chaque ligne de code que j'écris est pensée pour créer un impact significatif.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-12 md:mb-24">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12">Mon Parcours en Bref</h2>
            
            <div className="relative max-w-5xl mx-auto">
              {/* Timeline Line */}
              <div 
                ref={timelineLineRef}
                className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500 transition-all duration-1000 delay-400 origin-top"
                style={{
                  opacity: 0,
                  transform: 'translateX(-50%) scaleY(0)'
                }}
              ></div>
              
              {/* Timeline Items */}
              <div className="space-y-8 md:space-y-12 lg:space-y-16">
                {/* Timeline Item 1 */}
                <div 
                  ref={(el) => addToRefs(el, 0)}
                  className="relative flex flex-col sm:flex-row items-center"
                >
                  <div className="w-full sm:w-1/2 sm:pr-8 sm:text-right order-1 sm:order-1 mb-4 sm:mb-0">
                    <div 
                      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 md:p-6 transition-all duration-700 ease-out ${visibleItems.includes(0) ? 'opacity-100 translate-x-0' : 'sm:opacity-0 sm:-translate-x-8 opacity-100 translate-x-0'}`}
                      style={{ transitionDelay: '100ms' }}
                    >
                      <div className="text-cyan-400 font-semibold mb-2 text-sm md:text-base">2021</div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Début de l'Aventure</h3>
                      <p className="text-gray-400 text-sm md:text-base">Premiers pas dans le développement web</p>
                    </div>
                  </div>
                  {/* Timeline Point */}
                  <div 
                    className={`absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-4 border-[#0f172a] transition-all duration-500 ${visibleItems.includes(0) ? 'scale-100 opacity-100' : 'sm:scale-0 sm:opacity-0 scale-100 opacity-100'}`}
                    style={{ transitionDelay: '300ms' }}
                  ></div>
                  <div className="w-full sm:w-1/2 order-2 sm:order-2"></div>
                </div>

                {/* Timeline Item 2 */}
                <div 
                  ref={(el) => addToRefs(el, 1)}
                  className="relative flex flex-col sm:flex-row items-center"
                >
                  <div className="w-full sm:w-1/2 order-2 sm:order-1 mb-4 sm:mb-0"></div>
                  {/* Timeline Point */}
                  <div 
                    className={`absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-4 border-[#0f172a] transition-all duration-500 ${visibleItems.includes(1) ? 'scale-100 opacity-100' : 'sm:scale-0 sm:opacity-0 scale-100 opacity-100'}`}
                    style={{ transitionDelay: '500ms' }}
                  ></div>
                  <div className="w-full sm:w-1/2 sm:pl-8 order-1 sm:order-2">
                    <div 
                      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 md:p-6 transition-all duration-700 ease-out ${visibleItems.includes(1) ? 'opacity-100 translate-x-0' : 'sm:opacity-0 sm:translate-x-8 opacity-100 translate-x-0'}`}
                      style={{ transitionDelay: '300ms' }}
                    >
                      <div className="text-cyan-400 font-semibold mb-2 text-sm md:text-base">2022</div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Spécialisation Frontend</h3>
                      <p className="text-gray-400 text-sm md:text-base">Approfondissement de React et Next.js</p>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div 
                  ref={(el) => addToRefs(el, 2)}
                  className="relative flex flex-col sm:flex-row items-center"
                >
                  <div className="w-full sm:w-1/2 sm:pr-8 sm:text-right order-1 sm:order-1 mb-4 sm:mb-0">
                    <div 
                      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 md:p-6 transition-all duration-700 ease-out ${visibleItems.includes(2) ? 'opacity-100 translate-x-0' : 'sm:opacity-0 sm:-translate-x-8 opacity-100 translate-x-0'}`}
                      style={{ transitionDelay: '500ms' }}
                    >
                      <div className="text-cyan-400 font-semibold mb-2 text-sm md:text-base">2023</div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Devenir Full-Stack</h3>
                      <p className="text-gray-400 text-sm md:text-base">Expansion vers le backend et bases de données</p>
                    </div>
                  </div>
                  {/* Timeline Point */}
                  <div 
                    className={`absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-4 border-[#0f172a] transition-all duration-500 ${visibleItems.includes(2) ? 'scale-100 opacity-100' : 'sm:scale-0 sm:opacity-0 scale-100 opacity-100'}`}
                    style={{ transitionDelay: '700ms' }}
                  ></div>
                  <div className="w-full sm:w-1/2 order-2 sm:order-2"></div>
                </div>

                {/* Timeline Item 4 */}
                <div 
                  ref={(el) => addToRefs(el, 3)}
                  className="relative flex flex-col sm:flex-row items-center"
                >
                  <div className="w-full sm:w-1/2 order-2 sm:order-1 mb-4 sm:mb-0"></div>
                  {/* Timeline Point */}
                  <div 
                    className={`absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-4 border-[#0f172a] transition-all duration-500 ${visibleItems.includes(3) ? 'scale-100 opacity-100' : 'sm:scale-0 sm:opacity-0 scale-100 opacity-100'}`}
                    style={{ transitionDelay: '900ms' }}
                  ></div>
                  <div className="w-full sm:w-1/2 sm:pl-8 order-1 sm:order-2">
                    <div 
                      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 md:p-6 transition-all duration-700 ease-out ${visibleItems.includes(3) ? 'opacity-100 translate-x-0' : 'sm:opacity-0 sm:translate-x-8 opacity-100 translate-x-0'}`}
                      style={{ transitionDelay: '700ms' }}
                    >
                      <div className="text-cyan-400 font-semibold mb-2 text-sm md:text-base">2024 - Présent</div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Perfectionnement & Innovation</h3>
                      <p className="text-gray-400 text-sm md:text-base">Focus sur performances et animations avancées</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default About;