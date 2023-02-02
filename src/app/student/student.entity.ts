import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'students' })
export class StudentEntity {
  @PrimaryGeneratedColumn('increment')
  codigo: number;

  @Column({ name: 'name', nullable: false, length: 50 })
  name: string;
}
