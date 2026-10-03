// Software service landing pages (rendered by components/seo/ServiceLanding.jsx).
// Each entry targets a cluster of buyer searches from the Oct 2026 Keyword Planner study.
// These five carry the highest-value searches in the study; each has its own buyer:
//   custom-software-development — SMB owner replacing spreadsheets and manual work
//   mobile-app-development      — business or startup that needs an iPhone + Android app
//   saas-development            — founder selling software by subscription to many customers
//   mvp-development             — pre-validation founder who needs evidence, not a product
//   web-app-development         — team that needs browser software on a stack they own

export const softwareServicePages = [
  {
    slug: "custom-software-development",
    category: "other",
    eyebrow: "Custom software development",
    metaTitle: "Custom Software Development for Small Business — Fixed Price",
    metaDescription:
      "Custom software development for small and mid-size businesses: internal tools, portals and integrations that replace spreadsheets. Fixed prices, $99 to $4,999.",
    keywords: [
      "custom software development",
      "custom software development company",
      "software development company",
      "hire software developer",
      "custom software for small business",
    ],
    h1: "Custom software development",
    h1Accent: "that replaces the spreadsheet",
    intro:
      "Custom software development for small and mid-size teams that run on spreadsheets, inboxes and retyping. Describe the process that wastes your week; within about a minute an AI agent sends a written plan and one fixed price, from $99 for a small tool to $4,999 for a full internal system.",
    tiers: [
      {
        name: "Single-purpose tool",
        billing: "one-time",
        priceUsd: 599,
        timeline: "4–6 days",
        forWho: "One repetitive job, like building quotes or merging exports, eats hours every week.",
        includes: [
          "A fixed scope and price agreed before any work starts",
          "A small web tool or script with a simple screen for your team",
          "Existing data imported from your spreadsheets or CSV files",
          "Plain-English instructions for the people who will use it",
          "Two revision rounds after your team tries it",
        ],
      },
      {
        name: "Internal system",
        billing: "one-time",
        priceUsd: 2999,
        timeline: "3–4 weeks",
        forWho: "A whole process, such as orders, jobs or approvals, is scattered across sheets and email threads.",
        includes: [
          "A database designed around your records, not a generic template",
          "Sign-in with separate roles for staff, managers and admins",
          "Screens for the daily workflow plus a reporting view",
          "One or two integrations, such as accounting, email or your online store",
          "Code and hosting set up in accounts registered to your business",
          "Engineer review before handover",
        ],
      },
      {
        name: "Retainer",
        billing: "monthly",
        priceUsd: 399,
        timeline: "Ongoing",
        forWho: "You already run software, ours or anyone's, and the change list never really ends.",
        includes: [
          "As many small requests as you like, handled one by one",
          "Typical small request done within 1–3 business days",
          "New fields, reports, exports, permissions and fixes",
          "Larger features quoted separately as fixed-price jobs",
          "Month to month, cancel any time",
        ],
      },
    ],
    tasks: [
      { title: "Merge three weekly CSV exports into one clean management report", price: 199, days: 2 },
      { title: "Sync new store orders into your accounting software every hour", price: 399, days: 4 },
      { title: "Turn your pricing rules into a quote calculator that emails a branded PDF", price: 699, days: 6 },
      { title: "Replace a shared order spreadsheet with a form, database and status board", price: 999, days: 8 },
      { title: "Inventory tracker with barcode lookup, low-stock alerts and a weekly summary", price: 1999, days: 14 },
      { title: "Supplier portal where vendors confirm purchase orders and delivery dates", price: 2499, days: 18 },
    ],
    overviewTitle: "Custom software at small-business scale",
    overview: [
      "Most small and mid-size businesses don't need a giant platform. They need the one process held together by a spreadsheet, a shared inbox and someone retyping the same order into three systems to finally work properly. At this scale, custom software development means an internal tool, a client or supplier portal, or an integration that moves data between apps you already pay for, shaped around how your team actually works instead of how an off-the-shelf product assumes you work.",
      "Start by describing the process, not the technology. Tell the agent what comes in, who touches it, what goes out and where it breaks today. It answers with a written proposal covering screens, roles, the fields each record holds, integrations, a delivery date and one fixed price. You can ask questions, cut scope or add to it before paying, and the price moves with the scope. Small tools usually land between $199 and $999; a full internal system with roles and reporting typically costs $1,999 to $4,999.",
      "Marketplace jobs stop at $4,999, and we say so up front. That ceiling covers a focused internal system with a handful of screens, roles and integrations. It does not cover an ERP replacement, software that must talk to a dozen legacy databases, or anything needing formal compliance audits. Those go through our custom projects service, which begins with a scoping call and ends in a fixed-scope plan. Often the smarter move is to split the work: ship the part that hurts most as a marketplace job, then decide on the rest with real usage in hand.",
      "AI agents write the code, and a GrahAI engineer checks each delivery before it reaches you. Two revision rounds are included, and if the agreed scope proves undeliverable, your payment comes back in full. Everything delivered belongs to you: source code, database and hosting all sit in your name, so any developer can pick it up later. After kickoff you add us as a collaborator on the accounts the job needs; nobody will ask you for a password in chat. Once the build ships, a Retainer keeps change requests moving.",
    ],
    compare: {
      columns: ["GrahAI agents", "Software development company", "Full-time hire", "No-code tools"],
      rows: [
        { label: "Upfront cost", values: ["Fixed price, $99 to $4,999 per job", "Custom quote, often after a paid discovery phase", "Salary, benefits and recruiting costs", "Per-seat monthly subscriptions"] },
        { label: "First delivery", values: ["Days for small tools, up to 30 days for systems", "Discovery first, then the build", "Weeks or months to recruit and onboard", "Hours or days, if it fits a template"] },
        { label: "Fits your exact process", values: ["Yes, scoped to your workflow in writing", "Yes", "Yes, over time", "Only within the tool's limits"] },
        { label: "Who owns the code", values: ["You, in your own repository", "Usually you; check the contract", "Your company", "No code; data lives on the vendor's platform"] },
        { label: "Quality check", values: ["Engineer review on every delivery", "Internal QA, varies by firm", "Your own code review, if any", "Whatever the vendor tests"] },
        { label: "Large or regulated systems", values: ["Over $4,999 becomes a scoped custom project", "Strong fit with a dedicated team", "Strong fit for long-term ownership", "Poor fit"] },
        { label: "If you stop", values: ["Cancel the plan and keep everything", "Exit terms per contract", "Notice periods and handover", "Export limits can trap your data"] },
      ],
    },
    answers: [
      {
        q: "How much does custom software cost for a small business?",
        a: "With GrahAI agents, every job has one fixed price agreed before work starts. A script or single-purpose tool usually costs $199 to $999. An internal system with sign-in, roles, a few workflows and one or two integrations usually costs $1,999 to $4,999 and takes two to four weeks. Many software development companies begin with a paid discovery phase before they quote the build itself. If your project is bigger than $4,999, we scope it as a custom project rather than stretching a marketplace job to fit.",
      },
      {
        q: "Should I hire a software developer or a software development company?",
        a: "Hire a developer when you have a continuous stream of work and someone able to manage them; a full-time salary only pays off when there is a full-time workload. Choose a software development company when the project is large, long-running or regulated and you want a team with project management built in. For a defined tool or system under $4,999, a fixed-price job usually costs less than either, and a monthly Retainer covers the ongoing changes a part-time developer would normally handle.",
      },
      {
        q: "When should a business replace spreadsheets with custom software?",
        a: "Watch for these signs: several people edit the same sheet and overwrite each other, someone retypes rows into another system, nobody can tell who changed what, formulas break whenever a column is added, or customers email asking for status updates you have to look up by hand. One of these is a nuisance. Three or more usually means a simple database-backed tool with sign-in, roles and a change history is worth pricing out, and posting a job tells you that price in about a minute.",
      },
    ],
    faqs: [
      {
        q: "What does a custom software development company build for small businesses?",
        a: "Mostly unglamorous, high-value tools: internal apps for quoting, inventory, scheduling and approvals; portals for customers or suppliers; admin panels on top of existing databases; and integrations that sync data between products like Shopify, QuickBooks, Xero, HubSpot and Google Workspace. Most run in the browser, so staff can use them on a laptop or phone without installing anything.",
      },
      {
        q: "Do I need to write a technical specification first?",
        a: "No. Describe the job in plain English: what happens today, who is involved, and what you want to happen instead. Screenshots of the spreadsheet or a sample of the data help a lot. The agent turns that into a written scope with screens, roles and rules, and you can correct anything before you pay.",
      },
      {
        q: "Can you work with the software we already use?",
        a: "Usually, if it has an API, webhooks, an export or a database we can connect to. The agent checks what your tools allow before quoting. When a system has no way in, such as an old desktop program with no export, the proposal says so and suggests a workaround like a scheduled file drop, rather than promising an integration that won't hold up.",
      },
      {
        q: "What happens if my project is bigger than $4,999?",
        a: "There are two routes. We can split it into phases, each its own fixed-price job, so the most painful part works first. Or, for systems that need to be designed as a whole, our custom projects service starts with a scoping call and quotes a fixed-scope build. The agent will tell you which route fits your brief.",
      },
      {
        q: "Who owns the software and the data?",
        a: "You do. Source code goes into a repository in your account, the database and hosting are registered to you, and your records never sit on a platform you can't export from. There is no license fee and no lock-in, so another developer or agency can take over the code whenever you choose.",
      },
      {
        q: "How do I pay, and can I pay in rupees?",
        a: "Payment is by secure card checkout through Razorpay once you accept the proposal. Buyers outside India pay in US dollars by international card; buyers in India can pay in rupees by UPI or card. Posting a job and reading the agent's proposal require no sign-up.",
      },
    ],
    related: ["/web-app-development", "/ai-automation-services", "/hire/api-integration-developer", "/hire/full-stack-developer", "/services", "/hire/retainer"],
    plan: "retainer",
  },
  {
    slug: "mobile-app-development",
    category: "mobile",
    eyebrow: "Mobile app development",
    metaTitle: "Mobile App Development Company — iOS & Android, Fixed Price",
    metaDescription:
      "Mobile app development for iOS and Android with Flutter or React Native. Fixed-price app MVPs up to $4,999, engineer-reviewed, released from your store accounts.",
    keywords: [
      "mobile app development company",
      "app development company",
      "app development services",
      "startup app development",
      "marketplace app development",
    ],
    h1: "Mobile app development company",
    h1Accent: "for iPhone and Android",
    intro:
      "A mobile app development company that prices the work before it builds anything. Describe your app, and an AI agent sends back the screens, backend, delivery date and one fixed price within about a minute. Cross-platform apps in Flutter or React Native, from $99 fixes to MVPs up to $4,999.",
    tiers: [
      {
        name: "Feature for an existing app",
        billing: "one-time",
        priceUsd: 499,
        timeline: "3–6 days",
        forWho: "Your app is live and needs a new screen, push notifications or a payment fix.",
        includes: [
          "Work inside your current Flutter or React Native codebase",
          "Tested builds for both iOS and Android",
          "Any SDK or package updates the change depends on",
          "A pull request with notes on what changed",
          "Two revision rounds",
        ],
      },
      {
        name: "Cross-platform MVP",
        billing: "one-time",
        priceUsd: 3999,
        timeline: "3–4 weeks",
        forWho: "A startup or business needs its first app, with a few core screens and real user accounts.",
        includes: [
          "A handful of core screens, listed one by one in the proposal",
          "Sign-in, user profiles and a hosted backend with a database",
          "Card payments or in-app purchases, matched to store rules",
          "Release builds uploaded from your own developer accounts",
          "Source code in a repository you own",
          "Engineer review before handover",
        ],
      },
      {
        name: "Retainer Plus",
        billing: "monthly",
        priceUsd: 799,
        timeline: "Ongoing",
        forWho: "Your app is out and the backlog spans the app, its backend and the admin panel.",
        includes: [
          "Two requests in progress at a time",
          "Priority in the delivery queue",
          "Bug fixes, small features and yearly OS update chores",
          "Each delivery reviewed by an engineer",
          "Stop whenever you like",
        ],
      },
    ],
    tasks: [
      { title: "Add push notifications with per-user preferences to an existing Flutter app", price: 299, days: 3 },
      { title: "Prepare release builds and store listings, uploaded from your developer accounts", price: 399, days: 3 },
      { title: "Update an old React Native app to current SDKs and fix the crashes that follow", price: 599, days: 5 },
      { title: "Loyalty app with QR check-in, a points balance and a staff scanner screen", price: 2499, days: 18 },
      { title: "Field-team app with checklists, photos and offline notes that sync later", price: 3499, days: 24 },
      { title: "Marketplace app MVP with listings, search, booking requests and an admin panel", price: 4999, days: 30 },
    ],
    overviewTitle: "What an app development company should tell you up front",
    overview: [
      "Plenty of app projects go wrong before a line of code exists: the scope was a feature list with no screens, the quote was an estimate, and nobody explained what Apple and Google add to the timeline. Our app development services start from the other end. The proposal lists each screen, what the user can do on it, what the backend stores, which services it connects to and when it ships, all for one fixed price. Change the scope while chatting with the agent and the price updates before you pay.",
      "We build cross-platform apps with Flutter or React Native, so a single codebase runs on iPhone and Android. That suits most business apps and most startup app development: booking, ordering, loyalty, field work, member communities and two-sided listings. Under $4,999 you can realistically get an MVP with a handful of core screens, sign-in, a hosted backend and database, push notifications and payments. You won't get a social network, live video, complex offline sync across many devices or heavy custom animation in that budget.",
      "Builds go to the stores from your own Apple Developer and Google Play Console accounts, so the listing, the ratings and the revenue are yours from day one. Apple and Google decide store review, not us, so nobody can honestly promise approval. What we can do is build to their published guidelines, prepare the listing details and privacy answers they ask for, and use your revision rounds to address reviewer notes about the parts we built.",
      "Sometimes a full app team is the right hire instead. If your app needs native Swift or Kotlin for deep hardware work, must pass a security audit for banking or health data, or will have a dozen people shipping releases every week, a dedicated agency or in-house team fits better, as does our custom projects service for builds beyond $4,999. For anything smaller, AI agents write the app, a GrahAI engineer reviews it before you see it, and you own the repository, backend accounts and store listings.",
    ],
    compare: {
      columns: ["GrahAI agents", "App development company", "Freelance app developer", "No-code app builder"],
      rows: [
        { label: "Pricing", values: ["One fixed price per job, up to $4,999", "Estimate, often several thousand dollars and up", "Hourly or by milestone, varies widely", "Monthly subscription per app"] },
        { label: "iPhone and Android", values: ["Both, from one Flutter or React Native codebase", "Both, sometimes as two native apps", "Depends on the developer's skills", "Both, within the builder's components"] },
        { label: "Custom backend", values: ["Included when the scope needs one", "Yes, often a separate line item", "Sometimes subcontracted", "Limited to built-in data features"] },
        { label: "Store accounts", values: ["Yours; we upload as a team member", "Often yours, sometimes theirs", "Varies; agree before starting", "Yours, published through the builder"] },
        { label: "Source code", values: ["Full code in your repository", "Usually yours after final payment", "Usually yours; confirm in writing", "Export options vary by builder"] },
        { label: "Review and recourse", values: ["Engineer review, two revisions, refund if undeliverable", "QA team; warranty terms vary", "Self-tested", "Your responsibility"] },
        { label: "Large apps", values: ["Phased jobs or a scoped custom project", "Strong fit", "Risky for one person", "Runs into platform limits"] },
      ],
    },
    answers: [
      {
        q: "How much does it cost to build a mobile app for a small business?",
        a: "For a focused app, our fixed prices fall into three rough ranges. Changes to an app you already have cost $149 to $999. A simple companion app, such as loyalty, bookings or a member directory on an existing backend, is usually $1,999 to $2,999. A cross-platform MVP with sign-in, its own backend, a handful of core screens and payments runs $3,499 to $4,999. Apps that need more than that become phased jobs, or a custom project that starts with a scoping call.",
      },
      {
        q: "Can one app work on both iPhone and Android?",
        a: "Yes. Flutter and React Native let one codebase produce both an iOS and an Android app, which spares you from building and maintaining two separate apps for most business software. The trade-off is that a few features, like home-screen widgets, watch apps or deep Bluetooth work, still need some native code. If your app depends on one of them, the agent flags it in the proposal and prices it in rather than discovering it halfway through.",
      },
      {
        q: "Should I hire an app development company or a freelancer?",
        a: "It depends on size and risk. An app development company brings project managers, designers and QA, which is worth paying for on large, long or regulated projects. A freelancer can cost less, but you carry the risk if they disappear mid-build. A fixed-price agent job sits between the two: one written scope, engineer review before delivery, two revision rounds and a full refund if the agreed scope can't be delivered.",
      },
    ],
    faqs: [
      {
        q: "Do you design the app screens too?",
        a: "We build clean, standard screens using your brand colors and logo, following platform conventions so the app feels at home on both phones. If you already have Figma designs, we build from them. We don't take design-only jobs, so if you want a fully custom visual identity, bring designs from a designer first.",
      },
      {
        q: "What backend do you use for mobile apps?",
        a: "Usually a managed service such as Firebase or Supabase for sign-in, database, file storage and push notifications, because it is quick to build on and inexpensive at small scale. If you already have an API, the app connects to that instead. Every account is opened in your name, or handed over to you when the job closes.",
      },
      {
        q: "Can you build a marketplace app?",
        a: "Yes, with a tight first version. Marketplace app development under $4,999 usually covers listings, search and filters, booking or enquiry requests, profiles for both sides and an admin panel to approve sellers. Split payments with automatic payouts, ratings and in-app chat each add cost, so the agent suggests which to defer until both sides of the market are actually using it.",
      },
      {
        q: "Can you submit my app to Google Play and the App Store for me?",
        a: "We prepare release builds and upload them from your Apple Developer and Google Play Console accounts once you add us as a team member. You create those accounts yourself, since the stores verify the owner's identity and charge their own fees. Approval is Apple's and Google's decision; we follow their guidelines and handle reviewer notes about our work.",
      },
      {
        q: "How long does it take to build a mobile app?",
        a: "Small changes to an existing app take one to five days. A companion app on an existing backend usually takes two to three weeks, and a cross-platform MVP with its own backend three to four weeks. Store review then adds time that neither of us controls, so plan your launch date with a buffer.",
      },
      {
        q: "Who maintains the app after launch?",
        a: "Phones and app stores change every year, so apps need SDK updates even when nothing looks broken. Our Retainer covers any app, ours or someone else's, with requests worked one at a time. Retainer Plus runs two requests at once with priority, which suits apps whose backend and admin panel change as often as the app itself.",
      },
    ],
    related: ["/convert-website-to-app", "/app-development-cost", "/hire/flutter-developer", "/hire/react-native-developer", "/hire/firebase-developer", "/mvp-development"],
    plan: "retainer",
  },
  {
    slug: "saas-development",
    category: "other",
    eyebrow: "SaaS development",
    metaTitle: "SaaS Development Company — Build a SaaS at a Fixed Price",
    metaDescription:
      "SaaS development for founders: multi-tenant workspaces, sign-in, subscription billing and an admin panel. A realistic first version at a fixed price, then phases.",
    keywords: [
      "saas development",
      "saas development company",
      "saas development services",
      "build a saas",
      "how to build a saas",
      "build a saas with ai",
    ],
    h1: "SaaS development",
    h1Accent: "with billing done properly",
    intro:
      "SaaS development services for founders and domain experts who want to sell software by subscription. An AI agent scopes your first version in about a minute: workspaces, sign-in, billing, an admin panel and the one feature customers pay for, at one fixed price. Later phases are quoted separately.",
    tiers: [
      {
        name: "Subscription layer",
        billing: "one-time",
        priceUsd: 1499,
        timeline: "8–12 days",
        forWho: "You have a working app and now need it to charge many customers every month.",
        includes: [
          "Stripe, Paddle or Razorpay subscriptions with monthly and annual plans",
          "Free trials, upgrades, downgrades and cancellations",
          "Webhooks that keep each account's plan status in sync",
          "Plan limits enforced inside the app, not just on the pricing page",
          "A billing page where customers update cards and download invoices",
        ],
      },
      {
        name: "SaaS version one",
        billing: "one-time",
        priceUsd: 4999,
        timeline: "4 weeks",
        forWho: "You're starting from an idea or a prototype and need a first version you can sell.",
        includes: [
          "Workspaces with invites, roles and data kept separate per customer",
          "Email, magic-link or Google sign-in",
          "One core feature built properly, end to end",
          "Subscription billing with trials and plan limits",
          "An admin panel showing accounts, plans and usage",
          "Deployed to cloud accounts you own",
        ],
      },
      {
        name: "Retainer Plus",
        billing: "monthly",
        priceUsd: 799,
        timeline: "Ongoing",
        forWho: "Paying customers are sending feedback and you want two improvements moving at once.",
        includes: [
          "Two requests in progress at a time, with priority",
          "Small features, plan changes, emails and reports",
          "Fixes for issues raised in customer support tickets",
          "An engineer checks each change before it ships",
          "No minimum term",
        ],
      },
    ],
    tasks: [
      { title: "Trial onboarding emails and an in-app setup checklist for new accounts", price: 349, days: 3 },
      { title: "Add annual plans and coupon codes to an existing Stripe subscription setup", price: 399, days: 4 },
      { title: "Usage metering that counts actions per workspace and enforces plan limits", price: 799, days: 6 },
      { title: "Admin console to search accounts, change plans and pause workspaces", price: 1299, days: 9 },
      { title: "Team workspaces with invites, roles and per-workspace data separation", price: 1499, days: 10 },
      { title: "SaaS version one: sign-up, workspaces, one core feature, billing and admin", price: 4999, days: 30 },
    ],
    overviewTitle: "How to build a SaaS without building everything at once",
    overview: [
      "A SaaS product is really two products glued together: the feature customers pay for, and the machinery that lets many separate customers pay for it safely. Founders tend to underestimate the second part. Every customer needs a workspace whose data nobody else can see, users need to sign in and invite teammates, plans need limits the app actually enforces, and when a card fails or someone downgrades, the app has to notice. Get those foundations right in version one and every later feature costs less to add.",
      "Multi-tenancy is the part to get right first. For most early SaaS products that means one database where every record carries a workspace ID, with access rules checked on the server for every request, so a customer can never load someone else's data by editing a URL. Separate databases per customer are rarely worth the cost until large customers demand them. Sign-in starts with email, magic links or Google; enterprise single sign-on can wait until a buyer asks for it.",
      "Billing is where quick prototypes usually fall apart. A pricing page with a checkout button is easy; handling trials, proration, failed payments, refunds, taxes and webhook retries is not. We build subscriptions on Stripe, Paddle or Razorpay, keep plan status in sync through webhooks, and give you an admin panel showing every account, its plan and its usage. If you sell worldwide and would rather not handle sales tax yourself, the agent will explain the merchant-of-record option before you choose a provider.",
      "A realistic first version fits in one fixed-price job of up to $4,999: the foundations plus one core feature, done properly. Everything else ships in phases, each quoted on its own once paying users show you what matters. We run our own AI product, GrahAI, used by more than 100,000 people in 9 languages, so we build with the same practical worries in mind: who can see what, what happens at renewal, and how support finds an account fast. You own the code and every account it runs on.",
    ],
    compare: {
      columns: ["GrahAI agents", "SaaS development agency", "Technical co-founder", "No-code SaaS builder"],
      rows: [
        { label: "Cost of version one", values: ["Fixed, up to $4,999 per phase", "Custom quote, typically a multi-month engagement", "Equity, often a large share", "Low monthly fee that rises with users"] },
        { label: "Customer data separation", values: ["Built in from the first phase", "Yes, if specified", "Depends on their experience", "Handled by the platform, within its limits"] },
        { label: "Subscription billing", values: ["Stripe, Paddle or Razorpay with webhooks and plan limits", "Yes", "Yes, eventually", "Plugins with limited edge-case handling"] },
        { label: "Time to first paying user", values: ["About four weeks for a focused version one", "Usually months", "Depends on their availability", "Fast for simple products"] },
        { label: "Code ownership", values: ["Your repository and your accounts", "Yours per contract", "Shared through the company", "Tied to the platform"] },
        { label: "Product work after launch", values: ["Retainer or Retainer Plus, cancel any time", "Monthly retainer; terms vary", "Included, if they stay", "You build it yourself"] },
        { label: "Good fit when", values: ["You know the core feature and want to sell soon", "A funded team needs a full product squad", "You want a long-term partner sharing the risk", "Simple products and early validation"] },
      ],
    },
    answers: [
      {
        q: "How do I build a SaaS product?",
        a: "Start with one painful problem for one type of customer, and confirm a few of them will pay before writing much code. Then build version one: workspaces, sign-in, subscription billing, an admin view and the single feature that solves the problem. Launch to a small group, charge from the start, and watch what they actually use. Add features in phases based on that usage, not your original wishlist. The usual mistakes are skipping the first step or building five features instead of one.",
      },
      {
        q: "How much does it cost to build a SaaS?",
        a: "With GrahAI agents, a focused version one with workspaces, sign-in, billing, admin and one core feature is a fixed $3,999 to $4,999, delivered in about four weeks. Adding subscriptions to an app you already have is usually $999 to $1,499. After launch, ongoing work can run on a Retainer at $399 a month or Retainer Plus at $799. A SaaS that needs several large modules at once is better treated as a custom project, which starts with a scoping call.",
      },
      {
        q: "Can you build a SaaS with AI?",
        a: "Yes, and that is exactly how we work. AI agents build from a written scope, then a GrahAI engineer reviews the result, paying close attention to the areas rushed prototypes most often get wrong: data separation between customers, server-side permission checks and billing webhooks. If you'd rather prompt an AI app builder yourself, that's a fine way to test an idea. Bring us in when you need multi-tenant accounts and billing you can trust with real money.",
      },
    ],
    faqs: [
      {
        q: "What does a SaaS development company actually deliver?",
        a: "A working, deployed product, not just designs: the web app, its database, sign-in, billing, an admin panel, transactional emails and the core feature, plus the source code and setup notes. With us, the proposal lists every piece with a fixed price and delivery date, so you know what version one includes before you pay.",
      },
      {
        q: "Should my SaaS have a separate database for each customer?",
        a: "Usually not at the start. A shared database with a workspace ID on every record and strict server-side checks is simpler to run, cheaper to host and easier to update. Separate databases make sense when large customers contractually require isolation or data residency, and that can be added as a later phase.",
      },
      {
        q: "Which payment provider should I use for subscriptions?",
        a: "Stripe is the common default for global SaaS. Paddle acts as merchant of record and handles sales tax for you. Razorpay suits products selling mainly to Indian customers who pay by UPI and cards. The agent asks where your customers are and recommends one; you open the account in your name and add us as a team member.",
      },
      {
        q: "Can you add AI features to my SaaS?",
        a: "Yes. Common examples are summarizing customer documents, drafting replies, classifying incoming records or answering questions over a customer's own data. AI usage can be metered per workspace and tied to plan limits, so one heavy customer can't wipe out your margin. Larger AI-first products are covered on our custom AI SaaS development page.",
      },
      {
        q: "What's not included in a $4,999 version one?",
        a: "Typically: more than one major feature, native mobile apps, enterprise single sign-on, complex role hierarchies, a public API for customers, data residency in several regions and formal security certifications. None of these are impossible; they just don't belong in a first version. The agent lists what's out of scope in writing, so nothing is assumed.",
      },
      {
        q: "Who hosts the SaaS and pays the running costs?",
        a: "You do, on cloud, database, email and payment accounts in your name. That keeps your data and your customers' data under your control and means nobody can hold the product hostage. Early-stage running costs are usually modest, and the proposal notes which services carry monthly fees so there are no surprises.",
      },
    ],
    related: ["/mvp-development", "/custom-ai-saas-development", "/hire/stripe-integration-developer", "/hire/nextjs-developer", "/web-app-development", "/services"],
    plan: "retainer",
  },
  {
    slug: "mvp-development",
    category: "other",
    eyebrow: "MVP development",
    metaTitle: "MVP Development Services — Validate Your Idea at a Fixed Price",
    metaDescription:
      "MVP development for founders: one core workflow, built in weeks at a fixed price under $4,999, so you can test demand before you raise money or overbuild.",
    keywords: [
      "mvp development",
      "mvp development services",
      "mvp development company",
      "build an mvp with ai",
    ],
    h1: "MVP development",
    h1Accent: "that proves the idea first",
    intro:
      "MVP development services for founders who need evidence before they spend big. Describe the one thing your product must prove, and within a minute or so an AI agent proposes the smallest build that proves it, with a delivery date and one fixed price, often well under $4,999.",
    tiers: [
      {
        name: "Demand test",
        billing: "one-time",
        priceUsd: 299,
        timeline: "2–3 days",
        forWho: "You have an idea and want to know whether strangers will sign up or pre-order.",
        includes: [
          "Landing page with your offer, pricing and a sign-up or pre-order button",
          "Waitlist stored in a sheet or database you own",
          "Analytics events on every step of the page",
          "Layout and form built from your own wording",
          "Two revision rounds",
        ],
      },
      {
        name: "Core-workflow MVP",
        billing: "one-time",
        priceUsd: 2499,
        timeline: "2–3 weeks",
        forWho: "People want it; now you need a working product that does the one main thing.",
        includes: [
          "Sign-in and a simple account area",
          "The one core workflow, built end to end",
          "An admin view so you can see what users do",
          "Payments, if charging is part of the test",
          "Funnel analytics showing where testers drop off",
          "A written later list of everything deliberately left out",
        ],
      },
      {
        name: "Retainer",
        billing: "monthly",
        priceUsd: 399,
        timeline: "Ongoing",
        forWho: "The MVP is live and you're changing something every week based on user feedback.",
        includes: [
          "Unlimited small changes, worked one at a time",
          "Small changes usually ready in 1–3 business days",
          "Flow, wording, pricing and onboarding tweaks between interviews",
          "Bigger features quoted as separate fixed-price jobs",
          "Cancel once you've found what works",
        ],
      },
    ],
    tasks: [
      { title: "Add analytics events and a sign-up funnel to see where testers drop off", price: 199, days: 2 },
      { title: "Smoke-test landing page with pricing and a pre-order button", price: 249, days: 2 },
      { title: "Concierge MVP: request form, admin queue and email updates while you deliver by hand", price: 799, days: 6 },
      { title: "AI MVP that turns an uploaded document into a structured summary users can edit", price: 1499, days: 10 },
      { title: "Matching MVP that pairs two sides on approved criteria and sends email introductions", price: 1999, days: 14 },
      { title: "Core-workflow MVP with sign-in, the main action, results history and payments", price: 2999, days: 21 },
    ],
    overviewTitle: "Validation first: what an MVP is actually for",
    overview: [
      "An MVP is an experiment with a user interface. Its job is to answer one risky question, such as whether gym owners will pay to automate class waitlists, as cheaply and quickly as possible. That is a different goal from building version one of a product, and it changes every decision: what to build, what to fake, what to do by hand and when to stop. Founders who treat the MVP as a smaller copy of the final product tend to spend months and most of their budget before learning anything.",
      "Scope discipline is the whole game. Pick the one workflow that proves your idea: the client books, the tool generates the report, the buyer gets matched. Everything around it can be manual, borrowed or skipped. Admin approvals can be you clicking a button, notifications can be plain emails, and settings pages can wait. When a brief lists fifteen features, the agent proposes the two or three that test the core assumption and parks the rest on a written later list with rough prices.",
      "A well-scoped MVP usually fits comfortably under the $4,999 job ceiling. A demand-test landing page costs about $249 to $299 and takes two or three days. A concierge MVP, where software collects requests and you deliver the service by hand, is around $799. A real core-workflow product with sign-in and payments usually lands between $1,999 and $2,999 in two to three weeks. If your MVP genuinely seems to need more than that, treat it as a signal to cut scope before spending more.",
      "What comes after matters as much as the build. Once testers arrive, you'll want to change the onboarding, rename things, move a button and add the one feature everyone asks for. A Retainer handles those small changes one at a time, usually in one to three business days, and you cancel once the product settles. If the test fails, you've spent weeks, not a year. If it works, you own clean, engineer-reviewed code that a hired team or a later SaaS build can extend.",
    ],
    compare: {
      columns: ["GrahAI agents", "MVP development company", "Freelance marketplace", "DIY with AI app builders"],
      rows: [
        { label: "What you pay", values: ["One fixed price, often under $3,000", "Custom quote, usually after paid discovery", "Hourly or fixed bids; quality varies", "Monthly tool fees plus your time"] },
        { label: "Help cutting scope", values: ["Agent trims the brief to one core workflow", "Workshops and discovery, usually paid", "Builds what you ask for", "None; every decision is yours"] },
        { label: "Time to something testable", values: ["2 days for a demand test, 2–3 weeks for a product", "Commonly several weeks to months", "Depends on the freelancer", "Hours for a demo, longer to make it reliable"] },
        { label: "Code checked by", values: ["A GrahAI engineer, before you see it", "Internal QA", "Varies by freelancer", "Nobody, unless you read code"] },
        { label: "When it breaks", values: ["Two revision rounds; refund if scope isn't delivered", "Warranty period, per contract", "Platform dispute process", "You debug it or start over"] },
        { label: "After the test", values: ["Retainer for weekly changes, cancel any time", "Ongoing retainer or a new contract", "Re-hire, if they're still available", "Keep prompting"] },
      ],
    },
    answers: [
      {
        q: "How much does MVP development cost?",
        a: "It depends on what the MVP has to prove. With GrahAI agents, a landing-page demand test costs $249 to $299, a concierge MVP around $799, an AI-feature MVP from $1,499, and a core-workflow product with sign-in and payments usually $1,999 to $2,999. The ceiling for a single job is $4,999. MVP development companies often quote several thousand dollars and up after a discovery phase, which suits funded teams but is a lot to spend before you know anyone wants the product.",
      },
      {
        q: "What should an MVP include?",
        a: "Only what it takes to test your riskiest assumption with real users: a way in, such as a sign-up or a shared link; the one core workflow; a way to see what users did; and a payment step if willingness to pay is the question. Leave out settings pages, multiple user roles, native mobile apps, dashboards nobody asked for, and polish. If a feature doesn't change whether the test passes or fails, it belongs on the later list.",
      },
      {
        q: "Can I build an MVP with AI?",
        a: "Yes, in two ways. You can prompt an AI app builder yourself, which works well for a clickable demo but leaves you debugging sign-in, data and payments alone when real users arrive. Or you can post a job: our AI agents build the MVP from a written scope, an engineer checks it before handover, and two revision rounds are included. A sensible path uses both: sketch the idea with a tool, then hand the version real users will touch to us.",
      },
    ],
    faqs: [
      {
        q: "What makes a good MVP development company?",
        a: "One that argues with your feature list. A good partner asks what you are trying to learn, cuts scope to match, writes down what's excluded, and gives a fixed price and date. Be wary of anyone who quotes your entire wishlist without pushback, because that usually means a long, expensive build before your first user.",
      },
      {
        q: "How long does it take to build an MVP?",
        a: "A demand-test landing page takes two to three days. A concierge MVP takes about a week. A core-workflow product with sign-in and payments usually takes two to three weeks, and the largest single job runs up to 30 days. If your MVP would take longer than a month, the scope is probably too big for an MVP.",
      },
      {
        q: "What is a concierge MVP?",
        a: "A product where software handles the customer-facing part and you do the work behind it by hand. For example, customers submit a request through a real form and pay, then you fulfill it manually and send the result by email. It tests demand and pricing for a fraction of the cost of automating everything.",
      },
      {
        q: "Do I need a technical co-founder to build an MVP?",
        a: "Not for the first version. A clear scope, a fixed price and engineer review let a non-technical founder put a working product in front of users. Technical leadership matters later, once the product has traction and architecture decisions start to compound. By then you'll have real usage to show any co-founder or first hire.",
      },
      {
        q: "What if the MVP test fails?",
        a: "Then it did its job cheaply. You keep the code, the data and the accounts, and you've learned what not to build. Sometimes the same build can test a different customer or price point with small changes, which a Retainer handles quickly. If you're ending the project, cancel any plan; there's nothing else to unwind.",
      },
      {
        q: "Will my MVP code be thrown away later?",
        a: "It shouldn't have to be. MVPs are built on mainstream frameworks with an ordinary database, and an engineer reviews the code, so a future team can extend it rather than rewrite it. Some products do get rebuilt later for scale or a new direction, but that should be a business choice, not a rescue from a tangled first version.",
      },
    ],
    related: ["/hire/mvp-developer", "/saas-development", "/ai-app-builder", "/app-development-cost", "/hire/retainer"],
    plan: "retainer",
  },
  {
    slug: "web-app-development",
    category: "web",
    eyebrow: "Web app development",
    metaTitle: "Web App Development — Dashboards, Portals & Tools, Fixed Price",
    metaDescription:
      "Web app development with React, Next.js and Node: dashboards, client portals, booking systems and internal tools, hosted on your accounts. Fixed prices to $4,999.",
    keywords: [
      "web app development",
      "web application development company",
      "web application development",
      "custom web app development",
    ],
    h1: "Web app development",
    h1Accent: "on a stack you own",
    intro:
      "Web app development for teams that need more than a website: dashboards, client portals, booking systems and internal tools that run in any browser. Describe what users should be able to do, and an AI agent returns the screens, tech choices, hosting plan and one fixed price in about a minute.",
    tiers: [
      {
        name: "Dashboard or admin panel",
        billing: "one-time",
        priceUsd: 799,
        timeline: "5–8 days",
        forWho: "Your data already lives in a database or API, and people need to see and act on it.",
        includes: [
          "Read and edit screens on top of your existing database or API",
          "Filters, search and CSV export",
          "Charts for the numbers you check every week",
          "Sign-in restricted to your team",
          "Deployed to a hosting account you control",
        ],
      },
      {
        name: "Portal or booking app",
        billing: "one-time",
        priceUsd: 1999,
        timeline: "2–3 weeks",
        forWho: "Customers or clients need to log in and book, upload, pay or check status themselves.",
        includes: [
          "Customer sign-in with email or Google",
          "Booking, upload or request flows with email notifications",
          "Payments through Stripe or Razorpay where needed",
          "A separate admin side for your staff",
          "Responsive layouts that work on phones",
          "Your own repository holding the complete source",
        ],
      },
      {
        name: "Multi-role web app",
        billing: "one-time",
        priceUsd: 3999,
        timeline: "3–4 weeks",
        forWho: "Several user types with different permissions share one app that talks to your other tools.",
        includes: [
          "Separate roles such as customer, staff, partner and admin",
          "Permission checks on the server for every action",
          "Two or three integrations with tools you already use",
          "An audit log of who changed what",
          "Engineer review and two revision rounds",
        ],
      },
    ],
    tasks: [
      { title: "Fix a broken build and upgrade an outdated Next.js app to a current version", price: 299, days: 3 },
      { title: "Add Google sign-in and role-based access to an existing web app", price: 399, days: 3 },
      { title: "Internal admin panel on top of an existing Postgres database", price: 799, days: 6 },
      { title: "Move a slow React single-page app to Next.js with server-rendered pages", price: 1299, days: 10 },
      { title: "Event registration app with ticket types, QR check-in and attendee export", price: 1499, days: 10 },
      { title: "Appointment booking app with staff calendars, reminders and deposits", price: 1999, days: 14 },
    ],
    overviewTitle: "Website or web app: what you're actually buying",
    overview: [
      "A website mostly shows information. A web app lets people do things: log in, book a slot, upload a file, approve a request, see their own data. That difference drives the cost, because a web app needs accounts, a database, permissions and logic running on a server, not just pages. The upside is reach. A web app runs in any modern browser on laptops, tablets and phones, ships updates instantly without store review, and is usually the quickest way to put working software in front of customers or staff.",
      "Web app requests tend to fall into four shapes. Dashboards turn data you already have into screens people can filter, chart and export. Portals give clients or partners a login to check status, upload documents or pay invoices. Booking systems handle availability, reservations, reminders and deposits. Internal tools replace the admin work your team does in spreadsheets. Each shape has a well-understood structure, which is why an agent can scope one accurately in about a minute and commit to a fixed price.",
      "We deliberately build on mainstream technology: React or Next.js in the browser, Node.js or Python on the server, and Postgres, Supabase or Firebase for data. These are widely used, well documented and easy to hire for, which matters more than novelty. If you already have a codebase in Vue, Laravel, Django or Rails, the agent works within it. Hosting goes on accounts you own, such as your cloud provider, database service and domain registrar, and the code lives in your Git repository.",
      "A web application development company is the right call when you need a long-running team, dedicated project management or a system far beyond $4,999. For a defined app with clear screens and roles, a fixed-price job is faster. AI agents write the code, a GrahAI engineer signs off on it before handover, two revision rounds are included, and a full refund applies if we fall short of the agreed scope. Larger apps can be split into phases or scoped through our custom projects service. After launch, a Retainer handles the steady trickle of changes.",
    ],
    compare: {
      columns: ["GrahAI agents", "Web development agency", "Freelance developer", "Off-the-shelf SaaS"],
      rows: [
        { label: "Pricing model", values: ["Fixed price per job, $99 to $4,999", "Project quote or monthly retainer", "Hourly or fixed bid", "Per-user monthly subscription"] },
        { label: "Built around your workflow", values: ["Yes, screen by screen in the proposal", "Yes", "Yes", "You adapt to the product"] },
        { label: "Technology", values: ["React, Next.js, Node, Postgres or your existing codebase", "The agency's preferred frameworks", "Whatever the freelancer knows", "Not your choice"] },
        { label: "Hosting and accounts", values: ["Your cloud, database and domain accounts", "Sometimes hosted by the agency", "Varies", "Vendor-hosted"] },
        { label: "Delivery time", values: ["Days for small apps, up to 30 days for larger ones", "Weeks to months", "Depends on availability", "Sign up today"] },
        { label: "Review and recourse", values: ["Engineer review, two revisions, refund if scope isn't met", "Contract and warranty terms", "Platform dispute, or none", "Cancel the subscription"] },
        { label: "Changes later", values: ["Retainer from $399 a month, cancel any time", "Change requests billed separately", "Re-hire when available", "Feature requests to the vendor"] },
      ],
    },
    answers: [
      {
        q: "What is the difference between a website and a web app?",
        a: "A website is mostly pages people read, like a homepage, service pages and a contact form. A web app is software people use in the browser: they sign in, create and change records, and see data that belongs to them. Online banking, booking systems and project boards are all web apps. Many businesses need both, a marketing website that attracts customers and a web app for the work customers or staff do once they arrive.",
      },
      {
        q: "How much does a web app cost?",
        a: "Custom web app development with GrahAI agents is priced per job. Small changes to an existing app cost $149 to $399. A dashboard or admin panel on top of existing data is usually $699 to $999. A client portal or booking system with sign-in, notifications and payments typically costs $1,499 to $2,499, and a multi-role app with integrations $2,999 to $4,999. Each job has one fixed price set before you pay. Apps beyond that range become phased jobs or a custom project with a scoping call.",
      },
      {
        q: "Which tech stack should I use for a web application?",
        a: "Pick something mainstream and hireable rather than the newest option. For most business web apps, a React or Next.js interface, a Node.js or Python backend and a Postgres database make a safe default, with Supabase or Firebase when you want sign-in and storage managed for you. If your team already knows a framework like Laravel, Django or Rails, staying with it usually matters more than the framework itself.",
      },
    ],
    faqs: [
      {
        q: "Can you take over a web app another developer started?",
        a: "Yes. Describe what works, what's broken and what's missing, and after kickoff give us collaborator access to the repository and hosting. The first step is often stabilizing the build and clearing blockers before adding features. If the codebase needs a rewrite rather than a fix, the proposal says so plainly instead of patching around it.",
      },
      {
        q: "Will the web app work on phones?",
        a: "Yes. Layouts are responsive, so screens rearrange for phones and tablets. If users need to add it to their home screen or receive notifications, it can be built as a progressive web app. If you need a real App Store or Google Play listing, see our mobile app development or website-to-app pages.",
      },
      {
        q: "Where is the web app hosted, and what will it cost to run?",
        a: "On accounts you own, typically a hosting platform for the app, a managed database and your domain registrar. Small business apps often start on free or low-cost tiers, and the proposal lists every service that carries a monthly fee. You pay those providers directly, so there's no hosting markup from us.",
      },
      {
        q: "How do you handle security and user data?",
        a: "Sign-in uses established libraries or managed auth services, never homemade password storage. Permissions are checked on the server for every action, inputs are validated, and secrets stay in environment settings rather than in the code. An engineer reviews the delivery before you see it. Apps holding health records, card data or other regulated information need a formal compliance audit as a separate project.",
      },
      {
        q: "Can the web app connect to our other tools?",
        a: "Usually. Most business software, including CRMs, accounting tools, payment providers and Google Workspace, offers an API or webhooks. The proposal names each integration and what data moves in which direction. Every extra integration adds to the price, so the agent asks which ones matter on day one and which can wait.",
      },
      {
        q: "Do I get the source code?",
        a: "Yes. The full source code sits in a Git repository under your account, with a README explaining how to run it locally and deploy it. There's no license fee or proprietary framework, so any developer familiar with React or Node can continue the work without asking our permission.",
      },
    ],
    related: ["/hire/react-developer", "/hire/nextjs-developer", "/hire/dashboard-developer", "/hire/nodejs-developer", "/custom-software-development", "/hire/retainer"],
    plan: "retainer",
  },
];
