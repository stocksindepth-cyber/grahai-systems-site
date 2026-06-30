"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Loader2, ArrowRight } from "lucide-react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../lib/firebaseClient";

const friendly = (code) =>
  ({
    "auth/invalid-email": "That email doesn't look right.",
    "auth/missing-password": "Please enter a password.",
    "auth/weak-password": "Use at least 6 characters.",
    "auth/email-already-in-use": "That email already has an account — try signing in.",
    "auth/invalid-credential": "Email or password is incorrect.",
    "auth/wrong-password": "Email or password is incorrect.",
    "auth/user-not-found": "No account with that email — create one below.",
    "auth/operation-not-allowed": "Sign-in isn't enabled yet. Please email support@grahai.com.",
  }[code] || "Something went wrong. Please try again.");

export default function LoginPage() {
  const [mode, setMode] = useState("signup"); // signup | login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      if (mode === "signup") {
        await createUserWithEmailAndPassword(auth, email.trim(), password);
      } else {
        await signInWithEmailAndPassword(auth, email.trim(), password);
      }
      await afterAuth();
    } catch (err) {
      setError(friendly(err.code));
      setBusy(false);
    }
  }

  async function afterAuth() {
    // If the user came from /start with a quote to save, persist it now.
    try {
      const raw = sessionStorage.getItem("ghs_pending_quote");
      if (raw) {
        const pending = JSON.parse(raw);
        const idToken = await auth.currentUser.getIdToken();
        await fetch("/api/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${idToken}` },
          body: JSON.stringify(pending),
        });
        sessionStorage.removeItem("ghs_pending_quote");
      }
    } catch {
      /* non-fatal — the dashboard still loads */
    }
    const params = new URLSearchParams(window.location.search);
    window.location.href = params.get("next") || "/dashboard";
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-navy-gradient px-4 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-6 flex items-center justify-center gap-2.5">
          <div className="relative h-9 w-9 overflow-hidden rounded-lg bg-white/10 ring-1 ring-white/20">
            <Image src="/logo.png" alt="GrahAI Systems" fill sizes="36px" className="object-contain p-1" />
          </div>
          <span className="font-display text-lg font-bold text-white">
            GrahAI <span className="font-light text-slate-400">Systems</span>
          </span>
        </Link>

        <div className="rounded-3xl border border-white/10 bg-white p-7 shadow-2xl sm:p-8">
          <h1 className="font-display text-2xl font-extrabold text-navy-700">
            {mode === "signup" ? "Create your account" : "Welcome back"}
          </h1>
          <p className="mt-1.5 text-sm text-slate-500">
            {mode === "signup"
              ? "Save your quote, get your proposal, and track delivery."
              : "Sign in to your project dashboard."}
          </p>

          <form onSubmit={submit} className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">Work email</label>
              <input
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-azure-500 focus:bg-white focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">Password</label>
              <input
                type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder={mode === "signup" ? "At least 6 characters" : "Your password"}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-azure-500 focus:bg-white focus:outline-none"
              />
            </div>

            {error && <p className="text-sm font-medium text-red-600">{error}</p>}

            <button
              type="submit" disabled={busy}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-azure-600 px-6 py-3 text-sm font-bold text-white hover:bg-azure-700 disabled:opacity-60 transition-colors"
            >
              {busy ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} />}
              {mode === "signup" ? "Create account" : "Sign in"}
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-slate-500">
            {mode === "signup" ? "Already have an account?" : "New here?"}{" "}
            <button
              onClick={() => { setMode(mode === "signup" ? "login" : "signup"); setError(""); }}
              className="font-semibold text-azure-600 hover:text-azure-700"
            >
              {mode === "signup" ? "Sign in" : "Create one"}
            </button>
          </p>
        </div>

        <p className="mt-5 text-center text-xs text-slate-400">
          By continuing you agree to our{" "}
          <Link href="/terms" className="text-slate-300 hover:text-white">Terms</Link> and{" "}
          <Link href="/privacy" className="text-slate-300 hover:text-white">Privacy Policy</Link>.
        </p>
      </div>
    </main>
  );
}
