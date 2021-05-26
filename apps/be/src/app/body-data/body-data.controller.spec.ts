import { Test, TestingModule } from '@nestjs/testing';
import { BodyDataController } from './body-data.controller';

describe('BodyDataController', () => {
  let controller: BodyDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BodyDataController],
    }).compile();

    controller = module.get<BodyDataController>(BodyDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
