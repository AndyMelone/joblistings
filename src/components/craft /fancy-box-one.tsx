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
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Option {
  value: string;
  label: string;
  color?: string;
}

interface Props {
  options: Option[];
  selectedValue?: Option;
  selectPlaceholder?: string;
  searchPlaceholder?: string;
  isAddNew?: boolean;
  newValue?: string;
  newChange?: (value: string) => void;
  newPlaceholder?: string;
  newFunction?: (value: string) => void;
}

const badgeStyle = (color: string = "#000") => ({
  borderColor: `${color}20`,
  backgroundColor: `${color}30`,
  color,
});

export function FancyBoxSelectOne({
  options,
  selectedValue,
  selectPlaceholder = "Sélectionnez...",
  searchPlaceholder = "Rechercher...",
  isAddNew = false,
  newValue = "",
  newChange,
  newPlaceholder = "Ajouter un nouvel élément...",
  newFunction,
}: Props) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [openCombobox, setOpenCombobox] = React.useState(false);
  const [inputValue, setInputValue] = React.useState<string>("");
  const [selectedElement, setSelectedElement] = React.useState<Option | null>(
    selectedValue || null
  );

  const createOption = () => {
    if (newValue && newFunction) {
      newFunction(newValue);
    }
  };

  const toggleOption = (option: Option) => {
    setSelectedElement(option);
    setOpenCombobox(false);
  };

  return (
    <div className="w-full sm:w-1/2">
      <Popover open={openCombobox} onOpenChange={setOpenCombobox}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={openCombobox}
            className="justify-between text-foreground w-full "
          >
            <span className="truncate">
              {selectedElement ? selectedElement.label : selectPlaceholder}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[350px] p-0">
          <Command loop>
            <CommandInput
              ref={inputRef}
              placeholder={searchPlaceholder}
              value={inputValue}
              onValueChange={setInputValue}
            />
            <CommandList>
              <CommandGroup className="max-h-[145px] overflow-auto">
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={() => toggleOption(option)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedElement?.value === option.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    <div className="flex-1">{option.label}</div>
                    {option.color && (
                      <div
                        className="h-4 w-4 rounded-full"
                        style={{ backgroundColor: option.color }}
                      />
                    )}
                  </CommandItem>
                ))}
                {isAddNew && (
                  <CommandItem className="flex items-center justify-between p-2">
                    <input
                      type="text"
                      value={newValue}
                      onChange={(e) => newChange && newChange(e.target.value)}
                      placeholder={newPlaceholder}
                      className="w-full p-1 border border-gray-200 rounded-md"
                    />
                    <Button onClick={createOption} className="ml-2">
                      Ajouter
                    </Button>
                  </CommandItem>
                )}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {selectedElement && (
        <div className="relative mt-3">
          <Badge
            key={selectedElement.value}
            variant="outline"
            style={badgeStyle(selectedElement.color)}
            className="mb-2 mr-2"
          >
            {selectedElement.label}
          </Badge>
        </div>
      )}
    </div>
  );
}
