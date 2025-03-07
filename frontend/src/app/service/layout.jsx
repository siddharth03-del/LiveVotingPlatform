'use client'
import { AppContextProvider } from "@/Context/appContext";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import "../globals.css";
import BreadCrumbDashboard from "@/components/atoms/breadCrumb";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
const queryClient = new QueryClient();
export default function Layout({ children }) {
  return (
    <div>
      <div>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <QueryClientProvider client={queryClient}>
          <AppContextProvider>
            <main>
              <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                  <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <BreadCrumbDashboard />
                  </header>
                  <div className="flex flex-1 flex-col gap-4 p-4">
                    {children}
                  </div>
                </SidebarInset>
              </SidebarProvider>
            </main>
            <Toaster/>
          </AppContextProvider>
        </QueryClientProvider>
      </div>
    </div>
  );
}
