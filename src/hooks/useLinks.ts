import { useMemo } from 'react'
import { categories as staticCategories } from '../data/links'
import type { LinkCategory } from '../types/link'

/**
 * Central hook for category data. Replace the static import with API calls
 * or local state when adding CRUD / UI-based resource management.
 */
export function useResourceCategories(): LinkCategory[] {
  return useMemo(() => staticCategories, [])
}
