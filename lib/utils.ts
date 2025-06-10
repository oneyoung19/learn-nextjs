import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type RouteItem = {
  title: string
  url?: string
  items?: RouteItem[]
}

export function findMatchedRoutes(routes: RouteItem[], currentPath: string): RouteItem[] {
  for (const route of routes) {
    if (route.url === currentPath) {
      return [route]
    }

    if (route.items) {
      const matchedChildren = findMatchedRoutes(route.items, currentPath)
      if (matchedChildren.length > 0) {
        return [route, ...matchedChildren]
      }
    }
  }

  return []
}
