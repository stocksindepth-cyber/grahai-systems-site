// Service landing pages (rendered by components/seo/ServiceLanding.jsx).
// AI automation and the "AI app builder" alternative, from the Oct 2026 Keyword Planner study.

export const aiServicePages = [
  {
    slug: "ai-automation-services",
    category: "automation",
    eyebrow: "AI automation services",
    metaTitle: "AI Automation Services — Fixed-Price Workflows from $149",
    metaDescription:
      "AI automation services for lead routing, email and document processing, CRM syncs and reports. Built in n8n, Zapier, Make or code, at a fixed price.",
    keywords: [
      "ai automation services",
      "ai automation agency",
      "business process automation",
      "workflow automation services",
      "automate my business",
      "ai automation",
      "ai workflow automation",
    ],
    h1: "AI automation services",
    h1Accent: "for the work your team repeats",
    intro:
      "Name the job that eats your team's week: leads to route, inboxes to sort, invoices to key in, reports to stitch together. An AI agent quotes a fixed price in about a minute, builds the workflow inside your own tools, and an engineer checks it before you switch it on.",
    tiers: [
      {
        name: "Single workflow",
        billing: "one-time",
        priceUsd: 149,
        timeline: "1–2 days",
        forWho: "One trigger and a handful of steps, like a website form that should land in your CRM.",
        includes: [
          "Written scope and a fixed price before any work starts",
          "Built in your own Zapier, Make or n8n account",
          "Field mapping and duplicate checks tested on real samples",
          "An email or Slack alert if a run fails",
          "Two revision rounds after handover",
        ],
      },
      {
        name: "AI-assisted workflow",
        billing: "one-time",
        priceUsd: 699,
        timeline: "4–6 days",
        forWho: "Processes where one step needs judgment: reading an email, sorting a document, drafting a reply.",
        includes: [
          "An AI step whose output is checked against a schema before the workflow continues",
          "Human approval before anything is sent, paid or deleted",
          "Retries, error routing and a searchable log of every run",
          "A test set built from your own examples, with pass and fail results",
          "Handover notes estimating the monthly running cost",
        ],
      },
      {
        name: "Automation retainer",
        billing: "monthly",
        priceUsd: 399,
        timeline: "Ongoing",
        forWho: "Teams with a backlog of workflows to build, adjust and keep healthy as their apps change.",
        includes: [
          "As many automation requests as you like, handled one after another",
          "Small changes usually back within 1–3 business days",
          "Repairs when a connected app renames a field or changes its API",
          "A GrahAI engineer checks each change before it goes live",
          "Month to month, cancel whenever the backlog runs dry",
        ],
      },
    ],
    tasks: [
      { title: "Route website form leads to the right salesperson in your CRM with a Slack alert", price: 149, days: 1 },
      { title: "Copy new Shopify orders into Google Sheets and your accounting tool every hour", price: 199, days: 2 },
      { title: "Sort a shared support inbox with AI tags and drafted replies waiting for approval", price: 399, days: 3 },
      { title: "Compile a Monday report from CRM, ad and payment data and email it to managers", price: 499, days: 4 },
      { title: "Read emailed invoices, extract the fields and post them to Xero or QuickBooks", price: 699, days: 5 },
      { title: "Two-way sync between HubSpot and your own database with conflict rules and logs", price: 1299, days: 8 },
    ],
    overviewTitle: "What AI automation services cover, and where AI actually helps",
    overview: [
      "Business process automation is the plain work of moving information between systems so nobody has to copy and paste it. A lead fills in a form and should reach the right salesperson within a minute. A supplier emails a PDF invoice that someone retypes into accounting software. Every Monday a manager pulls numbers from four dashboards into one slide. AI automation adds a single capability to that plumbing: steps that can read unstructured text, such as an email, a scanned document or a free-text answer, and turn it into a decision or a clean record the rest of the workflow can use.",
      "Most workflows don't need AI at every step, and paying for it where a simple rule would do is wasteful. The agent designs each workflow so fixed rules handle routing, lookups and syncing, while the AI step handles only the part that needs judgment, with its output validated before anything moves on. It builds where you already work: Zapier for teams who want the simplest upkeep, Make for visual branching at lower cost, n8n when you want to self-host or run code, or a small custom service once volume or logic outgrows those tools.",
      "Automations tend to fail quietly, which is worse than failing loudly. A CRM renames a field, an API token expires, and leads stop arriving for a week before anyone notices. Every workflow we deliver has retries on steps that call outside services, an alert naming exactly which step failed, and a log of each run with its inputs and result. Anything hard to undo, like emailing a customer, issuing a refund or deleting records, waits for a person to approve it unless you decide otherwise in writing.",
      "An AI automation agency typically opens with discovery workshops, maps processes across departments and manages the change with your staff. That is worth paying for when nobody can yet describe how the work flows, or when a rollout touches dozens of people and needs someone on calls every week. We don't run calls or on-site workshops. We fit when you can write the workflow down: an AI agent scopes and prices it, agents build it in your accounts, and a GrahAI engineer reviews the result. Larger cross-team builds go through our custom project route instead.",
    ],
    compare: {
      columns: ["GrahAI agents", "AI automation agency", "Freelancer", "DIY with Zapier or Make"],
      rows: [
        { label: "Pricing", values: ["Fixed per workflow from $149, or $399 a month", "Often several thousand dollars, plus monthly support", "Hourly or a project bid", "Tool subscription plus your time"] },
        { label: "Discovery", values: ["You describe it; the agent asks follow-ups in writing", "Workshops and stakeholder interviews", "A call or two", "You map it yourself"] },
        { label: "Time to first workflow", values: ["Most in 1–8 days", "Weeks, after discovery", "Depends on availability", "Depends on your skills"] },
        { label: "Failures and logging", values: ["Retries, failure alerts and run logs included", "Usually included", "Varies by person", "Often skipped"] },
        { label: "Human approval steps", values: ["Built in for risky actions", "Usually offered", "If you ask for them", "You set them up"] },
        { label: "Who owns it", values: ["You: your accounts, workflows and code", "Sometimes runs in the agency's accounts", "Usually you", "You"] },
        { label: "Good fit for", values: ["Defined workflows you can describe in writing", "Company-wide change with many stakeholders", "Long-term work with one person", "Simple two- or three-step automations"] },
      ],
    },
    answers: [
      {
        q: "What does an AI automation agency do?",
        a: "An AI automation agency studies how work moves through your business, then builds workflows that take repetitive steps off your team, usually with tools like Zapier, Make or n8n plus AI steps that read emails and documents. Most sell a discovery phase, a build and a monthly support fee. If you already know which workflow you want automated, you can skip discovery: post it here, get a fixed price from an AI agent in about a minute, and receive an engineer-reviewed build within days.",
      },
      {
        q: "How much do AI automation services cost?",
        a: "For one defined workflow, expect a fixed price rather than an hourly estimate. Here, a simple trigger-and-action workflow such as form to CRM starts at $149, AI-assisted workflows that read emails or documents usually cost $399 to $999, and multi-system syncs with conflict rules start around $1,299. Continuous automation work fits the Retainer at $399 a month. Agencies often quote several thousand dollars for a first project plus monthly support. Tool subscriptions and AI usage are billed to your own accounts.",
      },
      {
        q: "How can I automate my business without hiring a developer?",
        a: "Start with one process that is repetitive, rule-based and happens at least weekly, such as entering leads, chasing unpaid invoices or compiling a report. Write down the trigger, the steps someone takes today and what a correct result looks like. If it is two or three steps between popular apps, a tool like Zapier lets you build it yourself in an afternoon. If it involves messy inputs, several systems or approvals, post that description as a job and an AI agent will quote building it for you.",
      },
    ],
    faqs: [
      {
        q: "Should I hire an AI automation agency or use GrahAI agents?",
        a: "Choose an agency if you need someone to interview staff, redesign processes across several departments, or join regular calls with your managers. Choose GrahAI agents when you can describe the workflow in writing and want it priced and built quickly. The two also combine well: an internal owner maps the process once, then posts each workflow here as its own fixed-price job.",
      },
      {
        q: "Do you build in n8n, Zapier or Make, or write custom code?",
        a: "Whichever suits the workflow and the people who will maintain it. Zapier is the easiest for non-technical staff to edit, Make handles branching and bulk data for less money, and n8n can be self-hosted with code steps. Custom Python or Node services make sense for high volume or unusual logic. The proposal names the tool and explains the choice.",
      },
      {
        q: "What's the difference between workflow automation services and AI automation?",
        a: "Classic workflow automation only moves data that is already structured: a form field goes into a CRM field. AI steps let a workflow cope with things people write freely, like an email asking to change a delivery date or an invoice in an unfamiliar layout, by turning them into structured fields. We use AI only on those steps, which keeps runs cheaper and easier to debug.",
      },
      {
        q: "How do human approval steps work?",
        a: "When a workflow reaches an action you've marked as sensitive, it pauses and sends a summary to Slack, email or a simple approval page showing what it intends to do and why. One click approves or rejects it, and the decision is logged. Approvals are common at first; once a step has proven itself on real data, you can choose to remove them.",
      },
      {
        q: "What happens when an automation breaks?",
        a: "You hear about it straight away. Steps that call outside services retry automatically, and if a run still fails, an alert names the workflow, the failed step and the error, with a link to the run. Inputs are kept so the run can be replayed after the fix. Faults in our own work are covered by your revision rounds, and on the Retainer, repairs after an app changes are covered too.",
      },
      {
        q: "Who pays for the software and AI usage?",
        a: "You do, directly. The automation runs in your own Zapier, Make, n8n or cloud account, and AI usage is billed to an API account in your name, so there is no markup and nothing stops working if you part ways with us. The handover notes estimate monthly task and AI costs at your current volume, so the running cost is clear before launch.",
      },
    ],
    related: ["/hire/n8n-expert", "/hire/zapier-expert", "/hire/make-automation-expert", "/ai-agent-development", "/hire/api-integration-developer", "/hire/retainer"],
    plan: "retainer",
  },
  {
    slug: "ai-app-builder",
    category: "other",
    eyebrow: "AI app builder alternative",
    metaTitle: "AI App Builder Alternative — Agents Build It, You Own the Code",
    metaDescription:
      "Tried an AI app builder and got stuck? Describe your app, get a fixed price from an AI agent in a minute, then receive an engineer-reviewed app you own.",
    keywords: [
      "ai app builder",
      "ai app builder alternative",
      "build an app with ai",
      "ai app generator",
      "finish my ai built app",
      "hire someone to build an app with ai",
    ],
    h1: "The AI app builder alternative",
    h1Accent: "where agents build it and you own it",
    intro:
      "AI app builders are great for a quick prototype. If you want a working, maintained app without prompting it yourself, describe it here: an AI agent quotes a fixed price in about a minute, agents build it, an engineer reviews it, and the code is yours.",
    tiers: [
      {
        name: "Rescue a builder app",
        billing: "one-time",
        priceUsd: 299,
        timeline: "1–3 days",
        forWho: "You started in an AI builder and hit a wall: broken login, vanishing data or a deploy that keeps failing.",
        includes: [
          "A written list of what will be fixed, priced before you pay",
          "Fixes for each problem named in the proposal",
          "The code moved into a repository registered to you",
          "Notes on what was wrong and what to watch next",
          "Two revision rounds",
        ],
      },
      {
        name: "App built for you",
        billing: "one-time",
        priceUsd: 1999,
        timeline: "8–15 days",
        forWho: "You have an idea or a prototype and want a real app with accounts, a database and payments.",
        includes: [
          "Sign-in, a database and the core screens your proposal lists",
          "Stripe or Razorpay payments if the app takes money",
          "Deployed to hosting accounts in your name",
          "Full source code in your own Git repository",
          "Engineer review before you see it, then two revision rounds",
        ],
      },
      {
        name: "Retainer",
        billing: "monthly",
        priceUsd: 399,
        timeline: "Ongoing",
        forWho: "Your app is live, whoever built it, and you want changes made without learning to prompt.",
        includes: [
          "Unlimited change requests, taken in order one at a time",
          "Typical small requests finished in 1–3 business days",
          "Works on apps exported from builders or written by other developers",
          "Every change checked by a GrahAI engineer",
          "No contract: stop at the end of any month",
        ],
      },
    ],
    tasks: [
      { title: "Fix a builder-made app whose login or saved data stopped working", price: 199, days: 2 },
      { title: "Export a prototype from an AI builder into your own GitHub and hosting", price: 299, days: 3 },
      { title: "Add Stripe or Razorpay checkout with webhooks to an existing app", price: 399, days: 3 },
      { title: "Swap a prototype's sample data for a real database with user accounts", price: 799, days: 6 },
      { title: "Internal tool for customer records with roles, search, notes and CSV export", price: 1499, days: 10 },
      { title: "Client portal with sign-in, file uploads, payments and an admin panel", price: 3499, days: 22 },
    ],
    overviewTitle: "When an AI app builder is enough, and when it isn't",
    overview: [
      "Most people searching for an AI app builder want to type an idea and get an app back. Prompt-based tools like Lovable, Bolt and Replit do that well for a first version: you describe the screens, the tool generates them, and within an afternoon you have something to click through. If you're testing an idea, learning how apps fit together, or working with no budget, a DIY builder is the right choice, and you should try one before paying anyone.",
      "The trouble usually starts after the demo. Builders are quick at generating screens and tend to be weaker at the parts that make an app dependable: permissions so one user can't see another's data, payments that survive a failed webhook, a database structure that holds up as records grow, and fixes that don't quietly break three earlier features. Many people end up spending evenings re-prompting the same bug. If that sounds familiar, the problem usually isn't your prompts; someone needs to read the code and own the outcome.",
      "Here you still start with a description, but you don't drive the tool. An AI agent reads your brief, asks the questions a developer would, and replies in about a minute with a written proposal: screens, rules, delivery date and one fixed price. AI agents build it, and a GrahAI engineer reviews the work before you see it, checking security, data handling and whether the app does what the proposal says. Two revision rounds are included, with a full refund if we can't deliver the agreed scope.",
      "Everything lands in accounts you own: a Git repository, hosting and a database in your name, and payment accounts you control. That matters as the app grows, because any developer can pick it up later. If you already have a builder prototype, export the code or describe what it does, and the agent will quote either finishing it or rebuilding it cleanly, whichever costs less. Once it's live, the Care plan (for apps our agents built) or the Retainer keeps it maintained.",
    ],
    compare: {
      columns: ["GrahAI agents", "DIY AI app builder", "Freelancer", "Agency"],
      rows: [
        { label: "Who does the work", values: ["AI agents build it, an engineer reviews it", "You, by prompting", "One developer", "A team with a project manager"] },
        { label: "Upfront cost", values: ["One fixed price before you pay", "Low monthly plan, often credit-based", "Hourly rate or a project bid", "Often several thousand dollars"] },
        { label: "Your time", values: ["Write a brief, answer questions, test", "Hours of prompting and debugging", "Calls and regular check-ins", "Workshops and status meetings"] },
        { label: "Code ownership", values: ["Yours, in your repository", "Depends on the platform's export options", "Usually yours; check the contract", "Usually yours; check the contract"] },
        { label: "When something breaks", values: ["Revision rounds, then a monthly plan", "You prompt it again", "Depends on their availability", "Covered by a support contract"] },
        { label: "Quality check", values: ["A GrahAI engineer checks each delivery first", "Only your own testing", "Self-checked", "QA team, varies by agency"] },
        { label: "Good fit for", values: ["A working app without building it yourself", "Prototypes, learning, zero budget", "Steady work with one person", "Large or complex products"] },
      ],
    },
    answers: [
      {
        q: "Which AI app builder should I use?",
        a: "It depends on what you're making. For a clickable prototype or a simple personal tool, prompt-based builders such as Lovable, Bolt or Replit are fast and inexpensive, and worth trying first. For a visual no-code approach with hosting included, Bubble is a long-standing option. If your app needs secure user accounts, payments and real customer data, and you'd rather not maintain it yourself, consider having it built: post the idea here and an AI agent will quote a fixed price in about a minute.",
      },
      {
        q: "Can AI build an app for me without coding?",
        a: "Yes, within limits. AI builders can produce a working front end and a simple backend from a description, and for many prototypes that is enough. Where they struggle is the unglamorous part: access rules, payment edge cases, data that must never be lost, and changes that leave earlier features intact. Here, AI agents write the code and a GrahAI engineer reviews every delivery, so you keep the no-code experience of describing what you want, with someone accountable for the result.",
      },
      {
        q: "Can someone finish an app I started with an AI app builder?",
        a: "Usually, yes. If the builder lets you export code or connect a GitHub repository, the agent can work from that: fixing what's broken, adding the missing pieces and moving it to hosting you control. If the code is too tangled to extend safely, the proposal says so and quotes a clean rebuild that uses your prototype as the specification, which is often cheaper than patching. Either way, you see the fixed price before paying anything.",
      },
    ],
    faqs: [
      {
        q: "When is a DIY AI app builder the better choice?",
        a: "When you're validating an idea and need something clickable this week, when you want to learn how apps are put together, or when your budget is zero. Builders are also fine for personal tools only you will use. We'd rather you try one first; if you outgrow it, your prototype becomes a clear brief for us.",
      },
      {
        q: "How much does it cost to have an app built instead?",
        a: "Fixing or finishing a builder prototype usually costs $199 to $799. A focused web app with sign-in, a database and payments typically runs $1,499 to $2,499, and portals or booking systems with admin panels land between $2,999 and $4,999. Anything bigger becomes a custom project with a scoping call. Every price is fixed in the proposal before you pay.",
      },
      {
        q: "Do I own the code?",
        a: "Yes, all of it. The code goes into a Git repository in your name, and the app runs on hosting and database accounts you control. There is no platform lock-in and no fee to us for keeping it online. Any access we use during the build is through collaborator accounts you can remove once the job closes.",
      },
      {
        q: "Can you build a mobile app, not just a web app?",
        a: "Yes. iOS and Android apps are built with Flutter or React Native and uploaded through your own store developer accounts. Mobile costs more and takes longer than a web app because of store setup, and approval is Apple's and Google's decision. For many ideas, a mobile-friendly web app is the quicker and cheaper first step.",
      },
      {
        q: "What do I need to give you to get started?",
        a: "A plain description: who uses the app, what they do in it step by step, what they should see, and anything it must connect to. Screenshots of a builder prototype or a competitor's app help a lot. You don't need technical specifications or an account to post. The agent asks follow-up questions and turns your answers into a written scope.",
      },
      {
        q: "Who maintains the app after launch?",
        a: "You choose. Because you own the code, any developer can take it over. If GrahAI agents built it, the Care plan at $79 a month covers fixes and up to two small change requests. For an app built anywhere else, including one exported from an AI builder, the Retainer at $399 a month handles unlimited requests one at a time. Both cancel any time.",
      },
    ],
    related: ["/mvp-development", "/web-app-development", "/hire/mvp-developer", "/hire/full-stack-developer", "/app-development-cost", "/hire/retainer"],
    plan: "retainer",
  },
];
