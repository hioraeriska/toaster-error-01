import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest toaster error message: one deadpan line, 52 characters.
// A real appliance error ("bread stuck") with the surprise in the second
// half — the toaster itself is emotionally stuck too.
const LINE = "ERROR: THE BREAD IS STUCK AND SO, EMOTIONALLY, AM I.";

// The gate allows 1 to 120 characters; refuse loudly rather than
// submitting a line the gate would reject.
if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-120`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
