export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">About Me</h2>
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                I'm a passionate second-year Computer Science and Engineering student at VIT Chennai with a keen
                interest in full-stack development and emerging technologies.
              </p>
              <p>
                My journey in tech is driven by a desire to solve real-world problems through innovative solutions. I'm
                deeply interested in emerging technologies in the domain of AI. I believe in continuous learning and
                always exploring new horizons.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground text-lg">Education</h3>
                <p className="text-muted-foreground">B.Tech in Computer Science & Engineering</p>
                <p className="text-sm text-muted-foreground/75">VIT Chennai • 2nd Year</p>
              </div>
              <div className="border-t border-primary/20 pt-6 space-y-2">
                <h3 className="font-semibold text-foreground text-lg">Focus Areas</h3>
                <p className="text-muted-foreground">Full Stack Development, AI/ML, Web Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
