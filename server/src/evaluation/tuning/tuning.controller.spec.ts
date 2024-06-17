import { Test, TestingModule } from '@nestjs/testing';
import { TuningController } from './tuning.controller';

describe('TuningController', () => {
  let controller: TuningController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TuningController],
    }).compile();

    controller = module.get<TuningController>(TuningController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
