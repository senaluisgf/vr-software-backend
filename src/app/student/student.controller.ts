import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { CreateStudent } from './dto/create-student.dto';
import { UpdateStudent } from './dto/update-student.dto';
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

  @Put(':studentId')
  async updateStudent(
    @Param('studentId') studentId: number,
    @Body() student: UpdateStudent,
  ): Promise<StudentEntity> {
    const updatedStudent = await this.service.updateStudent(studentId, student);
    return updatedStudent;
  }

  @Post()
  async createStudent(
    @Body() newStudent: CreateStudent,
  ): Promise<StudentEntity> {
    const createdStudent = await this.service.createStudent(newStudent);

    return createdStudent;
  }

  @Delete(':studentId')
  async deleteStudent(@Param('studentId') studentId: number) {
    return this.service.deleteStudent(studentId);
  }
}
