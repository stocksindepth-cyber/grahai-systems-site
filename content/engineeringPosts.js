// Long-form engineering-authority articles for the GrahAI Systems blog.
// Same shape as the site's existing blogPosts so they render identically.

export const engineeringPosts = [
  {
    slug: "how-we-scaled-an-ai-saas-from-zero-to-production",
    title: "How We Scaled an AI SaaS From Zero to Production",
    excerpt:
      "The unglamorous engineering that separates an AI demo from an AI product: cold starts, idempotent webhooks, background jobs that actually finish, and cost you can predict.",
    date: "June 18, 2026",
    author: "GrahAI Engineering",
    readTime: "11 min read",
    category: "AI Architecture",
    content:
      "# How We Scaled an AI SaaS From Zero to Production\n\n" +
      "Most AI products die in the gap between the demo and the second paying customer. The demo runs on someone's laptop with a warm API key and a happy path. Production has cold starts, retrying webhooks, half-finished jobs, and a billing dashboard that only goes up. This is what we actually had to engineer to get our products on Next.js + Firebase + Vercel from zero to something that runs unattended for real users in India and the World.\n\n" +
      "## The serverless trap: fire-and-forget does not work\n\n" +
      "The single most expensive lesson we learned was simple: on serverless, a request that returns is a request that is done. Vercel functions freeze or terminate the execution context the moment you send the response. So the classic pattern of kicking off a long task and returning early quietly drops the task.\n\n" +
      "We had report generation that looked like this:\n\n" +
      "```js\n" +
      "// BROKEN on serverless\n" +
      "export async function POST(req) {\n" +
      "  const job = await createJob(req);\n" +
      "  generateReport(job);   // not awaited\n" +
      "  return Response.json({ status: 'pending' });\n" +
      "}\n" +
      "```\n\n" +
      "In local dev this works perfectly. In production a meaningful fraction of reports stayed stuck at `status: 'pending'` forever, because the function returned and the runtime froze before `generateReport` finished its network calls. Users paid and got nothing.\n\n" +
      "The fix is to tell the platform you still have work to do. Next.js exposes `after()` exactly for this:\n\n" +
      "```js\n" +
      "import { after } from 'next/server';\n\n" +
      "export async function POST(req) {\n" +
      "  const job = await createJob(req);\n" +
      "  after(async () => {\n" +
      "    await generateReport(job);\n" +
      "  });\n" +
      "  return Response.json({ status: 'pending' });\n" +
      "}\n" +
      "```\n\n" +
      "`after()` runs the callback after the response is sent but while the function is kept alive by the platform. The rule we now enforce in review: never start an async side effect on Vercel without `after()` or a queue. If a reviewer sees a bare un-awaited promise in a route handler, it does not merge.\n\n" +
      "## Idempotent webhooks or you will double-charge feelings\n\n" +
      "Payment providers retry. Razorpay will deliver the same `payment.captured` event more than once, especially under load or if your handler is slow to 200. If your webhook is not idempotent you will grant credits twice, email the customer twice, and double-count revenue in analytics.\n\n" +
      "Our rule: derive a deterministic document id from the provider's own id and write with create-if-absent semantics.\n\n" +
      "```js\n" +
      "// Use the payment id as the doc id, not an auto id\n" +
      "const ref = db.collection('payment_logs').doc(`rzp_${payment.id}`);\n" +
      "await db.runTransaction(async (tx) => {\n" +
      "  const snap = await tx.get(ref);\n" +
      "  if (snap.exists) return;          // already processed, no-op\n" +
      "  tx.set(ref, { ...payload, processedAt: Date.now() });\n" +
      "  // grant entitlement inside the same transaction\n" +
      "});\n" +
      "```\n\n" +
      "We learned this the hard way: our analytics dashboards were inflating revenue because retried webhooks each wrote a fresh auto-id document. Switching to `rzp_<id>` as the doc id made the write naturally idempotent and the numbers became honest overnight.\n\n" +
      "## Cold starts are a product problem, not just an infra one\n\n" +
      "A cold serverless function plus a cold model call plus a cold database connection is a multi-second wait that users read as 'broken.' We attacked it from three sides.\n\n" +
      "First, keep the hot path thin. The route handler that the user waits on should do the minimum: validate, write a pending record, return. The heavy LLM work moves to `after()` or a job, and the UI polls or subscribes.\n\n" +
      "Second, stream. For chat and any user-facing generation, we stream tokens so the time-to-first-token is what the user feels, not the time-to-full-response. A 6-second completion that starts rendering at 600ms feels fast.\n\n" +
      "Third, reuse connections. We initialize the Firebase Admin SDK and any clients at module scope so warm invocations reuse them rather than reconnecting on every request.\n\n" +
      "## Background jobs on a platform with no servers\n\n" +
      "Serverless has no long-running worker, so 'background job' means one of three things for us: `after()` for short tail work that fits in the function lifetime; a cron-triggered route for scheduled work (daily quality audits, renewal reminders, dormant win-back email); and a self-healing read path for anything that might have been dropped.\n\n" +
      "That last one is underrated. Our report viewer checks: if a report is `pending` and was created more than N seconds ago and the payment is captured, it re-triggers generation itself. The viewer becomes the safety net for any job the write path lost. Defense in depth beats hoping the happy path always fires.\n\n" +
      "## Observability you will actually look at\n\n" +
      "You cannot fix what you cannot see, but you also will not read a firehose. We log structured events at the boundaries that matter: payment received, entitlement granted, generation started, generation completed, generation failed with the model and token counts. A daily cron summarizes failures and emails the founder a digest. The goal is not a Grafana wall nobody opens; it is one email that tells you if yesterday was healthy.\n\n" +
      "## Cost: measure per request or fly blind\n\n" +
      "AI cost does not show up as a line item until the invoice arrives, by which point it is a surprise. We attach token usage to every generation event and roll it up to cost-per-request and cost-per-paying-user. Once you can see that a single SKU is eating margin, you can route it to a cheaper model, cache it, or trim its context. Without per-request attribution, 'our AI bill is high' is a feeling, not a plan.\n\n" +
      "## What actually scaled us\n\n" +
      "None of this is exotic. The pattern is: keep the synchronous path tiny, make every side effect idempotent, never trust a fire-and-forget on serverless, give dropped work a self-healing path, and put a number on every request. Demos optimize for the happy path; production is the sum of all the unhappy ones.\n\n" +
      "If you are planning a production AI build and want it to survive contact with real users, GrahAI Systems can help — reach us at support@grahai.com.\n",
  },

  {
    slug: "lessons-from-building-four-ai-products",
    title: "Lessons From Building Four AI Products",
    excerpt:
      "Cross-cutting engineering lessons from shipping astrology, options analytics, accounting, and proposal-writing products on one shared stack — including the multi-tenant payment trap that nearly emailed the wrong customers.",
    date: "May 27, 2026",
    author: "GrahAI Engineering",
    readTime: "10 min read",
    category: "Engineering Notes",
    content:
      "# Lessons From Building Four AI Products\n\n" +
      "We run several AI products out of one studio: GrahAI (astrology and Jyotish reports), OptionsGyani (options analytics), AasanKhata (accounting), and AgencyPitch (AI-written agency proposals). They serve completely different users in India and the World, but underneath they share more infrastructure than they don't. Running them in parallel taught us where reuse pays and where it quietly bites.\n\n" +
      "## One Razorpay account, many brands — the webhook bleed\n\n" +
      "Here is the lesson that cost us the most embarrassment. All of our products take payments through a single Razorpay account, because separate accounts mean separate KYC, settlements, and reconciliation we did not want to multiply. Razorpay lets you register webhook URLs, and the trap is this: every payment on the account fires every registered webhook.\n\n" +
      "So a customer buying an astrology report would trigger the accounting product's webhook and the proposal product's webhook too. Early on, that meant a buyer on one brand could receive a confirmation email from a sibling brand. Cross-brand bleed is a trust disaster.\n\n" +
      "The fix is a brand guard at the very top of every webhook handler. We stamp `notes.product_brand` on every order at creation time, and every webhook rejects anything that is not its own brand before doing any work:\n\n" +
      "```js\n" +
      "export async function POST(req) {\n" +
      "  const event = verifySignature(req); // always verify first\n" +
      "  const brand = event.payload.payment.entity.notes?.product_brand;\n" +
      "  if (brand !== 'grahai') {\n" +
      "    return new Response('not my brand', { status: 200 });\n" +
      "  }\n" +
      "  // ...handle only grahai payments\n" +
      "}\n" +
      "```\n\n" +
      "Note it returns 200, not an error — you do not want Razorpay retrying a webhook that correctly decided to do nothing. If you ever share one payment account across brands, brand-guard every webhook on day one.\n\n" +
      "## Shared infra: standardize the boring layer, vary the product layer\n\n" +
      "The thing that made four products tractable for a small team is that we standardized the layer that is identical everywhere and let the product layer diverge freely.\n\n" +
      "Standardized across all four: auth (Firebase), the payment-order creation and webhook skeleton, the idempotency convention (`rzp_<id>` doc ids), structured event logging, the email-sending wrapper, geo and currency detection (INR vs USD per visitor), and the deployment pipeline on Vercel. These never change between products, so we maintain them once.\n\n" +
      "Deliberately not shared: the prompts, the domain models, the UI, the pricing, and the LLM grounding data. A kundli chart has nothing in common with a tax form or an options payoff diagram. Trying to abstract those into a 'universal AI engine' would have produced a leaky god-object that fits nothing well.\n\n" +
      "## Reuse vs duplication: copy until it hurts three times\n\n" +
      "We are not dogmatic about DRY across products. Our rule of thumb: the first time, write it. The second time, copy it. The third time, only then extract a shared module. Premature shared libraries across products create coupling that turns a tweak in one product into a regression in another.\n\n" +
      "Geo-currency detection is a good example of something that earned its way into a shared module — every product needs to show INR to Indian visitors and USD to the rest of the world, the logic is fiddly (cookie + geo API + a pre-paint cookie read to avoid the 'US sees rupees' flash), and getting it wrong loses sales. That hit the bar. A 'shared report generator' did not, because each product's report is its own beast.\n\n" +
      "## Cost-smart model routing is a product decision\n\n" +
      "Across products we route between a cheaper model and a stronger one based on the task, not a global default. Classification, extraction, and short structured outputs go to the cheap, fast model. Long-form reasoning — a full astrology narrative, a nuanced proposal — escalates to the stronger model. The router lives in shared infra; the policy of which task goes where lives per product. We never expose model names or routing strategy in customer copy; users buy outcomes, not vendor logos.\n\n" +
      "## Multi-tenant observability\n\n" +
      "With several products on one logging substrate, every event carries a `product` tag from the start. Without it, a spike in failures is unattributable. With it, the daily digest can say 'AasanKhata had 4 generation failures, everyone else was clean.' Tag your telemetry by product before you have a second product, not after.\n\n" +
      "## What we would tell another studio\n\n" +
      "Run the shared layer like a platform team runs a platform: small, stable, well-tested, and identical everywhere. Run the product layer like product teams: fast, divergent, and free to break its own rules. The mistake is mixing them — sharing what should diverge (prompts, domain logic) and duplicating what should be shared (payments, auth, idempotency). And if you ever share a payment account, guard every webhook by brand before you ship.\n\n" +
      "If you are weighing whether to build several AI products on shared infrastructure, GrahAI Systems has done it across four and can help you avoid the bleed — reach us at support@grahai.com.\n",
  },

  {
    slug: "our-production-ai-architecture",
    title: "Our Production AI Architecture",
    excerpt:
      "The reference architecture we use across products: thin route handlers, RAG grounding on computed data, cost-smart model routing, retries with backoff, evals, caching, and queueing on a platform with no servers.",
    date: "June 4, 2026",
    author: "GrahAI Engineering",
    readTime: "12 min read",
    category: "AI Architecture",
    content:
      "# Our Production AI Architecture\n\n" +
      "This is the architecture we reach for when we start a new AI product. It is not the only way to build, but it is battle-tested across the products we run for users in India and the World, and it is deliberately boring where boring buys reliability.\n\n" +
      "## The shape: thin handler, fat background\n\n" +
      "Every AI feature has the same skeleton. A Next.js App Router route handler does validation, authorization, and a small synchronous write, then returns. The expensive LLM work runs either streamed to the user or in `after()`/a job. The user never waits on a route handler that is itself waiting on a model unless we are streaming.\n\n" +
      "```\n" +
      "client -> route handler (validate, authorize, write pending)\n" +
      "        -> after()/queue -> model call -> persist result\n" +
      "client <- subscribe/poll for result (or streamed tokens)\n" +
      "```\n\n" +
      "## RAG grounding: compute first, retrieve second\n\n" +
      "Our most important architectural opinion is that the model should reason over data we computed, not data it hallucinated. In GrahAI, the AI Jyotish chat does not 'know' astrology from its weights. We compute the user's chart deterministically — planetary positions with the Lahiri ayanamsa, houses, dashas, yogas — using our own validated engine, with timezone auto-derived from the birth coordinates. That structured chart becomes the retrieval context for the chat.\n\n" +
      "```js\n" +
      "const chart = computeChart(birth);          // deterministic, validated\n" +
      "const context = serializeRelevantFacts(chart, userQuestion);\n" +
      "const answer = await model.chat({\n" +
      "  system: groundingInstructions,\n" +
      "  context,                                   // facts, not vibes\n" +
      "  question: userQuestion,\n" +
      "});\n" +
      "```\n\n" +
      "The model's job is interpretation and language, not arithmetic. This makes outputs consistent, auditable, and far cheaper than stuffing a giant prompt and praying. The same principle applies elsewhere: ground on the computed tax figure, the real option payoff, the actual proposal inputs.\n\n" +
      "## Model routing: cheap first, escalate on need\n\n" +
      "We route between a fast inexpensive model and a stronger one. The router is a small policy function, not a framework:\n\n" +
      "```js\n" +
      "function pickModel(task) {\n" +
      "  if (task.kind === 'classify' || task.kind === 'extract') return CHEAP;\n" +
      "  if (task.tokensIn > BIG || task.kind === 'longform') return STRONG;\n" +
      "  return CHEAP; // default down, escalate deliberately\n" +
      "}\n" +
      "```\n\n" +
      "We default down and escalate on purpose, because the failure mode of routing everything to the strong model is a quiet 5x on your bill. For some flows we run the cheap model first and only escalate if a validation check on its output fails — a cascade, not a coin flip.\n\n" +
      "## Retries with backoff and a hard ceiling\n\n" +
      "Model APIs rate-limit and occasionally 5xx. Every model call goes through a wrapper with exponential backoff, jitter, and a max-attempts ceiling. Crucially, retries are bounded by the function's remaining lifetime — there is no point retrying past the moment the serverless function dies. On terminal failure we mark the job failed with the error, so the self-healing read path or a human can act, rather than leaving it pending forever.\n\n" +
      "## Caching: the cheapest token is the one you do not send\n\n" +
      "We cache at two layers. Prompt caching reuses large stable prefixes (system instructions, grounding boilerplate) so we are not re-billing for the same context every call. Output caching keys on a hash of the full input — for deterministic, repeatable generations (a report for the same inputs, an OG card) the second request is a cache hit, not a model call. For anything user-specific and stable, caching is the single biggest cost lever we have.\n\n" +
      "## Evals: a harness, not vibes\n\n" +
      "We do not ship prompt changes on gut feel. We keep deterministic eval scripts that run a fixed set of inputs through the pipeline and assert on structure (every report has its required pages, no runaway repetition, no empty sections) plus a sampled empirical check on content quality. There is also a daily quality cron that audits live outputs and emails a digest. A prompt edit that regresses the eval does not ship.\n\n" +
      "## Queueing without a queue\n\n" +
      "On serverless we have no always-on worker, so 'queue' is a pattern, not a service: write a pending record, process it via `after()` for tail work or a cron-drained collection for heavier batches, and let the read path self-heal anything dropped. For scheduled work (reminders, renewals, audits) a cron-triggered route is the worker. It is less elegant than a dedicated queue, but it has near-zero idle cost and no infrastructure to babysit.\n\n" +
      "## Secrets, geo, and the edges\n\n" +
      "Secrets live in the platform's env, read at module scope, never shipped to the client. Geo-aware behavior (currency, sometimes content) is decided server-side from a geo signal plus a cookie, with a pre-paint cookie read so visitors never see the wrong currency flash. Runtime selection matters too: node runtime where we need fonts or Chromium for PDF rendering, edge only where the function is light and latency-sensitive — bundled fonts on edge tend to break, so OG and PDF stay on node.\n\n" +
      "## The throughline\n\n" +
      "Compute what you can, ground the model on it, route to the cheapest model that clears the bar, cache aggressively, bound your retries, and gate every change behind an eval. That is the whole architecture. The intelligence is in the data you feed the model, not in the model alone.\n\n" +
      "If you want a reference architecture like this designed around your domain, GrahAI Systems can help — reach us at support@grahai.com.\n",
  },

  {
    slug: "how-we-reduced-llm-costs-by-70-percent",
    title: "How We Reduced LLM Costs by 70%",
    excerpt:
      "Concrete, measured tactics that cut our own LLM bill by roughly 70%: model tiering, prompt and output caching, context trimming, structured outputs, and choosing RAG over giant prompts.",
    date: "June 11, 2026",
    author: "GrahAI Engineering",
    readTime: "10 min read",
    category: "LLM Engineering",
    content:
      "# How We Reduced LLM Costs by 70%\n\n" +
      "When you run several AI products, the model bill stops being a rounding error and starts being a real line on the P&L. Over a couple of quarters we cut our own LLM spend by roughly 70% without degrading output quality, and almost none of it came from a single clever trick. It came from measuring, then stacking unglamorous reductions. Here is exactly what moved the number.\n\n" +
      "## Step zero: cost per request, or you are guessing\n\n" +
      "You cannot optimize what you cannot attribute. Before anything else, we instrumented every model call to record input tokens, output tokens, the model used, and the feature that triggered it, then rolled it up to cost-per-request and cost-per-SKU. The first time we looked, two surprises jumped out: one low-revenue feature was our biggest cost center, and a 'cheap' flow was silently routing to the strong model. You find those only with per-request attribution.\n\n" +
      "## Model tiering: default down, escalate on need\n\n" +
      "The biggest single lever was routing. We had been defaulting everything to the strong model 'to be safe.' Most tasks did not need it. We split work into tiers:\n\n" +
      "- Classification, extraction, short structured answers -> cheap, fast model.\n" +
      "- Long-form reasoning and nuanced narrative -> strong model.\n\n" +
      "And we default to the cheap tier, escalating deliberately:\n\n" +
      "```js\n" +
      "let out = await cheapModel(task);\n" +
      "if (!passesQualityCheck(out)) {\n" +
      "  out = await strongModel(task);   // escalate only on failure\n" +
      "}\n" +
      "```\n\n" +
      "This cascade means most requests are served by the cheap model and only the ones that fail a programmatic check pay for the strong one. Routing alone was the largest chunk of our savings.\n\n" +
      "## Prompt caching: stop re-billing your boilerplate\n\n" +
      "Our system prompts and grounding instructions are long and stable. Without caching, every single call pays for those tokens again. Prompt caching lets the provider reuse a stable prefix at a steep discount. We restructured prompts so the large invariant block (instructions, schema, examples) comes first and the small variable block (the user's question and data) comes last, maximizing the cacheable prefix. For high-frequency endpoints this was a quiet, large saving.\n\n" +
      "## Output caching: never generate the same thing twice\n\n" +
      "A lot of AI output is deterministic given its inputs. A report for the same birth details, an OG image for the same page, a summary of the same document — there is no reason to regenerate it. We hash the full input and cache the output:\n\n" +
      "```js\n" +
      "const key = hash(model + version + serialize(inputs));\n" +
      "const cached = await store.get(key);\n" +
      "if (cached) return cached;            // zero tokens\n" +
      "const out = await generate(inputs);\n" +
      "await store.set(key, out);\n" +
      "return out;\n" +
      "```\n\n" +
      "The cheapest token is the one you never send. Output caching turned repeat traffic — which is a lot of traffic — into near-zero marginal cost.\n\n" +
      "## Context trimming and RAG over giant prompts\n\n" +
      "It is tempting to dump everything into the prompt and let the model sort it out. You pay for that on every call. Instead we ground on computed, relevant facts. In our astrology chat we do not paste an entire reference text; we compute the user's chart and send only the facts relevant to their question. Choosing focused RAG over a giant prompt cut input tokens dramatically and improved answer quality at the same time, because the model was not wading through irrelevant context.\n\n" +
      "Concretely: audit your longest prompts and ask, for each block, 'does the model need this for this request?' Usually a third of it is dead weight.\n\n" +
      "## Structured outputs: pay for answers, not prose\n\n" +
      "When you need data, ask for JSON, not an essay. Free-form responses waste output tokens on framing ('Sure! Here is...') and ramble. Constraining the model to a schema makes outputs shorter, cheaper, and parseable, which also removes a class of downstream errors. Output tokens often cost more than input tokens, so trimming output length is direct margin.\n\n" +
      "## Batching where latency allows\n\n" +
      "For non-interactive work — nightly audits, bulk content generation — we batch requests rather than firing them one at a time with full overhead per call. Anything the user is not actively waiting on is a candidate for batching, which amortizes fixed costs and lets us use cheaper async pathways.\n\n" +
      "## What the 70% was actually made of\n\n" +
      "No single tactic got us there. Roughly: model tiering was the largest share, output and prompt caching together were the next, context trimming and structured outputs were the rest. The meta-lesson is that LLM cost is a portfolio problem. Instrument first, then stack reductions, and re-measure after each one so you know what actually worked rather than what felt clever.\n\n" +
      "And keep quality gated the whole way — every one of these changes ran against our eval harness so we knew we were cutting cost, not corners.\n\n" +
      "If your AI bill is climbing faster than your revenue, GrahAI Systems can help you find the 70% — reach us at support@grahai.com.\n",
  },

  {
    slug: "nextjs-architecture-for-ai-products",
    title: "Next.js Architecture for AI Products",
    excerpt:
      "App Router patterns we use for AI products: route handlers and streaming, server actions, after() for background work, the edge-vs-node tradeoffs that bite (fonts, OG, Chromium for PDF), and file-convention OG images.",
    date: "May 14, 2026",
    author: "GrahAI Engineering",
    readTime: "11 min read",
    category: "LLM Engineering",
    content:
      "# Next.js Architecture for AI Products\n\n" +
      "Next.js App Router is a great fit for AI products, but only if you respect what serverless and the runtime split actually do. Here are the patterns we standardized across our products in India and the World, and the sharp edges we hit so you do not have to.\n\n" +
      "## Route handlers: the synchronous part stays small\n\n" +
      "Route handlers (`app/api/.../route.js`) are our API surface. The discipline is that a handler the user waits on does validation, authorization, and a small write, then returns. Anything expensive either streams or moves to background work. A handler that awaits a full LLM completion before responding is a handler that eats cold-start latency and risks timing out.\n\n" +
      "## Streaming: optimize time-to-first-token\n\n" +
      "For chat and any user-facing generation, stream. Users judge speed by when text starts appearing, not when it finishes. App Router makes this clean — return a streaming `Response` and pipe model tokens through:\n\n" +
      "```js\n" +
      "export async function POST(req) {\n" +
      "  const { question, context } = await req.json();\n" +
      "  const stream = model.stream({ context, question });\n" +
      "  return new Response(stream, {\n" +
      "    headers: { 'Content-Type': 'text/event-stream' },\n" +
      "  });\n" +
      "}\n" +
      "```\n\n" +
      "A six-second answer that starts rendering at 600ms feels fast; the same answer delivered as one blob at second six feels broken.\n\n" +
      "## after(): the only safe way to do background work\n\n" +
      "This is the pattern that, more than any other, made our AI products reliable. On serverless, work started but not awaited is dropped the instant you respond. `after()` keeps the function alive to finish tail work after the response is sent:\n\n" +
      "```js\n" +
      "import { after } from 'next/server';\n\n" +
      "export async function POST(req) {\n" +
      "  const job = await createPendingJob(req);\n" +
      "  after(async () => {\n" +
      "    await runGeneration(job);   // safe: function stays alive\n" +
      "    await persist(job);\n" +
      "  });\n" +
      "  return Response.json({ id: job.id, status: 'pending' });\n" +
      "}\n" +
      "```\n\n" +
      "We treat a bare un-awaited promise in a route handler as a bug in code review. If it is not awaited, streamed, or wrapped in `after()`, it does not merge.\n\n" +
      "## Server actions for mutations from the UI\n\n" +
      "For form-driven mutations we use server actions rather than hand-rolling fetches to route handlers. They keep the mutation co-located with the component, run on the server with secrets safely out of the bundle, and integrate with revalidation. We still push long AI work off the action's synchronous path with the same `after()`/pending-record discipline — a server action is still a serverless invocation with a clock.\n\n" +
      "## Edge vs node: the tradeoffs that actually bite\n\n" +
      "This is where teams lose days. Edge runtime is fast to start and globally distributed, but it is a constrained environment. Node runtime is heavier but full-featured. Our rules, learned from real breakage:\n\n" +
      "- Anything that needs custom fonts for rendering (OG images with brand typefaces) runs on **node**. Bundled fonts on edge tend to fail to load; we shipped an OG card that silently fell back to system fonts on edge until we moved it to node with bundled font files.\n" +
      "- Anything that needs Chromium — server-side PDF generation for reports — runs on **node**. Edge cannot run a headless browser.\n" +
      "- Lightweight, latency-sensitive, dependency-free handlers (a geo lookup, a simple redirect decision) are fine on **edge**.\n\n" +
      "The heuristic: if it needs the filesystem, a binary, or fonts, it is node. Default to node when unsure; reach for edge deliberately.\n\n" +
      "## File-convention OG images and metadata for SEO and AEO\n\n" +
      "AI products still live or die by discovery, including by answer engines. App Router's file conventions make this maintainable. We generate Open Graph images with a shared render function on the node runtime, keep OG copy to a line or two so it renders cleanly, and use the metadata API for titles, descriptions, and structured data per route. For programmatic pages we generate metadata dynamically from the same data that drives the page.\n\n" +
      "One dedup gotcha worth flagging: if you inject structured data both from a default layout and from a page, you can emit duplicate schema blocks. We added a skip-default flag so a page that supplies its own structured data suppresses the layout's. Validate your structured data; answer engines are unforgiving of duplicates.\n\n" +
      "## Build hygiene\n\n" +
      "A small but real footgun: running `next build` while the dev server is running can corrupt `.next` and produce a false 'Cannot find module for page' failure. Our fix is mechanical — stop the dev server and `rm -rf .next` before a production build. It is the kind of thing that wastes an afternoon if you do not know it.\n\n" +
      "## The summary\n\n" +
      "Keep the handler thin, stream what the user watches, push everything else into `after()` or a job, pick node when you touch fonts or Chromium, and let file conventions carry your SEO. Next.js gives you the primitives; the discipline is in respecting the serverless clock.\n\n" +
      "If you are architecting an AI product on Next.js and want to skip the expensive lessons, GrahAI Systems can help — reach us at support@grahai.com.\n",
  },

  {
    slug: "choosing-rag-vs-fine-tuning",
    title: "Choosing RAG vs Fine-Tuning",
    excerpt:
      "A practical decision framework for RAG versus fine-tuning, when each wins, when to combine them, and why we ground our AI Jyotish chat on computed chart data with RAG instead of fine-tuning a model on astrology.",
    date: "June 23, 2026",
    author: "GrahAI Engineering",
    readTime: "10 min read",
    category: "AI Architecture",
    content:
      "# Choosing RAG vs Fine-Tuning\n\n" +
      "Almost every team building a serious AI product asks the same question early: should we use retrieval-augmented generation, or should we fine-tune a model? The honest answer is that they solve different problems, and most teams reach for fine-tuning when RAG is what they actually need. Here is the framework we use, grounded in how we actually built our products for users in India and the World.\n\n" +
      "## What each technique is really for\n\n" +
      "RAG changes what the model **knows** at inference time. You retrieve relevant facts and put them in the context, so the model reasons over current, specific, proprietary information it was never trained on.\n\n" +
      "Fine-tuning changes how the model **behaves** by adjusting its weights on examples. It is good at teaching a consistent format, a house voice, a domain-specific phrasing, or compressing a long instruction into the weights so you can use a smaller, faster, cheaper model.\n\n" +
      "Knowledge versus behavior. Keep that distinction and most decisions make themselves.\n\n" +
      "## When RAG wins\n\n" +
      "- **The knowledge is fresh or changes.** Anything time-sensitive — prices, tax rules, today's market — must be retrieved, because fine-tuned weights are frozen at training time and go stale.\n" +
      "- **The knowledge is proprietary or per-user.** A specific customer's data, a computed result unique to this request. You cannot fine-tune a model per user; you retrieve their data per request.\n" +
      "- **You need citations and auditability.** RAG can point at the source it used. Fine-tuned knowledge is baked in and unattributable, which is a problem the moment someone asks 'why did it say that?'\n" +
      "- **You want to iterate fast and cheap.** Updating a retrieval corpus is editing data. Fine-tuning is a training run plus eval plus deploy.\n\n" +
      "## When fine-tuning earns its keep\n\n" +
      "- **You need a rigid, consistent format or voice** that prompting alone keeps drifting from.\n" +
      "- **Latency and cost matter and you can move quality down-model.** Fine-tuning a smaller model to match a bigger one's behavior on your narrow task can be a real win at scale.\n" +
      "- **The instruction is enormous and stable.** If your system prompt is a giant rulebook used on every call, baking it into weights can cut tokens.\n\n" +
      "The tell: if you find yourself writing an ever-longer system prompt trying to nail a format and still missing, that is a fine-tuning signal. If you find yourself wishing the model just knew the latest facts, that is a RAG signal.\n\n" +
      "## Why we ground GrahAI on RAG, not a fine-tuned astrologer\n\n" +
      "Astrology looks like a fine-tuning candidate — lots of text, a clear domain. We deliberately did not fine-tune. Here is the reasoning.\n\n" +
      "The hard part of a Jyotish answer is not the prose, it is the **chart**, and the chart is pure computation. Planetary longitudes with the Lahiri ayanamsa, house placements, dashas, yogas — these are deterministic math, not something you want a neural network approximating. We compute the chart with our own engine (validated 10/10 against established references, with timezone auto-derived from the birth coordinates so we never hardcode IST), and then we feed those exact computed facts to the model as retrieval context.\n\n" +
      "```js\n" +
      "const chart = computeChart(birthDetails);   // deterministic, correct\n" +
      "const facts = selectRelevant(chart, question);\n" +
      "const answer = await model.chat({ system: voiceAndRules, context: facts, question });\n" +
      "```\n\n" +
      "The model interprets and explains; it never invents the chart. This buys us three things a fine-tune could not: the answer is grounded in correct numbers, it is per-user (every chart is different — impossible to bake into weights), and it is auditable because we can show which chart facts drove the interpretation. A fine-tuned 'astrology model' would happily produce fluent, confident, and subtly wrong placements, which is the worst possible failure mode for a product people trust with personal decisions.\n\n" +
      "We do shape the **voice and format** with detailed prompting and a strong system instruction — which, if it ever became the bottleneck, is the part we would consider fine-tuning. Knowledge stays in RAG; behavior is where a fine-tune could help.\n\n" +
      "## Hybrids are normal\n\n" +
      "These are not mutually exclusive. A mature system often fine-tunes for voice and format while retrieving for knowledge. The framework is not 'pick one' but 'put knowledge in retrieval and behavior in weights, and only move things into weights when prompting plus retrieval genuinely cannot get there.'\n\n" +
      "## Evals decide, not opinions\n\n" +
      "Whichever path you take, gate it behind evals. For RAG, test retrieval quality and faithfulness — does the answer actually use the retrieved facts, and only those? For fine-tuning, test that behavior improved without knowledge or reasoning regressing. We run deterministic structural checks plus sampled content checks on every change; a 'better' prompt or model that regresses the eval does not ship. Decide with numbers, not with whichever technique sounds more impressive.\n\n" +
      "## The short version\n\n" +
      "Start with RAG. Compute what is computable and retrieve what is knowable, because that is cheaper, fresher, auditable, and per-user. Reach for fine-tuning only when prompting plus retrieval cannot deliver the format, voice, latency, or cost you need — and even then, keep knowledge in retrieval.\n\n" +
      "If you are deciding between RAG and fine-tuning for a real product, GrahAI Systems can help you frame it around your domain — reach us at support@grahai.com.\n",
  },
];
