import { cn } from "@/utils/cn";

export type GroupProps = React.ComponentProps<"div">;

export function Group({ children, className, ...props }: GroupProps) {
  return (
    <div {...props} className={cn(className, "flex flex-col gap-3")}>
      {children}
    </div>
  );
}
