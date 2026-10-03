import { Suspense } from "react";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import PlanRoom from "../../../../components/hire/PlanRoom";

export const metadata = {
  title: "Your plan | GrahAI Agents",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default function PlanRoomPage({ params }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50/60">
        <Suspense fallback={null}>
          <PlanRoom id={params.id} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
