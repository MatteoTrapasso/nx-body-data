import { Test, TestingModule } from '@nestjs/testing';
import { EatController } from './eat.controller';

describe('EatController', () => {
  let controller: EatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EatController],
    }).compile();

    controller = module.get<EatController>(EatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
