import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateEnrollment } from './dto/create-enrollment.dto';
import { DeleteEnrollment } from './dto/delete-enrollment.dto';
import { EnrollmentEntity } from './enrollment.entity';
import { EnrollmentService } from './enrollment.service';

@Controller('enrollments')
export class EnrollmentController {
  constructor(private readonly service: EnrollmentService) {}

  @Get()
  async getAll(): Promise<EnrollmentEntity[]> {
    return this.service.getAll();
  }

  @Post()
  async enrollmentStudentInCourse(
    @Body() enrollment: CreateEnrollment,
  ): Promise<EnrollmentEntity> {
    return this.service.enrollmentStudentInCourse(enrollment);
  }

  @Delete()
  async deleteEnrollmentStudentInCourse(@Body() enrollment: DeleteEnrollment) {
    return this.service.deleteEnrollmentStudentInCourse(enrollment);
  }
}
