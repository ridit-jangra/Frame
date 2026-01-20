import { ContextMenu as BaseContextMenu } from "@base-ui/react/context-menu";

export function ContextMenu({
  items,
}: {
  items?: { title: string; onClick?: () => void; type: "item" | "separator" }[];
}) {
  return (
    <BaseContextMenu.Root>
      <BaseContextMenu.Trigger className="box-border flex items-center justify-center w-[15rem] h-[12rem] border border-gray-300 text-gray-900 rounded-md select-none">
        Right click here
      </BaseContextMenu.Trigger>
      <BaseContextMenu.Portal>
        <BaseContextMenu.Positioner className="outline-none">
          <BaseContextMenu.Popup className="box-border p-1 rounded-md bg-gray-700 dark:bg-gray-200 dark:text-gray-900 text-gray-300 origin-[var(--transform-origin)] transition-all data-[ending-style]:opacity-0 light:outline light:outline-1 light:outline-gray-200 light:shadow-[0_10px_15px_-3px_rgb(0_0_0/0.1),0_4px_6px_-4px_rgb(0_0_0/0.1)] dark:outline dark:outline-1 dark:outline-gray-300 dark:outline-offset-[-1px]">
            {items &&
              items.map((v, i) =>
                v.type === "item" ? (
                  <BaseContextMenu.Item
                    key={i}
                    onClick={v.onClick}
                    className="outline-none cursor-default select-none py-2 px-4 text-sm leading-4 flex data-[highlighted]:z-0 data-[highlighted]:relative data-[highlighted]:text-gray-50 dark:data-[highlighted]:text-gray-900 data-[highlighted]:before:content-[''] data-[highlighted]:before:absolute data-[highlighted]:before:inset-0 data-[highlighted]:before:-z-10 data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-400 data-[highlighted]:before:mr-1 data-[highlighted]:before:ml-1"
                  >
                    {v.title}
                  </BaseContextMenu.Item>
                ) : (
                  <BaseContextMenu.Separator
                    key={i}
                    className="mx-4 my-1.5 h-px bg-gray-200 dark:bg-gray-500"
                  />
                ),
              )}
          </BaseContextMenu.Popup>
        </BaseContextMenu.Positioner>
      </BaseContextMenu.Portal>
    </BaseContextMenu.Root>
  );
}
