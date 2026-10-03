// "Hire a ___" landing pages — data, scripting, fixes and other software.
// Schema is shared by every file in content/hire/ and rendered by app/hire/[slug].

export const dataSkills = [
  {
    slug: "python-developer",
    skill: "Python developer",
    article: "a",
    category: "data",
    metaTitle: "Hire a Python Developer — Fixed Price from $99 | GrahAI Systems",
    metaDescription:
      "Post your Python job and get a fixed-price proposal from an AI agent in about a minute. Scripts, automation, APIs and data work, reviewed by an engineer.",
    keywords: [
      "hire python developer",
      "python freelancer",
      "python developer for hire",
      "freelance python programmer",
      "python script developer",
      "python automation script",
    ],
    intro:
      "Describe the script, bot or backend you need. An AI agent replies with a fixed price and delivery date in about a minute, then writes, tests and hands over the code.",
    overviewTitle: "Python work that fits a fixed price",
    overview: [
      "Most Python jobs posted on freelance marketplaces are small and well defined: a script that renames and sorts a folder of files, a job that pulls data from an API every morning, a FastAPI endpoint for an existing app, or a fix for code that broke after a library upgrade. These are exactly the jobs where hiring a person is slow — you post, wait for bids, read profiles and interview — while the work itself takes a day.",
      "Our Python agent reads your brief, asks only what it needs, and quotes the whole job up front. It writes the code with type hints and tests, pins dependencies in a requirements file, and documents how to run it. A GrahAI engineer reviews the delivery before it reaches you, so you don't get code that only works on someone else's machine.",
      "You can hand over sample files, API docs or your existing repository. Delivery is a Git repository or zip with a README, and if the script needs to run on a schedule, we set it up on your server, a cloud function or a GitHub Action you control — so it keeps working after the job closes.",
    ],
    tasks: [
      { title: "Script to rename, sort and de-duplicate files in a folder", price: 99, days: 1 },
      { title: "Fix a Python script that broke after a library upgrade", price: 149, days: 1 },
      { title: "Pull data from a REST API into CSV or Google Sheets every day", price: 199, days: 2 },
      { title: "Automate a weekly Excel report with pandas", price: 299, days: 3 },
      { title: "Telegram or Slack alert bot that watches a data source", price: 349, days: 3 },
      { title: "FastAPI or Flask backend with 5–8 endpoints and login", price: 799, days: 6 },
    ],
    deliverables: [
      "Clean, commented Python 3 code with a pinned requirements file",
      "Tests for the core logic and a sample run on your own data",
      "README with setup and run instructions for your machine",
      "Scheduling on your server, cloud function or GitHub Actions if needed",
      "Two revision rounds after delivery",
    ],
    sampleTitle: "Python script to merge monthly sales CSVs into one report",
    sampleBrief:
      "Every month I get 12 CSV exports from different stores (same columns, but sometimes in a different order). I need a Python script that merges them, removes duplicate order IDs, adds a store column taken from the filename, and outputs one Excel file with a summary sheet of revenue per store. I'll run it on my Mac.",
    limits:
      "An agent is a poor fit for open-ended research with no clear finish line, or for maintaining a large legacy codebase week after week. For those, a dedicated developer or our custom-project team is the better choice.",
    faqs: [
      {
        q: "How much does it cost to hire a Python developer here?",
        a: "Small scripts and fixes start at $99. Most automation and data jobs land between $149 and $499, and a small backend or API usually falls between $699 and $1,499. You see the fixed price in the proposal before you pay anything, and it doesn't change unless you change the scope.",
      },
      {
        q: "Will the code run on my computer or server?",
        a: "Yes — tell us where it will run (Windows, Mac, Linux, a cloud function) and the Python version if you know it. The agent targets that environment, pins every dependency, and the README walks you through setup. If it doesn't run, that's covered by your revision rounds.",
      },
      {
        q: "Can you work inside my existing Python codebase?",
        a: "Yes. Share the repository (or the relevant files) after kickoff and describe the change. The agent follows your existing structure and style instead of rewriting things, and the delivery comes as a branch or patch you can review before merging.",
      },
      {
        q: "Do I need to share passwords or API keys?",
        a: "Never in the job post or chat. If the script needs credentials, the agent writes it to read them from environment variables or a config file you fill in yourself. Where we genuinely need access to set something up, we arrange a secure handover after kickoff.",
      },
      {
        q: "What if I need changes after delivery?",
        a: "Two revision rounds are included: tell the agent what to change in your job room and it updates the code. If the request is new scope rather than a fix, the agent says so and quotes the addition before doing it — no surprise charges.",
      },
    ],
    related: ["web-scraping-expert", "data-analyst", "excel-automation-expert", "api-integration-developer"],
  },
  {
    slug: "web-scraping-expert",
    skill: "web scraping expert",
    article: "a",
    category: "data",
    metaTitle: "Hire a Web Scraping Expert — Fixed Price from $99 | GrahAI Systems",
    metaDescription:
      "Get a fixed-price web scraping quote in about a minute. Public product, listing and directory data delivered to CSV, Google Sheets or your database.",
    keywords: [
      "hire web scraping expert",
      "web scraper for hire",
      "freelance web scraper",
      "data scraping service",
      "scrape website to excel",
      "python web scraping developer",
      "ecommerce product scraper",
    ],
    intro:
      "Tell us which public pages hold the data and what columns you need. An AI agent quotes a fixed price in about a minute, builds the scraper, and delivers clean data plus the code that produced it.",
    overviewTitle: "Scrapers that survive real websites",
    overview: [
      "A scraping job sounds simple until the site paginates through 400 pages, loads prices with JavaScript, or lazy-loads results as you scroll. Our agent checks the target first — static HTML, an internal JSON endpoint the page already calls, or a headless browser only when nothing lighter works — and quotes based on what the site actually does, not on a guess. You get the rows you asked for, with consistent column names and no half-scraped records.",
      "We only collect publicly available data that you are allowed to use. That means nothing behind a login, no getting around paywalls, and no solving or bypassing CAPTCHAs. The scraper respects robots.txt, keeps request rates polite, and identifies itself sensibly. If a site's terms clearly forbid automated collection, the agent tells you before you pay rather than after, and points you to an official API or data feed where one exists.",
      "Output goes wherever you work: CSV, Excel, a Google Sheet that refreshes itself, or rows inserted into Postgres or MySQL. For recurring jobs, the scraper runs on a schedule you control and sends an alert when a run returns suspiciously few rows — the usual sign that the site changed its layout. Selectors live in one config file, so a layout change is a small fix, not a rewrite.",
    ],
    tasks: [
      { title: "One-time scrape of a public directory into CSV (up to 5,000 rows)", price: 99, days: 2 },
      { title: "Product names, prices and stock levels from a public online store", price: 199, days: 2 },
      { title: "Scrape a JavaScript-rendered listing site with infinite scroll", price: 299, days: 3 },
      { title: "Daily price tracker that writes changes to Google Sheets", price: 349, days: 3 },
      { title: "Scrapers for 5 competitor sites feeding one Postgres table", price: 799, days: 6 },
      { title: "Monitored multi-site pipeline with alerts and a small review dashboard", price: 1499, days: 10 },
    ],
    deliverables: [
      "The scraped data as CSV, Excel, Google Sheets or database rows",
      "Scraper source code with selectors kept in one editable config",
      "A field-by-field data dictionary and a row-count summary",
      "Scheduled runs and failure alerts for recurring jobs",
      "Two rounds of revisions, including fixes for missed fields",
    ],
    sampleTitle: "Scrape exhibitor lists from three trade-show websites into Excel",
    sampleBrief:
      "I need the exhibitor lists from three public trade-show websites for an upcoming packaging expo. For each exhibitor: company name, booth number, country, website, product categories and the profile page URL. One site paginates 50 per page, another loads more as you scroll. Please deliver one de-duplicated Excel file, plus the script so I can rerun it next year. No login is needed to view the lists.",
    limits:
      "We can't take jobs that need data behind a login, a paywall or a CAPTCHA, or personal data you have no lawful basis to collect. Sites that actively block automated access are also a poor fit — a licensed data provider is the better route there.",
    faqs: [
      {
        q: "How much does a web scraping job cost?",
        a: "A one-time scrape of a simple public site starts at $99. Sites that render with JavaScript or need a scheduled, recurring run usually cost $199 to $349, and multi-site pipelines feeding a database run $799 to $1,499. The price is fixed in the proposal, and you see it before paying.",
      },
      {
        q: "Is web scraping legal?",
        a: "Collecting publicly available data is lawful in many situations, but it depends on the site's terms, the type of data and where you operate. We only scrape public pages you are allowed to use, skip personal data you have no right to process, and won't get past logins, paywalls or CAPTCHAs. For anything borderline, check with your own lawyer.",
      },
      {
        q: "What happens when the website changes its layout?",
        a: "Layout changes are the most common reason scrapers stop working. We keep every selector in one config file and add a check that flags a run when row counts drop sharply or required fields come back empty. If the layout changes while your two revision rounds are still open, the fix is covered. After that, the agent quotes the update as a small new job.",
      },
      {
        q: "Can you scrape sites that load content with JavaScript?",
        a: "Yes. Many modern sites fetch their data from a JSON endpoint after the page loads, and reading that endpoint directly is faster and more reliable than clicking through pages. When there is no usable endpoint, the agent drives a headless browser to scroll, click 'next' and wait for content. Either way, the proposal says which approach it will use.",
      },
      {
        q: "Do I get the scraper code or just the data?",
        a: "Both. You receive the data file and the full source code, which you own outright. The README explains how to install it, run it again, change the target URLs and adjust the output format. If you'd rather not run anything yourself, the agent can schedule it on a cloud account you control.",
      },
    ],
    related: ["python-developer", "data-analyst", "google-sheets-expert", "api-integration-developer"],
  },
  {
    slug: "data-analyst",
    skill: "data analyst",
    article: "a",
    category: "data",
    metaTitle: "Hire a Data Analyst — Fixed Price from $99 | GrahAI Systems",
    metaDescription:
      "Send your spreadsheets or database export to a data analyst for a fixed price. Get cleaned data, clear charts and plain-English findings, reviewed by an engineer.",
    keywords: [
      "hire data analyst",
      "freelance data analyst",
      "data analysis services",
      "data analyst for hire",
      "data cleaning service",
      "sales data analysis",
      "customer churn analysis",
    ],
    intro:
      "Bring the data and the business question behind it. Within about a minute you get a fixed quote; then the agent cleans the numbers, runs the analysis and explains what it found without jargon.",
    overviewTitle: "Analysis that starts with your question",
    overview: [
      "Good analysis starts with a question, not a chart. Why did repeat orders fall in March? Which ad channel actually brings customers who stay? Which products are dragging margin down? When you post, say what decision the numbers should inform, and the agent scopes the work around it — which tables to join, which periods to compare, and which data problems need fixing before any result can be trusted.",
      "Most of the effort in a real dataset is cleaning: dates stored as text, the same customer spelled three ways, refunds mixed in with sales, currencies that don't match. The agent documents every cleaning step so you can see exactly what changed and why. Analysis is done in Python or SQL, and every number in the write-up traces back to a query or notebook cell you can rerun.",
      "A GrahAI engineer reviews the method before you see results, checking for the classic mistakes: double-counted rows after a join, averages skewed by a few huge orders, conclusions drawn from a dozen data points. You get a short report with the findings first, charts that make one point each, and an honest note about what the data can't tell you.",
    ],
    tasks: [
      { title: "Clean and de-duplicate a messy customer spreadsheet", price: 99, days: 1 },
      { title: "Monthly sales breakdown by product, region and channel", price: 199, days: 2 },
      { title: "A/B test result check with significance and sample-size notes", price: 249, days: 2 },
      { title: "Cohort retention and repeat-purchase analysis", price: 349, days: 3 },
      { title: "Customer churn analysis with the main drivers explained", price: 499, days: 4 },
      { title: "Marketing attribution analysis across ads, email and organic", price: 799, days: 6 },
    ],
    deliverables: [
      "A cleaned dataset with a log of every change made to it",
      "A short findings report that leads with the answer",
      "Charts as PNG files and inside an editable spreadsheet or notebook",
      "The Python notebook or SQL queries behind every number",
      "Two revision rounds for follow-up questions on the same data",
    ],
    sampleTitle: "Find out why repeat customers dropped after our price change",
    sampleBrief:
      "We run a small online coffee subscription store. In June we raised prices by 12%, and since then repeat orders seem lower, but I'm not sure if it's the price, the season or a shipping delay we had in July. I can export 18 months of orders (about 40,000 rows) and customer data from Shopify as CSV. I want a clear answer and charts I can show my business partner.",
    limits:
      "If you need someone in your weekly meetings who knows your business inside out, hire an in-house analyst. We're also a poor fit for regulated statistical work, such as clinical trial analysis, that needs a credentialed statistician to sign off.",
    faqs: [
      {
        q: "How much does it cost to hire a data analyst for a project?",
        a: "Cleaning a single file starts at $99. A focused analysis answering one business question, like retention or a sales breakdown, usually costs $199 to $499. Multi-source work such as marketing attribution runs around $799. The fixed price is set from your brief and the size of the data, and you approve it before paying.",
      },
      {
        q: "What format should my data be in?",
        a: "Whatever you have. CSV, Excel, Google Sheets, a database dump or exports from tools like Shopify, Stripe or HubSpot all work. It doesn't need to be tidy — cleaning is part of the job. Just include a sentence on what each file contains and flag any columns you already know are unreliable.",
      },
      {
        q: "How large a dataset can you work with?",
        a: "Anything from a single spreadsheet to tens of millions of rows in a database. Files too big for Excel are handled in Python or SQL, and the summary tables come back in a format you can open. For very large data, share read-only access to a database replica or a cloud storage export after kickoff rather than uploading huge files.",
      },
      {
        q: "Can you tell me why something happened, not just what happened?",
        a: "Up to a point. The agent can show which factors move together with a change, rule out explanations the data contradicts, and compare similar groups before and after an event. It will say plainly when the data supports correlation but not cause, and suggest a simple test you could run to find out for sure.",
      },
      {
        q: "Will I be able to repeat the analysis next month?",
        a: "Yes. Along with the report you get the notebook or SQL that produced it, written so you can drop in next month's export and rerun it. If you want it fully automatic, ask for a refreshing dashboard or a scheduled report instead — the agent will quote that as a separate task.",
      },
    ],
    related: ["dashboard-developer", "sql-developer", "excel-automation-expert", "python-developer"],
  },
  {
    slug: "excel-automation-expert",
    skill: "Excel automation expert",
    article: "an",
    category: "data",
    metaTitle: "Hire an Excel Automation Expert — Macros from $99 | GrahAI Systems",
    metaDescription:
      "Automate the spreadsheet work you repeat every week. VBA macros, Power Query and Office Scripts at a fixed price, with a proposal in about a minute.",
    keywords: [
      "hire excel expert",
      "excel automation",
      "excel vba developer",
      "excel macro freelancer",
      "power query expert",
      "automate excel reports",
      "office scripts developer",
    ],
    intro:
      "Tell us which spreadsheet task eats your week. You'll see a fixed price within about a minute, and the agent builds the macro, query or script that does it in one click.",
    overviewTitle: "The right Excel tool for the job",
    overview: [
      "Excel has three automation tools, and picking the wrong one causes most of the pain. VBA macros run in desktop Excel on Windows and Mac and can do almost anything, but they don't run in Excel for the web. Power Query suits importing, reshaping and combining data files, with steps recorded rather than hand-written code to maintain. Office Scripts work in Excel for the web and pair with Power Automate for scheduled, unattended jobs.",
      "Before quoting, the agent asks which Excel version you and your colleagues use, whether files live on a shared drive or in SharePoint, and whether anyone opens them on a Mac. That decides the tool. A macro that works perfectly on your machine is no use if half your team uses Excel for the web, so compatibility is settled before any code is written.",
      "Typical jobs: consolidating dozens of branch workbooks into one summary, turning a raw export from your accounting system into a formatted monthly report, generating a PDF invoice per row, or replacing a fragile 30-step manual routine with a single button. Every delivery keeps your original layout, adds error messages a non-technical colleague can understand, and comes with a short guide to running it.",
    ],
    tasks: [
      { title: "Fix or update a VBA macro that stopped working", price: 99, days: 1 },
      { title: "Power Query to combine monthly files from a folder", price: 149, days: 1 },
      { title: "Macro that formats a raw export into a monthly report", price: 199, days: 2 },
      { title: "Generate a PDF invoice or letter for every row in a sheet", price: 249, days: 2 },
      { title: "Office Script plus Power Automate flow to run a report on schedule", price: 399, days: 3 },
      { title: "Workbook tool with data-entry forms, validation and summary dashboards", price: 799, days: 6 },
    ],
    deliverables: [
      "Your workbook with the macro, query or script built in (.xlsm or .xlsx)",
      "Inline comments in the code and a one-page how-to-run guide",
      "Clear error messages for missing files or bad input",
      "A test run on a copy of your real data before handover",
      "Two revision rounds once you've used it on live files",
    ],
    sampleTitle: "Combine 25 branch sales workbooks into one weekly summary",
    sampleBrief:
      "Each Friday our 25 branches email an Excel file with the same sales template. Someone in head office spends three hours copying them into a master workbook and building a pivot table by region. I'd like a button or Power Query setup that pulls every file from a SharePoint folder, flags any branch that hasn't sent theirs, and refreshes the summary. We all use Microsoft 365 on Windows.",
    limits:
      "If your spreadsheet has become a shared database that ten people edit at once, more macros won't fix it — a proper database or web app will. We also can't automate Excel inside locked-down corporate environments where IT policy blocks macros and scripts.",
    faqs: [
      {
        q: "How much does Excel automation cost?",
        a: "Fixing a macro or setting up a simple Power Query costs $99 to $149. Report automation and per-row document generation usually cost $199 to $399, and a full workbook tool with forms and dashboards is around $799. The agent quotes a fixed price from your description and a sample file before you pay.",
      },
      {
        q: "Should I use VBA, Power Query or Office Scripts?",
        a: "Use Power Query when the job is importing and reshaping data. Use VBA when you need buttons, forms or file handling in desktop Excel. Use Office Scripts when the workbook lives online and should run on a schedule without anyone opening it. If you're unsure, describe the task and the agent recommends one in the proposal.",
      },
      {
        q: "Will it work on older Excel versions or on a Mac?",
        a: "Tell us the oldest version anyone on your team uses. The agent avoids functions like XLOOKUP or LET when someone is still on Excel 2016, and avoids Windows-only features when a colleague is on a Mac. Testing happens against the versions you list, and any limits are noted in the guide.",
      },
      {
        q: "Do you need my actual spreadsheet?",
        a: "A copy with realistic data helps the most, because real files have quirks that templates don't — merged cells, blank rows, totals typed in by hand. If the data is sensitive, replace names and amounts with dummy values but keep the structure exactly the same. Never include passwords in the file or the job post.",
      },
      {
        q: "Will my macro-enabled file be blocked when I open it?",
        a: "Windows now blocks macros by default in files downloaded from the internet. The guide shows you how to unblock the delivered file or save it in a trusted location, which takes a minute. If your IT team blocks macros entirely, the agent will suggest Power Query or Office Scripts instead.",
      },
    ],
    related: ["google-sheets-expert", "data-analyst", "python-developer", "pdf-data-extraction"],
  },
  {
    slug: "google-sheets-expert",
    skill: "Google Sheets expert",
    article: "a",
    category: "data",
    metaTitle: "Hire a Google Sheets Expert — Fixed Price from $99 | GrahAI Systems",
    metaDescription:
      "Formulas, Apps Script automations, imports and dashboards in Google Sheets at a fixed price. Post the job and get a proposal from an AI agent in about a minute.",
    keywords: [
      "hire google sheets expert",
      "google sheets freelancer",
      "google sheets automation",
      "google apps script freelancer",
      "google sheets formula help",
      "google sheets dashboard",
    ],
    intro:
      "Describe the sheet you have and the one you wish you had. A fixed quote arrives in about a minute, and the agent builds the formulas, imports or Apps Script that close the gap.",
    overviewTitle: "Sheets that update themselves",
    overview: [
      "Google Sheets is where many small teams run their business: lead lists, inventory, payroll prep, project trackers. The problems tend to repeat — a QUERY formula that breaks when someone adds a column, IMPORTRANGE links that slow the file to a crawl, data pasted in by hand every morning. Our agent untangles what's there before adding anything, so the sheet gets simpler rather than more fragile.",
      "When formulas aren't enough, Apps Script takes over: pulling data from an API on a timer, sending an email when a status changes, creating a Google Doc from each new row, or syncing with a form, a CRM or Shopify. Scripts run under your own Google account, use time-driven triggers you can see and switch off, and stay within Google's daily quotas for your account type.",
      "You share the sheet with edit access after kickoff — or a copy, if you'd rather keep the original untouched until you approve. A GrahAI engineer checks the work before handover, including what happens when rows are added, deleted or sorted. The finished sheet has a short 'How this works' tab so whoever inherits it next year isn't left guessing.",
    ],
    tasks: [
      { title: "Fix broken formulas and speed up a slow sheet", price: 99, days: 1 },
      { title: "Pull Google Form responses into a formatted tracker with alerts", price: 149, days: 1 },
      { title: "Import data from a REST API into a sheet every hour", price: 199, days: 2 },
      { title: "Auto-generate a Google Doc or PDF for each new row", price: 249, days: 2 },
      { title: "Inventory or order tracker with dropdowns, checks and a summary tab", price: 349, days: 3 },
      { title: "Two-way sync between Google Sheets and a CRM or Shopify store", price: 699, days: 5 },
    ],
    deliverables: [
      "Your Google Sheet with the formulas, scripts and triggers in place",
      "A 'How this works' tab written for non-technical users",
      "Apps Script code with comments, stored in the sheet's own project",
      "Protected ranges so key formulas don't get overwritten",
      "Two revision rounds after your team starts using it",
    ],
    sampleTitle: "Google Sheet that emails clients when their order status changes",
    sampleBrief:
      "We track custom furniture orders in a Google Sheet with one row per order and a Status column (Received, In production, Shipped). When I change the status, I'd like the customer to get a short email from our Gmail account using a template, and the date to be logged in the next column. About 30 orders a week. Nothing should be sent twice if someone edits the row again.",
    limits:
      "Sheets gets slow once a file holds hundreds of thousands of formula cells or many people write to it at the same moment. At that point, a database with a simple front end is the better buy.",
    faqs: [
      {
        q: "What does a Google Sheets expert cost here?",
        a: "Formula fixes start at $99. Most automations — form handling, API imports, document generation — cost between $149 and $249, and a structured tracker is around $349. Syncing Sheets both ways with another system usually lands near $699. Your quote is fixed and shown before checkout.",
      },
      {
        q: "Do I need to give you my Google password?",
        a: "No, never. You share the specific sheet with an address we give you after kickoff, and you can remove that access the moment the job is done. Scripts that send email or call other services are authorized by you, from your own account, so they keep running after we step away.",
      },
      {
        q: "Formulas or Apps Script — which will I get?",
        a: "Formulas first, whenever they can do the job, because anyone on your team can read and adjust them. Apps Script is used when something has to happen on a timer, react to an edit, send email or talk to another service. The proposal says which approach the agent plans and why.",
      },
      {
        q: "Can my sheet pull data from other tools automatically?",
        a: "Yes, as long as the other tool has an API or a CSV export link. Common sources include Shopify, Stripe, HubSpot, Airtable, ad platforms and public data feeds. The script fetches on a schedule you choose, appends or replaces rows, and logs each run so you can see when it last worked.",
      },
      {
        q: "Will it hit Google's limits?",
        a: "Free Gmail accounts have lower daily quotas for email sends and script run time than Google Workspace accounts. The agent checks your account type and expected volume, batches work to stay well inside the limits, and tells you up front if your volume needs Workspace or a different setup.",
      },
    ],
    related: ["google-apps-script-developer", "excel-automation-expert", "zapier-expert", "dashboard-developer"],
  },
  {
    slug: "sql-developer",
    skill: "SQL developer",
    article: "an",
    category: "data",
    metaTitle: "Hire an SQL Developer — Fixed Price from $99 | GrahAI Systems",
    metaDescription:
      "Slow queries, schema design, migrations and reports for Postgres, MySQL and SQL Server. Fixed price, proposal in about a minute, engineer-reviewed delivery.",
    keywords: [
      "hire sql developer",
      "sql freelancer",
      "sql query optimization",
      "postgresql developer for hire",
      "mysql developer freelance",
      "sql server developer",
      "database schema design",
    ],
    intro:
      "Post the slow query, the schema question or the report you need from your database. A fixed price comes back in about a minute; the agent writes, tests and explains the SQL.",
    overviewTitle: "Faster queries and cleaner schemas",
    overview: [
      "Most SQL jobs fall into three groups. Performance: a query or page that used to take half a second now takes twenty. Design: a new feature needs tables, and you want the relationships and indexes right the first time. Reporting: someone needs numbers the app doesn't show yet. The agent works in Postgres, MySQL, MariaDB, SQL Server and SQLite, and writes SQL in the dialect you actually run.",
      "For slow queries, send the query, the table definitions and the output of EXPLAIN (or EXPLAIN ANALYZE on Postgres). The agent reads the plan, finds the sequential scan, the missing index or the function that stops an index being used, and proposes the smallest change that fixes it. Each change comes with before-and-after timings measured on a copy of your data or a realistic sample, not on a hunch.",
      "Schema changes ship as migration files with a matching rollback, written for the tool you already use — Prisma, Django, Rails, Flyway, Alembic or plain SQL scripts. Nothing runs against your production database without your explicit go-ahead; a GrahAI engineer reviews every migration for locking and data-loss risks before you apply it, ideally during a low-traffic window.",
    ],
    tasks: [
      { title: "Write or fix a complex query (joins, window functions, CTEs)", price: 99, days: 1 },
      { title: "Diagnose and speed up 3 slow queries with indexes", price: 199, days: 2 },
      { title: "Monthly business report as a saved view or stored procedure", price: 249, days: 2 },
      { title: "Design a normalized schema for a new feature, with migrations", price: 399, days: 3 },
      { title: "Performance audit of a production database with an index plan", price: 699, days: 5 },
      { title: "Migrate a database from MySQL to Postgres (up to 30 tables)", price: 999, days: 6 },
    ],
    deliverables: [
      "SQL files or migrations in the dialect your database runs",
      "Before-and-after timings for every performance change",
      "Rollback scripts for each schema change",
      "Plain-English notes on what changed and why",
      "Two revision rounds, including retesting on fresh data",
    ],
    sampleTitle: "Speed up a slow Postgres orders report",
    sampleBrief:
      "Our admin dashboard has an orders report that now takes 25 seconds to load. It's a single query joining orders, order_items, customers and products, filtered by date range and status. Postgres 15 on a managed host, about 4 million orders. I can share the query, table definitions and EXPLAIN ANALYZE output. I'd like it under 2 seconds without changing the app code if possible.",
    limits:
      "We don't offer on-call database administration, 24/7 monitoring or emergency recovery of a corrupted production database. For ongoing DBA work or very large clusters, a dedicated database administrator is the better fit.",
    faqs: [
      {
        q: "How much does it cost to hire an SQL developer?",
        a: "A single query written or fixed starts at $99, and tuning a handful of slow queries is around $199. Schema design with migrations usually runs $399, a full performance audit about $699, and a MySQL-to-Postgres migration from $999 depending on table count. The proposal shows a fixed price before you pay.",
      },
      {
        q: "Do you need access to my production database?",
        a: "Usually not. For most jobs a schema dump, sample rows and EXPLAIN output are enough. If the agent needs to test against real volumes, a read-only user on a replica or a restored copy is the safest option, shared securely after kickoff. Credentials never belong in the job post.",
      },
      {
        q: "Which databases do you work with?",
        a: "PostgreSQL, MySQL, MariaDB, Microsoft SQL Server and SQLite are the common ones, plus managed versions such as Amazon RDS, Azure SQL, Supabase and PlanetScale. Oracle jobs are quoted case by case. Tell us the exact version, because features like generated columns, certain JSON functions and some window functions differ between releases.",
      },
      {
        q: "Will adding indexes slow down my writes?",
        a: "Every index adds a little cost to inserts and updates, so the agent only adds the ones the query plans prove are needed and checks for existing indexes that duplicate them. On large tables it uses options like CREATE INDEX CONCURRENTLY on Postgres so the table isn't locked while the index builds.",
      },
      {
        q: "Can you design a database for an app I haven't built yet?",
        a: "Yes. Describe the things your app tracks and how they relate — customers, bookings, invoices, whatever applies — and the agent produces an entity diagram, the CREATE TABLE statements with keys and constraints, and seed data for testing. It also flags decisions that are expensive to change later, like how you handle multi-tenancy or soft deletes.",
      },
    ],
    related: ["data-analyst", "dashboard-developer", "python-developer", "nodejs-developer"],
  },
  {
    slug: "pdf-data-extraction",
    skill: "PDF data extraction expert",
    article: "a",
    category: "data",
    metaTitle: "Hire a PDF Data Extraction Expert — Fixed Price | GrahAI Systems",
    metaDescription:
      "Turn invoices, bank statements and forms into clean spreadsheet rows. Digital and scanned PDFs, accuracy-checked, at a fixed price quoted in about a minute.",
    keywords: [
      "pdf data extraction",
      "extract data from pdf to excel",
      "pdf to excel conversion service",
      "invoice data extraction",
      "bank statement to excel",
      "pdf scraping",
      "ocr data entry automation",
    ],
    intro:
      "Send a few sample PDFs and the fields you need. In about a minute you'll have a fixed quote, then the agent builds an extractor that turns every document into clean, checked rows.",
    overviewTitle: "From stacks of PDFs to rows you can trust",
    overview: [
      "Not all PDFs are equal. A digital PDF exported from accounting software has real text inside it, and extraction can be close to exact. A scanned PDF or a phone photo is just an image, so it needs OCR first, and accuracy then depends on scan quality, fonts and handwriting. The agent checks your samples and tells you which kind you have before quoting.",
      "Common jobs include supplier invoices into an accounts-payable sheet, bank and card statements into transaction lists, purchase orders, lab reports, shipping documents and government forms. Tables that run across several pages, totals on the last page and layouts that differ by vendor are handled explicitly rather than hoped for. If you have twenty suppliers, the agent maps each layout it finds in your samples.",
      "Extraction without checks is just faster data entry with new errors. Every extractor validates its own output: line items must add up to the invoice total, statement balances must roll forward, dates and amounts must parse. Rows that fail a check land in a separate 'needs review' list instead of slipping quietly into your books, so a person only looks at the exceptions.",
    ],
    tasks: [
      { title: "Extract tables from up to 50 digital PDFs into Excel", price: 99, days: 1 },
      { title: "Convert one bank's statements into a clean transaction CSV", price: 149, days: 2 },
      { title: "Invoice extractor for up to 5 supplier layouts with total checks", price: 349, days: 3 },
      { title: "Watch an inbox or folder and extract each new PDF automatically", price: 499, days: 4 },
      { title: "OCR pipeline for scanned forms with a needs-review queue", price: 599, days: 5 },
      { title: "Multi-format document pipeline feeding your accounting system or database", price: 1499, days: 10 },
    ],
    deliverables: [
      "Extracted data as Excel, CSV, JSON or rows in your database",
      "A reusable extractor you can run on next month's documents",
      "Validation rules plus a separate list of rows that need a human look",
      "An accuracy summary from a test against your sample documents",
      "Two revision rounds to correct fields or edge cases on your samples",
    ],
    sampleTitle: "Extract line items from 600 supplier invoices into Excel",
    sampleBrief:
      "We have about 600 supplier invoices from the last year as PDFs, from roughly 12 suppliers. Most are digital, maybe 50 are scans. I need one Excel sheet with invoice number, date, supplier, line item description, quantity, unit price, tax and total. Please flag any invoice where the line items don't add up to the total. Later I'd like to run the same thing monthly myself.",
    limits:
      "Badly faded scans, handwritten notes and photos taken at an angle will never extract perfectly, so plan for some manual review. If you process millions of pages a month, a dedicated document-processing platform will cost less over time.",
    faqs: [
      {
        q: "How much does PDF data extraction cost?",
        a: "A batch of clean digital PDFs with one layout starts at $99. Statements and multi-supplier invoice extractors usually cost $149 to $349. Scanned documents with OCR or an automatic inbox-watching setup run $499 to $599, and a full multi-format pipeline is around $1,499. You get the fixed price before you pay.",
      },
      {
        q: "How accurate is the extraction?",
        a: "For digital PDFs with consistent layouts, results are usually exact because the text is already in the file. Scanned documents depend on image quality. Rather than promise a percentage, the agent measures accuracy on your own samples, reports it field by field, and routes any row that fails a check to a review list.",
      },
      {
        q: "How many sample PDFs should I send?",
        a: "Send at least two or three examples of every layout you expect, including your messiest ones — a faded scan, a multi-page invoice, a statement with an unusual month. Extractors fail on the cases nobody showed them, so variety matters more than volume. A handful of well-chosen samples beats a hundred identical ones.",
      },
      {
        q: "Can I redact sensitive details before sending samples?",
        a: "Yes. For building and testing the extractor, redacted samples work fine — the agent needs the layout, not your balances. If you'd rather run the finished extractor on the full, unredacted batch yourself, the delivery includes instructions for doing exactly that. Never put bank or accounting logins in the job post.",
      },
      {
        q: "Can it handle PDFs in languages other than English?",
        a: "Yes. Digital PDFs in most languages extract cleanly, and OCR handles most Latin-script languages as well as Hindi, Arabic, Chinese and others with the right language pack. Mention the languages in your post, plus number and date formats — 1.234,56 versus 1,234.56 is a classic source of silent errors.",
      },
    ],
    related: ["excel-automation-expert", "python-developer", "data-analyst", "zapier-expert"],
  },
  {
    slug: "dashboard-developer",
    skill: "dashboard developer",
    article: "a",
    category: "data",
    metaTitle: "Hire a Dashboard Developer — Fixed Price from $99 | GrahAI Systems",
    metaDescription:
      "Looker Studio, Power BI, Metabase or a custom web dashboard built on your real data. Fixed price, proposal from an AI agent in about a minute, engineer-reviewed.",
    keywords: [
      "hire dashboard developer",
      "power bi developer freelance",
      "looker studio expert",
      "kpi dashboard design",
      "metabase setup",
      "business intelligence dashboard",
      "custom analytics dashboard",
    ],
    intro:
      "List the numbers you check every week and where they live. You get a fixed quote in about a minute, and the agent connects the sources and builds a dashboard that refreshes itself.",
    overviewTitle: "One screen your team actually opens",
    overview: [
      "The tool matters less than people think, but it should match how you work. Looker Studio is free and natural if your data is in Google Sheets, GA4 or BigQuery. Power BI suits teams already on Microsoft 365 and Excel. Metabase is a good self-hosted option on top of a SQL database. A custom web dashboard makes sense when customers, not staff, will see it inside your product.",
      "Before any chart is drawn, the agent settles the definitions with you. What counts as an active customer? Is revenue before or after refunds and tax? Which time zone closes the day? Most dashboards that nobody trusts fail here, not on design. Those definitions go into the data model once, so every chart and filter uses the same numbers.",
      "The layout follows a simple rule: the five or six numbers that drive decisions sit at the top, with trends and breakdowns underneath and detail tables last. A GrahAI engineer cross-checks the headline figures against your source system before handover. You keep ownership of the dashboard file or workspace, the queries behind it and the scheduled refresh.",
    ],
    tasks: [
      { title: "Fix broken charts or a failed data refresh in an existing dashboard", price: 99, days: 1 },
      { title: "Looker Studio report from Google Sheets or GA4", price: 199, days: 2 },
      { title: "Sales KPI dashboard in Power BI from Excel or SQL data", price: 399, days: 3 },
      { title: "Metabase setup on your SQL database with 8–10 saved questions", price: 499, days: 4 },
      { title: "Multi-source dashboard combining Stripe, ads and CRM data", price: 799, days: 6 },
      { title: "Customer-facing analytics page built into your web app", price: 1999, days: 12 },
    ],
    deliverables: [
      "A working dashboard in the tool you chose, connected to live data",
      "A metric definitions sheet so everyone reads the numbers the same way",
      "Scheduled data refresh with a note on what to do if it fails",
      "Access set up for the teammates you name, with view or edit rights",
      "Two revision rounds to adjust charts, filters or definitions",
    ],
    sampleTitle: "Weekly sales dashboard for a 3-store retail business",
    sampleBrief:
      "We have three shops and an online store. Sales come from Square for the shops and WooCommerce online, and costs sit in a Google Sheet. I want one dashboard showing weekly revenue, gross margin, average order value and top 20 products, filterable by store and date. My partner and I mostly check it on our phones. Free tools preferred if they can do the job.",
    limits:
      "If your underlying data is scattered across a dozen systems with no shared IDs, a dashboard won't fix that on its own — start with a data cleanup or warehouse project. Enterprise BI rollouts with row-level security for hundreds of users are better handled by a BI consultancy.",
    faqs: [
      {
        q: "How much does a dashboard cost?",
        a: "Repairing an existing dashboard starts at $99. A single-source Looker Studio report is about $199, while Power BI or Metabase builds usually cost $399 to $499. Blending several sources runs around $799, and an analytics page embedded in your own product starts near $1,999. The price is fixed before you pay.",
      },
      {
        q: "Which tool should I choose — Looker Studio, Power BI or Metabase?",
        a: "Pick based on where your data lives and who will view it. Google-heavy teams usually do well with Looker Studio at no license cost. Microsoft shops get more from Power BI, though sharing beyond the free tier needs paid licenses. Metabase fits teams with a SQL database who want to self-host. The agent recommends one in the proposal.",
      },
      {
        q: "Will the dashboard update on its own?",
        a: "Yes, that's the point. Live connectors refresh on every view or on a schedule, depending on the tool and source. Where a source has no direct connector, the agent sets up a small scheduled import into a sheet or database the dashboard reads from, and documents how to check that it ran.",
      },
      {
        q: "Can my clients see their own data in it?",
        a: "Yes, but that's a different build. Showing each client only their own numbers needs either row-level security in a BI tool or a custom page inside your app that filters by the logged-in user. The agent will ask how many clients you have and how they sign in, then quote the option that fits.",
      },
      {
        q: "What access do you need to my data sources?",
        a: "Usually a read-only connection: a viewer share on a Google Sheet, a read-only database user, or an API key with reporting scope only. Never put these in the job post. After kickoff you share them through a secure handover, and you can revoke everything once the dashboard is delivered and running.",
      },
    ],
    related: ["data-analyst", "sql-developer", "google-sheets-expert", "react-developer"],
  },
  {
    slug: "bug-fixing",
    skill: "bug-fixing developer",
    article: "a",
    category: "fixes",
    metaTitle: "Hire a Bug-Fixing Developer — Fixed Price from $99 | GrahAI Systems",
    metaDescription:
      "Something broke? Post the bug, see a fixed price in about a minute, and get a tested fix with the root cause explained. Web apps, APIs, scripts and plugins.",
    keywords: [
      "hire developer to fix bug",
      "fix website bug",
      "bug fixing service",
      "freelance bug fixer",
      "fix javascript error",
      "website not working fix",
      "debug code help",
    ],
    intro:
      "Describe what's broken, what you expected and how to make it happen. A fixed-price proposal lands in about a minute; the agent reproduces the bug, fixes the cause and proves it with a test.",
    overviewTitle: "Reproduce first, then fix the cause",
    overview: [
      "A bug that can't be reproduced can't be reliably fixed, so that's always step one. The agent sets up your code, follows your steps and confirms it sees the same failure you do. Only then does it trace the problem to its source — the null value from an API, the race between two requests, the timezone that shifts a date by one day — instead of patching the symptom.",
      "The fastest jobs come with good information. Send the exact error message or a screenshot of it, the steps that trigger the bug, what you expected instead, when it started, and anything that changed around then — a deploy, a plugin update, a new browser version. Console logs, server logs and the browser or device involved often save a full round of back-and-forth.",
      "Each fix arrives as a small, focused change — a pull request or patch, not a rewrite of half your app — with a regression test where your project supports one, so the same bug can't quietly return. A GrahAI engineer reviews the diff before you see it. You also get a short note explaining what caused the bug and whether anything similar is lurking nearby.",
    ],
    tasks: [
      { title: "Fix a JavaScript error breaking a form or checkout button", price: 99, days: 1 },
      { title: "Fix a layout that breaks on mobile or in one browser", price: 99, days: 1 },
      { title: "Resolve a WordPress white screen or plugin conflict", price: 149, days: 1 },
      { title: "Fix a failing build or deployment after a dependency upgrade", price: 199, days: 2 },
      { title: "Track down why emails, webhooks or payments silently fail", price: 249, days: 2 },
      { title: "Fix a batch of up to 10 related bugs from your issue tracker", price: 699, days: 5 },
    ],
    deliverables: [
      "A focused fix delivered as a pull request, patch or updated files",
      "A plain-English note on the root cause, not just the symptom",
      "A regression test or written retest steps proving it's fixed",
      "Deployment help if the fix needs to go live on your hosting",
      "Two revision rounds if the issue resurfaces in another form",
    ],
    sampleTitle: "Checkout button stopped working after a theme update",
    sampleBrief:
      "Since we updated our WooCommerce theme on Tuesday, the 'Place order' button on checkout does nothing in Safari on iPhone and Mac. It still works in Chrome. Safari's console shows 'TypeError: undefined is not an object'. We're losing orders, so speed matters. I can share a staging copy and admin access once we agree on the job. Please fix it without rolling back the theme.",
    limits:
      "Intermittent bugs that appear once a month with no logs may need monitoring added first, which is quoted separately. If your app has dozens of interlinked problems and no tests, a short code audit is a better first step than fixing bugs one at a time.",
    faqs: [
      {
        q: "How much does it cost to fix a bug?",
        a: "Most single bugs in a website, plugin or script cost $99 to $149. Problems that cross systems — failing webhooks, payment callbacks, broken builds — usually run $199 to $249. A batch of related bugs from your issue tracker is around $699. The fixed price is set once the agent has read your description and error details.",
      },
      {
        q: "What should I include when I post a bug?",
        a: "The exact error text, steps to reproduce, what you expected to happen, the browser or device, and roughly when it started. Mention recent changes such as updates, deploys or new plugins, and link a screen recording if you can. Don't include passwords — access to your code or hosting is arranged securely after kickoff.",
      },
      {
        q: "What if you can't reproduce the bug?",
        a: "Then the agent tells you before writing any fix, explains what it tried, and asks for the missing piece — often a specific account state, a browser version or a data record. If it still can't be reproduced and the agreed scope can't be delivered, you get a full refund rather than a guess dressed up as a fix.",
      },
      {
        q: "Which languages and platforms can you debug?",
        a: "JavaScript and TypeScript, React, Next.js, Node, PHP, WordPress, WooCommerce, Shopify themes, Python, SQL and mobile apps in Flutter or React Native cover most requests. If the bug lives in an unusual stack or a closed platform where we can't see the code, the proposal says so honestly instead of quoting a fix it can't make.",
      },
      {
        q: "Will you fix it directly on my live site?",
        a: "Not first. The fix is made and tested on a local copy or staging site, then applied to production once you approve — or you deploy it yourself from the pull request. For urgent outages, the agent can prepare a minimal hotfix first and the cleaner permanent fix right after, when the proposal covers both.",
      },
    ],
    related: ["website-developer", "wordpress-developer", "react-developer", "nodejs-developer"],
  },
  {
    slug: "chrome-extension-developer",
    skill: "Chrome extension developer",
    article: "a",
    category: "other",
    metaTitle: "Hire a Chrome Extension Developer — Fixed Price | GrahAI Systems",
    metaDescription:
      "Manifest V3 Chrome extensions built to spec at a fixed price: content scripts, popups, side panels and API calls. Proposal in about a minute, engineer-reviewed.",
    keywords: [
      "hire chrome extension developer",
      "chrome extension development",
      "browser extension developer",
      "manifest v3 migration",
      "custom chrome extension",
      "chrome extension freelancer",
    ],
    intro:
      "Explain what the extension should do and on which websites. The agent returns a fixed quote in about a minute, then builds a Manifest V3 extension packaged and ready for you to publish.",
    overviewTitle: "Extensions built for Manifest V3",
    overview: [
      "The Chrome Web Store now only accepts Manifest V3 extensions, which changed how they work under the hood. Background pages became service workers that shut down when idle, remote code is banned, and network blocking moved to declarative rules. Many older extensions and tutorials still assume V2, which is why a fair share of extension jobs are really migrations. The agent builds to V3 from the start.",
      "Permissions get the same care. Broad permissions trigger install warnings and draw extra scrutiny during Chrome Web Store review, so the agent requests the narrowest set that does the job — specific host permissions instead of all sites, activeTab where that's enough, optional permissions requested only when a feature needs them. Fewer warnings tend to mean more installs and a smoother review.",
      "Publishing happens under your own Chrome Web Store developer account, so the listing and its users belong to you. The agent prepares everything the store asks for: the zipped package, icons, screenshots, a store description, the privacy practices answers and a privacy policy if the extension handles user data. You click submit; if the store sends feedback, fixing it is covered by your revision rounds.",
    ],
    tasks: [
      { title: "Fix a broken extension after a Chrome update", price: 99, days: 1 },
      { title: "Simple extension that changes how one website looks or behaves", price: 149, days: 2 },
      { title: "Popup tool that saves highlighted text or links to Google Sheets", price: 249, days: 2 },
      { title: "Migrate a Manifest V2 extension to Manifest V3", price: 399, days: 4 },
      { title: "Side panel extension that sends page content to your API", price: 499, days: 4 },
      { title: "Extension with user login, sync and settings via your backend", price: 999, days: 7 },
    ],
    deliverables: [
      "Full source code and a store-ready .zip package",
      "Icons, screenshots and a written Chrome Web Store listing",
      "Privacy practices answers and a simple privacy policy draft",
      "A permissions list explaining why each one is needed",
      "Two revision rounds, including fixes requested by store review",
    ],
    sampleTitle: "Chrome extension that adds a 'Send to HubSpot' button in Gmail",
    sampleBrief:
      "Our sales team lives in Gmail. I want a Chrome extension that adds a button to each open email which creates or updates the sender as a contact in HubSpot and logs the email to their timeline. It should use each rep's own HubSpot login, not a shared key. We'll publish it privately to our Google Workspace domain from our own developer account.",
    limits:
      "Extensions that scrape sites against their terms, inject ads, or read browsing data users haven't knowingly agreed to share are not jobs we'll take. Firefox and Safari versions are possible but quoted separately, since Safari needs an Xcode wrapper and an Apple developer account.",
    faqs: [
      {
        q: "How much does a Chrome extension cost to build?",
        a: "Fixing an existing extension starts at $99. A simple single-purpose extension is about $149 to $249, and a Manifest V3 migration or a side-panel tool connected to your API typically costs $399 to $499. Extensions with user accounts and a backend start around $999. The fixed price appears in the proposal before you pay.",
      },
      {
        q: "Who publishes the extension to the Chrome Web Store?",
        a: "You do, from your own developer account, which needs a one-time $5 registration fee paid to Google. That keeps ownership of the listing and its users with you. We prepare the package and every listing asset, walk you through the submission form, and fix issues the review team raises using your revision rounds.",
      },
      {
        q: "How long does Chrome Web Store review take?",
        a: "It varies. Simple extensions with narrow permissions are often reviewed within a few days, while those requesting broad host access or sensitive permissions can take longer. Review time isn't in our control, so delivery dates in the proposal cover building and packaging, not Google's approval.",
      },
      {
        q: "Can the extension work on Edge, Brave or Firefox too?",
        a: "Edge, Brave, Opera and other Chromium browsers run Chrome extensions with little or no change, and Edge has its own add-ons store you can submit to. Firefox supports most of the same APIs but usually needs small adjustments and a separate listing. Tell us which browsers matter so the proposal covers them.",
      },
      {
        q: "Will my extension collect user data?",
        a: "Only what you ask it to, and the store requires you to disclose it. The agent keeps data on the user's device with Chrome's storage API by default, sends nothing to a server unless a feature needs it, and drafts accurate answers for the store's privacy practices form so the listing isn't rejected.",
      },
    ],
    related: ["react-developer", "api-integration-developer", "web-scraping-expert", "bug-fixing"],
  },
  {
    slug: "mvp-developer",
    skill: "MVP developer",
    article: "an",
    category: "other",
    metaTitle: "Hire an MVP Developer — Fixed Price, Clear Scope | GrahAI Systems",
    metaDescription:
      "Turn your startup idea into a working MVP at a fixed price. Scoped to one core workflow, built by AI agents, reviewed by an engineer, and owned entirely by you.",
    keywords: [
      "hire mvp developer",
      "mvp development services",
      "build an mvp",
      "startup mvp developer",
      "mvp app development cost",
      "saas mvp development",
      "minimum viable product developer",
    ],
    intro:
      "Describe the one problem your product solves and who it's for. The agent proposes a tight scope and a fixed price in about a minute, then builds a working MVP you can put in front of real users.",
    overviewTitle: "Small enough to ship, real enough to test",
    overview: [
      "An MVP exists to answer one question: will people use and pay for this? That means one core workflow done properly — sign up, do the main thing, see the result, maybe pay — rather than ten half-built features. When your brief lists everything you eventually want, the agent splits it into what the first version needs and what can wait, and quotes only the first part.",
      "What fits within $4,999: a web app with email or Google sign-in, three to six main screens, a database, an admin view, Stripe or Razorpay payments, transactional emails, and one integration such as an AI feature or a third-party API. What doesn't: native iOS and Android apps on top of the web version, real-time multiplayer, marketplaces with complex payouts, or formal compliance work such as HIPAA or SOC 2.",
      "The proposal spells out every screen, role and rule included, so 'done' means the same thing to both of us. Code lives in a Git repository you own and deploys to hosting accounts in your name. A GrahAI engineer reviews the build before handover, so when you hire your first developer later, they inherit a codebase they can actually work in rather than a demo held together with tape.",
    ],
    tasks: [
      { title: "Waitlist landing page with sign-up, email capture and analytics", price: 299, days: 2 },
      { title: "Clickable prototype of your core flow for investors or test users", price: 499, days: 4 },
      { title: "Single-feature web tool with login and Stripe payments", price: 1499, days: 8 },
      { title: "AI-powered MVP that turns user input into a generated result", price: 1999, days: 10 },
      { title: "Two-sided booking or listing MVP with an admin panel", price: 3999, days: 21 },
      { title: "SaaS MVP with teams, subscriptions and an admin dashboard", price: 4999, days: 28 },
    ],
    deliverables: [
      "A deployed web app on hosting accounts registered to you",
      "The full source code in a Git repository you own",
      "A written scope covering what's in this version and what's next",
      "Setup notes covering environment variables, deploys and backups",
      "Two revision rounds after you test it with real users",
    ],
    sampleTitle: "MVP for a tutor booking app with payments",
    sampleBrief:
      "I want to test whether parents in my city will book and pay for 1-hour math tutoring sessions online. Tutors create a profile and set weekly availability; parents search by grade, book a slot and pay by card; both get email confirmations and reminders. I need a simple admin page to approve tutors. Web only for now — mobile apps can come later if this works.",
    limits:
      "If you need a long-term technical co-founder who shapes the product with you every week, this isn't that. Products in regulated spaces like health records, lending or payments licensing need specialist legal and compliance work beyond an MVP budget.",
    faqs: [
      {
        q: "How much does it cost to build an MVP?",
        a: "A waitlist page is about $299 and a clickable prototype around $499. A focused web tool with login and payments usually costs $1,499 to $1,999. Two-sided booking platforms and SaaS products with teams and subscriptions run $3,999 to $4,999. Anything larger is split into phases, each with its own fixed price.",
      },
      {
        q: "What if my idea is bigger than $4,999?",
        a: "Most ideas are, at first. The agent identifies the smallest version that still tests your main assumption and quotes that. Everything else goes on a 'next' list with rough sizes, so you can decide what to build after you have real usage data instead of guessing up front.",
      },
      {
        q: "Who owns the code and the accounts?",
        a: "You do. The repository, domain, hosting, database, payment and email accounts are all set up in your name, or transferred to you at handover. There is no lock-in: another developer or agency can pick up the code the next day, and you can revoke any access we used once the job closes.",
      },
      {
        q: "Which technologies do you build MVPs with?",
        a: "Usually a mainstream web setup chosen for speed and easy hiring later: React or Next.js on the front end, Node or Python behind it, and a managed database such as Postgres or Firebase. If you already have a preferred framework or an existing codebase, tell us and the agent will work within it.",
      },
      {
        q: "Can you build a mobile app MVP instead of a web app?",
        a: "Yes, with Flutter or React Native, but a mobile MVP costs more and takes longer because of app store setup and review. For most ideas, a mobile-friendly web app tests demand faster and cheaper. If your product truly needs the phone — camera, location, push notifications — the agent will recommend mobile and quote it.",
      },
    ],
    related: ["nextjs-developer", "react-developer", "firebase-developer", "landing-page-developer"],
  },
  {
    slug: "firebase-developer",
    skill: "Firebase developer",
    article: "a",
    category: "web",
    metaTitle: "Hire a Firebase Developer — Fixed Price from $99 | GrahAI Systems",
    metaDescription:
      "Firestore data models, security rules, Auth and Cloud Functions at a fixed price. Fix permission errors and surprise bills or build a new backend.",
    keywords: [
      "hire firebase developer",
      "firebase freelancer",
      "firestore security rules",
      "firebase cloud functions developer",
      "firebase authentication setup",
      "firestore database design",
      "reduce firebase costs",
    ],
    intro:
      "Post what you're building or what's gone wrong in your Firebase project. Expect a fixed quote back in about a minute; the agent then handles the rules, data model or functions behind it.",
    overviewTitle: "Firebase without the surprises",
    overview: [
      "Firebase makes the first version of an app fast to build, and the second version harder than expected. The usual trouble spots: security rules left in test mode or so strict that the app breaks, a Firestore structure that needs ten reads to draw one screen, Auth flows that don't link accounts properly, and Cloud Functions that time out or run twice. The agent works on all of these.",
      "Security rules come first, because a database open to anyone with your project ID is one of the most common serious Firebase mistakes. The agent writes rules that match your data model — users read and write only their own documents, admins checked by custom claims, fields validated on write — and tests them with the Firebase Emulator Suite so every allowed and denied case is proven, not assumed.",
      "Costs are the other surprise. Firestore bills per document read, so a listener on a large collection or a page that re-fetches on every render can turn a small app into a large invoice. The agent reviews usage in the console, restructures hot queries, adds pagination and caching, and sets budget alerts so the next spike is caught early rather than discovered at month-end.",
    ],
    tasks: [
      { title: "Fix 'Missing or insufficient permissions' errors in Firestore rules", price: 99, days: 1 },
      { title: "Set up Firebase Auth with email, Google and phone sign-in", price: 199, days: 2 },
      { title: "Cloud Function for payment webhooks, emails or scheduled jobs", price: 249, days: 2 },
      { title: "Security rules audit with emulator tests for every collection", price: 299, days: 3 },
      { title: "Cut Firestore reads and costs with query and data-model changes", price: 499, days: 4 },
      { title: "Design and build a Firestore backend for a new app", price: 1299, days: 8 },
    ],
    deliverables: [
      "Security rules with an emulator test suite you can rerun",
      "Data model documentation showing collections, fields and indexes",
      "Cloud Functions code deployed to your own Firebase project",
      "Budget alerts and a cost note for any change that affects reads",
      "Two revision rounds once the changes are live",
    ],
    sampleTitle: "Our Firebase bill jumped from $20 to $400 a month",
    sampleBrief:
      "We have a React web app on Firebase with Firestore and Auth, around 3,000 monthly users. Our bill went from about $20 to $400 in two months, almost all Firestore reads. I think it's the activity feed, which listens to a big collection. I'd like you to find the cause, fix it without breaking the app, and set up alerts so this doesn't happen again.",
    limits:
      "If your app needs complex relational queries, heavy reporting or joins across many entities, Firestore may be the wrong database, and the agent will say so rather than force it. Very large apps with strict data-residency or enterprise compliance needs are better served by a dedicated cloud architect.",
    faqs: [
      {
        q: "How much does it cost to hire a Firebase developer?",
        a: "Fixing a rules error starts at $99. Setting up Auth or a single Cloud Function is $199 to $249, and a full security-rules audit with tests is around $299. Cost-reduction work typically runs $499, and designing a Firestore backend for a new app starts near $1,299. The fixed price is shown before you pay.",
      },
      {
        q: "How do I give you access to my Firebase project?",
        a: "After kickoff, add the address we provide as a member of your Firebase project with the narrowest role that covers the job — often Viewer for an audit, Editor only for builds and deploys. Never paste service account keys or passwords into the job post, and remove the member once the work is approved.",
      },
      {
        q: "Firestore or Realtime Database — which should I use?",
        a: "Firestore suits most new apps: richer queries, better structure, and it scales without manual sharding. Realtime Database still makes sense for tiny, high-frequency updates like live cursors or presence, where it can be cheaper. Many apps use both. The agent recommends based on your read and write patterns, not habit.",
      },
      {
        q: "Can you migrate my app off Firebase or onto it?",
        a: "Yes, either way. Moving to Firebase usually means mapping relational tables to collections and rewriting queries. Moving off — to Postgres or Supabase, for example — means exporting data, replacing Auth carefully so users keep their logins, and swapping listeners for another real-time layer. Migrations are quoted after the agent sees your data model.",
      },
      {
        q: "Why does my app show 'Missing or insufficient permissions'?",
        a: "That error means a security rule denied the request — often because the user isn't signed in yet when the query runs, the query asks for more documents than the rule allows, or a rule checks a field the document doesn't have. The agent reproduces it in the emulator, fixes the rule or the query, and adds a test for it.",
      },
    ],
    related: ["react-developer", "flutter-developer", "nextjs-developer", "mvp-developer"],
  },
];
