// Google shows roughly 60–65 characters of a title. Add or keep the brand only when it fits.
const BRAND = / \| (GrahAI Systems( Case Study)?|GrahAI Agents|Grah AI Systems|Grah AI)$/;
export function fitTitle(title, max = 65) {
  if (title.length <= max) return title;
  return title.replace(BRAND, "");
}
