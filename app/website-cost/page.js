import CostGuide, { costGuideMetadata } from "../../components/seo/CostGuide";
import { costGuides } from "../../content/costGuides";

const guide = costGuides.find((g) => g.slug === "website-cost");

export const metadata = costGuideMetadata(guide);

export default function Page() {
  return <CostGuide guide={guide} />;
}
