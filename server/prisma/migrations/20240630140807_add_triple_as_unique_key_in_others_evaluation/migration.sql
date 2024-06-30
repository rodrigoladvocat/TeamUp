/*
  Warnings:

  - A unique constraint covering the columns `[evaluatorUserId,evaluatedUserId,cycleId]` on the table `OthersEvaluation` will be added. If there are existing duplicate values, this will fail.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SelfEvaluation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "cycleId" INTEGER NOT NULL,
    "ownershipMentalityGrade" INTEGER NOT NULL DEFAULT -1,
    "ownershipMentalityComment" TEXT NOT NULL DEFAULT '',
    "learningAgilityGrade" INTEGER NOT NULL DEFAULT -1,
    "learningAgilityComment" TEXT NOT NULL DEFAULT '',
    "resilienceAdversityGrade" INTEGER NOT NULL DEFAULT -1,
    "resilienceAdversityComment" TEXT NOT NULL DEFAULT '',
    "teamworkGrade" INTEGER NOT NULL DEFAULT -1,
    "teamworkComment" TEXT NOT NULL DEFAULT '',
    "outOfTheBoxThinkingBehavioralGrade" INTEGER NOT NULL DEFAULT -1,
    "outOfTheBoxThinkingBehavioralComment" TEXT NOT NULL DEFAULT '',
    "deliveringQualityGrade" INTEGER NOT NULL DEFAULT -1,
    "deliveringQualityComment" TEXT NOT NULL DEFAULT '',
    "meetingDeadlinesGrade" INTEGER NOT NULL DEFAULT -1,
    "meetingDeadlinesComment" TEXT NOT NULL DEFAULT '',
    "doingMoreWithLessGrade" INTEGER NOT NULL DEFAULT -1,
    "doingMoreWithLessComment" TEXT NOT NULL DEFAULT '',
    "outOfTheBoxThinkingExecutionGrade" INTEGER NOT NULL DEFAULT -1,
    "outOfTheBoxThinkingExecutionComment" TEXT NOT NULL DEFAULT '',
    "lastUpdated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isFinalized" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "SelfEvaluation_cycleId_fkey" FOREIGN KEY ("cycleId") REFERENCES "Cycle" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SelfEvaluation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SelfEvaluation" ("cycleId", "deliveringQualityComment", "deliveringQualityGrade", "doingMoreWithLessComment", "doingMoreWithLessGrade", "id", "isFinalized", "lastUpdated", "learningAgilityComment", "learningAgilityGrade", "meetingDeadlinesComment", "meetingDeadlinesGrade", "outOfTheBoxThinkingBehavioralComment", "outOfTheBoxThinkingBehavioralGrade", "outOfTheBoxThinkingExecutionComment", "outOfTheBoxThinkingExecutionGrade", "ownershipMentalityComment", "ownershipMentalityGrade", "resilienceAdversityComment", "resilienceAdversityGrade", "teamworkComment", "teamworkGrade", "userId") SELECT "cycleId", "deliveringQualityComment", "deliveringQualityGrade", "doingMoreWithLessComment", "doingMoreWithLessGrade", "id", "isFinalized", "lastUpdated", "learningAgilityComment", "learningAgilityGrade", "meetingDeadlinesComment", "meetingDeadlinesGrade", "outOfTheBoxThinkingBehavioralComment", "outOfTheBoxThinkingBehavioralGrade", "outOfTheBoxThinkingExecutionComment", "outOfTheBoxThinkingExecutionGrade", "ownershipMentalityComment", "ownershipMentalityGrade", "resilienceAdversityComment", "resilienceAdversityGrade", "teamworkComment", "teamworkGrade", "userId" FROM "SelfEvaluation";
DROP TABLE "SelfEvaluation";
ALTER TABLE "new_SelfEvaluation" RENAME TO "SelfEvaluation";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "OthersEvaluation_evaluatorUserId_evaluatedUserId_cycleId_key" ON "OthersEvaluation"("evaluatorUserId", "evaluatedUserId", "cycleId");
