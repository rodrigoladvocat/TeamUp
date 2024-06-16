import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { mockPrismaService } from '../user/test/constants';

@Module({
  providers: [{ provide: PrismaService, useValue: mockPrismaService }],
  exports: [PrismaService],
})
export class MockPrismaModule { }
