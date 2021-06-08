import { Test, TestingModule } from '@nestjs/testing';
import {EatDailyService} from "./eat-daily.service";

describe('BodyDataService', () => {
  let service: EatDailyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EatDailyService],
    }).compile();

    service = module.get<EatDailyService>(EatDailyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
