import { Mail, Phone, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-bg-2 py-24 md:py-32">
      <div className="glow-blob right-[-5%] bottom-[-10%] h-[420px] w-[420px] bg-green/20" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          {/* copy */}
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
              Construisons l&apos;avenir financier{" "}
              <span className="text-gradient-green">autrement.</span>
            </h2>
            <p className="mt-6 max-w-lg text-pretty leading-relaxed text-muted">
              Wallet Master travaille avec les acteurs de l&apos;insertion, de
              l&apos;accompagnement, de l&apos;éducation et de l&apos;emploi afin
              de favoriser l&apos;autonomie financière et la réalisation des
              projets de vie.
            </p>
            <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted">
              Nous sommes toujours ouverts aux échanges avec les structures,
              partenaires et organisations souhaitant participer à cette mission.
            </p>
          </Reveal>

          {/* contact cards */}
          <Reveal delay={120} className="flex flex-col gap-4">
            <a
              href="mailto:mailwalletmaster@gmail.com"
              className="card card-glow group flex items-center gap-4 p-6 transition-colors duration-300 hover:border-green/40"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green/12 text-green">
                <Mail size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs uppercase tracking-widest text-faint">
                  Email
                </div>
                <div className="truncate font-mono text-[1.05rem] font-semibold text-text">
                  mailwalletmaster@gmail.com
                </div>
              </div>
              <ArrowUpRight
                size={20}
                className="text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-green"
              />
            </a>

            <a
              href="tel:+33782469047"
              className="card card-glow group flex items-center gap-4 p-6 transition-colors duration-300 hover:border-green/40"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green/12 text-green">
                <Phone size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs uppercase tracking-widest text-faint">
                  Téléphone
                </div>
                <div className="font-mono text-[1.05rem] font-semibold text-text">
                  07 82 46 90 47
                </div>
              </div>
              <ArrowUpRight
                size={20}
                className="text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-green"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
