import { Test, TestingModule } from '@nestjs/testing';
import { TuningService } from './tuning.service';

describe('TuningService', () => {
  let service: TuningService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TuningService],
    }).compile();

    service = module.get<TuningService>(TuningService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
