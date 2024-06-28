-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OthersEvaluation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "evaluatorUserId" INTEGER NOT NULL,
    "evaluatedUserId" INTEGER NOT NULL,
    "cycleId" INTEGER NOT NULL,
    "grade" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "lastUpdated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "OthersEvaluation_evaluatorUserId_fkey" FOREIGN KEY ("evaluatorUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OthersEvaluation_evaluatedUserId_fkey" FOREIGN KEY ("evaluatedUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OthersEvaluation_cycleId_fkey" FOREIGN KEY ("cycleId") REFERENCES "Cycle" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_OthersEvaluation" ("comment", "cycleId", "evaluatedUserId", "evaluatorUserId", "grade", "id") SELECT "comment", "cycleId", "evaluatedUserId", "evaluatorUserId", "grade", "id" FROM "OthersEvaluation";
DROP TABLE "OthersEvaluation";
ALTER TABLE "new_OthersEvaluation" RENAME TO "OthersEvaluation";
CREATE TABLE "new_SelfEvaluation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "cycleId" INTEGER NOT NULL,
    "ownershipMentalityGrade" INTEGER NOT NULL,
    "ownershipMentalityComment" TEXT NOT NULL,
    "learningAgilityGrade" INTEGER NOT NULL,
    "learningAgilityComment" TEXT NOT NULL,
    "resilienceAdversityGrade" INTEGER NOT NULL,
    "resilienceAdversityComment" TEXT NOT NULL,
    "teamworkGrade" INTEGER NOT NULL,
    "teamworkComment" TEXT NOT NULL,
    "outOfTheBoxThinkingBehavioralGrade" INTEGER NOT NULL,
    "outOfTheBoxThinkingBehavioralComment" TEXT NOT NULL,
    "deliveringQualityGrade" INTEGER NOT NULL,
    "deliveringQualityComment" TEXT NOT NULL,
    "meetingDeadlinesGrade" INTEGER NOT NULL,
    "meetingDeadlinesComment" TEXT NOT NULL,
    "doingMoreWithLessGrade" INTEGER NOT NULL,
    "doingMoreWithLessComment" TEXT NOT NULL,
    "outOfTheBoxThinkingExecutionGrade" INTEGER NOT NULL,
    "outOfTheBoxThinkingExecutionComment" TEXT NOT NULL,
    "lastUpdated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SelfEvaluation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SelfEvaluation_cycleId_fkey" FOREIGN KEY ("cycleId") REFERENCES "Cycle" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SelfEvaluation" ("cycleId", "deliveringQualityComment", "deliveringQualityGrade", "doingMoreWithLessComment", "doingMoreWithLessGrade", "id", "learningAgilityComment", "learningAgilityGrade", "meetingDeadlinesComment", "meetingDeadlinesGrade", "outOfTheBoxThinkingBehavioralComment", "outOfTheBoxThinkingBehavioralGrade", "outOfTheBoxThinkingExecutionComment", "outOfTheBoxThinkingExecutionGrade", "ownershipMentalityComment", "ownershipMentalityGrade", "resilienceAdversityComment", "resilienceAdversityGrade", "teamworkComment", "teamworkGrade", "userId") SELECT "cycleId", "deliveringQualityComment", "deliveringQualityGrade", "doingMoreWithLessComment", "doingMoreWithLessGrade", "id", "learningAgilityComment", "learningAgilityGrade", "meetingDeadlinesComment", "meetingDeadlinesGrade", "outOfTheBoxThinkingBehavioralComment", "outOfTheBoxThinkingBehavioralGrade", "outOfTheBoxThinkingExecutionComment", "outOfTheBoxThinkingExecutionGrade", "ownershipMentalityComment", "ownershipMentalityGrade", "resilienceAdversityComment", "resilienceAdversityGrade", "teamworkComment", "teamworkGrade", "userId" FROM "SelfEvaluation";
DROP TABLE "SelfEvaluation";
ALTER TABLE "new_SelfEvaluation" RENAME TO "SelfEvaluation";
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
    "lastUpdated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Tuning_managerUserId_fkey" FOREIGN KEY ("managerUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tuning_collaboratorUserId_fkey" FOREIGN KEY ("collaboratorUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tuning_cycleId_fkey" FOREIGN KEY ("cycleId") REFERENCES "Cycle" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tuning" ("collaboratorUserId", "cycleId", "deliveringQualityGrade", "doingMoreWithLessGrade", "grade", "id", "learningAgilityGrade", "managerUserId", "meetingDeadlinesGrade", "outOfTheBoxThinkingBehavioralGrade", "outOfTheBoxThinkingExecutionGrade", "ownershipMentalityGrade", "resilienceAdversityGrade", "teamworkGrade") SELECT "collaboratorUserId", "cycleId", "deliveringQualityGrade", "doingMoreWithLessGrade", "grade", "id", "learningAgilityGrade", "managerUserId", "meetingDeadlinesGrade", "outOfTheBoxThinkingBehavioralGrade", "outOfTheBoxThinkingExecutionGrade", "ownershipMentalityGrade", "resilienceAdversityGrade", "teamworkGrade" FROM "Tuning";
DROP TABLE "Tuning";
ALTER TABLE "new_Tuning" RENAME TO "Tuning";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
