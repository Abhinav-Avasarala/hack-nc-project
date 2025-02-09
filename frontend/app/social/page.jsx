"use client";

import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

// Import multiple icons from lucide-react
import {
  Map,
  User,
  Briefcase,
  Star,
  Heart,
  Coffee,
  Airplay,
  Settings,
  Bell,
} from "lucide-react";

const projects = [
  {
    name: "todo",
    title: "Alice Johnson",
    location: "San Francisco",
    start_date: "AJ",
    end_date: "todo",
    deadline: "Attending a tech career fair",
    icon: User,
    avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "todo",
    title: "Bob Smith",
    location: "New York",
    start_date: "BS",
    end_date: "todo",
    deadline: "Presenting at a research symposium",
    icon: Briefcase,
    avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "todo",
    title: "Charlie Williams",
    location: "Chicago",
    start_date: "CW",
    end_date: "todo",
    deadline: "Participating in a coding hackathon",
    icon: Star,
    avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "todo",
    title: "David Brown",
    location: "Los Angeles",
    start_date: "DB",
    end_date: "todo",
    deadline: "Networking at an alumni meetup",
    icon: Heart,
    avatarUrl: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "todo",
    title: "Emma Davis",
    location: "Austin",
    start_date: "ED",
    end_date: "todo",
    deadline: "Attending a leadership workshop",
    icon: Coffee,
    avatarUrl: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "todo",
    title: "Frank Miller",
    location: "Seattle",
    start_date: "FM",
    end_date: "todo",
    deadline: "Speaking at a business seminar",
    icon: Airplay,
    avatarUrl: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    name: "todo",
    title: "Grace Wilson",
    location: "Denver",
    start_date: "GW",
    end_date: "todo",
    deadline: "Joining a panel on AI ethics",
    icon: Settings,
    avatarUrl: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    name: "todo",
    title: "Henry Moore",
    location: "Boston",
    start_date: "HM",
    end_date: "todo",
    deadline: "Competing in a case competition",
    icon: Bell,
    avatarUrl: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    name: "todo",
    title: "Sagnik Saha",
    location: "San Diego",
    start_date: "SS",
    end_date: "todo",
    deadline: "Attending an undergraduate networking dinner",
    icon: Map,
    avatarUrl: "https://randomuser.me/api/portraits/men/9.jpg",
  },
];

export default function Social() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="min-h-screen bg-white text-black">
          {/* Banner Header */}
          <header className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            {/* Left: Sidebar trigger & Title */}
            <div className="flex items-center space-x-2">
              <SidebarTrigger />
              <Separator orientation="vertical" className="h-5" />
              <h1 className="text-lg font-bold">Friends</h1>
            </div>

            {/* Right: Search & "Search" button */}
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search friends..."
                className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button className="px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-900 transition">
                Search
              </button>
            </div>
          </header>

          {/* Main Content */}
          <main className="p-4">
            {/* Friends Grid Section */}
            <section>
              <h2 className="text-xl font-bold mb-4">All Friends</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => {
                  const Icon = project.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition-transform transform hover:scale-105"
                    >
                      <Avatar className="mr-4">
                        <AvatarImage
                          src={project.avatarUrl}
                          alt={project.title}
                        />
                        <AvatarFallback>{project.start_date}</AvatarFallback>
                      </Avatar>

                      <div className="flex flex-col">
                        <span className="text-lg font-semibold text-gray-900">
                          {project.title}
                        </span>
                        <span className="text-sm text-gray-600">
                          {project.location}
                        </span>
                        <span className="mt-1 text-sm text-gray-700">
                          {project.deadline}
                        </span>
                      </div>
                      <div className="ml-auto">
                        <Icon className="w-6 h-6 text-gray-700" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <Separator className="my-8" />

            {/* Recent Activity Section */}
            <section>
              <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
              <div className="bg-gray-50 p-4 rounded-xl shadow">
                <p className="text-gray-700">
                  No recent activity. Check back later for updates from your friends.
                </p>
              </div>
            </section>

            <Separator className="my-8" />

            {/* Suggested Groups Section */}
            <section>
              <h2 className="text-xl font-bold mb-4">Suggested Groups</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Sample Card #1 */}
                <div className="bg-gray-50 p-4 rounded-xl shadow">
                  <h3 className="font-semibold text-gray-900">AI Enthusiasts</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    A group for those interested in artificial intelligence, machine learning, and data science.
                  </p>
                  <button className="mt-3 px-3 py-2 text-sm bg-black text-white rounded hover:bg-gray-900 transition">
                    Join Group
                  </button>
                </div>
                {/* Sample Card #2 */}
                <div className="bg-gray-50 p-4 rounded-xl shadow">
                  <h3 className="font-semibold text-gray-900">React Hackers</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Share ideas, tips, and best practices for building React apps.
                  </p>
                  <button className="mt-3 px-3 py-2 text-sm bg-black text-white rounded hover:bg-gray-900 transition">
                    Join Group
                  </button>
                </div>
                {/* Sample Card #3 */}
                <div className="bg-gray-50 p-4 rounded-xl shadow">
                  <h3 className="font-semibold text-gray-900">Leadership 101</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Grow your leadership skills through workshops and webinars.
                  </p>
                  <button className="mt-3 px-3 py-2 text-sm bg-black text-white rounded hover:bg-gray-900 transition">
                    Join Group
                  </button>
                </div>
              </div>
            </section>

            <footer className="text-center text-sm text-gray-500 mt-8">
              © {new Date().getFullYear()} Opportunify. All rights reserved.
            </footer>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
