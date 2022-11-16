import { Test, TestingModule } from '@nestjs/testing';
import { EsqueceuSenhaService } from './esqueceu-senha.service';

describe('EsqueceuSenhaService', () => {
  let service: EsqueceuSenhaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EsqueceuSenhaService],
    }).compile();

    service = module.get<EsqueceuSenhaService>(EsqueceuSenhaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
