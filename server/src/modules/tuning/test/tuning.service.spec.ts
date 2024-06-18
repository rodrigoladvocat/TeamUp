import { Test, TestingModule } from '@nestjs/testing';
import { TuningService } from '../tuning.service';
import { MockPrismaModule } from '../../../database/mock.prisma.module';

describe('TuningService', () => {
  let service: TuningService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [TuningService],
      imports: [MockPrismaModule]
    }).compile();

    service = moduleRef.get<TuningService>(TuningService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
