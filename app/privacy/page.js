import LegalPage, { COMPANY } from "../../components/LegalPage";

const SITE_URL = "https://grahaisystems.com";

export const metadata = {
  title: "Privacy Policy | GrahAI Systems",
  description:
    "How GrahAI Systems collects, uses and protects your personal information.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="June 30, 2026"
      intro={`This Privacy Policy explains how ${COMPANY.name} ("we", "us") collects, uses, shares and protects your information when you use grahaisystems.com and our services. We collect only what we need to scope, quote, deliver and support your engagement.`}
      sections={[
        {
          heading: "1. Information we collect",
          list: [
            `<strong>Contact details</strong> you provide — name, work email, company.`,
            `<strong>Project information</strong> — the requirements, use case, scale and integrations you describe so we can scope and price a solution.`,
            `<strong>Payment information</strong> — handled by Razorpay. We receive a payment confirmation and order reference; we do <strong>not</strong> collect or store your full card or banking details.`,
            `<strong>Usage data</strong> — basic analytics (pages visited, approximate country for currency) to operate and improve the site.`,
          ],
        },
        {
          heading: "2. How we use it",
          list: [
            `To generate your AI project scope, timeline and price.`,
            `To respond to enquiries, schedule discovery calls and deliver engagements.`,
            `To process payments and send receipts and project communications.`,
            `To meet legal, accounting and tax obligations.`,
          ],
        },
        {
          heading: "3. AI processing of your requirements",
          paragraphs: [
            `When you request an instant scope, the project description you submit is sent to our AI provider (Anthropic) to generate a recommended package and estimate. We do not include this content in model training, and we ask you not to submit confidential third-party data or secrets in the scoping form.`,
          ],
        },
        {
          heading: "4. Service providers we share with",
          list: [
            `<strong>Razorpay</strong> — payment processing.`,
            `<strong>Anthropic</strong> — AI model used to generate scopes/estimates.`,
            `<strong>Resend</strong> — transactional and notification email.`,
            `<strong>Vercel</strong> — website hosting and infrastructure.`,
          ],
        },
        {
          paragraphs: [
            `We share information with these providers only as needed to deliver the service, and we do not sell your personal information.`,
          ],
        },
        {
          heading: "5. Data retention",
          paragraphs: [
            `We keep enquiry and engagement records for as long as needed to provide our services and to meet legal, tax and accounting requirements, after which we delete or anonymise them.`,
          ],
        },
        {
          heading: "6. Your rights",
          paragraphs: [
            `You may request access to, correction of, or deletion of your personal information by emailing <a href="mailto:support@grahai.com" class="text-azure-600 font-semibold">support@grahai.com</a>. We'll respond within a reasonable time and as required by applicable law.`,
          ],
        },
        {
          heading: "7. Security",
          paragraphs: [
            `We use industry-standard measures to protect your data, including encrypted transport (HTTPS) and trusted infrastructure providers. No method of transmission is 100% secure, but we work to protect your information.`,
          ],
        },
        {
          heading: "8. Contact",
          paragraphs: [
            `${COMPANY.name}, ${COMPANY.addressLine}. Questions about privacy? Email <a href="mailto:support@grahai.com" class="text-azure-600 font-semibold">support@grahai.com</a>.`,
          ],
        },
      ]}
    />
  );
}
