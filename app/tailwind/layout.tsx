import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { TailwindSidebar } from './sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <TailwindSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}