import { Controller, Get } from '@nestjs/common';
import { EnrollmentEntity } from './enrollment.entity';
import { EnrollmentService } from './enrollment.service';

@Controller('enrollments')
export class EnrollmentController {
  constructor(private readonly service: EnrollmentService) {}

  @Get()
  async getAll(): Promise<EnrollmentEntity[]> {
    return this.service.getAll();
  }
}
