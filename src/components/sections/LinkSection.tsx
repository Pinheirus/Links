import { FolderOpen } from 'lucide-react'
import type { LinkCategory } from '../../types/link'
import { LinkCard } from '../common/LinkCard'

interface LinkSectionProps {
  category: LinkCategory
  index: number
}

export function LinkSection({ category, index }: LinkSectionProps) {
  return (
    <section
      aria-labelledby={`section-${category.id}`}
      className="animate-fade-in-up w-full rounded-2xl border border-stone-200/60 bg-white/60 p-5 shadow-sm backdrop-blur-sm transition-colors duration-300 dark:border-stone-800/80 dark:bg-stone-900/40 sm:p-6"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <header className="mb-4 flex items-center gap-3 border-b border-stone-200/80 pb-4 dark:border-stone-700/80">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-amber-100/80 text-amber-700 transition-colors duration-300 dark:bg-amber-950/50 dark:text-amber-400">
          <FolderOpen className="size-5" aria-hidden="true" />
        </span>
        <h2
          id={`section-${category.id}`}
          className="text-lg font-semibold tracking-tight text-stone-900 dark:text-stone-50 sm:text-xl"
        >
          {category.title}
        </h2>
      </header>

      <ul className="flex flex-col gap-2.5">
        {category.items.map((item) => (
          <li key={`${category.id}-${item.id}`}>
            <LinkCard item={item} />
          </li>
        ))}
      </ul>
    </section>
  )
}
