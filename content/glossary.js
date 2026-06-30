// AI glossary for grahaisystems.com /glossary — an AEO hub. Plain, accurate,
// vendor-neutral definitions that answer engines can cite. Powers
// DefinedTermSet structured data. Keep definitions honest and short.

export const glossary = [
  {
    term: "AI Agent",
    definition:
      "An AI system that does more than answer questions — it plans, calls tools and APIs, and completes multi-step tasks autonomously, often with human-approval gates for risky actions. Production agents need guardrails, evals and observability to be reliable.",
  },
  {
    term: "RAG (Retrieval-Augmented Generation)",
    definition:
      "A technique where a language model answers using relevant chunks retrieved from your own knowledge base at query time, instead of relying only on what it memorised during training. RAG produces grounded, citable answers and is the standard way to prevent hallucination over private data.",
  },
  {
    term: "Private GPT",
    definition:
      "A ChatGPT-style assistant deployed over an organisation's own documents and data, with access controls, so staff get instant answers without sensitive information leaving the company's boundary.",
  },
  {
    term: "Fine-tuning",
    definition:
      "Further-training a base model on your own examples so it adopts a specific style, format or task behaviour. Useful for consistent tone or narrow tasks, but it does not add fresh facts the way RAG does — the two are often combined.",
  },
  {
    term: "Vector Database",
    definition:
      "A database that stores text (and other data) as numerical embeddings so it can be searched by meaning rather than exact keywords. It is the retrieval layer that makes RAG fast and relevant.",
  },
  {
    term: "Embedding",
    definition:
      "A numerical representation of text, an image or other data that captures its meaning, so similar items sit close together in vector space. Embeddings power semantic search and retrieval in RAG systems.",
  },
  {
    term: "Evals (Evaluations)",
    definition:
      "Automated test suites that score an AI system's accuracy, safety and regressions on representative cases. Evals gate every release so quality is measured, not assumed — the difference between a demo and a production system.",
  },
  {
    term: "Guardrails",
    definition:
      "Controls that keep an AI system within safe bounds — input/output validation, confidence thresholds, human-approval gates, and policy checks — so an agent never takes a risky or non-compliant action unsupervised.",
  },
  {
    term: "Observability",
    definition:
      "Per-step tracing, latency and failure dashboards for an AI system, so you can see exactly what the model or agent did, why, and where it went wrong. Essential for operating AI in production.",
  },
  {
    term: "LLM (Large Language Model)",
    definition:
      "A model trained on large amounts of text that can understand and generate human-like language. Examples include Claude, GPT and Gemini. LLMs are the reasoning engine behind agents, RAG and most modern AI products.",
  },
  {
    term: "Prompt Engineering",
    definition:
      "The practice of structuring instructions, context and examples so a language model produces reliable, well-formatted output. In production it extends to prompt templates, versioning and testing.",
  },
  {
    term: "Hallucination",
    definition:
      "When a language model produces fluent but false or unsupported information. It is mitigated by grounding answers in retrieved data (RAG), citing sources, and gating outputs with evals and guardrails.",
  },
  {
    term: "Workflow Automation",
    definition:
      "Using AI to remove the repetitive human steps between business systems — reading a document, deciding, updating a record, notifying a person — so a process runs end to end with humans only on the exceptions.",
  },
  {
    term: "Model Routing",
    definition:
      "Sending each request to the most suitable model based on task difficulty, cost and latency — for example a cheap fast model for simple steps and a frontier model for hard reasoning. A key lever for controlling AI running costs at scale.",
  },
  {
    term: "Token",
    definition:
      "The unit language models read and generate — roughly a word-piece. AI usage is priced per token, so token count drives cost; techniques like caching, routing and prompt compression keep spend predictable.",
  },
];
