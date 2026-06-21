import Link from "next/link";
import Container from "./Container";
import { navigation } from "../../constants/navigation";
import ThemeToggle from "../shared/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/90 shadow-sm backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/">
            <span className="text-xl font-bold text-[var(--text-primary)]">
              Consulting
            </span>
          </Link>

          <nav aria-label="Main navigation">
            <ul className="hidden gap-8 md:flex">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-medium text-[var(--text-secondary)] transition hover:text-[var(--primary)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}