import { AlertDialog as BaseAlertDialog } from "@base-ui/react/alert-dialog";
import { ReactNode } from "react";
import { Button } from "./button";

export function AlertDialog({
  trigger = <Button>Open</Button>,
  title = <p>This is the title!</p>,
  description = <p>Frame is the best ui kit!</p>,
  buttons = [
    { title: "Agree", varient: "default" },
    { title: "Can't agree more", varient: "warning" },
  ],
  onOpenChange,
  open,
}: {
  trigger?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  buttons?: {
    title: string;
    onClick?: () => void;
    varient: "default" | "outline" | "danger" | "warning";
  }[];
  open?: boolean;
  onOpenChange?: (e: boolean) => void;
}) {
  return (
    <BaseAlertDialog.Root open={open} onOpenChange={onOpenChange}>
      <BaseAlertDialog.Trigger className={"focus:outline-0"}>
        {trigger}
      </BaseAlertDialog.Trigger>
      <BaseAlertDialog.Portal>
        <BaseAlertDialog.Backdrop className="fixed inset-0 min-h-dvh bg-black/20 dark:bg-black/70 transition-opacity duration-150 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 supports-[-webkit-touch-callout:none]:absolute" />
        <BaseAlertDialog.Popup className="fixed top-1/2 left-1/2 font-inter -translate-x-1/2 -translate-y-1/2 w-96 max-w-[calc(100vw-3rem)] -mt-8 p-6 rounded-lg outline outline-gray-300 dark:outline-gray-100 dark:bg-gray-50 bg-gray-700 text-gray-200 dark:text-gray-900 transition-all duration-150 data-[starting-style]:opacity-0 data-[starting-style]:scale-90 data-[ending-style]:opacity-0 data-[ending-style]:scale-90">
          <BaseAlertDialog.Title className="-mt-1.5 mb-1 text-[19px] leading-7 tracking-tight font-medium">
            {title}
          </BaseAlertDialog.Title>
          <BaseAlertDialog.Description className="m-0 mb-6 text-[17px] leading-6 text-gray-100 dark:text-gray-600">
            {description}
          </BaseAlertDialog.Description>
          <div className="flex justify-end gap-4">
            {buttons.map((v, i) => (
              <BaseAlertDialog.Close key={i}>
                <Button onClick={v.onClick} variant={v.varient}>
                  {v.title}
                </Button>
              </BaseAlertDialog.Close>
            ))}
          </div>
        </BaseAlertDialog.Popup>
      </BaseAlertDialog.Portal>
    </BaseAlertDialog.Root>
  );
}
