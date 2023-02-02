import { Controller, Get } from '@nestjs/common';
import { CourseEntity } from './course.entity';
import { CourseService } from './course.service';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  async getAll(): Promise<CourseEntity[]> {
    const courses = await this.courseService.getAll();

    return courses;
  }
}
