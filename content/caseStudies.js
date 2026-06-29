// Deep, technical engineering case studies of GrahAI Systems' own products.
// These are proof-of-delivery: the studio builds and operates each of these in
// production, which is the credibility that a CTO evaluating a 20L-50L AI build
// is actually buying. Keep metrics honest/directional, not invented client numbers.

export const caseStudies = [
  {
    slug: 'grahai-astrology-platform',
    product: 'GrahAI',
    liveUrl: 'https://grahai.com',
    category: 'Consumer AI · Multilingual RAG',
    title:
      'How we built a multilingual AI astrology platform that grounds every answer in a real birth chart',
    summary:
      'A consumer-scale Vedic astrology product where the AI never hallucinates planetary positions — it answers over a chart we compute ourselves, in 9 Indian languages, with a self-healing report pipeline on serverless.',
    accent: 'azure',
    metrics: [
      { label: 'Languages shipped', value: '9' },
      { label: 'Kundli engine accuracy', value: '10/10 vs AstroSage' },
      { label: 'Users', value: 'Thousands' },
      { label: 'Report pipeline uptime', value: '24/7 self-healing' },
    ],
    problem: [
      'Astrology is one of the largest consumer-intent categories in India, but the AI-era version of it is full of products that simply pipe a birth date into a chat model and let it improvise. That breaks the moment a serious user checks a planetary position, a dasha period, or a dosha against any established almanac — the answers do not reconcile, and trust evaporates on the first wrong fact.',
      'We needed an assistant that feels conversational and intuitive, yet is provably correct on the underlying astronomy. The hard requirement was that every claim the AI makes about a user’s chart must be traceable to a deterministic computation, not to the model’s training data.',
      'On top of that, the addressable market is multilingual. A Tamil or Bengali user expects the experience in their own language, including a premium report they can keep — so the same chart had to render correctly across nine languages without nine separate codebases.',
    ],
    architecture: [
      'Next.js (App Router) on Vercel serverless for the web app, with Firebase Auth and Firestore as the identity and persistence layer; reports live across two subcollections (generated_reports and topicReports) and are listed from both.',
      'An in-house Swiss-Ephemeris / Lahiri-ayanamsa kundli computation engine produces the deterministic chart: planetary longitudes, house cusps, nakshatras, vimshottari dasha, and dosha flags. Timezone is auto-derived from birth coordinates rather than hardcoded to IST.',
      'A conversational "AI Jyotish" layer does RAG over the user’s computed chart — the chart facts are injected as grounded context so the LLM reasons about real positions instead of inventing them.',
      'A premium report pipeline fans out to Gemini and Claude under cost-smart routing, then renders an A4 PDF/HTML report plus a page-turning flipbook preview, gated by a free-preview → paywall → unlock funnel.',
      'Payments run on Razorpay for INR with geo-aware USD pricing, selected per visitor via a cookie + /api/geo + a country provider so the currency is correct before first paint.',
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
        body:
          'A raw LLM will happily state a wrong planetary position with full confidence. We removed that failure mode by computing the chart deterministically and feeding it to the model as grounded context — RAG over the user’s real chart. The model’s job becomes interpretation and language, never astronomy. We then validated the engine against AstroSage on the Lahiri system and reached a 10/10 match across test charts.',
      },
      {
        title: 'Reports getting stuck "pending" on serverless',
        body:
          'Our first report pipeline used fire-and-forget fetches to kick off generation. On Vercel’s serverless model the function can be torn down the instant the response is returned, so the background work silently died and reports hung at status:"pending". We rebuilt it around Next.js after() to keep the work alive past the response, added a paidAt marker, and made the retry and the viewer payment-aware so a paid-but-unfinished report self-heals. The rule we keep: never fire-and-forget on serverless.',
      },
      {
        title: 'Nine languages without nine codebases',
        body:
          'The same computed chart has to render in English, Hindi, Tamil, Telugu, Bengali, Marathi and more. We built a single language registry with graceful fallback — thinner languages fall back to English chrome rather than to a wrong-language string — plus precomputed numerics (e.g. Life Path Number) and a guard that clamps runaway LLM repetition loops that non-English generation tends to trigger.',
      },
      {
        title: 'Trusting quality at scale',
        body:
          'Once thousands of reports are generated unattended, you cannot eyeball them. A daily "report-sentinel" cron audits report quality against a shared quality module and emails the founder a digest, so regressions in any single SKU surface within a day instead of via a customer complaint.',
      },
    ],
    results: [
      'Every chart-level answer the AI gives is traceable to a deterministic computation, eliminating the "confidently wrong fact" failure that sinks competing products.',
      'Kundli engine validated 10/10 against AstroSage on the Lahiri system.',
      'Premium reports generate reliably on serverless after the after()-based rebuild, with a self-healing path for interrupted jobs.',
      'Live in 9 Indian languages from one codebase, serving thousands of users.',
      'A daily quality cron turns unattended generation into a monitored system.',
    ],
    lessons: [
      'For high-stakes consumer AI, ground the model on a deterministic engine you control — RAG-over-facts beats trusting the LLM’s memory every time.',
      'Serverless changes the rules: any work that outlives the HTTP response must be made durable (after(), markers, payment-aware retries) or it will silently drop.',
      'Treat localization as a fallback graph, not a translation table — a correct English string beats a broken local one.',
      'If generation runs unattended, build the quality monitor before you scale, not after the first complaint.',
    ],
  },
  {
    slug: 'optionsgyani-options-analytics',
    product: 'OptionsGyani',
    liveUrl: 'https://optionsgyani.com',
    category: 'Fintech · Simulation Engine + pSEO',
    title:
      'How we replaced fragile live NSE feeds with a Black-Scholes option-chain simulation that never goes down',
    summary:
      'When every live option-chain feed we tried was rate-limited, token-expiring, delayed or empty on weekends, we stopped consuming feeds and started generating the chain ourselves — a real-Greeks synthetic chain behind a single swappable data layer.',
    accent: 'emerald',
    metrics: [
      { label: 'Feed outages', value: '0' },
      { label: 'Availability', value: '24/7, incl. weekends' },
      { label: 'Backtest history', value: '8+ years' },
      { label: 'Data layer swap points', value: '1' },
    ],
    problem: [
      'Free options analytics looks easy until you depend on a live option chain. Every public and broker source we evaluated failed in a different way: NSE behind Akamai rate-limits and blocks, broker APIs with tokens that expire mid-session, Yahoo data delayed by 15 minutes, and — worst of all — empty or stale data on weekends and holidays that turned the whole product into a wall of 503s exactly when curious users had time to explore it.',
      'For a free, SEO-driven product the economics do not support a paid market-data vendor, and the user expectation is a tool that always responds. A loading spinner or an error page on a Sunday afternoon is a bounced visitor and a lost referral.',
      'So the requirement inverted: instead of fighting to keep a fragile real feed alive, we needed a data source that is always available, always well-formed, and honest about what it is.',
    ],
    architecture: [
      'We generate the option chain ourselves with a Black-Scholes pricing engine that produces real Greeks (delta, gamma, theta, vega), a volatility smile/skew, ATM-peaked open interest, and an NSE-style weekly/monthly expiry calendar.',
      'The synthetic chain is anchored on a live spot price where available, with a per-symbol baseline fallback so the engine never throws and always returns a populated, plausibly-shaped chain — including weekends.',
      'A single data-access module (marketApi.js) is the only swap point: every consumer in the app routes through it, so the underlying source can change without touching feature code.',
      'On top of the chain sit paper trading and strategy backtests over 8+ years of data, plus a large programmatic-SEO content engine generating data-driven /strategies, /brokers and /learn pages.',
      'Next.js 16 + Firebase for app and auth, Razorpay for payments, and a Dhan broker referral as the revenue path — with pricing honestly labeled "simulated."',
    ],
    aiStack: [
      'Black-Scholes synthetic option-chain engine (real Greeks)',
      'Volatility smile/skew + ATM-peaked OI modeling',
      'Single data-layer abstraction (marketApi.js)',
      'Per-symbol baseline fallback for zero-downtime',
      '8+ year backtesting + paper-trading engine',
      'Programmatic-SEO content generation (/strategies, /brokers, /learn)',
      'Next.js 16 + Firebase + Razorpay',
    ],
    challenges: [
      {
        title: 'Live feeds that fail in four different ways',
        body:
          'Akamai blocks, expiring broker tokens, 15-minute Yahoo delay, and empty weekend data each demanded their own retry, caching and error-handling code, and even then the product was only as reliable as the worst source on any given day. We concluded the dependency itself was the bug, not the integration quality.',
      },
      {
        title: 'Making "synthetic" actually trustworthy',
        body:
          'A fake chain is worthless if it is not shaped like a real one. The engine prices every strike with Black-Scholes, applies a volatility smile so wings are priced correctly, peaks open interest around ATM, and respects NSE’s weekly/monthly expiry structure — so strategy P&L and Greeks behave the way a trader expects. We then label it honestly as simulated pricing rather than passing it off as live.',
      },
      {
        title: 'Never throwing, ever',
        body:
          'Anchoring on a live spot is best-effort; if the spot lookup fails, the engine falls back to a per-symbol baseline and still returns a complete chain. The contract is that the data layer cannot raise — which is why the product serves traffic 24/7, including weekends and holidays when every real feed is dark.',
      },
      {
        title: 'Keeping the swap reversible',
        body:
          'By funneling every consumer through one module (marketApi.js), the choice between synthetic and live is a one-file decision. If a reliable real feed becomes affordable later, we swap the implementation without rewriting features — the abstraction is the insurance policy.',
      },
    ],
    results: [
      'Zero feed-driven outages: the product responds 24/7, including weekends and holidays.',
      'Greeks, smile and OI behave like a real chain, so backtests and paper trades are meaningful — and labeled honestly as simulated.',
      'A single data-layer abstraction keeps the source swappable with one file changed.',
      '8+ years of backtest history powers paper trading and a large pSEO content surface.',
    ],
    lessons: [
      'Sometimes the most reliable integration is no integration — model the data yourself when every upstream source is a liability.',
      'A simulation is only credible if it is shaped correctly; invest in the financial math (Greeks, smile, OI, expiry calendar), not just plausible numbers.',
      'Put a single swap-point between your app and any external data; it converts a vendor decision into a one-file change.',
      'Be honest about synthetic data in the UI — transparency is what lets a "simulated" product still earn trust.',
    ],
  },
  {
    slug: 'aasankhata-smb-accounting',
    product: 'AasanKhata',
    liveUrl: 'https://aasankhata.in',
    category: 'B2B SaaS · Document AI',
    title:
      'How we turned messy SMB invoices into audited GST ledgers — and survived a shared payments account',
    summary:
      'A GST invoicing and accounting product for Indian SMBs that converts noisy bills into clean, GSTR-1-ready ledgers, with UPI collection on invoices and a multi-tenant payments architecture hardened against cross-brand webhook bleed.',
    accent: 'amber',
    metrics: [
      { label: 'GST export', value: 'GSTR-1 ready' },
      { label: 'Invoice payment', value: 'UPI on-invoice' },
      { label: 'Multi-business', value: 'Yes' },
      { label: 'Webhook isolation', value: 'Brand-guarded' },
    ],
    problem: [
      'Indian SMBs live in a swamp of inconsistent invoices and bills — different formats, missing fields, ad-hoc line items — and yet they are accountable for clean, filing-ready GST records. The accounting they actually need is the boring, audited kind, but the input they have is messy and human.',
      'They also need to get paid. An invoice that the customer can pay over UPI in one tap collects faster than a PDF emailed into a void, so payment collection had to be a first-class feature of the invoice itself, not a separate step.',
      'And because this product is one of several GrahAI properties, it inherited a non-obvious infrastructure constraint: all of them share a single Razorpay merchant account, which turns naive webhook handling into a correctness and privacy hazard.',
    ],
    architecture: [
      'Next.js + Firebase for the app, auth and data, with a multi-business model so one operator can run several legal entities under one login.',
      'AI-assisted line items turn messy bill text into structured invoice lines, feeding a ledger that exports cleanly to GSTR-1.',
      'UPI pay-collection is attached to invoices so the customer settles directly from the invoice, plus recurring invoices for repeat billing.',
      'Razorpay handles both one-time orders and recurring subscriptions; a trial → premium conversion engine (plan logic, plan banners, in-app upgrade, invoice paywall) drives monetization.',
      'Webhooks are brand-guarded on Razorpay notes so events for one product are ignored by the others that share the same account.',
    ],
    aiStack: [
      'AI-assisted invoice line-item extraction',
      'GSTR-1 export pipeline',
      'UPI collection embedded on invoices',
      'Recurring invoices + multi-business model',
      'Razorpay one-time + recurring subscriptions',
      'Brand-guarded multi-tenant webhooks',
      'Trial → premium conversion engine (plan, banner, paywall)',
    ],
    challenges: [
      {
        title: 'One Razorpay account, many products — webhook bleed',
        body:
          'Because all GrahAI products share a single Razorpay merchant account, every payment event is delivered to every product’s webhook URL. Without a guard, AasanKhata would react to — and email — a buyer who actually purchased a sibling product, a real privacy and correctness failure. We fixed it by brand-guarding each webhook on notes.product_brand so a handler only acts on its own product’s events.',
      },
      {
        title: 'Messy input, audited output',
        body:
          'GST records have to be precise, but the source documents are not. We use AI to structure line items from noisy bills, then run that structured data into a ledger designed around GSTR-1 export so the output is filing-shaped rather than a freeform note. The AI handles the fuzzy parsing; the ledger enforces the rigor.',
      },
      {
        title: 'Collecting payment without leaving the invoice',
        body:
          'Adding UPI collection onto the invoice itself, alongside recurring invoices, removes the friction step where SMB receivables usually stall — the customer pays from the same artifact they received, instead of being routed to a separate checkout.',
      },
      {
        title: 'Converting trials without nagging',
        body:
          'A trial → premium engine with plan-aware banners, an in-app upgrade path and an invoice paywall nudges conversion at the moment of value (when the user actually needs the gated export or limit), rather than via blunt time-based prompts.',
      },
    ],
    results: [
      'Noisy invoices become clean, GSTR-1-ready ledgers fit for filing.',
      'On-invoice UPI collection shortens the receivable cycle for SMB operators.',
      'Multi-business support lets one operator run several entities under one login.',
      'Shared-account webhooks are isolated per brand, eliminating cross-product mis-emails.',
    ],
    lessons: [
      'When document AI feeds compliance, split responsibilities cleanly: let the model do fuzzy parsing, let a strict schema/ledger enforce correctness.',
      'Shared payment infrastructure is a multi-tenant problem — every webhook must positively identify its own events or it will act on a sibling’s.',
      'Put payment where the value is (on the invoice), not in a separate flow, to cut the friction that stalls collections.',
      'Time conversion prompts to the moment of need (paywall at the gated action), not to a calendar.',
    ],
  },
  {
    slug: 'agencypitch-proposal-saas',
    product: 'AgencyPitch',
    liveUrl: 'https://agencypitch.io',
    category: 'B2B SaaS · AI Proposals',
    title:
      'How we built a multi-tenant AI proposal engine that takes agencies from draft to e-signed close',
    summary:
      'A B2B proposal and client-acquisition SaaS for agencies — AI-assisted proposal building, engagement analytics, and e-sign close — on a multi-tenant data model with region-aware pricing in a monorepo.',
    accent: 'purple',
    metrics: [
      { label: 'Pipeline', value: 'Draft → e-sign → close' },
      { label: 'Tenancy', value: 'Agency multi-tenant' },
      { label: 'Pricing', value: 'Region-aware INR/USD' },
      { label: 'Billing', value: 'One-time + subscription' },
    ],
    problem: [
      'Agencies win or lose business on the proposal, but most build them in static documents that go out and then go dark — no signal about whether the client opened it, lingered on pricing, or ghosted. The closing motion is disconnected from the artifact that does the selling.',
      'Writing those proposals is also slow and repetitive. Agencies re-draft the same scope, deliverables and pricing structure for every prospect, which is exactly the kind of work an AI assistant should accelerate without flattening the agency’s voice.',
      'And as a SaaS serving many agencies, the platform needs hard tenant isolation — one agency must never see another’s clients, proposals or analytics — while still serving a global customer base that pays in different currencies.',
    ],
    architecture: [
      'A Next.js monorepo (apps/web) on Firebase for app, auth and data, structured around an agency multi-tenant model so each agency’s clients, proposals and analytics are isolated.',
      'An AI-assisted proposal builder drafts and structures proposals, which then flow through an engagement-analytics layer that tracks client interaction.',
      'E-sign and close move the proposal from a document into a signed agreement inside the same flow, so the closing step lives where the selling happens.',
      'Razorpay handles both one-time orders and subscriptions, with region-aware INR/USD pricing selected per customer.',
      'The monorepo layout keeps shared logic and the web app together, simplifying the path from draft to engagement to signature.',
    ],
    aiStack: [
      'AI-assisted proposal builder',
      'Client engagement / interaction analytics',
      'E-sign + close workflow',
      'Agency multi-tenant data model',
      'Next.js monorepo (apps/web)',
      'Firebase auth + data',
      'Razorpay one-time + subscriptions, region-aware INR/USD',
    ],
    challenges: [
      {
        title: 'Tenant isolation as a first principle',
        body:
          'A proposal SaaS is only trustworthy if agencies are certain their pipeline is private. We modeled multi-tenancy into the data layer from the start so clients, proposals and analytics are scoped per agency — isolation is a structural property of the schema, not a filter bolted on at query time.',
      },
      {
        title: 'AI drafting that keeps the agency’s voice',
        body:
          'The point of AI here is to remove the blank-page tax on repetitive scope and pricing sections, not to homogenize every agency into the same template. The builder assists drafting while leaving the agency in control of the final pitch.',
      },
      {
        title: 'Closing the loop with engagement signal',
        body:
          'A static proposal gives zero feedback. By attaching engagement analytics, the agency learns whether the client engaged and where, turning follow-up from guesswork into a timed, informed nudge — and the e-sign step keeps the close inside the same artifact.',
      },
      {
        title: 'Selling globally from one checkout',
        body:
          'Agencies and their billing live in different regions, so pricing is region-aware across INR and USD, and Razorpay supports both one-time orders and recurring subscriptions — one billing layer covering both the trial-purchase and the ongoing-subscription motion.',
      },
    ],
    results: [
      'Proposals move from AI-assisted draft to e-signed close inside one connected flow.',
      'Engagement analytics replace "did they even open it?" with concrete follow-up signal.',
      'Per-agency multi-tenant isolation keeps each customer’s pipeline private by design.',
      'Region-aware INR/USD pricing and dual one-time + subscription billing serve a global base.',
    ],
    lessons: [
      'Bake multi-tenancy into the data model from day one — retrofitting isolation onto a single-tenant schema is far riskier than designing for it.',
      'Use AI to kill the repetitive 80% of B2B content while keeping the human in control of voice and the final 20%.',
      'Instrument the artifact that does the selling; engagement signal turns follow-up from guessing into timing.',
      'For global B2B, treat currency and billing mode (one-time vs subscription) as configuration, not as separate code paths.',
    ],
  },
];
