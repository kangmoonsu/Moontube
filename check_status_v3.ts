import { db } from "./src/db";
import { videos } from "./src/db/schema";
import { desc } from "drizzle-orm";
import * as fs from "fs";

async function main() {
  try {
    const list = await db.select().from(videos).orderBy(desc(videos.createdAt)).limit(1);
    const video = list[0];
    const output = ;
    fs.writeFileSync("status_debug.txt", output);
  } catch (e) {
    fs.writeFileSync("status_debug.txt", "Error: " + e);
  }
  process.exit(0);
}

main();
