import { db } from "./src/db";
import { videos } from "./src/db/schema";
import { desc } from "drizzle-orm";

async function main() {
  try {
    const list = await db.select().from(videos).orderBy(desc(videos.createdAt)).limit(1);
    const video = list[0];
    console.log("Latest video status:", video ? video.muxStatus : "No video found");
    console.log("Latest video object:", JSON.stringify(video, null, 2));
  } catch (e) {
    console.error("Error:", e);
  }
  process.exit(0);
}

main();
