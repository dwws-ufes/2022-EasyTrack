import { Test, TestingModule } from '@nestjs/testing';
import { MudaSenhaController } from './muda-senha.controller';

describe('ChangePassword Controller', () => {
  let controller: MudaSenhaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MudaSenhaController],
    }).compile();

    controller = module.get<MudaSenhaController>(MudaSenhaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
