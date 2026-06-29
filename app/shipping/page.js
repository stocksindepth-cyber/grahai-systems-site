import LegalPage, { COMPANY } from "../../components/LegalPage";

const SITE_URL = "https://grahaisystems.com";

export const metadata = {
  title: "Shipping & Delivery Policy | GrahAI Systems",
  description:
    "How GrahAI Systems delivers its AI engineering services — digital delivery, timelines and access.",
  alternates: { canonical: `${SITE_URL}/shipping` },
};

export default function ShippingPage() {
  return (
    <LegalPage
      title="Shipping & Delivery Policy"
      updated="June 30, 2026"
      intro={`${COMPANY.name} provides AI design, engineering and consulting services. We do not ship physical goods — all deliverables are provided digitally.`}
      sections={[
        {
          heading: "What we deliver",
          paragraphs: [
            `Our deliverables are digital: working software and AI systems, source code, configuration, documentation, access to deployed services, and reports. These are provided over email and online collaboration and delivery tools.`,
          ],
        },
        {
          heading: "Delivery timelines",
          list: [
            `Indicative timelines are shown per engagement (typically <strong>3–16 weeks</strong> depending on scope) and are confirmed in your engagement agreement after a discovery call.`,
            `Productized packages have target delivery windows (for example, 30–45 days) stated at the point of purchase.`,
            `Work begins after your booking is confirmed and the kickoff/discovery call is completed.`,
          ],
        },
        {
          heading: "How you receive deliverables",
          paragraphs: [
            `You'll receive access details, links and files at the email address used at checkout. For ongoing engagements, deliverables are shared incrementally against the milestones in your agreement.`,
          ],
        },
        {
          heading: "Delays",
          paragraphs: [
            `If a delivery is delayed, we'll communicate proactively with a revised timeline. Timelines may shift where they depend on inputs, access or approvals from your side.`,
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `Questions about delivery? Email <a href="mailto:support@grahai.com" class="text-azure-600 font-semibold">support@grahai.com</a>.`,
          ],
        },
      ]}
    />
  );
}
