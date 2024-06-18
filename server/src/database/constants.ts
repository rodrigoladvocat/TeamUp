import { validCreatedUserResponse, deletedUser, validCreateUserDto } from "../modules/user/test/constants";

export const mockPrismaService = {
  user: {
    findUnique: jest.fn().mockResolvedValue(validCreatedUserResponse),
    findMany: jest.fn().mockResolvedValue([]),
    create: jest.fn().mockResolvedValue(validCreatedUserResponse),
    delete: jest.fn().mockResolvedValue(deletedUser),
  },
  cycle: {
    // TODO - preencher métodos do prisma com retornos default/mockados
  },
  othersEvaluation: {
    // TODO - preencher métodos do prisma com retornos default/mockados
  },
  selfEvaluation: {
    // TODO - preencher métodos do prisma com retornos default/mockados
  },
  tuning: {
    // TODO - preencher métodos do prisma com retornos default/mockados
  },
};
