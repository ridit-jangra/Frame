import { cn } from "@/utils/cn";

export type LabelProps = React.ComponentProps<"label">;

export function Label({ children, className, ...props }: LabelProps) {
  return (
    <label
      {...props}
      className={cn(
        className,
        "transition-colors rounded-lg font-inter font-medium text-md truncate max-w-full",
      )}
    >
      {children}
    </label>
  );
}
