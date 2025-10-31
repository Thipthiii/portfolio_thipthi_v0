"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:thipthishree@gmail.com?subject=From ${formData.name}&body=${formData.message}`
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Let's Connect</h2>
            <p className="text-lg text-muted-foreground">
              Have a project or idea? Let's collaborate and create something amazing together!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-foreground mb-3 uppercase tracking-wider">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 bg-input border-2 border-border rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-foreground mb-3 uppercase tracking-wider">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 bg-input border-2 border-border rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-foreground mb-3 uppercase tracking-wider">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-6 py-3 bg-input border-2 border-border rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg hover:shadow-lg transition-shadow"
            >
              GET IN TOUCH
            </Button>
          </form>

          {/* Direct contact */}
          <div className="grid grid-cols-2 gap-4 pt-8 border-t border-border">
            <a
              href="tel:+918148509155"
              className="p-6 bg-muted rounded-2xl text-center hover:bg-primary/10 transition-colors"
            >
              <p className="text-sm text-muted-foreground mb-2">Phone</p>
              <p className="font-bold text-foreground">+91 8148509155</p>
            </a>
            <a
              href="mailto:thipthishree@gmail.com"
              className="p-6 bg-muted rounded-2xl text-center hover:bg-primary/10 transition-colors"
            >
              <p className="text-sm text-muted-foreground mb-2">Email</p>
              <p className="font-semibold text-foreground text-sm md:text-base break-all">thipthishree@gmail.com</p>
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/thipthi-shree-1b2624323/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary/10 hover:bg-primary/20 rounded-lg font-semibold text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Thipthiii"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary/10 hover:bg-primary/20 rounded-lg font-semibold text-primary transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
