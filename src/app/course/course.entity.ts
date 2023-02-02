import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StudentEntity } from '../student/student.entity';

@Entity({ name: 'courses' })
export class CourseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'description', nullable: false, length: 50 })
  description: string;
  @Column({ name: 'course_program', nullable: false })
  courseProgram: string;

  @ManyToMany(() => StudentEntity, (student) => student.courses, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  students?: StudentEntity[];
}
