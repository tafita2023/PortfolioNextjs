"use client";

import React from 'react'
import Hero from './Hero/Hero'
import About from '@/components/Home/About/About'
import Services from '@/components/Home/Services/Services'
import Skills from '@/components/Home/Skills/Skills'
import Contact from '@/components/Home/Contact/Contact'
import Footer from '@/components/Home/Footer/Footer'
import ClickSpark from '../Effets/ClickSpark'

function Home() {
  return (
    <div className='overflow-hidden'>
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

      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
        <Footer />
    </ClickSpark>

    </div>
  )
}

export default Home