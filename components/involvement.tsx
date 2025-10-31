export default function Involvement() {
  const clubs = [
    {
      name: "IEEE WIE",
      fullForm: "Institute of Electrical and Electronics Engineers - Women in Engineering",
      description: "Active member contributing to women empowerment in tech and engineering.",
    },
    {
      name: "Cyscom",
      fullForm: "Cybersecurity Community",
      description: "Engaged in cybersecurity awareness and learning initiatives.",
    },
    {
      name: "Tamil Club",
      fullForm: "Cultural and Language Preservation",
      description: "Promoting Tamil language and cultural heritage on campus.",
    },
    {
      name: "YUVA Club",
      description: "Contributing to youth development and community values.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">Club Involvement</h2>

        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          As a team player and extrovert, I'm an active member of multiple clubs in my university:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {clubs.map((club, idx) => (
            <div
              key={idx}
              className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition-all group"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {club.name}
                </h3>
                {club.fullForm && <p className="text-sm text-muted-foreground italic">{club.fullForm}</p>}
                <p className="text-muted-foreground leading-relaxed">{club.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
