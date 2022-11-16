import { Test, TestingModule } from '@nestjs/testing';
import { EsqueceuSenhaController } from './esqueceu-senha.controller';

describe('EsqueceuSenha Controller', () => {
  let controller: EsqueceuSenhaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EsqueceuSenhaController],
    }).compile();

    controller = module.get<EsqueceuSenhaController>(EsqueceuSenhaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
