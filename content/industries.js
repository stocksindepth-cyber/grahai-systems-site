// industries.js — programmatic-SEO content for the /industries/[slug] template.
// Mirrors the solutions.js schema (keys map 1:1 to the shared page component).

export const industries = [
  {
    slug: "manufacturing",
    industry: "Manufacturing",
    metaTitle: "AI for Manufacturing | GrahAI Systems",
    metaDescription: "We build and operate AI systems for manufacturers — predictive maintenance copilots, RFQ triage, QA defect classification and SOP agents wired into your MES/ERP.",
    headline: "AI for manufacturing that",
    keywordAccent: "ships to the floor",
    subheadline: "Predictive maintenance, supplier RFQ triage and shop-floor SOP agents — built, deployed and operated by a team that runs its own production AI products.",
    overviewTitle: "Where AI actually moves the needle in Manufacturing",
    overviewText: [
      "Manufacturing data is messy in a specific way: sensor streams from PLCs, unstructured maintenance logs, supplier emails with PDF RFQs, and tribal knowledge locked in a few senior operators’ heads. The wins come from connecting those islands — a predictive-maintenance model that reads vibration and temperature telemetry to flag a bearing before it seizes, or a RAG agent that answers a line operator’s SOP question in their own language at 2am.",
      "Most manufacturers don’t need a moonshot. They need RFQ triage that parses an inbound quote request, matches it against the BOM and routes it with a suggested price, cutting days off the quoting cycle. They need QA defect logs auto-classified against a known taxonomy so the same root cause stops recurring across shifts. These are bounded, high-ROI problems where a well-scoped agent earns its keep in a quarter.",
      "We integrate at the systems layer that actually matters on the floor — MES, ERP (SAP, Tally), historian databases and OPC-UA tag servers — not just a chatbot bolted on the side. Because we operate our own AI products in production for India and the World, we design for the realities you live with: spotty connectivity, audit trails, and the need to fail safe rather than fail loud."
    ],
    featuresTitle: "What we build for Manufacturing teams",
    features: [
      { name: "Predictive maintenance copilot", desc: "Ingests sensor and historian telemetry to forecast equipment failure and generate prioritized work orders before downtime hits." },
      { name: "Supplier RFQ triage agent", desc: "Parses inbound RFQ emails and PDFs, matches line items to your BOM, and drafts a costed quote for human approval." },
      { name: "QA defect classifier", desc: "Auto-tags defect logs and inspection images against your taxonomy so recurring root causes surface across shifts and plants." },
      { name: "Multilingual SOP agent", desc: "A RAG assistant over your work instructions and safety SOPs that answers operator questions in Hindi, Tamil or English on the line." },
      { name: "Production-planning assistant", desc: "Reasons over orders, capacity and material availability to suggest schedules and flag bottlenecks for the planner to confirm." },
      { name: "Warranty & returns analyzer", desc: "Clusters field-failure reports and warranty claims to feed engineering with ranked, evidence-backed quality signals." }
    ],
    specTitle: "How we deliver",
    specs: [
      { name: "Integrations", val: "MES, ERP (SAP/Tally), historian DBs, OPC-UA/Modbus tag servers, CMMS" },
      { name: "Models", val: "Frontier LLMs for reasoning; tuned vision/time-series models for defects and telemetry" },
      { name: "Guardrails", val: "Human-in-the-loop on every work order and quote; full audit trail; fail-safe defaults" },
      { name: "Engagement", val: "Fixed-scope build, 4–10 weeks, then optional operate retainer" },
      { name: "Typical budget", val: "₹20L–₹50L / $20k–$60k per production system" },
      { name: "Data & compliance", val: "On-prem or VPC deployment for IP-sensitive process data; no training on your data" }
    ],
    faqs: [
      { q: "Our process data is sensitive IP — where does it run?", a: "We deploy on-prem or inside your own VPC when IP sensitivity demands it, and we never train shared models on your data. The same discipline applies to our own production products, so this is muscle memory, not a checkbox." },
      { q: "Can you integrate with our existing MES and ERP?", a: "Yes — MES, SAP, Tally, historian databases and OPC-UA tag servers are standard integration targets for us. We read from the systems of record rather than asking your team to re-key anything." },
      { q: "Predictive maintenance needs history — what if our data is thin?", a: "We start with rule-based and physics-informed baselines that work on limited history, then layer learned models as telemetry accumulates. You get value early instead of waiting a year for a dataset." },
      { q: "How do you avoid an AI work order shutting down a line wrongly?", a: "Every action stays human-in-the-loop — the system proposes work orders and the maintenance lead approves them. We design to fail safe, with full audit trails for every recommendation." },
      { q: "What does a first project typically cost and how long?", a: "Most production systems land in the ₹20L–₹50L / $20k–$60k range over a 4–10 week fixed-scope build, with an optional retainer if you want us to operate it. We scope tightly so the first win is fast." },
      { q: "How do we get started?", a: "Book a discovery call and we’ll map your highest-ROI use case — usually RFQ triage or maintenance — into a fixed-scope proposal. You leave the call with a clear plan and a quote." }
    ]
  },
  {
    slug: "healthcare",
    industry: "Healthcare",
    metaTitle: "AI for Healthcare | GrahAI Systems",
    metaDescription: "HIPAA-aware AI for healthcare — clinical documentation, prior-auth automation, patient triage and EHR-integrated agents built on HL7/FHIR by an AI studio that operates its own products.",
    headline: "AI for healthcare that",
    keywordAccent: "respects the chart",
    subheadline: "Clinical documentation, prior-authorization automation and EHR-integrated patient agents — built with the privacy discipline a regulated workflow demands.",
    overviewTitle: "Where AI actually moves the needle in Healthcare",
    overviewText: [
      "In healthcare the bottleneck is rarely diagnosis — it’s the documentation and administrative load surrounding care. Clinicians spend hours on notes, coding and prior authorizations. An ambient documentation agent that drafts a structured SOAP note from a visit, or a prior-auth bot that assembles the payer packet from the chart, gives time back to people who didn’t train to be typists.",
      "The data is governed by HL7/FHIR standards and wrapped in HIPAA (and India’s DPDP) obligations, so the engineering bar is high: PHI must be minimized, access logged, and every model output traceable. We treat de-identification, audit logging and consent as first-class design constraints, not afterthoughts bolted on before launch.",
      "Front-of-house matters too: patient-facing triage and scheduling agents that route symptoms to the right level of care, multilingual intake that works across India and the World, and RAG over clinical guidelines so staff get answers grounded in your protocols rather than the open internet. Everything is built to assist clinicians, never to autonomously make a clinical decision."
    ],
    featuresTitle: "What we build for Healthcare teams",
    features: [
      { name: "Ambient clinical scribe", desc: "Generates structured SOAP notes and suggested ICD/CPT codes from a visit transcript for clinician review and sign-off." },
      { name: "Prior-authorization agent", desc: "Pulls the relevant chart evidence and assembles payer prior-auth packets, cutting turnaround from days to minutes." },
      { name: "Patient triage assistant", desc: "A symptom-aware front-door agent that routes patients to the right care level and schedules without replacing clinical judgment." },
      { name: "Clinical guideline RAG", desc: "Answers staff questions grounded strictly in your protocols, formularies and care pathways with cited sources." },
      { name: "Claims & denial analyzer", desc: "Reviews denied claims, identifies the documentation gap, and drafts the appeal for billing-team approval." },
      { name: "Multilingual patient intake", desc: "Collects history and consent across languages, writing clean structured data straight into the EHR." }
    ],
    specTitle: "How we deliver",
    specs: [
      { name: "Integrations", val: "EHR/EMR (Epic, Cerner, local HIS), HL7 v2, FHIR APIs, scheduling and billing systems" },
      { name: "Models", val: "Frontier LLMs for reasoning, with PHI minimization and grounding on your clinical content" },
      { name: "Guardrails", val: "Clinician sign-off mandatory; no autonomous clinical decisions; full access and output logging" },
      { name: "Engagement", val: "Fixed-scope build, 4–10 weeks, then optional operate retainer" },
      { name: "Typical budget", val: "₹20L–₹50L / $20k–$60k per production system" },
      { name: "Data & compliance", val: "HIPAA and DPDP aligned; BAA available; de-identification and consent built in" }
    ],
    faqs: [
      { q: "Are you HIPAA compliant and can you sign a BAA?", a: "Yes — we build to HIPAA and India’s DPDP, minimize PHI, log all access, and can execute a BAA before any data touches the system. We operate our own production AI products under the same privacy discipline." },
      { q: "Will the AI make clinical decisions?", a: "No. Every system assists — drafting notes, assembling packets, surfacing evidence — while a licensed clinician makes and signs off on the decision. We design explicitly against autonomous clinical action." },
      { q: "Can you integrate with our EHR?", a: "We integrate via HL7 v2 and FHIR with major EHRs and local HIS platforms, reading and writing structured data so staff aren’t re-keying. Scheduling and billing systems are common targets too." },
      { q: "How do you prevent hallucinated medical advice?", a: "Patient- and staff-facing answers are RAG-grounded on your protocols and formularies with cited sources, and we constrain scope so the agent declines rather than guesses outside its evidence." },
      { q: "What does a first project cost and how long does it take?", a: "Typically ₹20L–₹50L / $20k–$60k over a 4–10 week fixed-scope build, with an optional operate retainer. We start with one high-load workflow like documentation or prior-auth." },
      { q: "How do we get started?", a: "Book a discovery call. We’ll identify your heaviest administrative burden, design a compliant pilot, and hand you a fixed-scope proposal with a quote." }
    ]
  },
  {
    slug: "insurance",
    industry: "Insurance",
    metaTitle: "AI for Insurance | GrahAI Systems",
    metaDescription: "AI for insurers — claims triage, fraud-signal detection, underwriting copilots and policy-document RAG integrated with your core and claims systems, built by an AI studio that runs its own products.",
    headline: "AI for insurance that",
    keywordAccent: "pays the right claims",
    subheadline: "Claims triage, underwriting copilots and fraud-signal detection — built with the auditability and fairness controls a regulated insurer needs.",
    overviewTitle: "Where AI actually moves the needle in Insurance",
    overviewText: [
      "Insurance runs on documents and judgment under uncertainty. Claims arrive as a chaotic bundle — FNOL forms, photos, repair estimates, medical reports — and the first job is triage: route the simple ones to fast-track, flag the suspicious ones, and surface the missing documents. An agent that reads the whole bundle and produces a structured summary with a recommended path saves adjusters from hours of intake work.",
      "Underwriting is the other lever. A copilot that pulls risk factors from application data and external sources, checks them against your appetite and guidelines, and drafts a rationale lets underwriters spend their time on the genuinely ambiguous cases. Done right, it improves consistency and leaves an auditable trail of why a decision was made — which regulators and reinsurers both want.",
      "Fraud is a pattern problem, not a magic detector. We build systems that score claims against known fraud signals and network patterns, then explain the why so a human investigator can act. Across claims, underwriting and policy servicing we keep every model decision explainable and bias-tested, because in insurance an opaque or unfair model is a liability, not an asset."
    ],
    featuresTitle: "What we build for Insurance teams",
    features: [
      { name: "Claims triage agent", desc: "Reads the full FNOL bundle — forms, photos, estimates — and routes each claim with a structured summary and missing-document checklist." },
      { name: "Underwriting copilot", desc: "Extracts risk factors, checks them against appetite and guidelines, and drafts an auditable rationale for the underwriter." },
      { name: "Fraud-signal scorer", desc: "Flags claims against known fraud patterns and network links with an explanation an investigator can verify." },
      { name: "Policy-document RAG", desc: "Answers agent and customer questions grounded in actual policy wordings, endorsements and exclusions with citations." },
      { name: "Subrogation finder", desc: "Scans closed claims to surface missed recovery opportunities and drafts the supporting case file." },
      { name: "Renewal & retention assistant", desc: "Identifies at-risk policies and drafts personalized retention outreach for the servicing team to approve." }
    ],
    specTitle: "How we deliver",
    specs: [
      { name: "Integrations", val: "Core policy admin, claims systems, document management, IRDAI/regulator reporting feeds" },
      { name: "Models", val: "Frontier LLMs for document reasoning; tuned scoring models for fraud and risk signals" },
      { name: "Guardrails", val: "Explainable decisions, bias testing, human approval on every claim and underwriting outcome" },
      { name: "Engagement", val: "Fixed-scope build, 4–10 weeks, then optional operate retainer" },
      { name: "Typical budget", val: "₹20L–₹50L / $20k–$60k per production system" },
      { name: "Data & compliance", val: "Regulator-aligned audit trails; PII protection; fairness and explainability documentation" }
    ],
    faqs: [
      { q: "Can the AI explain why it flagged or routed a claim?", a: "Yes — explainability is non-negotiable in insurance, so every decision carries the evidence and reasoning behind it. Investigators and underwriters can verify rather than trust blindly, and the trail satisfies audit." },
      { q: "How do you keep underwriting and claims models fair?", a: "We bias-test models against protected attributes and proxies, document the methodology, and keep a human as the final approver. Fairness and auditability are designed in, not retrofitted." },
      { q: "Will this integrate with our core and claims systems?", a: "We integrate with core policy administration, claims platforms and document management systems, reading and writing structured data so adjusters and underwriters work in their existing tools." },
      { q: "How do you handle the privacy of medical and financial data in claims?", a: "PII and sensitive documents are access-controlled, logged, and never used to train shared models. We run our own production products under the same data discipline for India and the World." },
      { q: "What does a first project cost and how long?", a: "Most production systems are ₹20L–₹50L / $20k–$60k over a 4–10 week fixed-scope build, with an optional operate retainer. We usually start with claims triage for the fastest measurable win." },
      { q: "How do we get started?", a: "Book a discovery call. We’ll pick the workflow with the clearest ROI — often triage or underwriting support — and turn it into a fixed-scope proposal with a quote." }
    ]
  },
  {
    slug: "logistics-supply-chain",
    industry: "Logistics & Supply Chain",
    metaTitle: "AI for Logistics & Supply Chain | GrahAI Systems",
    metaDescription: "AI for logistics — shipment exception agents, freight document automation, demand forecasting and TMS/WMS-integrated copilots built by an AI studio that operates its own production products.",
    headline: "AI for logistics that",
    keywordAccent: "clears the exceptions",
    subheadline: "Shipment exception handling, freight-document automation and demand forecasting — wired into your TMS, WMS and EDI feeds so the team works the real problems.",
    overviewTitle: "Where AI actually moves the needle in Logistics & Supply Chain",
    overviewText: [
      "Logistics is an exception-handling business. The happy path is automated; the cost lives in the deviations — a delayed container, a customs hold, a mismatched PO and invoice. An agent that watches your TMS and EDI feeds, detects the exception early, drafts the customer notification and proposes the recovery action turns a reactive ops desk into a proactive one.",
      "Documents are the other tax. Bills of lading, commercial invoices, packing lists and customs paperwork arrive as PDFs and scans that someone re-keys into the WMS. A freight-document agent extracts and validates that data, reconciles it against the booking, and flags discrepancies before they become demurrage charges or clearance delays.",
      "Above the day-to-day, planners want better forecasts. We build demand and ETA models that fold in seasonality, lead-time variability and live disruption signals, then surface them inside the planner’s workflow rather than a separate dashboard nobody opens. Everything connects to the systems of record — TMS, WMS, EDI, carrier APIs — because in logistics an insight that isn’t in the operational flow is an insight that never gets used."
    ],
    featuresTitle: "What we build for Logistics & Supply Chain teams",
    features: [
      { name: "Shipment exception agent", desc: "Monitors TMS and EDI feeds to detect delays and holds early, then drafts customer alerts and recovery options." },
      { name: "Freight document automation", desc: "Extracts and validates BOLs, invoices and packing lists, reconciling them against bookings to prevent demurrage and clearance delays." },
      { name: "Demand & ETA forecasting", desc: "Models seasonality, lead-time variability and disruption signals, surfacing predictions inside the planner’s existing workflow." },
      { name: "Carrier-quote comparison", desc: "Parses incoming carrier rates and tenders, normalizes them, and recommends the best option against your service constraints." },
      { name: "Customs classification helper", desc: "Suggests HS codes and flags compliance issues from product descriptions for broker confirmation." },
      { name: "Track-and-trace copilot", desc: "Answers where-is-my-order questions across carriers in natural language for support and customer self-service." }
    ],
    specTitle: "How we deliver",
    specs: [
      { name: "Integrations", val: "TMS, WMS, EDI (X12/EDIFACT), carrier and customs APIs, ERP order systems" },
      { name: "Models", val: "Frontier LLMs for document and exception reasoning; tuned forecasting models for demand and ETA" },
      { name: "Guardrails", val: "Human approval on customer-facing actions and carrier commitments; full audit trail" },
      { name: "Engagement", val: "Fixed-scope build, 4–10 weeks, then optional operate retainer" },
      { name: "Typical budget", val: "₹20L–₹50L / $20k–$60k per production system" },
      { name: "Data & compliance", val: "Trade-data handling, customs accuracy controls, and per-customer data isolation" }
    ],
    faqs: [
      { q: "Can you connect to our TMS, WMS and EDI?", a: "Yes — TMS, WMS, X12/EDIFACT EDI and carrier and customs APIs are standard integration targets for us. We work the systems of record so insights land in the operational flow, not a side dashboard." },
      { q: "How accurate is the freight-document extraction?", a: "We validate every extracted field against the booking and flag discrepancies for human confirmation rather than auto-committing. The goal is to remove re-keying while keeping a person on anything ambiguous." },
      { q: "Will the exception agent message customers on its own?", a: "It drafts the notification and recovery option; a human approves before anything goes out, unless you explicitly opt into auto-send for low-risk templates. Customer-facing actions stay controlled." },
      { q: "Our forecasting history is noisy — will the models work?", a: "We blend statistical baselines with learned models and live disruption signals, so you get usable forecasts even with imperfect history, improving as data accumulates." },
      { q: "What does a first project cost and how long?", a: "Typically ₹20L–₹50L / $20k–$60k over a 4–10 week fixed-scope build, with an optional operate retainer. Exception handling or document automation usually delivers the fastest payback." },
      { q: "How do we get started?", a: "Book a discovery call. We’ll find where exceptions and re-keying cost you most and turn it into a fixed-scope proposal with a quote." }
    ]
  },
  {
    slug: "retail-ecommerce",
    industry: "Retail & E-commerce",
    metaTitle: "AI for Retail & E-commerce | GrahAI Systems",
    metaDescription: "AI for retail and e-commerce — product-catalog enrichment, support deflection, merchandising copilots and POS/OMS-integrated agents built by an AI studio that runs its own products.",
    headline: "AI for retail that",
    keywordAccent: "converts and retains",
    subheadline: "Catalog enrichment, support deflection and merchandising copilots — connected to your POS, OMS and storefront so they move revenue, not just demos.",
    overviewTitle: "Where AI actually moves the needle in Retail & E-commerce",
    overviewText: [
      "Retail AI lives or dies on the catalog and the customer conversation. A thin product description with no attributes kills both search and conversion; enriching titles, attributes and copy at scale — accurately, in your brand voice and across languages for India and the World — is unglamorous work that directly lifts discoverability and sales.",
      "Support is the highest-volume, highest-cost surface. A well-grounded support agent that knows your order status, return policy and product details can deflect the repetitive WISMO and returns questions while escalating the genuinely tricky ones with full context. The win isn’t replacing agents — it’s letting them spend time where empathy and judgment actually matter.",
      "Behind the storefront, merchandisers and ops teams want copilots: surface slow-movers, recommend reorders, draft promotions, and answer ‘why did this SKU spike’ in plain language over your sales data. We integrate with POS, OMS, Shopify and your data warehouse so these tools act on live commerce data, not a stale export."
    ],
    featuresTitle: "What we build for Retail & E-commerce teams",
    features: [
      { name: "Catalog enrichment engine", desc: "Generates accurate titles, attributes and descriptions in your brand voice across languages to lift search and conversion." },
      { name: "Support deflection agent", desc: "Resolves WISMO, returns and product questions grounded in live order and policy data, escalating the hard cases with context." },
      { name: "Merchandising copilot", desc: "Answers sales-data questions in plain language and surfaces slow-movers, reorder needs and promo ideas for the merchandiser." },
      { name: "On-site shopping assistant", desc: "A conversational product finder that turns vague intent into the right SKU and increases basket size." },
      { name: "Review & sentiment digest", desc: "Clusters reviews and tickets into ranked product and CX issues for the category team to act on." },
      { name: "Returns-reason analyzer", desc: "Classifies return reasons to expose sizing, quality and listing problems before they spread across the catalog." }
    ],
    specTitle: "How we deliver",
    specs: [
      { name: "Integrations", val: "POS, OMS, Shopify/Magento/WooCommerce, payment gateways, data warehouse, helpdesk" },
      { name: "Models", val: "Frontier LLMs for copy and conversation; tuned models for attribute extraction and sentiment" },
      { name: "Guardrails", val: "Brand-voice constraints, factual grounding on live catalog/order data, escalation on low confidence" },
      { name: "Engagement", val: "Fixed-scope build, 4–10 weeks, then optional operate retainer" },
      { name: "Typical budget", val: "₹20L–₹50L / $20k–$60k per production system" },
      { name: "Data & compliance", val: "Customer-PII protection, PCI-aware boundaries around payment data, per-store isolation" }
    ],
    faqs: [
      { q: "Will the support agent give wrong order or policy info?", a: "It answers from live order data and your actual return and shipping policies, not guesses, and escalates with full context when confidence is low. Grounding on real data is the whole point." },
      { q: "Can it keep our brand voice in generated copy?", a: "Yes — we constrain generation to your tone, terminology and formatting rules, and keep a review step for new templates. We run our own consumer products, so brand-consistent copy at scale is familiar ground." },
      { q: "Does it integrate with Shopify and our POS?", a: "We integrate with Shopify, Magento, WooCommerce, POS and OMS platforms plus your data warehouse, so agents act on live commerce data rather than stale exports." },
      { q: "How do you handle customer and payment data safely?", a: "Customer PII is access-controlled and isolated per store, and we keep clear PCI-aware boundaries so the AI never handles raw payment credentials. Sensitive data is never used to train shared models." },
      { q: "What does a first project cost and how long?", a: "Typically ₹20L–₹50L / $20k–$60k over a 4–10 week fixed-scope build, with an optional operate retainer. Support deflection or catalog enrichment usually pays back fastest." },
      { q: "How do we get started?", a: "Book a discovery call. We’ll find the lever with the clearest revenue or cost impact and turn it into a fixed-scope proposal with a quote." }
    ]
  },
  {
    slug: "banking-financial-services",
    industry: "Banking & Financial Services",
    metaTitle: "AI for Banking & Financial Services | GrahAI Systems",
    metaDescription: "AI for banks and NBFCs — KYC/AML automation, document-heavy loan processing, dispute handling and core-banking-integrated copilots built by an AI studio that operates its own products.",
    headline: "AI for banking that",
    keywordAccent: "passes the audit",
    subheadline: "KYC/AML automation, loan-document processing and dispute copilots — built with the explainability and audit trails a regulated lender needs.",
    overviewTitle: "Where AI actually moves the needle in Banking & Financial Services",
    overviewText: [
      "Banking work is document-dense and compliance-bound. Onboarding alone means parsing IDs, proofs of address, financials and beneficial-ownership chains, then checking them against sanctions and PEP lists. An AML/KYC agent that extracts, validates and pre-clears the routine cases — while routing the genuinely risky ones to a compliance officer with the evidence laid out — compresses onboarding from days to hours without weakening controls.",
      "Lending is the same shape at higher stakes. A loan-processing copilot reads bank statements, GST returns and financial documents, spreads them into a structured view, and drafts a credit memo with the supporting evidence. The credit officer still decides — but they decide faster, with consistency and a clear audit trail of every input that informed the call.",
      "Servicing rounds it out: dispute and chargeback handling, branch-staff RAG over product and policy documents, and customer-facing assistants that answer accurately within tight regulatory guardrails. Everything integrates with core banking, KYC/AML platforms and RBI reporting feeds, and every decision is explainable — because in financial services an unexplainable model doesn’t survive an audit."
    ],
    featuresTitle: "What we build for Banking & Financial Services teams",
    features: [
      { name: "KYC/AML onboarding agent", desc: "Extracts and validates KYC documents, screens against sanctions and PEP lists, and pre-clears routine cases with evidence for review." },
      { name: "Loan-processing copilot", desc: "Spreads bank statements, GST returns and financials into a structured view and drafts a credit memo for the officer." },
      { name: "Dispute & chargeback handler", desc: "Assembles the evidence pack and drafts the response for transaction disputes, cutting manual investigation time." },
      { name: "Branch & policy RAG", desc: "Gives staff accurate, cited answers from product terms, circulars and internal policy without external leakage." },
      { name: "Transaction-monitoring triage", desc: "Prioritizes AML alerts with explanations so analysts work the highest-risk cases first, reducing false-positive fatigue." },
      { name: "Regulatory-reporting assistant", desc: "Helps compile and cross-check returns against source data, flagging inconsistencies before submission." }
    ],
    specTitle: "How we deliver",
    specs: [
      { name: "Integrations", val: "Core banking, KYC/AML platforms, LOS/LMS, sanctions/PEP screening, RBI reporting feeds" },
      { name: "Models", val: "Frontier LLMs for document reasoning; tuned models for screening and alert prioritization" },
      { name: "Guardrails", val: "Explainable, human-approved decisions; maker-checker flow; complete audit logging" },
      { name: "Engagement", val: "Fixed-scope build, 4–10 weeks, then optional operate retainer" },
      { name: "Typical budget", val: "₹20L–₹50L / $20k–$60k per production system" },
      { name: "Data & compliance", val: "RBI and DPDP aligned; data residency in India; no training on customer data" }
    ],
    faqs: [
      { q: "Will this satisfy RBI and our auditors?", a: "Every decision is explainable with the evidence behind it, wrapped in a maker-checker flow and complete audit logging. We design for the audit from day one rather than retrofitting it." },
      { q: "Where does customer data reside?", a: "We deploy with Indian data residency and inside your VPC or on-prem as required, and we never train shared models on customer data. We run our own production products under the same discipline." },
      { q: "Can it integrate with our core banking and KYC systems?", a: "Yes — core banking, KYC/AML platforms, loan origination/management systems and sanctions/PEP screening are standard integration targets. We read and write to your systems of record." },
      { q: "Does the AI approve loans or KYC on its own?", a: "No. It pre-clears routine cases and drafts memos, but a credit or compliance officer makes and signs every decision. The system accelerates judgment, it doesn’t replace accountability." },
      { q: "What does a first project cost and how long?", a: "Typically ₹20L–₹50L / $20k–$60k over a 4–10 week fixed-scope build, with an optional operate retainer. KYC/onboarding and loan-document processing usually deliver the clearest ROI first." },
      { q: "How do we get started?", a: "Book a discovery call. We’ll pick the most document-heavy, compliance-bound workflow you have and turn it into a fixed-scope proposal with a quote." }
    ]
  },
  {
    slug: "real-estate",
    industry: "Real Estate",
    metaTitle: "AI for Real Estate | GrahAI Systems",
    metaDescription: "AI for real estate — lead qualification, listing generation, lease and document abstraction, and CRM-integrated agents built by an AI studio that operates its own production products.",
    headline: "AI for real estate that",
    keywordAccent: "qualifies the lead",
    subheadline: "Lead qualification, listing generation and lease abstraction — connected to your CRM and document stack so agents chase deals, not paperwork.",
    overviewTitle: "Where AI actually moves the needle in Real Estate",
    overviewText: [
      "Real estate is a speed-to-lead game drowning in documents. The first response wins, yet portal and website leads pile up unanswered. A qualification agent that engages instantly, asks the right budget, location and timeline questions, and books qualified showings straight into the agent’s calendar turns response time from hours into seconds.",
      "Listings and marketing are a content treadmill. Generating compelling, accurate listing copy, multilingual descriptions and social posts from property facts — without inventing amenities — frees agents from a chore they universally dislike. The same applies to drafting routine client communications and follow-ups that otherwise fall through the cracks.",
      "On the commercial and transactional side, the heavy lifting is document abstraction: pulling key terms from leases, rent rolls, title documents and purchase agreements into a structured view, and answering questions over them with citations. We integrate with CRMs, listing platforms and document management so the AI works inside the tools brokers and property managers already live in."
    ],
    featuresTitle: "What we build for Real Estate teams",
    features: [
      { name: "Lead qualification agent", desc: "Engages portal and website leads instantly, qualifies on budget and intent, and books showings into the agent’s calendar." },
      { name: "Listing generation engine", desc: "Writes accurate, multilingual listing copy and social posts from verified property facts, never inventing amenities." },
      { name: "Lease & document abstraction", desc: "Extracts key terms from leases, rent rolls and title documents into a structured, queryable view with citations." },
      { name: "Property-management copilot", desc: "Triages tenant requests, drafts responses and routes maintenance tasks from inbound messages." },
      { name: "Market-comparable assistant", desc: "Pulls and summarizes comparable sales and rentals to support pricing and valuation conversations." },
      { name: "Follow-up nurture agent", desc: "Keeps cold and dormant leads warm with timely, personalized follow-ups that surface re-engaged buyers." }
    ],
    specTitle: "How we deliver",
    specs: [
      { name: "Integrations", val: "CRM (Salesforce/HubSpot/local), listing portals, DMS, calendar and e-sign tools" },
      { name: "Models", val: "Frontier LLMs for conversation and copy; tuned extraction models for lease and title documents" },
      { name: "Guardrails", val: "Factual grounding on verified property data; agent approval on client-facing commitments" },
      { name: "Engagement", val: "Fixed-scope build, 4–10 weeks, then optional operate retainer" },
      { name: "Typical budget", val: "₹20L–₹50L / $20k–$60k per production system" },
      { name: "Data & compliance", val: "Lead-PII protection, per-brokerage data isolation, accurate-disclosure constraints on listings" }
    ],
    faqs: [
      { q: "Will the listing generator invent features that aren’t there?", a: "No — generation is grounded strictly on verified property facts, and we constrain it to never fabricate amenities or measurements. Accurate disclosure is a hard constraint, not a preference." },
      { q: "Can the lead agent book into our agents’ calendars?", a: "Yes — it qualifies the lead and books confirmed showings directly into the agent’s calendar via your CRM and scheduling tools. Speed-to-lead is the core value." },
      { q: "Does it integrate with our CRM and listing platform?", a: "We integrate with Salesforce, HubSpot, local CRMs, listing portals and document management systems so the AI works inside the tools your team already uses." },
      { q: "How accurate is lease and title abstraction?", a: "We extract key terms with citations back to the source document and keep a human review step for anything material. The aim is to remove manual reading while keeping a person on the consequential clauses." },
      { q: "What does a first project cost and how long?", a: "Typically ₹20L–₹50L / $20k–$60k over a 4–10 week fixed-scope build, with an optional operate retainer. Lead qualification usually pays back fastest." },
      { q: "How do we get started?", a: "Book a discovery call. We’ll identify whether speed-to-lead, content, or document abstraction is your biggest drag and turn it into a fixed-scope proposal with a quote." }
    ]
  },
  {
    slug: "legal",
    industry: "Legal",
    metaTitle: "AI for Legal | GrahAI Systems",
    metaDescription: "AI for legal teams — contract review, e-discovery triage, clause extraction and DMS-integrated research copilots built with privilege controls by an AI studio that runs its own products.",
    headline: "AI for legal that",
    keywordAccent: "respects privilege",
    subheadline: "Contract review, clause extraction and e-discovery triage — built with the confidentiality, citation discipline and privilege controls legal work demands.",
    overviewTitle: "Where AI actually moves the needle in Legal",
    overviewText: [
      "Legal work is reading at scale under a confidentiality obligation. The highest-value AI use cases are bounded and verifiable: extracting clauses and obligations from contracts, comparing a draft against your playbook, and flagging deviations for a lawyer to review. The model proposes; the lawyer decides — and every claim is cited back to the source text so nothing rests on an ungrounded assertion.",
      "Discovery and due diligence are volume problems. Triaging thousands of documents for relevance and privilege, surfacing the hot documents, and summarizing a data room for a deal team turns weeks of associate time into a focused review. The point isn’t to replace judgment but to get the right documents in front of the right person far sooner.",
      "Research and knowledge round it out: RAG over your matter files, precedents and internal know-how so the team gets answers grounded in your own work product, not a generic chatbot’s guess. Confidentiality and privilege are first-class design constraints — strict data isolation, no training on client matters, and citations on every output — because in legal an unverifiable answer is worse than no answer."
    ],
    featuresTitle: "What we build for Legal teams",
    features: [
      { name: "Contract review copilot", desc: "Compares drafts against your playbook, extracts clauses and obligations, and flags deviations with citations for a lawyer." },
      { name: "E-discovery triage", desc: "Ranks document sets for relevance and privilege and surfaces hot documents to focus reviewer time." },
      { name: "Clause & obligation extraction", desc: "Builds a structured, queryable view of key terms, dates and obligations across a contract portfolio." },
      { name: "Due-diligence summarizer", desc: "Digests a data room into risk-flagged summaries for the deal team with source links to every finding." },
      { name: "Matter knowledge RAG", desc: "Answers questions grounded in your precedents, prior matters and internal know-how with citations." },
      { name: "Intake & conflict assistant", desc: "Structures new-matter intake and surfaces potential conflicts from your records for confirmation." }
    ],
    specTitle: "How we deliver",
    specs: [
      { name: "Integrations", val: "DMS (iManage/NetDocuments), e-discovery platforms, contract repositories, intake systems" },
      { name: "Models", val: "Frontier LLMs for legal reasoning, constrained to cite source text on every claim" },
      { name: "Guardrails", val: "Lawyer review mandatory; citation-on-every-output; strict matter isolation and privilege handling" },
      { name: "Engagement", val: "Fixed-scope build, 4–10 weeks, then optional operate retainer" },
      { name: "Typical budget", val: "₹20L–₹50L / $20k–$60k per production system" },
      { name: "Data & compliance", val: "Privilege and confidentiality controls; no training on client matters; per-matter access isolation" }
    ],
    faqs: [
      { q: "How do you protect client confidentiality and privilege?", a: "Matters are strictly isolated, access is controlled and logged, and we never train shared models on client data. Privilege handling is a design constraint, not a setting we toggle on later." },
      { q: "Can I trust the AI’s legal answers?", a: "Every output cites the source text, so a lawyer verifies rather than trusts. We constrain the system to ground its claims and decline outside its evidence, with the lawyer always the decision-maker." },
      { q: "Does it integrate with our DMS?", a: "We integrate with iManage, NetDocuments, e-discovery platforms and contract repositories so the AI works on your documents in place, respecting existing access controls." },
      { q: "Will this replace our associates?", a: "No — it gets the right documents and clauses in front of them sooner. The lawyer’s judgment stays central; the system removes the volume reading that doesn’t need a lawyer’s eyes." },
      { q: "What does a first project cost and how long?", a: "Typically ₹20L–₹50L / $20k–$60k over a 4–10 week fixed-scope build, with an optional operate retainer. Contract review or clause extraction usually delivers the fastest measurable win." },
      { q: "How do we get started?", a: "Book a discovery call. We’ll identify your heaviest review workflow and turn it into a fixed-scope, privilege-aware proposal with a quote." }
    ]
  },
  {
    slug: "hr-recruitment",
    industry: "HR & Recruitment",
    metaTitle: "AI for HR & Recruitment | GrahAI Systems",
    metaDescription: "AI for HR and recruiting — resume screening, interview scheduling, employee-policy assistants and ATS/HRIS-integrated agents built fairly by an AI studio that operates its own products.",
    headline: "AI for HR that",
    keywordAccent: "screens fairly",
    subheadline: "Resume screening, candidate engagement and employee-policy assistants — built with bias controls and wired into your ATS and HRIS.",
    overviewTitle: "Where AI actually moves the needle in HR & Recruitment",
    overviewText: [
      "Recruiting is a funnel problem with a fairness obligation. Screening hundreds of resumes against a role, scheduling interviews across calendars, and keeping candidates warm with timely updates is high-volume work that AI handles well — provided it’s built to evaluate skills and evidence rather than proxies for age, gender or background. We design screening to be explainable and bias-tested, with a recruiter making every advance decision.",
      "Candidate experience is a differentiator most companies leak. A responsive agent that answers application questions, confirms next steps, and chases missing documents keeps people engaged instead of ghosting. Internally, the same pattern serves employees: a policy assistant that answers leave, payroll and benefits questions from your actual handbook saves HR from the same fifty questions every week.",
      "Onboarding and HR operations are full of repeatable workflows — generating offer letters, structuring onboarding checklists, and routing employee requests — that an agent can draft and orchestrate. We integrate with ATS and HRIS platforms so the AI acts on real candidate and employee records, and we treat fairness, explainability and data privacy as non-negotiable across India and the World."
    ],
    featuresTitle: "What we build for HR & Recruitment teams",
    features: [
      { name: "Resume screening agent", desc: "Ranks candidates against role requirements on skills and evidence, bias-tested and explainable, with the recruiter deciding." },
      { name: "Interview scheduling bot", desc: "Coordinates availability across panels and candidates and books interviews without the email back-and-forth." },
      { name: "Candidate engagement agent", desc: "Answers applicant questions, confirms next steps and chases documents to cut drop-off and ghosting." },
      { name: "Employee policy assistant", desc: "Answers leave, payroll and benefits questions grounded in your actual handbook and HR policies." },
      { name: "Offer & onboarding orchestrator", desc: "Drafts offer letters and structures onboarding checklists, routing tasks across the team automatically." },
      { name: "Sourcing & JD copilot", desc: "Drafts inclusive job descriptions and helps recruiters refine boolean and outreach for a role." }
    ],
    specTitle: "How we deliver",
    specs: [
      { name: "Integrations", val: "ATS (Greenhouse/Lever/local), HRIS (Workday/Darwinbox), calendar, e-sign, payroll systems" },
      { name: "Models", val: "Frontier LLMs for evaluation and conversation, constrained to skills-based, evidence-grounded criteria" },
      { name: "Guardrails", val: "Bias testing, explainable screening, recruiter approval on every advance/reject decision" },
      { name: "Engagement", val: "Fixed-scope build, 4–10 weeks, then optional operate retainer" },
      { name: "Typical budget", val: "₹20L–₹50L / $20k–$60k per production system" },
      { name: "Data & compliance", val: "Candidate and employee PII protection; fairness documentation; per-org data isolation" }
    ],
    faqs: [
      { q: "How do you keep resume screening fair and non-discriminatory?", a: "We evaluate on skills and evidence tied to the role, bias-test against protected attributes and proxies, document the methodology, and keep a recruiter as the decision-maker. Fairness is built in, not bolted on." },
      { q: "Does the AI reject candidates automatically?", a: "No — it ranks and explains, but a recruiter makes every advance or reject decision. The system removes the volume sift, not the human judgment that should govern a hiring outcome." },
      { q: "Can it integrate with our ATS and HRIS?", a: "Yes — Greenhouse, Lever, Workday, Darwinbox and local platforms are standard targets, along with calendar, payroll and e-sign. The AI acts on real records, not a spreadsheet copy." },
      { q: "How is candidate and employee data protected?", a: "PII is access-controlled, isolated per organization, and never used to train shared models. We run our own production products under the same data discipline." },
      { q: "What does a first project cost and how long?", a: "Typically ₹20L–₹50L / $20k–$60k over a 4–10 week fixed-scope build, with an optional operate retainer. Screening plus scheduling, or an employee policy assistant, usually pays back fastest." },
      { q: "How do we get started?", a: "Book a discovery call. We’ll pinpoint your biggest funnel or HR-ops drag and turn it into a fixed-scope, fairness-aware proposal with a quote." }
    ]
  },
  {
    slug: "fintech",
    industry: "Fintech",
    metaTitle: "AI for Fintech | GrahAI Systems",
    metaDescription: "AI for fintech — support copilots, fraud and risk signals, financial-document understanding and embeddable AI features built API-first by a studio that operates its own products.",
    headline: "AI for fintech that",
    keywordAccent: "ships in your product",
    subheadline: "Embeddable AI features, fraud and risk signals, and document understanding — built API-first and ready to live inside your own product.",
    overviewTitle: "Where AI actually moves the needle in Fintech",
    overviewText: [
      "Fintech is software-native, so the AI usually has to ship inside your product, not sit beside it. That changes the engineering brief: API-first, latency-sensitive, multi-tenant, and built to your security bar. The most common asks are embeddable features — a financial assistant in-app, smart categorization, or a conversational interface over a user’s transactions — that have to feel native and never hallucinate a balance.",
      "Risk and fraud are where ML earns its place. Onboarding risk scoring, transaction anomaly detection, and document verification for KYC are pattern problems where a tuned model plus an LLM for the reasoning and explanation layer beats rules alone. We build these to be explainable, because in fintech a black-box decline is a support ticket and a regulatory question at once.",
      "Operations and support scale with the business: a grounded support agent over your product docs and a user’s account state, dispute handling, and reconciliation copilots that read statements and flag mismatches. We design for the fintech reality — sub-second responses, PCI-aware boundaries, audit trails, and data isolation per tenant — and we’ve learned it operating our own products in production, not from a slide deck."
    ],
    featuresTitle: "What we build for Fintech teams",
    features: [
      { name: "Embeddable financial assistant", desc: "An in-app, API-first agent over a user’s transactions and account state that feels native and never invents numbers." },
      { name: "Fraud & anomaly signals", desc: "Scores transactions and onboarding risk with explanations, blending tuned models with an LLM reasoning layer." },
      { name: "Document-verification engine", desc: "Validates IDs, statements and KYC documents, extracting and cross-checking fields for compliance review." },
      { name: "Transaction categorization", desc: "Classifies and enriches transactions into clean categories and merchant data to power insights and budgeting." },
      { name: "Dispute & reconciliation copilot", desc: "Reads statements, matches records and assembles dispute evidence to cut manual reconciliation work." },
      { name: "Support & docs RAG", desc: "Answers user questions grounded in your product docs and their account state, escalating the edge cases." }
    ],
    specTitle: "How we deliver",
    specs: [
      { name: "Integrations", val: "Your APIs, ledger/core systems, payment rails, KYC/AML providers, data warehouse" },
      { name: "Models", val: "Frontier LLMs for reasoning and conversation; tuned models for fraud, risk and categorization" },
      { name: "Guardrails", val: "Factual grounding on account data, explainable risk decisions, latency and rate-limit budgets" },
      { name: "Engagement", val: "Fixed-scope build, 4–10 weeks, then optional operate retainer" },
      { name: "Typical budget", val: "₹20L–₹50L / $20k–$60k per production system" },
      { name: "Data & compliance", val: "PCI-aware boundaries, per-tenant data isolation, data residency, no training on user data" }
    ],
    faqs: [
      { q: "Can the AI be embedded directly in our product?", a: "Yes — we build API-first, multi-tenant and latency-aware so the feature ships inside your product and feels native. Embeddability is the default brief, not an afterthought." },
      { q: "How do you stop the assistant hallucinating financial figures?", a: "Everything user-facing is grounded on real account and transaction data, and we constrain the model to decline rather than guess. We run our own production products, so ‘never invent a number’ is hard-earned discipline." },
      { q: "Are fraud and risk decisions explainable?", a: "Yes — risk scores carry the reasoning behind them so a declined user or a regulator gets a defensible answer, not a black box. Explainability is built into the design." },
      { q: "How do you handle PCI and data residency?", a: "We keep PCI-aware boundaries so the AI never touches raw card data, isolate data per tenant, and deploy with the residency your regulator requires. User data is never used to train shared models." },
      { q: "What does a first project cost and how long?", a: "Typically ₹20L–₹50L / $20k–$60k over a 4–10 week fixed-scope build, with an optional operate retainer. An embeddable feature or a fraud-signal layer usually delivers the clearest win first." },
      { q: "How do we get started?", a: "Book a discovery call. We’ll scope the feature or risk layer that moves your product metrics and turn it into a fixed-scope proposal with a quote." }
    ]
  },
  {
    slug: "education",
    industry: "Education",
    metaTitle: "AI for Education | GrahAI Systems",
    metaDescription: "AI for education and edtech — tutoring agents, content generation, grading assistants and LMS/SIS-integrated copilots built with safety controls by a studio that operates its own products.",
    headline: "AI for education that",
    keywordAccent: "tutors safely",
    subheadline: "Tutoring agents, content generation and grading assistants — built with the safety, accuracy and multilingual reach learning demands across India and the World.",
    overviewTitle: "Where AI actually moves the needle in Education",
    overviewText: [
      "Education AI has to be pedagogically sound and safe, not just clever. The highest-value tutoring agents don’t hand students answers — they ask Socratic questions, adapt to the learner’s level, and explain in the student’s own language. Built well over your curriculum, a tutor that’s available at 11pm before an exam is a genuine equalizer; built carelessly, it’s a cheating engine. The difference is in the design.",
      "Content and assessment are the operational load. Generating aligned practice questions, worked examples, lesson plans and multilingual materials at scale frees educators to teach. On the assessment side, a grading assistant that scores against a rubric with feedback — for a teacher to review and adjust — turns hours of marking into minutes, while keeping the teacher in the loop on every grade that matters.",
      "Institutions also run on operations: answering admissions and student-services questions, nudging at-risk learners, and giving staff RAG access to policies. We integrate with LMS and SIS platforms so the AI works with real course and student data, and we build in child-safety guardrails, accuracy grounding and age-appropriate constraints because the user is often a minor."
    ],
    featuresTitle: "What we build for Education teams",
    features: [
      { name: "Socratic tutoring agent", desc: "Guides students with questions and adaptive explanations in their language, grounded in your curriculum — not an answer key." },
      { name: "Content generation engine", desc: "Produces aligned practice questions, worked examples and multilingual materials at scale for educators to review." },
      { name: "Rubric-based grading assistant", desc: "Scores open responses against a rubric with feedback for the teacher to confirm and adjust." },
      { name: "Student-services agent", desc: "Answers admissions, fees and course questions grounded in institutional policy, escalating the human cases." },
      { name: "At-risk learner nudges", desc: "Spots disengagement signals from LMS activity and prompts timely, supportive outreach." },
      { name: "Curriculum RAG for staff", desc: "Gives teachers and admins cited answers from policies, syllabi and internal resources." }
    ],
    specTitle: "How we deliver",
    specs: [
      { name: "Integrations", val: "LMS (Moodle/Canvas), SIS, assessment tools, content repositories, SSO" },
      { name: "Models", val: "Frontier LLMs tuned for pedagogy and multilingual explanation, grounded on your curriculum" },
      { name: "Guardrails", val: "Child-safety filters, age-appropriate constraints, anti-cheating tutoring design, teacher oversight" },
      { name: "Engagement", val: "Fixed-scope build, 4–10 weeks, then optional operate retainer" },
      { name: "Typical budget", val: "₹20L–₹50L / $20k–$60k per production system" },
      { name: "Data & compliance", val: "Student-data privacy (FERPA/DPDP aware), minor-safety controls, per-institution isolation" }
    ],
    faqs: [
      { q: "Won’t a tutoring agent just help students cheat?", a: "Not when it’s designed Socratically — it guides with questions and explanations rather than handing over answers, grounded in your curriculum. The anti-cheating posture is a deliberate design choice we build in." },
      { q: "Is it safe for minors?", a: "We build child-safety filters, age-appropriate constraints and content grounding so the agent stays on-topic and safe. Minor-safety is a first-class requirement given who the user often is." },
      { q: "Does it integrate with our LMS and SIS?", a: "Yes — Moodle, Canvas, SIS platforms and assessment tools with SSO are standard targets, so the AI works on real course and student data inside your environment." },
      { q: "How accurate is the generated content and grading?", a: "Content is grounded on your curriculum and reviewed by educators, and grading scores against your rubric with the teacher confirming. The human stays in the loop on anything that affects a student’s record." },
      { q: "What does a first project cost and how long?", a: "Typically ₹20L–₹50L / $20k–$60k over a 4–10 week fixed-scope build, with an optional operate retainer. A tutoring agent or content engine usually delivers the clearest early value." },
      { q: "How do we get started?", a: "Book a discovery call. We’ll identify whether tutoring, content, grading or student services is your biggest opportunity and turn it into a fixed-scope, safety-aware proposal with a quote." }
    ]
  },
  {
    slug: "saas",
    industry: "SaaS",
    metaTitle: "AI for SaaS | GrahAI Systems",
    metaDescription: "AI for SaaS companies — in-product copilots, AI-native features, support deflection and RAG over your docs built API-first by a studio that ships and operates its own AI products.",
    headline: "AI for SaaS that",
    keywordAccent: "lives in your product",
    subheadline: "In-product copilots, AI-native features and support deflection — built API-first by a team that ships and operates its own AI products in production.",
    overviewTitle: "Where AI actually moves the needle in SaaS",
    overviewText: [
      "For a SaaS company, AI is usually a product surface, not an internal tool. Customers now expect a copilot inside the app — something that understands their data, answers questions, and takes actions on their behalf. Building that well is deceptively hard: it has to be multi-tenant, secure, fast, observable, and reliable enough to put your brand on. That’s exactly the engineering we do every day for our own products.",
      "The fastest ROI is often support and onboarding. A RAG agent over your docs and changelog plus a user’s account state can deflect a large share of tickets while improving answers, and an in-app onboarding guide can lift activation. These are bounded, measurable features that move retention and support cost — the metrics your board actually tracks.",
      "Beyond support, AI-native features become a differentiator: natural-language querying of a user’s workspace, automated workflows, and intelligent summaries. We build API-first with evals, observability and cost controls baked in, because the hard part of production AI in SaaS isn’t the demo — it’s reliability, latency and unit economics at scale. We’ve shipped that for India and the World in our own products."
    ],
    featuresTitle: "What we build for SaaS teams",
    features: [
      { name: "In-product copilot", desc: "A multi-tenant assistant over a user’s workspace data that answers questions and takes actions inside your app." },
      { name: "Support deflection RAG", desc: "Resolves tickets grounded in your docs, changelog and the user’s account state, escalating the hard cases with context." },
      { name: "AI-native feature build", desc: "Natural-language querying, smart summaries and automated workflows that become a differentiator, not a gimmick." },
      { name: "Onboarding & activation guide", desc: "An in-app agent that walks new users to their first value moment to lift activation and retention." },
      { name: "Eval & observability harness", desc: "Test suites, tracing and quality monitoring so your AI features stay reliable and improvable in production." },
      { name: "Cost & routing optimization", desc: "Model routing and caching that hold quality while controlling token spend as usage scales." }
    ],
    specTitle: "How we deliver",
    specs: [
      { name: "Integrations", val: "Your APIs and database, auth/SSO, vector store, helpdesk, analytics and billing systems" },
      { name: "Models", val: "Frontier LLMs with cost-aware routing; grounding on your product data and docs" },
      { name: "Guardrails", val: "Per-tenant isolation, evals and observability, grounded answers, latency and cost budgets" },
      { name: "Engagement", val: "Fixed-scope build, 4–10 weeks, then optional operate retainer" },
      { name: "Typical budget", val: "₹20L–₹50L / $20k–$60k per production system" },
      { name: "Data & compliance", val: "Multi-tenant data isolation, SOC2-aligned practices, no training on customer data" }
    ],
    faqs: [
      { q: "Can you build features that ship inside our product?", a: "Yes — API-first, multi-tenant and observable is our default, so features live natively in your app rather than as a bolt-on. We ship and operate our own AI products the same way." },
      { q: "How do you keep AI features reliable in production?", a: "We bake in evals, tracing and quality monitoring from the start, because the hard part of production AI is reliability at scale, not the demo. You get a harness to keep improving, not a one-off." },
      { q: "How do you control AI costs as we scale?", a: "We use cost-aware model routing, caching and grounding to hold quality while keeping token spend predictable. Unit economics are a design constraint we’ve tuned on our own products." },
      { q: "Is our customers’ data isolated and safe?", a: "Per-tenant isolation is core to the architecture, we follow SOC2-aligned practices, and we never train shared models on customer data. Multi-tenant security is something we live with daily." },
      { q: "What does a first project cost and how long?", a: "Typically ₹20L–₹50L / $20k–$60k over a 4–10 week fixed-scope build, with an optional operate retainer. Support deflection or an in-product copilot usually delivers the clearest, most measurable win first." },
      { q: "How do we get started?", a: "Book a discovery call. We’ll scope the feature that moves activation, retention or support cost and turn it into a fixed-scope proposal with a quote." }
    ]
  }
];
