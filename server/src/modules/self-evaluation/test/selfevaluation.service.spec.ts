import { Test, TestingModule } from '@nestjs/testing';
import { SelfevaluationService } from '../selfevaluation.service';
import { MockPrismaModule } from '../../../database/mock.prisma.module';

describe('SelfevaluationService', () => {
  let service: SelfevaluationService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [SelfevaluationService],
      imports: [MockPrismaModule]
    }).compile();

    service = moduleRef.get<SelfevaluationService>(SelfevaluationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
