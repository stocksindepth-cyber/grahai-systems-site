// "Hire a ___" landing pages — mobile apps, AI features, full-stack work and Power BI.
// Schema is shared by every file in content/hire/ and rendered by app/hire/[slug].

export const moreSkills = [
  {
    slug: "mobile-app-developer",
    skill: "mobile app developer",
    article: "a",
    category: "mobile",
    metaTitle: "Hire a Mobile App Developer — Fixed Price from $149 | GrahAI Systems",
    metaDescription:
      "Hire a mobile app developer for iPhone and Android apps, new features or store fixes. Describe your app and an AI agent sends one fixed price in about a minute.",
    keywords: [
      "hire mobile app developer",
      "app developer for hire",
      "app developers",
      "hire developer for app",
      "hire someone to build an app",
      "hire a developer to make an app",
      "mobile app developer for hire",
    ],
    intro:
      "Want to hire someone to build an app, or fix the one you already have? Describe it in plain words. An AI agent sends a fixed price and delivery date in about a minute, and an engineer checks every build.",
    overviewTitle: "Hiring an app developer without the guesswork",
    overview: [
      "When people go looking for app developers, they hit the same wall: quotes that vary wildly for what sounds like the same app, and no easy way to tell who will actually ship. The gap almost always comes from unclear scope. 'An app like Uber' can mean three screens or three years of work. Before anything is priced, the agent turns your idea into a concrete list of screens, user roles and integrations, and quotes exactly that list.",
      "Most apps don't need two separate native codebases. For iPhone and Android together, the agent usually proposes Flutter or React Native, which share one codebase and keep the cost down. Native Swift or Kotlin is recommended only when the app depends on hardware or performance that cross-platform tools handle poorly. If you already run a website, a mobile-friendly web app or a store wrapper may be enough for a first release, and the proposal says so rather than selling you more.",
      "Builds arrive as test versions you install on your own phone through TestFlight or a Google Play testing track, so you judge the app on a real device, not in screenshots. A GrahAI engineer reviews every delivery first. Release builds go out through Apple and Google developer accounts registered to you, which keeps the app, its users and its revenue in your name. Approval is Apple's and Google's call, but fixing rejection reasons caused by our code is part of your two revision rounds.",
    ],
    tasks: [
      { title: "Resolve an App Store rejection over permission prompts or privacy details", price: 149, days: 2 },
      { title: "Add Google and Apple sign-in to an existing app", price: 299, days: 2 },
      { title: "Release pipeline that builds and uploads to TestFlight and Google Play", price: 349, days: 3 },
      { title: "Booking screen with a calendar, open time slots and reminder notifications", price: 599, days: 4 },
      { title: "Turn an existing website into an installable iPhone and Android app", price: 999, days: 7 },
      { title: "First cross-platform app with sign-in, 6–8 screens and a backend", price: 2999, days: 20 },
    ],
    deliverables: [
      "Source code in a repository you own, one codebase for both platforms where possible",
      "Test builds on your own phone through TestFlight and Google Play testing",
      "Release builds uploaded through developer accounts in your name",
      "A short handover guide for shipping future updates",
      "Two revision rounds after testing on real devices",
    ],
    sampleTitle: "Booking app for a two-location physiotherapy clinic",
    sampleBrief:
      "We run two physiotherapy clinics and take bookings by phone. I'd like an iPhone and Android app where patients sign in, pick a clinic, a therapist and a 30-minute slot, get a reminder the day before, and can cancel up to 24 hours ahead. Staff need a simple web page to set each therapist's hours and see the day's appointments. No in-app payments for now.",
    limits:
      "An agent isn't the right hire for apps whose value lies in heavy native engineering, such as Bluetooth medical devices, live video or augmented reality, or for a product that needs a developer in your team's daily standups for months. A dedicated mobile team or agency serves those better.",
    faqs: [
      {
        q: "How much does it cost to hire a mobile app developer here?",
        a: "Store-rejection fixes and small changes start around $149. Single features such as social sign-in or a booking flow cost $299 to $599. Turning a website into a store app is about $999, and a first cross-platform app with sign-in, 6–8 screens and a backend typically costs $2,499 to $4,999. Larger apps become a custom project. You see the fixed price before paying.",
      },
      {
        q: "Do I need separate developers for iPhone and Android?",
        a: "Usually not. Flutter and React Native produce both apps from one codebase, so you pay for one build and one set of changes. Separate native apps make sense when the product is built around device hardware or demanding graphics. The proposal states which approach the agent recommends, and why, before you commit to anything.",
      },
      {
        q: "Can I hire someone to build an app if I'm not technical?",
        a: "Yes, that's exactly who this is for. Describe who will use the app and what they need to do, step by step, in everyday language. The agent asks follow-up questions, then writes the scope as a list of screens and features you can read and edit. You test each delivery on your own phone and decide whether it matches.",
      },
      {
        q: "Who owns the app and the store listing?",
        a: "You do. The app is published under Apple and Google developer accounts you create and pay for, and the code sits in a repository in your name. We work through collaborator access you can remove at any time, so nothing about the app, its users or its earnings depends on us after handover.",
      },
      {
        q: "What happens after the app launches?",
        a: "Phones and stores keep changing: new OS versions, new store requirements, packages that need updating. If GrahAI agents built the app, the Care plan at $79 a month covers fixes and two small changes monthly. For apps built elsewhere, the Retainer at $399 a month takes unlimited requests one at a time. You can also post single jobs whenever needed.",
      },
    ],
    related: ["flutter-developer", "react-native-developer", "firebase-developer", "mvp-developer"],
  },
  {
    slug: "ai-developer",
    skill: "AI developer",
    article: "an",
    category: "ai",
    metaTitle: "Hire an AI Developer — Fixed Price AI Features | GrahAI Systems",
    metaDescription:
      "Hire an AI developer or AI engineer to add document chat, extraction, classification or agents to your product. Fixed price in about a minute, engineer-checked.",
    keywords: [
      "hire ai developer",
      "hire ai engineer",
      "ai integration services",
      "ai developer for hire",
      "add ai to my app",
      "ai integration developer",
      "chat with your documents",
    ],
    intro:
      "Have a product and want AI working inside it: answers from your documents, fields pulled from uploads, tickets sorted automatically? Describe the feature. An AI agent quotes a fixed price in about a minute, and an engineer checks the build.",
    overviewTitle: "AI features that hold up in production",
    overview: [
      "Hiring an AI engineer used to mean a long search and a large salary. For most companies the need is narrower: add one or two AI features to a product that already works. Common requests are a search or chat box that answers from your help center and contracts, a step that pulls invoice numbers and totals from uploaded files, automatic tagging of tickets or customer feedback, and an agent that looks up an order and drafts a reply through your own APIs.",
      "What separates a demo from a feature is evaluation. Before building, the agent asks for 20 to 50 real examples along with the answers you'd expect, and those become a test set the feature has to pass. Document chat returns citations to the source passage and a fallback when nothing relevant turns up. Extraction and classification produce structured fields validated against a schema. Agents get a fixed list of tools, and anything risky waits for a person to approve it.",
      "Cost and data handling are designed in, not discovered later. The agent picks the smallest model that passes your tests, caches repeated work, and sets per-user limits plus a monthly cap, with a projected monthly bill in the handover notes. Usage is billed to a model provider account in your name. GrahAI Systems also runs its own AI product, GrahAI, used by 100,000+ people in 9 languages, and a GrahAI engineer reviews every delivery before it reaches you.",
    ],
    tasks: [
      { title: "Classify incoming support tickets or product feedback into your own categories", price: 199, days: 2 },
      { title: "Evaluation suite and cost report for an AI feature you already run", price: 399, days: 3 },
      { title: "Pull totals, dates and line items from uploaded invoices into your app", price: 499, days: 4 },
      { title: "Semantic search across your product catalog or knowledge base", price: 699, days: 5 },
      { title: "Chat over your help center and PDFs, with every answer citing its source", price: 799, days: 6 },
      { title: "Support agent that looks up orders through your API and drafts replies", price: 1499, days: 10 },
    ],
    deliverables: [
      "Feature code in your repository, with the model behind a swappable adapter",
      "An evaluation set built from your real examples, with results case by case",
      "Per-user limits, a monthly spending cap and a usage cost projection",
      "Logs of inputs, outputs and failures, with personal data masked where needed",
      "Handover notes plus two revision rounds",
    ],
    sampleTitle: "Answer customer questions from our product manuals",
    sampleBrief:
      "We sell industrial pumps and have about 300 PDF manuals and spec sheets. I want a chat box on our support page that answers questions like 'what is the maximum flow rate of model X at 3 bar?' using only those documents, shows which manual and page the answer came from, and admits when the manuals don't cover it. Our site runs on Laravel, and new manuals arrive monthly.",
    limits:
      "An agent isn't the right hire for training a new model from scratch, open-ended research with no finish line, or features where a wrong answer carries medical, legal or financial liability with no person checking it. Those need an accountable in-house team or a specialist firm.",
    faqs: [
      {
        q: "How much does it cost to hire an AI developer for one feature?",
        a: "A classification or tagging step usually costs $199 to $299. Document extraction lands around $499, chat over your own documents with citations is about $799, and agents that call your APIs start near $1,499. Model usage is a separate running cost billed to your own provider account. Every proposal shows a fixed price before you pay.",
      },
      {
        q: "What do AI integration services include here?",
        a: "Everything needed to run the feature safely inside your product: integration code, prompts kept as editable files, output validation, retries, rate limits, a spending cap, logging and an evaluation set. It's delivered into your codebase in the language and framework you already use. A GrahAI engineer checks the test results and the cost estimate before handover.",
      },
      {
        q: "How do you stop the AI from making things up?",
        a: "By limiting what it can draw on and checking what it returns. Document chat answers only from retrieved passages, shows where each answer came from, and declines when nothing relevant is found. Extracted fields are validated against a schema and flagged when confidence is low. The evaluation set measures accuracy on your examples, so you know the error rate before customers do.",
      },
      {
        q: "Will our data be used to train AI models?",
        a: "Your data goes only to the model provider you choose, under your own account and its terms. Many providers state that business API data isn't used for training by default, but confirm that in your provider's current policy. If data must stay in a particular region or on your own servers, say so in the job post and the proposal will account for it.",
      },
      {
        q: "Can you add AI to an app another team built?",
        a: "Yes. After kickoff, give collaborator access to the repository and ideally a staging environment. The agent reads how the app is structured, adds the feature in the same style, and delivers it as a branch or pull request your team can inspect before merging. Secrets stay in your environment variables, never in the code or in messages.",
      },
    ],
    related: ["ai-agent-developer", "chatgpt-integration", "ai-chatbot-developer", "python-developer"],
  },
  {
    slug: "full-stack-developer",
    skill: "full-stack developer",
    article: "a",
    category: "web",
    metaTitle: "Hire a Full-Stack Developer — Fixed Price from $99 | GrahAI Systems",
    metaDescription:
      "Hire a full-stack developer for features that span front end, API and database. Post the job, get a fixed price from an AI agent in a minute, and own the code.",
    keywords: [
      "hire full stack developer",
      "hire developers",
      "hire developers for startup",
      "full stack developer for hire",
      "full stack web developer",
      "freelance full stack developer",
    ],
    intro:
      "Need a feature that touches the screen, the API and the database at once? Describe it. An AI agent replies in about a minute with a fixed price, builds across the stack, and an engineer checks it before you merge.",
    overviewTitle: "One job across the whole stack",
    overview: [
      "Full-stack work is any change that doesn't stop at one layer. Adding team accounts means new database tables, permission checks in the API and invite screens in the front end. A new pricing tier touches the billing webhook, the user record and the upgrade page. Hiring separate front-end and back-end developers for jobs like these means coordinating two people on one feature. The agent plans and builds all three layers together, so the pieces fit on delivery.",
      "Startups that set out to hire developers usually want speed without a long contract. Each job here is scoped as a fixed-price proposal: what changes in the database, which endpoints are added or altered, which screens are affected, and how it will be tested. The agent works in your existing stack, whether that's React or Next.js with Node, Laravel, Django, Rails or something older, and follows your conventions rather than adding new frameworks.",
      "Delivery is a branch or pull request with migrations, tests for the new logic and notes on anything to set before deploying, such as environment variables. A GrahAI engineer reviews the full change before you see it. For a stream of work rather than one job, the Retainer at $399 a month works through unlimited requests one at a time, a practical way for a small team to cover full-stack work before making a first hire.",
    ],
    tasks: [
      { title: "Fix a form that appears to save on screen but never reaches the database", price: 99, days: 1 },
      { title: "CSV import with row validation, an API endpoint and a progress screen", price: 349, days: 3 },
      { title: "Speed up a slow reporting page with paginated queries and proper indexes", price: 499, days: 4 },
      { title: "New subscription tier: billing webhook, usage limits and an upgrade page", price: 599, days: 4 },
      { title: "Admin panel to search, edit and export users and orders", price: 799, days: 6 },
      { title: "Team accounts with email invites, roles and permission checks", price: 999, days: 7 },
    ],
    deliverables: [
      "A branch or pull request covering front end, API and database together",
      "Database migrations that run forward and roll back cleanly",
      "Tests for new endpoints and business rules",
      "Deploy notes listing environment variables and steps in order",
      "Two revision rounds after you test on staging",
    ],
    sampleTitle: "Add team workspaces to our SaaS app",
    sampleBrief:
      "Our app is Next.js with a Node API and Postgres. Right now each account is one person. I want workspaces: an owner can invite teammates by email, assign admin or member roles, and everything a user creates belongs to the workspace instead of the individual. Existing users should be moved into a workspace of their own automatically. Billing stays per workspace.",
    limits:
      "If you want a developer embedded in your team for months, attending planning and owning a roadmap, hire a person or a dedicated agency team; agents work job by job. Large legacy systems with no tests and no staging environment also need careful human-led stabilization first.",
    faqs: [
      {
        q: "How much does it cost to hire a full-stack developer here?",
        a: "Small fixes start at $99. Features that touch all three layers, such as CSV imports or a new pricing tier, usually cost $349 to $599. Larger pieces like team accounts or an admin panel run $799 to $1,499. Ongoing work fits the Retainer at $399 a month. The fixed price is in the proposal, before you pay.",
      },
      {
        q: "Should a startup hire developers or use agents?",
        a: "Hire a developer when you need someone shaping the product with you every day and you can fund a salary. Use agents when the work arrives as defined jobs and you'd rather pay per result. Mixing them works too, with a founder or lead engineer setting direction, posting well-scoped jobs and reading each pull request before merging.",
      },
      {
        q: "Which tech stacks do you work in?",
        a: "Common ones include React, Next.js, Vue and Angular on the front end; Node, Python, PHP, Ruby and Go on the back end; and Postgres, MySQL, MongoDB or Firebase for data. If your stack is less common, mention it in the job post and the agent will say plainly whether it can take the work.",
      },
      {
        q: "Can you work in a codebase someone else wrote?",
        a: "Yes, and most full-stack jobs are exactly that. After kickoff you add a collaborator to the repository and, ideally, a staging environment. The agent reads the relevant parts first, notes any risk it finds, such as missing tests around the area being changed, and keeps to your existing patterns so the next developer isn't confused.",
      },
      {
        q: "How do database changes get deployed safely?",
        a: "Every schema change ships as a migration that can be rolled back, and data changes are tested against a realistic copy first. The deploy notes list the order of steps, for example run the migration, then deploy the API, then the front end, so nothing breaks in between. Production deploys happen only when you approve them.",
      },
    ],
    related: ["react-developer", "nextjs-developer", "nodejs-developer", "mvp-developer"],
  },
  {
    slug: "power-bi-consultant",
    skill: "Power BI consultant",
    article: "a",
    category: "data",
    metaTitle: "Hire a Power BI Consultant — Fixed Price from $149 | GrahAI Systems",
    metaDescription:
      "Power BI consultant for data models, DAX measures, scheduled refresh, row-level security and Excel report migrations. Fixed price from an AI agent in a minute.",
    keywords: [
      "power bi consultant",
      "power bi consulting services",
      "hire power bi developer",
      "power bi dax expert",
      "power bi freelancer",
      "migrate excel reports to power bi",
    ],
    intro:
      "Stuck on a DAX measure, a refresh that fails overnight, or Excel reports that take days to rebuild each month? Describe it. An AI agent quotes a fixed price in about a minute; an engineer checks the numbers.",
    overviewTitle: "Power BI done properly, from model to refresh",
    overview: [
      "Most Power BI problems start in the data model, not the visuals. A report built straight on top of a wide Excel export gets slow, totals stop adding up when filters change, and every new chart needs another workaround. The agent rebuilds the model as a star schema, with fact tables for transactions and dimension tables for dates, products and customers, joined by proper relationships, so measures behave predictably and the file stays fast as data grows.",
      "DAX is where most consulting hours go. The agent writes measures for the questions you actually ask, such as year-to-date revenue, the same period last year, rolling 12-month churn or margin after returns, and documents each one in plain English so someone on your team can read it later. Reports get one shared date table, consistent formatting, and drill-through from summary pages to detail only where people genuinely need it.",
      "Getting data to refresh unattended is the other common request: a gateway for on-premises sources, scheduled refresh in the Power BI Service, incremental refresh for large tables, and row-level security so each region or client sees only its own rows. Licensing stays with you; Pro, Premium Per User or Fabric capacity is bought in your Microsoft tenant, and the proposal states which one the design needs. A GrahAI engineer reconciles headline figures against your source before handover.",
    ],
    tasks: [
      { title: "Fix a DAX measure that returns wrong totals when filters change", price: 149, days: 1 },
      { title: "Scheduled refresh through an on-premises data gateway", price: 249, days: 2 },
      { title: "Row-level security by region or client, tested for each role", price: 299, days: 2 },
      { title: "Rebuild a slow report on a star-schema model with a proper date table", price: 499, days: 4 },
      { title: "Move a monthly Excel report pack into one refreshing Power BI report", price: 699, days: 5 },
      { title: "Finance dashboard with P&L, budget versus actual and drill-through", price: 1299, days: 8 },
    ],
    deliverables: [
      "A .pbix file and a published report in your own workspace",
      "A data model with documented relationships and a shared date table",
      "A measure list explaining each DAX formula in plain English",
      "Refresh schedule and gateway setup, with steps to follow if a refresh fails",
      "Two revision rounds after you check the numbers",
    ],
    sampleTitle: "Move our monthly sales Excel pack into Power BI",
    sampleBrief:
      "Each month our finance team spends two days building a 14-tab Excel pack from ERP exports: sales by region, product margin, top customers and year-on-year comparisons. I'd like the same figures in a Power BI report that refreshes from the ERP's SQL Server database, with regional managers seeing only their own region. We have Microsoft 365 and Power BI Pro licenses for six people.",
    limits:
      "An agent isn't the right fit for a company-wide BI rollout across many departments, tenant-level administration and governance, or work that needs a consultant in stakeholder meetings every week. Those call for an in-house BI lead or a Microsoft partner firm. Licenses and capacity are always purchased by you.",
    faqs: [
      {
        q: "How much does a Power BI consultant cost here?",
        a: "Fixing a single DAX measure or a failed refresh starts at $149. Row-level security and gateway setups run $249 to $299, model rebuilds are about $499, and migrating an Excel report pack is around $699. Full finance dashboards start near $1,299. Every job has a fixed price in the proposal, and Power BI licensing is separate.",
      },
      {
        q: "Do I need to buy Power BI licenses?",
        a: "Yes, and they stay in your Microsoft tenant. Building reports in Power BI Desktop is free, but sharing them with colleagues generally requires Pro or Premium Per User licenses for each viewer, or capacity such as Fabric for larger audiences. The proposal names the licensing the design assumes, so there are no surprises after delivery.",
      },
      {
        q: "Can you convert our Excel reports to Power BI?",
        a: "Yes. Share the workbook and explain where its data comes from. The agent maps each tab to a report page or visual, rebuilds formulas as DAX measures, and connects to the original source instead of pasting data in, so it refreshes by itself. The first delivery is reconciled against your latest Excel version so you can confirm every total matches.",
      },
      {
        q: "How does row-level security work in Power BI?",
        a: "You define roles, such as one per region or per client, each with a filter limiting which rows it can see. Users or security groups are then assigned to those roles in the Power BI Service. The agent creates the roles and tests each one with the 'view as' option; you assign the people, since that sits in your tenant.",
      },
      {
        q: "What access do you need?",
        a: "Usually a member role on the Power BI workspace, a read-only login to the source database, and your help installing the gateway if data lives on premises. Never post credentials in the job. After kickoff you add a guest or collaborator account, and you can remove it the day the job closes.",
      },
    ],
    related: ["dashboard-developer", "data-analyst", "sql-developer", "excel-automation-expert"],
  },
];
