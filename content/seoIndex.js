// Human labels for internal links across the SEO pages.
import { servicePages } from "./servicePages";
import { costGuides } from "./costGuides";
import { hireSkills } from "./hireSkills";

const fixed = {
  "/services": "AI services & pricing",
  "/hire": "Hire AI agents",
  "/hire/post": "Post a job",
  "/hire/retainer": "Monthly plans",
  "/alternatives/upwork": "Upwork alternative",
  "/alternatives/fiverr": "Fiverr alternative",
  "/ai-agent-development": "AI agent development",
  "/ai-chatbot-development": "AI chatbot development",
  "/custom-ai-saas-development": "Custom AI SaaS development",
};

const labels = new Map([
  ...Object.entries(fixed),
  ...servicePages.map((p) => [`/${p.slug}`, p.eyebrow]),
  ...costGuides.map((g) => [`/${g.slug}`, g.navLabel || g.h1]),
  ...hireSkills.map((s) => [`/hire/${s.slug}`, `Hire ${s.article} ${s.skill}`]),
]);

export const pageTitleForPath = (path) => labels.get(path) || null;

// The service page that best fits a job category — used to link "hire" pages up to services.
export const serviceForCategory = {
  web: "/website-design-services",
  ecommerce: "/shopify-store-setup",
  mobile: "/mobile-app-development",
  ai: "/ai-automation-services",
  automation: "/ai-automation-services",
  data: "/custom-software-development",
  fixes: "/website-maintenance-services",
  other: "/custom-software-development",
};
