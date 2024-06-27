import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './database/prisma.module';
import { UserModule } from './modules/user/user.module';
import { CycleModule } from './modules/cycle/cycle.module';
import { TuningModule } from './modules/tuning/tuning.module';
import { SelfevaluationModule } from './modules/self-evaluation/self-evaluation.module';
import { OthersevaluationModule } from './modules/others-evaluation/others-evaluation.module';
import { ApiTokenCheckMiddleware } from './common/api-token-check.middleware';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    CycleModule,
    SelfevaluationModule,
    OthersevaluationModule,
    TuningModule,
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register({ secret: "!@34Th9!Jk8f9wo34L&$fdjeiw2349&fnn22kfv!flrO2vci2Kf@9Jkds#loSvn38P0", // add secret key to .env file
                         global: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(ApiTokenCheckMiddleware)
//       .exclude(
//         { path: '/user/login', method: RequestMethod.POST },
//         { path: '/user/create', method: RequestMethod.POST },
//       )
//       .forRoutes({ path: '*', method: RequestMethod.ALL })
//   }
// }

export class AppModule{}
