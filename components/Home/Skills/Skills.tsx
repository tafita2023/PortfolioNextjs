"use client";

import React from 'react';
import LogoLoop from '@/components/Effets/LogoLoop';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPython,
  SiFigma,
  SiVercel,
  SiFirebase
} from 'react-icons/si';
import ClickSpark from '@/components/Effets/ClickSpark';

const Skills = () => {
  // Préparer les logos pour LogoLoop - format attendu par votre LogoLoop
  const techLogos = [
    {
      node: <SiReact className="w-16 h-16 text-cyan-400" />,
      title: "React",
      href: "https://react.dev"
    },
    {
      node: <SiNextdotjs className="w-16 h-16 text-white" />,
      title: "Next.js",
      href: "https://nextjs.org"
    },
    {
      node: <SiTypescript className="w-16 h-16 text-blue-400" />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org"
    },
    {
      node: <SiTailwindcss className="w-16 h-16 text-cyan-300" />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com"
    },
    {
      node: <SiJavascript className="w-16 h-16 text-yellow-400" />,
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      node: <SiHtml5 className="w-16 h-16 text-orange-500" />,
      title: "HTML5",
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
      node: <SiCss3 className="w-16 h-16 text-blue-500" />,
      title: "CSS3",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
      node: <SiNodedotjs className="w-16 h-16 text-green-500" />,
      title: "Node.js",
      href: "https://nodejs.org"
    },
    {
      node: <SiMongodb className="w-16 h-16 text-green-400" />,
      title: "MongoDB",
      href: "https://mongodb.com"
    },
    {
      node: <SiGit className="w-16 h-16 text-orange-600" />,
      title: "Git",
      href: "https://git-scm.com"
    },
    {
      node: <SiGithub className="w-16 h-16 text-gray-300" />,
      title: "GitHub",
      href: "https://github.com"
    },
    {
      node: <SiPython className="w-16 h-16 text-blue-600" />,
      title: "Python",
      href: "https://python.org"
    },
    {
      node: <SiFigma className="w-16 h-16 text-purple-500" />,
      title: "Figma",
      href: "https://figma.com"
    },
    {
      node: <SiVercel className="w-16 h-16 text-white" />,
      title: "Vercel",
      href: "https://vercel.com"
    },
    {
      node: <SiFirebase className="w-16 h-16 text-yellow-500" />,
      title: "Firebase",
      href: "https://firebase.google.com"
    }
  ];

  // Si vous voulez aussi utiliser des images (optionnel)
  const imageLogos = [
    {
      src: "/logos/react.png",
      alt: "React",
      href: "https://react.dev"
    },
    {
      src: "/logos/nextjs.png",
      alt: "Next.js",
      href: "https://nextjs.org"
    },
    {
      src: "/logos/typescript.png",
      alt: "TypeScript",
      href: "https://www.typescriptlang.org"
    },
  ];

  return (
    <div className="min-h-screen py-6 px-2" id="skills">
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

      {/* Section Titre */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            <span className="text-cyan-400 font-semibold tracking-wider">SKILLS</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
          </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Compétences</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Technologies et outils que j'utilise pour créer des expériences digitales exceptionnelles
        </p>
      </div>

      {/* Logo Loop Horizontal */}
      <div className="mb-20">
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-semibold text-white mb-2">Technologies Principales</h3>
          <p className="text-gray-400">Défilement infini des technologies que je maîtrise</p>
        </div>
        
        <div className="relative h-40 overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={40}
            direction="left"
            logoHeight={64}
            gap={48}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#0f172a"
            ariaLabel="Technologies et compétences"
            className="py-8"
          />
        </div>
      </div>
      </ClickSpark>
    </div>
  );
};

export default Skills;