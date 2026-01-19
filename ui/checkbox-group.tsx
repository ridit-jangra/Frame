"use client";

import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { CheckIcon } from "lucide-react";
import { Label } from "./label";
import { Group } from "./group";

export function CheckboxGroup({
  items,
}: {
  items: {
    label: string;
    defaultChecked?: boolean;
    onCheckedChange?: (e: boolean) => void;
  }[];
}) {
  return (
    <Group>
      {items.map((v, i) => (
        <Label className="flex gap-2 items-center" key={i}>
          <BaseCheckbox.Root
            defaultChecked={v.defaultChecked}
            className={
              "bg-gray-200 p-0.5 min-w-7 min-h-7 max-w-7 max-h-7 rounded-lg hover:bg-gray-300 transition-colors"
            }
            onCheckedChange={v.onCheckedChange}
          >
            <BaseCheckbox.Indicator>
              <CheckIcon />
            </BaseCheckbox.Indicator>
          </BaseCheckbox.Root>
          {v.label}
        </Label>
      ))}
    </Group>
  );
}
