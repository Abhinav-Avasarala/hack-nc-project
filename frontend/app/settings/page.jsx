"use client";
import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
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

import { Switch } from "@/components/ui/switch"; // Sample switch component
import { InterestSelector } from "@/components/ui/InterestSelector";

export default function SettingsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Header */}
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>Settings</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <h1 className="mt-4 text-2xl font-semibold text-black">Settings</h1>

          {/* Interest Selector Section */}
          <div className="rounded-xl bg-muted/50 p-6">
            <h2 className="mb-4 text-xl font-semibold">Interests</h2>
            <InterestSelector />
          </div>

          {/* Example Settings Sections */}
          <section className="mt-4 space-y-6">
            {/* Account Settings */}
            <div className="rounded-xl bg-muted/50 p-6">
              <h2 className="mb-4 text-xl font-semibold">Account</h2>
              <div className="flex items-center justify-between py-2">
                <span className="text-base">Enable email notifications</span>
                <Switch /* Toggle for email notifications */ />
              </div>
              <Separator className="my-4" />
              <div className="flex items-center justify-between py-2">
                <span className="text-base">Enable SMS alerts</span>
                <Switch /* Toggle for SMS alerts */ />
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="rounded-xl bg-muted/50 p-6">
              <h2 className="mb-4 text-xl font-semibold">Privacy</h2>
              <div className="flex items-center justify-between py-2">
                <span className="text-base">Show my activity status</span>
                <Switch /* Toggle for activity status visibility */ />
              </div>
              <Separator className="my-4" />
              <div className="flex items-center justify-between py-2">
                <span className="text-base">Share data with third-party services</span>
                <Switch /* Toggle for data sharing */ />
              </div>
            </div>
          </section>

          {/* Extra space for page layout */}
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
