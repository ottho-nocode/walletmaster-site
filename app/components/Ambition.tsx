import { Compass } from "lucide-react";
import Reveal from "./Reveal";

export default function Ambition() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="glow-blob left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-green/12" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-green/30 bg-surface text-green shadow-[0_0_50px_-10px_var(--glow)]">
            <Compass size={30} />
          </div>
          <span className="eyebrow mt-8 block">Notre ambition</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
            Faire de Wallet Master votre{" "}
            <span className="text-gradient-green">copilote financier.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
            Un outil capable de vous accompagner dans vos décisions financières
            et de vous aider à avancer plus intelligemment vers ce que vous
            souhaitez construire dans votre vie.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
