import ServiceLanding, { serviceMetadata } from "../../components/seo/ServiceLanding";
import { servicePageBySlug } from "../../content/servicePages";

const page = servicePageBySlug("convert-website-to-app");

export const metadata = serviceMetadata(page);

export default function Page() {
  return <ServiceLanding page={page} />;
}
