"use client";

import React from 'react';
import ClickSpark from '@/components/Effets/ClickSpark';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white border-t border-white/10">
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

      {/* Effet de fond */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto py-4">

        {/* Copyright et mentions légales */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-500 text-sm">
            © {currentYear} Ravelonarivo Tafitasoa. Tous droits réservés.
          </div>
          
          <div className="flex items-center space-x-6 text-gray-500 text-sm">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 hover:text-cyan-400 transition-colors group"
              aria-label="Retour en haut"
            >
              <span>Retour en haut</span>
              <div className="p-1 bg-white/5 rounded group-hover:bg-cyan-500/10 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        
      </div>
      </ClickSpark>
    </footer>
  );
}

export default Footer;