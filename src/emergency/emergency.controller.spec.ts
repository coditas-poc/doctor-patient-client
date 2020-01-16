import { Test, TestingModule } from '@nestjs/testing';
import { EmergencyController } from './emergency.controller';

describe('Emergency Controller', () => {
  let controller: EmergencyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmergencyController],
    }).compile();

    controller = module.get<EmergencyController>(EmergencyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
