import { Test, TestingModule } from '@nestjs/testing';
import { BodyDataService } from './body-data.service';

describe('BodyDataService', () => {
  let service: BodyDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BodyDataService],
    }).compile();

    service = module.get<BodyDataService>(BodyDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
