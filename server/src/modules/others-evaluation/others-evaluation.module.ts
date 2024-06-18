import { Module } from '@nestjs/common';
import { OthersevaluationController } from './others-evaluation.controller';
import { OthersevaluationService } from './others-evaluation.service';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OthersevaluationController],
  providers: [OthersevaluationService]
})
export class OthersevaluationModule { }
