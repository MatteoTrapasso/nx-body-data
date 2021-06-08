import { Test, TestingModule } from '@nestjs/testing';
import {EatDailyController} from "./eat-daily.controller";

describe('BodyDataController', () => {
  let controller: EatDailyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EatDailyController],
    }).compile();

    controller = module.get<EatDailyController>(EatDailyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
