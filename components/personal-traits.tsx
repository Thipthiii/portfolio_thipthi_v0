export default function PersonalTraits() {
  const traits = [
    {
      name: "Analytical",
      bg: "bg-blue-50 dark:bg-blue-950/30",
      border: "border-blue-500",
      text: "text-blue-700 dark:text-blue-300",
    },
    {
      name: "Resilient",
      bg: "bg-pink-50 dark:bg-pink-950/30",
      border: "border-pink-500",
      text: "text-pink-700 dark:text-pink-300",
    },
    {
      name: "Collaborative",
      bg: "bg-green-50 dark:bg-green-950/30",
      border: "border-green-500",
      text: "text-green-700 dark:text-green-300",
    },
    {
      name: "Approachable",
      bg: "bg-purple-50 dark:bg-purple-950/30",
      border: "border-purple-500",
      text: "text-purple-700 dark:text-purple-300",
    },
    {
      name: "Supportive",
      bg: "bg-orange-50 dark:bg-orange-950/30",
      border: "border-orange-500",
      text: "text-orange-700 dark:text-orange-300",
    },
    {
      name: "Communicator",
      bg: "bg-red-50 dark:bg-red-950/30",
      border: "border-red-500",
      text: "text-red-700 dark:text-red-300",
    },
    {
      name: "Problem Solver",
      bg: "bg-indigo-50 dark:bg-indigo-950/30",
      border: "border-indigo-500",
      text: "text-indigo-700 dark:text-indigo-300",
    },
    {
      name: "Optimistic",
      bg: "bg-yellow-50 dark:bg-yellow-950/30",
      border: "border-yellow-500",
      text: "text-yellow-700 dark:text-yellow-300",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">Personal Traits</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {traits.map((trait, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 md:p-8 border-2 text-center font-bold text-lg cursor-default transition-all duration-300 hover:scale-105 ${trait.bg} ${trait.border} ${trait.text}`}
            >
              {trait.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
