import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

const inputVariants = cva([""], {
  variants: {
    variant: {
      default:
        "outline px-3.5 py-1.5 outline-zinc-700 focus-within:outline-zinc-500 font-inter text-md w-min",
    },
  },
  defaultVariants: { variant: "default" },
});

export type InputProps = React.ComponentProps<"input"> &
  VariantProps<typeof inputVariants>;

export function Input({
  variant,
  className,
  Icons,
  ...props
}: InputProps & {
  Icons?: {
    icon: LucideIcon;
    tooltip?: string;
    onClick?: () => void;
  }[];
}) {
  return (
    <div
      className={cn(
        inputVariants({
          variant,
        }),
        "transition-colors rounded-lg flex items-center gap-1",
      )}
    >
      <input {...props} className={(cn(className), "focus:outline-0")} />
      {Icons &&
        Icons.map((v, i) => (
          <span
            key={i}
            className="hover:bg-white/20 p-1 transition-colors rounded-lg"
            onClick={v.onClick}
          >
            {<v.icon size={18} />}
          </span>
        ))}
    </div>
  );
}
