"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Involvement from "@/components/involvement"
import PersonalTraits from "@/components/personal-traits"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Involvement />
        <PersonalTraits />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
