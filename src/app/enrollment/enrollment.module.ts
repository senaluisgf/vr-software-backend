import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnrollmentController } from './enrollment.controller';
import { EnrollmentEntity } from './enrollment.entity';
import { EnrollmentService } from './enrollment.service';

@Module({
  imports: [TypeOrmModule.forFeature([EnrollmentEntity])],
  providers: [EnrollmentService],
  controllers: [EnrollmentController],
})
export class EnrollmentModule {}
