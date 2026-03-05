import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeInOnMount, fadeInUpViewDelayed } from "@/lib/animations";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/siteConfig";

type SessionType = "first" | "regular";

const SESSION_TYPES: {
  id: SessionType;
  label: string;
  duration: string;
  url: string;
}[] = [
  {
    id: "first",
    label: "Primera entrevista",
    duration: "30 min",
    url: siteConfig.calendly.firstSessionUrl,
  },
  {
    id: "regular",
    label: "Sesión",
    duration: "50 min",
    url: siteConfig.calendly.regularSessionUrl,
  },
];

export const Schedule = () => {
  const [activeType, setActiveType] = useState<SessionType>("first");

  const whatsAppUrl = buildWhatsAppUrl(
    siteConfig.professional.whatsapp.number,
    siteConfig.professional.whatsapp.message
  );

  const active = SESSION_TYPES.find((s) => s.id === activeType)!;

  return (
    <>
      <Helmet>
        <title>Agendar sesión | {siteConfig.professional.name}</title>
        <meta
          name="description"
          content="Elegí un horario disponible para tu primera entrevista o sesión terapéutica."
        />
      </Helmet>

      {/* Hero */}
      <Section bg="white" spacing="lg">
        <Container>
          <motion.div
            {...fadeInOnMount}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary leading-tight">
              Agendá tu sesión
            </h1>
            <div className="w-10 h-px bg-accent/50 mx-auto mt-5 mb-5" />
            <p className="font-sans text-lg text-neutral-600 leading-relaxed">
              Elegí un horario disponible. Si preferís, podés{" "}
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:text-primary/70 transition-colors"
              >
                consultarme por WhatsApp
              </a>
              .
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Embed section */}
      <Section bg="muted" spacing="md">
        <Container>
          <div className="max-w-4xl mx-auto">

            {/* Session type tabs */}
            <motion.div
              {...fadeInUpViewDelayed(0)}
              className="flex justify-center mb-8"
            >
              <div
                className="inline-flex rounded-lg border border-neutral-200 bg-white p-1 gap-1 shadow-sm"
                role="tablist"
                aria-label="Tipo de sesión"
              >
                {SESSION_TYPES.map((type) => (
                  <button
                    key={type.id}
                    role="tab"
                    aria-selected={activeType === type.id}
                    onClick={() => setActiveType(type.id)}
                    className={cn(
                      "px-5 py-2.5 rounded-md font-sans text-sm font-medium tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50",
                      activeType === type.id
                        ? "bg-primary text-white shadow-sm"
                        : "text-neutral-500 hover:text-primary hover:bg-neutral-50"
                    )}
                  >
                    {type.label}
                    <span
                      className={cn(
                        "ml-2 text-xs font-normal",
                        activeType === type.id
                          ? "text-white/65"
                          : "text-neutral-400"
                      )}
                    >
                      {type.duration}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Calendly iframe */}
            <motion.div
              {...fadeInUpViewDelayed(0.05)}
              className="bg-white rounded-2xl border border-neutral-200 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_4px_16px_rgba(0,0,0,0.07)] overflow-hidden"
            >
              <iframe
                key={active.url}
                src={`${active.url}?hide_gdpr_banner=1`}
                title={`Agendar: ${active.label} (${active.duration})`}
                width="100%"
                loading="lazy"
                className="block min-h-[620px] md:min-h-[750px] w-full"
                style={{ border: "none" }}
              />
            </motion.div>

            {/* Confidentiality note */}
            <motion.p
              {...fadeInUpViewDelayed(0.1)}
              className="flex items-center justify-center gap-2 font-sans text-sm text-neutral-400 text-center mt-5 leading-relaxed"
            >
              <svg
                className="w-4 h-4 shrink-0 text-neutral-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Tu consulta es confidencial. Solo se solicitarán los datos
              necesarios para coordinar el turno.
            </motion.p>

          </div>
        </Container>
      </Section>
    </>
  );
};
