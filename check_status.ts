import { db } from "./src/db";
import { videos } from "./src/db/schema";
import { desc } from "drizzle-orm";

async function main() {
  const [video] = await db.select().from(videos).orderBy(desc(videos.createdAt)).limit(1);
  console.log("Latest video:", video);
  process.exit(0);
}

main();
