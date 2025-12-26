"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
    { id: 1, label: "Home", url: "/", sectionId: "home" },
    { id: 2, label: "About", url: "/#about", sectionId: "about" },
    { id: 3, label: "Services", url: "/#services", sectionId: "services" },
    { id: 4, label: "Skills", url: "/#skills", sectionId: "skills" },
    { id: 5, label: "Projects", url: "/#projects", sectionId: "projects" },
    { id: 6, label: "Contact", url: "/#contact", sectionId: "contact" },
];

export default function NavbarMobile() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  // Vérifier si on est côté client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Gestion du scroll et détection de la section active
  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Détection de la section active sur la page d'accueil
      if (pathname === "/") {
        const sections = navLinks.map(link => link.sectionId).filter(id => id !== "home");
        const scrollPosition = window.scrollY + 100;
        let foundActive = false;

        // Si on est tout en haut, section "home"
        if (window.scrollY < 150) {
          setActiveSection("home");
          return;
        }

        // Recherche de la section visible
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

        if (!foundActive) {
          setActiveSection("");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, isClient]);

  // Fermer le menu quand on clique en dehors
  useEffect(() => {
    if (!isClient || !menuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      // Si on clique sur le bouton burger, ne pas fermer (il gère déjà son propre toggle)
      if (burgerRef.current && burgerRef.current.contains(event.target as Node)) {
        return;
      }
      
      // Si on clique à l'intérieur du menu, ne pas fermer
      if (menuRef.current && menuRef.current.contains(event.target as Node)) {
        return;
      }
      
      // Sinon, fermer le menu
      setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, isClient]);

  // Empêcher le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (!isClient) return;
    
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen, isClient]);

  // Fermer le menu quand on clique sur un lien
  const handleLinkClick = (sectionId: string) => {
    setMenuOpen(false);
    
    if (pathname === "/" && isClient) {
      // Scroll vers la section sur la page d'accueil
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      
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
    }
  };

  const handleLogoClick = () => {
    if (!isClient) return;
    
    if (pathname === "/") {
      setActiveSection("home");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = "/";
    }
    setMenuOpen(false);
  };

  const handleBurgerClick = () => {
    if (!isClient) return;
    setMenuOpen(!menuOpen);
  };

  // Fonction pour déterminer si un lien est actif
  const getIsActive = (link: typeof navLinks[0]) => {
    if (!isClient) return false;
    
    if (pathname === "/") {
      if (link.sectionId === "home") {
        return activeSection === "home" || (activeSection === "" && scrollY < 150);
      }
      return activeSection === link.sectionId;
    }
    
    return pathname === link.url.replace(/#.*$/, '');
  };

  // Réinitialiser activeSection quand on change de page
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
    }
  }, [pathname]);

  return (
    <nav
      className={`lg:hidden fixed top-0 left-0 w-full z-[10000] transition-all duration-300 ${
        scrolled || menuOpen
          ? "backdrop-blur-md bg-gray-900/80 border-b border-white/10" 
          : "backdrop-blur-sm bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-[90%] mx-auto py-5 px-4">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center space-x-3 focus:outline-none"
          disabled={!isClient}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-7 h-7 sm:w-8 sm:h-8"
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
          <div className="text-white text-lg sm:text-xl font-bold">Tafita</div>
        </button>

        {/* Burger icon */}
        <button
          ref={burgerRef}
          onClick={handleBurgerClick}
          className="text-white focus:outline-none p-2 transition-all duration-300 hover:bg-white/10 rounded-lg relative z-[10001]"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          disabled={!isClient}
        >
          {menuOpen ? (
            // SVG pour fermer le menu
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 sm:w-7 sm:h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
          ) : (
            // SVG burger menu
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 sm:w-7 sm:h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" d="M5 7h14M5 12h14M5 17h10"/>
            </svg>          
          )}
        </button>
      </div>

      {/* Menu mobile animé */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 top-0 left-0 w-full h-screen z-[9999]"
          style={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
          }}
        >
          {/* Contenu du menu */}
          <div className="relative h-full flex flex-col items-center justify-center">
            <div className="space-y-6 sm:space-y-8 text-center px-4">
              {navLinks.map((link) => {
                const isActive = getIsActive(link);
                
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.sectionId)}
                    className={`block text-2xl sm:text-3xl font-medium transition-all duration-300 ${
                      isActive 
                        ? "text-white scale-105" 
                        : "text-gray-300 hover:text-white hover:scale-105"
                    }`}
                    style={{
                      animation: menuOpen 
                        ? `fadeInUp 0.5s ease ${link.id * 0.05}s forwards` 
                        : 'none',
                    }}
                    disabled={!isClient}
                  >
                    {link.label}
                    {isActive && (
                      <div className="mx-auto mt-2 w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                    )}
                  </button>
                );
              })}

            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}