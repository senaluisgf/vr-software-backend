import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudent } from './dto/create-student.dto';
import { UpdateStudent } from './dto/update-student.dto';
import { StudentEntity } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly studentRepository: Repository<StudentEntity>,
  ) {}

  async getAll(): Promise<StudentEntity[]> {
    const students = await this.studentRepository.find();

    return students;
  }

  async updateStudent(
    studentId: number,
    student: UpdateStudent,
  ): Promise<StudentEntity> {
    await this.studentRepository.update({ id: studentId }, student);
    const updatedStudent = await this.studentRepository.findOneBy({
      id: studentId,
    });
    return updatedStudent;
  }

  async createStudent({ name }: CreateStudent): Promise<StudentEntity> {
    const createdStudent = await this.studentRepository.save({ name });

    return createdStudent;
  }

  async deleteStudent(studentId: number) {
    const student = await this.studentRepository.findOneBy({
      id: studentId,
      courses: null,
    });
    if (!student || student.courses?.length) {
      return false;
    }

    await this.studentRepository.delete({ id: studentId });
    return true;
  }
}
