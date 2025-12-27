"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import ClickSpark from '@/components/Effets/ClickSpark';

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
      <div className="relative container mx-auto px-20 sm:px- py-8 md:py-8 max-w-6xl">
        {/* Header Section - Réduit */}
        <div className={`text-center mb-6 md:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
            <div className="w-6 md:w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            <span className="text-cyan-400 font-semibold tracking-wider text-xs md:text-base">A PROPOS</span>
            <div className="w-6 md:w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
            Qui suis<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">-je</span> ?
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-2 md:px-4">
            Passionné par la création d'expériences digitales qui marquent les esprits
          </p>
        </div>

        {/* Main Content - Layout ajusté */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 items-start mb-5 md:mb-16">
          {/* Left Column - Photo - Réduite */}
          <div className={`space-y-3 md:space-y-4.5 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Profile Image Card - Plus compacte */}
            <div className="relative group">
              <div className={`absolute -inset-1 md:-inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg md:rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500 ${isVisible ? 'scale-100' : 'scale-95'}`}></div>
              <div className="relative rounded-lg md:rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                {/* Container avec ratio d'aspect réduit */}
                <div className="relative w-full" style={{ paddingBottom: '85%' }}>
                  <Image
                    src="/images/moi2.png"
                    alt="Image de Tafita"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 40vw, 33vw"
                  />
                </div>
                {/* Nom superposé - Plus compact */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-2 sm:p-3 md:p-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">Ravelonarivo Tafita</h3>
                  <p className="text-cyan-400 font-medium text-xs sm:text-sm mt-0.5">Développeur Full-Stack</p>
                </div>
              </div>
            </div>

            {/* Quick Facts - Plus compact */}
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-2 md:p-3 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400 mb-0.5">1+</div>
                <div className="text-xs md:text-sm text-gray-400">Années d'expérience</div>
              </div>
              <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-2 md:p-3 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400 mb-0.5">10+</div>
                <div className="text-xs md:text-sm text-gray-400">Projets réalisés</div>
              </div>
            </div>
          </div>

          {/* Right Column - Story - Cards réduites */}
          <div className={`space-y-3 md:space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Histoire Card - Réduite */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-11">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
                <span className="w-3 md:w-4 h-0.5 bg-cyan-500"></span>
                Mon Histoire
              </h2>
              
              <div className="space-y-2 md:space-y-4">
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

          </div>
        </div>

        {/* Timeline Section - Optimisé et réduit */}
        <div className="mb-8 md:mb-16">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4 md:mb-8">Mon Parcours en Bref</h2>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line - Cachée sur mobile très petit */}
            <div 
              ref={timelineLineRef}
              className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500 transition-all duration-1000 delay-400 origin-top"
              style={{
                opacity: 0,
                transform: 'translateX(-50%) scaleY(0)'
              }}
            ></div>
            
            {/* Espacement réduit entre les items */}
            <div className="space-y-3 md:space-y-6 lg:space-y-8">
              {/* Timeline Item 1 */}
              <div 
                ref={(el) => addToRefs(el, 0)}
                className="relative flex flex-col sm:flex-row items-center"
              >
                <div className="w-full sm:w-1/2 sm:pr-8 sm:text-right order-1 sm:order-1">
                  <div 
                    className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 md:p-4 transition-all duration-700 ease-out ${visibleItems.includes(0) ? 'opacity-100 translate-x-0' : 'sm:opacity-0 sm:-translate-x-8 opacity-100 translate-x-0'}`}
                    style={{ transitionDelay: '100ms' }}
                  >
                    <div className="text-cyan-400 font-semibold mb-1 text-xs sm:text-sm">2021</div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1">Début de l'Aventure</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Premiers pas dans le développement web</p>
                  </div>
                </div>
                {/* Point de timeline - Réduit */}
                <div 
                  className={`absolute left-3 sm:left-1/2 transform sm:-translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-2 sm:border-3 border-[#0f172a] transition-all duration-500 ${visibleItems.includes(0) ? 'scale-100 opacity-100' : 'sm:scale-0 sm:opacity-0 scale-100 opacity-100'}`}
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
                {/* Point de timeline - Réduit */}
                <div 
                  className={`absolute left-3 sm:left-1/2 transform sm:-translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-2 sm:border-3 border-[#0f172a] transition-all duration-500 ${visibleItems.includes(1) ? 'scale-100 opacity-100' : 'sm:scale-0 sm:opacity-0 scale-100 opacity-100'}`}
                  style={{ transitionDelay: '500ms' }}
                ></div>
                <div className="w-full sm:w-1/2 sm:pl-8 order-1 sm:order-2">
                  <div 
                    className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 md:p-4 transition-all duration-700 ease-out ${visibleItems.includes(1) ? 'opacity-100 translate-x-0' : 'sm:opacity-0 sm:translate-x-8 opacity-100 translate-x-0'}`}
                    style={{ transitionDelay: '300ms' }}
                  >
                    <div className="text-cyan-400 font-semibold mb-1 text-xs sm:text-sm">2022</div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1">Spécialisation Frontend</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Approfondissement de React et Next.js</p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div 
                ref={(el) => addToRefs(el, 2)}
                className="relative flex flex-col sm:flex-row items-center"
              >
                <div className="w-full sm:w-1/2 sm:pr-8 sm:text-right order-1 sm:order-1">
                  <div 
                    className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 md:p-4 transition-all duration-700 ease-out ${visibleItems.includes(2) ? 'opacity-100 translate-x-0' : 'sm:opacity-0 sm:-translate-x-8 opacity-100 translate-x-0'}`}
                    style={{ transitionDelay: '500ms' }}
                  >
                    <div className="text-cyan-400 font-semibold mb-1 text-xs sm:text-sm">2023</div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1">Devenir Full-Stack</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Expansion vers le backend et bases de données</p>
                  </div>
                </div>
                {/* Point de timeline - Réduit */}
                <div 
                  className={`absolute left-3 sm:left-1/2 transform sm:-translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-2 sm:border-3 border-[#0f172a] transition-all duration-500 ${visibleItems.includes(2) ? 'scale-100 opacity-100' : 'sm:scale-0 sm:opacity-0 scale-100 opacity-100'}`}
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
                {/* Point de timeline - Réduit */}
                <div 
                  className={`absolute left-3 sm:left-1/2 transform sm:-translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-2 sm:border-3 border-[#0f172a] transition-all duration-500 ${visibleItems.includes(3) ? 'scale-100 opacity-100' : 'sm:scale-0 sm:opacity-0 scale-100 opacity-100'}`}
                  style={{ transitionDelay: '900ms' }}
                ></div>
                <div className="w-full sm:w-1/2 sm:pl-8 order-1 sm:order-2">
                  <div 
                    className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 md:p-4 transition-all duration-700 ease-out ${visibleItems.includes(3) ? 'opacity-100 translate-x-0' : 'sm:opacity-0 sm:translate-x-8 opacity-100 translate-x-0'}`}
                    style={{ transitionDelay: '700ms' }}
                  >
                    <div className="text-cyan-400 font-semibold mb-1 text-xs sm:text-sm">2024 - Présent</div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1">Perfectionnement & Innovation</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Focus sur performances et animations avancées</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      </ClickSpark>

    </div>
  );
}

export default About;