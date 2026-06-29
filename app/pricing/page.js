import LegalPage from "../../components/LegalPage";
import { offers, customOffer } from "../../content/offers";

const SITE_URL = "https://grahaisystems.com";

export const metadata = {
  title: "Pricing | GrahAI Systems",
  description:
    "Transparent pricing for GrahAI Systems' productized AI engagements — fixed scope, fixed timeline, starting prices. Plus custom production AI builds.",
  alternates: { canonical: `${SITE_URL}/pricing` },
};

export default function PricingPage() {
  const sections = offers.map((o) => ({
    heading: `${o.name} — from ${o.priceFrom}`,
    paragraphs: [`${o.outcome} <span class="text-slate-400">(${o.timeline})</span>`],
    list: o.includes,
  }));

  sections.push({
    heading: `${customOffer.name} — ${customOffer.priceFrom}`,
    paragraphs: [`${customOffer.outcome} <span class="text-slate-400">(${customOffer.timeline})</span>`],
  });

  return (
    <LegalPage
      title="Pricing"
      updated="June 30, 2026"
      intro="Productized AI engagements with fixed scope, a fixed delivery window and a clear starting price. Need something custom? Our AI Solutions Architect prices it instantly."
      sections={[
        {
          heading: "How pricing works",
          list: [
            `Prices below are <strong>starting prices</strong>; the final price is confirmed for your specific scope on a discovery call.`,
            `Prices are charged in <strong>INR for customers in India</strong> and <strong>USD internationally</strong>. Applicable taxes (e.g. GST) may apply.`,
            `For larger projects, you pay a <strong>booking deposit</strong> online (credited to the project); smaller packages can be paid in full.`,
            `Get an instant, tailored quote at <a href="/start" class="text-azure-600 font-semibold">/start</a>.`,
          ],
        },
        ...sections,
        {
          heading: "Cancellations & refunds",
          paragraphs: [
            `See our <a href="/refund" class="text-azure-600 font-semibold">Cancellation & Refund Policy</a> and <a href="/terms" class="text-azure-600 font-semibold">Terms & Conditions</a>.`,
          ],
        },
      ]}
    />
  );
}
