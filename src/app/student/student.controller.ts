import { Controller, Get } from '@nestjs/common';
import { StudentEntity } from './student.entity';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly service: StudentService) {}

  @Get()
  async getAll(): Promise<StudentEntity[]> {
    const students = await this.service.getAll();

    return students;
  }
}
