import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { hash as bcryptHash } from 'bcrypt';
import { mockPrismaService, userElement, validCreateUserDto, validCreatedUserResponse } from './constants';
import { PrismaService } from '../../database/prisma.service';
import { MockPrismaModule } from '../../database/mock.prisma.module';


describe('UserService', () => {
  let service: UserService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [UserService],
      imports: [MockPrismaModule]
    }).compile();

    service = moduleRef.get<UserService>(UserService);
    prisma = moduleRef.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {

    // TODO: fix this broken test.
    it("Should NOT create a user with repeated email", async () => {
      prisma.user.findMany = jest.fn().mockResolvedValue([userElement]);

      await expect(service.create(validCreateUserDto)).rejects.toThrow('Email is already in use');


      expect(mockPrismaService.user.findMany).toHaveBeenCalledWith({
        where: {
          OR: [
            { email: validCreateUserDto.email },
            { cpf: validCreateUserDto.cpf },
          ]
        },
      });
      expect(mockPrismaService.user.create).not.toHaveBeenCalled();

      mockPrismaService.user.findMany.mockReset();
    });

    it("Should hash the password and return user whithout password", async () => {
      const userPassword = validCreateUserDto.password;
      const expectedUserWithoutPassword = {
        ...validCreatedUserResponse,
        password: "***"
      };
      jest.mock('bcrypt', () => ({
        hash: jest.fn().mockResolvedValue('hashedPassword'),
      }));


      const result = await service.create(validCreateUserDto);


      expect(bcryptHash).toHaveBeenCalledWith(userPassword, 7);
      expect(mockPrismaService.user.create).toHaveBeenCalledWith({
        data: {
          ...validCreateUserDto,
          password: 'hashedPassword',
        },
      });
      expect(result).toEqual(expectedUserWithoutPassword);
    });
  });

});
