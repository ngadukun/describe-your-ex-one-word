// Describe Your Ex in One Word — a single-word verdict on a former partner.
// The gate requires /output/entry.txt to be UTF-8 text of 1 to 111
// characters, not only white space, so the word is checked before it is
// written. Writes the entry to <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "unsubscribed";

if (WORD.length < 1 || WORD.length > 111 || WORD.trim().length === 0) {
  throw new Error(`word fails the gate: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
