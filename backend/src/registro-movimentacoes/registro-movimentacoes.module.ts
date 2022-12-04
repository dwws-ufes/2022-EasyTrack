import { Module } from '@nestjs/common';
import { RegistroMovimentacoesService } from './registro-movimentacoes.service';
import { RegistroMovimentacoesController } from './registro-movimentacoes.controller';

@Module({
  controllers: [RegistroMovimentacoesController],
  providers: [RegistroMovimentacoesService]
})
export class RegistroMovimentacoesModule {}
