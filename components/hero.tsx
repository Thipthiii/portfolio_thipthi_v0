import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Top right blur */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-cyan-400/30 to-blue-500/20 rounded-full blur-3xl"></div>
        {/* Bottom left blur */}
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-tr from-purple-400/20 to-cyan-400/10 rounded-full blur-3xl"></div>
        {/* Middle right blur */}
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-gradient-to-l from-blue-400/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        <div className="space-y-6 md:space-y-8">
          <div className="flex justify-center mb-8">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              {/* Gradient border ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 p-1.5 shadow-2xl">
                <img
                  src="/profile.png"
                  alt="V Thipthi Shree"
                  className="w-full h-full rounded-full object-cover border-4 border-white dark:border-slate-900"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground">
              <span className="text-blue-900 dark:text-blue-100">V Thipthi</span>
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-pink-500 via-teal-500 to-blue-900 dark:from-pink-400 dark:via-teal-400 dark:to-blue-200 bg-clip-text text-transparent">
              Shree
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-primary pt-4">Aspiring Full Stack Developer</p>
          </div>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful, interactive digital experiences. 2nd-year CSE student at VIT Chennai, passionate about
            building the future with technology and creativity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href="#projects">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-lg bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-shadow"
              >
                View My Work →
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-lg bg-transparent">
                Get In Touch
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
