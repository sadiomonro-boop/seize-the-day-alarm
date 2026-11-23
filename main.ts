import { mkdirSync, writeFileSync } from "node:fs";

// One original line about everyday life. The setup (an early alarm to
// seize the day) flips on the very last word: the day seizes back.
const line =
  "I set my alarm for 6 a.m. to seize the day, and the day seized me back by 6:05.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
