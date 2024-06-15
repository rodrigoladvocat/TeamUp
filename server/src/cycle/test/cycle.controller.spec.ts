import { Test, TestingModule } from '@nestjs/testing';
import { CycleController } from '../cycle.controller';
import { CycleService } from '../cycle.service';
import { PrismaService } from '../../database/prisma.service';

describe('CycleController', () => {
  let controller: CycleController;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [CycleController],
      providers: [CycleService, PrismaService],
    }).compile();

    controller = moduleRef.get<CycleController>(CycleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
