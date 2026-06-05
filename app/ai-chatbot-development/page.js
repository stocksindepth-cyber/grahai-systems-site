import SEOLandingTemplate from "../../components/SEOLandingTemplate";

export const metadata = {
  title: "AI Chatbot Development Services | Custom Data Chatbots | Grah AI",
  description:
    "Build custom AI chatbots trained on your business data. RAG systems, multi-language support, and CRM handoff integrations. Developed by Grah AI Systems.",
};

export default function page() {
  const content = {
    headline: "Custom",
    keywordAccent: "AI Chatbot Development",
    subheadline:
      "Deploy intelligent, multilingual conversational assistants trained on your proprietary catalogs, help center docs, and customer databases to resolve queries in seconds.",
    overviewTitle: "RAG-Powered AI Chatbots",
    overviewText: [
      "Standard keyword chatbots frustrate customers with hardcoded loops. We build next-generation chatbots powered by Retrieval-Augmented Generation (RAG). By converting your PDFs, wikis, and product catalogs into secure database vector embeddings, our chatbots search and formulate precise, factual responses.",
      "Our bots maintain chat history, adjust their tone according to user sentiment, and integrate seamless handoff protocols to route complex queries directly to human support representatives.",
      "Grah AI Systems develops conversational systems optimized for web embedding, mobile apps, WhatsApp, and Slack integrations.",
    ],
    featuresTitle: "Chatbot Capabilities We Implement",
    features: [
      {
        name: "Website Support Widget",
        desc: "Embeddable script matching your brand CSS. Resolves customer inquiries, collects lead data, and routes urgent cases.",
      },
      {
        name: "Multi-Language Support",
        desc: "Full conversation capabilities across English, Hindi, Tamil, Telugu, Spanish, and over 40+ languages natively.",
      },
      {
        name: "Internal Knowledge Assistant",
        desc: "A secure helper for employee search, reading manuals, HR policies, and technical SOPs without leaking data.",
      },
      {
        name: "Human Handoff Routing",
        desc: "Triggers instant notifications on Slack or Zendesk to transition live conversations to human agents when needed.",
      },
      {
        name: "Analytics Telemetry",
        desc: "A dashboard reporting common customer questions, response accuracy rates, and user sentiment analysis.",
      },
      {
        name: "Dynamic CRM Linking",
        desc: "Automatically records conversational lead summaries and tags client intent tags directly into your contact lists.",
      },
    ],
    specTitle: "Chatbot Technical Stack",
    specs: [
      { name: "Vector Database Layer", val: "Pinecone, Supabase pgvector, pgvector on PostgreSQL" },
      { name: "Embedding Models", val: "OpenAI text-embedding-3, Cohere Embed v3" },
      { name: "Context Retrieval", val: "Hybrid search (semantic + keyword BM25), reranking models" },
      { name: "Handoff Interfaces", val: "Intercom, Zendesk, LiveChat, Slack, custom webhook gateways" },
    ],
    faqs: [
      {
        q: "How does the chatbot get access to my business data?",
        a: "We set up an automated ingestion pipeline. Your documents (PDFs, docs, sheets, or database lines) are split, converted into vector representations (embeddings), and stored in a secure vector database. When a user chats, the bot retrieves the most relevant snippets first and uses them to answer.",
      },
      {
        q: "Will the chatbot hallucinate and make up facts?",
        a: "We implement strict RAG guardrails. The system instructs the LLM: 'Only answer based on the retrieved facts. If the answer is not in the facts, politely state that you do not know and request email details.' This restricts hallucinations to near-zero.",
      },
      {
        q: "Can the chatbot write data back to my backend?",
        a: "Yes. By configuring safe tool call parameters, the chatbot can create tickets, update client phone numbers, book calendars, or check order shipment status securely via API.",
      },
    ],
  };

  return <SEOLandingTemplate {...content} />;
}
