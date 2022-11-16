import { Module } from '@nestjs/common';
import { ConfiguracoesService } from './configuracoes.service';
import { ConfiguracoesController } from './configuracoes.controller';

@Module({
  controllers: [ConfiguracoesController],
  providers: [ConfiguracoesService]
})
export class ConfiguracoesModule {}
