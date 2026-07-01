import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* ambient glows */}
      <div className="glow-blob left-[-10%] top-[-5%] h-[420px] w-[420px] bg-green/25" />
      <div className="glow-blob right-[-8%] top-[30%] h-[360px] w-[360px] bg-blue/20" />

      {/* faint grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-[1.05fr_0.95fr] md:px-8">
        {/* copy */}
        <div>
          <span className="chip chip-green animate-in" style={{ animationDelay: "0ms" }}>
            <Sparkles size={14} />
            GPS financier intelligent
          </span>

          <h1
            className="animate-in mt-6 font-display text-[2.7rem] font-bold leading-[1.02] tracking-tight text-balance md:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            L&apos;avenir n&apos;appartient
            <br className="hidden sm:block" /> pas qu&apos;aux{" "}
            <span className="text-gradient-green">autres.</span>
          </h1>

          <p
            className="animate-in mt-5 max-w-md font-display text-lg italic text-muted md:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            Parce que derrière chaque rêve se cache un chemin.
          </p>

          <p
            className="animate-in mt-4 max-w-lg text-pretty text-[1.02rem] leading-relaxed text-muted"
            style={{ animationDelay: "220ms" }}
          >
            Wallet Master est un GPS financier qui aide chacun à comprendre sa
            situation, définir ses priorités et avancer étape par étape vers ses
            objectifs.
          </p>

          <div
            className="animate-in mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "300ms" }}
          >
            <a href="#solution" className="btn btn-primary">
              Découvrir Wallet Master
              <ArrowRight size={18} />
            </a>
            <a href="#principe" className="btn btn-ghost">
              Comment ça marche
            </a>
          </div>
        </div>

        {/* phone + trajectory */}
        <div className="relative flex justify-center md:justify-end">
          {/* trajectory arc behind the phone */}
          <svg
            className="pointer-events-none absolute -left-6 top-1/2 z-0 hidden w-[120%] -translate-y-1/2 md:block"
            viewBox="0 0 400 300"
            fill="none"
          >
            <path
              d="M10 250 C 90 250, 110 90, 200 90 S 320 40, 390 40"
              stroke="url(#traj)"
              strokeWidth="2"
              strokeDasharray="6 8"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="traj" x1="0" y1="0" x2="400" y2="0">
                <stop stopColor="var(--green)" stopOpacity="0" />
                <stop offset="0.5" stopColor="var(--green)" stopOpacity="0.7" />
                <stop offset="1" stopColor="var(--green)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <circle cx="10" cy="250" r="5" fill="var(--green)" />
            <circle cx="200" cy="90" r="4" fill="var(--blue)" />
            <circle
              cx="390"
              cy="40"
              r="6"
              fill="var(--green)"
              className="animate-pulse-dot"
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
            />
          </svg>

          <div className="relative z-10 w-[300px] max-w-full animate-float">
            <PhoneMockup src="/screen-parcours.png" alt="Écran Parcours de l'application Wallet Master : la trajectoire vers l'objectif" priority />

            {/* capacity tag — droite, sous le titre, sur la zone vide */}
            <div className="card absolute -right-5 top-[20%] hidden p-3 md:block">
              <div className="text-[11px] text-faint">Capacité disponible</div>
              <div className="font-mono text-base font-bold text-green">1 360 €</div>
            </div>

            {/* potential tag — bas gauche, compact */}
            <div className="card card-glow absolute -left-6 bottom-[22%] hidden items-center gap-2.5 p-2.5 pr-3.5 md:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green/12 text-green">
                <TrendingUp size={16} />
              </div>
              <div>
                <div className="font-mono text-sm font-bold text-green">+160 €/mois</div>
                <div className="text-[11px] text-faint">potentiel identifié</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* trust marquee */}
      <div className="relative z-10 mt-20 overflow-hidden border-y border-border py-4">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap text-sm uppercase tracking-widest text-faint">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>Insertion</span>
              <span className="text-green">•</span>
              <span>Accompagnement</span>
              <span className="text-green">•</span>
              <span>Éducation financière</span>
              <span className="text-green">•</span>
              <span>Emploi</span>
              <span className="text-green">•</span>
              <span>Autonomie</span>
              <span className="text-green">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
