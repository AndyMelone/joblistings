"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SelectOption {
  value: string;
  label: string;
  color?: string;
}

interface FancyBoxProps<T extends SelectOption> {
  options: T[];
  placeholder?: string;
  selectedLabels?: string;
  newPlaceholder?: string;
  newValue?: string;
  onNewValueChange?: (value: string) => void;
  onCreateOption?: (name: string) => void;
}

const badgeStyle = (color: string) => ({
  borderColor: `${color}20`,
  backgroundColor: `${color}30`,
  color,
});

export function FancyBox<T extends SelectOption>({
  options,
  placeholder = "Select labels",
  selectedLabels = "selected",
  newPlaceholder = "Add new label",
  newValue,
  onNewValueChange,
  onCreateOption,
}: FancyBoxProps<T>) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [selectedValues, setSelectedValues] = React.useState<T[]>([]);
  const [inputValue, setInputValue] = React.useState<string>("");
  const [openCombobox, setOpenCombobox] = React.useState(false);

  // Fonction pour ajouter une nouvelle option
  const handleCreateOption = () => {
    if (inputValue && onCreateOption) {
      onCreateOption(inputValue);
      setInputValue("");
    }
  };

  const toggleOption = (option: T) => {
    setSelectedValues((current) =>
      current.find((item) => item.value === option.value)
        ? current.filter((item) => item.value !== option.value)
        : [...current, option]
    );
  };

  return (
    <div className="w-full">
      <Popover open={openCombobox} onOpenChange={setOpenCombobox}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="justify-between w-full">
            <span className="truncate">
              {selectedValues.length === 0 && placeholder}
              {selectedValues.map(({ label }) => label).join(", ")}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[400px] p-0">
          <Command loop>
            <CommandInput
              ref={inputRef}
              placeholder="Search..."
              value={inputValue}
              onValueChange={setInputValue}
            />
            <CommandList>
              <CommandGroup className="max-h-[145px] overflow-auto">
                {options.map((option) => {
                  const isActive = selectedValues.includes(option);
                  return (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={() => toggleOption(option)}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          isActive ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {option.label}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
              <CommandItem className="flex items-center justify-between p-2">
                <input
                  type="text"
                  value={newValue}
                  onChange={(e) =>
                    onNewValueChange && onNewValueChange(e.target.value)
                  }
                  placeholder={newPlaceholder}
                  className="w-full p-1 border border-gray-200 rounded-md"
                />
                <Button onClick={() => onCreateOption} className="ml-2">
                  Ajouter
                </Button>
              </CommandItem>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <div className="mt-3">
        {selectedValues.map(({ label, value, color }) => (
          <Badge
            key={value}
            style={badgeStyle(color || "#ccc")}
            className="mr-2 mb-2"
          >
            {label}
          </Badge>
        ))}
      </div>
    </div>
  );
}
