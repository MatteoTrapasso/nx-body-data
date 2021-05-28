import { Test, TestingModule } from '@nestjs/testing';
import { EatService } from './eat.service';

describe('EatService', () => {
  let service: EatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EatService],
    }).compile();

    service = module.get<EatService>(EatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
