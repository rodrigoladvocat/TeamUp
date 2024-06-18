import { Test, TestingModule } from '@nestjs/testing';
import { OthersEvaluationController } from '../others-evaluation.controller';
import { MockPrismaModule } from '../../../database/mock.prisma.module';
import { OthersevaluationService } from '../others-evaluation.service';

describe('OthersevaluationController', () => {
  let controller: OthersEvaluationController;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [OthersEvaluationController],
      providers: [OthersevaluationService],
      imports: [MockPrismaModule]
    }).compile();

    controller = moduleRef.get<OthersEvaluationController>(OthersEvaluationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});