"use client"

import { useEffect, useState } from "react"

export default function Skills() {
  const [isMounted, setIsMounted] = useState(false)
  const [scrollPos, setScrollPos] = useState(0)

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      setScrollPos(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const programmingSkills = [
    { name: "Java", proficiency: 85, color: "bg-orange-500" },
    { name: "C", proficiency: 75, color: "bg-blue-500" },
    { name: "C++", proficiency: 80, color: "bg-blue-600" },
    { name: "Python", proficiency: 90, color: "bg-yellow-500" },
    { name: "MATLAB", proficiency: 70, color: "bg-red-500" },
    { name: "Verilog", proficiency: 65, color: "bg-purple-500" },
    { name: "Assembly Language", proficiency: 72, color: "bg-indigo-500" },
  ]

  const softSkills = [
    { name: "Adaptability", proficiency: 92, color: "bg-teal-500" },
    { name: "Time Management", proficiency: 88, color: "bg-cyan-500" },
    { name: "Conflict Resolution", proficiency: 85, color: "bg-emerald-500" },
    { name: "Self Motivation", proficiency: 95, color: "bg-green-500" },
    { name: "Problem Solving", proficiency: 90, color: "bg-lime-500" },
    { name: "Collaborative", proficiency: 93, color: "bg-pink-500" },
    { name: "Communicator", proficiency: 87, color: "bg-rose-500" },
    { name: "Analytical", proficiency: 89, color: "bg-fuchsia-500" },
  ]

  const technicalAreas = [
    { name: "Frontend", color: "from-blue-500 to-cyan-500" },
    { name: "Backend", color: "from-purple-500 to-pink-500" },
    { name: "Databases", color: "from-orange-500 to-red-500" },
    { name: "DevOps & Deployment", color: "from-green-500 to-emerald-500" },
  ]

  const SkillBar = ({ name, proficiency, color }: { name: string; proficiency: number; color: string }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-foreground">{name}</span>
        <span className="text-xs font-medium text-muted-foreground">{proficiency}%</span>
      </div>
      <div className="w-full h-3 bg-muted rounded-full overflow-hidden border border-border/50">
        {isMounted && (
          <div
            className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
            style={{
              width: `${proficiency}%`,
            }}
          />
        )}
      </div>
    </div>
  )

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">Skills & Expertise</h2>

        <div className="relative mb-16">
          <div className="relative h-32 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-6 border-2 border-primary/30 dark:border-primary/50 overflow-hidden flex items-center justify-center">
            {/* Animated background glow */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-20 animate-pulse"></div>
            </div>

            {/* Moving carousel of technical areas */}
            <div className="relative w-full overflow-hidden">
              <div
                className="flex gap-6 animate-none"
                style={{
                  animation: `scroll 8s linear infinite`,
                }}
              >
                {[...technicalAreas, ...technicalAreas, ...technicalAreas].map((area, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 px-8 py-4 bg-gradient-to-r ${area.color} rounded-xl font-bold text-white text-center shadow-lg hover:shadow-xl transition-shadow whitespace-nowrap transform hover:scale-110 transition-transform"
                    style={{
                      background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
                      backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                    }}
                  >
                    <div
                      className={`bg-gradient-to-r ${area.color} px-6 py-3 rounded-lg font-bold text-white shadow-md`}
                    >
                      {area.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CSS Animation */}
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-33.333%);
              }
            }
          `}</style>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Programming Skills */}
          <div className="bg-background rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
            <h3 className="text-2xl font-bold text-foreground mb-8">Programming Languages</h3>
            <div className="space-y-6">
              {programmingSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-background rounded-2xl p-8 border border-border hover:border-secondary/50 transition-colors shadow-sm hover:shadow-md">
            <h3 className="text-2xl font-bold text-foreground mb-8">Soft Skills</h3>
            <div className="space-y-6">
              {softSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
