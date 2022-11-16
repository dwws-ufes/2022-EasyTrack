import { Module } from '@nestjs/common';
import { OperadoresLogisticosService } from './operadores-logisticos.service';
import { OperadoresLogisticosController } from './operadores-logisticos.controller';

@Module({
  controllers: [OperadoresLogisticosController],
  providers: [OperadoresLogisticosService]
})
export class OperadoresLogisticosModule {}
