import { ScanSearch, Target, Footprints } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    icon: ScanSearch,
    title: "Comprendre",
    desc: "Une analyse simple et claire de votre situation financière.",
  },
  {
    n: "02",
    icon: Target,
    title: "Définir",
    desc: "L'identification de l'objectif prioritaire le plus pertinent pour vous.",
  },
  {
    n: "03",
    icon: Footprints,
    title: "Avancer",
    desc: "Un parcours personnalisé, fait d'actions concrètes et adaptées.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-bg-2 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Comment ça fonctionne</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
            Trois pas pour reprendre la route.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* connecting trajectory (desktop) */}
          <svg
            className="pointer-events-none absolute left-0 top-8 hidden w-full md:block"
            height="4"
            preserveAspectRatio="none"
            viewBox="0 0 1000 4"
          >
            <line
              x1="0"
              y1="2"
              x2="1000"
              y2="2"
              stroke="var(--green)"
              strokeWidth="2"
              strokeDasharray="4 8"
              strokeOpacity="0.35"
            />
          </svg>

          <ol className="grid gap-8 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 120}>
                <div className="relative">
                  {/* node */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-green/30 bg-surface text-green shadow-[0_0_40px_-12px_var(--glow)]">
                    <s.icon size={26} />
                  </div>
                  <div className="mt-6 flex items-baseline gap-3">
                    <span className="font-mono text-sm text-green">{s.n}</span>
                    <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                  </div>
                  <p className="mt-3 max-w-xs text-pretty leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
