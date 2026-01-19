"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "@/ui/button";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      type="button"
      variant={"ghost"}
      size={"icon-md"}
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
    >
      <MoonIcon className="size-4 dark:hidden" />
      <SunIcon className="size-4 hidden dark:block" />
    </Button>
  );
}
