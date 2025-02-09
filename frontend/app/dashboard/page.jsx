"use client"
import React, { useMemo, useState } from "react"
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  addMonths,
  subMonths,
} from "date-fns"

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// Example event data
const events = [
  {
    title: "Quantitative Finance Meeting",
    subtitle: "Club interest meeting for prospective members",
    date: new Date(2025, 1, 10),
    attendees: "Jake, Masarith, and 15 others",
    description:
      "Join our Quant Finance Interest Meeting to explore how math, coding, and finance intersect...",
  },
  {
    title: "Undergraduate Research Symposium",
    subtitle: "Platform for students to present their research",
    date: new Date(2025, 1, 12),
    attendees: "John, Sagnik, and 4 others",
    description:
      "Explore innovative student research across disciplines at our Undergraduate Research Symposium...",
  },
  {
    title: "Networking Night",
    subtitle: "Expand your professional circle",
    date: new Date(2025, 1, 17),
    attendees: "Nina, Alex, and 25 others",
    description:
      "Meet industry professionals and alumni in an evening of networking, food, and conversation...",
  },
  {
    title: "Tech Talk: AI & Future",
    subtitle: "Guest speaker from the AI Lab",
    date: new Date(2025, 1, 23),
    attendees: "Dr. Smith, and 40 others",
    description:
      "Hear from a leading researcher about emerging AI technologies and potential impacts on society...",
  },
  // NEW: Additional events in MARCH (2025, 2)
  {
    title: "Design Sprint Workshop",
    subtitle: "A hands-on workshop for rapid prototyping",
    date: new Date(2025, 2, 5), // March 5, 2025
    attendees: "Amy, Brian, and 8 others",
    description:
      "Learn the key stages of a design sprint, from ideation to prototyping, in this interactive workshop.",
  },
  {
    title: "Spring Career Fair",
    subtitle: "Meet recruiters from top companies",
    date: new Date(2025, 2, 14), // March 14, 2025
    attendees: "Sara, David, and over 50 others",
    description:
      "Connect with potential employers, learn about internship and job opportunities, and expand your network.",
  },
]

/** Returns an array of events that occur on a given day */
function getEventsForDay(day) {
  return events.filter((evt) => isSameDay(evt.date, day))
}

/** A new component for each event card with an expand/collapse behavior */
const EventCard = ({ event }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      onClick={() => setExpanded((prev) => !prev)}
      className={`rounded-lg bg-white shadow p-4 border border-gray-100 cursor-pointer transition-transform duration-300 transform ${
        expanded ? "scale-105 shadow-xl" : "hover:scale-105"
      }`}
    >
      <h3 className="text-lg font-semibold">{event.title}</h3>
      <p className="text-sm text-muted-foreground">{event.subtitle}</p>
      <p className="mt-1 text-sm text-gray-500">
        {format(event.date, "MMMM d, yyyy")}
      </p>
      {expanded ? (
        <>
          <p className="mt-2 text-sm">{event.description}</p>
          <p className="mt-2 text-sm font-medium text-blue-600">
            {event.attendees}
          </p>
          {/* Additional information only visible when expanded */}
          <p className="mt-2 text-sm text-gray-700">
            Additional Info: Please RSVP in advance. Refreshments will be provided,
            and more details will be sent via email prior to the event.
          </p>
        </>
      ) : (
        <p className="mt-2 text-sm text-gray-500">
          Click to expand for more details
        </p>
      )}
    </div>
  )
}

export default function Page() {
  // Use state to track the current "view" month in the calendar
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 1)) // Start at Feb 2025

  // Navigate to the next/previous month
  const handlePrevMonth = () => {
    setCurrentMonth((prev) => subMonths(prev, 1))
  }
  const handleNextMonth = () => {
    setCurrentMonth((prev) => addMonths(prev, 1))
  }

  // Get the start/end of the chosen month
  const start = startOfMonth(currentMonth)
  const end = endOfMonth(currentMonth)

  // Generate each day in the current month
  const days = useMemo(() => eachDayOfInterval({ start, end }), [start, end])

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Wrapping the header and main content in a centered container */}
        <div className="max-w-7xl mx-auto w-full">
          {/* HEADER + BREADCRUMBS */}
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Dashboard
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

          {/* MAIN CONTENT */}
          <div className="flex flex-1 flex-col gap-4 p-4">
            {/* UPCOMING EVENTS SECTION */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
              <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
                {events.map((evt, idx) => (
                  <EventCard key={idx} event={evt} />
                ))}
              </div>
            </section>

            {/* CALENDAR + NOTES */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-[2fr_1fr]">
              {/* Notes Section */}
              <div className="min-h-[300px] flex-1 rounded-xl bg-white border border-gray-100 shadow p-4">
                <h3 className="text-lg font-semibold">Notes</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Add your notes, reminders, or to-do items here.
                </p>
              </div>

              {/* Interactive Calendar with hover tooltips */}
              <div className="rounded-xl bg-white shadow p-4 border border-gray-100">
                {/* Calendar header with month navigation */}
                <div className="flex items-center justify-between mb-2">
                  <button
                    onClick={handlePrevMonth}
                    className="px-2 py-1 text-sm font-medium rounded hover:bg-gray-100"
                  >
                    &lt;
                  </button>
                  <h3 className="font-semibold">
                    {format(currentMonth, "MMMM yyyy")}
                  </h3>
                  <button
                    onClick={handleNextMonth}
                    className="px-2 py-1 text-sm font-medium rounded hover:bg-gray-100"
                  >
                    &gt;
                  </button>
                </div>
                {/* Day-of-week headers */}
                <div className="grid grid-cols-7 text-center text-sm font-medium mb-1">
                  <div>Su</div>
                  <div>Mo</div>
                  <div>Tu</div>
                  <div>We</div>
                  <div>Th</div>
                  <div>Fr</div>
                  <div>Sa</div>
                </div>
                {/* Actual days */}
                <div className="grid grid-cols-7">
                  {days.map((day, i) => {
                    const dayNum = format(day, "d")
                    const dayEvents = getEventsForDay(day)
                    const hasEvent = dayEvents.length > 0

                    return (
                      <div
                        key={i}
                        className={`relative group flex items-center justify-center 
                          aspect-square text-sm rounded-lg m-0.5 transition-colors
                          ${
                            hasEvent
                              ? "bg-blue-100 font-bold text-blue-700 cursor-pointer"
                              : "text-gray-700"
                          }`}
                      >
                        {dayNum}

                        {/* Tooltip only if there's at least one event */}
                        {hasEvent && (
                          <div className="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex">
                            <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-nowrap bg-gray-700 shadow-lg rounded">
                              {dayEvents.map((evt, idx2) => (
                                <div key={idx2}>
                                  {evt.title} — {format(evt.date, "MMM d")}
                                </div>
                              ))}
                            </span>
                            {/* Tooltip arrow */}
                            <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-700"></div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End centered container */}
      </SidebarInset>d
    </SidebarProvider>
  )
}