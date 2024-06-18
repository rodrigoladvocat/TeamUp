import { Module } from '@nestjs/common';
import { OthersEvaluationController } from './others-evaluation.controller';
import { OthersevaluationService } from './others-evaluation.service';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OthersEvaluationController],
  providers: [OthersevaluationService]
})
export class OthersevaluationModule { }
