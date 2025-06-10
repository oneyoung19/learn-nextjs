'use client'
import { Fragment } from 'react'
import { usePathname } from 'next/navigation'
import { TailwindSidebar } from './sidebar'
import {
  Breadcrumb,
  BreadcrumbItem,
  // BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'

import { routeEnums } from './enum'
import { findMatchedRoutes } from '@/lib/utils'

export default function Page({ children }) {
	const pathname = usePathname()
	const matched = findMatchedRoutes(routeEnums, pathname).map(item => item.title)
	const total = matched.length
  return (
    <SidebarProvider className="max-lg:[--sidebar-width:14rem]!">
      <TailwindSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
								{
									matched.map((match, index) => (
										<Fragment key={match}>
											<BreadcrumbItem className="hidden md:block">
												<BreadcrumbPage>{ match }</BreadcrumbPage>
											</BreadcrumbItem>
											{ (index < total - 1) && <BreadcrumbSeparator className="hidden md:block" /> }
										</Fragment>
									))
								}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
				<div className="p-4 md:max-w-[calc(100vw_-_var(--sidebar-width))]">
					{ children }
				</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
