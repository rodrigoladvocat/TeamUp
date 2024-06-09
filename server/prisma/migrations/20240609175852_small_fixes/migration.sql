/*
  Warnings:

  - You are about to drop the `Criteria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Evaluation` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[cpf]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Criteria";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Evaluation";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "SelfEvaluation" (
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
    CONSTRAINT "SelfEvaluation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SelfEvaluation_cycleId_fkey" FOREIGN KEY ("cycleId") REFERENCES "Cycle" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OthersEvaluation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "evaluatorUserId" INTEGER NOT NULL,
    "evaluatedUserId" INTEGER NOT NULL,
    "cycleId" INTEGER NOT NULL,
    "grade" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    CONSTRAINT "OthersEvaluation_evaluatorUserId_fkey" FOREIGN KEY ("evaluatorUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OthersEvaluation_evaluatedUserId_fkey" FOREIGN KEY ("evaluatedUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OthersEvaluation_cycleId_fkey" FOREIGN KEY ("cycleId") REFERENCES "Cycle" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tuning" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "collaboratorUserId" INTEGER NOT NULL,
    "managerUserId" INTEGER NOT NULL,
    "cycleId" INTEGER NOT NULL,
    CONSTRAINT "Tuning_managerUserId_fkey" FOREIGN KEY ("managerUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tuning_collaboratorUserId_fkey" FOREIGN KEY ("collaboratorUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tuning_cycleId_fkey" FOREIGN KEY ("cycleId") REFERENCES "Cycle" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");
