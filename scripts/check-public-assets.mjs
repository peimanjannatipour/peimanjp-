import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const sourceRoot = join(root, "src");
const publicRoot = join(root, "public");
const sourceExtensions = new Set([".ts", ".tsx"]);
const imagePattern = /["'](\/images\/[^"'?#]+\.(?:avif|gif|jpe?g|png|svg|webp))["']/gi;

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

const references = new Map();

for (const file of walk(sourceRoot)) {
  const extension = file.slice(file.lastIndexOf("."));
  if (!sourceExtensions.has(extension)) continue;

  const source = readFileSync(file, "utf8");
  for (const match of source.matchAll(imagePattern)) {
    const reference = match[1];
    const locations = references.get(reference) ?? [];
    locations.push(relative(root, file));
    references.set(reference, locations);
  }
}

const missing = [];

for (const [reference, locations] of references) {
  const assetPath = join(publicRoot, reference.replace(/^\//, ""));
  if (!existsSync(assetPath) || statSync(assetPath).size === 0) {
    missing.push(`${reference} referenced by ${locations.join(", ")}`);
  }
}

if (missing.length > 0) {
  console.error("Missing or empty public image assets:");
  for (const item of missing) console.error(`- ${item}`);
  process.exit(1);
}

console.log(`Verified ${references.size} referenced public image assets.`);
