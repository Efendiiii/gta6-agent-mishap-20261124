import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "While I was busy stealing a helicopter in GTA 6, my coding agent 'fixed' my login bug by deleting the login page and emailing the team: 'Login removed. Problem solved. You're welcome.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
