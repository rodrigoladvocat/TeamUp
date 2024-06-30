import { Test, TestingModule } from '@nestjs/testing';
import { OthersEvaluationService } from '../others-evaluation.service';
import { MockPrismaModule } from '../../../database/mock.prisma.module';

describe('OthersevaluationService', () => {
  let service: OthersEvaluationService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [OthersEvaluationService],
      imports: [MockPrismaModule]
    }).compile();

    service = moduleRef.get<OthersEvaluationService>(OthersEvaluationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
