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

      <div className="relative container mx-auto px-4 sm:px-6 py-12 md:py-24 max-w-6xl">
        {/* Header Section */}
        <div className={`text-center mb-8 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="w-6 md:w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            <span className="text-cyan-400 font-semibold tracking-wider text-xs md:text-base">A PROPOS</span>
            <div className="w-6 md:w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6">
            Qui suis<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">-je</span> ?
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2 md:px-4">
            Passionné par la création d'expériences digitales qui marquent les esprits
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start mb-12 md:mb-20">
          {/* Left Column - Photo */}
          <div className={`space-y-4 md:space-y-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Profile Image Card - Responsive */}
            <div className="relative group">
              <div className={`absolute -inset-2 md:-inset-3 lg:-inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl md:rounded-2xl lg:rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500 ${isVisible ? 'scale-100' : 'scale-95'}`}></div>
              <div className="relative rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                {/* Container avec ratio d'aspect */}
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
                {/* Nom superposé - Responsive */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 sm:p-4 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">Ravelonarivo Tafita</h3>
                  <p className="text-cyan-400 font-medium text-xs sm:text-sm md:text-base mt-0.5 md:mt-1">Développeur Full-Stack</p>
                </div>
              </div>
            </div>

            {/* Quick Facts - Responsive */}
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-2 sm:p-3 md:p-4 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 mb-0.5 md:mb-1">1+</div>
                <div className="text-xs md:text-sm text-gray-400">Années d'expérience</div>
              </div>
              <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-2 sm:p-3 md:p-4 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 mb-0.5 md:mb-1">10+</div>
                <div className="text-xs md:text-sm text-gray-400">Projets réalisés</div>
              </div>
            </div>
          </div>

          {/* Right Column - Story */}
          <div className={`space-y-4 md:space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg md:rounded-xl lg:rounded-2xl p-4 sm:p-6 md:p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-6 flex items-center gap-2 md:gap-3">
                <span className="w-4 md:w-6 lg:w-8 h-0.5 bg-cyan-500"></span>
                Mon Histoire
              </h2>
              
              <div className="space-y-3 md:space-y-6">
                <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
                  Passionné par la technologie depuis mon plus jeune âge, j'ai transformé ma curiosité en expertise. 
                  Mon parcours a commencé avec une fascination pour la manière dont le code peut donner vie à des idées.
                </p>
                
                <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
                  Au fil des années, j'ai développé une approche unique qui combine créativité artistique et rigueur technique. 
                  Pour moi, chaque projet est une opportunité de créer quelque chose d'exceptionnel qui dépasse les attentes.
                </p>
                
                <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
                  Mon objectif est simple : transformer vos visions en expériences digitales mémorables qui captivent, 
                  engagent et inspirent. Chaque ligne de code que j'écris est pensée pour créer un impact significatif.
                </p>
              </div>
            </div>

            {/* Philosophy Card - Responsive */}
            <div className={`bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-lg md:rounded-xl lg:rounded-2xl p-3 sm:p-4 md:p-6 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-start gap-2 md:gap-3 lg:gap-4">
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 md:mb-2">Ma Philosophie</h3>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                    "Le design n'est pas seulement ce à quoi ça ressemble, c'est aussi ce que ça fait. 
                    Chaque pixel a un but, chaque interaction une intention."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section - Optimisé pour mobile */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 md:mb-12">Mon Parcours en Bref</h2>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line - Cachée sur mobile très petit */}
            <div 
              ref={timelineLineRef}
              className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500 transition-all duration-1000 delay-400 origin-top"
              style={{
                opacity: 0,
                transform: 'translateX(-50%) scaleY(0)'
              }}
            ></div>
            
            <div className="space-y-4 md:space-y-8 lg:space-y-12">
              {/* Timeline Item 1 */}
              <div 
                ref={(el) => addToRefs(el, 0)}
                className="relative flex flex-col sm:flex-row items-center"
              >
                {/* Pour mobile: à gauche, pour desktop: alternance */}
                <div className="w-full sm:w-1/2 sm:pr-12 sm:text-right order-1 sm:order-1">
                  <div 
                    className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-700 ease-out ${visibleItems.includes(0) ? 'opacity-100 translate-x-0' : 'sm:opacity-0 sm:-translate-x-8 opacity-100 translate-x-0'}`}
                    style={{ transitionDelay: '100ms' }}
                  >
                    <div className="text-cyan-400 font-semibold mb-1 text-xs sm:text-sm md:text-base">2021</div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">Début de l'Aventure</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Premiers pas dans le développement web, découverte des bases et premiers projets personnels</p>
                  </div>
                </div>
                {/* Point de timeline - Position différente sur mobile */}
                <div 
                  className={`absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-3 h-3 sm:w-4 md:w-6 sm:h-3 sm:h-4 md:h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-2 sm:border-4 border-[#0f172a] transition-all duration-500 ${visibleItems.includes(0) ? 'scale-100 opacity-100' : 'sm:scale-0 sm:opacity-0 scale-100 opacity-100'}`}
                  style={{ transitionDelay: '300ms' }}
                ></div>
                <div className="w-full sm:w-1/2 order-2 sm:order-2"></div>
              </div>

              {/* Timeline Item 2 */}
              <div 
                ref={(el) => addToRefs(el, 1)}
                className="relative flex flex-col sm:flex-row items-center"
              >
                <div className="w-full sm:w-1/2 order-2 sm:order-1"></div>
                {/* Point de timeline */}
                <div 
                  className={`absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-3 h-3 sm:w-4 md:w-6 sm:h-3 sm:h-4 md:h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-2 sm:border-4 border-[#0f172a] transition-all duration-500 ${visibleItems.includes(1) ? 'scale-100 opacity-100' : 'sm:scale-0 sm:opacity-0 scale-100 opacity-100'}`}
                  style={{ transitionDelay: '500ms' }}
                ></div>
                <div className="w-full sm:w-1/2 sm:pl-12 order-1 sm:order-2">
                  <div 
                    className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-700 ease-out ${visibleItems.includes(1) ? 'opacity-100 translate-x-0' : 'sm:opacity-0 sm:translate-x-8 opacity-100 translate-x-0'}`}
                    style={{ transitionDelay: '300ms' }}
                  >
                    <div className="text-cyan-400 font-semibold mb-1 text-xs sm:text-sm md:text-base">2022</div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">Spécialisation Frontend</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Approfondissement de React et Next.js, premiers projets clients et focus sur l'UX/UI</p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div 
                ref={(el) => addToRefs(el, 2)}
                className="relative flex flex-col sm:flex-row items-center"
              >
                <div className="w-full sm:w-1/2 sm:pr-12 sm:text-right order-1 sm:order-1">
                  <div 
                    className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-700 ease-out ${visibleItems.includes(2) ? 'opacity-100 translate-x-0' : 'sm:opacity-0 sm:-translate-x-8 opacity-100 translate-x-0'}`}
                    style={{ transitionDelay: '500ms' }}
                  >
                    <div className="text-cyan-400 font-semibold mb-1 text-xs sm:text-sm md:text-base">2023</div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">Devenir Full-Stack</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Expansion vers le backend, gestion de bases de données et architecture complète</p>
                  </div>
                </div>
                {/* Point de timeline */}
                <div 
                  className={`absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-3 h-3 sm:w-4 md:w-6 sm:h-3 sm:h-4 md:h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-2 sm:border-4 border-[#0f172a] transition-all duration-500 ${visibleItems.includes(2) ? 'scale-100 opacity-100' : 'sm:scale-0 sm:opacity-0 scale-100 opacity-100'}`}
                  style={{ transitionDelay: '700ms' }}
                ></div>
                <div className="w-full sm:w-1/2 order-2 sm:order-2"></div>
              </div>

              {/* Timeline Item 4 */}
              <div 
                ref={(el) => addToRefs(el, 3)}
                className="relative flex flex-col sm:flex-row items-center"
              >
                <div className="w-full sm:w-1/2 order-2 sm:order-1"></div>
                {/* Point de timeline */}
                <div 
                  className={`absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-3 h-3 sm:w-4 md:w-6 sm:h-3 sm:h-4 md:h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-2 sm:border-4 border-[#0f172a] transition-all duration-500 ${visibleItems.includes(3) ? 'scale-100 opacity-100' : 'sm:scale-0 sm:opacity-0 scale-100 opacity-100'}`}
                  style={{ transitionDelay: '900ms' }}
                ></div>
                <div className="w-full sm:w-1/2 sm:pl-12 order-1 sm:order-2">
                  <div 
                    className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-700 ease-out ${visibleItems.includes(3) ? 'opacity-100 translate-x-0' : 'sm:opacity-0 sm:translate-x-8 opacity-100 translate-x-0'}`}
                    style={{ transitionDelay: '700ms' }}
                  >
                    <div className="text-cyan-400 font-semibold mb-1 text-xs sm:text-sm md:text-base">2024 - Présent</div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">Perfectionnement & Innovation</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Focus sur les performances, les animations avancées et les nouvelles technologies</p>
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