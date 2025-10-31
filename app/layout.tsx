import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import AnimatedBackground from "@/components/animated-background"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "V Thipthi Shree - Full Stack Developer",
  description:
    "Portfolio of V Thipthi Shree, an aspiring full-stack developer and 2nd-year CSE student at VIT Chennai.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_geist.className} antialiased relative`}>
        <AnimatedBackground />
        {children}
      </body>
    </html>
  )
}
