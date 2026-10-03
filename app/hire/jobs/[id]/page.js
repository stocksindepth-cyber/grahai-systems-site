import { Suspense } from "react";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import JobRoom from "../../../../components/hire/JobRoom";

export const metadata = {
  title: "Your job room | GrahAI Agents",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default function JobRoomPage({ params }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50/60">
        <Suspense fallback={null}>
          <JobRoom id={params.id} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
