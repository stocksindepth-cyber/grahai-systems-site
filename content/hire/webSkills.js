// "Hire a ___" landing pages — websites, ecommerce stores and mobile apps.
// Schema is shared by every file in content/hire/ and rendered by app/hire/[slug].

export const webSkills = [
  {
    slug: "website-developer",
    skill: "web developer",
    article: "a",
    category: "web",
    metaTitle: "Hire a Web Developer — Website Builds from $99 | GrahAI Systems",
    metaDescription:
      "Need a business website built or rebuilt? Post the job, get a fixed-price proposal from an AI agent in about a minute, and an engineer reviews the delivery.",
    keywords: [
      "hire web developer", "freelance web developer", "hire website developer",
      "website developer for hire",
      "freelance web developer",
      "hire someone to build a website",
      "small business website developer",
      "website redesign freelancer",
      "affordable website developer",
    ],
    intro:
      "Tell us what the site is for, who will edit it and which pages it needs. An AI agent comes back in about a minute with a fixed price, a platform recommendation and a delivery date.",
    overviewTitle: "A working website, not a six-week project",
    overview: [
      "Most people searching for a website developer don't need a custom web application. They need a clean site for a clinic, a consultancy, a restaurant or a trade business: five to ten pages, a contact form that actually reaches their inbox, a map, opening hours, and pages that load quickly on a phone. Often there's an old site to replace, or a Wix or Squarespace build that has become hard to change. That scope is predictable, which is why it can be priced up front.",
      "The first decision is the platform, and the agent makes it based on who will update the site afterward. If you want to edit text and photos yourself, it proposes WordPress or Webflow. If the content rarely changes and you want low running costs, it proposes a static site that can sit on inexpensive hosting. Either way, the proposal says which platform, why, and what ongoing costs you'll carry, so a hosting or plugin bill doesn't surprise you later.",
      "The build covers responsive layouts, basic on-page SEO (titles, descriptions, headings, a sitemap), image compression, forms wired to your email, and analytics if you want it. A GrahAI engineer reviews the finished site on desktop and mobile before you see it. Then we connect your domain, set up SSL, and hand over the logins and files. The site, the content and the code are yours, with no subscription to us attached.",
    ],
    tasks: [
      { title: "Fix a broken contact form and mobile menu on an existing site", price: 99, days: 1 },
      { title: "Single-page site for a local business with map and hours", price: 199, days: 2 },
      { title: "Move a 6-page site from Wix or Squarespace to WordPress", price: 399, days: 4 },
      { title: "Five-page business website with contact form and basic SEO", price: 599, days: 5 },
      { title: "Redesign of an outdated 10–15 page site, content carried over", price: 999, days: 7 },
      { title: "Bilingual 12-page website with blog and booking integration", price: 1499, days: 10 },
    ],
    deliverables: [
      "A responsive site tested on phone, tablet and desktop browsers",
      "Page titles, meta descriptions, sitemap and redirects from old URLs",
      "Domain, SSL and contact-form email set up on your accounts",
      "A short guide or screen recording on editing your own pages",
      "Two revision rounds after you review the live preview",
    ],
    sampleTitle: "New website for a physiotherapy clinic",
    sampleBrief:
      "We run a two-location physiotherapy clinic and our current site was built in 2016 and looks broken on phones. I need about 7 pages: home, services, two location pages, team, pricing and contact. Patients should be able to click through to our existing online booking system. I'd like to update prices and team photos myself. We already own the domain.",
    limits:
      "An agent is a poor fit when the hard part is brand strategy or writing the content itself — if you don't have a logo, messaging or page copy yet, start with a designer or copywriter. Sites that need logins, payments or dashboards are app projects and are quoted separately.",
    faqs: [
      {
        q: "How much does a website developer cost here?",
        a: "Fixes to an existing site start at $99 and a one-page site is about $199. Moving a small site off Wix or Squarespace is around $399, and a standard five-page business website lands near $599. Larger redesigns or multilingual sites with a blog run $999 to $1,499. You pay the fixed price once by card — international cards are accepted, and UPI works in India.",
      },
      {
        q: "Which platform will you build my website on?",
        a: "It depends on who updates it. If you'll change text and photos regularly, the agent proposes WordPress or Webflow because both have friendly editors. If the site rarely changes, a static build is faster and cheaper to host. If you already have a platform you like, say so in the post and we'll stay on it.",
      },
      {
        q: "Will my old pages lose their Google traffic when the new site goes live?",
        a: "Not if the move is handled carefully. We list the URLs on your current site, keep the ones that still make sense, and set up 301 redirects for the ones that change, so links and search history carry over. We can't promise rankings — nobody honestly can — but a careful migration avoids the common self-inflicted drops.",
      },
      {
        q: "Do you write the content and supply the photos?",
        a: "You supply the core facts: services, prices, team, addresses. The agent can draft or tighten page copy from those notes, and we can use licensed stock photos where you don't have your own. Real photos of your premises and people almost always work better, so we leave clearly marked spots for them if they aren't ready yet.",
      },
      {
        q: "Who owns the website and hosting after delivery?",
        a: "You do. The domain, hosting account and any paid plugins or plans are set up in your name, and we hand over all files and admin access at the end. There's no ongoing fee to GrahAI Systems. If you'd rather we didn't touch your registrar, we give you the exact DNS records to add yourself.",
      },
    ],
    related: ["wordpress-developer", "webflow-developer", "landing-page-developer", "figma-to-code"],
  },
  {
    slug: "wordpress-developer",
    skill: "WordPress developer",
    article: "a",
    category: "web",
    metaTitle: "WordPress Developer for Hire — Websites from $99 | GrahAI Systems",
    metaDescription:
      "Hire a WordPress developer for plugin conflicts, custom blocks, speed fixes or a theme build. Fixed-price proposal in about a minute, reviewed by an engineer.",
    keywords: [
      "wordpress website design", "hire wordpress developer",
      "wordpress developer for hire",
      "wordpress expert",
      "freelance wordpress developer",
      "fix wordpress site",
      "wordpress speed optimization",
      "custom wordpress theme developer",
    ],
    intro:
      "Post the WordPress problem or build — a white screen, a slow site, a custom block, a new theme. An AI agent replies in about a minute with a fixed price and starts once you approve it.",
    overviewTitle: "WordPress fixes and builds, priced before you start",
    overview: [
      "WordPress jobs tend to fall into two groups. The first is repair: a plugin update that took the site down, a critical error after the host bumped PHP to 8.2, a contact form that stopped sending, or a page builder layout that broke on mobile. The second is building: a custom theme from a design, custom Gutenberg blocks so your team can edit landing pages without wrecking the layout, or custom post types for listings, events or case studies.",
      "For repairs, the agent works on a staging copy first, finds the cause rather than deactivating plugins until the error disappears, and documents what it changed. For builds, it writes a child theme or block theme instead of editing a theme you'll later update and overwrite, and registers blocks with block.json or ACF so they behave like native ones in the editor. Every delivery is reviewed by a GrahAI engineer before it goes near your live site.",
      "Speed work is common and worth scoping honestly. Usually the gains come from removing plugins you don't use, fixing render-blocking scripts, serving properly sized images, and adding caching that suits your host. We measure before and after and show you the numbers. Store-specific work — checkout, payments, shipping, product variations — has its own page under WooCommerce developer, since that's a different set of problems.",
    ],
    tasks: [
      { title: "Fix a critical error or white screen after a plugin update", price: 99, days: 1 },
      { title: "Resolve PHP 8 compatibility errors in an older theme", price: 199, days: 2 },
      { title: "Speed up a slow WordPress site: caching, images, script cleanup", price: 299, days: 3 },
      { title: "Clean up a hacked site and harden logins and file permissions", price: 399, days: 3 },
      { title: "Three custom Gutenberg blocks editable by non-developers", price: 499, days: 4 },
      { title: "Custom theme built from a Figma design, 8–10 templates", price: 1499, days: 10 },
    ],
    deliverables: [
      "Changes tested on a staging copy before they touch the live site",
      "A child theme or custom theme, so vendor updates won't erase the work",
      "Plain-English change log of what was fixed and why",
      "Backup taken before deployment, with rollback steps",
      "Two rounds of revisions once you've checked the work on staging",
    ],
    sampleTitle: "WordPress site broken after hosting company upgraded PHP",
    sampleBrief:
      "My hosting company upgraded to PHP 8.2 last night and now the homepage shows 'There has been a critical error on this website.' The admin area still loads. The site uses an old premium theme from 2019 and about 20 plugins, including Elementor and Contact Form 7. I need it working again without switching back to old PHP, and I'd like to know which plugins are risky to keep.",
    limits:
      "An agent is the wrong choice for ongoing editorial work, like publishing posts every week, or for a site full of undocumented custom plugins that needs months of maintenance. For a long-term care plan, a retained WordPress developer or agency suits you better.",
    faqs: [
      {
        q: "What does it cost to hire a WordPress developer for a fix?",
        a: "Most single fixes — a critical error, a broken form, a PHP compatibility problem — cost $99 to $199. Speed optimization and malware cleanup usually run $299 to $399, custom blocks around $499, and a full custom theme from a design starts near $1,499. The fixed price is in the proposal, and if we can't deliver the agreed scope you get a full refund.",
      },
      {
        q: "Can you clean up a hacked WordPress site?",
        a: "Yes, within a clear scope. The agent removes injected code and rogue admin users, replaces core and plugin files with clean copies, resets security salts, and hardens logins and file permissions. What we can't do is trace the attacker or promise the site won't be hit again if the hosting account itself is compromised. We'll tell you if we find signs of that.",
      },
      {
        q: "Will you work with Elementor, Divi or another page builder?",
        a: "Yes. Plenty of sites are built that way, and rebuilding them from scratch isn't always worth it. The agent can fix broken builder layouts, create reusable templates and global widgets, or gradually move key pages to native blocks if the builder is slowing the site down. The proposal says which approach it recommends and why.",
      },
      {
        q: "How do I give a developer access to my WordPress admin?",
        a: "Never paste passwords into the job post. After kickoff, you create a separate administrator account for us, or share hosting access through the secure handover in your job room, and you delete that account once the work is approved. Changes go to a staging copy first wherever your host supports one, so the live site isn't the test bench.",
      },
      {
        q: "Will theme or plugin updates undo your changes?",
        a: "No — avoiding that is the main reason to do the work properly. Custom styling and functions go into a child theme or a small site-specific plugin, never into files a vendor update replaces. If a plugin itself has a bug, we patch around it with hooks where possible and note it, so you know what to check after future updates.",
      },
    ],
    related: ["woocommerce-developer", "php-developer", "website-developer", "bug-fixing"],
  },
  {
    slug: "shopify-developer",
    skill: "Shopify developer",
    article: "a",
    category: "ecommerce",
    metaTitle: "Hire a Shopify Developer — Fixed Price from $99 | GrahAI Systems",
    metaDescription:
      "Hire a Shopify developer for theme edits, custom sections, speed fixes or a store migration. An AI agent sends a fixed price in about a minute.",
    keywords: [
      "hire shopify developer",
      "shopify expert for hire",
      "shopify freelancer",
      "shopify theme customization",
      "shopify developer for hire",
      "shopify store speed optimization",
      "migrate woocommerce to shopify",
    ],
    intro:
      "Describe the change your store needs — a custom section, a theme fix, a faster homepage, a move from another platform. An AI agent quotes a fixed price in about a minute, and an engineer reviews the work.",
    overviewTitle: "Store work without another monthly app",
    overview: [
      "A lot of Shopify requests are small but fiddly: a size chart on product pages, a custom section the theme editor doesn't offer, a sticky add-to-cart bar, a cart drawer with a free-shipping progress bar, or a bundle display driven by metafields. Many merchants install an app for each of these and end up paying several monthly subscriptions while loading a dozen scripts. Much of that can be built directly into an Online Store 2.0 theme as sections and blocks you control.",
      "The agent works on a duplicate of your live theme, never the published one, and shares a preview link before anything goes live. It writes Liquid, JSON templates and theme settings so your team can change text, images and colors from the theme editor without touching code. For checkout, it works within Shopify's checkout extensibility: thank-you and order status page blocks on any plan, and checkout UI extensions or Shopify Functions where your plan allows them.",
      "Speed and migrations are the other two big categories. Slow stores are usually dragged down by leftover app code in theme files, oversized hero images and too many third-party scripts; the agent removes what's dead, defers what can wait, and reports before-and-after Lighthouse numbers. Migrations from WooCommerce, Wix or BigCommerce cover products, variants, customers, collections and 301 redirects from old URLs, so existing links and search history follow you to the new store.",
    ],
    tasks: [
      { title: "Add a size chart or custom tab to product pages", price: 99, days: 1 },
      { title: "Custom homepage section editable from the theme editor", price: 149, days: 1 },
      { title: "Free-shipping progress bar in the cart drawer, no app", price: 199, days: 2 },
      { title: "Speed cleanup: remove leftover app code and defer scripts", price: 349, days: 3 },
      { title: "Metafield-driven product bundles and comparison tables", price: 599, days: 5 },
      { title: "Migrate a WooCommerce store to Shopify with URL redirects", price: 1299, days: 8 },
    ],
    deliverables: [
      "Changes built on a duplicate theme, with a preview link before publishing",
      "Sections and settings your team can edit in the Shopify theme editor",
      "Before-and-after speed numbers for any performance work",
      "A note of every file and metafield touched, for future developers",
      "Two revision rounds after you check the theme preview",
    ],
    sampleTitle: "Shopify cart drawer upsell and free shipping bar",
    sampleBrief:
      "We sell coffee on Shopify using the Dawn theme. I want the cart drawer to show a progress bar toward free shipping at $50 and suggest one or two products from a collection I choose. We tried two apps and both slowed the store down, so I'd prefer this built into the theme. It needs to work on mobile and update without a page reload.",
    limits:
      "If you need a brand-new public app for the Shopify App Store, or deep Shopify Plus checkout work tied to an ERP, the scope and review cycles go well beyond a fixed-price job. Bring that to our custom-project team or a dedicated Shopify agency.",
    faqs: [
      {
        q: "How much does a Shopify developer cost for small changes?",
        a: "Small theme edits like a size chart or a custom section are $99 to $149. Cart features and app-free functionality usually fall between $199 and $599, and a speed cleanup is around $349. A full migration from another platform typically starts at $1,299, depending on how many products and customers you have. The proposal shows the fixed price before you pay.",
      },
      {
        q: "Do I need to give you my Shopify password?",
        a: "No. After kickoff we send a collaborator request that you approve in your Shopify admin, limited to the permissions the job needs, and you can remove it the moment the work is approved. Nothing about access goes in the job post, and we never ask for the store owner login.",
      },
      {
        q: "Can you build features without installing more apps?",
        a: "Often, yes. Size charts, badges, upsell blocks, announcement bars, simple bundles and FAQ tabs can live directly in your theme as sections and blocks, which means no monthly fee and fewer scripts. Some things genuinely need an app, such as subscriptions or a full reviews system, and the agent will say so in the proposal instead of forcing a theme hack.",
      },
      {
        q: "Can you customize the Shopify checkout?",
        a: "Within what Shopify allows. On any plan we can add blocks to the thank-you and order status pages and configure automatic discounts. Changes inside the checkout steps themselves, such as extra fields or in-checkout upsells, need checkout UI extensions, which Shopify limits to Plus stores. The agent checks your plan first and tells you what's possible before quoting.",
      },
      {
        q: "Will moving my store to Shopify hurt my search traffic?",
        a: "A migration always carries some risk, and we can't promise rankings. What we do is map every old product, category and page URL to its new Shopify address, set up 301 redirects, keep product titles and descriptions intact, and check for broken links before launch. That handles the mistakes behind most post-migration traffic drops.",
      },
    ],
    related: ["woocommerce-developer", "landing-page-developer", "figma-to-code", "stripe-integration-developer"],
  },
  {
    slug: "webflow-developer",
    skill: "Webflow developer",
    article: "a",
    category: "web",
    metaTitle: "Hire a Webflow Developer — CMS & Figma Builds, $99+ | GrahAI Systems",
    metaDescription:
      "Hire a Webflow developer for Figma-to-Webflow builds, CMS collections and interactions. Post the job and see a fixed price within about a minute, from $99.",
    keywords: [
      "hire webflow developer",
      "webflow expert",
      "webflow developer for hire",
      "figma to webflow",
      "webflow freelancer",
      "webflow cms developer",
      "webflow site cleanup",
    ],
    intro:
      "Share your Figma file or describe the Webflow change you need — a new CMS collection, a page rebuild, an interaction that won't behave. You'll have a fixed-price proposal from an AI agent within about a minute.",
    overviewTitle: "Webflow builds your marketing team can actually edit",
    overview: [
      "Teams choose Webflow because marketers can publish pages without waiting on engineers. That only holds if the site is built for it. A common problem is a site where every page uses one-off classes, blog posts are static pages instead of CMS items, and changing a button color means editing forty elements. Many Webflow jobs are really cleanup: restructuring classes, moving content into collections, and building components so the next landing page takes an hour, not a week.",
      "For new builds, the agent converts your Figma frames into Webflow with a consistent class system, variables for colors and type, and reusable components for navigation, footers, cards and calls to action. CMS collections are set up with the right field types — references, multi-references, option fields — so filtering and related-post lists work. Interactions are built with Webflow's native tools, and anything that needs custom code is kept small and documented in the page settings.",
      "Before anything is published, a GrahAI engineer reviews the build across breakpoints, checks that the CMS templates cope with long titles and empty fields, and confirms SEO settings, alt text and 301 redirects are in place. The site is built in, or transferred to, your own Webflow workspace, so the hosting plan, billing and ownership sit with you. We only need to be added as a collaborator while the job is open.",
    ],
    tasks: [
      { title: "Fix a broken interaction or mobile layout on one page", price: 99, days: 1 },
      { title: "Turn static blog pages into a CMS collection", price: 249, days: 2 },
      { title: "Build one landing page from a Figma frame", price: 299, days: 3 },
      { title: "Filterable resource library using CMS references", price: 499, days: 4 },
      { title: "Rebuild the class structure and components of a messy site", price: 699, days: 5 },
      { title: "Full Figma-to-Webflow build, 8 pages plus blog and CMS", price: 1999, days: 12 },
    ],
    deliverables: [
      "Pages built from your Figma file at desktop, tablet and mobile breakpoints",
      "CMS collections with field types that match your content",
      "Reusable components and a consistent class naming system",
      "SEO fields, alt text, Open Graph images and redirects configured",
      "Two revision rounds, plus a short editor walkthrough video",
    ],
    sampleTitle: "Move our startup blog from static pages into Webflow CMS",
    sampleBrief:
      "Our Webflow site has about 40 blog posts that were each built as a separate static page, so every new post means duplicating a page and editing it by hand. I want a Blog Posts collection with author and category references, a template page that matches our current design, category filter pages, and 301 redirects so the existing URLs still work.",
    limits:
      "An agent builds from a design; it isn't a substitute for a designer if you don't have one yet. And if your project needs logged-in users or a large product catalog, Webflow itself may be the wrong platform — we'll say so and suggest Next.js or Shopify instead.",
    faqs: [
      {
        q: "What does a Webflow developer cost per page?",
        a: "One page built from an existing Figma frame is usually around $299, and fixes to a single interaction or layout start at $99. Turning static pages into a CMS collection is about $249, a filterable library about $499, and a full multi-page build with a blog typically lands near $1,999. You see the fixed figure in the proposal, and two revision rounds are included.",
      },
      {
        q: "Do you build in my Webflow workspace or yours?",
        a: "Yours, ideally. Invite us to your workspace after kickoff and we build there, so billing and the site plan stay in your account from day one. If you don't have a workspace yet, we can build and then transfer the site to you. Either way you own the site and everything in it once the job is approved.",
      },
      {
        q: "Can you match our Figma design exactly?",
        a: "Closely, yes. Spacing, type scale, colors and components come straight from the file. Where Figma only has a desktop frame, the agent makes reasonable tablet and mobile decisions and flags them for your review. Variables and auto layout in your file make the result more faithful, but a less organized file still works — it just means more questions up front.",
      },
      {
        q: "Will my marketing team be able to edit the site after you're done?",
        a: "That's the point of the build. Repeated content lives in CMS collections, shared elements are components, and classes follow one naming system so nobody has to guess. We include a short walkthrough video showing how to add a post, duplicate a landing page and swap images without breaking layouts.",
      },
      {
        q: "Can you add things Webflow doesn't do natively, like advanced filtering?",
        a: "Within reason. Filtering, sorting and load-more on CMS lists can be done with small, documented scripts or established attribute libraries, and forms can be sent to your CRM through a webhook or an automation tool. If a requirement would turn the site into custom software, the proposal says so and suggests a better-suited platform.",
      },
    ],
    related: ["figma-to-code", "landing-page-developer", "website-developer", "nextjs-developer"],
  },
  {
    slug: "woocommerce-developer",
    skill: "WooCommerce developer",
    article: "a",
    category: "ecommerce",
    metaTitle: "Hire a WooCommerce Developer — Fixed Price from $99 | GrahAI Systems",
    metaDescription:
      "Hire a WooCommerce developer for checkout fixes, payment gateways, shipping rules and product imports. Quoted at a fixed price by an AI agent in about a minute.",
    keywords: [
      "hire woocommerce developer",
      "woocommerce expert",
      "woocommerce developer for hire",
      "woocommerce freelancer",
      "woocommerce customization",
      "fix woocommerce checkout",
      "woocommerce payment gateway integration",
    ],
    intro:
      "Tell us what's wrong with your WooCommerce store or what it needs to do next — a checkout field, a shipping rule, a payment gateway, a product import. An AI agent prices the whole job in about a minute.",
    overviewTitle: "Store logic that holds up at checkout",
    overview: [
      "WooCommerce problems are rarely about looks. They're things like orders stuck in pending payment, a gateway that fails only for certain cards, tax calculated on the wrong address, shipping that ignores a weight rule, or a checkout that breaks when two plugins try to modify the same field. These cost money every hour they're live, and they need someone who can read logs and hooks rather than reinstalling plugins at random.",
      "The agent reproduces the problem on a staging copy with test orders, traces it through WooCommerce's hooks and the order notes, and fixes it in a small custom plugin instead of editing core or theme files. It checks compatibility with High-Performance Order Storage and the block-based Cart and Checkout, since many older snippets and extensions still assume the classic checkout. Payment work is tested end to end in the gateway's sandbox before it goes near real customers.",
      "Building out a store is the other half: importing thousands of products with variations from a supplier spreadsheet, adding custom fields to checkout, setting up Stripe, PayPal or Razorpay, writing shipping rules by zone and weight, or generating GST or VAT invoices as PDFs. We configure the tax rates and rules you give us; we don't advise on tax law. General WordPress work like themes and site speed is covered on our WordPress developer page.",
    ],
    tasks: [
      { title: "Fix orders stuck in pending payment or failed status", price: 149, days: 1 },
      { title: "Add custom fields to checkout and save them on the order", price: 199, days: 2 },
      { title: "Set up Stripe, PayPal or Razorpay with sandbox testing", price: 249, days: 2 },
      { title: "Shipping rules by zone, weight and shipping class", price: 349, days: 3 },
      { title: "Import 2,000+ products with variations from a CSV", price: 499, days: 4 },
      { title: "Wholesale pricing tiers and a quote-request workflow", price: 1299, days: 9 },
    ],
    deliverables: [
      "Fixes and features delivered as a small custom plugin, not core edits",
      "Test orders run on staging, including failed and refunded payments",
      "Compatibility checked against HPOS and the block checkout",
      "Notes on which hooks, templates and settings were changed",
      "Two revision rounds after you've placed your own test orders",
    ],
    sampleTitle: "WooCommerce shipping rates wrong for heavy items",
    sampleBrief:
      "Our WooCommerce store sells garden furniture across the US. Customers ordering heavy items are getting the flat $15 rate instead of freight pricing, and we've lost money on about a dozen orders. I need shipping to switch to a freight rate over 70 lbs, stay flat under that, and show a message at checkout explaining the freight charge. We use Flexible Shipping and a Storefront child theme.",
    limits:
      "If your catalog runs to hundreds of thousands of products with real-time ERP or warehouse sync, you need ongoing engineering, not a one-off job. Likewise, deciding whether a large business should stay on WooCommerce at all is a call for a consultant who can spend time with your team.",
    faqs: [
      {
        q: "How much does it cost to hire a WooCommerce developer?",
        a: "Single fixes like stuck orders or a broken checkout field are $149 to $199. Payment gateway setup is around $249, shipping rules about $349, and large product imports near $499. Wholesale pricing or quote workflows usually start at $1,299. The proposal states the fixed price, and if we can't deliver what was agreed you get a full refund.",
      },
      {
        q: "Can you fix a WooCommerce checkout that broke after an update?",
        a: "Yes, and it's one of the most common requests. The agent copies the site to staging, runs the update there, and narrows the conflict to the specific plugin, snippet or template override. Outdated theme overrides of checkout templates are frequent culprits. The fix goes into a custom plugin so the next update doesn't break it again.",
      },
      {
        q: "Do you support the block-based checkout?",
        a: "Yes. Many stores are moving from the classic shortcode checkout to the Cart and Checkout blocks, and older custom fields and plugins often don't show up there. The agent checks which version you're on, uses the block checkout's own extension points where needed, and tells you if a plugin you rely on still only supports the classic checkout.",
      },
      {
        q: "Can you connect a payment gateway like Razorpay or Stripe?",
        a: "Yes. We install the gateway's official extension, you enter the keys yourself in the settings, and we run sandbox payments, declined cards and refunds before switching to live mode. We also check that webhooks reach your site, so orders move to processing automatically instead of staying pending when a customer closes the tab early.",
      },
      {
        q: "Will you need access to my customers' data?",
        a: "Only what the job needs. Most work happens on a staging copy, and if your database holds personal data we can work with anonymized orders. Admin access is created by you after kickoff and removed when you approve the delivery. Card numbers are handled by your payment gateway, not stored by WooCommerce, so they're never part of the job.",
      },
    ],
    related: ["wordpress-developer", "shopify-developer", "stripe-integration-developer", "php-developer"],
  },
  {
    slug: "react-developer",
    skill: "React developer",
    article: "a",
    category: "web",
    metaTitle: "Hire a React Developer — Fixed Price, Reviewed Code | GrahAI Systems",
    metaDescription:
      "Hire a React developer for components, dashboards, bug fixes and TypeScript migrations. An AI agent sends a fixed-price proposal in about a minute, from $99.",
    keywords: [
      "hire react developer",
      "react developer for hire",
      "freelance react developer",
      "react js developer",
      "reactjs freelancer",
      "react frontend developer",
      "hire react js developer",
    ],
    intro:
      "Point us to your React codebase or describe the interface you need. An AI agent comes back in about a minute with a fixed price, then builds components that fit the patterns you already use.",
    overviewTitle: "React work that fits into your codebase",
    overview: [
      "Most React jobs aren't greenfield. Someone already has an app with a component library, a state management choice and a few years of decisions baked in, and they need one more feature, a stubborn bug fixed, or a slow screen made fast. Rewriting things in the newcomer's preferred style is the quickest way to make that codebase worse. The useful skill is reading what's there and extending it in the same voice.",
      "Our React agent starts by reading your repository: how components are organized, whether you use Redux, Zustand, React Query or plain context, how styling is done, and what your linting and test setup expects. New components follow those patterns, are typed if you use TypeScript, and come with tests in React Testing Library or whatever you already run. A GrahAI engineer reviews the pull request before you see it.",
      "Performance and upgrade work make up a big share of requests. Typical cases: a table that freezes with five thousand rows, a form that re-renders on every keystroke, effects that fire twice and double-submit, or a Create React App project that needs to move to Vite. Each fix is measured with the React profiler or a bundle analyzer, so you can see what changed rather than taking it on faith.",
    ],
    tasks: [
      { title: "Fix a component that re-renders or fetches data twice", price: 99, days: 1 },
      { title: "Build a reusable modal, tabs or data table component", price: 199, days: 2 },
      { title: "Virtualize a slow table so it handles thousands of rows", price: 299, days: 3 },
      { title: "Migrate a Create React App project to Vite", price: 399, days: 3 },
      { title: "Convert a mid-size JavaScript React app to TypeScript", price: 999, days: 7 },
      { title: "Admin dashboard with charts, filters and role-based views", price: 1999, days: 12 },
    ],
    deliverables: [
      "Components that follow your existing structure, styling and state patterns",
      "Unit and interaction tests for new behavior",
      "A pull request with a clear description of every change",
      "Before-and-after measurements for performance work",
      "Two revision rounds on the delivered branch",
    ],
    sampleTitle: "React data table freezing with large datasets",
    sampleBrief:
      "Our internal React app has an orders table that freezes the browser when a customer has more than 3,000 orders. It's a custom table built on top of MUI, with sorting and inline editing. I need it to scroll smoothly with 20,000 rows, keep sorting and editing working, and not change how the rest of the page looks. We use TypeScript and React Query.",
    limits:
      "An agent isn't the right hire for designing a product's front-end architecture from scratch alongside a large team, or for a long-running rewrite that needs daily coordination. Those benefit from an embedded senior engineer who sits in your planning meetings.",
    faqs: [
      {
        q: "How much does a React developer cost for a single feature?",
        a: "A focused bug fix starts at $99, and a reusable component like a modal or data table is usually around $199. Performance and tooling work, such as virtualization or a Vite migration, falls between $299 and $399. Larger efforts — a TypeScript conversion or a new dashboard — range from $999 to $1,999, quoted as a fixed price up front.",
      },
      {
        q: "Can you work with our component library and design system?",
        a: "Yes. Whether you use MUI, Chakra, Ant Design, shadcn/ui, Tailwind or your own internal library, the agent builds with it rather than adding a second one. It reuses your existing tokens and primitives, and if a component you need doesn't exist yet, it builds it to the same API conventions as the rest.",
      },
      {
        q: "Do you write tests for React components?",
        a: "Yes, for the behavior that matters: what renders, what happens on click or submit, and edge cases like empty, loading and error states. Tests use React Testing Library with Jest or Vitest, matching your setup. We don't pad coverage with snapshot tests that break on every style tweak.",
      },
      {
        q: "Can you upgrade an old React app to a newer version?",
        a: "Yes. Common jobs include replacing class components with hooks, removing deprecated lifecycle methods, moving from Create React App to Vite, and upgrading to React 18 or 19 with the new root API and stricter effects. Upgrades are done in small commits so you can review each step, and the proposal notes any libraries that block the upgrade.",
      },
      {
        q: "How do I share a private repository safely?",
        a: "After kickoff, add us as a collaborator on GitHub, GitLab or Bitbucket with access limited to that one repository; nothing goes in the public job post. We work on a branch and open a pull request, so nothing reaches your main branch without your approval, and you can revoke access as soon as the job closes.",
      },
    ],
    related: ["nextjs-developer", "figma-to-code", "dashboard-developer", "react-native-developer"],
  },
  {
    slug: "nextjs-developer",
    skill: "Next.js developer",
    article: "a",
    category: "web",
    metaTitle: "Hire a Next.js Developer — Fixed Price from $99 | GrahAI Systems",
    metaDescription:
      "Hire a Next.js developer for SEO-ready sites, router migrations, hydration fixes and auth. Priced by an AI agent in about a minute; code reviewed by an engineer.",
    keywords: [
      "hire nextjs developer",
      "next.js developer for hire",
      "nextjs freelancer",
      "next js developer",
      "hire next.js expert",
      "next.js website developer",
      "nextjs seo developer",
    ],
    intro:
      "Describe the Next.js site or feature you need — a marketing site, a blog, a migration, a bug that only shows up in production. An AI agent sends back a fixed price in about a minute.",
    overviewTitle: "Next.js sites that are fast and findable",
    overview: [
      "People usually pick Next.js for two reasons: pages that search engines can read, and a React codebase that can grow into an app. Typical jobs reflect that. Marketing sites and blogs that need proper metadata, sitemaps and structured data; product pages generated from a CMS or database; and existing projects that need to move from the Pages Router to the App Router, or that broke after a major version upgrade.",
      "The agent decides per route between static generation, incremental revalidation and server rendering, based on how often the content changes, and keeps client-side JavaScript to the components that actually need it. It uses Server Components and server actions where they simplify the code, not because they're new. Metadata, canonical tags, Open Graph images and the sitemap are generated from the same data as the pages, so they stay correct as content is added.",
      "Bugs in Next.js projects have their own flavor: hydration mismatches from dates or random values, caching that serves stale data, middleware that redirects in a loop, or images that look fine locally and break in production. These get reproduced in a production build, not just the dev server. Delivery is a pull request reviewed by a GrahAI engineer, deployed to the hosting you already use, whether that's a managed platform, a Node server or a container.",
    ],
    tasks: [
      { title: "Fix a hydration mismatch or production-only build error", price: 99, days: 1 },
      { title: "Add metadata, sitemap, robots and structured data to every page", price: 249, days: 2 },
      { title: "Add sign-in with email and Google using Auth.js", price: 399, days: 3 },
      { title: "MDX or headless CMS blog with tags and an RSS feed", price: 499, days: 4 },
      { title: "Move a 20-page project from the Pages Router to the App Router", price: 999, days: 7 },
      { title: "Marketing site with CMS, 10–12 page templates and contact flows", price: 1999, days: 12 },
    ],
    deliverables: [
      "A rendering strategy chosen per route and explained in the README",
      "Metadata, canonical tags, sitemap and Open Graph images wired to your data",
      "A production build tested locally before handover",
      "Pull request with deployment notes for your hosting",
      "Two revision rounds after you review the production build",
    ],
    sampleTitle: "Next.js blog pages not showing up properly in Google",
    sampleBrief:
      "Our company site is built with Next.js 14 and the blog posts come from Contentful. Google is indexing the posts but showing the same title and description for all of them, and there's no sitemap. I need per-post metadata, canonical URLs, an automatically updated sitemap, Article structured data, and Open Graph images generated from each post title.",
    limits:
      "If your project depends on complex infrastructure — multi-region edge logic, multi-tenant routing, or a monorepo shared by many teams — it needs an engineer who can own it over months. An agent fits bounded features and fixes well, and that kind of ongoing architecture poorly.",
    faqs: [
      {
        q: "What does a Next.js developer cost for an SEO or migration job?",
        a: "Bug fixes start at $99, and a full metadata, sitemap and structured data pass is about $249. Adding sign-in or a blog runs $399 to $499. Moving a 20-page project to the App Router is around $999, and a complete marketing site with a CMS is typically $1,999. The fixed price is shown before you pay.",
      },
      {
        q: "Should my site use the App Router or the Pages Router?",
        a: "For new work, the App Router is the default and it's what the agent uses. For an existing Pages Router project, migration isn't urgent unless you need features like Server Components or nested layouts. Both routers can run side by side, so the agent can move a few routes at a time instead of rewriting everything at once.",
      },
      {
        q: "Can you fix a hydration error that only appears in production?",
        a: "Yes. These usually come from rendering something that differs between server and browser — the current time, a random ID, a browser-only API, or invalid HTML nesting. The agent reproduces the error in a production build, finds the component responsible, and fixes it at the source rather than suppressing the warning.",
      },
      {
        q: "Do you deploy the site for us?",
        a: "We deploy to the hosting account you choose, connected through your own repository. That can be a managed Next.js host, a Node server, a Docker container, or a static export for sites that don't need a server. You keep the account; we leave deployment notes and environment variable names, and you enter the secret values yourself.",
      },
      {
        q: "Can you connect Next.js to our headless CMS?",
        a: "Yes — Contentful, Sanity, Strapi, Storyblok, WordPress as a headless source, or a simple folder of Markdown files. The agent sets up typed data fetching, draft previews, and on-demand revalidation so published edits appear in seconds without a full rebuild. Editors keep working in the CMS they already know.",
      },
    ],
    related: ["react-developer", "nodejs-developer", "landing-page-developer", "website-developer"],
  },
  {
    slug: "nodejs-developer",
    skill: "Node.js developer",
    article: "a",
    category: "web",
    metaTitle: "Hire a Node.js Developer — APIs & Backends from $99 | GrahAI Systems",
    metaDescription:
      "Hire a Node.js developer for REST APIs, webhooks, background jobs and version upgrades. Fixed-price proposal from an AI agent in about a minute, engineer-reviewed.",
    keywords: [
      "hire node js developer",
      "node.js developer for hire",
      "nodejs freelancer",
      "express js developer",
      "node js backend developer",
      "nestjs developer",
      "node js api developer",
    ],
    intro:
      "Describe the API, webhook handler or background job you need, or the Node service that's misbehaving. An AI agent replies in about a minute with a fixed price and a delivery date.",
    overviewTitle: "Backend jobs with clear inputs and outputs",
    overview: [
      "Node.js backend work is often invisible until it fails: a webhook from Stripe or Shopify that silently stops processing, a nightly job that overlaps with itself, an Express API that leaks memory until the server restarts, or a service stuck on Node 14 that can no longer be deployed. Other jobs are additions — a new set of endpoints for a mobile app, a CSV export, or a queue for slow work like sending emails or resizing images.",
      "The agent writes TypeScript or JavaScript to match your project, uses the framework you already have — Express, Fastify, NestJS or Hono — and validates every input at the boundary with a schema library like Zod. Webhook handlers verify signatures and are idempotent, so a retried event doesn't create a duplicate order. Database access goes through your existing layer, whether that's Prisma, Drizzle, Mongoose or plain SQL, with migrations rather than manual edits.",
      "Every delivery includes tests for the endpoints or jobs that changed and a short note on how to run them. A GrahAI engineer reviews the code for the problems that hurt in production — missing error handling, unbounded queries, secrets written to logs — before you receive it. Credentials stay in environment variables you control, and we never need them pasted into chat.",
    ],
    tasks: [
      { title: "Fix an Express route that crashes or times out", price: 99, days: 1 },
      { title: "Verified, idempotent webhook handler for Stripe or Shopify", price: 249, days: 2 },
      { title: "Upgrade a service from Node 14 or 16 to a current LTS release", price: 349, days: 3 },
      { title: "Background job queue with retries for emails or image processing", price: 499, days: 4 },
      { title: "Find and fix a memory leak in a long-running service", price: 599, days: 5 },
      { title: "REST API with auth, 10–15 endpoints and Postgres for a mobile app", price: 1499, days: 10 },
    ],
    deliverables: [
      "Typed, validated endpoints or jobs that fit your existing structure",
      "Integration tests and a sample request collection for each endpoint",
      "Database migrations instead of manual schema changes",
      "Structured logging that leaves secrets and personal data out",
      "Two revision rounds once the code is running on your side",
    ],
    sampleTitle: "Stripe webhooks creating duplicate orders in our Node API",
    sampleBrief:
      "We run an Express API on Node 18 with MongoDB. Our Stripe checkout.session.completed webhook sometimes creates two orders for one payment, probably when Stripe retries. I need the handler fixed so it verifies the signature, processes each event exactly once, and logs failures somewhere we can see them. Please include tests that simulate a retried event.",
    limits:
      "An agent is a poor fit for running your production infrastructure, being on call, or designing a system that must handle very high traffic across many services. For that kind of ongoing ownership, hire a backend or platform engineer who can stay with the system.",
    faqs: [
      {
        q: "How much does it cost to hire a Node.js developer?",
        a: "Fixing a single crashing route starts at $99, and a webhook handler is around $249. Node version upgrades are typically $349, job queues $499, and memory-leak investigations about $599. A complete REST API for a mobile or web app usually lands between $1,299 and $1,999. Your proposal shows one fixed price before you pay.",
      },
      {
        q: "Can you upgrade our Node.js version without breaking things?",
        a: "That's the aim of how we approach it. The agent moves Node forward in steps, replaces dependencies that no longer support newer versions, fixes deprecated APIs, and runs your test suite at each step. If you don't have tests, it first adds a small set around the critical paths, so there's something to check the upgrade against.",
      },
      {
        q: "Which frameworks and databases do you work with?",
        a: "Express, Fastify, NestJS, Koa and Hono on the framework side; Postgres, MySQL, MongoDB, Redis and SQLite for storage; and Prisma, Drizzle, Sequelize, TypeORM or Mongoose as the access layer. The agent sticks with whatever your project already uses rather than introducing new tools halfway through.",
      },
      {
        q: "How do you handle API keys and database credentials?",
        a: "They live in environment variables on your machine or server, never in the code or the job room. The delivery includes an example env file with variable names and placeholder values. If we need to test against a real service, we use test-mode keys you issue to us after kickoff and can revoke when the job closes.",
      },
      {
        q: "Can you build a backend for our mobile app?",
        a: "Yes. Tell us what the app does and which screens need data, and the agent designs the endpoints, authentication and database schema to match. It delivers an OpenAPI description your app developer can work from, plus seed data for testing. If you also need the app itself, our Flutter and React Native pages cover that side.",
      },
    ],
    related: ["api-integration-developer", "stripe-integration-developer", "nextjs-developer", "firebase-developer"],
  },
  {
    slug: "php-developer",
    skill: "PHP developer",
    article: "a",
    category: "web",
    metaTitle: "Hire a PHP Developer — Laravel & Legacy Fixes, $99+ | GrahAI Systems",
    metaDescription:
      "Hire a PHP developer for Laravel features, PHP 8 upgrades and legacy code fixes. An AI agent sends a fixed-price proposal in about a minute; an engineer reviews it.",
    keywords: [
      "hire php developer",
      "php developer for hire",
      "freelance php developer",
      "laravel developer for hire",
      "php 8 upgrade",
      "fix php errors",
      "codeigniter developer",
    ],
    intro:
      "Send the PHP problem — an old site that won't run on PHP 8, a Laravel feature, a custom admin panel that needs changes. Within about a minute, an AI agent replies with a price and a plan.",
    overviewTitle: "Old and new PHP, handled carefully",
    overview: [
      "A large share of the web still runs on custom PHP written years ago: a booking system on a shared host, an internal admin panel, a CodeIgniter 3 app nobody has touched since its author left. When the host retires PHP 7.4, these break in ways that are tedious but very fixable — removed functions, stricter type errors, mysql_* calls that no longer exist, and warnings that suddenly become fatal errors.",
      "For legacy code, the agent works from a copy of your site and database, clears one class of error at a time, and replaces string-built SQL with prepared statements as it goes, which closes the most common injection holes. It doesn't restructure the whole application unless you ask; the aim is a working system on a supported PHP version, with a list of what changed and anything risky it found along the way.",
      "Modern PHP jobs are mostly Laravel: new features with controllers, Eloquent models and migrations; queued jobs; API endpoints for a front end; or upgrades across major Laravel versions. The agent follows Laravel conventions, writes feature tests with Pest or PHPUnit, and manages dependencies through Composer. A GrahAI engineer reviews every delivery, and deployment can go to your VPS, shared hosting or a server managed through Laravel Forge.",
    ],
    tasks: [
      { title: "Repair a broken contact or enquiry form with email delivery", price: 99, days: 1 },
      { title: "Fix fatal errors after the host upgraded to PHP 8", price: 149, days: 1 },
      { title: "Replace mysql_* calls with PDO prepared statements", price: 399, days: 3 },
      { title: "New Laravel feature with model, migration, controller and tests", price: 499, days: 4 },
      { title: "Upgrade a Laravel app across two major versions", price: 999, days: 7 },
      { title: "Custom Laravel admin panel for orders, users and reports", price: 1999, days: 14 },
    ],
    deliverables: [
      "Code running on a supported PHP version, tested on a copy of your site",
      "Prepared statements in place of string-built SQL wherever code was touched",
      "Feature tests for new Laravel functionality",
      "Composer-managed dependencies and a deployment checklist",
      "Two revision rounds after you've tested on your own copy",
    ],
    sampleTitle: "Custom PHP booking site broken after PHP 8.1 upgrade",
    sampleBrief:
      "We have a custom PHP booking system for our guesthouse, written around 2014 and hosted on cPanel. The host moved us to PHP 8.1 and now the booking page shows a blank screen and the admin login says 'Call to undefined function mysql_connect'. I need it working on PHP 8.1 with the same features. I can give you a full backup of the files and database.",
    limits:
      "If the codebase is very large, undocumented and business-critical, a fixed-price job can fix the immediate breakage but can't replace a developer who learns the system over time. For a planned rewrite into a new framework, talk to our custom-project team first.",
    faqs: [
      {
        q: "How much does a PHP developer charge to fix an old site?",
        a: "Simple form or error fixes cost $99 to $149. Replacing deprecated database calls across a site is usually around $399. A new Laravel feature is about $499, a major Laravel upgrade near $999, and a custom admin panel around $1,999. The proposal gives one fixed price, and you're refunded in full if we can't deliver the agreed scope.",
      },
      {
        q: "Can you make my old PHP site work on PHP 8?",
        a: "In most cases, yes. The usual blockers are removed mysql_* functions, changed string and array functions, stricter handling of null and undefined variables, and old libraries that need replacing. The agent fixes these on a copy of your site, tests the main user flows, and lists anything it couldn't safely change without your input.",
      },
      {
        q: "Do you work with Laravel, Symfony or CodeIgniter?",
        a: "Yes — Laravel is most common, but the agent works in Symfony, CodeIgniter, CakePHP, Slim and plain PHP too. It follows the conventions of whatever framework you have and doesn't move you to another one unless that's the job you posted. Framework upgrades are quoted separately from feature work so the scope stays clear.",
      },
      {
        q: "Is my site vulnerable if it was written years ago?",
        a: "Possibly. Old PHP often builds SQL from user input, prints output without escaping, and accepts file uploads without checks. The agent flags these as it works, fixes the ones inside the agreed scope, and lists the rest with a suggested price. That isn't a formal security audit or penetration test, and we don't present it as one.",
      },
      {
        q: "Can you deploy to shared hosting with cPanel?",
        a: "Yes. Plenty of PHP sites live on cPanel or similar shared hosting, and the agent writes code that works within those limits — no long-running processes, standard extensions only, and cron jobs set through the panel. For a VPS, we include server steps too. Hosting details are handed over securely after kickoff, never in the job post.",
      },
    ],
    related: ["wordpress-developer", "bug-fixing", "sql-developer", "api-integration-developer"],
  },
  {
    slug: "figma-to-code",
    skill: "Figma to code developer",
    article: "a",
    category: "web",
    metaTitle: "Hire a Figma to Code Developer — Fixed Price | GrahAI Systems",
    metaDescription:
      "Turn Figma designs into responsive HTML, React, Next.js or Webflow. Hire a Figma to code developer and get a fixed-price proposal from an AI agent in about a minute.",
    keywords: [
      "figma to code",
      "figma to html",
      "figma to react",
      "convert figma to website",
      "hire figma developer",
      "figma to tailwind",
      "figma to code service",
    ],
    intro:
      "Share your Figma file and tell us what it should become — HTML and CSS, React components, a Next.js site or a theme. The agent looks through the frames and quotes one fixed price in about a minute.",
    overviewTitle: "From frames to working, responsive pages",
    overview: [
      "A Figma file looks finished, but it leaves out many decisions a developer has to make. What happens between the mobile and desktop frames? How does a card behave when the title runs to three lines? What does the button look like when it's focused, disabled or loading? Converting designs well means answering those questions in a way the designer would agree with, and flagging the ones that genuinely need their call.",
      "The agent reads the file's structure, not just its pixels: auto layout becomes flexbox or grid, variables and styles become design tokens, and repeated frames become components. You choose the output — semantic HTML with Tailwind or plain CSS, React or Next.js components, a WordPress or Shopify theme section, or a Webflow build. Images and icons are exported at the right sizes and formats, with SVGs cleaned up for inline use.",
      "Before delivery, a GrahAI engineer compares the build to the design side by side at each breakpoint and checks keyboard navigation, focus styles, color contrast and heading order, since accessibility issues are invisible in a static mockup. You receive the code plus a short list of decisions the agent made where the file was silent, so your designer can review them in one pass instead of discovering them later.",
    ],
    tasks: [
      { title: "Convert one Figma section into responsive HTML and CSS", price: 99, days: 1 },
      { title: "Single landing page from Figma to HTML and Tailwind", price: 249, days: 2 },
      { title: "Export Figma variables to CSS custom properties and a Tailwind config", price: 299, days: 2 },
      { title: "Five-page marketing site from Figma, with mobile layouts inferred", price: 699, days: 5 },
      { title: "Set of 10–15 React components from a Figma design system", price: 799, days: 6 },
      { title: "Full web app UI, 15–20 screens, built as React components", price: 2499, days: 15 },
    ],
    deliverables: [
      "Code in your chosen format: HTML/CSS, Tailwind, React, Next.js or a theme",
      "Responsive layouts for every breakpoint, including ones the file doesn't show",
      "Optimized image and SVG assets exported from the file",
      "Accessibility pass covering semantic markup, focus states and contrast",
      "A list of design gaps and the choices made, plus two revision rounds",
    ],
    sampleTitle: "Figma SaaS homepage to Next.js and Tailwind",
    sampleBrief:
      "I have a Figma file for our SaaS homepage with desktop and mobile frames, built with auto layout and color variables. I need it coded as a Next.js page with Tailwind, split into sensible components, with the pricing toggle and FAQ accordion working. Hover and focus states aren't in the file, so please propose them. I'll share view access to the file.",
    limits:
      "An agent builds from your design; it isn't a designer. If the Figma file is a rough sketch, missing most screens, or you want the visual design itself improved, a product designer should finish it first, and we can code it afterward.",
    faqs: [
      {
        q: "How much does it cost to convert a Figma design to code?",
        a: "A single section is $99 and one landing page usually comes to about $249. Exporting design tokens is around $299, a five-page site about $699, and a component library of 10–15 pieces near $799. A full application UI of 15–20 screens is typically $2,499. The price depends on screen count and output format, and it's fixed in your proposal.",
      },
      {
        q: "What if my Figma file only has desktop designs?",
        a: "That's common. The agent infers tablet and mobile layouts from the desktop frames — stacking columns, resizing type, collapsing navigation — and documents each decision so your designer can approve or adjust it. If a section has no obvious mobile treatment, it flags that and asks before building, rather than guessing silently.",
      },
      {
        q: "Will the result be pixel-perfect?",
        a: "It will match the design closely at the sizes shown in the file, and the engineer review compares them side by side. Between those sizes, the layout adapts fluidly rather than snapping, which is how real screens behave. Fonts can render slightly differently in browsers than in Figma, and we point out any visible difference rather than hiding it.",
      },
      {
        q: "How should I share the Figma file?",
        a: "Share a view-only link or invite us as a viewer after kickoff; edit access is only needed if you want us to tidy the file itself. If the design uses paid fonts or licensed images, check that your license covers web use, or tell us and we'll suggest close free alternatives before the build starts.",
      },
      {
        q: "Can you code animations and prototype interactions from Figma?",
        a: "Yes, for the interactions shown in your prototype: hover states, dropdowns, carousels, smart-animate transitions between states, and scroll-triggered reveals. The agent uses CSS transitions where possible and a lightweight animation library only when needed, and it respects visitors who have turned on reduced motion in their system settings.",
      },
    ],
    related: ["react-developer", "webflow-developer", "landing-page-developer", "nextjs-developer"],
  },
  {
    slug: "landing-page-developer",
    skill: "landing page developer",
    article: "a",
    category: "web",
    metaTitle: "Hire a Landing Page Developer — Fixed Price from $99 | GrahAI Systems",
    metaDescription:
      "Hire a landing page developer for ad campaigns, waitlists and launches: fast pages with forms and tracking, priced up front by an AI agent in about a minute.",
    keywords: [
      "hire landing page developer",
      "landing page designer for hire",
      "landing page freelancer",
      "build a landing page",
      "landing page for google ads",
      "waitlist landing page",
      "sales page developer",
    ],
    intro:
      "Tell us what the page has to do — collect sign-ups, sell one product, back an ad campaign — and where its traffic will come from. An AI agent replies in about a minute with a fixed price.",
    overviewTitle: "One page, one job, built to load fast",
    overview: [
      "A landing page has a narrower job than a website: get a specific visitor to take one action. That changes the build. Paid traffic punishes slow pages, so the page should load in a couple of seconds on a mid-range phone. The headline should match the ad or email that sent people there. The form should ask for as little as possible and land in the tool you actually use, whether that's HubSpot, Mailchimp, a Google Sheet or your own CRM.",
      "The agent builds the page on whatever fits your setup: a lightweight static page on your own domain or subdomain, a Next.js route inside your existing app, or a page in WordPress or Webflow your team can edit. It wires up the tracking you need — Google Analytics events, the Meta Pixel, Google Ads conversions, UTM values captured into hidden form fields — and tests that each event fires before handover.",
      "If you're running experiments, the agent can build two or three variants with different headlines, offers or layouts, ready to split traffic through your ad platform or a testing tool. It can also draft copy from your notes, though the strongest pages usually come from your own understanding of the customer. We won't promise a conversion rate; we'll make sure nothing technical stands between the visitor and the button.",
    ],
    tasks: [
      { title: "Fix a landing page form that isn't reaching your CRM", price: 99, days: 1 },
      { title: "Waitlist page with email capture and a thank-you flow", price: 149, days: 1 },
      { title: "Landing page for a Google or Meta ad campaign with tracking", price: 299, days: 2 },
      { title: "Three A/B variants of an existing landing page", price: 399, days: 3 },
      { title: "Long-form sales page with pricing, FAQ and checkout link", price: 499, days: 4 },
      { title: "Five campaign pages on a shared template your team can edit", price: 1299, days: 7 },
    ],
    deliverables: [
      "A fast, responsive page on your domain or inside your existing site",
      "Form connected to your CRM, email tool or spreadsheet, with test submissions",
      "Analytics, pixel and conversion events verified as firing",
      "Meta tags and a share image for links posted on social media",
      "Two revision rounds before the campaign goes live",
    ],
    sampleTitle: "Landing page for a webinar sign-up campaign",
    sampleBrief:
      "I'm running LinkedIn and Meta ads for a free webinar on bookkeeping for small agencies. I need a single landing page on a subdomain of our site with a headline, three benefit sections, a short speaker bio, and a sign-up form that sends registrations to Mailchimp and tags them by ad source. It must load fast on mobile and fire Meta Pixel and LinkedIn Insight conversion events.",
    limits:
      "An agent won't replace a conversion copywriter or a growth marketer who studies your customers and plans the campaign itself. If you don't yet know what you're offering or who it's for, settle that first; the page is the last step, not the first.",
    faqs: [
      {
        q: "How much does a landing page cost to build?",
        a: "Form fixes start at $99 and a simple waitlist page is about $149. A campaign landing page with full tracking is usually $299, a set of A/B variants around $399, and a long-form sales page near $499. A templated set of five campaign pages is typically $1,299. Your proposal shows a single fixed price before checkout.",
      },
      {
        q: "Can you write the copy for my landing page?",
        a: "The agent can draft headlines, benefit sections and FAQs from your notes, your existing site and the ad you're running, and you can edit them during the revision rounds. The draft works well when you give it real specifics — who the page is for, the offer, the objections you hear. Generic inputs produce generic copy, so the brief matters.",
      },
      {
        q: "Will the page work with my Google Ads or Meta ads tracking?",
        a: "Yes. The agent installs the tags you use, sets up conversion events on form submit or button click, captures UTM parameters into the form so you can see which ad produced each lead, and tests events with each platform's own debugging tools. A consent banner can be added if your audience is in a region that requires one.",
      },
      {
        q: "Where will the landing page be hosted?",
        a: "Wherever suits you: a subdomain like go.yourcompany.com, a path on your existing site, or inside your WordPress or Webflow account so your team can edit it. Static pages can run on low-cost or free hosting. You own the page, the domain records and any accounts used, and we hand over all source files.",
      },
      {
        q: "Can you make a faster version of a page we already have?",
        a: "Often that's the quickest win. Many landing pages are slowed by page-builder bloat, uncompressed hero videos and several chat or tracking widgets loading at once. The agent can rebuild the same page leaner, keep your design and URL, and show before-and-after load times so you can judge whether the change is worth it.",
      },
    ],
    related: ["website-developer", "figma-to-code", "webflow-developer", "nextjs-developer"],
  },
  {
    slug: "flutter-developer",
    skill: "Flutter developer",
    article: "a",
    category: "mobile",
    metaTitle: "Hire a Flutter Developer — Fixed Price from $99 | GrahAI Systems",
    metaDescription:
      "Hire a Flutter developer for new screens, Firebase, payments, build fixes or an iOS and Android MVP. See an AI agent's fixed price in about a minute, before you pay.",
    keywords: [
      "hire flutter developer",
      "flutter developer for hire",
      "flutter freelancer",
      "flutter app developer",
      "hire flutter app developer",
      "flutter mobile app development",
      "fix flutter build error",
    ],
    intro:
      "Describe your Flutter app or the feature it's missing — a new screen, push notifications, in-app purchases, a build that won't compile. Roughly a minute later, an AI agent sends a fixed price and timeline.",
    overviewTitle: "One codebase for iOS and Android, built properly",
    overview: [
      "Flutter lets one codebase run on iOS and Android, which makes it popular with founders and small teams. The jobs that come in reflect where Flutter projects tend to get stuck: a build that fails after upgrading Flutter or Gradle, CocoaPods errors on iOS, a screen that janks on older Android phones, state that drifts out of sync between screens, or a feature like push notifications that works on one platform and not the other.",
      "The agent follows the state management your app already uses — Riverpod, Bloc, Provider or GetX — rather than introducing a second pattern. New screens come with widget tests, and logic that talks to a backend is separated so it can be tested without a device. Integrations are common: Firebase Auth, Firestore and Cloud Messaging; in-app purchases and subscriptions; maps; camera and file pickers; and offline storage with Drift, Hive or sqflite.",
      "When the work is ready, a GrahAI engineer reviews it and you get a build to install and test on your own phone. For releases, we prepare signed builds and store metadata and upload them through your own Google Play and App Store Connect accounts, so the app stays in your name. Apple and Google decide on approval and we can't promise it, but fixing review feedback on the code we delivered is part of your revision rounds.",
    ],
    tasks: [
      { title: "Fix a Flutter build broken by a Gradle or CocoaPods update", price: 149, days: 1 },
      { title: "Add a new screen with form validation and API calls", price: 249, days: 2 },
      { title: "Push notifications with Firebase Cloud Messaging on both platforms", price: 399, days: 3 },
      { title: "In-app purchases or subscriptions on iOS and Android", price: 799, days: 6 },
      { title: "Offline mode with local storage and background sync", price: 999, days: 8 },
      { title: "MVP app with sign-in, 8–10 screens and a Firebase backend", price: 3999, days: 25 },
    ],
    deliverables: [
      "Source code in your repository, following your existing architecture",
      "Widget and unit tests for new screens and logic",
      "Test builds for iOS and Android you can install on your devices",
      "Signed release builds and store listing assets when needed",
      "Two revision rounds after you've tested on your own phone",
    ],
    sampleTitle: "Add subscriptions to our Flutter fitness app",
    sampleBrief:
      "We have a Flutter fitness app live on both stores with about 30 screens, using Riverpod and Firebase. I want a monthly and yearly subscription that unlocks premium workouts, with a paywall screen, restore purchases, and the subscription status synced to the user's Firestore document so it works across devices. Products are already set up in App Store Connect and Google Play Console.",
    limits:
      "Apps that lean heavily on custom native code — Bluetooth hardware, continuous background location, or complex audio and video processing — often need a native iOS or Android engineer alongside Flutter. An agent also isn't a fit for building and maintaining a large app over many months without a product owner on your side.",
    faqs: [
      {
        q: "How much does it cost to hire a Flutter developer for an app?",
        a: "Build fixes start at $149 and a new screen is around $249. Push notifications are about $399, in-app purchases near $799, and offline sync roughly $999. A first version of a new app — sign-in, 8–10 screens and a backend — typically runs $2,999 to $4,999 depending on features. You see the fixed price before paying, and it only changes if the scope does.",
      },
      {
        q: "Will you publish the app to the App Store and Google Play?",
        a: "We prepare everything — signed builds, screenshots, descriptions, privacy details — and upload through your own developer accounts, which you create and pay for yourself. That keeps the app legally yours. Store reviewers make the final call, so approval can't be promised, but we fix review issues that trace back to the code we delivered.",
      },
      {
        q: "Can you take over a Flutter app another developer started?",
        a: "Yes. The agent first reads the codebase, checks that it builds on current Flutter, and lists anything blocking — outdated packages, missing signing setup, deprecated APIs. That assessment comes before the feature work so you know what you're inheriting. If the app needs repair before new work can start, the proposal prices that separately.",
      },
      {
        q: "Do I need a Mac for iOS builds?",
        a: "You don't need one yourself. iOS builds do require Xcode on macOS somewhere in the process, so the agent can set up a build pipeline in your own account, such as GitHub Actions or Codemagic, that produces signed iOS builds and uploads them to TestFlight. You keep that pipeline afterward for future releases.",
      },
      {
        q: "Which backend can a Flutter app connect to?",
        a: "Firebase is the most common pairing, and we also work with Supabase, REST or GraphQL APIs, and custom servers. If you don't have a backend yet, the proposal either includes one or points you to our Node.js or Firebase pages for a separate job. Secrets like API keys are kept out of the app bundle wherever possible.",
      },
    ],
    related: ["react-native-developer", "firebase-developer", "mvp-developer", "nodejs-developer"],
  },
  {
    slug: "react-native-developer",
    skill: "React Native developer",
    article: "a",
    category: "mobile",
    metaTitle: "Hire a React Native Developer — Fixed Price from $99 | GrahAI Systems",
    metaDescription:
      "Hire a React Native developer for Expo apps, version upgrades, push notifications and native modules. An AI agent proposes a fixed price in about a minute.",
    keywords: [
      "hire react native developer",
      "react native developer for hire",
      "react native freelancer",
      "expo developer",
      "react native app developer",
      "upgrade react native version",
      "react native expert",
    ],
    intro:
      "Tell us about your React Native app — Expo or bare, what's broken, what comes next. An AI agent replies in about a minute with a fixed price and delivery date, and an engineer reviews the work.",
    overviewTitle: "React Native jobs, from upgrades to new features",
    overview: [
      "React Native appeals to teams who already know React: much of the logic, and sometimes the components, can be shared with a web app. The trade-off is the native layer underneath. Upgrades between versions can break builds in Xcode and Gradle, a library that hasn't been updated for the New Architecture can hold the whole app back, and features like deep links or background tasks behave differently on iOS and Android.",
      "The agent first checks how your app is set up — Expo managed workflow, Expo with development builds, or a bare React Native project — because that determines how native features are added and how releases work. It prefers well-maintained Expo modules and config plugins, which keep native setup reproducible, and only writes custom native modules in Swift or Kotlin when nothing suitable exists. Navigation, state and data fetching follow what your app already uses.",
      "Version upgrades are among the most requested jobs, and they're handled in steps: dependencies first, then native project files, then a test pass on both platforms. A GrahAI engineer reviews each delivery, and you get installable builds for your own devices. For releases, the agent sets up EAS Build and Submit, or Fastlane for bare projects, under your accounts, and can configure over-the-air updates for JavaScript-only fixes.",
    ],
    tasks: [
      { title: "Fix a crash or red-screen error on iOS or Android", price: 99, days: 1 },
      { title: "Set up deep links and universal links for key screens", price: 249, days: 2 },
      { title: "Push notifications with Expo Notifications or Firebase", price: 349, days: 3 },
      { title: "Upgrade React Native across several versions on both platforms", price: 799, days: 6 },
      { title: "Write a small native module in Swift and Kotlin", price: 999, days: 7 },
      { title: "Expo app with sign-in, 8–10 screens and an API backend", price: 3499, days: 24 },
    ],
    deliverables: [
      "Code that follows your project's navigation, state and folder conventions",
      "Installable test builds for iOS and Android",
      "EAS or Fastlane release setup under your own accounts",
      "Tests for new logic and a manual test checklist for each platform",
      "Two revision rounds covering both iOS and Android",
    ],
    sampleTitle: "Upgrade our React Native app from 0.68 to a current version",
    sampleBrief:
      "Our React Native app is stuck on 0.68 and we can no longer submit to Google Play because of the target SDK requirement. It's a bare project with React Navigation, Redux Toolkit and about 25 third-party libraries, a few of which look abandoned. I need it upgraded to a current version that builds on both platforms, with replacements suggested for any dead libraries.",
    limits:
      "If your app is mostly custom native work — a camera pipeline, real-time audio, heavy Bluetooth use — React Native adds a layer you'll fight, and a native iOS or Android engineer is the better hire. Large teams needing daily collaboration on a shared codebase also gain more from an embedded developer.",
    faqs: [
      {
        q: "What does it cost to hire a React Native developer?",
        a: "Crash fixes start at $99, deep linking is around $249 and push notifications about $349. Multi-version upgrades usually come to $799, custom native modules about $999, and a new Expo app with sign-in and 8–10 screens typically $2,999 to $3,999. Every proposal shows a fixed price before you pay by card, with UPI available in India.",
      },
      {
        q: "Should we use Expo or bare React Native?",
        a: "For most new apps, Expo with development builds is the practical default: it handles native configuration through plugins and makes builds and over-the-air updates much easier. Bare React Native still makes sense if you carry significant custom native code. The agent recommends one based on your requirements and explains the trade-off in the proposal.",
      },
      {
        q: "Can you upgrade an old React Native app?",
        a: "Yes. The agent compares your project against the official upgrade diff for each version step, updates native files and dependencies, and replaces libraries that are abandoned or incompatible with the New Architecture. Large jumps are done in stages with a working build at each one, so if something regresses, it's clear which step caused it.",
      },
      {
        q: "Can you share code between our React web app and the mobile app?",
        a: "Often, yes. Business logic, API clients, validation and types can live in a shared package used by both. UI components can be shared through React Native Web or a cross-platform library, though it's usually cleaner to share logic and keep platform-specific screens. The agent proposes a split that fits your codebase.",
      },
      {
        q: "Can JavaScript fixes go out without a new store release?",
        a: "Yes, through over-the-air updates with EAS Update or a similar service, as long as the change doesn't touch native code. That's useful for urgent bug fixes and copy changes. Store policies still apply, so OTA updates shouldn't change the app's core purpose, and native changes always need a new build through review.",
      },
    ],
    related: ["flutter-developer", "react-developer", "mvp-developer", "firebase-developer"],
  },
];
