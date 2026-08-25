import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Copyright — Wallet Master",
  description:
    "Conditions de protection et d'utilisation des contenus, interfaces et fonctionnalités de Wallet Master.",
};

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright" updatedAt="24 août 2026">
      <p>
        <strong>© 2026 Wallet Master. Tous droits réservés.</strong>
      </p>
      <p>
        L&apos;ensemble des contenus, éléments graphiques, interfaces, textes,
        illustrations, fonctionnalités, méthodes et autres éléments composant Wallet Master
        est protégé par les dispositions applicables en matière de propriété
        intellectuelle.
      </p>
      <p>
        Toute reproduction, représentation, modification, adaptation, distribution ou
        exploitation, totale ou partielle, sans autorisation préalable écrite de Wallet
        Master est interdite, sauf dans les cas expressément autorisés par la loi.
      </p>
      <p>
        Pour toute demande d&apos;autorisation, écrivez à{" "}
        <a href="mailto:vincent@wallet-master.com">vincent@wallet-master.com</a>.
      </p>
      <p>
        Les informations relatives à l&apos;éditeur, à l&apos;hébergeur et au régime de
        responsabilité figurent dans les{" "}
        <Link href="/mentions-legales">mentions légales</Link>.
      </p>
    </LegalPage>
  );
}
