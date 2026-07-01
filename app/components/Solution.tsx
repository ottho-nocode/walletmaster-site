import { Navigation } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";

export default function Solution() {
  return (
    <section id="solution" className="relative overflow-hidden py-24 md:py-32">
      <div className="glow-blob left-[-6%] top-[20%] h-[380px] w-[380px] bg-green/18" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-16 px-5 md:grid-cols-2 md:px-8">
        {/* phone */}
        <Reveal className="order-2 flex justify-center md:order-1 md:justify-start">
          <div className="relative w-[300px] max-w-full">
            <PhoneMockup src="/screen-simulateur.png" alt="Écran Simulateur de Wallet Master : projection temporelle vers l'objectif" />
          </div>
        </Reveal>

        {/* copy */}
        <Reveal className="order-1 md:order-2" delay={80}>
          <span className="eyebrow">La solution</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
            Un objectif transformé en{" "}
            <span className="text-gradient-green">trajectoire concrète.</span>
          </h2>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted">
            À partir d&apos;une analyse simple de votre situation financière,
            l&apos;application identifie vos priorités et construit un parcours
            personnalisé, adapté à votre réalité.
          </p>

          <div className="card mt-8 flex gap-4 p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green/12 text-green">
              <Navigation size={22} />
            </div>
            <p className="text-[1.02rem] leading-relaxed text-text">
              Comme un GPS, la destination reste la même —{" "}
              <span className="font-semibold text-green">
                mais le chemin s&apos;adapte
              </span>{" "}
              à votre situation.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
