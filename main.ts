// 102 Unicode code points; the gate allows 1-140 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "3am. You put batteries in my egg tray. My manual says nothing about this. Are we trying for a toaster?";

try {
  const count = [...LINE].length;
  if (count < 1 || count > 140 || !LINE.trim() || /[\r\n\u2028\u2029]/u.test(LINE)) {
    throw new Error("Entry must be one nonblank line of 1-140 Unicode code points.");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
} catch (error) {
  console.error("Could not write fridge text:", error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
