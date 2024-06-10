import { Test, TestingModule } from '@nestjs/testing';
import { SelfevaluationController } from './selfevaluation.controller';

describe('SelfevaluationController', () => {
  let controller: SelfevaluationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SelfevaluationController],
    }).compile();

    controller = module.get<SelfevaluationController>(SelfevaluationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
