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
	useSidebar,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'

import { routeEnums } from './enum'
import { cn, findMatchedRoutes } from '@/lib/utils'

export default function Page({ children }) {
	const pathname = usePathname()
	const matched = findMatchedRoutes(routeEnums, pathname).map(item => item.title)
	const total = matched.length

  return (
    <SidebarProvider>
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
				<Container>{ children }</Container>
      </SidebarInset>
    </SidebarProvider>
  )
}

// w-full 和 max-w-[calc(100vw_-_var(--sidebar-width))] 根据侧边栏是否显示动态设置
function Container({ children }) {
	const { isMobile, open } = useSidebar()
	const flat = isMobile ? true : !open // mobile始终视作true 因为mobile端sidebar不占容器宽度 是fixed布局
	return (
		<div className={cn('w-full p-4 transition-[max-width] duration-300 ease-in-out', flat ? 'max-w-full' : 'max-w-[calc(100vw_-_var(--sidebar-width))]')}>
			{ children }
		</div>
	)
}
