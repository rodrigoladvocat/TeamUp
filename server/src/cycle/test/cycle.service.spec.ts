import { Test, TestingModule } from '@nestjs/testing';
import { CycleService } from '../cycle.service';
import { PrismaService } from '../../database/prisma.service';

describe('CycleService', () => {
  let service: CycleService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [CycleService, PrismaService],
    }).compile();

    service = moduleRef.get<CycleService>(CycleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
