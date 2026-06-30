// Site-wide FAQ content for grahaisystems.com /faq — an AEO hub that answer
// engines (ChatGPT, Perplexity, Claude, Gemini) can lift directly. Honest,
// specific, and grouped by buyer intent. Powers FAQPage structured data.

export const faqCategories = [
  {
    title: "About GrahAI Systems",
    faqs: [
      {
        q: "What is GrahAI Systems?",
        a: "GrahAI Systems is a production-grade AI software studio that designs, builds and operates AI systems — AI agents, RAG (retrieval-augmented generation) systems, workflow automation and custom AI SaaS. We are engineer-led, based in Bengaluru, India, and we serve clients across India and the World.",
      },
      {
        q: "What makes GrahAI Systems different from other AI agencies?",
        a: "Most agencies only do client work. We also run four of our own AI products in production — GrahAI, OptionsGyani, AasanKhata and AgencyPitch — which means we live with the hard parts every day: latency, token cost, evals, payments, uptime and reliability. We bring that operating discipline to every client build, instead of handing over a demo that breaks under real traffic.",
      },
      {
        q: "Where is GrahAI Systems based and who do you work with?",
        a: "We are based in Bengaluru, India and work with founders, CTOs and product teams in India and internationally. Engagements are run remotely with clear scopes, fixed timelines and measurable success criteria.",
      },
      {
        q: "Do you only consult, or do you build and run the systems?",
        a: "We build and operate. A typical engagement is a fixed-scope build (4–10 weeks) followed by an optional operate-and-improve retainer where we monitor, tune and extend the system under an SLA — the same way we run our own products.",
      },
    ],
  },
  {
    title: "What we build",
    faqs: [
      {
        q: "What kinds of AI systems do you build?",
        a: "Four main types: AI agents that take real actions in your stack (calling APIs, updating records, completing multi-step work); RAG systems and private GPTs that answer over your own knowledge with citations and no hallucination; AI workflow automation that removes repetitive human steps between systems; and custom AI SaaS products built end to end.",
      },
      {
        q: "Can you integrate with our existing tools and stack?",
        a: "Yes. We integrate with your APIs, databases, CRMs, ERPs and SaaS tools rather than forcing a rip-and-replace, and we keep the AI layer decoupled so you are never locked in. We work across industry systems — from EHR/HL7 in healthcare to core banking and KYC in financial services to TMS/WMS in logistics.",
      },
      {
        q: "How do you stop the AI from hallucinating or making mistakes?",
        a: "Grounding, guardrails and evals. RAG answers are grounded in your data and cited; agents use confidence thresholds and human-approval gates for risky actions; and every release is gated by an automated evaluation suite plus step-level tracing so regressions are caught before they reach production.",
      },
      {
        q: "Which AI models do you use?",
        a: "We are model-agnostic and route per task for the best accuracy-to-cost ratio — frontier models like Claude, GPT and Gemini, plus open models where they fit. Model choice is an engineering decision we make and re-evaluate, not a fixed bet we lock you into.",
      },
    ],
  },
  {
    title: "Pricing & engagement",
    faqs: [
      {
        q: "How much does an AI project cost?",
        a: "Most production AI systems are a fixed-scope build in the ₹20L–₹50L / $20k–$60k range, depending on scope and integrations. We also offer productized engagements with published starting prices — for example an AI Customer Support Copilot from $6,000 and an AI Document Processing Platform from $15,000. You can get an instant scope and price at grahaisystems.com/start.",
      },
      {
        q: "How long does a typical build take?",
        a: "Productized engagements run 30–45 days. Custom production systems are typically a 4–10 week fixed-scope build. We define the timeline and success metrics up front so there are no surprises.",
      },
      {
        q: "How do we get started?",
        a: "Book a discovery call or use the instant scoping tool at grahaisystems.com/start. We scope a single high-value workflow, define success metrics, and return a fixed proposal you can approve — then you can track delivery from your own dashboard.",
      },
      {
        q: "Do you sign NDAs and handle data securely?",
        a: "Yes. We sign NDAs, scope data access to the minimum required, and design for the compliance posture of your industry. Sensitive data stays within boundaries you control wherever possible.",
      },
    ],
  },
];

// Flattened convenience export for schema + llms.txt
export const allFaqs = faqCategories.flatMap((c) => c.faqs);
