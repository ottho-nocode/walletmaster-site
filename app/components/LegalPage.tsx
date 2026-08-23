import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * Mise en page commune aux pages légales (mentions légales, copyright).
 * Colonne de lecture étroite, pas de composant Reveal : ces pages doivent
 * rester lisibles sans JS et être indexables telles quelles.
 */
export default function LegalPage({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-28 md:px-8 md:pt-32">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
      >
        <ArrowLeft size={16} />
        Retour à l&apos;accueil
      </Link>

      <h1 className="mt-8 text-balance text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h1>
      <p className="mt-3 text-sm text-faint">Dernière mise à jour : {updatedAt}</p>

      <div className="legal-body mt-12">{children}</div>
    </main>
  );
}
