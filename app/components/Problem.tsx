import { BadgeCheck, Car, GraduationCap, Home, Rocket } from "lucide-react";
import Reveal from "./Reveal";

const PROJECTS = [
  { icon: BadgeCheck, label: "Passer le permis" },
  { icon: Car, label: "Acheter une voiture" },
  { icon: GraduationCap, label: "Financer une formation" },
  { icon: Rocket, label: "Prendre son indépendance" },
  { icon: Home, label: "Préparer un achat immobilier" },
];

export default function Problem() {
  return (
    <section id="probleme" className="relative bg-bg-2 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <span className="eyebrow">Le constat</span>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
            Aujourd&apos;hui, beaucoup de personnes ont des projets.
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PROJECTS.map((p, i) => (
            <Reveal as="li" key={p.label} delay={i * 80}>
              <div className="card group h-full p-5 transition-colors duration-300 hover:border-green/40">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] text-green transition-colors duration-300 group-hover:bg-green/12">
                  <p.icon size={20} />
                </div>
                <p className="mt-4 text-[0.98rem] font-medium leading-snug text-text">
                  {p.label}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className="card card-glow mt-14 overflow-hidden p-8 md:p-12">
            <p className="font-display text-2xl font-medium leading-snug text-muted md:text-4xl">
              Le problème n&apos;est pas de savoir{" "}
              <span className="text-text">ce qu&apos;elles veulent.</span>
            </p>
            <p className="mt-3 font-display text-2xl font-bold leading-snug md:text-4xl">
              Le problème est de savoir{" "}
              <span className="text-gradient-green">comment y parvenir.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
