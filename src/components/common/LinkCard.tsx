import { ExternalLink } from 'lucide-react'
import type { LinkItem } from '../../types/link'

interface LinkCardProps {
  item: LinkItem
}

export function LinkCard({ item }: LinkCardProps) {
  const isDisabled = !item.url

  const className =
    'group flex w-full items-center justify-between gap-3 rounded-xl border border-stone-200/80 bg-white px-4 py-3.5 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 active:scale-[0.99] dark:border-stone-700/80 dark:bg-stone-900 dark:hover:border-stone-600 dark:focus-visible:outline-stone-100'

  const content = (
    <>
      <span className="min-w-0 flex-1 text-sm font-medium text-stone-900 transition-colors duration-300 group-hover:text-stone-950 dark:text-stone-100 dark:group-hover:text-white sm:text-base">
        {item.title}
      </span>
      <ExternalLink
        className="size-4 shrink-0 text-stone-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-stone-600 dark:text-stone-500 dark:group-hover:text-stone-300"
        aria-hidden="true"
      />
    </>
  )

  if (isDisabled) {
    return (
      <span
        aria-disabled="true"
        className={`${className} cursor-not-allowed opacity-50 hover:translate-y-0 hover:shadow-sm`}
      >
        {content}
      </span>
    )
  }

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {content}
    </a>
  )
}
