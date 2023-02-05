import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseEntity } from './course.entity';
import { CreateCourse } from './dto/create-course.dto';
import { UpdateCourse } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(CourseEntity)
    private readonly courseRepository: Repository<CourseEntity>,
  ) {}

  async getAll(): Promise<CourseEntity[]> {
    const courses = await this.courseRepository.find();

    return courses;
  }

  async getOne(id: number): Promise<CourseEntity> {
    const course = await this.courseRepository.findOneBy({ id });

    return course;
  }

  async updateCourse(
    courseId: number,
    course: UpdateCourse,
  ): Promise<CourseEntity> {
    await this.courseRepository.update({ id: courseId }, course);
    const updatedCourse = await this.courseRepository.findOneBy({
      id: courseId,
    });
    return updatedCourse;
  }

  async createCourse(newCourse: CreateCourse): Promise<CourseEntity> {
    const createdCourse = await this.courseRepository.save(newCourse);

    return createdCourse;
  }

  async deleteCourse(courseId: number) {
    try {
      await this.courseRepository.delete({ id: courseId });
    } catch {
      return false;
    }

    return true;
  }
}
