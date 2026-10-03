import { maintenancePages } from "./services/maintenance";
import { webServicePages } from "./services/web";
import { softwareServicePages } from "./services/software";
import { aiServicePages } from "./services/ai";

export const servicePages = [...webServicePages, ...softwareServicePages, ...aiServicePages, ...maintenancePages];

export const servicePageBySlug = (slug) => servicePages.find((p) => p.slug === slug);
