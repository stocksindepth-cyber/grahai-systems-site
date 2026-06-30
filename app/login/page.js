"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Loader2, ArrowRight } from "lucide-react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../lib/firebaseClient";

const googleProvider = new GoogleAuthProvider();

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
    "auth/account-exists-with-different-credential": "You already have an account with this email — sign in with your password.",
    "auth/popup-blocked": "Your browser blocked the popup. Allow popups and try again.",
    "auth/unauthorized-domain": "This domain isn't authorized yet. Please email support@grahai.com.",
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

  async function google() {
    setError("");
    setBusy(true);
    try {
      await signInWithPopup(auth, googleProvider);
      await afterAuth();
    } catch (err) {
      if (err.code === "auth/popup-closed-by-user" || err.code === "auth/cancelled-popup-request") {
        setBusy(false);
        return;
      }
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

          <button
            type="button" onClick={google} disabled={busy}
            className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-60 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z"/>
              <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.02-3.7H.96v2.34A9 9 0 0 0 9 18z"/>
              <path fill="#FBBC05" d="M3.98 10.72a5.4 5.4 0 0 1 0-3.44V4.94H.96a9 9 0 0 0 0 8.12l3.02-2.34z"/>
              <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.46 3.44 1.35l2.58-2.58C13.46.9 11.43 0 9 0A9 9 0 0 0 .96 4.94l3.02 2.34C4.68 5.16 6.66 3.58 9 3.58z"/>
            </svg>
            Continue with Google
          </button>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs font-medium text-slate-400">or</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <form onSubmit={submit} className="space-y-4">
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
