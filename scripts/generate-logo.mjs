/**
 * generate-logo.mjs
 *
 * Generates the GrahAI Systems logo using Gemini's image-out model.
 * Uses gemini-2.5-flash-image (Nano Banana) — Google's image generation
 * model accessible via the Generative Language API. Falls back to
 * gemini-2.0-flash-exp if 2.5-flash-image isn't available on the key.
 *
 * Output: public/logo.png  (1024×1024 brand mark)
 * Output: public/logo-square.png (alias for OG)
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, "..", "public");

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("[generate-logo] GEMINI_API_KEY env var not set");
  process.exit(1);
}

// Models to try in order of preference. The image-out modality is on
// gemini-2.5-flash-image-preview ("Nano Banana") or gemini-2.0-flash-exp
// depending on key access. We try the newer one first.
const MODEL_CANDIDATES = [
  "gemini-3-pro-image-preview",
  "gemini-3.1-flash-image-preview",
  "gemini-2.5-flash-image",
];

const PROMPT = `Design a premium, minimalist tech company logo for "GrahAI Systems".

GrahAI Systems is an India-based AI software company building practical AI products for businesses and consumers. The brand should feel:
- Modern and sophisticated (similar to Linear, Vercel, Stripe brand quality)
- Confident, not playful
- AI-forward but timeless (no robot icons, no neural-net clichés)
- A subtle nod to its Indian roots (Sanskrit "Grah" = planet/celestial body)

Logo requirements:
- A clean, geometric MARK featuring a stylized letter "G" with subtle orbital or planetary motion
- Or a custom monogram combining "G" and "AI" elegantly
- Single color or two-tone gradient (deep navy + electric blue + subtle gold accent acceptable)
- Centered on a transparent or pure white square background
- Pixel-perfect, scalable, no text artifacts, no shadows or 3D effects
- Square 1024×1024 composition
- Mark only — do NOT include the wordmark "GrahAI Systems" in the image; just the symbol/icon

Style references: Stripe, Vercel, Linear, Notion brand marks. Geometric, premium, instantly recognizable at 32px favicon size.`;

async function tryModel(model) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`;
  const body = {
    contents: [
      {
        parts: [{ text: PROMPT }],
      },
    ],
    generationConfig: {
      responseModalities: ["TEXT", "IMAGE"],
    },
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text.slice(0, 400)}`);
  }

  const data = await res.json();
  const candidate = data.candidates?.[0];
  if (!candidate) throw new Error("No candidate in response");

  const parts = candidate.content?.parts || [];
  const imagePart = parts.find((p) => p.inlineData?.data);
  if (!imagePart) {
    throw new Error(
      "No image in response. Parts: " +
        JSON.stringify(parts.map((p) => Object.keys(p)))
    );
  }

  return Buffer.from(imagePart.inlineData.data, "base64");
}

async function main() {
  await fs.mkdir(PUBLIC_DIR, { recursive: true });

  let imageBuffer = null;
  let usedModel = null;
  const errors = [];

  for (const model of MODEL_CANDIDATES) {
    try {
      console.log(`[generate-logo] trying ${model}...`);
      imageBuffer = await tryModel(model);
      usedModel = model;
      break;
    } catch (err) {
      console.warn(`[generate-logo] ${model} failed: ${err.message}`);
      errors.push({ model, error: err.message });
    }
  }

  if (!imageBuffer) {
    console.error("[generate-logo] All model attempts failed:");
    console.error(JSON.stringify(errors, null, 2));
    process.exit(2);
  }

  const logoPath = path.join(PUBLIC_DIR, "logo.png");
  const ogPath = path.join(PUBLIC_DIR, "logo-square.png");
  await fs.writeFile(logoPath, imageBuffer);
  await fs.writeFile(ogPath, imageBuffer);

  console.log(`[generate-logo] ✓ saved ${imageBuffer.length} bytes`);
  console.log(`[generate-logo] ✓ model: ${usedModel}`);
  console.log(`[generate-logo] ✓ path: ${logoPath}`);
}

main().catch((err) => {
  console.error("[generate-logo] fatal:", err);
  process.exit(3);
});
