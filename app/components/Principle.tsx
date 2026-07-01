import { Anchor, ShieldCheck, Blocks, RefreshCw, Layers } from "lucide-react";
import Reveal from "./Reveal";

const STAGES = [
  {
    n: "1",
    icon: Anchor,
    title: "Stabiliser",
    desc: "Retrouver un équilibre financier durable et réduire la pression du quotidien.",
    color: "var(--blue)",
  },
  {
    n: "2",
    icon: ShieldCheck,
    title: "Sécuriser",
    desc: "Construire les premières bases de sécurité financière et reprendre le contrôle de son avenir.",
    color: "var(--amber)",
  },
  {
    n: "3",
    icon: Blocks,
    title: "Construire",
    desc: "Transformer ses projets de vie en objectifs concrets et réalisables.",
    color: "var(--green)",
  },
];

export default function Principle() {
  return (
    <section id="principe" className="relative overflow-hidden py-24 md:py-32">
      <div className="glow-blob right-[-10%] top-[10%] h-[420px] w-[420px] bg-green/15" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        {/* statement */}
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Le principe</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight text-balance md:text-6xl">
            L&apos;argent n&apos;est pas la destination.
            <br />
            C&apos;est le <span className="text-gradient-green">levier.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
            L&apos;éducation financière ne devrait pas se limiter à des conseils
            génériques ou à des notions théoriques.
          </p>
        </Reveal>

        {/* three "chaque" lines */}
        <Reveal delay={100}>
          <div className="mt-8 flex flex-col gap-1 font-display text-xl font-medium text-muted md:flex-row md:gap-8 md:text-2xl">
            <span>
              Chaque <span className="text-text">situation</span> est différente.
            </span>
            <span>
              Chaque <span className="text-text">objectif</span> est différent.
            </span>
            <span>
              Chaque <span className="text-green">trajectoire</span>{" "}doit
              l&apos;être aussi.
            </span>
          </div>
        </Reveal>

        {/* progressive approach — ascending stages */}
        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-2xl font-bold md:text-3xl">
              Une approche progressive
            </h3>
            <p className="mt-2 text-muted">
              Wallet Master accompagne à travers trois grandes étapes.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STAGES.map((s, i) => (
              <Reveal
                as="article"
                key={s.n}
                delay={i * 130}
                className="relative z-10"
              >
                <div className="card card-glow h-full p-7">
                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{
                        background: `color-mix(in srgb, ${s.color} 14%, transparent)`,
                        color: s.color,
                      }}
                    >
                      <s.icon size={22} />
                    </div>
                    <span
                      className="font-mono text-3xl font-bold opacity-25"
                      style={{ color: s.color }}
                    >
                      {s.n}
                    </span>
                  </div>
                  <h4 className="mt-5 font-display text-xl font-bold">{s.title}</h4>
                  <p className="mt-2 text-pretty leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* two supporting cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal as="article">
            <div className="card h-full p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green/12 text-green">
                <RefreshCw size={20} />
              </div>
              <h4 className="mt-5 font-display text-xl font-bold">
                Un parcours qui s&apos;adapte
              </h4>
              <p className="mt-3 text-pretty leading-relaxed text-muted">
                L&apos;application analyse la situation de départ, identifie les
                priorités et propose des actions adaptées à chaque utilisateur.
                Lorsque la situation évolue, le parcours évolue également.
              </p>
              <p className="mt-4 font-display text-lg font-medium">
                L&apos;objectif reste le même.{" "}
                <span className="text-green">La trajectoire s&apos;ajuste.</span>
              </p>
            </div>
          </Reveal>

          <Reveal as="article" delay={120}>
            <div className="card h-full p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green/12 text-green">
                <Layers size={20} />
              </div>
              <h4 className="mt-5 font-display text-xl font-bold">
                Plus qu&apos;un outil budgétaire
              </h4>
              <p className="mt-3 text-pretty leading-relaxed text-muted">
                Wallet Master n&apos;est ni une banque, ni un simple tableau de
                dépenses. C&apos;est un outil de progression financière conçu pour
                aider chacun à avancer vers ce qu&apos;il souhaite réellement
                construire.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
