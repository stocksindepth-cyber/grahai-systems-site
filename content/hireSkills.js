import { webSkills } from "./hire/webSkills";
import { aiSkills } from "./hire/aiSkills";
import { dataSkills } from "./hire/dataSkills";
import { moreSkills } from "./hire/moreSkills";

export const hireSkills = [...webSkills, ...aiSkills, ...dataSkills, ...moreSkills];

export const skillBySlug = (slug) => hireSkills.find((s) => s.slug === slug);

export const skillsByCategory = hireSkills.reduce((acc, s) => {
  (acc[s.category] ||= []).push(s);
  return acc;
}, {});
