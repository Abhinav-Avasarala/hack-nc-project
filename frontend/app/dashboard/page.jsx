import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";


import { Calendar } from "@/components/ui/calendar";

const data = 
[
  {
    name: "todo",
    title: "dashboard",
    location: "todo",
    start_date: "todo",
    end_date: "todo",
    deadline: "todo",
    icon: Map,
  },
  {
    name: "todo",
    title: "dashboard",
    location: "todo",
    start_date: "todo",
    end_date: "todo",
    deadline: "todo",
    icon: Map,
  },



]
export default function Page() {
  return (
    (<SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header
          className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            {/* <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb> */}
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <h1 className = "pl-1 font-bold">Upcoming Events</h1>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-md bg-muted/50">
                  <Card>
                    <CardHeader>
                      <CardTitle>Quantitative Finance Meeting</CardTitle>
                      <CardDescription>Club interest meeting for prospective members</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Join our Quant Finance Interest Meeting to explore how math, coding...</p>
                      <p className = "mt-2 text-sm underline"> Jake, Masarith, and 15 others</p>
                    </CardContent>
                  </Card>
              </div>
              <div className="aspect-video rounded-md bg-muted/50">
                  <Card>
                    <CardHeader>
                      <CardTitle>Undergraduate Research Symposium</CardTitle>
                      <CardDescription>Platform for students to present their research</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Join our Undergraduate Research Symposium to explore innovative student research...</p>
                      <p className = "mt-2 text-sm underline"> John, Sagnik, and 4 others</p>
                    </CardContent>
                  </Card>
              </div>
              <Calendar
                mode="single"
                selected={24}
                // onSelect={setDate}
                className="rounded-md border bg-gray"
              />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
              
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>)
  );
}
