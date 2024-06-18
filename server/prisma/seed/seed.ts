// import { PrismaClient } from '@prisma/client';
// import { users } from "./createMockUsers";
// import { cycles } from "./createMockCycles";
// import { selfEvaluations } from "./createMockSelfEvaluations";
// import { othersEvaluations } from "./createMockOthersEvaluations";
// import { tunings } from "./createMockTunings";

// const prisma = new PrismaClient();

// async function deleteData() {
//   await prisma.tuning.deleteMany();
//   await prisma.othersEvaluation.deleteMany();
//   await prisma.selfEvaluation.deleteMany();
//   await prisma.cycle.deleteMany();
//   await prisma.user.deleteMany();
// }

// async function resetNextIdToBe1() {
//   await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='Tuning'`;
//   await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='OthersEvaluation'`;
//   await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='SelfEvaluation'`;
//   await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='Cycle'`;
//   await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='User'`;
// }

// async function main() {

//   const deleteBeforeSeed = false; // [Warning] remember to keep false after use.
//   if (deleteBeforeSeed) {
//     await deleteData();
//     await resetNextIdToBe1();
//   }

//   // Inserir usuários
//   for (const user of users) {
//     await prisma.user.create({
//       data: user,
//     });
//   }

//   // Inserir ciclos
//   for (const cycle of cycles) {
//     await prisma.cycle.create({
//       data: cycle,
//     });
//   }

//   // Inserir autoavaliações
//   for (const selfEvaluation of selfEvaluations) {
//     await prisma.selfEvaluation.create({
//       data: selfEvaluation,
//     });
//   }

//   // Inserir avaliações 360
//   for (const othersEvaluation of othersEvaluations) {
//     await prisma.othersEvaluation.create({
//       data: othersEvaluation,
//     });
//   }

//   // Inserir ajuste de avaliação
//   for (const tuning of tunings) {
//     await prisma.tuning.create({
//       data: tuning,
//     });
//   }

//   console.log("Database seeded successfully!");

//   process.exit();
// }

// // Command to run seed: npm run seed
// main().catch((e) => {
//   console.error(e);
//   process.exit(1);
// }).finally(async () => {
//   await prisma.$disconnect();
// });
