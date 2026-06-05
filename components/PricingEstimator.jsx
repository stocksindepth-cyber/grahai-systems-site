"use client";

import { useState } from "react";
import { Check, Info, Calculator, FileText, ArrowRight } from "lucide-react";

export default function PricingEstimator() {
  const [selectedBase, setSelectedBase] = useState("chatbot"); // 'lead' | 'chatbot' | 'workflow' | 'document' | 'saas' | 'enterprise'
  const [addons, setAddons] = useState({
    crmSync: false,
    multilingual: false,
    auditLedger: false,
    humanHandoff: false,
    slaSupport: false,
  });

  const baseTiers = [
    {
      id: "lead",
      name: "Lead Generation Systems",
      price: 2500,
      description: "Automate intake, lead scoring, and routing.",
      features: [
        "AI qualification logic",
        "Lead fit scoring models",
        "Basic email follow-up dispatch",
        "Standard CRM integration (HubSpot/Zapier)",
      ],
    },
    {
      id: "chatbot",
      name: "Custom AI Chatbots",
      price: 3500,
      description: "Intelligent assistants trained on your internal data.",
      features: [
        "Custom vector knowledge base",
        "Semantic search & retrieval (RAG)",
        "Chat history memory buffers",
        "UI widget integration & scripts",
      ],
    },
    {
      id: "workflow",
      name: "AI Workflow Automation",
      price: 5000,
      description: "End-to-end multi-app processes without human oversight.",
      features: [
        "Multi-system API integration",
        "Autonomous reasoning logic step-by-step",
        "Approval notification emails/Slack triggers",
        "Error-handling & self-healing runs",
      ],
    },
    {
      id: "document",
      name: "Document Processing Systems",
      price: 7500,
      description: "OCR & LLM data extraction for structured records.",
      features: [
        "OCR engine pre-processing",
        "Complex schema data matching (tables, lines)",
        "Contract/Form validation logic",
        "CSV/Database/ERP direct insertion",
      ],
    },
    {
      id: "saas",
      name: "Custom AI SaaS Platforms",
      price: 10000,
      description: "Complete commercial AI web application from scratch.",
      features: [
        "Full-stack Next.js web application",
        "User auth & secure accounts",
        "Stripe billing & subscription plans",
        "Model api orchestration & dashboard UI",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise Transformation",
      price: 25000,
      description: "Complete consulting, custom blueprinting, and implementation.",
      features: [
        "Comprehensive systems discovery audit",
        "Dedicated custom model fine-tuning",
        "Enterprise-grade SOC2 guardrails & hosting",
        "12 months ongoing engineering enablement",
      ],
    },
  ];

  const addonOptions = [
    {
      id: "crmSync",
      name: "Deep CRM & ERP Syncing",
      price: 1500,
      description: "Custom mapping and bi-directional synchronizing with Salesforce, SAP, etc.",
    },
    {
      id: "multilingual",
      name: "Multilingual Support Hub",
      price: 1200,
      description: "Localized processing in Indian languages (Hindi, Tamil, Telugu) and global APIs.",
    },
    {
      id: "auditLedger",
      name: "Security Auditing Ledger",
      price: 1800,
      description: "Saves LLM responses, prompts, and tokens in a secure dashboard for legal compliance.",
    },
    {
      id: "humanHandoff",
      name: "Human-in-the-loop Gateways",
      price: 1000,
      description: "Dashboard allowing staff review before AI triggers mission-critical external actions.",
    },
    {
      id: "slaSupport",
      name: "24/7 Priority SLA Support",
      price: 2000,
      description: "Dedicated Slack support channel with sub-2hr response SLAs for production systems.",
    },
  ];

  const toggleAddon = (id) => {
    setAddons((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const selectedBaseTier = baseTiers.find((t) => t.id === selectedBase);
  const addonsTotal = addonOptions.reduce(
    (sum, addon) => (addons[addon.id] ? sum + addon.price : sum),
    0
  );
  const totalEstimate = selectedBaseTier.price + addonsTotal;

  const handleEstimateSubmit = () => {
    const activeAddonsText = addonOptions
      .filter((a) => addons[a.id])
      .map((a) => `- ${a.name} ($${a.price})`)
      .join("\n");
      
    const subject = `AI Project Estimate Request: ${selectedBaseTier.name}`;
    const body = `Hi Grah AI Systems team,\n\nI generated a custom project estimate on grahai.com. Here is the configuration I am interested in:\n\nBase Tier: ${
      selectedBaseTier.name
    } ($${selectedBaseTier.price})\n\nSelected Add-ons:\n${
      activeAddonsText || "None"
    }\n\nEstimated Total Project Cost: $${totalEstimate}\n\nPlease reach back to schedule a discovery call.\n\nBest regards,`;

    window.location.href = `mailto:support@grahai.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="pricing" className="py-24 sm:py-32 relative overflow-hidden border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-azure-600">
            TRANSPARENT PRICING
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            What Can We Build For You?
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Professional AI systems built by senior product developers. No hidden fees, clear scope delivery, and enterprise durability.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {baseTiers.map((tier) => (
            <div
              key={tier.id}
              className="glass rounded-2xl p-6 border border-slate-200 flex flex-col justify-between hover:border-azure-500/30 transition-all hover:scale-[1.01] bg-white shadow-sm"
            >
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  {tier.name}
                </h3>
                <p className="mt-2 text-xs text-slate-500 min-h-[32px]">
                  {tier.description}
                </p>
                <div className="mt-4 flex items-baseline text-slate-900">
                  <span className="text-sm font-semibold text-slate-450 mr-1">Starting at</span>
                  <span className="text-3xl font-extrabold tracking-tight">
                    ${tier.price.toLocaleString()}
                  </span>
                </div>
                
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start text-xs text-slate-600">
                      <Check className="text-azure-600 mr-2.5 shrink-0 mt-0.5" size={14} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => {
                    setSelectedBase(tier.id);
                    document.getElementById("estimator-box").scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-350 transition-colors"
                >
                  Configure Estimate
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Estimator Panel */}
        <div
          id="estimator-box"
          className="glass rounded-2xl border border-slate-200 p-6 sm:p-10 bg-white shadow-xl scroll-mt-28"
        >
          <div className="flex items-center gap-2 mb-6">
            <Calculator className="text-azure-600" size={22} />
            <h3 className="font-display text-xl font-bold text-slate-900">
              Interactive Custom Estimate Builder
            </h3>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Column: Selections */}
            <div className="space-y-6">
              {/* Select Base Service */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  1. Select Base System
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {baseTiers.map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setSelectedBase(tier.id)}
                      className={`text-left p-3.5 rounded-xl border text-xs font-medium transition-all ${
                        selectedBase === tier.id
                          ? "bg-azure-50/50 border-azure-500 text-slate-900 shadow-sm font-bold"
                          : "bg-slate-50/50 border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                      }`}
                    >
                      <div>{tier.name}</div>
                      <div className="text-slate-400 mt-1">${tier.price.toLocaleString()}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Add-ons */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  2. Choose Custom Add-ons
                </label>
                <div className="space-y-2">
                  {addonOptions.map((addon) => (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                        addons[addon.id]
                          ? "bg-azure-50/30 border-azure-400/80 text-slate-900"
                          : "bg-slate-50/30 border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                            addons[addon.id]
                              ? "bg-azure-600 border-azure-500 text-white"
                              : "border-slate-300"
                          }`}
                        >
                          {addons[addon.id] && <Check size={10} />}
                        </div>
                        <div>
                          <div className="text-xs font-bold">{addon.name}</div>
                          <div className="text-[10px] text-slate-400 mt-0.5">{addon.description}</div>
                        </div>
                      </div>
                      <div className="text-xs font-bold text-azure-600 shrink-0 ml-4">
                        +${addon.price}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Price Summary */}
            <div className="flex flex-col justify-between bg-slate-50 border border-slate-100 rounded-xl p-6 relative">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 pb-2 border-b border-slate-200">
                  Project Scope Summary
                </h4>
                
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-700">Base System: {selectedBaseTier.name}</span>
                    <span className="font-semibold text-slate-900">${selectedBaseTier.price.toLocaleString()}</span>
                  </div>

                  {addonOptions.map(
                    (addon) =>
                      addons[addon.id] && (
                        <div key={addon.id} className="flex justify-between text-slate-600 pl-3 border-l border-azure-500/50">
                          <span>+ {addon.name}</span>
                          <span>${addon.price.toLocaleString()}</span>
                        </div>
                      )
                  )}

                  <div className="pt-4 mt-4 border-t border-slate-200 flex justify-between items-baseline">
                    <span className="text-sm font-bold text-slate-900">Estimated Cost</span>
                    <span className="text-2xl font-extrabold text-azure-600">
                      ${totalEstimate.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-3 bg-white border border-slate-200/60 rounded-lg text-[10px] text-slate-500 leading-relaxed flex items-start gap-2">
                  <Info size={14} className="shrink-0 text-azure-600 mt-0.5" />
                  <span>
                    This estimate represents our standard deployment rates for production-ready solutions. Final scope is refined during our discovery architecture call.
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={handleEstimateSubmit}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-azure-600 to-azure-700 px-6 py-4 text-sm font-semibold text-white shadow-md shadow-azure-700/20 hover:from-azure-500 hover:to-azure-600 transition-all hover:scale-[1.01]"
                >
                  <FileText size={16} />
                  Email Estimate & Book Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
