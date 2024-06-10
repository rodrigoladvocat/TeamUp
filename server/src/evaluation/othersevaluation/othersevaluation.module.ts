import { Module } from '@nestjs/common';
import { OthersevaluationController } from './othersevaluation.controller';
import { OthersevaluationService } from './othersevaluation.service';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OthersevaluationController],
  providers: [OthersevaluationService]
})
export class OthersevaluationModule {}
