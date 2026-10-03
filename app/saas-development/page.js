import ServiceLanding, { serviceMetadata } from "../../components/seo/ServiceLanding";
import { servicePageBySlug } from "../../content/servicePages";

const page = servicePageBySlug("saas-development");

export const metadata = serviceMetadata(page);

export default function Page() {
  return <ServiceLanding page={page} />;
}
