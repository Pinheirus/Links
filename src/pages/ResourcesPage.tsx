import { GraduationCap } from 'lucide-react'
import { LinkSection } from '../components/sections/LinkSection'
import { ThemeToggle } from '../components/common/ThemeToggle'
import {
  PAGE_DESCRIPTION,
  PAGE_TITLE,
} from '../data/links'
import { useResourceCategories } from '../hooks/useLinks'

export function ResourcesPage() {
  const categories = useResourceCategories()

  return (
    <div className="relative min-h-svh bg-stone-50 px-4 py-12 transition-colors duration-300 dark:bg-stone-950 sm:px-6 sm:py-16">
      <ThemeToggle />

      <main className="mx-auto flex w-full max-w-lg flex-col items-center gap-8">
        <header className="animate-fade-in-up flex flex-col items-center gap-4 text-center">
          <span className="flex size-16 items-center justify-center rounded-full bg-stone-200/80 text-stone-700 shadow-sm transition-colors duration-300 dark:bg-stone-800 dark:text-stone-200">
            <GraduationCap className="size-8" aria-hidden="true" />
          </span>

          <h1 className="text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-50 sm:text-4xl">
            {PAGE_TITLE}
          </h1>

          <p className="max-w-sm text-sm leading-relaxed text-stone-600 dark:text-stone-400 sm:text-base">
            {PAGE_DESCRIPTION}
          </p>
        </header>

        <div className="flex w-full flex-col gap-6">
          {categories.map((category, index) => (
            <LinkSection
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>

        <footer className="pt-2 text-xs text-stone-500">
          Anatomia final com o {' '}
          <code className="rounded bg-stone-200/70 px-1.5 py-0.5 font-mono text-stone-700 dark:bg-stone-800 dark:text-stone-300">
            Dr. Abrahan Hauf
          </code>
        </footer>
      </main>
    </div>
  )
}
