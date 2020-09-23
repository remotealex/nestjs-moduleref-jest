import { Test, TestingModule } from '@nestjs/testing';
import { DogsService } from '../dogs/dogs.service';
import { CatsService } from './cats.service';

const mockedDogsService = {
  getDogs() {
    return ['Dog 1'];
  },
};

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CatsService,
        {
          provide: DogsService,
          useValue: mockedDogsService,
        },
      ],
    }).compile();

    service = module.get<CatsService>(CatsService);

    service.onModuleInit();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get cats', () => {
    expect(service.getCats()).toContain('Cat 1');
  });

  it('should get dogs', () => {
    expect(service.getDogs()).toContain('Dog 1');
  });
});
