"use client";

import React from 'react';

function Contact() {
  return (
    <div id="contact" className="min-h-screen px-4 mb-4 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Titre */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mt-2 mb-5">
            <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            <span className="text-cyan-400 font-semibold tracking-wider text-sm">CONTACT</span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Travaillons <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">ensemble</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
            Discutons de votre projet et créons quelque chose d'extraordinaire
          </p>
        </div>

        {/* Contenu sur une seule colonne centrée */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            {/* Informations de contact */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 mb-6">
              <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                <div className="w-6 h-0.5 bg-cyan-500"></div>
                Informations de contact
              </h2>
              
              <div className="space-y-4">
                {/* Téléphone */}
                <a
                  href="tel:+261344718839"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5 text-cyan-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base mb-1">Téléphone</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">+261 34 47 188 39</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:ravelonarivotafitasoa@gmail.com"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5 text-cyan-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base mb-1">Email</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">ravelonarivotafitasoa@gmail.com</p>
                  </div>
                </a>

                {/* Localisation */}
                <div className="flex items-start gap-3 p-3 rounded-lg">
                  <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg">
                    <svg className="w-5 h-5 text-cyan-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base mb-1">Localisation</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Antananarivo, Madagascar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Disponibilité */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold mb-3">Disponibilité</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between py-1 border-b border-white/10">
                  <span className="text-gray-400 text-xs sm:text-sm">Statut</span>
                  <span className="inline-flex items-center gap-1 text-xs sm:text-sm">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    Disponible
                  </span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-gray-400 text-xs sm:text-sm">Réponse</span>
                  <span className="text-cyan-400 text-xs sm:text-sm">Sous 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;