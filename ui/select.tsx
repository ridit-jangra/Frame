import { Select as BaseSelect } from "@base-ui/react/select";
import { ArrowUpDownIcon, CheckIcon } from "lucide-react";

export function Select({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <BaseSelect.Root items={items}>
      <BaseSelect.Trigger className="box-border flex items-center justify-between gap-3 h-10 px-3.5 pr-3 m-0 outline-none border border-gray-200 rounded-md bg-gray-200 font-inherit text-base leading-6 text-gray-900 select-none min-w-40 hover:bg-gray-100 data-popup-open:bg-gray-100 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:-outline-offset-1">
        <BaseSelect.Value
          className="data-placeholder:opacity-60"
          placeholder="Select apple"
        />
        <BaseSelect.Icon className="flex">
          <ArrowUpDownIcon size={18} />
        </BaseSelect.Icon>
      </BaseSelect.Trigger>
      <BaseSelect.Portal>
        <BaseSelect.Positioner
          className="outline-none z-1 select-none"
          sideOffset={8}
        >
          <BaseSelect.Popup className="box-border rounded-md bg-gray-200 bg-clip-padding text-gray-900 min-w-(--anchor-width) origin-(--transform-origin) transition-[transform_150ms,opacity_150ms] data-starting-style:opacity-0 data-starting-style:scale-90 data-ending-style:opacity-0 data-ending-style:scale-90 data-[side=none]:transition-none data-[side=none]:transform-none data-[side=none]:opacity-100 data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] outline-1 outline-gray-200 shadow-[0_10px_15px_-3px_var(--color-gray-200),0_4px_6px_-4px_var(--color-gray-200)] dark:outline-gray-300 dark:shadow-none">
            <BaseSelect.ScrollUpArrow className="w-full bg-gray-200 z-1 text-center cursor-default rounded-md h-4 text-xs flex items-center justify-center before:content-[''] before:absolute before:w-full before:h-full before:left-0 data-[direction=up]:data-[side=none]:before:-top-full" />
            <BaseSelect.List className="box-border relative py-1 overflow-y-auto max-h-(--available-height) scroll-py-6">
              {items.map(({ label, value }) => (
                <BaseSelect.Item
                  key={label}
                  value={value}
                  className="box-border outline-0 text-sm leading-4 py-2 pl-2.5 pr-4 grid gap-2 items-center grid-cols-[0.75rem_1fr] cursor-default select-none touch:py-2.5 touch:text-[0.925rem] data-[side=none]:text-base data-[side=none]:pr-12 data-highlighted:z-0 data-highlighted:relative hover:bg-gray-300"
                >
                  <BaseSelect.ItemIndicator className="col-start-1">
                    <CheckIcon size={14} />
                  </BaseSelect.ItemIndicator>
                  <BaseSelect.ItemText className="col-start-2">
                    {label}
                  </BaseSelect.ItemText>
                </BaseSelect.Item>
              ))}
            </BaseSelect.List>
            <BaseSelect.ScrollDownArrow className="w-full bg-gray-200 z-1 text-center cursor-default rounded-md h-4 text-xs flex items-center justify-center bottom-0 before:content-[''] before:absolute before:w-full before:h-full before:left-0 data-[direction=down]:data-[side=none]:before:-bottom-full" />
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
}
