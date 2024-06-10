import { Module } from '@nestjs/common';
import { TuningController } from './tuning.controller';
import { TuningService } from './tuning.service';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TuningController],
  providers: [TuningService]
})
export class TuningModule {}
