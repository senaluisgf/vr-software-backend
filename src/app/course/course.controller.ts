import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { CourseEntity } from './course.entity';
import { CourseService } from './course.service';
import { CreateCourse } from './dto/create-course.dto';
import { UpdateCourse } from './dto/update-course.dto';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  async getAll(): Promise<CourseEntity[]> {
    const courses = await this.courseService.getAll();

    return courses;
  }

  @Put(':courseId')
  async updateCourse(
    @Param('courseId') courseId: number,
    @Body() course: UpdateCourse,
  ): Promise<CourseEntity> {
    const updatedCourse = await this.courseService.updateCourse(
      courseId,
      course,
    );
    return updatedCourse;
  }

  @Post()
  async createCourse(@Body() newCourse: CreateCourse): Promise<CourseEntity> {
    const createdCourse = await this.courseService.createCourse(newCourse);

    return createdCourse;
  }

  @Delete(':courseId')
  async deleteCourse(@Param('courseId') courseId: number) {
    return this.courseService.deleteCourse(courseId);
  }
}
