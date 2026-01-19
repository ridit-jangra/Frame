import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const buttonVariants = cva([""], {
  variants: {
    variant: {
      default:
        "bg-black text-white dark:bg-white dark:text-black hover:bg-white/80",
      ghost:
        "bg-transparent text-black dark:text-white hover:bg-black/80 dark:hover:bg-white/20",
      outline:
        "bg-black/45 text-zinc-600 dark:text-zinc-50 dark:bg-white/45 border-gray-600 hover:bg-black/30 dark:hover:bg-white/30",
      danger: "bg-red-500 hover:bg-red-600",
      warning: "bg-yellow-600 hover:bg-yellow-700 text-zinc-100",
    },
    font: { mono: "font-mono", inter: "font-inter" },
    color: {},
    size: {
      sm: "text-sm px-3 py-1",
      md: "text-md px-3 py-1",
      lg: "text-lg px-3 py-1",
      xl: "text-xl px-3 py-1",
      "2xl": "text-2xl px-3 py-1",
      "3xl": "text-3xl px-3 py-1",
      "icon-sm": "text-sm p-2 [&_svg]:w-[16px] [&_svg]:h-[16px]",
      "icon-md": "text-md p-2 [&_svg]:w-[18px] [&_svg]:h-[18px]",
      "icon-lg": "text-lg p-2 [&_svg]:w-[20px] [&_svg]:h-[20px]",
      "icon-xl": "text-xl p-2 [&_svg]:w-[22px] [&_svg]:h-[22px]",
    },
  },
  defaultVariants: { variant: "default", size: "lg", font: "inter" },
});

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

export function Button({
  children,
  size,
  variant,
  color,
  className,
  font,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={cn(
        buttonVariants({
          size,
          color,
          variant,
          font,
        }),
        className,
        "transition-colors rounded-lg cursor-pointer",
      )}
    >
      {children}
    </button>
  );
}
