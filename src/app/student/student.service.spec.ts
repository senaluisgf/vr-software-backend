import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentEntity } from './student.entity';
import { StudentService } from './student.service';

describe('StudentService', () => {
  let sut: StudentService;
  let repository: Repository<StudentEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudentService,
        {
          provide: getRepositoryToken(StudentEntity),
          useValue: {},
        },
      ],
    }).compile();

    sut = module.get<StudentService>(StudentService);
    repository = module.get<Repository<StudentEntity>>(
      getRepositoryToken(StudentEntity),
    );
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
    expect(repository).toBeDefined();
  });
});
