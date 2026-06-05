"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Mail, ShieldAlert, Cpu, Calendar, Database, FileSpreadsheet, CheckCircle2 } from "lucide-react";

export default function InteractiveHeroDemo() {
  const [activeWorkflow, setActiveWorkflow] = useState("lead"); // 'lead' | 'invoice'
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  const workflows = {
    lead: {
      title: "Lead Qualification Agent",
      description: "Auto-qualifies incoming business enquiries, syncs CRM, and schedules discovery calls.",
      steps: [
        {
          label: "Inbound Email",
          icon: Mail,
          desc: "Lead arrives: 'Looking for custom AI automation starting this month...'",
          log: "Received: webform_lead_094a.json from grahai.com/contact\nExtracting sender: john.doe@enterprise.com",
        },
        {
          label: "AI Qualification",
          icon: Cpu,
          desc: "AI reviews budget, intent, timeline and parses requirements.",
          log: "AI Agent Reasoning: \n- Core request: Custom AI Document processing \n- Intent score: 92/100 (Strong urgency) \n- Budget validation: Match (> $5,000 threshold)",
        },
        {
          label: "CRM Sync",
          icon: Database,
          desc: "Logs detailed qualified lead information directly in CRM.",
          log: "POST /v1/deals -> HubSpot API \nCreated contact 'John Doe' (Enterprise Inc)\nStatus: Qualified | Stage: Discovery Call Scheduled",
        },
        {
          label: "Auto-Scheduler",
          icon: Calendar,
          desc: "AI reserves a slot in client's calendar and sends invite.",
          log: "Invoked Google Calendar API: \nGenerating slot: June 11th, 3:30 PM IST \nDispatching invite to john.doe@enterprise.com",
        },
        {
          label: "Outcome Achieved",
          icon: CheckCircle2,
          desc: "CRM updated and discovery meeting booked, 100% hands-free.",
          log: "Success: Lead qualified & scheduled.\nHuman time saved: 45 minutes.\nTime-to-action: 12 seconds.",
        },
      ],
    },
    invoice: {
      title: "Document Parser & Accounting",
      description: "OCR & Document Intelligence system to classify, validate, and post invoice line items.",
      steps: [
        {
          label: "Invoice Ingestion",
          icon: FileSpreadsheet,
          desc: "ERP receives vendor PDF invoice via email attach.",
          log: "Ingesting document: vendor_invoice_9901.pdf\nSize: 452KB | Source: accounting@supplier.com",
        },
        {
          label: "OCR & AI OCR",
          icon: Cpu,
          desc: "Extracts table line items and matches values using Gemini Document Parser.",
          log: "Parsing lines using Gemini 1.5 Pro:\n- Match found: 'AWS Hosting' -> $2,450.00\n- Match found: 'Consulting services' -> $4,000.00\n- Math validation: total checks ($6,450.00)",
        },
        {
          label: "Audit & Validation",
          icon: ShieldAlert,
          desc: "Cross-checks vendor with contract ledger for fraud and double-invoicing.",
          log: "Validating vendor ID: VND-38910...\nVendor record matched. No duplicate invoice detected in current dasha ledger.",
        },
        {
          label: "ERP Synchronized",
          icon: Database,
          desc: "Integrates with SAP / Tally ERP and posts account ledger entries.",
          log: "Calling ERP gateway...\nPosted credit ledger: Accounts Payable -> $6,450.00\nTransaction ID: TXN_881920_OK",
        },
        {
          label: "Outcome Achieved",
          icon: CheckCircle2,
          desc: "Invoice verified, logged in ERP, and queued for automatic payment.",
          log: "Success: Invoice audit and logging completed.\nHuman time saved: 1.5 hours.\nError risk reduced to: 0.01%",
        },
      ],
    },
  };

  const activeWorkflowSteps = workflows[activeWorkflow].steps;

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStep((prevStep) => (prevStep + 1) % activeWorkflowSteps.length);
      }, 3000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isPlaying, activeWorkflowSteps.length]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  
  const resetDemo = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const handleWorkflowChange = (wKey) => {
    setActiveWorkflow(wKey);
    setCurrentStep(0);
    setIsPlaying(true);
  };

  return (
    <div className="glass rounded-2xl border border-slate-200/80 p-6 shadow-xl relative overflow-hidden bg-white">
      {/* Decorative ambient lights */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-azure-500/5 rounded-full blur-[60px] pointer-events-none" />

      {/* Demo Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-azure-600">
            Interactive AI Automation Simulator
          </span>
          <h3 className="text-lg font-bold text-slate-900 mt-1">
            {workflows[activeWorkflow].title}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWorkflowChange("lead")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeWorkflow === "lead"
                ? "bg-azure-50 text-azure-600 border border-azure-200"
                : "text-slate-600 hover:text-slate-900 border border-transparent"
            }`}
          >
            Lead Flow
          </button>
          <button
            onClick={() => handleWorkflowChange("invoice")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeWorkflow === "invoice"
                ? "bg-azure-50 text-azure-600 border border-azure-200"
                : "text-slate-600 hover:text-slate-900 border border-transparent"
            }`}
          >
            Invoice Flow
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        {/* Node Graph / Process Flow */}
        <div className="flex flex-col justify-between h-full bg-slate-50/50 border border-slate-100 rounded-xl p-5 relative">
          <div className="space-y-4">
            {activeWorkflowSteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = idx === currentStep;
              const isPast = idx < currentStep;

              return (
                <div key={step.label} className="relative">
                  {/* Step Connector Line */}
                  {idx < activeWorkflowSteps.length - 1 && (
                    <div
                      className={`absolute left-5 top-10 w-0.5 h-10 transition-colors duration-500 -z-10 ${
                        isPast ? "bg-azure-600" : "bg-slate-200"
                      }`}
                    />
                  )}

                  {/* Step Item */}
                  <button
                    onClick={() => {
                      setCurrentStep(idx);
                      setIsPlaying(false);
                    }}
                    className="w-full flex items-start text-left gap-4 group cursor-pointer focus:outline-none"
                  >
                    {/* Circle Node */}
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                        isActive
                          ? "bg-azure-600 border-azure-500 text-white shadow-md scale-110"
                          : isPast
                          ? "bg-azure-50 border-azure-200 text-azure-600"
                          : "bg-white border-slate-200 text-slate-400"
                      }`}
                    >
                      <Icon size={18} />
                    </div>

                    {/* Step details */}
                    <div className="pt-0.5">
                      <span
                        className={`text-xs font-bold transition-colors ${
                          isActive ? "text-azure-600" : "text-slate-900"
                        }`}
                      >
                        Step {idx + 1}: {step.label}
                      </span>
                      <p
                        className={`text-xs leading-relaxed transition-colors mt-0.5 ${
                          isActive ? "text-slate-800" : "text-slate-500"
                        }`}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Action Player bar */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-100">
            <div className="flex gap-2">
              <button
                onClick={togglePlay}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <button
                onClick={resetDemo}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors"
                title="Reset"
              >
                <RotateCcw size={16} />
              </button>
            </div>
            <div className="text-[10px] text-slate-400 font-mono">
              Auto-cycling: 3s
            </div>
          </div>
        </div>

        {/* Console / Terminal Log Output */}
        <div className="bg-slate-900 rounded-xl border border-slate-950 p-4 font-mono text-[11px] text-emerald-400 h-[280px] overflow-y-auto flex flex-col justify-between relative shadow-inner">
          <div className="absolute top-2 right-3 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-500/80" />
            <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
            <span className="h-2 w-2 rounded-full bg-green-500/80" />
          </div>

          <div className="space-y-3">
            <div className="text-white/30 border-b border-white/5 pb-1 select-none">
              SYSTEM CONSOLE // AGENT_SESSION_RUN
            </div>
            <div className="whitespace-pre-wrap leading-relaxed animate-fade-in text-emerald-300">
              {activeWorkflowSteps[currentStep].log}
            </div>
          </div>

          <div className="mt-4 pt-2 border-t border-white/5 flex items-center gap-1 text-[10px] text-white/30">
            <span>grahai-terminal:~$</span>
            <span className="h-3 w-1.5 bg-emerald-400 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
