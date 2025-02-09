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

import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
  } from "lucide-react"


const projects = [
  { name: "todo", title: "dashboard", location: "todo", start_date: "todo", end_date: "todo", deadline: "todo", icon: Map },
  { name: "todo", title: "dashboard", location: "todo", start_date: "todo", end_date: "todo", deadline: "todo", icon: Map },
  { name: "todo", title: "dashboard", location: "todo", start_date: "todo", end_date: "todo", deadline: "todo", icon: Map },
  { name: "todo", title: "dashboard", location: "todo", start_date: "todo", end_date: "todo", deadline: "todo", icon: Map },
  { name: "todo", title: "dashboard", location: "todo", start_date: "todo", end_date: "todo", deadline: "todo", icon: Map },
];

export default function Social() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Events</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* Grid container */}
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="aspect-video rounded-xl bg-muted/50 flex flex-col items-center justify-center"
                >
                  <Icon className="mb-2" size={32} />
                  <span>{project.name}</span>
                </div>
              );
            })}
          </div>

          {/* Additional content */}
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
