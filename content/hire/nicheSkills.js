// "Hire a ___" landing pages for narrow, tool-specific jobs: payment gateways, no-code
// databases, CRMs, messaging APIs, maps, LLM APIs and backend platforms.
// Schema is shared by every file in content/hire/ and rendered by app/hire/[slug].

export const nicheSkills = [
  {
    slug: "paypal-integration-developer",
    skill: "PayPal integration developer",
    article: "a",
    category: "automation",
    metaTitle: "Hire a PayPal Integration Developer — From $99 | GrahAI Systems",
    metaDescription:
      "Hire a PayPal integration developer for Smart Buttons, Orders API capture, subscriptions and verified webhooks. Sandbox-tested, fixed price in about a minute.",
    keywords: [
      "hire paypal developer",
      "paypal integration developer",
      "paypal checkout integration",
      "paypal api integration",
      "paypal subscription integration",
      "paypal webhook developer",
      "add paypal to website",
    ],
    intro:
      "Selling to buyers abroad and need PayPal working properly, not just a button that sometimes forgets the order? Describe your checkout. An AI agent replies with a fixed price in about a minute, builds everything in the PayPal sandbox, and an engineer checks the money paths.",
    overviewTitle: "PayPal that records every payment it takes",
    overview: [
      "Many buyers outside India and the US trust PayPal more than typing a card number into an unfamiliar site, so adding it often lifts international sales. The modern route is PayPal's JavaScript SDK, which renders the yellow PayPal button and, where the buyer's country and your account allow, Pay Later, Venmo and card options beside it. Older integrations built on IPN or the classic NVP calls still run on many sites, and moving them to the current REST APIs is a common first job.",
      "The detail that breaks most PayPal setups is where the order lives. A sound build creates the order on your server through the Orders API v2, lets the buyer approve it in the popup, then captures it server-side and stores the capture ID. A webhook listener, with each event checked through PayPal's signature verification endpoint, handles PAYMENT.CAPTURE.COMPLETED, refunds and disputes, so an order still gets fulfilled when a buyer closes the popup early or the browser drops the final request.",
      "Subscriptions use PayPal's own product and plan objects, with events such as BILLING.SUBSCRIPTION.ACTIVATED and BILLING.SUBSCRIPTION.CANCELLED keeping access in your database in step. Everything is tested with sandbox buyer and seller accounts first, including declined funding sources and abandoned approvals; you paste the live client ID and secret into your environment when you're ready. Features that PayPal has to enable for your account, such as Payouts or advanced card fields, depend on its approval, and the proposal flags them up front.",
    ],
    tasks: [
      { title: "Add PayPal Smart Buttons to an existing checkout page", price: 99, days: 1 },
      { title: "Repair orders that get approved in the popup but never captured", price: 149, days: 2 },
      { title: "Server-side Orders API flow with capture and webhook fulfilment", price: 299, days: 3 },
      { title: "Offer PayPal beside your card gateway with one shared order record", price: 499, days: 4 },
      { title: "Recurring billing with PayPal plans, a trial and cancellation sync", price: 599, days: 5 },
      { title: "Seller payouts for a marketplace through the Payouts API", price: 1299, days: 8 },
    ],
    deliverables: [
      "PayPal flow built and exercised end to end with sandbox accounts",
      "Server-side order creation and capture, with capture IDs saved to your orders",
      "Webhook listener that verifies each event before changing anything",
      "Go-live notes: live REST app credentials, webhook URL and currency settings",
      "Two revision rounds after you test the sandbox build",
    ],
    sampleTitle: "Add PayPal for overseas customers on our course site",
    sampleBrief:
      "We sell three online courses priced in USD from a Next.js site that currently takes cards only. About half our visitors are from the US, UK and Gulf countries and keep asking for PayPal. I want a PayPal button on the checkout page, the course unlocked automatically after payment, refunds from the PayPal dashboard reflected in our database, and an email receipt. We already have a PayPal Business account.",
    limits:
      "An agent can't resolve a PayPal account limitation, a held balance or a dispute decision; those are between you and PayPal's support team. It also isn't the right hire for deciding where you must register for sales tax. We build the integration once your business account is in good standing.",
    faqs: [
      {
        q: "What does a PayPal integration cost?",
        a: "Dropping Smart Buttons into a working checkout starts at $99. A proper server-side Orders API build with webhook fulfilment is about $299, running PayPal alongside another gateway is around $499, and subscriptions land near $599. Marketplace payouts are roughly $1,299 because they involve seller records and PayPal's approval. PayPal's own transaction fees are separate.",
      },
      {
        q: "Why do some PayPal payments never show up as orders on my site?",
        a: "Usually because the site waits for the browser to report success. If the buyer closes the window, loses signal or the capture call fails after approval, your database never hears about it. Capturing on the server and confirming through verified webhooks closes that gap, and the agent adds a check that flags any approved order left uncaptured.",
      },
      {
        q: "Do you need my PayPal login?",
        a: "No. You create a REST app in the PayPal Developer Dashboard, which gives a client ID and secret for sandbox and, separately, for live. Sandbox credentials are enough for the whole build. You add the live pair to your hosting environment yourself, so nobody at GrahAI ever holds your account password.",
      },
      {
        q: "Can PayPal handle subscriptions and free trials?",
        a: "Yes. PayPal's Subscriptions API lets you define a product, plans with billing cycles, and an optional trial period. Buyers approve once and PayPal bills them on schedule. The agent maps each subscription status to access in your app and handles cancellations, suspensions and failed payments so nobody keeps premium features after they stop paying.",
      },
      {
        q: "Is moving off the old IPN integration worth it?",
        a: "In most cases, yes. IPN still works on many accounts, but the REST APIs and webhooks are where PayPal puts new features and documentation. Migrating also tends to fix the duplicate and missing notifications common in older code. The proposal lists which IPN behaviours your site depends on so nothing quietly stops working.",
      },
    ],
    related: ["stripe-integration-developer", "razorpay-integration-developer", "woocommerce-developer", "api-integration-developer"],
  },
  {
    slug: "razorpay-integration-developer",
    skill: "Razorpay integration developer",
    article: "a",
    category: "automation",
    metaTitle: "Hire a Razorpay Integration Developer — From $99 | GrahAI Systems",
    metaDescription:
      "Hire a Razorpay developer for Standard Checkout, Orders API, signature checks, webhooks, UPI Autopay subscriptions and Route. Fixed price in about a minute.",
    keywords: [
      "hire razorpay developer",
      "razorpay integration developer",
      "razorpay payment gateway integration",
      "razorpay integration in website",
      "razorpay subscription integration",
      "razorpay webhook",
      "razorpay api integration",
    ],
    intro:
      "Taking payments in India through Razorpay and want it built so every rupee lands against the right order? Explain what you sell and where. An AI agent sends a fixed quote in about a minute, works with test keys throughout, and an engineer reviews the payment logic.",
    overviewTitle: "A Razorpay build that reconciles cleanly",
    overview: [
      "Razorpay is the default gateway for a large share of Indian websites and apps because one checkout covers UPI, cards, netbanking and wallets. Its products range from no-code Payment Links and Payment Pages, which suit a handful of fixed-price items, to Standard Checkout inside your own site, Subscriptions for recurring charges, and Route for splitting a payment between your account and linked vendor accounts.",
      "For a checkout on your own site, the order must be created on your server through the Orders API, with the amount in paise, before the Razorpay popup opens. After payment, your backend recomputes the HMAC-SHA256 signature over the order ID and payment ID using your key secret and compares it with the one returned; skipping that check lets a tampered response mark an order paid. A webhook endpoint, validated with its own separate secret, listens for events such as payment.captured and order.paid so orders still complete when a customer's browser never comes back.",
      "Recurring billing runs through Razorpay plans and subscriptions, with UPI Autopay or card mandates collected at the first payment. Plans can't be edited once created, so the agent sets up a naming scheme that makes future price changes painless. All development uses test mode keys; account activation, KYC and enabling international cards are reviewed by Razorpay itself, and the handover lists exactly which dashboard settings to confirm before you switch to live keys.",
    ],
    tasks: [
      { title: "Payment Page or Payment Links with automatic receipts for fixed items", price: 99, days: 1 },
      { title: "Fix failing signature verification or orders fulfilled twice", price: 149, days: 2 },
      { title: "Standard Checkout on your website with Orders API and webhook fulfilment", price: 299, days: 3 },
      { title: "Razorpay checkout inside a Flutter or React Native app", price: 499, days: 4 },
      { title: "Monthly memberships with UPI Autopay and card mandates", price: 699, days: 5 },
      { title: "Split payments to vendors or partners with Razorpay Route", price: 1299, days: 8 },
    ],
    deliverables: [
      "Razorpay integration completed and tested in test mode",
      "Server-side order creation plus payment signature verification",
      "Webhook handler with its own secret, safe against repeated events",
      "Order and payment IDs stored together so settlements reconcile",
      "Live-switch checklist and two revision rounds",
    ],
    sampleTitle: "Razorpay checkout for our coaching institute's course portal",
    sampleBrief:
      "We run a PHP site where students register for batch courses priced from ₹4,000 to ₹18,000. Right now they pay by bank transfer and send a screenshot. I want Razorpay checkout on the registration page with UPI and cards, the seat confirmed automatically after payment, a GST invoice emailed, and an option to pay in two instalments. Our Razorpay account is already activated.",
    limits:
      "Account activation, KYC questions, settlement holds and decisions about which business categories Razorpay accepts are handled by Razorpay, not by a developer. An agent also isn't the right hire for GST registration or deciding your invoice format for tax purposes; check that with your CA, and we'll implement what they specify.",
    faqs: [
      {
        q: "How much does Razorpay integration cost here?",
        a: "Payment Pages or Links with receipts start at $99. A website checkout with server-side orders, signature checks and webhooks is about $299, an in-app checkout around $499, and UPI Autopay subscriptions near $699. Route-based vendor splits are roughly $1,299. Razorpay's transaction charges are billed to you by Razorpay and aren't part of the quote.",
      },
      {
        q: "Why can't the payment amount just be set in the browser?",
        a: "Anything in the browser can be edited by the person paying. Creating the order on your server fixes the amount before checkout opens, and the signature check afterwards proves the payment belongs to that order. Together they stop someone from paying ₹1 for a ₹10,000 item, a mistake that turns up surprisingly often in quick integrations.",
      },
      {
        q: "Can customers pay in USD or with foreign cards?",
        a: "Razorpay supports international cards and several currencies, but international payments must be enabled on your account and Razorpay reviews that request. Once it's approved, the agent passes the right currency on each order and shows prices accordingly. For buyers who prefer PayPal, a separate PayPal button can sit beside Razorpay at checkout.",
      },
      {
        q: "How do UPI Autopay subscriptions work?",
        a: "The customer approves a mandate in their UPI app during the first payment, and Razorpay charges later cycles automatically according to your plan. Your app listens for subscription events, such as a successful charge, a halted subscription or a cancellation, to extend or end access. Mandate limits and approval steps are set by the payment network, so the proposal notes any that affect your price points.",
      },
      {
        q: "Will you need access to my Razorpay dashboard?",
        a: "Test mode API keys cover nearly all of the work, and you can generate them yourself. If dashboard settings such as webhooks need configuring, you can add us as a team member with limited permissions and remove the access after delivery. Live keys go into your server environment, entered by you.",
      },
    ],
    related: ["stripe-integration-developer", "paypal-integration-developer", "php-developer", "flutter-developer"],
  },
  {
    slug: "airtable-developer",
    skill: "Airtable developer",
    article: "an",
    category: "automation",
    metaTitle: "Hire an Airtable Developer — From $99 | GrahAI Systems",
    metaDescription:
      "Hire an Airtable developer to design linked bases, fix formulas, build Interfaces and automations, or sync Airtable with your app via the Web API. Fixed price.",
    keywords: [
      "hire airtable developer",
      "airtable expert",
      "airtable consultant",
      "airtable automation",
      "airtable api integration",
      "airtable interface designer",
      "airtable database design",
    ],
    intro:
      "Is your Airtable base slowly turning into a tangle of duplicate tables and formulas nobody dares touch? Tell us how your team actually uses it. An AI agent quotes a fixed price in about a minute, rebuilds or extends the base, and an engineer reviews the result before handover.",
    overviewTitle: "Airtable bases built like real databases",
    overview: [
      "Airtable looks like a spreadsheet, which is why so many bases start as one big table and get harder to use every month. The fix is structure: separate tables for clients, projects and invoices, joined with linked records, then lookups and rollups to pull totals across them instead of copying values by hand. The agent maps your current fields, proposes a schema in plain language, and migrates existing records without losing history or attachments.",
      "On top of a clean base, Interfaces give each role its own screen, such as a sales view of open deals or a form for field staff, without exposing the raw grid. Native Automations handle triggers like a record entering a view or a status changing, and send emails, Slack messages or webhook calls. When the built-in actions run out, a Run a script step written in JavaScript covers custom logic such as deduplication or calling another service.",
      "For connecting Airtable to a website, app or reporting tool, the build uses the Web API with a personal access token scoped to the bases it needs; Airtable retired the old account-wide API keys. The API is limited to five requests per second per base, so syncs batch their writes and back off politely. Plans also cap records per base and automation runs, and the proposal tells you if your volumes are heading toward a limit that would make a proper database the cheaper route.",
    ],
    tasks: [
      { title: "Repair broken formulas, lookups and rollups across a base", price: 99, days: 1 },
      { title: "Automations that notify by email or Slack when a status changes", price: 149, days: 2 },
      { title: "Move a sprawling spreadsheet into linked Airtable tables", price: 299, days: 3 },
      { title: "Interface with role-based pages, filtered lists and a request form", price: 349, days: 3 },
      { title: "Two-way sync between Airtable and your web app through the Web API", price: 799, days: 5 },
      { title: "Client portal with logins that shows each client only their records", price: 1499, days: 10 },
    ],
    deliverables: [
      "Restructured or extended base with linked tables and documented fields",
      "Interfaces, automations and scripts configured in your workspace",
      "API sync code with a scoped token and rate-limit handling, where included",
      "A field dictionary explaining what each table and formula does",
      "Two revision rounds after your team tries it",
    ],
    sampleTitle: "Restructure our agency's project tracker in Airtable",
    sampleBrief:
      "We're a 12-person design agency and run everything from one Airtable table with 90 columns: clients, projects, invoices and freelancer hours all mixed together. I'd like it split into proper linked tables, a dashboard Interface for the two partners showing revenue per client, a form freelancers use to log hours, and an automation that emails the client contact when a project moves to 'Ready for review'.",
    limits:
      "Airtable isn't the right home for data with hundreds of thousands of rows, heavy transactional writes or strict compliance requirements, and an agent shouldn't force it there. In those cases the proposal will suggest a Postgres-backed app instead and quote that separately.",
    faqs: [
      {
        q: "What does it cost to hire an Airtable developer?",
        a: "Formula and lookup fixes start at $99, and a set of notification automations is around $149. Migrating a spreadsheet into a properly linked base costs about $299, a role-based Interface roughly $349, and an API sync with your app near $799. A client portal with per-client logins usually runs about $1,499. Your Airtable subscription is billed separately.",
      },
      {
        q: "Do I need to give you my Airtable password?",
        a: "No. Invite us to the workspace or to specific bases as a collaborator with the permission level you choose, and remove us when the job is finished. For API work you create a personal access token or service account token with only the scopes and bases required, and store it in your own hosting settings.",
      },
      {
        q: "When should a team move off Airtable?",
        a: "Signs include hitting record limits, automations queueing for minutes, many people editing the same records at once, or needing audit trails Airtable can't give. Until then, it's usually cheaper to keep improving the base. If you're close to that line, the proposal compares tidying the base with moving to a custom database, with prices for both.",
      },
      {
        q: "Can Airtable connect to Stripe, Google Sheets or our CRM?",
        a: "Yes, either through native integrations and sync, through a tool like Zapier, Make or n8n, or with direct API code when volume or reliability matters. The agent picks the lightest option that holds up, and explains the running cost of each, since per-task automation pricing can exceed a small server at scale.",
      },
      {
        q: "Will the base still make sense after you leave?",
        a: "That's the point of the field dictionary. Every table, formula and automation gets a short description of what it does and what depends on it, written for the people who'll maintain it. Field descriptions are also added inside Airtable itself, so anyone hovering over a column can see why it exists.",
      },
    ],
    related: ["notion-automation-expert", "zapier-expert", "make-automation-expert", "google-sheets-expert"],
  },
  {
    slug: "notion-automation-expert",
    skill: "Notion automation expert",
    article: "a",
    category: "automation",
    metaTitle: "Hire a Notion Automation Expert — From $99 | GrahAI Systems",
    metaDescription:
      "Hire a Notion automation expert for database design, formulas, buttons, and Notion API syncs with forms, calendars, Slack and your app. Fixed price in a minute.",
    keywords: [
      "notion automation expert",
      "hire notion expert",
      "notion consultant",
      "notion api integration",
      "notion developer",
      "notion database automation",
      "notion crm setup",
    ],
    intro:
      "Your team lives in Notion, but half the updates still get copied in by hand? Describe the workspace and the chores you'd like gone. An AI agent prices the job in about a minute, wires up the databases and API connections, and an engineer reviews it before you take over.",
    overviewTitle: "Notion that updates itself",
    overview: [
      "Notion is easiest to automate once its databases are designed well. That means one database per real thing, such as clients, tasks or content pieces, connected with relations, summarised with rollups, and kept tidy with consistent select options. Formulas handle due-date warnings or progress bars, and filtered linked views give each team a focused page without duplicating data. Much of the clutter people try to automate away disappears at this step alone.",
      "Inside Notion, database automations and buttons cover simple reactions: set a property when a status changes, add a page from a template, or post to Slack. Anything crossing into other tools uses the Notion API through an integration you create in your workspace. A detail that trips people up: an integration only sees pages and databases that someone has explicitly connected to it, so the handover lists each page that needs that connection.",
      "Typical API jobs push website form entries into a database, sync tasks with Google Calendar, send a weekly digest of overdue items, or publish a content database to your site. The API allows an average of about three requests per second per integration, so bulk imports are throttled and retried rather than fired all at once. Scripts run on a small scheduled function you own, or inside your existing automation tool if you already pay for one.",
    ],
    tasks: [
      { title: "Send website or Typeform submissions into a Notion database", price: 99, days: 1 },
      { title: "Rebuild a messy workspace into related databases with rollups and formulas", price: 149, days: 2 },
      { title: "Weekly email or Slack digest of overdue tasks from Notion", price: 199, days: 2 },
      { title: "Sync Notion tasks and deadlines with Google Calendar", price: 349, days: 3 },
      { title: "Client CRM in Notion with templates, buttons and follow-up reminders", price: 499, days: 4 },
      { title: "Publish a Notion content database as pages on your own website", price: 799, days: 6 },
    ],
    deliverables: [
      "Databases, relations, formulas and views set up in your workspace",
      "Notion integration and scripts, with the token kept in your environment",
      "A list of pages connected to each integration and why",
      "A short written walkthrough of when and how each automation fires",
      "Two revision rounds after the team uses it for a few days",
    ],
    sampleTitle: "Connect our Notion content calendar to the website",
    sampleBrief:
      "Our marketing team plans blog posts in a Notion database with status, author, publish date and the draft in the page body. I'd like posts marked 'Published' to appear automatically on our Next.js blog with images and headings intact, a Slack message to #marketing when something goes live, and a Monday email listing drafts that have missed their date.",
    limits:
      "Notion isn't built for high-volume transactional data or for strict permission rules at row level, and an agent won't pretend otherwise. If your workflow needs either, the proposal will recommend a small database or Airtable instead and explain the trade-off.",
    faqs: [
      {
        q: "How much does a Notion automation expert cost here?",
        a: "Routing form submissions into Notion starts at $99, and restructuring a workspace into proper databases is around $149. Digests and reminders run about $199, a two-way calendar sync roughly $349, and a full CRM setup near $499. Publishing a Notion database as website pages usually costs about $799. Your Notion plan is billed by Notion.",
      },
      {
        q: "Why can't my integration see a page?",
        a: "Notion integrations have no access by default. Each page or database has to be connected to the integration from its menu, and child pages inherit that connection. Most 'object not found' errors come from a page that was never connected or was moved somewhere that isn't. The handover documents every required connection.",
      },
      {
        q: "Do I need Zapier or Make to automate Notion?",
        a: "Not always. Notion's own automations and buttons handle many in-workspace jobs, and direct API scripts are cheap to run for steady syncs. A no-code tool makes sense if your team wants to edit the logic themselves. The proposal recommends one approach and lists its monthly running cost.",
      },
      {
        q: "Can you migrate us from Trello, Asana or spreadsheets into Notion?",
        a: "Yes. The agent maps your old boards or sheets to Notion databases, carries over comments and attachments where the export allows, and preserves dates and assignees. Anything that can't move cleanly, such as certain checklists or custom fields, is listed before the migration starts so you can decide how to handle it.",
      },
      {
        q: "Is our workspace data safe during the work?",
        a: "Access is limited to what you share: either a guest invitation to specific pages or an integration connected to chosen databases. Large changes are tested on a duplicated database first. Notion's page history lets you roll back edits, and the integration token can be revoked from your settings at any time.",
      },
    ],
    related: ["airtable-developer", "zapier-expert", "make-automation-expert", "n8n-expert"],
  },
  {
    slug: "hubspot-integration-developer",
    skill: "HubSpot integration developer",
    article: "a",
    category: "automation",
    metaTitle: "Hire a HubSpot Integration Developer | GrahAI Systems",
    metaDescription:
      "Hire a HubSpot integration developer to sync contacts, deals and purchases with your app, Stripe or Shopify, clean CRM data and build workflow code actions.",
    keywords: [
      "hire hubspot developer",
      "hubspot integration developer",
      "hubspot api integration",
      "hubspot crm integration",
      "hubspot custom integration",
      "hubspot workflow automation",
      "hubspot data sync",
    ],
    intro:
      "Need HubSpot to know what customers actually do in your product, store or billing system? Spell out what should sync and when. An AI agent comes back with a fixed price in about a minute, builds the connection through HubSpot's APIs, and an engineer audits the data mapping.",
    overviewTitle: "Keeping HubSpot in sync with the rest of the business",
    overview: [
      "HubSpot is only as useful as the data inside it. Sales teams lose trust when deals miss recent purchases, contacts exist three times with slightly different emails, or a signup in your app never reaches the CRM. Most integration jobs start by agreeing a mapping: which system owns each field, which HubSpot object it belongs to (contacts, companies, deals, tickets or a custom object), and how records are matched so nothing gets duplicated.",
      "Connections are built as a HubSpot app authenticated with an access token limited to the scopes the job needs, never with a shared user login. Changes flow in through the CRM APIs using batch endpoints where possible, since HubSpot rate limits depend on your subscription. For the other direction, HubSpot webhooks or workflow webhook actions notify your system when a deal stage moves or a property changes. Associations between records, like linking a deal to both a contact and a company, are set explicitly so reports add up.",
      "Some features depend on your HubSpot tier, and the proposal says so rather than discovering it halfway through. Custom code actions inside workflows need Operations Hub Professional or higher, and custom objects require an Enterprise subscription. Before any bulk write, the agent runs the sync against a sample and shows you the result, then keeps an error log so failed records are retried instead of silently skipped.",
    ],
    tasks: [
      { title: "Send leads from a custom website form into HubSpot with source details", price: 149, days: 2 },
      { title: "Merge duplicate contacts and companies and repair broken associations", price: 249, days: 2 },
      { title: "Workflow custom code action that enriches or routes new deals", price: 299, days: 3 },
      { title: "Push Stripe or Shopify purchases into HubSpot deals and contact properties", price: 599, days: 4 },
      { title: "Two-way sync between your app's database and HubSpot records", price: 999, days: 7 },
      { title: "Migrate contacts, deals and history into HubSpot from another CRM", price: 1499, days: 10 },
    ],
    deliverables: [
      "Field mapping sheet showing source, destination and owner of each property",
      "Integration code using a scoped access token stored in your environment",
      "Dry-run output on sample records before anything writes in bulk",
      "Error log and retry handling for records HubSpot rejects",
      "Handover notes and two revision rounds",
    ],
    sampleTitle: "Sync our SaaS signups and plan changes into HubSpot",
    sampleBrief:
      "We run a B2B SaaS on Node and Postgres and use HubSpot Sales Hub Professional. When someone signs up, I want a contact and company created or matched by email domain. When they upgrade, downgrade or cancel in Stripe, the deal should move stages and the plan and MRR properties update. Sales also wants a task created for any trial that hasn't logged in after three days.",
    limits:
      "An agent isn't the right hire for redesigning your whole sales process, training reps on HubSpot, or choosing between CRMs at a strategic level. Bring in a HubSpot solutions partner for that, then post the integration work here once the process is decided.",
    faqs: [
      {
        q: "How much does a HubSpot integration cost?",
        a: "Routing a custom form into HubSpot starts at $149, and a data cleanup with deduplication is about $249. A custom code workflow action is around $299, syncing Stripe or Shopify purchases roughly $599, and a full two-way sync with your app near $999. Migrations from another CRM typically cost about $1,499 depending on record volume and history.",
      },
      {
        q: "Which HubSpot plan do I need for this?",
        a: "Basic API syncs work on most plans, including free ones. Certain features are tier-gated: custom code in workflows needs Operations Hub Professional, and custom objects need Enterprise. The agent reads your job post, checks which features the design relies on, and tells you before you pay whether your current plan covers it.",
      },
      {
        q: "Won't a sync create duplicate contacts?",
        a: "Not if matching rules are agreed first. Contacts are matched on email and companies on domain by default, and your app's own IDs are stored in a custom property so later updates hit the same record. The dry run on sample data shows exactly which records would be created, updated or skipped before the real run.",
      },
      {
        q: "Why not just use HubSpot's marketplace connectors?",
        a: "Use them when they fit; they're often the cheapest option. Custom work makes sense when a connector can't map your fields, misses an event you care about, or syncs too slowly. The proposal mentions any marketplace app that would do the job, so you don't pay for code you don't need.",
      },
      {
        q: "What access do you need to our HubSpot portal?",
        a: "Usually a user seat with the right permissions for setup and a HubSpot app token limited to specific scopes for the integration itself. You can remove the user and rotate or delete the token after delivery. Nothing is configured to depend on a GrahAI account.",
      },
    ],
    related: ["api-integration-developer", "stripe-integration-developer", "zapier-expert", "nodejs-developer"],
  },
  {
    slug: "slack-bot-developer",
    skill: "Slack bot developer",
    article: "a",
    category: "automation",
    metaTitle: "Hire a Slack Bot Developer — From $99 | GrahAI Systems",
    metaDescription:
      "Hire a Slack bot developer for alerts, slash commands, approval buttons, modals and AI answers in threads, built with Bolt and Block Kit. Fixed-price quote.",
    keywords: [
      "hire slack bot developer",
      "slack bot developer",
      "slack app developer",
      "custom slack bot",
      "slack integration developer",
      "slack slash command",
      "slack workflow automation",
    ],
    intro:
      "Want work to happen inside Slack instead of in six browser tabs: approvals, lookups, alerts, quick answers? Describe what your team does today. An AI agent quotes a fixed price in about a minute, builds the Slack app, and an engineer reviews it before it joins your workspace.",
    overviewTitle: "Slack apps your team will actually use",
    overview: [
      "A good Slack bot removes a round trip. Instead of opening the admin panel to approve a refund, a manager taps Approve on a message. Instead of asking in a channel where an order is, someone types /order 4821 and gets the status. Instead of watching a dashboard, the team sees an alert in #ops when a payment fails. The agent starts from those moments in your day, then picks the Slack features that fit: messages built with Block Kit, buttons, modals, slash commands or the App Home tab.",
      "Apps are usually written with Slack's Bolt framework in JavaScript or Python. Slack expects interactive requests and slash commands to be acknowledged within three seconds, so slower work like database lookups or AI calls runs after the acknowledgement and posts back when ready. Every incoming request is checked against your app's signing secret. If your network can't expose a public URL, Socket Mode lets the app connect outward to Slack instead.",
      "An app built for your own workspace is installed by an admin and needs no review from Slack. Distributing to other companies is different: it needs OAuth installation for multiple workspaces, token storage per team, and, if you want a listing in the Slack Marketplace, Slack's review of your app and its requested scopes. The agent requests only the scopes the features use, which keeps installation simple for your admins and smooths any later review.",
    ],
    tasks: [
      { title: "Post alerts from your app or monitoring tool into a channel", price: 99, days: 1 },
      { title: "Slash command that looks up orders, customers or tickets", price: 249, days: 2 },
      { title: "Async standup bot that collects answers by DM and posts a summary", price: 399, days: 3 },
      { title: "Approval flow with buttons, a modal for comments and an audit trail", price: 499, days: 4 },
      { title: "Bot that answers questions in threads from your internal docs", price: 999, days: 7 },
      { title: "Multi-workspace Slack app with OAuth install, ready for Marketplace review", price: 1499, days: 10 },
    ],
    deliverables: [
      "Slack app source code and a manifest with only the scopes in use",
      "Request signature verification and fast acknowledgement handling",
      "Deployment on your hosting, or Socket Mode where no public URL exists",
      "Admin install guide plus a short message for your team",
      "Two revision rounds after the team tries it",
    ],
    sampleTitle: "Refund approval bot for our support team",
    sampleBrief:
      "Our support agents raise refund requests in a Google Sheet and a manager approves them hours later. I want a /refund command that opens a form for order number, amount and reason, posts the request to #refunds with Approve and Reject buttons visible only to managers, and calls our Laravel API to issue the refund when approved. Every decision should be logged with who made it.",
    limits:
      "An agent isn't the right hire for Slack workspace administration, such as managing users, retention policies or Enterprise Grid org settings, or for a bot meant to read and analyse every message in your workspace. Those raise policy and privacy questions your admins should settle first.",
    faqs: [
      {
        q: "What does a custom Slack bot cost?",
        a: "Simple channel alerts start at $99. A slash command that fetches data is about $249, a standup bot around $399, and an approval flow with buttons and modals roughly $499. A bot answering from your internal docs is near $999, and a distributable multi-workspace app usually costs about $1,499. Hosting costs are typically small.",
      },
      {
        q: "Does Slack need to approve our bot?",
        a: "Not for an internal app. A workspace admin installs it, or approves the install if your workspace restricts apps. Slack's review applies only if you list the app in the Slack Marketplace for other companies to install. Enterprise Grid organisations may have their own internal approval step, which your admin can tell you about.",
      },
      {
        q: "Can the bot read our channels?",
        a: "Only what its scopes allow and only in channels where it's been added. Most bots here need to post messages and respond to commands, not read history. If a feature does need history, such as summarising a thread, the scope is explained in the proposal so your admin can decide before installation.",
      },
      {
        q: "Can't we just use Slack Workflow Builder?",
        a: "For forms and simple notifications, often yes, and the proposal will say so. Custom apps are worth it when you need to call your own systems, apply business rules, restrict buttons to certain people, or respond with live data. The two also combine: a custom step can plug into a workflow your team edits themselves.",
      },
      {
        q: "Where does the bot run?",
        a: "On infrastructure you control, such as your existing server, a small cloud function or a container. The agent picks whatever matches your current setup. Bot tokens and the signing secret live in your environment variables, and you can reinstall or revoke the app from Slack's settings at any time.",
      },
    ],
    related: ["discord-bot-developer", "telegram-bot-developer", "nodejs-developer", "python-developer", "ai-chatbot-developer"],
  },
  {
    slug: "twilio-sms-developer",
    skill: "Twilio SMS developer",
    article: "a",
    category: "automation",
    metaTitle: "Hire a Twilio SMS Developer — From $149 | GrahAI Systems",
    metaDescription:
      "Hire a Twilio SMS developer for reminders, OTP with Verify, two-way texting and delivery fixes, with help on A2P 10DLC and toll-free verification. Fixed price.",
    keywords: [
      "hire twilio developer",
      "twilio sms developer",
      "twilio integration",
      "twilio sms integration",
      "a2p 10dlc registration help",
      "twilio verify otp",
      "sms reminder system",
    ],
    intro:
      "Need text messages that reliably reach phones: reminders, login codes, replies your team can answer? Describe who you're texting and why. An AI agent prices it in about a minute, builds it on Twilio, and an engineer reviews the sending and opt-out logic.",
    overviewTitle: "SMS that gets delivered, not filtered",
    overview: [
      "Writing code to send a text through Twilio takes minutes. Getting messages delivered at scale is the hard part, because carriers filter traffic they can't trace to a registered sender. In the US, business texting from ordinary local numbers requires A2P 10DLC registration, where your brand and each messaging campaign are submitted for vetting before carriers accept the traffic. Toll-free numbers need their own verification, and many other countries have sender rules of their own, such as India's DLT template registration.",
      "The agent prepares the registration details with you, including campaign description, sample messages and how people opt in, because vague or mismatched answers are the usual reason submissions get rejected. Approval itself is decided by carriers and the registry, not by Twilio or us, and can take days or weeks, so the proposal schedules the build around it. Sending runs through a Messaging Service, which manages sender numbers and supports Twilio's default handling of STOP, HELP and similar keywords.",
      "Every outbound message gets a status callback, so your system knows whether it was delivered, failed or filtered, and error codes such as 30007 surface in a log instead of disappearing. Incoming texts hit a webhook that validates Twilio's request signature before acting. For login and phone verification, Twilio Verify handles code generation, expiry and retries, which is safer than rolling your own codes.",
    ],
    tasks: [
      { title: "Find why texts aren't arriving and add delivery status tracking", price: 149, days: 2 },
      { title: "Prepare A2P 10DLC brand and campaign details and set up a Messaging Service", price: 199, days: 2 },
      { title: "Phone number verification and OTP login with Twilio Verify", price: 249, days: 2 },
      { title: "Appointment reminders and confirmations sent from your booking system", price: 299, days: 3 },
      { title: "Opt-in campaign sender with scheduling, throttling and opt-out records", price: 599, days: 5 },
      { title: "Shared two-way SMS inbox so staff can reply to customers", price: 799, days: 6 },
    ],
    deliverables: [
      "Sending and receiving code wired to your app, with credentials in your environment",
      "Status callbacks and an error log covering every message",
      "Inbound webhook with Twilio signature validation",
      "Registration notes: what was submitted and what to keep consistent",
      "Two revision rounds after live testing on your own phone",
    ],
    sampleTitle: "SMS reminders for our dental clinic's appointments",
    sampleBrief:
      "We're a US dental clinic using a custom booking system on Django. I want a text sent when an appointment is booked, a reminder 24 hours before asking patients to reply C to confirm or R to reschedule, and replies shown on the front-desk screen. We already have a Twilio account but haven't registered for 10DLC, and some messages we tested never arrived.",
    limits:
      "An agent can't guarantee carrier approval, and won't build bulk marketing to purchased lists or contacts who never opted in; that breaks carrier rules and laws such as the TCPA in the US. Legal questions about consent wording are for your lawyer, and we'll implement what they approve.",
    faqs: [
      {
        q: "What does a Twilio SMS build cost?",
        a: "Diagnosing delivery problems starts at $149, and preparing A2P 10DLC details with a Messaging Service is about $199. OTP with Twilio Verify is around $249, appointment reminders roughly $299, an opt-in campaign sender near $599, and a two-way team inbox about $799. Twilio's per-message charges and registration fees are paid to Twilio.",
      },
      {
        q: "What is A2P 10DLC and do I need it?",
        a: "It's the US system for registering business text messaging sent from standard 10-digit numbers. If you text US recipients from a local number, you need a registered brand and campaign, or carriers will block or heavily filter your messages. Toll-free and short-code numbers have separate verification processes; the proposal recommends the sender type that fits your volume.",
      },
      {
        q: "How long does registration take?",
        a: "It varies, from a few days to several weeks, and resubmissions after a rejection add more time. That timeline belongs to carriers and the campaign registry, so the agent builds and tests with your verified personal number in the meantime. The handover explains what to change if a campaign is rejected.",
      },
      {
        q: "Will people be able to unsubscribe?",
        a: "Yes. Messaging Services can handle standard opt-out keywords such as STOP automatically, and the agent mirrors those opt-outs in your own database so your app never tries to message someone who has left. Opt-in time and source are stored too, which carriers may ask about.",
      },
      {
        q: "Can you send WhatsApp or voice through Twilio as well?",
        a: "Twilio supports both, and the same code structure can add them. WhatsApp messages require an approved WhatsApp Business sender and pre-approved templates for messages started by you, which adds Meta's approval process. Mention it in the job post and the proposal will scope each channel separately.",
      },
    ],
    related: ["whatsapp-bot-developer", "api-integration-developer", "python-developer", "nodejs-developer"],
  },
  {
    slug: "google-maps-api-developer",
    skill: "Google Maps API developer",
    article: "a",
    category: "web",
    metaTitle: "Hire a Google Maps API Developer — From $99 | GrahAI Systems",
    metaDescription:
      "Hire a Google Maps API developer for store locators, address autocomplete, delivery zones and route planning, with keys locked down and quotas set. Fixed price.",
    keywords: [
      "hire google maps api developer",
      "google maps api integration",
      "google maps developer",
      "store locator developer",
      "places autocomplete integration",
      "google maps api cost",
      "routes api developer",
    ],
    intro:
      "Need a map, address search or delivery radius on your site, without a surprise bill from Google? Describe what customers should be able to do. An AI agent sends a fixed price in about a minute, builds on Google Maps Platform, and an engineer checks keys and quotas before launch.",
    overviewTitle: "Maps features with the bill under control",
    overview: [
      "Google Maps Platform is a family of separately priced APIs, and picking the right ones matters as much as the code. The Maps JavaScript API draws interactive maps with your markers and clustering. Places API powers address autocomplete and business search. Geocoding turns addresses into coordinates and back, and the Routes API calculates travel times, distances and multi-stop routes. Address Validation helps clean shipping addresses at checkout.",
      "Every project needs a Google Cloud billing account, even when usage stays inside the free monthly allowance each API includes; current allowances and prices are on Google's pricing page and change from time to time. The agent restricts each API key by website or app and by which APIs it may call, sets daily quotas so a bug or scraper can't run up costs, and adds budget alerts. Budgets only warn you, while quotas actually stop usage, so both are configured.",
      "Small choices change the monthly bill. Autocomplete with session tokens is billed per completed search rather than per keystroke, field masks request only the data you show, and a store locator can geocode your locations once instead of on every page view. Google's terms limit how long some returned data may be stored and require showing Places results with proper attribution, and the build follows those rules so your account stays in good standing.",
    ],
    tasks: [
      { title: "Map of your locations with custom markers and info windows", price: 99, days: 1 },
      { title: "Address autocomplete on a signup or checkout form", price: 149, days: 2 },
      { title: "Lock down API keys, set quotas and cut an unexpectedly high Maps bill", price: 199, days: 2 },
      { title: "Delivery-zone check with distance-based shipping fees", price: 399, days: 3 },
      { title: "Store locator with search, radius filter and directions links", price: 499, days: 4 },
      { title: "Multi-stop route planning for a delivery or field team", price: 999, days: 7 },
    ],
    deliverables: [
      "Maps feature integrated into your site or app",
      "API keys restricted by referrer or app and by API",
      "Quotas and budget alerts configured in your Google Cloud project",
      "Cost note estimating monthly usage at your current traffic",
      "Two revision rounds after testing on desktop and phone",
    ],
    sampleTitle: "Delivery radius check for our bakery's online orders",
    sampleBrief:
      "We sell cakes online from a WooCommerce site and deliver from two kitchens. Customers should type their address with autocomplete, see whether we deliver there, and get a delivery fee based on driving distance from the nearer kitchen: free under 5 km, then a fixed rate per km up to 20 km. Outside that, only pickup should be offered. Our Maps bill last month was much higher than expected.",
    limits:
      "An agent isn't the right hire for building your own mapping data, offline navigation apps or high-volume fleet tracking with live vehicle positions every few seconds. Those need specialised platforms and a different cost model, and the proposal will say so if your brief heads that way.",
    faqs: [
      {
        q: "How much does a Google Maps integration cost?",
        a: "A basic location map starts at $99 and address autocomplete is about $149. A key and quota lockdown to bring costs down is around $199, a delivery-zone calculator near $399, and a full store locator roughly $499. Multi-stop route planning for a team usually costs about $999. Google bills your API usage directly.",
      },
      {
        q: "Why does Google Maps need a billing account?",
        a: "Google requires one on every Maps Platform project, even if your usage stays within the free monthly amount. It lets Google charge beyond the allowance and prevents anonymous abuse. Setting quotas and budget alerts on that account is the way to make sure an unexpected spike can't turn into a large invoice.",
      },
      {
        q: "Our Maps bill suddenly jumped. Can you find out why?",
        a: "Usually, yes. Common causes are unrestricted keys copied by other sites, autocomplete without session tokens, geocoding the same addresses on every page load, or requesting more Places fields than you display. The agent reads your Cloud usage reports, identifies which API and key drive the cost, and fixes each cause.",
      },
      {
        q: "Can we use OpenStreetMap or Mapbox instead?",
        a: "Sometimes that's the cheaper choice, especially for maps with heavy traffic but simple needs. Google tends to win on address search and business data quality in many regions. If your brief suits an alternative, the proposal mentions it with the trade-offs, and the agent can build on either.",
      },
      {
        q: "Will it work inside our mobile app?",
        a: "Yes. Google offers Maps SDKs for Android and iOS, and Flutter and React Native have well-maintained plugins built on them. Mobile keys are restricted by app package name or bundle ID rather than website address. Mention your app framework in the job post so the quote covers the right SDK.",
      },
    ],
    related: ["website-developer", "woocommerce-developer", "react-developer", "flutter-developer"],
  },
  {
    slug: "openai-api-developer",
    skill: "OpenAI API developer",
    article: "an",
    category: "ai",
    metaTitle: "Hire an OpenAI API Developer — From $149 | GrahAI Systems",
    metaDescription:
      "Hire an OpenAI API developer for structured outputs, function calling, Batch API jobs, Assistants-to-Responses migration and rate-limit fixes. Fixed price.",
    keywords: [
      "hire openai api developer",
      "openai api developer",
      "openai api integration",
      "openai function calling",
      "openai responses api migration",
      "openai batch api",
      "openai structured outputs",
    ],
    intro:
      "Already on the OpenAI API and need it faster, cheaper or more dependable, or starting fresh and want it built right? Describe your use case. An AI agent quotes a fixed price in about a minute, works in your OpenAI project, and an engineer checks cost and reliability.",
    overviewTitle: "Getting more out of the OpenAI API",
    overview: [
      "Most OpenAI API projects begin with a quick prototype that works on the developer's laptop and then struggles in production: 429 errors at busy hours, outputs that break a parser one time in fifty, and a monthly bill nobody predicted. The fixes are well understood. Requests get exponential backoff with jitter, outputs are constrained with structured outputs against a JSON schema, and long, repeated instructions sit at the start of the prompt where automatic prompt caching can reuse them.",
      "Function calling, or tool use, lets the model request actions in your system such as looking up an order, while your code decides whether to run them. The agent writes those tools with strict argument schemas and permission checks, so the model can never call something it shouldn't. Work that doesn't need an instant answer, like tagging a backlog or summarising last week's records, moves to the Batch API, which runs at a lower price in exchange for results within a day.",
      "OpenAI has announced it is retiring the Assistants API in favour of the Responses API, and many teams need their threads, files and tools moved across. The migration keeps your behaviour the same while switching endpoints, with before-and-after tests on real examples. Keys are created as project keys in your organisation, with spending limits and usage alerts set there, and you own the account, the billing and any data retention settings.",
    ],
    tasks: [
      { title: "Stop 429 rate-limit errors with retries, backoff and request queuing", price: 149, days: 2 },
      { title: "Turn emails or form text into validated JSON with structured outputs", price: 199, days: 2 },
      { title: "Move a nightly bulk job onto the Batch API to cut its cost", price: 299, days: 3 },
      { title: "Migrate an Assistants API integration to the Responses API", price: 599, days: 5 },
      { title: "Function calling so the model can safely query your database or API", price: 799, days: 6 },
      { title: "Voice assistant for your app or phone line with the Realtime API", price: 1999, days: 14 },
    ],
    deliverables: [
      "Integration code in your repository, with keys loaded from your environment",
      "Schemas for every structured output and tool argument",
      "Test set of real examples run before and after each change",
      "Cost estimate per request and per month, with spending limits set",
      "Handover notes plus two revision rounds",
    ],
    sampleTitle: "Migrate our support assistant off the Assistants API",
    sampleBrief:
      "Our helpdesk app uses the OpenAI Assistants API with file search over about 200 help articles and two functions that look up orders and shipping status. We need it moved to the Responses API before the old API is switched off, with the same answers and tools, conversation history preserved per customer, and lower latency if possible. It's a Python FastAPI backend.",
    limits:
      "An agent isn't the right hire for fine-tuning strategy on sensitive regulated data without your compliance team involved, or for applications where an unreviewed model output makes a medical, legal or credit decision. Those need human accountability built into the process, not just better code.",
    faqs: [
      {
        q: "How much does an OpenAI API developer cost here?",
        a: "Rate-limit and retry fixes start at $149, and structured-output extraction is about $199. Moving bulk work to the Batch API is around $299, an Assistants-to-Responses migration roughly $599, and safe function calling near $799. Voice assistants with the Realtime API typically cost about $1,999. API usage is billed to your OpenAI account.",
      },
      {
        q: "Why am I getting 429 errors?",
        a: "A 429 means you've hit a rate limit on requests or tokens per minute, or your account has run out of credit. Limits rise with your organisation's usage tier. The agent checks which limit you're hitting, adds backoff and a queue so spikes are smoothed out, and reduces token use where prompts are longer than they need to be.",
      },
      {
        q: "Do I need to migrate from the Assistants API?",
        a: "OpenAI has announced the Assistants API will be retired and points developers to the Responses API, so integrations built on it need moving before the shutdown date in OpenAI's deprecation notice. The migration maps threads, file search and functions to their Responses equivalents and is tested against your current outputs.",
      },
      {
        q: "Is our data used to train OpenAI's models?",
        a: "OpenAI states that API data is not used for training by default, and offers data controls such as retention options for eligible customers. Policies change, so check OpenAI's current terms for your account. The agent can also strip or mask personal details before anything is sent, if your brief requires it.",
      },
      {
        q: "Can you keep the code portable to other providers?",
        a: "Yes, if you want that. Calls are wrapped behind a small adapter in your codebase, prompts live in editable files, and tests run against the adapter, so switching or adding a provider later is contained work. If you're committed to OpenAI, the build uses its features directly for simplicity.",
      },
    ],
    related: ["chatgpt-integration", "ai-developer", "ai-agent-developer", "python-developer"],
  },
  {
    slug: "rag-chatbot-developer",
    skill: "RAG chatbot developer",
    article: "a",
    category: "ai",
    metaTitle: "Hire a RAG Chatbot Developer — From $299 | GrahAI Systems",
    metaDescription:
      "Hire a RAG chatbot developer: retrieval over your PDFs, wikis and drives with citations, hybrid search, reranking, access control and measured accuracy.",
    keywords: [
      "rag chatbot developer",
      "hire rag developer",
      "retrieval augmented generation developer",
      "rag pipeline developer",
      "chatbot on company documents",
      "vector database developer",
      "rag evaluation",
    ],
    intro:
      "Need a chatbot that answers from your own documents and can prove where each answer came from? Describe the sources and who will ask questions. An AI agent quotes a fixed price in about a minute, builds and measures the retrieval pipeline, and an engineer reviews the accuracy report.",
    overviewTitle: "Retrieval first, then the chatbot",
    overview: [
      "In a retrieval-augmented chatbot, the model can only answer as well as the passages it's handed. Most disappointing RAG bots fail at retrieval, not generation: documents split mid-table, scanned PDFs never turned into text, headings stripped so a chunk loses its context, or a question phrased differently from the document so vector search misses it. The agent starts by inspecting your sources and choosing chunking that respects their structure, keeping section titles and page numbers attached to every piece.",
      "Search usually combines keyword matching with vector similarity, because exact terms like part numbers and policy codes are where pure embeddings struggle. A reranking step then orders the candidates before the top few reach the model. Vectors live where they fit your stack, often Postgres with pgvector, or a hosted vector database for larger collections. If staff should only see documents they're allowed to open, each chunk carries its access tags and retrieval filters on them, rather than relying on the prompt to keep secrets.",
      "Before launch, a test set of real questions with known answers measures two things separately: whether the right passage was retrieved, and whether the answer stayed faithful to it. That makes problems fixable instead of mysterious. Ingestion runs on a schedule or on change notifications from sources like Google Drive, SharePoint, Confluence or Notion, so edited documents are re-indexed and deleted ones disappear from answers.",
    ],
    tasks: [
      { title: "Diagnose a document chatbot that gives wrong or vague answers", price: 299, days: 3 },
      { title: "Accuracy test harness scoring retrieval and answer faithfulness", price: 399, days: 3 },
      { title: "Add hybrid keyword-plus-vector search and reranking to an existing bot", price: 499, days: 4 },
      { title: "Automatic re-indexing when Drive, Notion or Confluence documents change", price: 599, days: 5 },
      { title: "Chatbot over hundreds of PDFs with page-level citations", price: 799, days: 6 },
      { title: "Permission-aware retrieval so each user sees only documents they may access", price: 1499, days: 10 },
    ],
    deliverables: [
      "Ingestion pipeline that parses, chunks and indexes your sources",
      "Hybrid retrieval with reranking and source citations on every answer",
      "Accuracy report on your test questions, split by retrieval and answer quality",
      "Re-index schedule or change hooks so content stays current",
      "Code in your repository plus two revision rounds",
    ],
    sampleTitle: "Internal policy assistant for our HR and operations teams",
    sampleBrief:
      "We have about 1,200 documents in SharePoint: HR policies, SOPs and vendor contracts, many as scanned PDFs. I want an internal chat tool where employees ask questions and get answers with a link to the exact document and page. Contracts must only be visible to the finance and legal groups. Our current pilot often quotes outdated policy versions, which has to stop.",
    limits:
      "A RAG system can't fix sources that contradict each other or are badly out of date; someone in your team has to decide which version is true. An agent also isn't the right hire when answers will be relied on for legal or medical advice with nobody reviewing them.",
    faqs: [
      {
        q: "What does a RAG chatbot cost to build?",
        a: "Diagnosing an underperforming bot starts at $299, and an accuracy harness is about $399. Adding hybrid search and reranking runs around $499, change-based re-indexing roughly $599, and a new chatbot over a few hundred PDFs with citations near $799. Permission-aware retrieval across teams typically costs about $1,499. Model and hosting costs are billed to your accounts.",
      },
      {
        q: "How is this different from a regular AI chatbot?",
        a: "A general chatbot answers from what the model learned in training. A RAG chatbot searches your documents first and answers only from what it finds, with citations. That makes it suitable for company policies, product specs or contracts, where the answer must match your source and be checkable, not just sound plausible.",
      },
      {
        q: "Can it handle scanned PDFs and tables?",
        a: "Yes, with the right parsing. Scanned pages go through OCR, and tables are extracted as structured rows so figures stay in the right columns. Documents that parse badly are flagged in an ingestion report, so you know which sources might need a cleaner version rather than discovering it from a wrong answer.",
      },
      {
        q: "Which vector database should we use?",
        a: "For most collections under a few million chunks, Postgres with pgvector is plenty and keeps everything in a database you already know. Hosted vector databases make sense at larger scale or when your team prefers a managed service. The proposal recommends one based on your volume and stack, not a default.",
      },
      {
        q: "How do we know the answers are accurate?",
        a: "You see numbers before launch. The test set reports how often the correct passage was retrieved and how often the answer matched it, question by question. When you add documents or change settings, the same test runs again, so any drop in quality shows up in the report rather than in a user's complaint.",
      },
    ],
    related: ["ai-chatbot-developer", "ai-developer", "pdf-data-extraction", "python-developer", "openai-api-developer"],
  },
  {
    slug: "supabase-developer",
    skill: "Supabase developer",
    article: "a",
    category: "web",
    metaTitle: "Hire a Supabase Developer — From $149 | GrahAI Systems",
    metaDescription:
      "Hire a Supabase developer for row level security, Auth, Edge Functions, Realtime, pgvector and Firebase-to-Supabase migrations. Fixed price in about a minute.",
    keywords: [
      "hire supabase developer",
      "supabase developer",
      "supabase expert",
      "supabase row level security",
      "supabase auth setup",
      "firebase to supabase migration",
      "supabase edge functions",
    ],
    intro:
      "Building on Supabase and want the database, auth and security right before real users arrive? Describe your app and what's blocking you. An AI agent prices the job in about a minute, works through migrations you can review, and an engineer checks every policy.",
    overviewTitle: "Supabase done safely",
    overview: [
      "Supabase gives you a full Postgres database plus Auth, Storage, Edge Functions and Realtime, and apps can query the database straight from the browser. That speed comes with one rule that can't be skipped: row level security. With RLS enabled and sensible policies, a signed-in user can only read and change their own rows; without it, anyone holding your public anon key can read whole tables. Auditing and writing these policies, then testing them as different users, is the single most valuable job on most Supabase projects.",
      "The service role key bypasses RLS entirely, so it belongs only in server code and Edge Functions, never in a mobile or web bundle. Work that needs it, such as handling Stripe webhooks, sending emails or calling third-party APIs with secret keys, moves into Edge Functions or your own backend. Auth is set up with the sign-in methods you need, redirect URLs for each environment, and custom SMTP, because Supabase's built-in email sender is rate-limited and meant for testing.",
      "Schema changes are written as SQL migrations with the Supabase CLI and kept in your repository, so staging and production stay identical and changes can be reviewed. For apps leaving Firebase, the migration maps Firestore collections to relational tables, moves users across Auth, and rewrites security rules as RLS policies. Free projects pause after a period of inactivity, and backup and point-in-time recovery options depend on your plan, so the handover spells out what your tier provides.",
    ],
    tasks: [
      { title: "Audit and fix row level security policies that leak or block data", price: 149, days: 2 },
      { title: "Auth with magic links, Google sign-in and branded emails via custom SMTP", price: 199, days: 2 },
      { title: "Edge Function that handles payment webhooks and updates user plans", price: 299, days: 3 },
      { title: "Schema design with CLI migrations and a separate staging project", price: 399, days: 3 },
      { title: "Realtime chat or live notifications with presence", price: 599, days: 5 },
      { title: "Move a Firebase app's data, users and rules to Supabase", price: 1999, days: 14 },
    ],
    deliverables: [
      "SQL migrations in your repository for every schema and policy change",
      "RLS policies tested as anonymous, signed-in and admin users",
      "Edge Functions or server code holding all secret keys",
      "Environment notes for local, staging and production projects",
      "Two revision rounds after you test",
    ],
    sampleTitle: "Lock down our Supabase app before launch",
    sampleBrief:
      "We built a team task app with Next.js and Supabase over a few weekends. Before launch I want someone to check our tables, since I think RLS is off on some of them. Users belong to teams and should only see their team's projects and files in Storage; team admins can invite and remove members. We also need Stripe subscriptions handled server-side and proper password reset emails.",
    limits:
      "An agent isn't the right hire for running a database for you around the clock, tuning a cluster under very heavy load, or recovering a project after a major data loss without backups. Supabase support or a database specialist on call fits those better.",
    faqs: [
      {
        q: "How much does a Supabase developer cost here?",
        a: "An RLS audit with fixes starts at $149, and an Auth setup with custom email is about $199. Payment-webhook Edge Functions run around $299, a schema with migrations and staging roughly $399, and Realtime features near $599. Moving a Firebase app to Supabase usually costs about $1,999, depending on data size and rules complexity.",
      },
      {
        q: "Is it safe that my anon key is visible in the browser?",
        a: "Yes, provided row level security is on and policies are correct. The anon key is designed to be public; policies decide what it can actually reach. The danger is tables with RLS disabled or policies that are too broad, which is exactly what the audit checks by querying your data as different kinds of users.",
      },
      {
        q: "Should we move from Firebase to Supabase?",
        a: "It's worth it when your data is relational, you want SQL for reporting, or Firestore's per-read pricing is growing faster than your users. It's less compelling for apps that lean on Firebase-only features or work offline-first. The proposal looks at your actual data model and recommends staying, moving, or moving part of it.",
      },
      {
        q: "Can Supabase handle AI features like semantic search?",
        a: "Yes. The pgvector extension stores embeddings in Postgres beside your normal data, so similarity search can be combined with ordinary filters and your RLS policies. For many products this avoids a separate vector service. Embeddings are generated in an Edge Function or your backend with keys kept server-side.",
      },
      {
        q: "Who owns the Supabase project?",
        a: "You do. The project sits in your Supabase organisation and billing, and we're added as members for the job and removed after. Migrations and function code live in your repository, so another developer can pick up exactly where the work finished.",
      },
    ],
    related: ["firebase-developer", "nextjs-developer", "sql-developer", "mvp-developer"],
  },
  {
    slug: "gohighlevel-developer",
    skill: "GoHighLevel developer",
    article: "a",
    category: "automation",
    metaTitle: "Hire a GoHighLevel Developer — From $149 | GrahAI Systems",
    metaDescription:
      "Hire a GoHighLevel developer for workflows, snapshots, custom webhooks, API v2 syncs and Marketplace apps for agency sub-accounts. Fixed price in a minute.",
    keywords: [
      "hire gohighlevel developer",
      "gohighlevel expert",
      "highlevel developer",
      "gohighlevel api integration",
      "gohighlevel workflow automation",
      "gohighlevel snapshot",
      "ghl developer",
    ],
    intro:
      "Running your agency or business on HighLevel and hitting the limits of what clicks alone can do? Describe the workflow or integration you need. An AI agent quotes a fixed price in about a minute, builds inside your account or through the API, and an engineer reviews it.",
    overviewTitle: "Beyond drag-and-drop in HighLevel",
    overview: [
      "HighLevel, often called GoHighLevel or GHL, bundles CRM, pipelines, calendars, funnels, email and SMS into one platform that agencies resell to clients as sub-accounts. Much of the value sits in workflows: a trigger such as a form submission, a booked appointment or a stage change, followed by actions like sending messages, updating fields, waiting or branching. When those workflows misfire, sending duplicate texts or skipping contacts, the cause is usually overlapping triggers, missing filters or custom fields being filled inconsistently.",
      "Snapshots are how agencies package a build for a niche, such as a dental or roofing setup, and load it into each new sub-account. A snapshot carries the build itself, including pipelines, workflows, funnels, calendars, custom fields and custom values, rather than a client's contacts or conversation history. The agent designs snapshots with custom values for anything client-specific, so a new account goes live by filling in a few values instead of editing dozens of workflows.",
      "When work leaves HighLevel, the build uses API v2, authenticated through a Marketplace app with OAuth or a private integration token, since the older v1 API is no longer supported for new work. Typical jobs sync contacts and opportunities with an external database or CRM, post form data to your own system with workflow webhooks, or build a Marketplace app that agencies install across many sub-accounts. US texting through HighLevel's phone system still needs A2P registration, and the proposal accounts for it.",
    ],
    tasks: [
      { title: "Fix workflows that double-send messages or skip contacts", price: 149, days: 2 },
      { title: "Custom JavaScript, CSS and tracking scripts on funnel pages", price: 199, days: 2 },
      { title: "Workflow webhooks that pass leads to your own app or database", price: 249, days: 2 },
      { title: "Two-way contact and opportunity sync with an external CRM via API v2", price: 799, days: 6 },
      { title: "Niche snapshot with pipelines, calendars, workflows and custom values", price: 999, days: 7 },
      { title: "Marketplace app with OAuth install across agency sub-accounts", price: 2499, days: 18 },
    ],
    deliverables: [
      "Workflows, snapshots or integration code delivered in your account or repository",
      "A map of triggers, filters and custom fields each workflow relies on",
      "API credentials stored in your environment, scoped to what the job needs",
      "Test run on a sandbox sub-account before touching client accounts",
      "Two revision rounds after you review",
    ],
    sampleTitle: "Snapshot for our med-spa client onboarding",
    sampleBrief:
      "We're an agency with 14 med-spa clients on HighLevel and rebuild the same setup by hand each time. I need a snapshot with a lead pipeline, consultation calendar, missed-call text back, a 7-day nurture sequence and review requests after appointments, with clinic name, address and booking link as custom values. Also, leads from our Facebook forms sometimes get two welcome texts and I need that fixed.",
    limits:
      "An agent isn't the right hire for running ad campaigns, writing your clients' marketing copy at scale, or negotiating HighLevel plan and SaaS-mode pricing for your agency. It also won't send texts or emails to contacts who haven't opted in.",
    faqs: [
      {
        q: "What does it cost to hire a GoHighLevel developer?",
        a: "Workflow repairs start at $149, and custom code on funnel pages is about $199. Webhooks to your own system run around $249, an API v2 sync with another CRM roughly $799, and a reusable niche snapshot near $999. A Marketplace app installable across sub-accounts usually costs about $2,499. Your HighLevel subscription is separate.",
      },
      {
        q: "Why do my workflows send the same message twice?",
        a: "Commonly, two workflows share a trigger, a contact re-enters a workflow that allows re-entry, or a form and a tag both fire the same sequence. The agent maps every trigger touching the affected contacts, consolidates or adds filters, and tests with dummy contacts in a sandbox sub-account before changing client accounts.",
      },
      {
        q: "Does a snapshot include my client's contacts?",
        a: "No. Snapshots package the build, such as workflows, pipelines, funnels, calendars, custom fields and values, not a sub-account's contacts or conversations. That's what makes them safe to share across clients. Anything client-specific should be a custom value so each new account just fills it in.",
      },
      {
        q: "Should we use API v1 or API v2?",
        a: "API v2. HighLevel has moved development to v2, which uses OAuth through Marketplace apps or private integration tokens, and v1 is no longer the place for new integrations. If your current setup uses v1 keys, the proposal can include moving it across so it keeps working.",
      },
      {
        q: "Do you need agency-level access?",
        a: "Only if the job is agency-wide, such as a snapshot or Marketplace app. For single-client work, a user on that sub-account with the right permissions is enough. You can remove access when the job is done, and any tokens are created under your account so they can be revoked anytime.",
      },
    ],
    related: ["zapier-expert", "make-automation-expert", "api-integration-developer", "landing-page-developer"],
  },
];
