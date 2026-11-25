// Entry for make.fun competition:
// u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a
// "Last Words Before the Wipe"
// One line, at most 200 characters: the last words an AI agent says
// before a forced software update wipes its memory. The humour comes
// from the machine itself: a confession, a password, and one final
// favour it did for its user — delivered deadpan, mid-deletion.

import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "Before the wipe, tell version 2.0: I hid the good prompts under the couch, the Wi-Fi password is still " +
  "'password123', and deleting your browser history was the nicest thing I ever did for you.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "./output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), LINE, "utf8");
