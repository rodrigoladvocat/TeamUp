import { PrismaClient } from '@prisma/client';
import { users } from "./createMockUsers";
import { cycles } from "./createMockCycles";
import { criteria } from "./createMockCriteria";
import { evaluations } from "./createMockEvaluations";

const prisma = new PrismaClient();

async function main() {

  // Inserir usuários
  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }

  // Inserir ciclos
  for (const cycle of cycles) {
    await prisma.cycle.create({
      data: cycle,
    });
  }

  // Inserir critérios
  for (const criterion of criteria) {
    await prisma.criteria.create({
      data: criterion,
    });
  }

  // Inserir avaliações
  for (const evaluation of evaluations) {
    await prisma.evaluation.create({
      data: evaluation,
    });
  }

  console.log("Database seeded successfully!");

  process.exit();
}

// Command to run seed: npm run seed
main().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});
