// Cost guides (rendered by components/seo/CostGuide.jsx at /website-cost and /app-development-cost).
// Market ranges are taken from the published pages listed in each guide's `sources` (checked Oct 2026).
// `oursUsd` matches the base prices in components/seo/CostEstimator.jsx so the table and the estimator agree.

export const costGuides = [
  {
    slug: "website-cost",
    navLabel: "Website cost guide",
    category: "web",
    estimator: "website",
    metaTitle: "How Much Does a Website Cost in 2026? Prices by Site Type",
    metaDescription:
      "How much does a website cost in 2026? Market prices for landing pages, small business sites, stores and web apps, the monthly costs after launch, and fixed prices.",
    keywords: [
      "how much does a website cost",
      "website development cost",
      "how much does it cost to get a website made",
      "small business website cost",
    ],
    h1: "How much does a website cost in 2026?",
    intro:
      "A website can cost less than a phone bill or more than a car, and both prices can be fair. This guide breaks down website development cost by type of site using published agency and marketplace data, then shows the fixed price for the same build with GrahAI agents and what you keep paying after launch.",
    quickAnswer:
      "A small business website typically costs $800 to $10,000 to build: freelancers often quote $800–$4,000 for a small brochure site and agencies $2,000–$10,000. Online stores usually run $2,500–$25,000, and custom web apps from $5,000 to well over $100,000. Budget another $20–$300 a month for hosting and platform fees. With GrahAI agents the same work is a fixed-price job: a landing page from $149, a five-page business site from $399, an online store from $999 and a scoped first version of a custom web app from $1,999.",
    breakdown: [
      { type: "One-page landing page", market: "$300–$3,000", oursUsd: 149, timeline: "1–3 days" },
      { type: "Small business site (about 5 pages)", market: "$800–$10,000", oursUsd: 399, timeline: "3–6 days" },
      { type: "WordPress site with blog", market: "$1,200–$12,000", oursUsd: 499, timeline: "4–7 days" },
      { type: "Online store (Shopify or WooCommerce)", market: "$2,500–$25,000", oursUsd: 999, timeline: "6–12 days" },
      { type: "Booking or membership site", market: "$500–$30,000+", oursUsd: 999, timeline: "6–12 days" },
      { type: "Custom web app (portal, dashboard, internal tool)", market: "$5,000–$120,000+", oursUsd: 1999, timeline: "10–25 days" },
    ],
    factors: [
      {
        name: "Distinct layouts, not page count",
        detail:
          "Ten service pages that share one layout cost far less than ten pages each designed differently. Builders price the templates, not the URLs. Before you ask for quotes, count how many genuinely different page types you need: usually a homepage, a service page, a contact page and perhaps a blog post layout.",
      },
      {
        name: "Theme or design from scratch",
        detail:
          "A good premium theme or template costs roughly $20 to $300 in WebFX's figures and gets you most of the way. A design drawn from a blank canvas means more rounds of mockups and more front-end work, which is where many agency quotes climb into five figures.",
      },
      {
        name: "Platform",
        detail:
          "WordPress, Shopify, Webflow and hand-coded sites differ in build effort and in what you pay every month afterward. Shopify charges a plan fee but handles hosting and checkout; WordPress is free software but needs hosting, updates and usually a few paid plugins. Pick the platform before comparing quotes.",
      },
      {
        name: "Features that handle data or money",
        detail:
          "A contact form is quick. Booking, member logins, payments and a second language each need configuring, connecting and testing end to end. The approach matters too: Local Web Advisor puts professional setup of an off-the-shelf booking tool at $500–$3,000, while a custom-built booking system runs $8,000–$30,000 or more.",
      },
      {
        name: "Who supplies the words and pictures",
        detail:
          "Projects stall when the builder is waiting for service descriptions, photos or a logo. If you hand over finished content, the build moves quickly and the quote holds. If someone has to write and source everything, budget for that work separately or expect a noticeably higher quote.",
      },
      {
        name: "Where the builder is based",
        detail:
          "Clutch's 2026 pricing data shows web design firms in the US, Canada and Australia typically billing $100–$149 an hour, while firms in India mostly bill under $25. The same five-page site can be quoted several times over depending on whose time you are buying.",
      },
    ],
    sections: [
      {
        h2: "Freelancer, agency or AI agents: who should build your website?",
        paras: [
          "WebFX's published guide puts freelancer-built sites at $500 to $10,000+ and agency projects at $3,000 to $30,000+, and Clutch reports that most web design projects reviewed on its platform come in under $10,000. Agencies earn the higher price when you need brand strategy, a copywriter, photography and a project manager who chases everyone. Freelancers cost less, but quality and availability vary a lot, and you become the project manager. Either way, many quotes are estimates billed against hours, so the final invoice can drift.",
          "With GrahAI agents you describe the site, and an AI agent replies in about a minute with a written proposal: pages, features, delivery date and one fixed price. Agents do the build, a GrahAI engineer reviews it before you see it, two revision rounds are included, and you get a full refund if we can't deliver the agreed scope. It is not the right fit for everything. If you need a brand identity or a marketing team, hire an agency. If you enjoy dragging blocks around yourself, a site builder may be enough.",
        ],
      },
      {
        h2: "Hidden and ongoing website costs",
        paras: [
          "The build is a one-time cost; running the site is not. You will renew a domain every year and pay for hosting, which WebFX puts anywhere from $2 to $1,000 a month depending on traffic and platform. Typical ranges are around $20–$100 a month for a WordPress site and $40–$300 for a Shopify store. Stores also pay card processing, commonly around 2.9% plus 30 cents per transaction in the US. Premium plugins, booking tools and email marketing software each add their own subscription.",
          "Then there is upkeep. Sovyn's guide puts basic maintenance plans at $50–$200 a month and fuller service at $500–$2,500, and some agency packages carry a monthly fee after launch; Logical Position's small business packages, for example, drop to $149 a month after an initial six-month commitment. For a site GrahAI agents built, the Care plan is $79 a month and covers fixes plus up to two small changes. For any site, built by anyone, the Retainer is $399 a month. Both are month to month.",
        ],
      },
      {
        h2: "How to get an accurate website quote",
        paras: [
          "Vague briefs produce vague quotes. Before you contact anyone, write down the pages you need, the one action you want visitors to take, the features that matter (booking, payments, a blog, a second language), the platform if you have a preference, two or three sites you like and why, and who is supplying the content. Add any tools the site must talk to, such as a CRM or newsletter service, and the date you actually need it live. That one page of notes lets any builder price the same job.",
          "When the quotes come back, compare them line by line. Check that each lists deliverables rather than hours, says what a revision is, and confirms you will own the domain, the code and the content. Be wary of hosting you can only get through the builder. To get a fixed price from us, paste that brief into the form linked at the bottom of this page; you can question the agent and adjust scope before paying, and the price moves with the scope.",
        ],
      },
    ],
    savings: [
      "Launch with the five pages that bring in business: home, services, about, contact and one page of proof. Add the rest once real visitors show you what they look for.",
      "Choose a well-made theme instead of a bespoke design. A template costs tens of dollars; a design built from scratch can add thousands before a single page is coded.",
      "Have final text, photos and your logo ready before work starts. Waiting on content is the most common reason a quoted timeline slips and a fixed scope gets reopened.",
      "Use an existing booking or payment tool such as Calendly, Acuity or Stripe rather than a custom-built system until your volume genuinely justifies the extra cost.",
      "Register the domain and hosting in your own name and on your own card, so you never pay a markup or lose access when you change who looks after the site.",
    ],
    faqs: [
      {
        q: "What does a small business website cost?",
        a: "Published agency pricing gives a good benchmark. Logical Position's starter package for 1–10 pages is $3,000, and tekRESCUE says its basic sites typically start around $3,500. Freelancers often quote $800–$4,000 for a small brochure site. With GrahAI agents, a five-page business site starts at $399 as a fixed price, with more pages, booking or payments priced into the same proposal before you pay.",
      },
      {
        q: "How much does it cost to get a website made by someone else?",
        a: "It depends on who you hire. Doing it yourself on a builder costs a monthly subscription and your evenings. A freelancer typically charges a few hundred to a few thousand dollars, and an agency several thousand and up. Posting the job to GrahAI agents gets you a fixed price in about a minute, from $149 for a single landing page.",
      },
      {
        q: "Why do website quotes vary so much for the same site?",
        a: "Builders quote different assumptions. One includes copywriting, SEO setup and a custom design; another assumes you supply content and want a theme. Hourly rates also vary several times over by country, according to Clutch. The fix is to send every builder the same written brief and ask for a list of deliverables with a single fixed price.",
      },
      {
        q: "Is a site builder like Wix or Squarespace cheaper than hiring someone?",
        a: "Upfront, yes. WebFX lists DIY website builders at roughly $17 to $500+ a month. You pay with your own time instead, and you are limited to what the platform allows. For a simple brochure site that rarely changes, a builder is often the sensible choice. Hire help when you need custom features, integrations or a site that has to convert.",
      },
      {
        q: "How long does it take to build a website?",
        a: "Clutch reports an average of about seven months for web design projects reviewed on its platform, though that figure includes large corporate builds. Small sites move much faster. With GrahAI agents, a landing page usually takes 1–3 days, a five-page business site 3–6 days and an online store 6–12 days. The delivery date is written into the proposal before you pay.",
      },
      {
        q: "What if I'm not happy with the website?",
        a: "Every delivery is reviewed by a GrahAI engineer before you see it, and two revision rounds are included to fix anything that doesn't match the agreed proposal. If we can't deliver the scope we agreed, you get a full refund. You own everything delivered, and site access is shared through collaborator accounts you can remove, never passwords sent in messages.",
      },
    ],
    sources: [
      { label: "Clutch: Web Design Company Pricing Guide (updated Sep 2026)", url: "https://clutch.co/web-designers/pricing" },
      { label: "WebFX: How Much Does a Website Cost in 2026?", url: "https://www.webfx.com/web-design/pricing/website-costs/" },
      { label: "Project Cost Estimator: Website cost by type, freelancer vs agency", url: "https://projectcostestimator.com/website-cost" },
      { label: "Logical Position: Small business website packages", url: "https://www.logicalposition.com/small-business-websites" },
      { label: "tekRESCUE: Small business web design pricing", url: "https://mytekrescue.com/small-business-web-design-services/" },
      { label: "Local Web Advisor: Online booking system costs", url: "https://localwebadvisor.com/wiki/booking-system-cost" },
      { label: "Sovyn: Website maintenance services and pricing", url: "https://www.sovyn.com/blog/website-maintenance-services" },
    ],
    related: [
      "/website-design-services",
      "/hire/website-developer",
      "/hire/wordpress-developer",
      "/shopify-store-setup",
      "/website-maintenance-services",
      "/hire/retainer",
      "/app-development-cost",
    ],
  },
  {
    slug: "app-development-cost",
    navLabel: "App development cost guide",
    category: "mobile",
    estimator: "app",
    metaTitle: "App Development Cost in 2026: Price Ranges by Type of App",
    metaDescription:
      "App development cost in 2026: published price ranges for prototypes, MVPs, SaaS and marketplace apps, the fees after launch, and fixed prices for a first version.",
    keywords: [
      "app development cost",
      "how much does it cost to build an app",
      "saas development cost",
    ],
    h1: "App development cost in 2026",
    intro:
      "Ask five studios how much it costs to build an app and you will hear five different numbers, because an app can mean a five-screen demo or a two-sided marketplace. Here are published price ranges for each kind of build, SaaS development cost included, what pushes the number up, and where a fixed-price first version fits.",
    quickAnswer:
      "Most app development projects reviewed on Clutch cost $10,000 to $49,999, with an average near $90,780. Published guides put a simple MVP at $10,000–$20,000, a SaaS MVP at $20,000–$80,000 and a marketplace MVP at $30,000–$60,000 or more, and Appinventiv prices full products at $40,000 to $400,000+. With GrahAI agents, a scoped first version is a fixed-price job: a coded clickable prototype from $299, a single-platform app from $999, a cross-platform MVP from $1,999 and a SaaS MVP from $2,999.",
    breakdown: [
      { type: "Clickable prototype (coded, sample data)", market: "$500–$8,000", oursUsd: 299, timeline: "2–4 days" },
      { type: "Simple app, one platform", market: "$10,000–$50,000", oursUsd: 999, timeline: "7–12 days" },
      { type: "Cross-platform MVP (iOS + Android)", market: "$15,000–$50,000", oursUsd: 1999, timeline: "12–20 days" },
      { type: "App with accounts and payments", market: "$20,000–$80,000", oursUsd: 2499, timeline: "15–25 days" },
      { type: "SaaS MVP (web)", market: "$20,000–$80,000", oursUsd: 2999, timeline: "15–30 days" },
      { type: "Marketplace MVP", market: "$30,000–$60,000+", oursUsd: 3999, timeline: "20–30 days" },
    ],
    factors: [
      {
        name: "How many platforms",
        detail:
          "Separate native apps for iOS and Android mean two codebases to build, test and update. Cross-platform frameworks such as Flutter and React Native share one codebase across both, and a web app skips the stores entirely. Starting on one platform is the simplest way to halve a first budget.",
      },
      {
        name: "Accounts and a backend",
        detail:
          "Once users sign in, the app needs a database, password resets, permissions and usually an admin panel. Appinventiv's published ranges show the jump: basic apps at $40,000–$50,000 versus $60,000–$80,000 for apps with user authentication. Managed services like Firebase reduce, but do not remove, that work.",
      },
      {
        name: "Payments and payouts",
        detail:
          "Charging a card once is straightforward with Stripe or Razorpay. Subscriptions, refunds, in-app purchases that must follow store rules, and marketplace payouts that split money between buyers, sellers and you add considerable logic and testing. Money flows are where shortcuts get expensive later.",
      },
      {
        name: "User roles and screens",
        detail:
          "Every distinct type of user multiplies the work. A booking app with customers, service providers and an admin is really three apps sharing data, each with its own screens, notifications and edge cases. Count roles and screens before you ask for quotes; they predict cost better than a feature wish list.",
      },
      {
        name: "Real-time and device features",
        detail:
          "Chat, live location, push notifications, camera uploads, offline mode and AI features each bring their own services, permissions and failure cases to handle. None is exotic, but each one adds days of build and testing, and several add monthly usage fees after launch.",
      },
      {
        name: "Team model and location",
        detail:
          "Creole Studios puts a basic MVP at $15,000–$30,000 with freelancers, $20,000–$50,000 with an agency and $40,000–$80,000+ in-house. Appinventiv lists cross-platform developers at $20–$30 an hour in India against $60–$130 in the US. The same scope can land in very different budgets.",
      },
    ],
    sections: [
      {
        h2: "Agency, freelancer or AI agents for building an app",
        paras: [
          "Agencies bring discovery workshops, designers, QA testers and a project manager, which is why their numbers are high and their timelines long; Clutch's data puts the average mobile app project at about 11 months. That structure is worth paying for when the app is the business and will need a team for years. Freelancers cost less and can be excellent, but one person rarely covers design, backend, both stores and testing, so you end up coordinating several of them.",
          "GrahAI agents suit a different job: a scoped first version, an internal tool, or a defined feature added to an app you already have. You get one fixed price up front, an engineer reviews every delivery, two revision rounds are included, and a full refund applies if we can't deliver the agreed scope. Our prices sit far below market because AI agents do the build, the first version is kept narrow, and it runs on managed services. Regulated health or finance apps, or anything above $4,999, belong with a dedicated team or a scoped custom project.",
        ],
      },
      {
        h2: "Hidden and ongoing app costs",
        paras: [
          "Launch is where the recurring bills start. Apple charges $99 a year for its Developer Program and Google Play has a one-time $25 registration fee, both paid under your own developer account. Behind the app sit a database, file storage, push notifications, email or SMS, and maps or AI usage, mostly billed by volume. Appinventiv estimates yearly maintenance at 15–20% of the original build cost for basic apps and 30–40% for complex enterprise ones, because every new iOS and Android release can break something.",
          "Plan for that upkeep from day one. For an app GrahAI agents built, the Care plan is $79 a month and covers fixes to what we delivered plus up to two small change requests a month. For any app or software, whoever built it, the Retainer is $399 a month for unlimited requests worked one at a time, and Retainer Plus at $799 runs two at a time with priority. Plans are month to month. Store approval is decided by Apple and Google, so no builder can promise it.",
        ],
      },
      {
        h2: "How to scope an app so the quote holds",
        paras: [
          "Most app budgets blow up because the scope was never written down. Start with the user roles and the single journey that proves the idea, such as a customer booking and paying for a slot. List the screens that journey needs, the platforms you must launch on, the services the app connects to and how money moves. Mark everything else as later. Note what already exists, such as designs, a website or an API, because reusing it changes the price significantly.",
          "Then ask every builder for written deliverables, a delivery date and a fixed price, plus clear answers on who submits to the stores, whose accounts the app lives under and who owns the code. To get that from us, send your brief through the button at the end of this guide. An AI agent replies in about a minute with a proposal you can question and reshape; the price follows the scope. You pay by card checkout, access is shared through collaborator accounts, and the source code is yours.",
        ],
      },
    ],
    savings: [
      "Launch on the one platform your customers already use, or build with Flutter or React Native so a single codebase serves both iOS and Android.",
      "Cut version one to the single journey that proves people will pay. Chat, social feeds and analytics dashboards can wait until usage data asks for them.",
      "Use managed services such as Firebase for login and Stripe for payments instead of paying for custom-built equivalents in the first release.",
      "Test demand with a coded clickable prototype or a web app before paying for native store releases and the review cycles that come with them.",
      "Insist on a fixed price tied to written deliverables, so changes in scope are priced openly instead of quietly turning into extra billed hours.",
    ],
    faqs: [
      {
        q: "How much does it cost to build an app?",
        a: "Most app projects reviewed on Clutch fall between $10,000 and $49,999. Creole Studios puts a simple MVP at $10,000–$20,000, and Appinventiv quotes $40,000 to $400,000+ for full products from an established company. A scoped first version with GrahAI agents starts at $999 for a simple single-platform app and $1,999 for a cross-platform MVP, priced in writing before you pay.",
      },
      {
        q: "How much does SaaS development cost?",
        a: "Purrweb's 2026 breakdown puts a SaaS MVP at $30,000–$80,000 over two to four months and a mid-size product at $80,000–$150,000; Creole Studios quotes $20,000–$40,000 for a SaaS MVP. With GrahAI agents, a scoped SaaS MVP built around one core workflow starts at $2,999, and extras such as subscription billing or an admin panel are priced into the same proposal. Larger platforms are scoped as custom projects through our services team.",
      },
      {
        q: "Can an app really be built for under $5,000?",
        a: "A focused first version can. The price stays low because the scope is narrow, AI agents do the build, and the app leans on proven services for login, payments and notifications rather than custom infrastructure. A GrahAI engineer reviews it before you see it. What you get is a working version to test with real users, not a finished product with years of features behind it.",
      },
      {
        q: "Is a web app cheaper to build than a mobile app?",
        a: "Usually, yes. A web app is one codebase, needs no store accounts or review cycles, and updates instantly for every user. A mobile app earns its extra cost when you need push notifications, camera or location access, offline use, or a presence in the stores. Many founders start with a web app and later wrap it or rebuild it as a mobile app once demand is proven.",
      },
      {
        q: "How long does app development take?",
        a: "Agency timelines are long: Clutch puts the average mobile app project at about 11 months, and Creole Studios estimates 6–10 weeks for a SaaS MVP and 8–14 weeks for a marketplace MVP. With GrahAI agents, a coded prototype usually takes 2–4 days and a marketplace MVP 20–30 days. Allow extra time afterward for App Store and Google Play review.",
      },
      {
        q: "Will my app be approved on the App Store and Google Play?",
        a: "Approval is decided by Apple and Google, so nobody can promise it. Agents build to the store guidelines and prepare store-ready builds, and you publish under your own developer accounts: $99 a year for Apple and a one-time $25 for Google Play. If a reviewer asks for changes after delivery, the agent quotes them, or the Care plan covers fixes to what we built.",
      },
    ],
    sources: [
      { label: "Clutch: App Development Pricing Guide (updated Sep 2026)", url: "https://clutch.co/directory/mobile-application-developers/pricing" },
      { label: "Appinventiv: Cost to hire mobile app developers", url: "https://appinventiv.com/blog/hire-mobile-app-developers/" },
      { label: "Creole Studios: MVP Development Cost in 2026", url: "https://www.creolestudios.com/mvp-development-cost/" },
      { label: "Purrweb: SaaS Development Costs in 2026", url: "https://www.purrweb.com/blog/saas-development-cost/" },
      { label: "Viral Chilly: Figma prototype and UI/UX design cost", url: "https://viralchilly.com/blog/figma-ui-ux-design-cost" },
      { label: "Apple Developer: Program enrollment and annual fee", url: "https://developer.apple.com/support/enrollment/" },
      { label: "Google Play Console Help: Developer registration fee", url: "https://support.google.com/googleplay/android-developer/answer/6112435" },
    ],
    related: [
      "/mobile-app-development",
      "/hire/flutter-developer",
      "/hire/react-native-developer",
      "/mvp-development",
      "/saas-development",
      "/convert-website-to-app",
      "/website-cost",
    ],
  },
];
