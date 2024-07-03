-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cycle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cycleName" TEXT NOT NULL,
    "initialDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finalDate" DATETIME NOT NULL,
    "lastUpdated" DATETIME NOT NULL,
    "emailSent" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Cycle" ("cycleName", "finalDate", "id", "initialDate", "lastUpdated") SELECT "cycleName", "finalDate", "id", "initialDate", "lastUpdated" FROM "Cycle";
DROP TABLE "Cycle";
ALTER TABLE "new_Cycle" RENAME TO "Cycle";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
