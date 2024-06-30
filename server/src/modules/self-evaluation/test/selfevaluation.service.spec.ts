import { Test, TestingModule } from '@nestjs/testing';
import { SelfEvaluationService } from '../self-evaluation.service';
import { MockPrismaModule } from '../../../database/mock.prisma.module';

describe('SelfevaluationService', () => {
  let service: SelfEvaluationService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [SelfEvaluationService],
      imports: [MockPrismaModule]
    }).compile();

    service = moduleRef.get<SelfEvaluationService>(SelfEvaluationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
