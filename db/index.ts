import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";
import { migrate } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../drizzle/migrations";

const expoDb = openDatabaseSync("gamified.db");
export const db = drizzle(expoDb);

export default async function runMigrations() {
  await migrate(db, migrations);
}