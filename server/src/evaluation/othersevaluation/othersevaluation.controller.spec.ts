import { Test, TestingModule } from '@nestjs/testing';
import { OthersevaluationController } from './othersevaluation.controller';

describe('OthersevaluationController', () => {
  let controller: OthersevaluationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OthersevaluationController],
    }).compile();

    controller = module.get<OthersevaluationController>(OthersevaluationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
