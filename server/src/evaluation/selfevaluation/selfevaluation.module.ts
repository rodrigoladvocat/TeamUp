import { Module } from '@nestjs/common';
import { SelfevaluationController } from './selfevaluation.controller';
import { SelfevaluationService } from './selfevaluation.service';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [SelfevaluationController],
    providers: [SelfevaluationService]
})
export class SelfevaluationModule {}
