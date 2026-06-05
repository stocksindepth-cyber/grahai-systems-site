"use client";

import { useState } from "react";
import { Mail, Calendar, MapPin, Send, Check } from "lucide-react";

export default function ContactSection() {
  const [activeForm, setActiveForm] = useState(null); // 'roadmap' | 'estimate' | null
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const subject = activeForm === "roadmap" ? "AI Roadmap Request" : "AI Project Estimate Request";
      const body = `Hi Grah AI Systems team,\n\nI would like to request an ${
        activeForm === "roadmap" ? "AI Roadmap Blueprint" : "AI Project Estimate"
      }.\n\nMessage: ${message}\n\nBest regards,\n${email}`;
      window.location.href = `mailto:support@grahai.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      
      setSubmitted(false);
      setActiveForm(null);
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden bg-slate-50 border-t border-slate-200/50">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-azure-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-8 sm:p-16 text-center relative border border-slate-200/80 shadow-xl bg-white/80">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-azure-50 border border-azure-100 shadow-md">
            <Mail className="text-white" size={20} />
          </div>

          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Let&apos;s Build Your AI System
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            Whether you need an AI chatbot, workflow automation, document intelligence platform, or a complete custom AI SaaS product, our product engineers can build it.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:support@grahai.com?subject=Discovery%20Call%20Request"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-azure-600 to-azure-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-azure-700/20 hover:from-azure-500 hover:to-azure-600 transition-all hover:scale-[1.02]"
            >
              <Calendar size={16} />
              Book Free Discovery Call
            </a>
            
            <button
              onClick={() => setActiveForm("roadmap")}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              Get AI Roadmap
            </button>

            <button
              onClick={() => setActiveForm("estimate")}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              Request Project Estimate
            </button>
          </div>

          {/* Dynamic Interactive Email Form */}
          {activeForm && (
            <div className="mt-8 text-left border-t border-slate-200 pt-8 animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900">
                  {activeForm === "roadmap" ? "Request an AI Architecture Roadmap" : "Request Custom Project Cost Estimate"}
                </h3>
                <button 
                  onClick={() => setActiveForm(null)}
                  className="text-xs text-slate-400 hover:text-slate-900 font-semibold"
                >
                  Cancel
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                    Your Business Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-azure-500 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                    {activeForm === "roadmap" 
                      ? "Briefly describe your current business bottlenecks:" 
                      : "Briefly outline what you want to automate/build:"}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="We want to automate lead qualification..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-azure-500 focus:bg-white transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitted}
                  className="inline-flex items-center gap-2 rounded-lg bg-azure-600 hover:bg-azure-700 text-xs font-semibold text-white px-4 py-2.5 transition-colors disabled:bg-emerald-600"
                >
                  {submitted ? (
                    <>
                      <Check size={14} />
                      Opening Email Client...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Generate Request Email
                    </>
                  )}
                </button>
              </form>
            </div>
          )}

          {/* Direct Support Reachout */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col items-center justify-center gap-2">
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
              Or write to us directly
            </span>
            <a
              href="mailto:support@grahai.com"
              className="text-xl font-display font-bold text-azure-600 hover:text-azure-700 transition-colors"
            >
              support@grahai.com
            </a>
            <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-400">
              <MapPin size={12} />
              Bengaluru, Karnataka, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
