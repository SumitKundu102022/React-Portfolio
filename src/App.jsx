import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tech from './components/Tech';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Education from './components/Education';
import { Toaster} from "sonner";

const App = () => {
  return (
    <>
      <div className=" text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <Toaster position="top-right" />
        <Navbar />
        <div className="container mx-auto px-8 overflow-x-hidden">
          <section id="home" className="">
            <Hero />
          </section>
          <section id="about" className="scroll-mt-40">
            <About />
          </section>
          {/* <About /> */}
          <Tech />
          {/* <Education/> */}
          <section id="education" className="scroll-mt-40">
            <Education />
          </section>
          {/* <Experience />
          <Project /> */}
          <section id="experience" className="scroll-mt-40">
            <Experience />
          </section>
          <section id="projects" className="scroll-mt-40">
            <Project />
          </section>
          <section id="contact" className="scroll-mt-40">
            <Contact />
          </section>
          <ContactForm />
          {/* <Contact /> */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App