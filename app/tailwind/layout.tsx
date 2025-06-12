'use client'

import { Fragment, useEffect } from 'react'
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { routeEnums } from './enum'
import { cn, findMatchedRoutes } from '@/lib/utils'
import { Palette } from 'lucide-react'
import { SelectTable } from '@/components/selectTable'
import { useSwitchTwClassStore, SwitchTwClassProvider } from '@/providers/switch-tw-class'

export default function Page({ children }) {
	const pathname = usePathname()
	const matchedRoutes = findMatchedRoutes(routeEnums, pathname)

	const lastMatchedRoutes = matchedRoutes[matchedRoutes.length - 1] || {}
	const { tableMap = {} } = lastMatchedRoutes

	const matched = matchedRoutes.map(item => item.title)
	const total = matched.length

  return (
		<SwitchTwClassProvider>
			<SidebarProvider>
				<TailwindSidebar />
				<SidebarInset>
					<header className="flex justify-between h-16 shrink-0 items-center gap-2 border-b px-4">
						<div className="flex items-center gap-2 h-4">
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
						<div className="flex items-center justify-between">
							<PopoverWithStore {...tableMap}></PopoverWithStore>
						</div>
					</header>
					<Container>{ children }</Container>
				</SidebarInset>
			</SidebarProvider>
		</SwitchTwClassProvider>
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

function PopoverWithStore (props) {
	const { switchTwClass } = useSwitchTwClassStore(
    (state) => state,
  )

	const { rows = [] } = props
	const { twClass = '' } = rows.find(item => item.defaultSelected) || {}
	useEffect(() => {
		switchTwClass({
			switchedTwClass: twClass
		})
	}, [])

	return (
		<Popover>
			<PopoverTrigger>
				<Palette />
			</PopoverTrigger>
			<PopoverContent className="w-auto" align="end">
				<SelectTable {...props} onSelect={value => switchTwClass({
					switchedTwClass: value
				})} defaultSelectValue={twClass}></SelectTable>
			</PopoverContent>
		</Popover>
	)
}
