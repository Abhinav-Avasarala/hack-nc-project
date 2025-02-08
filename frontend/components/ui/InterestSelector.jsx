"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandEmpty,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";

const defaultInterests = [
  { value: "computer_science", label: "Computer Science" },
  { value: "machine_learning", label: "Machine Learning" },
  { value: "data_science", label: "Data Science" },
  { value: "artificial_intelligence", label: "Artificial Intelligence" },
  { value: "robotics", label: "Robotics" },
  { value: "software_engineering", label: "Software Engineering" },
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "blockchain", label: "Blockchain" },
  { value: "iot", label: "Internet of Things" },
  { value: "game_development", label: "Game Development" },
];

export function InterestSelector({ interests = defaultInterests, onChange }) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState([]);

  const toggleSelection = (value) => {
    const updatedSelection = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];

    setSelected(updatedSelection);
    if (onChange) onChange(updatedSelection);
  };

  return (
    <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-4 space-y-4">
      {/* Top Section: Popover & Label */}
      <div className="flex flex-col items-center space-y-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full h-9 px-3 text-sm flex items-center justify-between"
            >
              {selected.length > 0
                ? `${selected.length} selected`
                : "Select interest..."}
              <ChevronsUpDown className="ml-1 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full md:w-[280px] p-0">
            <Command>
              <CommandInput placeholder="Search interest..." className="text-sm" />
              <CommandList>
                <CommandEmpty>No interest found.</CommandEmpty>
                <CommandGroup>
                  {interests.map((interest) => (
                    <CommandItem
                      key={interest.value}
                      value={interest.value}
                      onSelect={(currentValue) => toggleSelection(currentValue)}
                      className="text-sm"
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selected.includes(interest.value)
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {interest.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <p className="text-xs text-gray-500">
          Choose one or more areas of interest.
        </p>
      </div>

      {/* Bottom Section: Exactly Two Columns of Selected Tags */}
      <div className="grid grid-cols-2 gap-2">
        {selected.map((value) => {
          const interest = interests.find((item) => item.value === value);
          return (
            <Badge
              key={value}
              variant="outline"
              className="cursor-pointer rounded-full px-2 py-1 text-xs whitespace-nowrap bg-black text-white hover:bg-blue-700"
              onClick={() => toggleSelection(value)}
            >
              {interest?.label}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
