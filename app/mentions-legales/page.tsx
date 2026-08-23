import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales — Wallet Master",
  description:
    "Éditeur, hébergeur, objet du service, propriété intellectuelle, responsabilité et données personnelles de Wallet Master.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales" updatedAt="24 août 2026">
      <h2>1. Éditeur</h2>
      <p>L&apos;application et les services Wallet Master sont édités par :</p>
      <div className="legal-block">
        <strong>Wallet Master</strong>
        <br />
        Société par actions simplifiée (SAS)
        <br />
        Capital social : 1000 €
        <br />
        Siège social : 77 chemin de Richard, 05500 St Laurent du Cros
        <br />
        Immatriculée au RCS de Gap sous le numéro 943 064 881
      </div>
      <p>Directeur de la publication : Vincent Ratel</p>
      <p>
        Contact :{" "}
        <a href="mailto:vincent@wallet-master.com">vincent@wallet-master.com</a>
      </p>

      <h2>2. Hébergement</h2>
      <p>
        L&apos;application, le site et/ou les données associées à Wallet Master sont
        hébergés par :
      </p>
      <div className="legal-block">
        <strong>Vercel Inc.</strong>
        <br />
        440 N Barranca Ave #4133
        <br />
        Covina, CA 91723
        <br />
        États-Unis
      </div>
      <p>
        Site internet :{" "}
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          https://vercel.com
        </a>
      </p>

      <h2>3. Objet du service</h2>
      <p>
        Wallet Master est un outil numérique d&apos;accompagnement et d&apos;éducation
        financière destiné à aider ses utilisateurs à mieux comprendre leur situation
        financière, organiser leur budget, définir leurs objectifs et suivre leur
        progression.
      </p>
      <p>
        Les informations, analyses, indicateurs, simulations, contenus pédagogiques et
        suggestions proposés par Wallet Master ont une vocation informative et éducative.
      </p>

      <h2>4. Absence de conseil financier personnalisé</h2>
      <p>
        Sauf indication expresse contraire dans le cadre d&apos;un service fourni par un
        professionnel disposant des habilitations nécessaires, Wallet Master ne fournit
        pas de conseil en investissement, de recommandation personnalisée portant sur des
        instruments financiers, de conseil juridique, fiscal ou comptable.
      </p>
      <p>
        Les informations et suggestions fournies par l&apos;application ne constituent
        notamment ni une recommandation d&apos;achat ou de vente d&apos;un produit
        financier, ni une incitation à réaliser une opération d&apos;investissement.
      </p>
      <p>
        L&apos;utilisateur demeure responsable de ses décisions financières et est invité,
        lorsque sa situation le nécessite, à consulter un professionnel dûment habilité.
      </p>

      <h2>5. Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des éléments constituant Wallet Master, notamment les textes,
        contenus pédagogiques, interfaces, éléments graphiques, illustrations, logos, bases
        de données, logiciels et fonctionnalités originales, est susceptible d&apos;être
        protégé par les dispositions françaises et européennes relatives à la propriété
        intellectuelle.
      </p>
      <p>
        Sauf autorisation préalable écrite, toute reproduction, représentation, adaptation,
        modification, distribution ou exploitation totale ou partielle des éléments
        protégés de Wallet Master est interdite, sous réserve des exceptions prévues par la
        loi.
      </p>
      <p>© 2026 Wallet Master. Tous droits réservés.</p>

      <h2>6. Responsabilité</h2>
      <p>
        Wallet Master met en œuvre des moyens raisonnables afin de fournir des informations
        et analyses pertinentes.
      </p>
      <p>
        Toutefois, les résultats présentés peuvent notamment dépendre des informations
        communiquées par l&apos;utilisateur et des données disponibles au moment de leur
        traitement.
      </p>
      <p>
        Wallet Master ne garantit pas qu&apos;une action, suggestion ou méthode proposée
        permettra d&apos;obtenir un résultat financier déterminé.
      </p>
      <p>
        L&apos;utilisation du service et les décisions prises à partir des informations
        présentées restent sous la responsabilité de l&apos;utilisateur, dans les limites
        prévues par la législation applicable.
      </p>

      <h2>7. Données personnelles</h2>
      <p>
        Dans le cadre de son fonctionnement, Wallet Master peut être amené à traiter des
        données à caractère personnel.
      </p>
      <p>
        Ces traitements sont réalisés conformément à la réglementation applicable,
        notamment au Règlement général sur la protection des données (RGPD) et à la loi
        française relative à l&apos;informatique, aux fichiers et aux libertés.
      </p>
      <p>
        Les informations détaillées concernant les données collectées, leurs finalités,
        leur durée de conservation, leurs destinataires ainsi que les droits des
        utilisateurs sont précisées dans la Politique de confidentialité de Wallet Master.
      </p>
      <p>
        Pour toute question relative aux données personnelles ou pour exercer ses droits,
        l&apos;utilisateur peut contacter{" "}
        <a href="mailto:vincent@wallet-master.com">vincent@wallet-master.com</a>.
      </p>

      <h2>8. Cookies et traceurs</h2>
      <p>
        Lorsque Wallet Master utilise des cookies ou autres traceurs soumis au consentement
        de l&apos;utilisateur, celui-ci est informé de leur utilisation et peut accepter ou
        refuser les traceurs concernés conformément à la réglementation applicable.
      </p>
      <p>
        Les modalités détaillées sont précisées dans la Politique de confidentialité et, le
        cas échéant, dans la politique relative aux cookies.
      </p>

      <h2>9. Droit applicable</h2>
      <p>Les présentes mentions légales sont soumises au droit français.</p>
      <p>
        En cas de difficulté liée à l&apos;utilisation de Wallet Master, l&apos;utilisateur
        est invité à contacter Wallet Master afin de rechercher une solution amiable, sans
        préjudice des droits et recours dont il dispose en application de la législation
        applicable.
      </p>
    </LegalPage>
  );
}
