import Link from "next/link";

import { contactDetails, legalLinks, navLinks } from "@/lib/site";
import { TRACK_EVENTS } from "@/lib/tracking/events";

import BrandLogo from "./BrandLogo";
import Container from "./Container";

export default function Footer() {
  const footerNav = navLinks.filter((item) => item.href !== "/reservar");

  return (
    <footer className="border-t border-white/12 bg-[linear-gradient(176deg,#301d2a_0%,#241722_56%,#1d121b_100%)] text-white">
      <Container className="pt-14">
        <div className="rounded-[2rem] border border-white/14 bg-white/[0.06] px-6 py-6 shadow-[0_36px_86px_-74px_rgba(6,4,6,0.95)] backdrop-blur-[4px] sm:px-8">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-[40rem]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/66">
                Centres Ideal Illa Carlemany
              </p>
              <p className="mt-3 text-[1.2rem] leading-[1.4] tracking-[-0.015em] text-white/92 sm:text-[1.36rem]">
                Si necesitas orientación previa, te ayudamos por WhatsApp antes
                de confirmar tu valoración.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 sm:flex-row">
              <Link
                href="https://wa.me/376600000"
                target="_blank"
                rel="noreferrer"
                data-track-event={TRACK_EVENTS.CLICK_WHATSAPP}
                data-track-source="footer_whatsapp"
                data-track-label="whatsapp_footer"
                data-track-href="https://wa.me/376600000"
                data-ab-test="home_cta_journey"
                data-ab-variant="v1"
                className="inline-flex h-[3rem] items-center justify-center rounded-[var(--radius-pill)] bg-white px-6 text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] transition-colors duration-200 hover:bg-white/92"
              >
                WhatsApp directo
              </Link>
              <Link
                href="/reservar"
                data-track-event={TRACK_EVENTS.CLICK_RESERVAR}
                data-track-source="footer_primary"
                data-track-label="reservar_desde_footer"
                data-track-href="/reservar"
                data-ab-test="home_cta_journey"
                data-ab-variant="v1"
                className="inline-flex h-[3rem] items-center justify-center rounded-[var(--radius-pill)] border border-white/24 bg-white/[0.09] px-6 text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:bg-white/[0.18]"
              >
                Reservar valoración
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <Container className="grid gap-10 pb-8 pt-12 lg:grid-cols-[1.35fr_0.84fr_0.84fr_1fr]">
        <div>
          <BrandLogo size="lg" className="text-white [&_span:last-child]:text-white/80" />
          <p className="mt-5 max-w-[34rem] text-[0.92rem] leading-7 text-white/76">
            Diagnóstico facial y corporal en Illa Carlemany con protocolos no
            invasivos y seguimiento profesional.
          </p>
          <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/62">
            Centres Ideal · Andorra
          </p>
        </div>

        <div>
          <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/62">
            Navegación
          </h2>
          <div className="mt-4 flex flex-col gap-2.5 text-[0.9rem] text-white/80">
            {footerNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/62">
            Legal
          </h2>
          <div className="mt-4 flex flex-col gap-2.5 text-[0.9rem] text-white/80">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/62">
            Contacto
          </h2>
          <div className="mt-4 space-y-2.5 text-[0.9rem] leading-7 text-white/80">
            <p>{contactDetails.phone}</p>
            <p>{contactDetails.email}</p>
            <p>{contactDetails.address}</p>
          </div>
          <p className="mt-5 text-[0.76rem] leading-6 text-white/62">
            Respuesta según horario de atención y disponibilidad de agenda.
          </p>
        </div>
      </Container>

      <Container className="border-t border-white/12 pb-8 pt-4">
        <p className="text-[0.73rem] leading-6 text-white/56">
          © {new Date().getFullYear()} Centres Ideal Illa Carlemany. Todos los
          derechos reservados.
        </p>
      </Container>
    </footer>
  );
}
