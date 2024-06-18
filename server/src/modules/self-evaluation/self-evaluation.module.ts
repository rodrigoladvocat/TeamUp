import { Module } from '@nestjs/common';
import { SelfevaluationController } from './self-evaluation.controller';
import { SelfevaluationService } from './self-evaluation.service';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [SelfevaluationController],
    providers: [SelfevaluationService]
})
export class SelfevaluationModule { }
