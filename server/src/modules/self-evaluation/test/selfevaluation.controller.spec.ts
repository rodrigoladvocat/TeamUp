import { Test, TestingModule } from '@nestjs/testing';
import { SelfevaluationController } from '../selfevaluation.controller';
import { MockPrismaModule } from '../../../database/mock.prisma.module';
import { SelfevaluationService } from '../selfevaluation.service';

describe('SelfevaluationController', () => {
  let controller: SelfevaluationController;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [SelfevaluationController],
      providers: [SelfevaluationService],
      imports: [MockPrismaModule]
    }).compile();

    controller = moduleRef.get<SelfevaluationController>(SelfevaluationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
