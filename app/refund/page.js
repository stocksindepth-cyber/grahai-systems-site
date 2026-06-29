import LegalPage, { COMPANY } from "../../components/LegalPage";

const SITE_URL = "https://grahaisystems.com";

export const metadata = {
  title: "Cancellation & Refund Policy | GrahAI Systems",
  description:
    "GrahAI Systems' cancellation and refund policy for AI engineering engagements and booking deposits.",
  alternates: { canonical: `${SITE_URL}/refund` },
};

export default function RefundPage() {
  return (
    <LegalPage
      title="Cancellation & Refund Policy"
      updated="June 30, 2026"
      intro={`We want you to feel confident booking an AI engagement with ${COMPANY.name}. This policy explains how cancellations and refunds work for the payments you make on this website.`}
      sections={[
        {
          heading: "Booking deposits",
          paragraphs: [
            `For larger projects, the amount you pay online is a <strong>booking deposit</strong> that reserves your delivery slot and is credited in full toward your project. It is not an additional charge.`,
          ],
        },
        {
          heading: "Cancelling before work begins",
          paragraphs: [
            `If you cancel <strong>before your discovery call or before any work has begun</strong>, your booking deposit is fully refundable. Email <a href="mailto:support@grahai.com" class="text-azure-600 font-semibold">support@grahai.com</a> with your order reference and we'll process the refund.`,
          ],
        },
        {
          heading: "If scope can't be agreed",
          paragraphs: [
            `If, after the discovery call, we determine we cannot deliver the agreed scope — or you and we cannot agree on a final scope — you receive a <strong>full refund</strong> of any amount paid, less only work already performed at your request (if any).`,
          ],
        },
        {
          heading: "After work has begun",
          paragraphs: [
            `Once a project is underway against a confirmed scope, amounts covering work already completed or in progress are non-refundable, because that work has been performed for you. Any unused, prepaid balance for milestones not yet started is refundable on cancellation. Specific terms are set out in your engagement agreement.`,
          ],
        },
        {
          heading: "Productized packages paid in full",
          paragraphs: [
            `For smaller fixed-scope packages paid in full, you may cancel for a full refund before delivery work begins. Once delivery has started, refunds are pro-rated for work not yet performed.`,
          ],
        },
        {
          heading: "How to request a refund",
          list: [
            `Email <a href="mailto:support@grahai.com" class="text-azure-600 font-semibold">support@grahai.com</a> with the email used at checkout and your order/payment reference.`,
            `Approved refunds are issued to your original payment method via Razorpay, typically within <strong>5–7 business days</strong> (your bank may take a little longer to reflect it).`,
          ],
        },
        {
          heading: "Questions",
          paragraphs: [
            `If anything is unclear, email us before paying and we'll walk you through it. We'd always rather get the scope right up front than process a refund later.`,
          ],
        },
      ]}
    />
  );
}
