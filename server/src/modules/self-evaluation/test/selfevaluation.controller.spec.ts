import { Test, TestingModule } from '@nestjs/testing';
import { SelfEvaluationController } from '../self-evaluation.controller';
import { MockPrismaModule } from '../../../database/mock.prisma.module';
import { SelfEvaluationService } from '../self-evaluation.service';

describe('SelfevaluationController', () => {
  let controller: SelfEvaluationController;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [SelfEvaluationController],
      providers: [SelfEvaluationService],
      imports: [MockPrismaModule]
    }).compile();

    controller = moduleRef.get<SelfEvaluationController>(SelfEvaluationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
