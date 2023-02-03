import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEnrollment } from './dto/create-enrollment.dto';
import { DeleteEnrollment } from './dto/delete-enrollment.dto';
import { EnrollmentEntity } from './enrollment.entity';

@Injectable()
export class EnrollmentService {
  constructor(
    @InjectRepository(EnrollmentEntity)
    private readonly enrollmentRepository: Repository<EnrollmentEntity>,
  ) {}

  async getAll(): Promise<EnrollmentEntity[]> {
    const enrollments = await this.enrollmentRepository.find();

    return enrollments;
  }

  async enrollmentStudentInCourse(
    enrollment: CreateEnrollment,
  ): Promise<EnrollmentEntity> {
    const createdEnrollment = await this.enrollmentRepository.save(enrollment);

    return createdEnrollment;
  }

  async deleteEnrollmentStudentInCourse(enrollment: DeleteEnrollment) {
    const deletedEnrollment = await this.enrollmentRepository.findOneBy(
      enrollment,
    );
    await this.enrollmentRepository.delete(enrollment);

    return deletedEnrollment;
  }
}
