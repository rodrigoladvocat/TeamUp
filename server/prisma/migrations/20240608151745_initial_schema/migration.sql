-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "isManager" BOOLEAN NOT NULL,
    "role" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "telephone" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cycle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "initialDate" DATETIME NOT NULL,
    "finalDate" DATETIME NOT NULL,
    "lastUpdated" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Criteria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
    "outOfTheBoxThinkingExecutionComment" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Evaluation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "evaluatorUserId" INTEGER NOT NULL,
    "evaluatedUserId" INTEGER NOT NULL,
    "cycleId" INTEGER NOT NULL,
    "criteriaId" INTEGER NOT NULL,
    "isTuning" BOOLEAN NOT NULL,
    CONSTRAINT "Evaluation_evaluatorUserId_fkey" FOREIGN KEY ("evaluatorUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Evaluation_evaluatedUserId_fkey" FOREIGN KEY ("evaluatedUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Evaluation_cycleId_fkey" FOREIGN KEY ("cycleId") REFERENCES "Cycle" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Evaluation_criteriaId_fkey" FOREIGN KEY ("criteriaId") REFERENCES "Criteria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
