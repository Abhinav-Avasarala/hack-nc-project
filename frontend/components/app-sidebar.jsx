"use client";

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Building,
  Calendar,
  Command,
  GalleryVerticalEnd,
  Home,
  Settings,
  Settings2,
  SquareTerminal,
  Users,
} from "lucide-react";

import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// Helper function to wrap an icon component with a given size.
const withSize = (IconComponent, size = 40) => {
  return (props) => <IconComponent size={size} {...props} />;
};

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Opportunify Inc",
      logo: withSize(GalleryVerticalEnd, 40),
      plan: "Enterprise",
    },
    {
      name: "Opportunify Corp.",
      logo: withSize(AudioWaveform, 40),
      plan: "Startup",
    },
    {
      name: "Opportunify Corp.",
      logo: withSize(Command, 40),
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: withSize(SquareTerminal, 40),
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Friends",
      url: "#",
      icon: withSize(Bot, 40),
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Scheduled Events",
      url: "#",
      icon: withSize(BookOpen, 40),
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: withSize(Settings2, 40),
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Dashboard",
      url: "dashboard",
      icon: withSize(Home, 40),
    },
    {
      name: "Social",
      url: "social",
      icon: withSize(Users, 40),
    },
    {
      name: "Events",
      url: "events",
      icon: withSize(Calendar, 40),
    },
    {
      name: "Organizations",
      url: "organizations",
      icon: withSize(Building, 40),
    },
    {
      name: "Settings",
      url: "settings",
      icon: withSize(Settings, 40),
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        {/* Added spacing between project items */}
        <div className="space-y-2">
          <NavProjects projects={data.projects} />
        </div>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
