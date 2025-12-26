import React from 'react'
import Hero from './Hero/Hero'
import About from '@/components/Home/About/About'
import Services from '@/components/Home/Services/Services'
import Skills from '@/components/Home/Skills/Skills'
import Contact from '@/components/Home/Contact/Contact'
import Footer from '@/components/Home/Footer/Footer'

function Home() {
  return (
    <div className='overflow-hidden'>
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
    </div>
  )
}

export default Home