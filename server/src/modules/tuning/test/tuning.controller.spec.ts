import { Test, TestingModule } from '@nestjs/testing';
import { TuningController } from '../tuning.controller';
import { MockPrismaModule } from '../../../database/mock.prisma.module';
import { TuningService } from '../tuning.service';

describe('TuningController', () => {
  let controller: TuningController;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [TuningController],
      providers: [TuningService],
      imports: [MockPrismaModule]
    }).compile();

    controller = moduleRef.get<TuningController>(TuningController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
