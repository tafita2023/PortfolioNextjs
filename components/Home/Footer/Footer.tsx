"use client";

import React from 'react';
import Link from 'next/link';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white border-t border-white/10">
      {/* Effet de fond */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-10 h-10"
                >
                  <circle cx="12" cy="12" r="12" fill="#FCF8F8" />
                  <path
                    d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                    stroke="#1B211A"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
                <div className="absolute -inset-2 bg-cyan-500/20 blur-md rounded-full -z-10"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Tafita
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Développeur Full-Stack passionné par la création d'expériences digitales exceptionnelles.
            </p>
          </div>

          {/* Liens rapides */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <span className="w-6 h-0.5 bg-cyan-500 mr-3"></span>
              Navigation
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'À propos', href: '/#about' },
                { name: 'Services', href: '/#services' },
                { name: 'Projets', href: '/#projects' },
                { name: 'Compétences', href: '/#skills' },
                { name: 'Contact', href: '/#contact' }
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact et réseaux */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <span className="w-6 h-0.5 bg-blue-500 mr-3"></span>
              Connectons-nous
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@tafita.dev"
                className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors group"
              >
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-cyan-500/10 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm">contact@tafita.dev</span>
              </a>
              <div className="flex space-x-4 pt-2">
                {[
                  { name: 'GitHub', href: 'https://github.com', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
                  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                  { name: 'Twitter', href: 'https://twitter.com', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-lg hover:bg-cyan-500/10 transition-colors group"
                    aria-label={social.name}
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24">
                      <path fill="currentColor" d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="my-8 border-t border-white/10"></div>

        {/* Copyright et mentions légales */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-500 text-sm">
            © {currentYear} Tafita. Tous droits réservés.
          </div>
          
          <div className="flex items-center space-x-6 text-gray-500 text-sm">
            <Link href="/mentions-legales" className="hover:text-cyan-400 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-cyan-400 transition-colors">
              Politique de confidentialité
            </Link>
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

        {/* Signature discrète */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-600">
            Conçu et développé avec ❤️ par Tafita • Construit avec Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;