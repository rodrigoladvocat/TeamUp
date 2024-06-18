import { Test, TestingModule } from '@nestjs/testing';
import { OthersevaluationController } from '../others-evaluation.controller';
import { MockPrismaModule } from '../../../database/mock.prisma.module';
import { OthersevaluationService } from '../others-evaluation.service';

describe('OthersevaluationController', () => {
  let controller: OthersevaluationController;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [OthersevaluationController],
      providers: [OthersevaluationService],
      imports: [MockPrismaModule]
    }).compile();

    controller = moduleRef.get<OthersevaluationController>(OthersevaluationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
