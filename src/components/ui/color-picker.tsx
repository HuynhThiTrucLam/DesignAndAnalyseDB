import * as React from "react";
import { HexColorPicker } from "react-colorful";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Input } from "./input";
import { useEffect } from "react";

interface ColorPickerProps {
  color?: string;
  onChange?: (color: string) => void;
  className?: string;
}

export function ColorPicker({ color = "#000000", onChange }: ColorPickerProps) {
  const [selectedColor, setSelectedColor] = React.useState(color);

  useEffect(() => {
    setSelectedColor(color);
  }, [color]);

  const handleColorChange = (newColor: string) => {
    setSelectedColor(newColor);
    onChange?.(newColor);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="relative">
          <Input
            type="text"
            value={selectedColor}
            onChange={(e) => handleColorChange(e.target.value)}
            className="pl-8 h-11"
          />
          <div
            className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border"
            style={{ backgroundColor: selectedColor }}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4 z-[1110909]">
        <div className="flex flex-col gap-4">
          <HexColorPicker
            color={selectedColor}
            onChange={handleColorChange}
            className="!w-[200px] !h-[200px]"
          />
          <div className="flex items-center gap-2">
            <div
              className="h-8 w-8 rounded-md border"
              style={{ backgroundColor: selectedColor }}
            />
            <Input
              type="text"
              value={selectedColor}
              onChange={(e) => handleColorChange(e.target.value)}
              className="flex-1 uppercase"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
