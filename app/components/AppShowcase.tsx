import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";

const SCREENS = [
  {
    src: "/screen-accueil.png",
    alt: "Écran d'accueil de Wallet Master avec la répartition du budget",
    title: "Votre situation, d'un coup d'œil",
    desc: "Score financier, capacité disponible et répartition du budget.",
  },
  {
    src: "/screen-analyse.png",
    alt: "Écran d'analyse du profil financier de Wallet Master",
    title: "Analyse assistée par IA",
    desc: "Votre profil financier et une analyse personnalisée de vos marges.",
  },
  {
    src: "/screen-synthese.png",
    alt: "Écran de synthèse d'un parcours Wallet Master",
    title: "Un parcours qui vous rapproche du but",
    desc: "Des actions concrètes, chiffrées, transformées en étapes.",
  },
];

export default function AppShowcase() {
  return (
    <section className="relative overflow-hidden bg-bg-2 py-24 md:py-32">
      <div className="glow-blob left-1/2 top-0 h-[360px] w-[600px] -translate-x-1/2 bg-green/12" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">L&apos;application</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
            Pensée pour{" "}
            <span className="text-gradient-green">avancer</span>, pas pour surveiller.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted">
            Chaque écran a un rôle : comprendre où vous en êtes, décider quoi
            faire, et voir votre trajectoire se dessiner.
          </p>
        </Reveal>

        <div className="mt-16 grid items-start gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {SCREENS.map((s, i) => (
            <Reveal
              as="article"
              key={s.src}
              delay={i * 140}
              className="flex flex-col items-center text-center"
            >
              <PhoneMockup src={s.src} alt={s.alt} className="!max-w-[260px]" />
              <h3 className="mt-8 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 max-w-xs text-pretty leading-relaxed text-muted">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
