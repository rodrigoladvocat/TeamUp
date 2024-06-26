/*
  Warnings:

  - Added the required column `cycleName` to the `Cycle` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cycle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cycleName" TEXT NOT NULL,
    "initialDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finalDate" DATETIME NOT NULL,
    "lastUpdated" DATETIME NOT NULL
);
INSERT INTO "new_Cycle" ("finalDate", "id", "initialDate", "lastUpdated") SELECT "finalDate", "id", "initialDate", "lastUpdated" FROM "Cycle";
DROP TABLE "Cycle";
ALTER TABLE "new_Cycle" RENAME TO "Cycle";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;