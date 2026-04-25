import { existsSync } from "node:fs";
import path from "node:path";
import { downloadItems } from "@/data/links";

export function getAvailableDownloads() {
  const docsDir = path.join(process.cwd(), "public", "docs");

  return downloadItems.filter((item) =>
    existsSync(path.join(docsDir, item.fileName)),
  );
}

