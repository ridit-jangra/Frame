import { ReactNode } from "react";
import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import { cn } from "@/utils/cn";

export function ScrollArea({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <BaseScrollArea.Root className={cn("w-full", className)}>
      <BaseScrollArea.Viewport className="w-full h-full rounded-md outline-1 outline-gray-200 p-4 focus-visible:outline-2 focus-visible:outline-blue-400">
        <BaseScrollArea.Content>{children}</BaseScrollArea.Content>
      </BaseScrollArea.Viewport>
      <BaseScrollArea.Scrollbar
        orientation="vertical"
        className="w-2 bg-transparent flex select-none transition-colors group data-[orientation=vertical]:h-full data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:w-full data-[orientation=horizontal]:h-2"
      >
        <BaseScrollArea.Thumb className="flex-1 bg-gray-200 rounded-[10px] group-data-focus-visible:ring-4 group-data-focus-visible:ring-gray-400 group-data-focus-visible:ring-offset-4 group-data-focus-visible:ring-offset-transparent group-data-[orientation=horizontal]:flex-col" />
      </BaseScrollArea.Scrollbar>
    </BaseScrollArea.Root>
  );
}
