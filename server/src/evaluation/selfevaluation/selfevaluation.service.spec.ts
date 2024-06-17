import { Test, TestingModule } from '@nestjs/testing';
import { SelfevaluationService } from './selfevaluation.service';

describe('SelfevaluationService', () => {
  let service: SelfevaluationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SelfevaluationService],
    }).compile();

    service = module.get<SelfevaluationService>(SelfevaluationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
