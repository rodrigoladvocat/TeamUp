import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './database/prisma.module';
import { CycleModule } from './cycle/cycle.module';
import { SelfevaluationModule } from './evaluation/selfevaluation/selfevaluation.module';
import { OthersevaluationModule } from './evaluation/othersevaluation/othersevaluation.module';
import { TuningModule } from './evaluation/tuning/tuning.module';

@Module({
  imports: [UserModule, PrismaModule, CycleModule, SelfevaluationModule, OthersevaluationModule, TuningModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
