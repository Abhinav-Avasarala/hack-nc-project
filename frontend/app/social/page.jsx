import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


import {
    Map
} from "lucide-react";


const projects = [
    { name: "todo", title: "Alice Johnson", location: "todo", start_date: "AJ", end_date: "todo", deadline: "Attending a tech career fair", icon: Map },
    { name: "todo", title: "Bob Smith", location: "todo", start_date: "BS", end_date: "todo", deadline: "Presenting at a research symposium", icon: Map },
    { name: "todo", title: "Charlie Williams", location: "todo", start_date: "CW", end_date: "todo", deadline: "Participating in a coding hackathon", icon: Map },
    { name: "todo", title: "David Brown", location: "todo", start_date: "DB", end_date: "todo", deadline: "Networking at an alumni meetup", icon: Map },
    { name: "todo", title: "Emma Davis", location: "todo", start_date: "ED", end_date: "todo", deadline: "Attending a leadership workshop", icon: Map },
    { name: "todo", title: "Frank Miller", location: "todo", start_date: "FM", end_date: "todo", deadline: "Speaking at a business seminar", icon: Map },
    { name: "todo", title: "Grace Wilson", location: "todo", start_date: "GW", end_date: "todo", deadline: "Joining a panel on AI ethics", icon: Map },
    { name: "todo", title: "Henry Moore", location: "todo", start_date: "HM", end_date: "todo", deadline: "Competing in a case competition", icon: Map },
    { name: "todo", title: "Isabella Taylor", location: "todo", start_date: "IT", end_date: "todo", deadline: "Attending a graduate school info session", icon: Map },
    { name: "todo", title: "Sagnik Saha", location: "todo", start_date: "SS", end_date: "todo", deadline: "Attending a undergraduate networking dinner", icon: Map }

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
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* Grid container */}
            <h1 className="text-2xl font-bold">Friends</h1>
          <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                    key={index}
                    className="w-full aspect-[12/1] h-20 rounded-xl bg-muted/50 flex flex-row items-center justify-start space-x-4 p-2"
                    >
                    {/* Avatar shifted slightly to the left */}
                    <Avatar className="mr-2">
                        <AvatarImage src="https://github.com/shadpng" />
                        <AvatarFallback>{project.start_date}</AvatarFallback>
                    </Avatar>

                    {/* Project name stays in place */}
                    <span className="text-lg font-medium ml-6">{project.title}</span>
                    <span className="text-sm font-small ml-9">{project.deadline}</span>
                </div>


              );
            })}
          </div>

          {/* Additional content */}
          
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
