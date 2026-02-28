import Link from "next/link";

import { contactDetails, legalLinks } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-line)] bg-[color:var(--color-surface)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-3xl tracking-[-0.04em] text-[color:var(--color-foreground)]">
            My Trainer
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-[color:var(--color-muted)] sm:text-base">
            Entrenamiento personal y clases diseñadas para progresar con
            criterio, constancia y una experiencia cuidada de principio a fin.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Legal
          </h2>
          <div className="mt-5 flex flex-col gap-3 text-sm text-[color:var(--color-muted)]">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-[color:var(--color-foreground)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Contacto
          </h2>
          <div className="mt-5 space-y-3 text-sm leading-7 text-[color:var(--color-muted)]">
            <p>{contactDetails.phone}</p>
            <p>{contactDetails.email}</p>
            <p>{contactDetails.address}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
