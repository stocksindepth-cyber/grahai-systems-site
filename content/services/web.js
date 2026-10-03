// Service landing pages (rendered by components/seo/ServiceLanding.jsx).
// Website design, redesign, Shopify setup and website-to-app conversion.
// Each entry targets a cluster of buyer searches from the Oct 2026 Keyword Planner study.

export const webServicePages = [
  {
    slug: "website-design-services",
    category: "web",
    eyebrow: "Website design",
    metaTitle: "Website Design Services for Small Business — Fixed Price from $149",
    metaDescription:
      "Website design services for small businesses: one-page sites from $149, five-page business sites from $399, bookings and payments from $999. Fixed price, you own it.",
    keywords: [
      "website design services",
      "small business website design",
      "website for small business",
      "professional website design",
      "build a website for my business",
      "build me a website",
      "affordable website design",
      "custom website development",
      "hire someone to build a website",
      "pay someone to build a website",
    ],
    h1: "Website design services",
    h1Accent: "for small businesses, at one fixed price",
    intro:
      "Tell us what your business does and what visitors should do on the site. An AI agent replies in about a minute with the pages, delivery date and one fixed price: typically $149–$199 for one page and $399–$799 for five. You own everything.",
    tiers: [
      {
        name: "One-page site",
        billing: "one-time",
        priceUsd: 149,
        timeline: "1–3 days",
        forWho: "A new business, side project or local service that needs a credible page this week.",
        includes: [
          "One scrolling page: what you do, who you are, where to find you",
          "Mobile-first layout with compressed, fast-loading images",
          "Inquiry form, click-to-call and WhatsApp buttons",
          "Page title, description and Google Maps embed set up",
          "Connected to a domain registered in your name",
        ],
      },
      {
        name: "Business website",
        billing: "one-time",
        priceUsd: 399,
        timeline: "5–8 days",
        forWho: "An established small business that needs room to explain each service properly.",
        includes: [
          "Up to 5 pages, such as home, services, about, pricing and contact",
          "Your rough notes shaped into clear page copy",
          "Built on WordPress, Webflow or custom code, whichever suits how you'll edit",
          "Forms routed to the inbox that should get them",
          "Sitemap, analytics and Search Console set up in your accounts",
        ],
      },
      {
        name: "Bookings and payments",
        billing: "one-time",
        priceUsd: 1299,
        timeline: "8–14 days",
        forWho: "Businesses that want customers to book a slot or pay a deposit without a phone call.",
        includes: [
          "Everything in the business website",
          "Online booking tied to your real availability",
          "Card payments through your own Stripe, PayPal or Razorpay account",
          "Confirmation emails to you and to the customer",
          "Booking and checkout tested end to end before handover",
        ],
      },
    ],
    tasks: [
      { title: "One-page site for a local cleaning company with a quote form and click-to-call", price: 149, days: 2 },
      { title: "Launch page for a new product with email signup connected to Mailchimp", price: 199, days: 2 },
      { title: "Five-page site for an accounting practice: home, services, team, FAQ, contact", price: 599, days: 6 },
      { title: "Turn a five-page Figma design into a responsive Webflow site you can edit", price: 699, days: 5 },
      { title: "Restaurant website with menu, opening hours, map and table reservations", price: 799, days: 6 },
      { title: "Salon website with a service menu, staff profiles and paid online booking", price: 1299, days: 10 },
    ],
    overviewTitle: "What you get when you hire someone to build a website here",
    overview: [
      "Most small business websites need fewer things than a design package suggests. A visitor wants to know what you do, where you work, roughly what it costs and how to reach you, and they want to find out on a phone in a few seconds. Bookings, payments, a blog or a second language belong on the site when customers will actually use them. That's why the agent starts by asking what the site is for, which pages you need, and whether you already have a domain, logo, photos and wording. The quote then reflects your business rather than a package tier.",
      "Hiring someone to build a website for your business starts with a short description at /hire/post, and no account is needed. The proposal lists every page and feature, the delivery date and a single fixed price. Ask the agent questions, drop a page or add one, and the price follows the scope. Agencies often quote a few thousand dollars for a small business site; typical jobs here are $149–$199 for one page, about $399–$799 for a five-page business site, and roughly $999–$1,499 once customers need to book or pay online. Checkout takes cards in USD, or UPI and cards in INR inside India.",
      "AI agents do the build, and a GrahAI engineer reviews every delivery before it reaches you: links, forms, mobile layout, loading speed and the basics search engines read, such as page titles and descriptions. Two rounds of revisions are included, and if we can't deliver the scope we agreed, you get a full refund. The finished site is yours, including code, design files, text and images, while your domain and hosting stay in your name. To publish, you add us as a collaborator on your hosting, WordPress or Webflow account after kickoff, then remove that access when the job closes.",
      "Be honest about fit before you post. If you enjoy editing pages every day and a template is enough, a builder like Wix or Squarespace may cost less over time. If you need a brand identity, a logo, a photo shoot or copy written from nothing, a design studio or agency is the right call, because our agents don't take design-only or writing-only work and nobody visits on site. Builds larger than $4,999 go through custom projects with a scoping call. Once your site is live, the Care plan at $79 a month covers fixes and up to two small changes each month.",
    ],
    compare: {
      columns: ["GrahAI agents", "Web design agency", "Freelancer marketplace", "DIY website builder"],
      rows: [
        { label: "Typical small business price", values: ["$149–$1,499, fixed by scope", "Often a few thousand dollars", "Wide range, quality varies", "Monthly subscription plus your time"] },
        { label: "How fast you get a quote", values: ["Written proposal in about a minute", "Discovery call, then a quote days later", "Bids trickle in over hours or days", "No quote; you pick a template"] },
        { label: "Price certainty", values: ["One price; changes only if scope does", "Fixed or hourly, plus change orders", "Depends on the freelancer", "Fixed plan, add-ons extra"] },
        { label: "Who builds it", values: ["AI agents, checked by a GrahAI engineer", "Designers and developers on staff", "One person, self-checked", "You"] },
        { label: "Delivery time", values: ["1–3 days for one page, up to 8 for five", "Often several weeks", "Depends on their availability", "As fast as you work"] },
        { label: "Who owns the site", values: ["You: code, files, content and domain", "Usually you, after final payment", "Check the contract", "Stays on the builder's platform"] },
        { label: "If it goes wrong", values: ["Two revision rounds, then a full refund", "Contract terms", "Platform dispute process", "Support tickets"] },
      ],
    },
    answers: [
      {
        q: "Can I pay someone to build a website for my business?",
        a: "Yes, and you don't have to find, interview or manage a developer to do it. Describe your business, the pages you want and a couple of sites you like, and an AI agent sends back a written proposal with deliverables, a delivery date and one fixed price in about a minute. Nothing is charged until you accept. A GrahAI engineer checks the finished site before you see it, two revision rounds are included, and the full price is refunded if the agreed scope can't be delivered.",
      },
      {
        q: "How much does a small business website cost?",
        a: "Pages and features drive the cost more than who builds it. Agencies often quote a few thousand dollars for a small business site, and freelancer prices swing widely. Here, a one-page site usually costs $149–$199, a five-page business site about $399–$799, and a site that takes bookings or payments roughly $999–$1,499. Your domain, hosting and any paid plugins or booking software are billed separately to your own accounts, so you always know what you're paying each month and to whom.",
      },
      {
        q: "Should I hire someone to build my website or use a website builder?",
        a: "Use a builder if you have spare evenings, a simple offer and no problem living inside a template. Hire someone when the site has a job to do: send inquiries to the right inbox, take bookings, be set up properly for local search, or look trustworthy enough that a first-time visitor calls. A fixed-price build also saves the hours most owners lose fighting layouts. Many people do both: we build on WordPress or Webflow, and you edit text and photos yourself afterward.",
      },
    ],
    faqs: [
      {
        q: "What do I need ready before you build my website?",
        a: "Less than you might expect. Have your business name, a rough list of services or products, contact details, and any logo or photos you already own. If you have a domain, keep it; if not, buy one in your own name. Rough notes are fine for the text, because the agent shapes them into page copy as part of the build, and placeholder images can be swapped later.",
      },
      {
        q: "Can you build me a website on WordPress, Webflow or with custom code?",
        a: "Yes. WordPress suits owners who want plugins and easy blog editing, Webflow suits design-led sites that a marketing person edits visually, and custom website development with React or Next.js suits sites that need speed or features a builder can't offer. Not sure which to choose? Say how you plan to update the site, and the agent recommends one in the proposal along with the reason.",
      },
      {
        q: "Will my new website show up on Google?",
        a: "We set up what search engines need: clear titles and descriptions, a sitemap, sensible headings, fast pages, a mobile layout and a verified Search Console property in your account. That gives the site a fair start. Nobody can promise rankings, and anyone who does should worry you. Appearing for competitive searches takes time, useful content and, for local businesses, an accurate Google Business Profile.",
      },
      {
        q: "Who owns the website, and where is it hosted?",
        a: "You own it. The domain, hosting and any paid tools are registered to you, and the code, design files and content are handed over at delivery. If you don't have a host yet, the agent suggests a sensible option for your platform and budget, and you sign up yourself. Nothing is locked to us, so any developer can work on the site later.",
      },
      {
        q: "Can you add booking, payments or a members area?",
        a: "Yes, during the build or later as a separate job. Booking usually runs through a tool you pick, such as Calendly or a WordPress booking plugin, and payments go through your own Stripe, PayPal or Razorpay account so money reaches you directly. A members area or customer login is quoted on its own because it changes the scope, and the agent will say if a web app would serve you better.",
      },
      {
        q: "What happens after the site goes live?",
        a: "Your two revision rounds cover anything in the agreed scope that isn't right. After that, post a one-off job whenever you need a change, or keep the site on the Care plan for $79 a month, which covers fixes to anything we delivered plus up to two small change requests a month. You can cancel the plan whenever you like.",
      },
    ],
    related: ["/website-cost", "/hire/website-developer", "/hire/wordpress-developer", "/hire/webflow-developer", "/website-redesign-services", "/web-app-development"],
    plan: "care",
  },
  {
    slug: "website-redesign-services",
    category: "web",
    eyebrow: "Website redesign",
    metaTitle: "Website Redesign Services — Refresh, Rebuild or Migrate, Fixed Price",
    metaDescription:
      "Website redesign services with a redirect plan for every moved URL. Visual refresh, full rebuild or a move off Wix or Squarespace, quoted at one fixed price.",
    keywords: [
      "website redesign services",
      "website redesign",
      "redesign my website",
      "website rebuild",
      "wix to wordpress migration",
      "squarespace to webflow migration",
      "website redesign without losing seo",
    ],
    h1: "Website redesign services",
    h1Accent: "that keep what's already working",
    intro:
      "Redesign the site you have without throwing away the traffic it earned. An AI agent quotes a visual refresh, a full rebuild or a move off Wix or Squarespace at one fixed price in about a minute, with every changed URL mapped to a redirect.",
    tiers: [
      {
        name: "Refresh",
        billing: "one-time",
        priceUsd: 499,
        timeline: "3–6 days",
        forWho: "The content is sound, but the site looks dated or falls apart on a phone.",
        includes: [
          "New layout, type and color system across up to 5 pages",
          "Mobile layout fixed on every page in scope",
          "Images resized and compressed so pages load faster",
          "Same platform and same URLs, so nothing needs redirecting",
          "Before-and-after screenshots of each page",
        ],
      },
      {
        name: "Rebuild",
        billing: "one-time",
        priceUsd: 1299,
        timeline: "8–15 days",
        forWho: "The site is slow, painful to edit, or organized around services you no longer sell.",
        includes: [
          "New page structure and navigation for up to 10 pages",
          "Rebuilt on WordPress, Webflow or Next.js",
          "URL map with a 301 redirect for every page that moves",
          "Titles, descriptions, headings and image alt text carried over",
          "Existing copy reorganized around what visitors look for",
          "Post-launch sweep for broken links and new 404s",
        ],
      },
      {
        name: "Platform migration",
        billing: "one-time",
        priceUsd: 1999,
        timeline: "12–25 days",
        forWho: "You're leaving Wix, Squarespace or an aging CMS for a platform you control.",
        includes: [
          "Pages, blog posts and images exported and imported",
          "Design rebuilt on the new platform, not copied pixel for pixel",
          "Redirect map from every old URL to its new home",
          "Forms, analytics and email signups reconnected",
          "DNS switch planned for a quiet hour, with a way back if needed",
        ],
      },
    ],
    tasks: [
      { title: "Fix mobile layouts across a six-page site that breaks on phones", price: 249, days: 3 },
      { title: "Replace a heavy homepage slider, lazy-load images and defer third-party scripts", price: 299, days: 3 },
      { title: "Visual refresh of a five-page Squarespace site within its current template", price: 399, days: 4 },
      { title: "Restructure a law firm's practice-area pages, redirecting every renamed URL", price: 799, days: 6 },
      { title: "Migrate a Wix site with 40 blog posts to WordPress, keeping old links working", price: 1299, days: 10 },
      { title: "Rebuild a dated WordPress theme site in Next.js on the same URLs", price: 1499, days: 12 },
    ],
    overviewTitle: "Redesign, rebuild or migrate: what your site actually needs",
    overview: [
      "A redesign changes how a site looks and how its pages are organized. A rebuild changes what it's built on. Plenty of sites only need the first: the wording still works and the platform is fine, but the layout feels ten years old and the menu hides the pages people come for. A rebuild makes sense when every edit is a struggle, the theme can't be updated without something breaking, or pages take several seconds to appear on a phone. The agent asks which of these problems you have before proposing anything, because a refresh can cost less than half as much as a rebuild.",
      "The real risk in any redesign is search traffic, and the damage almost always comes from URLs. When a page that ranks moves to a new address without a redirect, the visits it earned land on an error page. So before design work starts, we list the pages that get traffic, keep their addresses wherever possible, and map a 301 redirect for each one that changes. Titles, descriptions, headings and internal links are carried across, and after launch the page indexing report in your Search Console is checked for new errors. Rankings can still wobble for a few weeks after a big change; nobody honest promises otherwise.",
      "Platform migrations deserve their own plan. Moving from Wix or Squarespace to WordPress, Webflow or a Next.js site gives you more control over speed, hosting and plugins, but not everything travels cleanly. Text, images and blog posts export well. Built-in stores, member areas, booking widgets and platform-specific forms usually need rebuilding with an equivalent tool, and the proposal names each one so nothing surprises you halfway through. Your domain stays registered to you the whole time, and the final switch is a DNS change you approve, timed for an hour when few customers are browsing.",
      "Every redesign is quoted at a fixed price, built by AI agents, and reviewed by a GrahAI engineer before you see a single page. You get two revision rounds, plus a full refund if the agreed scope can't be delivered. Access comes through a collaborator account on your host or platform, never a shared password. If what you really need is a new brand, logo or photography, start with a design studio and bring us their files. And once the redesigned site is live, it counts as something we built, so the $79 Care plan can cover its fixes and up to two small changes a month.",
    ],
    compare: {
      columns: ["GrahAI agents", "Design agency", "Freelance designer", "New theme yourself"],
      rows: [
        { label: "Typical price", values: ["$499 refresh to $1,999 migration, fixed", "Often several thousand dollars", "Varies widely by person", "Theme cost plus your time"] },
        { label: "Redirect and URL plan", values: ["Mapped before design work begins", "Usually, on larger projects", "Depends on the person", "Easy to forget"] },
        { label: "First proposal", values: ["Arrives about a minute after you post", "After one or more discovery calls", "After some back-and-forth", "None needed"] },
        { label: "Platform choice", values: ["WordPress, Webflow or Next.js, your call", "Often the agency's preferred platform", "Whatever they know", "Stuck on your current platform"] },
        { label: "Brand and logo work", values: ["Not included; bring your own", "Usually offered", "Sometimes offered", "Not included"] },
        { label: "Quality check", values: ["Engineer signs off before you see it", "Internal QA, varies", "Self-checked", "None"] },
        { label: "If it goes wrong", values: ["Revisions first, refund if scope isn't met", "Contract terms", "Negotiation or platform dispute", "Restore a backup"] },
      ],
    },
    answers: [
      {
        q: "How much does a website redesign cost?",
        a: "A visual refresh of a small site on the platform it already uses typically costs $399–$799 here. A rebuild with a new page structure, redirects and possibly a new platform runs about $999–$1,499 for most small business sites, and migrations with a large blog or several integrations usually land between $1,499 and $2,499. Agencies often charge several thousand dollars for comparable work. The price is fixed before you pay, and if you trim the scope while talking to the agent, the quote drops with it.",
      },
      {
        q: "Will redesigning my website hurt my SEO?",
        a: "It can, if URLs change without redirects or if pages that bring in visitors get merged or deleted. Handled carefully, a redesign doesn't need to cost you traffic, and faster, clearer pages are easier for both people and search engines to use. The safeguards are straightforward: list the pages with traffic, keep their addresses where you can, redirect every one that moves, keep titles and headings that already rank, and watch Search Console for errors after launch. All of that is part of the job.",
      },
      {
        q: "Should I redesign or rebuild my website?",
        a: "Redesign if the platform is fine and the problem is how the site looks or how it's organized. Rebuild if the platform itself is the problem: the theme is abandoned, plugins conflict, every edit needs a developer, or the site stays slow however much you compress. A quick test is to ask whether you'd be happy editing the site on its current platform for another three years. If the answer is no, a rebuild usually costs less over that stretch than repeated patches.",
      },
    ],
    faqs: [
      {
        q: "Can you move my site from Wix or Squarespace to WordPress or Webflow?",
        a: "Yes. Pages, blog posts and images are exported and rebuilt on the new platform, and every old URL is redirected to its new address. Features with no direct equivalent, such as a built-in store or booking tool, are replaced with plugins or services you choose, all listed in the proposal. Keep your old plan active until the switch is complete.",
      },
      {
        q: "Will my website go offline during the redesign?",
        a: "No. The new version is built on a staging copy or a temporary address while your current site keeps running. You review it there, ask for changes and approve it. Going live is a short switch, usually a DNS or theme change, scheduled for a quiet time. If something unexpected appears, the previous version can be put back quickly.",
      },
      {
        q: "Can you keep my content and only change the design?",
        a: "Yes, and it's often the cheaper option. We keep your existing text and images, tidy the structure, and change the layout, typography and colors around them. If some pages are thin or out of date, the agent points them out and suggests what to update, but rewriting only happens if you add it to the scope.",
      },
      {
        q: "Can you fix a slow or broken mobile site without a full redesign?",
        a: "Usually. Speed and mobile problems tend to come from oversized images, a heavy slider, too many scripts or a theme that was never built to be responsive. Those can be fixed as a one-off job from $249, with before-and-after load times so you can see the difference. If the theme itself is the bottleneck, the agent will say so and quote a rebuild instead.",
      },
      {
        q: "What do you need from me to start a website redesign?",
        a: "The current site's address, a list of what isn't working, a few sites whose style you like, and anything that must stay, such as specific pages, forms or integrations. After kickoff you add a collaborator or admin account on your platform. For migrations, you either add us to your DNS host or make the DNS change yourself from step-by-step instructions.",
      },
      {
        q: "Do you redesign Shopify stores too?",
        a: "Yes. A store redesign usually means a new or customized theme, a cleaner collection structure and faster product pages, while your products, orders and customers stay where they are. Changing themes doesn't change product URLs on Shopify, so redirects matter mainly when collections or pages are renamed. For a brand-new store, or a move to Shopify from another platform, see our Shopify store setup service.",
      },
    ],
    related: ["/website-design-services", "/website-maintenance-services", "/hire/webflow-developer", "/hire/nextjs-developer", "/hire/wordpress-developer", "/shopify-store-setup"],
    plan: "care",
  },
  {
    slug: "shopify-store-setup",
    category: "ecommerce",
    eyebrow: "Shopify store setup",
    metaTitle: "Shopify Store Setup — Fixed-Price Store Builds from $399",
    metaDescription:
      "Shopify store setup at a fixed price: theme customization, product import, payments, shipping and taxes in your own accounts, plus WooCommerce and Etsy migrations.",
    keywords: [
      "shopify store setup",
      "shopify expert",
      "shopify website design",
      "ecommerce website development",
      "someone to build my shopify store",
      "shopify store setup service",
      "woocommerce to shopify migration",
      "etsy to shopify",
    ],
    h1: "Shopify store setup",
    h1Accent: "done right, in your own account",
    intro:
      "Get a Shopify store that's ready to take orders, set up inside your own account. An AI agent quotes the theme work, product import, payments, shipping and tax settings at one fixed price in about a minute, and a GrahAI engineer checks the store before handover.",
    tiers: [
      {
        name: "Launch-ready store",
        billing: "one-time",
        priceUsd: 399,
        timeline: "3–5 days",
        forWho: "You have products and a Shopify account, but the setup screens keep eating your evenings.",
        includes: [
          "Free theme set up with your logo, colors and homepage sections",
          "Up to 30 products added with variants, images and collections",
          "Payments, shipping zones and tax settings configured in your account",
          "Shopify's policy templates filled in for you to review",
          "Navigation built and custom domain connected",
          "Test orders placed and refunded before handover",
        ],
      },
      {
        name: "Custom store",
        billing: "one-time",
        priceUsd: 1299,
        timeline: "8–14 days",
        forWho: "Your brand needs a store that looks like yours, not like the theme demo.",
        includes: [
          "Theme sections customized or built in Liquid to match your design",
          "Up to 300 products imported from a spreadsheet, with metafields",
          "Collections, filters and search arranged around how customers shop",
          "Apps chosen and configured, such as reviews, subscriptions or email",
          "Load-time check on home, collection and product pages",
        ],
      },
      {
        name: "Move to Shopify",
        billing: "one-time",
        priceUsd: 1999,
        timeline: "10–20 days",
        forWho: "You sell on WooCommerce, Etsy or another platform and want it all on Shopify.",
        includes: [
          "Products, variants, images and customer records moved across",
          "Order history imported where the source platform allows it",
          "301 redirects from old product and category URLs",
          "Theme set up to match or improve on your current store",
          "Cutover planned to keep downtime to a minimum",
        ],
      },
    ],
    tasks: [
      { title: "Connect a custom domain and set shipping zones and rates for two countries", price: 149, days: 2 },
      { title: "Import 150 products from a spreadsheet with variants, images and collections", price: 299, days: 3 },
      { title: "Set up subscriptions and product bundles with apps you pick", price: 349, days: 3 },
      { title: "Customize the Dawn theme: homepage sections, product page and brand styling", price: 399, days: 4 },
      { title: "Move an Etsy shop to its own Shopify store with matching listings", price: 699, days: 5 },
      { title: "Migrate a WooCommerce store with 300 products, customers and redirects to Shopify", price: 1499, days: 12 },
    ],
    overviewTitle: "What Shopify store setup involves, beyond picking a theme",
    overview: [
      "Shopify makes it easy to open an account and hard to know when the store is actually finished. A store that's ready to sell needs products with correct variants and inventory, collections people can browse, a theme that works on phones, payments that settle to your bank, shipping rates that don't lose money on heavy items, taxes set for the places you sell, policy pages, a connected domain and order emails that sound like you. Store setup means working through all of that, then placing test orders to prove that checkout, confirmation emails and refunds behave the way you expect.",
      "Search for a Shopify expert and you'll mostly find agencies that start with discovery calls and freelancers who bid by the hour. Here, you post the job, describe your products and how you want to sell them, and an AI agent replies in about a minute with a proposal covering every setting and page, a delivery date and one fixed price. Cut the product count or drop an app and the price follows. AI agents do the work, a GrahAI engineer reviews it before you see it, two revision rounds are included, and you get a full refund if the agreed scope isn't delivered.",
      "Everything stays in your accounts. You create the Shopify store and own the subscription; after kickoff you approve our collaborator request in your store settings, so we never need your password. Payments run through Shopify Payments where it's offered in your country, or a provider such as PayPal or Razorpay where it isn't, and payouts go straight to your bank. Tax and shipping are configured to the rules you or your accountant decide, because we set up settings rather than give tax advice. Paid themes and apps are bought in your name, so cancelling any of them later is your call alone.",
      "A finished store doesn't create demand by itself. We set it up so it can sell, with quick pages, clear product information and analytics connected, but we don't promise sales, and marketing sits outside store setup. Shopify also isn't right for every seller. If you offer one service with bookings, a simpler website may fit better, and very large catalogs or custom ERP and warehouse integrations belong in a scoped custom project. For ecommerce website development on WordPress, WooCommerce is the alternative we build on, and the agent will say which platform matches your products before you pay anything.",
    ],
    compare: {
      columns: ["GrahAI agents", "Shopify agency", "Freelance Shopify expert", "Set it up yourself"],
      rows: [
        { label: "Price", values: ["$399–$1,999, fixed by scope", "Often several thousand dollars", "Hourly or fixed, varies widely", "Shopify plan plus your evenings"] },
        { label: "Getting a quote", values: ["Proposal back within about a minute", "Discovery call, then a proposal", "Bids and messages over days", "Not needed"] },
        { label: "Whose account the store is in", values: ["Yours; we use collaborator access", "Usually yours", "Sometimes theirs, so check", "Yours"] },
        { label: "Theme work", values: ["Free or paid themes, plus Liquid edits", "Custom themes and design", "Depends on the person", "Theme editor only"] },
        { label: "Payments, shipping, taxes", values: ["Configured in your accounts to your rules", "Configured, often with advice", "Varies", "You read the help docs"] },
        { label: "Quality check", values: ["Engineer review before handover", "Internal QA", "Self-checked", "Test orders, if you remember"] },
        { label: "If it goes wrong", values: ["Revise twice, or a refund in full", "Contract terms", "Marketplace dispute", "Shopify support for platform issues"] },
      ],
    },
    answers: [
      {
        q: "How much does it cost to have someone set up a Shopify store?",
        a: "For most small stores, $399–$1,299 here, depending on how many products you have and how far the theme is customized. Moving an existing WooCommerce or Etsy store across usually lands between $699 and $1,999 because of redirects and data clean-up. Agencies often quote several thousand dollars for similar work. On top of setup, you pay Shopify's monthly plan, payment processing fees and any paid theme or apps directly to those companies, and the agent lists those running costs separately in the proposal.",
      },
      {
        q: "Can I hire someone to build my Shopify store?",
        a: "Yes. Post the job with what you sell, roughly how many products you have, where you ship and any stores you'd like yours to feel like. The agent sends a proposal listing every page, setting and app, the delivery date and a fixed price. You accept, pay through secure card checkout, and approve our collaborator request in your store. Progress shows up in your private job room, and a GrahAI engineer reviews the finished store before it's handed over to you.",
      },
      {
        q: "Do I need a Shopify expert, or can I set up my store myself?",
        a: "With ten products, one shipping country and a free theme used as it comes, you can do it yourself over a weekend with Shopify's own guides. Paying for help makes sense when there are many variants, several shipping regions, taxes in more than one place, a migration from another platform, or theme changes the editor can't make. The hidden cost of doing it yourself is the time you aren't spending on products and customers, and that's usually what decides it.",
      },
    ],
    faqs: [
      {
        q: "Do you build ecommerce websites on platforms other than Shopify?",
        a: "Yes. WooCommerce suits sellers who want WordPress and full control over hosting, and small catalogs can sell through a regular website with Stripe or PayPal checkout. If you're unsure which platform fits, describe your products, order volume and how you manage stock, and the agent recommends one in the proposal with its reasoning.",
      },
      {
        q: "Can you design a custom Shopify theme?",
        a: "We customize existing themes, free or paid, and build custom sections in Liquid when the editor can't do what you need. If you have a design in Figma, we can build the theme from it. What we don't take is design-only work, like creating a brand identity or mockups that nobody builds; for that, a designer comes first and we work from their files.",
      },
      {
        q: "Can you set up Shopify Payments, shipping and taxes?",
        a: "We configure them in your account. You complete any identity or bank verification that Shopify or your payment provider asks for, since only the account owner can. Shipping zones, rates, free-shipping thresholds and tax settings are set to the rules you give us. If you're unsure about your tax obligations, check with an accountant first; we set up what you decide.",
      },
      {
        q: "Can you move my WooCommerce or Etsy store to Shopify?",
        a: "Yes. Products, variants, images and customer records move across, and old product and category URLs are redirected so existing links and search results still land somewhere useful. Order history comes over where the source platform allows, sometimes through a migration app bought in your account. Etsy favorites and shop followers stay on Etsy, so many sellers keep that shop running alongside the new store.",
      },
      {
        q: "Which Shopify apps will my store need?",
        a: "Fewer than browsing the app store suggests. Most new stores need reviews, email capture and perhaps subscriptions or bundles, and Shopify covers much more natively than it used to. Every app adds a monthly fee and some page weight, so the agent proposes only what your plan needs and explains why. Apps are installed under your account and billed to you by their developers.",
      },
      {
        q: "Will you help after the store launches?",
        a: "Revision rounds cover anything in scope that isn't right. After that, the Care plan at $79 a month covers fixes for the store we set up and up to two small changes a month, such as a new collection, a homepage banner swap or an updated shipping rate. For a store someone else built, the Retainer plan handles ongoing requests instead.",
      },
    ],
    related: ["/hire/shopify-developer", "/hire/woocommerce-developer", "/website-redesign-services", "/website-design-services", "/hire/figma-to-code"],
    plan: "care",
  },
  {
    slug: "convert-website-to-app",
    category: "mobile",
    eyebrow: "Website to app",
    metaTitle: "Convert My Website to an App — Android, iOS or PWA, Fixed Price",
    metaDescription:
      "Convert your website to an Android or iOS app, or an installable PWA, at a fixed price. Straight answers on App Store review, native features and store submission.",
    keywords: [
      "convert my website to app",
      "convert my website to mobile app",
      "convert website to android app",
      "website to ios app",
      "turn website into app",
      "website to app",
      "progressive web app development",
    ],
    h1: "Convert your website to an app",
    h1Accent: "that's more than a wrapper",
    intro:
      "Turn the website you already have into an installable web app, an Android app or an iPhone app. An AI agent recommends the route that fits, explains what app store reviewers will look for, and quotes one fixed price in about a minute.",
    tiers: [
      {
        name: "Installable web app (PWA)",
        billing: "one-time",
        priceUsd: 299,
        timeline: "2–3 days",
        forWho: "You want a home-screen icon and notifications without store accounts or review.",
        includes: [
          "Web app manifest, icons and splash screens",
          "Offline fallback page and cached key screens",
          "Install prompt on Android, add-to-home-screen guide on iPhone",
          "Web push for Android and installed iPhone web apps",
          "Install and offline behavior tested in Android and iOS browsers",
        ],
      },
      {
        name: "Android app",
        billing: "one-time",
        priceUsd: 799,
        timeline: "5–8 days",
        forWho: "Most of your customers use Android and you want a Google Play listing.",
        includes: [
          "Capacitor app built around your site, inside a native shell",
          "Push notifications, deep links and the native share sheet",
          "A proper offline screen instead of a browser error",
          "Signed release build and Play Store listing assets",
          "Uploaded from your own Google Play Console account",
        ],
      },
      {
        name: "Android and iOS apps",
        billing: "one-time",
        priceUsd: 1499,
        timeline: "10–18 days",
        forWho: "You need both stores and enough native features for the app to stand on its own at review.",
        includes: [
          "One Capacitor codebase for Android and iPhone",
          "Native tab bar, push and biometric login where they fit",
          "Offline access to saved content or account details",
          "App Store privacy details and Play Data safety answers drafted",
          "Builds submitted from your Apple and Google developer accounts",
          "Fixes for reviewer feedback within your revision rounds",
        ],
      },
    ],
    tasks: [
      { title: "Make an existing site installable: manifest, icons, offline page and install prompt", price: 199, days: 2 },
      { title: "Prepare store screenshots, descriptions, privacy answers and signed builds", price: 249, days: 2 },
      { title: "Add web push notifications for Android and iPhone home-screen users", price: 299, days: 3 },
      { title: "List a PWA on Google Play as a Trusted Web Activity with verified domain links", price: 349, days: 3 },
      { title: "Add biometric login and offline saved items to an existing Capacitor app", price: 599, days: 5 },
      { title: "Wrap a booking website in a Capacitor app with push, deep links and a native tab bar", price: 999, days: 8 },
    ],
    overviewTitle: "Three ways to turn a website into an app, and what the stores accept",
    overview: [
      "There are three honest routes. A progressive web app (PWA) makes your existing site installable from the browser, with a home-screen icon, offline pages and push notifications, and no app store involved. A wrapper, usually built with Capacitor, puts your site or its front end inside a real Android or iOS app that can call native features such as push, camera, biometrics and deep links. A native rebuild in Flutter or React Native recreates the experience as an app from the ground up. The first is cheapest and quickest, the third the most capable, and most businesses that want to convert their website to a mobile app are well served by one of the first two.",
      "Here's the part conversion tools rarely mention. Apple's App Store Review Guideline 4.2, on minimum functionality, expects an app to offer more than a repackaged website, and apps that are just a browser frame around a site are a common rejection. Google Play has its own minimum functionality and webview rules, though it's usually more lenient. What helps is app-like value: notifications people opt into, offline access to things they saved, native navigation, biometric sign-in, or device features a browser can't reach. We tell you up front whether your site has enough of that to justify a store listing, and we never promise approval.",
      "Apps are published from your own developer accounts, so the listing, ratings and users belong to you. Apple's developer program charges an annual fee and Google Play a one-time registration fee, both paid by you directly. After kickoff you add us to your Apple team and Play Console with the roles needed to upload builds, so no passwords change hands. Review times are set by Apple and Google, not by us. If a reviewer sends feedback, fixing what they flag is covered by your revision rounds, and if we can't deliver the agreed scope at all, you get a full refund.",
      "Converting isn't always the right move. If your site is slow or awkward on a phone, an app built around it will be too, so fix the mobile site first. If customers visit once a year, a PWA or nothing at all may serve them better than an app they'll delete. If you need complex offline sync, heavy device features or an interface that feels fully native, a dedicated mobile app build is the better investment. Android and iOS also change every year, so apps need upkeep; the Care plan at $79 a month keeps an app we built current, with fixes and up to two small changes a month.",
    ],
    compare: {
      columns: ["GrahAI agents", "Website-to-app converter", "Mobile app agency", "Freelancer"],
      rows: [
        { label: "Price", values: ["$299 PWA to $1,499 for both stores, fixed", "Usually a monthly subscription", "Often several thousand dollars or more", "Varies widely"] },
        { label: "What you get", values: ["PWA, Capacitor app or native features, as needed", "A template wrapper around your site", "A custom native or cross-platform app", "Depends on the person"] },
        { label: "App Store review advice", values: ["Honest fit check before you pay", "Rarely discussed up front", "Usually part of the project", "Varies"] },
        { label: "Native features", values: ["Push, offline, biometrics, deep links, tab bar", "Limited to the tool's options", "Anything, at a price", "Depends on their skills"] },
        { label: "Who owns the app", values: ["You: code, builds and store listings", "Often tied to the subscription", "Usually yours after final payment", "Check the contract"] },
        { label: "Quality check", values: ["Every build reviewed by a GrahAI engineer", "Automated builder output", "QA team on most projects", "Self-checked"] },
        { label: "If it goes wrong", values: ["Fixes over two revision rounds, else a refund", "Cancel the subscription", "Contract terms", "Marketplace dispute"] },
      ],
    },
    answers: [
      {
        q: "Can I convert my website to a mobile app?",
        a: "Yes, in most cases. If your site already works well on a phone, it can become an installable web app in a few days, or an Android and iOS app built around the same code in one to three weeks. The bigger question is whether the app adds enough to pass store review and earn a spot on someone's home screen. Post the job with your site address and what you want the app to do, and the agent recommends a route with a fixed price.",
      },
      {
        q: "Will Apple approve an app that is just my website?",
        a: "Often not. Apple's guideline 4.2 on minimum functionality asks for more than a repackaged website, and a plain wrapper is a frequent reason for rejection. Apps with genuine native value, such as push notifications, offline access, biometric login or device features, make a far stronger case. We build those features in when the app needs them, prepare the submission carefully and fix anything reviewers flag, but approval is Apple's decision and nobody can guarantee it.",
      },
      {
        q: "How much does it cost to convert a website to an app?",
        a: "A PWA that installs from the browser with offline pages and notifications usually costs $199–$299 here. An Android app built around your site with push and deep links is about $799, and a version for both Android and iPhone with native features runs around $999–$1,499. Apple and Google developer account fees are paid directly to them. Converter subscriptions look cheaper at first, but you keep paying every month and usually end up with a basic wrapper.",
      },
    ],
    faqs: [
      {
        q: "How do I convert my website to an Android app?",
        a: "There are two practical routes. If your site is already a solid PWA, it can be listed on Google Play as a Trusted Web Activity, which shows your site full screen without browser bars. If you want native features such as push through Firebase Cloud Messaging, deep links or a native tab bar, a Capacitor app fits better. Either way, the signed build is uploaded from your own Play Console.",
      },
      {
        q: "Can my website become an iOS app without rebuilding it?",
        a: "Partly. The screens can come from your existing site or its front-end code inside a Capacitor app, so you don't start from zero. But an iPhone app needs native touches to clear review, such as notifications, offline content or Face ID sign-in. If your site offers Google or Facebook login, Apple may also require an equivalent privacy-focused option like Sign in with Apple.",
      },
      {
        q: "What is a PWA, and do I still need the app stores?",
        a: "A progressive web app is your website plus a manifest and service worker, so people can install it to their home screen, open it full screen, use parts of it offline and receive notifications. It skips store review and fees entirely, and updates go live the moment you publish. The trade-offs are discoverability, since nobody finds it by searching an app store, and fewer device features on iPhone.",
      },
      {
        q: "Whose developer accounts are the apps published under?",
        a: "Yours. You enroll in the Apple Developer Program and register a Google Play Console account, then invite us with the roles needed to upload builds and manage listings. That keeps the app, its ratings and its users under your name, and you can remove our access at any time. Upload keys and signing details are handed over with the delivery.",
      },
      {
        q: "When my website changes, does the app need to be resubmitted?",
        a: "Not usually. If the app loads content from your site, new pages and edited text show up straight away. You only submit a new build when native parts change, such as adding a feature, updating plugins or meeting a new platform requirement. Google Play also expects apps to target a recent Android version, so plan on at least one rebuild a year.",
      },
      {
        q: "Do push notifications work on iPhone?",
        a: "Yes, with conditions. In a Capacitor app, notifications work like any native app once the user allows them. For a PWA, iPhones on iOS 16.4 or later support web push, but only after the user adds the site to their home screen. If most of your customers use iPhones and notifications matter to the business, that usually tips the decision toward a store app.",
      },
    ],
    related: ["/mobile-app-development", "/app-development-cost", "/hire/flutter-developer", "/hire/react-native-developer", "/hire/mobile-app-developer", "/website-redesign-services"],
    plan: "care",
  },
];
