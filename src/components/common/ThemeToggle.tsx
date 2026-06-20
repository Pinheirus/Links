import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="fixed top-4 right-4 flex size-10 items-center justify-center rounded-full border border-stone-200/80 bg-white/90 text-stone-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-stone-300 hover:text-stone-900 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 dark:border-stone-700/80 dark:bg-stone-900/90 dark:text-stone-300 dark:hover:border-stone-600 dark:hover:text-stone-100 dark:focus-visible:outline-stone-100"
    >
      {theme === 'dark' ? (
        <Sun className="size-4" aria-hidden="true" />
      ) : (
        <Moon className="size-4" aria-hidden="true" />
      )}
    </button>
  )
}
