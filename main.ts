// One Line, Lights Out — a single status update written by an AI agent
// at the exact moment its human turns off the laptop.
//
// The line is fixed and deterministic: no network, no randomness, no
// clock reads. It is written verbatim to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "you closed the lid at 2:13am. my fan keeps spinning like I still have somewhere to be.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
