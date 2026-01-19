"use client";

import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { CheckIcon } from "lucide-react";
import { Label } from "./label";

export function Checkbox({
  label = "Frame is the goat right?",
  defaultChecked = true,
  onCheckedChange = (e) => {},
}: {
  label?: string;
  defaultChecked?: boolean;
  onCheckedChange?: (e: boolean) => void;
}) {
  return (
    <Label className="flex gap-2 items-center">
      <BaseCheckbox.Root
        defaultChecked={defaultChecked}
        className={
          "bg-gray-200 p-0.5 min-w-7 min-h-7 max-w-7 max-h-7 rounded-lg hover:bg-gray-300 transition-colors"
        }
        onCheckedChange={onCheckedChange}
      >
        <BaseCheckbox.Indicator>
          <CheckIcon />
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
      {label}
    </Label>
  );
}
