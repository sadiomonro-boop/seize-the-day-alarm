import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I set my alarm for 6 a.m. to seize the day, and the day seized me back by 6:05.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
