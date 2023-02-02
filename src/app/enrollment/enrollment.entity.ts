import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn
} from 'typeorm';
import { CourseEntity } from '../course/course.entity';
import { StudentEntity } from '../student/student.entity';

@Entity({ name: 'enrollments' })
export class EnrollmentEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @PrimaryColumn({ name: 'student_id' })
  studentId: number;
  @PrimaryColumn({ name: 'course_id' })
  courseId: number;

  @ManyToOne(() => StudentEntity, (student) => student.courses, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'student_id', referencedColumnName: 'id' }])
  students: StudentEntity[];

  @ManyToOne(() => CourseEntity, (course) => course.students, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'course_id', referencedColumnName: 'id' }])
  courses: CourseEntity[];
}
