"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Force initial theme to ensure it works in preview
  useEffect(() => {
    const root = document.documentElement
    if (!root.classList.contains("light") && !root.classList.contains("dark")) {
      root.classList.add("light")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" || document.documentElement.classList.contains("dark") ? "light" : "dark"
    setTheme(newTheme)

    // Directly manipulate the DOM for immediate effect in preview
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(newTheme)
  }

  if (!mounted) {
    return null
  }

  return (
    <Button variant="outline" size="icon" className="rounded-full" onClick={toggleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

