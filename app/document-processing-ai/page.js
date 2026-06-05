import SEOLandingTemplate from "../../components/SEOLandingTemplate";

export const metadata = {
  title: "AI Document Processing Services | Advanced OCR & Parsing | Grah AI",
  description:
    "Extract tables, classify records, and audit invoices automatically using Gemini and Claude Visual-Language models. Custom AI pipelines by Grah AI Systems.",
};

export default function page() {
  const content = {
    headline: "Intelligent",
    keywordAccent: "AI Document Processing",
    subheadline:
      "Transform unstructured PDF invoices, tax sheets, and contracts into clean, verified database records using state-of-the-art vision LLM pipelines.",
    overviewTitle: "VLM-Powered Document Intelligence",
    overviewText: [
      "Traditional OCR tools fail the moment a text column is shifted slightly or when parsing scanned, low-resolution images. Our systems use Visual-Language Models (VLMs) like Gemini 1.5 Pro and Claude 3.5 Sonnet to 'see' and read documents just like a human reader would.",
      "Instead of building coordinate templates, we prompt the AI to extract structured objects directly: 'Analyze this invoice and return the line item rows as an array, verifying that the subtotal plus tax equals the grand total.'",
      "Grah AI Systems deploys resilient document processing pipelines that integrate validations, fraud check ledgers, and automated ERP insertions.",
    ],
    featuresTitle: "Document Systems We Build",
    features: [
      {
        name: "Automated Invoice Parsing",
        desc: "Read incoming invoices, extract buyer details, payment terms, tabular items, and verify mathematics.",
      },
      {
        name: "Contract Audit Engines",
        desc: "Scan lengthy lease agreements, contracts, or terms of service, flagging clauses that deviate from standard compliance templates.",
      },
      {
        name: "Tax and Financial Extraction",
        desc: "Structure information from complex tax forms, banking ledgers, and profit-and-loss statements with high fidelity.",
      },
      {
        name: "Medical Record Structuring",
        desc: "Convert scanned doctor scripts, treatment history charts, and insurance filings into unified database schemas.",
      },
      {
        name: "Form Validation Systems",
        desc: "Verify that user-uploaded government IDs, certificates, or applications are complete, signed, and unexpired.",
      },
      {
        name: "Fraud Ledger Auditing",
        desc: "Compare document totals against order logs and cross-check supplier IDs to prevent duplicate billing.",
      },
    ],
    specTitle: "Document Pipeline Specs",
    specs: [
      { name: "Visual Processing Models", val: "Google Gemini 1.5 Pro, Claude 3.5 Sonnet, Custom OCR pre-processors" },
      { name: "Input Formats Supported", val: "PDF, JPEG, PNG, TIFF, Excel, Word Doc files" },
      { name: "Math Integrity Auditing", val: "Deterministic Python code layer to double-check AI arithmetic" },
      { name: "System Target Outputs", val: "JSON files, SQL database rows, CSV downloads, ERP API calls" },
    ],
    faqs: [
      {
        q: "What is the accuracy rate of Visual AI Document processing?",
        a: "Our VLM pipelines achieve 96% to 99% accuracy on typed documents and high-resolution scans. For handwritten documents or faded files, we implement a Human-in-the-Loop validation dashboard to maintain 100% database accuracy.",
      },
      {
        q: "How do you handle privacy and security of sensitive documents?",
        a: "We deploy secure, enterprise API connections that do not use your data for model training. We can also build the pipeline to execute PII (Personally Identifiable Information) masking and encrypt all documents in transit and at rest.",
      },
      {
        q: "Can this system parse tables that span across multiple pages?",
        a: "Yes. Using long-context models like Gemini 1.5 Pro, the system parses multi-page tables, tracking header consistency across page breaks to produce a single consolidated JSON array.",
      },
    ],
  };

  return <SEOLandingTemplate {...content} />;
}
