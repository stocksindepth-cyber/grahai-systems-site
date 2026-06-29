import LegalPage, { COMPANY } from "../../components/LegalPage";

const SITE_URL = "https://grahaisystems.com";

export const metadata = {
  title: "Contact Us | GrahAI Systems",
  description:
    "Get in touch with GrahAI Systems — email support@grahai.com. Based in Bengaluru, Karnataka, India. Building production-grade AI for India and the World.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <LegalPage
      title="Contact Us"
      updated="June 30, 2026"
      intro="We'd love to hear from you — whether you're scoping an AI project, have a question about an engagement, or need support."
      sections={[
        {
          heading: "Reach us",
          list: [
            `<strong>Email:</strong> <a href="mailto:support@grahai.com" class="text-azure-600 font-semibold">support@grahai.com</a> (fastest — we reply within 1–2 business days)`,
            `<strong>Phone:</strong> <a href="tel:+919619698372" class="text-azure-600 font-semibold">+91 96196 98372</a>`,
            `<strong>Business name:</strong> ${COMPANY.name}`,
            `<strong>Registered location:</strong> ${COMPANY.addressLine}`,
            `<strong>Hours:</strong> Monday–Friday, 10:00–18:00 IST`,
          ],
        },
        {
          heading: "Start an AI project",
          paragraphs: [
            `The fastest way to scope and price a project is our AI Solutions Architect at <a href="/start" class="text-azure-600 font-semibold">/start</a> — describe your problem and get an instant scoped quote and timeline. Prefer to talk first? Email us and we'll set up a discovery call.`,
          ],
        },
        {
          heading: "Support for existing engagements",
          paragraphs: [
            `If you're an existing client, email <a href="mailto:support@grahai.com" class="text-azure-600 font-semibold">support@grahai.com</a> with your project name and we'll route you to your delivery contact.`,
          ],
        },
      ]}
    />
  );
}
