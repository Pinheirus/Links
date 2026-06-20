export interface LinkItem {
  id: number
  title: string
  url: string
}

export interface LinkCategory {
  id: string
  title: string
  items: LinkItem[]
}
