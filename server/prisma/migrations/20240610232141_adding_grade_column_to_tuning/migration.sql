/*
  Warnings:

  - Added the required column `grade` to the `Tuning` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tuning" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "collaboratorUserId" INTEGER NOT NULL,
    "managerUserId" INTEGER NOT NULL,
    "cycleId" INTEGER NOT NULL,
    "grade" INTEGER NOT NULL,
    CONSTRAINT "Tuning_managerUserId_fkey" FOREIGN KEY ("managerUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tuning_collaboratorUserId_fkey" FOREIGN KEY ("collaboratorUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tuning_cycleId_fkey" FOREIGN KEY ("cycleId") REFERENCES "Cycle" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tuning" ("collaboratorUserId", "cycleId", "id", "managerUserId") SELECT "collaboratorUserId", "cycleId", "id", "managerUserId" FROM "Tuning";
DROP TABLE "Tuning";
ALTER TABLE "new_Tuning" RENAME TO "Tuning";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
