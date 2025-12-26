"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { id: 1, label: "Home", url: "/", sectionId: "home" },
  { id: 2, label: "About", url: "/#about", sectionId: "about" },
  { id: 3, label: "Services", url: "/#services", sectionId: "services" },
  { id: 4, label: "Skills", url: "/#skills", sectionId: "skills" },
  { id: 5, label: "Projects", url: "/#projects", sectionId: "projects" },
  { id: 6, label: "Contact", url: "/#contact", sectionId: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(pathname === "/");
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      // Gestion du scroll pour l'effet visuel
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Détection de la section active seulement sur la page d'accueil
      if (isHomePage) {
        const sections = navLinks.map(link => link.sectionId).filter(id => id !== "home");
        const scrollPosition = window.scrollY + 100;
        let foundActive = false;

        // Vérifier si on est tout en haut de la page
        if (window.scrollY < 150) {
          setActiveSection("home");
          return;
        }

        // Chercher la section active
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(sectionId);
              foundActive = true;
              break;
            }
          }
        }

        // Si aucune section n'est trouvée, remettre "home"
        if (!foundActive) {
          setActiveSection("");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Réinitialiser activeSection quand on change de page
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection("");
    } else {
      // Sur la page d'accueil, vérifier la position initiale
      setTimeout(() => {
        if (window.scrollY < 150) {
          setActiveSection("home");
        }
      }, 100);
    }
  }, [isHomePage]);

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      setActiveSection("home");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = "/";
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[10000] transition-all duration-500 ${
        scrolled 
          ? "backdrop-blur-md bg-white/5" 
          : "backdrop-blur-sm"
      }`}
    >
      <div className="relative flex items-center justify-between w-[90%] mx-auto px-6 py-5">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center space-x-4 z-10 hover:opacity-80 transition-opacity focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8"
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
          <div className="text-white text-xl font-bold hidden sm:block">
            Tafita
          </div>
        </button>

        {/* Menu centré */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-12">
          {navLinks.map((link) => {
            const isActive = isHomePage 
              ? (link.sectionId === "home" 
                  ? activeSection === "home" || (activeSection === "" && window.scrollY < 150)
                  : activeSection === link.sectionId)
              : pathname === link.url.replace(/#.*$/, '');

            return (
              <button
                key={link.id}
                onClick={() => {
                  if (link.sectionId === "home" && isHomePage) {
                    setActiveSection("home");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    scrollToSection(link.sectionId);
                  }
                }}
                className="relative group focus:outline-none"
              >
                <span className={`
                  relative text-lg font-medium transition-all duration-300
                  ${isActive 
                    ? "text-white" 
                    : "text-gray-300 hover:text-white"
                  }
                `}>
                  {link.label}
                </span>
                
                {/* Effet de soulignement */}
                <span className={`
                  absolute -bottom-1 left-0 w-0 h-0.5 bg-white
                  transition-all duration-300 group-hover:w-full
                  ${isActive ? "w-full" : ""}
                `}></span>
              </button>
            );
          })}
        </div>

        {/* Espace vide à droite */}
        <div className="w-8"></div>
      </div>
    </nav>
  );
}