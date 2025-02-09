"use client";
import axios from 'axios';
import React, { useEffect, useState } from "react";
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
  Search, // Import the Search icon from lucide-react
} from "lucide-react";

const projects = [
  {
    name: "todo",
    website: "dashboard",
    email: "todo",
    description: "todo",
    type: "todo",
    icon: Map,
  },
  {
    name: "todo",
    website: "dashboard",
    email: "todo",
    description: "todo",
    type: "todo",
    icon: Map,
  },
  {
    name: "todo",
    website: "dashboard",
    email: "todo",
    description: "todo",
    type: "todo",
    icon: Map,
  },
  {
    name: "todo",
    website: "dashboard",
    email: "todo",
    description: "todo",
    type: "todo",
    icon: Map,
  },
  {
    nname: "todo",
    website: "dashboard",
    email: "todo",
    description: "todo",
    type: "todo",
    icon: Map,
  },
  {
    name: "todo",
    website: "dashboard",
    email: "todo",
    description: "todo",
    type: "todo",
    icon: Map,
  },
  {
    name: "todo",
    website: "dashboard",
    email: "todo",
    description: "todo",
    type: "todo",
    icon: Map,
  },
  {
    name: "todo",
    website: "dashboard",
    email: "todo",
    description: "todo",
    type: "todo",
    icon: Map,
  },
  {
    name: "todo",
    website: "dashboard",
    email: "todo",
    description: "todo",
    type: "todo",
    icon: Map,
  },
  {
    name: "todo",
    website: "dashboard",
    email: "todo",
    description: "todo",
    type: "todo",
    icon: Map,
  },
  {
    name: "todo",
    website: "dashboard",
    email: "todo",
    description: "todo",
    type: "todo",
    icon: Map,
  },
  {
    name: "todo",
    website: "dashboard",
    email: "todo",
    description: "todo",
    type: "todo",
    icon: Map,
  },
];

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="rounded-xl overflow-hidden bg-muted/50 cursor-pointer transition-all duration-300"
    >
      <p className="text-base" style={{textAlign: "center"}} >
              <strong> {project.name} </strong>
      </p>
      {/* Dummy Image (increased height for a larger card) */}
      <img
        src={project.image_url}
        alt="Project placeholder"
        className="w-full h-48 object-cover"
        style={{ width: "150px", height: "150px" , marginLeft: "auto", marginRight: "auto", marginTop: "25px" }}
      />

      {/* Project Info */}
      <div className="p-6">
        {expanded && (
          <div className="mt-3 space-y-2 text-gray-700">
            
            <p className="text-base">
              <strong>Website:</strong> {project.website}
            </p>
            <p className="text-base">
              <strong>Email:</strong> {project.email}
            </p>
            <p className="text-base">
              <strong>Description:</strong> {project.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Organizations() {

  const [opportunities, setOpportunities] = useState([]);
  const [query, setSearchQuery] = useState(""); 
  // Function to fetch data (default or search case)
  const fetchOpportunities = async (query) => {
    console.log("ran feth");
    if(query == "") {
      const response = await axios.get("http://localhost:3000/api/getAllOrgs");
      setOpportunities(response.data); 
      console.log("initial response: ", response.data);
    } else {
      try{
          const response = await axios.get("http://localhost:3000/api/getByOrg", {
            params: { org: query },
          });
          setOpportunities(response.data);
       
        
      } catch (error) {
        console.log("No organizations found for this search.");
        setOpportunities([]);
      }
    }
  }
  useEffect(() => {
    fetchOpportunities(""); // Load default opportunities
  }, []);
    
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
                  <BreadcrumbLink href="#">Opportunify</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Organizations</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* Title */}
          <h1 className="mt-4 text-2xl font-semibold text-black">Organizations</h1>

          {/* Search Bar */}
          <div className="mt-4 flex items-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Search organizations..."
              className="flex-1 rounded-md border border-muted/50 bg-muted px-4 py-2 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              value={query}
              onChange ={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick = {() => fetchOpportunities(query) } className="flex items-center rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90">
              <Search className="mr-2" size={16} />
              Search
            </button>
          </div>

          {/* Grid container */}
          <div className="grid auto-rows-min gap-6 md:grid-cols-3">
            {opportunities.map((opportunity, index) => (
              <ProjectCard key={index} project={opportunity} />
            ))}
          </div>

          {/* Additional content */}
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
