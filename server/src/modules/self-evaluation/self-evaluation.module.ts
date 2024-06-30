import { Module } from '@nestjs/common';
import { SelfEvaluationController } from './self-evaluation.controller';
import { SelfEvaluationService } from './self-evaluation.service';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [SelfEvaluationController],
    providers: [SelfEvaluationService]
})
export class SelfEvaluationModule { }
