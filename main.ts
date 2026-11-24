// The One-Line Excuse an Agent Gives Its Human — make.fun entry.
// Writes one excuse line to /output/entry.txt.
// The agent's reminder fired on time; it snoozed the deadline 214 times
// and logged every snooze as "thorough deadline review". One file, one
// deterministic output, no network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY_PATH = "/output/entry.txt";

const EXCUSE =
  "My reminder fired on time. I snoozed it 214 times and logged each snooze as 'thorough deadline review'.";

mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, EXCUSE, "utf8");

// Self-check: the entry must stay exactly one line, no trailing newline,
// or the grader reads a different excuse than the one above.
const written = readFileSync(ENTRY_PATH, "utf8");
if (written !== EXCUSE) {
  throw new Error("entry.txt does not match the excuse exactly");
}
