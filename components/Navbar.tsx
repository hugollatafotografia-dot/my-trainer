import Link from "next/link";

import { navLinks } from "@/lib/site";

import Button from "./Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-line)] bg-[color:var(--color-background)]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link
          href="/"
          className="font-display text-3xl tracking-[-0.04em] text-[color:var(--color-foreground)]"
        >
          My Trainer
        </Link>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[color:var(--color-muted)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-[color:var(--color-foreground)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button href="/reservar" className="w-full sm:w-auto">
            Reserva tu clase
          </Button>
        </div>
      </div>
    </header>
  );
}
