import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="Wallet Master" width={30} height={30} />
              <span className="font-display text-lg font-bold tracking-tight">
                Wallet Master
              </span>
            </div>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted">
              Votre GPS financier. Comprendre, définir, avancer — étape par étape,
              vers ce que vous souhaitez construire.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted">
              <ShieldCheck size={14} className="text-green" />
              Sécurisé et chiffré
            </div>
          </div>

          <div className="flex gap-16">
            <div>
              <div className="text-xs uppercase tracking-widest text-faint">
                Navigation
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href="#probleme" className="text-muted hover:text-text">
                    Le problème
                  </a>
                </li>
                <li>
                  <a href="#solution" className="text-muted hover:text-text">
                    La solution
                  </a>
                </li>
                <li>
                  <a href="#principe" className="text-muted hover:text-text">
                    Le principe
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-faint">
                Contact
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href="mailto:vincent@wallet-master.com"
                    className="text-muted hover:text-text"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a href="tel:+33782469047" className="text-muted hover:text-text">
                    Téléphone
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-faint md:flex-row">
          <span>
            © {new Date().getFullYear()} Wallet Master. Tous droits réservés.
          </span>
          <span className="font-mono">Wallet Master v1.0</span>
        </div>
      </div>
    </footer>
  );
}
