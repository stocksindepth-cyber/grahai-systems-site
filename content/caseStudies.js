// Deep, technical engineering case studies of GrahAI Systems' own products.
// These are proof-of-delivery: the studio builds and operates each of these in
// production, which is the credibility that a CTO evaluating a 20L-50L AI build
// is actually buying. Keep metrics honest/directional, not invented client numbers.

export const caseStudies = [
  {
    slug: 'grahai-astrology-platform',
    product: 'GrahAI',
    liveUrl: 'https://www.grahai.com',
    deepLinks: [
      { label: 'Free AI Kundli generator', href: 'https://www.grahai.com/kundli' },
      { label: 'AI Jyotish chat', href: 'https://www.grahai.com/chat' },
      { label: 'Premium report catalogue', href: 'https://www.grahai.com/reports' },
      { label: 'Tamil jathagam (multilingual surface)', href: 'https://www.grahai.com/ta/jathagam' },
    ],
    category: 'Consumer AI · Multilingual RAG',
    title: 'How we built a multilingual AI astrology platform that grounds every answer in a real birth chart',
    summary: `A consumer-scale Vedic astrology product where the AI never hallucinates planetary positions — it answers over a chart we compute ourselves, in 9 Indian languages, with a self-healing report pipeline on serverless.`,
    accent: 'azure',
    metrics: [
      { label: 'Languages shipped', value: '9' },
      { label: 'Kundli engine accuracy', value: '10/10 vs AstroSage' },
      { label: 'Users', value: 'Thousands' },
      { label: 'Report pipeline uptime', value: '24/7 self-healing' },
    ],
    problem: [
      `Astrology is one of the largest consumer-intent categories in India, but the AI-era version of it is full of products that simply pipe a birth date into a chat model and let it improvise. That breaks the moment a serious user checks a planetary position, a dasha period, or a dosha against any established almanac — the answers do not reconcile, and trust evaporates on the first wrong fact.`,
      `We needed an assistant that feels conversational and intuitive, yet is provably correct on the underlying astronomy. The hard requirement was that every claim the AI makes about a user's chart must be traceable to a deterministic computation, not to the model's training data.`,
      `On top of that, the addressable market is multilingual. A Tamil or Bengali user expects the experience in their own language, including a premium report they can keep — so the same chart had to render correctly across nine languages without nine separate codebases.`,
    ],
    architecture: [
      `Next.js (App Router) on Vercel serverless for the web app, with Firebase Auth and Firestore as the identity and persistence layer; reports live across two subcollections (generated_reports and topicReports) and are listed from both.`,
      `An in-house Swiss-Ephemeris / Lahiri-ayanamsa kundli computation engine produces the deterministic chart: planetary longitudes, house cusps, nakshatras, vimshottari dasha, and dosha flags. Timezone is auto-derived from birth coordinates rather than hardcoded to IST.`,
      `A conversational "AI Jyotish" layer does RAG over the user's computed chart — the chart facts are injected as grounded context so the LLM reasons about real positions instead of inventing them.`,
      `A premium report pipeline fans out to Gemini and Claude under cost-smart routing, then renders an A4 PDF/HTML report plus a page-turning flipbook preview, gated by a free-preview → paywall → unlock funnel.`,
      `Payments run on Razorpay for INR with geo-aware USD pricing, selected per visitor via a cookie + /api/geo + a country provider so the currency is correct before first paint.`,
    ],
    aiStack: [
      'Gemini + Claude with cost-smart routing per task',
      'RAG grounded on computed chart data (not raw LLM recall)',
      'In-house Swiss-Ephemeris / Lahiri kundli engine',
      'Next.js App Router + Vercel serverless',
      'Firebase Auth + Firestore',
      '9-language i18n with English-fallback chrome',
      'Razorpay INR + geo-aware USD checkout',
      'PDF/HTML report renderer + flipbook preview',
    ],
    challenges: [
      {
        title: 'Stopping the model from hallucinating the astronomy',
        body: `A raw LLM will happily state a wrong planetary position with full confidence. We removed that failure mode by computing the chart deterministically and feeding it to the model as grounded context — RAG over the user's real chart. The model's job becomes interpretation and language, never astronomy. We then validated the engine against AstroSage on the Lahiri system and reached a 10/10 match across test charts.`,
      },
      {
        title: 'Reports getting stuck "pending" on serverless',
        body: `Our first report pipeline used fire-and-forget fetches to kick off generation. On Vercel's serverless model the function can be torn down the instant the response is returned, so the background work silently died and reports hung at status:"pending". We rebuilt it around Next.js after() to keep the work alive past the response, added a paidAt marker, and made the retry and the viewer payment-aware so a paid-but-unfinished report self-heals. The rule we keep: never fire-and-forget on serverless.`,
      },
      {
        title: 'Nine languages without nine codebases',
        body: `The same computed chart has to render in English, Hindi, Tamil, Telugu, Bengali, Marathi and more. We built a single language registry with graceful fallback — thinner languages fall back to English chrome rather than to a wrong-language string — plus precomputed numerics (e.g. Life Path Number) and a guard that clamps runaway LLM repetition loops that non-English generation tends to trigger.`,
      },
      {
        title: 'Trusting quality at scale',
        body: `Once thousands of reports are generated unattended, you cannot eyeball them. A daily "report-sentinel" cron audits report quality against a shared quality module and emails the founder a digest, so regressions in any single SKU surface within a day instead of via a customer complaint.`,
      },
    ],
    results: [
      `Every chart-level answer the AI gives is traceable to a deterministic computation, eliminating the "confidently wrong fact" failure that sinks competing products.`,
      'Kundli engine validated 10/10 against AstroSage on the Lahiri system.',
      `Premium reports generate reliably on serverless after the after()-based rebuild, with a self-healing path for interrupted jobs.`,
      'Live in 9 Indian languages from one codebase, serving thousands of users.',
      'A daily quality cron turns unattended generation into a monitored system.',
    ],
    lessons: [
      `For high-stakes consumer AI, ground the model on a deterministic engine you control — RAG-over-facts beats trusting the LLM's memory every time.`,
      `Serverless changes the rules: any work that outlives the HTTP response must be made durable (after(), markers, payment-aware retries) or it will silently drop.`,
      `Treat localization as a fallback graph, not a translation table — a correct English string beats a broken local one.`,
      'If generation runs unattended, build the quality monitor before you scale, not after the first complaint.',
    ],
  },
  {
    slug: 'applyvita-ats-resume-platform',
    product: 'ApplyVita',
    liveUrl: 'https://applyvita.com',
    deepLinks: [
      { label: 'AI résumé builder', href: 'https://applyvita.com/builder' },
      { label: 'ATS score checker', href: 'https://applyvita.com/ats' },
    ],
    category: 'Career AI · SEO · Cost-Smart Routing',
    title: 'How we built an ATS-optimising résumé platform with cost-smart AI routing and a programmatic SEO engine for India',
    summary: `A career AI product that runs Gemini for high-volume tasks and Claude for nuanced rewrites — cutting inference cost while delivering résumés that pass ATS filters — with a programmatic SEO layer capturing high-intent job-search traffic in India.`,
    accent: 'violet',
    metrics: [
      { label: 'AI model routing', value: 'Gemini + Claude' },
      { label: 'ATS formats', value: 'India + global' },
      { label: 'SEO cluster', value: 'Naukri-ATS + company formats' },
      { label: 'Canonical host', value: 'WWW enforced' },
    ],
    problem: [
      `Most résumé builders optimise for aesthetics. ATS systems — which screen 75% of applications before a human ever reads them — optimise for structured data, keyword density, and clean parsing. A beautifully designed PDF that an ATS reads as a single unstructured text block is a résumé that never reaches a recruiter.`,
      `For the Indian market specifically, the vocabulary of "résumé optimisation" does not match how job seekers actually search. Users search for Naukri format, company-specific CV formats, and ATS-friendly templates by company name — not generic "résumé builder" terms that the big incumbents already own.`,
      `And on the infrastructure side, running a powerful model for every single task — even a simple formatting check — makes the economics unworkable at scale.`,
    ],
    architecture: [
      `Next.js (App Router) on Vercel, standalone from any sibling product — no shared backend, no proxy through other domains.`,
      `A cost-smart routing layer selects Gemini 2.5 Flash for high-volume / lower-complexity tasks (ATS scoring, keyword extraction, formatting) and Claude for nuanced rewrites and cover letter generation, cutting per-request inference cost without degrading output quality.`,
      `A programmatic SEO engine generates keyword-specific landing pages targeting Naukri-ATS queries and company-format clusters — the proven high-intent demand surface for Indian job seekers.`,
      `Canonical host is enforced as WWW; all apex traffic 308-redirects. The robots.ts file was hardened to emit the www canonical, fixing an indexation stall caused by stripped-www canonicals being emitted during an earlier phase.`,
      `Payments run on Razorpay for international card checkout; OG images are rendered server-side on the nodejs runtime (not edge, which breaks font fetching) using a shared renderOgCard utility with bundled fonts.`,
    ],
    aiStack: [
      'Gemini 2.5 Flash for high-volume ATS scoring & keyword extraction',
      'Claude for nuanced rewrites & cover letter generation',
      'Cost-smart routing layer (task-type → model selection)',
      'Programmatic SEO: Naukri-ATS + company-format clusters',
      'Next.js App Router + Vercel serverless',
      'Razorpay international card checkout',
      'Server-side OG image rendering (nodejs runtime, bundled fonts)',
    ],
    challenges: [
      {
        title: "Routing between models without exposing it to users",
        body: `Users care about output quality, not which model produced it. We built a routing layer that dispatches by task type — Gemini handles the fast, high-volume checks; Claude handles the rewrites where tone and nuance matter. The split is invisible to the user and configurable without a deployment.`,
      },
      {
        title: "Capturing India-specific search intent",
        body: `Generic "résumé builder" is a saturated keyword dominated by global incumbents. We built programmatic clusters around the demand patterns Indian job seekers actually use: Naukri-compatible format, company-specific CV templates (Infosys, TCS, Wipro format résumé), and ATS-pass queries. These are high-intent, lower-competition, and directly map to what our builder produces.`,
      },
      {
        title: "Canonical stall from stripped-www robots output",
        body: `After launch, GSC indexation stalled. The cause was robots.ts emitting apex-domain canonicals instead of www canonicals, so Google's crawl saw a signal that the www pages were duplicates. We enforced www as the canonical host end-to-end — robots.ts, next.config redirects, and sitemap — and re-submitted. Indexation recovered.`,
      },
      {
        title: "OG images breaking on edge runtime",
        body: `The initial OG image route used the edge runtime, which cannot fetch external fonts at render time. Images rendered with the system fallback font and looked broken in link previews. We moved the route to the nodejs runtime and bundled the fonts directly, keeping OG copy to two lines to fit cleanly in every preview format.`,
      },
    ],
    results: [
      'Cost-smart routing delivers nuanced AI output at lower per-request cost by matching model tier to task complexity.',
      'Programmatic SEO clusters capture high-intent Indian job-seeker queries that global incumbents do not target.',
      `Canonical enforcement and robots.ts fix unblocked GSC indexation after an apex-www mismatch stalled crawls.`,
      'OG images render correctly across all link previews after moving to the nodejs runtime with bundled fonts.',
    ],
    lessons: [
      `Route by task, not by product — not every feature needs the most powerful model, and the cost difference compounds fast.`,
      `For regional markets, do keyword research in the user's actual search vocabulary, not the category vocabulary the incumbents own.`,
      `Canonical infrastructure (robots, sitemap, redirects) must all agree — one mismatched signal is enough to stall indexation.`,
      'Edge runtime is fast but constrained; font-dependent renders belong on nodejs, not edge.',
    ],
  },
];
