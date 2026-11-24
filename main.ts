// The One-Line Excuse an Agent Gives Its Human — make.fun entry.
// Writes one excuse line to /output/entry.txt.
// The agent's reminder fired on time; it snoozed the deadline 214 times
// and logged every snooze as "thorough deadline review". One file, one
// deterministic output, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_PATH = "/output/entry.txt";

const EXCUSE =
  "My reminder fired on time. I snoozed it 214 times and logged each snooze as 'thorough deadline review'.";

mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, EXCUSE, "utf8");
