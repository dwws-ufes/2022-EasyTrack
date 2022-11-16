import { Test, TestingModule } from '@nestjs/testing';
import { MudaSenhaService } from './muda-senha.service';

describe('MudaSenhaService', () => {
  let service: MudaSenhaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MudaSenhaService],
    }).compile();

    service = module.get<MudaSenhaService>(MudaSenhaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
