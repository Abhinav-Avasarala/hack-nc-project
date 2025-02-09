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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  Search, // Import the Search icon from lucide-react
} from "lucide-react";

const projects = [
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
  {
    name: "todo",
    title: "dashboard",
    location: "todo",
    start_date: "todo",
    end_date: "todo",
    deadline: "todo",
    icon: Map,
  },
  ,
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
  {
    name: "todo",
    title: "dashboard",
    location: "todo",
    start_date: "todo",
    end_date: "todo",
    deadline: "todo",
    icon: Map,
  },
];

const formatDate = (dateString) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString));
};
   
// let response = {};
// async function searchEvents(query) {
//   response = await axios.get(
//     'http://localhost:3000/api/getBySearch',{
//     params: {searchTerm : query}
// })
  
// }

/*
async function filterEvents(option) {
  if(option.equals("date")) {
    const response = await axios.get(
      'http://localhost:3000/api/getFromDate',
      {}
      
    );
    

  } else if(option.equals("organization")) {


  } else {

  }
}
  */
function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  
 

  
  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="rounded-xl overflow-hidden bg-muted/50 cursor-pointer transition-all duration-300"
    >
      <p className="text-base" style={{textAlign: "center"}} >
              <strong> {project.title} </strong>
      </p>
      {/* Project Image */}
      <img
        src={project.image_url}
        alt="Project placeholder"
        className="w-full h-48 object-cover"
        style={{ width: "150px", height: "150px" , marginLeft: "auto", marginRight: "auto", marginTop: "25px" }}
      />

      {/* Project Info */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-900">{project.name}</h2>
        {expanded && (
          <div className="mt-3 space-y-2 text-gray-700">
            
            <p className="text-base">
              <strong>Location:</strong> {project.location}
            </p>
            <p className="text-base">
              <strong>Start Date:</strong> {formatDate(project.start_date)}
            </p>
            <p className="text-base">
              <strong>End Date:</strong> {formatDate(project.end_date)}
            </p>
            <p className="text-base">
              <strong>Deadline:</strong> {formatDate(project.deadline)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Events() {
  const [opportunities, setOpportunities] = useState([]);
  const [query, setSearchQuery] = useState(""); 
  const [selectedValue, setSelectedValue] = useState("");
  // Function to fetch data (default or search case)
  const fetchOpportunities = async (query) => {
    if(query == "") {
      const response = await axios.get("http://localhost:3000/api/getAllEvents");
      setOpportunities(response.data); 
      console.log("initial response: ", response.data);
    } else {
      try{
        if(selectedValue === "organization") { 
          const response = await axios.get("http://localhost:3000/api/getByOrg", {
            params: { org: query },
          });
          setOpportunities(response.data);
        } else if(selectedValue === "location") {
          const response = await axios.get("http://localhost:3000/api/getByLocation", {
            params: { location: query },
          });
          setOpportunities(response.data);
      } else {  // Default case
          const response = await axios.get("http://localhost:3000/api/getBySearch", {
            params: { searchTerm: query },
          });
          setOpportunities(response.data);
        }
        
      } catch (error) {
        console.log("No opportunities found for this search.");
        setOpportunities([]);
      }
      
    }

  };
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
                  <BreadcrumbLink href="#">
                    Opportunify
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
          {/* Title */}
          <h1 className="mt-4 text-2xl font-semibold text-black">Events</h1>

          {/* Search Bar and Dropdown */}
          <div className="mt-4 flex items-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Search events..."
              className="flex-1 rounded-md border border-muted/50 bg-muted px-4 py-2 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              value={query}
              onChange ={(e) => setSearchQuery(e.target.value)}
            />
            <Select  onValueChange={(value) => setSelectedValue(value)}>
              <SelectTrigger className="w-[180px] bg-muted rounded-md border border-muted/50 px-4 py-2">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent className="bg-muted">
                {/* <SelectItem value="date">For you</SelectItem> */}
                <SelectItem value="organization">Organization</SelectItem>
                <SelectItem value="location">Location</SelectItem>
              </SelectContent>
            </Select>
            <button onClick = {() => fetchOpportunities(query) } className="flex items-center rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90">
              <Search  className="mr-2" size={16} />
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