import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CourseEntity {
  @PrimaryGeneratedColumn('increment')
  codigo: number;

  @Column({ name: 'description', nullable: false, length: 50 })
  description: string;
  @Column({ name: 'course_program', nullable: false })
  courseProgram: string;
}
