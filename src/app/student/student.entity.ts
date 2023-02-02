import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { CourseEntity } from '../course/course.entity';

@Entity({ name: 'students' })
export class StudentEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'name', nullable: false, length: 50 })
  name: string;

  @ManyToMany(() => CourseEntity, (course) => course.students, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinTable({
    name: 'enrollments',
    joinColumn: {
      name: 'student_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'course_id',
      referencedColumnName: 'id',
    },
  })
  courses: CourseEntity[];
}
