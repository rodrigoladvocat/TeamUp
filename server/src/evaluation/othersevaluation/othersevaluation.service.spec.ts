import { Test, TestingModule } from '@nestjs/testing';
import { OthersevaluationService } from './othersevaluation.service';

describe('OthersevaluationService', () => {
  let service: OthersevaluationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OthersevaluationService],
    }).compile();

    service = module.get<OthersevaluationService>(OthersevaluationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
