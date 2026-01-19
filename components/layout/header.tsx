import ThemeToggle from "../providers/theme/theme-toggle";

export default function Header() {
  return (
    <header className="flex items-center sticky top-0 justify-end px-6 h-(--header-height)">
      <ThemeToggle />
    </header>
  );
}
