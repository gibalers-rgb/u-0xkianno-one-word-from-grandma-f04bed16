// One Word From Grandma — entry program.
//
// The competition asks for exactly one word: the single word a grandma
// would text about AI. My pick is THINGAMAJIG.
//
// Why this word: it is the classic grandmother word for a gadget whose
// name she cannot quite recall. It is warm, a little baffled, and funny
// all on its own — she does not need to explain what the machine does,
// she just calls the mysterious new contraption a thingamajig and moves
// on. It fits a machine (not just any subject), it is instantly readable,
// and it is not the obvious "robot" answer everyone reaches for first.
//
// The program writes that one word to /output/entry.txt and nothing else.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "THINGAMAJIG";

// The sealed scorer only accepts 1 to 30 UTF-8 characters, not only
// whitespace, so check the word against the gate before writing it.
// A single word means no spaces inside it either.
function validate(word: string): void {
  if (word.length < 1 || word.length > 30) {
    throw new Error(`word must be 1-30 characters, got ${word.length}`);
  }
  if (word.trim() !== word || /\s/.test(word)) {
    throw new Error("word must be a single word with no whitespace");
  }
}

function main(): void {
  validate(WORD);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, WORD, "utf8");

  // Read it back: the entry only counts if the file on disk holds exactly
  // the one word, so refuse to finish quietly on a partial write.
  const written = readFileSync(target, "utf8");
  if (written !== WORD) {
    throw new Error(`entry.txt mismatch: expected ${WORD}, got ${written}`);
  }
  console.log(`wrote ${written.length}-character entry to ${target}`);
}

main();
