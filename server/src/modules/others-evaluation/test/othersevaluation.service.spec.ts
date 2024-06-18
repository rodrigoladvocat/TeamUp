import { Test, TestingModule } from '@nestjs/testing';
import { OthersevaluationService } from '../othersevaluation.service';
import { MockPrismaModule } from '../../../database/mock.prisma.module';

describe('OthersevaluationService', () => {
  let service: OthersevaluationService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [OthersevaluationService],
      imports: [MockPrismaModule]
    }).compile();

    service = moduleRef.get<OthersevaluationService>(OthersevaluationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
