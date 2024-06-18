import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './database/prisma.module';
import { UserModule } from './modules/user/user.module';
import { CycleModule } from './modules/cycle/cycle.module';
import { TuningModule } from './modules/tuning/tuning.module';
import { SelfevaluationModule } from './modules/self-evaluation/self-evaluation.module';
import { OthersevaluationModule } from './modules/others-evaluation/others-evaluation.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    CycleModule,
    SelfevaluationModule,
    OthersevaluationModule,
    TuningModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
