import SEOLandingTemplate from "../../components/SEOLandingTemplate";

export const metadata = {
  title: "AI Automation Services | Workflow & API Integration | Grah AI",
  description:
    "Connect legacy systems and eliminate manual business processes with custom AI-powered workflow automations. Product engineers at Grah AI Systems.",
};

export default function page() {
  const content = {
    headline: "Intelligent",
    keywordAccent: "AI Automation Services",
    subheadline:
      "Eliminate repetitive manual work. We integrate your databases, email triggers, and CRM platforms into automated pipelines powered by AI reasoning.",
    overviewTitle: "Custom AI Workflow Automation",
    overviewText: [
      "Rigid code libraries and legacy automation engines break the moment raw files arrive with slight formatting errors. Our AI automation systems use LLMs as intelligent routers. They analyze input files (like CSVs, invoices, emails), determine the structure, clean inconsistencies, and route data correctly.",
      "By binding custom code wrappers with API gateways, we create workflows that can read files from Google Drive, qualify details, fetch pricing logs, post bills, and notify managers on Slack in under a minute.",
      "Grah AI Systems helps companies reclaim hundreds of employee hours every month with enterprise-grade automated systems.",
    ],
    featuresTitle: "Workflows We Design & Build",
    features: [
      {
        name: "Email Intake & Routing",
        desc: "Monitor shared inboxes, extract core customer request fields, and route opportunities to target account managers.",
      },
      {
        name: "Bi-directional CRM Sync",
        desc: "Keep contact logs, pricing notes, and deal states synchronized across HubSpot, Salesforce, and custom databases.",
      },
      {
        name: "Auto-Billing & Posting",
        desc: "Detect receipt filings, map them to specific client files, calculate totals, and post accounts ledger records.",
      },
      {
        name: "Content Generation Engines",
        desc: "Automate creation of marketing drafts, product spec leaflets, or localized text copies using templates.",
      },
      {
        name: "Approval Notification Triggers",
        desc: "Set up auto-escalation paths that summarize operations data and prompt managers for click-to-approve triggers.",
      },
      {
        name: "Legacy System Syncing",
        desc: "Link modern cloud databases with local offline databases using secure API bridges and batch processors.",
      },
    ],
    specTitle: "Automation Performance Specs",
    specs: [
      { name: "Automation Frameworks", val: "Custom Node.js/Python orchestration, n8n, Zapier Developer" },
      { name: "Response Latencies", val: "Sub-second database events, 5-15s LLM reasoning operations" },
      { name: "Safety Audits", val: "Complete execution logging, failover retries, Slack error notifications" },
      { name: "Deployment Models", val: "Secure AWS Cloud, Firebase Cloud Functions, Docker setups" },
    ],
    faqs: [
      {
        q: "Do we have to replace our existing CRM/ERP to use AI automation?",
        a: "No. Our systems are built to wrap around your current infrastructure. We write custom integration layers that call your CRM, ERP, and database APIs directly, requiring zero migration overhead.",
      },
      {
        q: "What happens if an API endpoint goes offline?",
        a: "We build our workflows with resilient retry mechanics. If a third-party API is down, the system logs the failure, saves the current payload state, queues a retry schedule, and notifies your team via Slack if the outage persists.",
      },
      {
        q: "What is the return on investment (ROI) for these services?",
        a: "Most clients see immediate returns. By automating tasks like invoice parsing or lead qualification, companies save 10 to 30 employee hours per week, completely eliminate human data entry typos, and decrease customer response latency to seconds.",
      },
    ],
  };

  return <SEOLandingTemplate {...content} />;
}
