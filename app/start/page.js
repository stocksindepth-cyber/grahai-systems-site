import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StartFlow from "../../components/StartFlow";

const SITE_URL = "https://grahaisystems.com";

export const metadata = {
  title: "Get an Instant AI Project Scope & Price | GrahAI Systems",
  description:
    "Describe your problem and our AI Solutions Architect returns a scoped package, delivery timeline and price in seconds — then book your build. Production-grade AI for India and the World.",
  alternates: { canonical: `${SITE_URL}/start` },
};

export default function StartPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-slate-50/40 pt-12 pb-24 sm:pt-16 sm:pb-28">
        <div className="absolute inset-0 bg-grid pointer-events-none -z-10" />
        <div className="absolute top-10 left-10 h-80 w-80 rounded-full bg-azure-500/5 blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-purple-500/5 blur-[140px] pointer-events-none -z-10" />

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-azure-200 bg-azure-50/50 px-3.5 py-1.5 text-xs font-semibold text-azure-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              AI Solutions Architect · live
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Scope your AI build in <span className="text-brand-gradient">60 seconds.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              Tell us the problem. Our AI architect proposes the right package, a phased delivery
              timeline and a price — then you can book it on the spot. A real discovery call confirms
              everything before we start.
            </p>
          </div>

          <StartFlow />
        </div>
      </main>
      <Footer />
    </>
  );
}
