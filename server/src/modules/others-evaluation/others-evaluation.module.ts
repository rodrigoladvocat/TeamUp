import { Module } from '@nestjs/common';
import { OthersEvaluationController } from './others-evaluation.controller';
import { OthersEvaluationService } from './others-evaluation.service';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OthersEvaluationController],
  providers: [OthersEvaluationService]
})
export class OthersEvaluationModule { }
