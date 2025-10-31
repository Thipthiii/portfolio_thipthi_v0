import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "Drowsy Driver Detector",
      description:
        "A real-time driver drowsiness detection system built using Assembly Language. This project implements efficient image processing algorithms to detect driver fatigue indicators through eye-tracking and facial feature analysis.",
      tech: ["Assembly Language", "Image Processing", "Real-time Detection"],
      image: "/man-driving-car.jpg",
      highlight: true,
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">My Projects</h2>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-background rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="h-64 md:h-80 bg-muted/50 relative overflow-hidden flex items-center justify-center">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-between">
                  {project.highlight && (
                    <span className="inline-block w-fit px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                      Featured Project
                    </span>
                  )}

                  <div className="space-y-6 flex-1">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-lg border border-accent/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-fit mt-6 rounded-lg bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-shadow">
                    View Project →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
