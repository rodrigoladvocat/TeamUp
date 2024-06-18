import { Module } from '@nestjs/common';
import { SelfEvaluationController } from './self-evaluation.controller';
import { SelfevaluationService } from './self-evaluation.service';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [SelfEvaluationController],
    providers: [SelfevaluationService]
})
export class SelfevaluationModule { }
