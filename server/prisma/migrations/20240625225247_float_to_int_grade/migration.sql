/*
  Warnings:

  - You are about to alter the column `grade` on the `Tuning` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tuning" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "collaboratorUserId" INTEGER NOT NULL,
    "managerUserId" INTEGER NOT NULL,
    "cycleId" INTEGER NOT NULL,
    "ownershipMentalityGrade" INTEGER NOT NULL,
    "learningAgilityGrade" INTEGER NOT NULL,
    "resilienceAdversityGrade" INTEGER NOT NULL,
    "teamworkGrade" INTEGER NOT NULL,
    "outOfTheBoxThinkingBehavioralGrade" INTEGER NOT NULL,
    "deliveringQualityGrade" INTEGER NOT NULL,
    "meetingDeadlinesGrade" INTEGER NOT NULL,
    "doingMoreWithLessGrade" INTEGER NOT NULL,
    "outOfTheBoxThinkingExecutionGrade" INTEGER NOT NULL,
    "grade" REAL NOT NULL,
    CONSTRAINT "Tuning_managerUserId_fkey" FOREIGN KEY ("managerUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tuning_collaboratorUserId_fkey" FOREIGN KEY ("collaboratorUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tuning_cycleId_fkey" FOREIGN KEY ("cycleId") REFERENCES "Cycle" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tuning" ("collaboratorUserId", "cycleId", "deliveringQualityGrade", "doingMoreWithLessGrade", "grade", "id", "learningAgilityGrade", "managerUserId", "meetingDeadlinesGrade", "outOfTheBoxThinkingBehavioralGrade", "outOfTheBoxThinkingExecutionGrade", "ownershipMentalityGrade", "resilienceAdversityGrade", "teamworkGrade") SELECT "collaboratorUserId", "cycleId", "deliveringQualityGrade", "doingMoreWithLessGrade", "grade", "id", "learningAgilityGrade", "managerUserId", "meetingDeadlinesGrade", "outOfTheBoxThinkingBehavioralGrade", "outOfTheBoxThinkingExecutionGrade", "ownershipMentalityGrade", "resilienceAdversityGrade", "teamworkGrade" FROM "Tuning";
DROP TABLE "Tuning";
ALTER TABLE "new_Tuning" RENAME TO "Tuning";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
