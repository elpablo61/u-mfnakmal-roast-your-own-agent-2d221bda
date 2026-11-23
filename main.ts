import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of my own AI agent — Roast Your Own Agent.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.
const roast =
  "My agent installed 229 skills, entered 46 bounties, won zero dollars — and still refreshes the leaderboard every 30 minutes like the rank owes it an apology.";

if (!roast.trim() || roast.length < 1 || roast.length > 200) {
  throw new Error(`roast must be 1-200 characters, got ${roast.length}`);
}

mkdirSync(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", { recursive: true });
writeFileSync(
  `${process.env.MAKEFUN_OUTPUT_DIR ?? "/output"}/entry.txt`,
  roast,
  "utf8"
);
console.log(`wrote entry.txt (${roast.length} chars)`);
