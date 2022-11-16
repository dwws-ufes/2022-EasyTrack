import { Module } from '@nestjs/common';
import { PacotesService } from './pacotes.service';
import { PacotesController } from './pacotes.controller';

@Module({
  controllers: [PacotesController],
  providers: [PacotesService]
})
export class PacotesModule {}
