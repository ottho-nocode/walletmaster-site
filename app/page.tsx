import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import HowItWorks from "./components/HowItWorks";
import Ambition from "./components/Ambition";
import AppShowcase from "./components/AppShowcase";
import Principle from "./components/Principle";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Wallet Master",
  applicationCategory: "FinanceApplication",
  operatingSystem: "iOS, Android",
  description:
    "Wallet Master est un GPS financier qui aide chacun à comprendre sa situation, définir ses priorités et avancer étape par étape vers ses objectifs.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Ambition />
        <AppShowcase />
        <Principle />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
