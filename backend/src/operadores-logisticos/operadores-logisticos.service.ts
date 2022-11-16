import { Injectable } from '@nestjs/common';
import { CreateOperadoresLogisticoDto } from './dto/create-operadores-logistico.dto';
import { UpdateOperadoresLogisticoDto } from './dto/update-operadores-logistico.dto';

@Injectable()
export class OperadoresLogisticosService {
  create(createOperadoresLogisticoDto: CreateOperadoresLogisticoDto) {
    return 'This action adds a new operadoresLogistico';
  }

  findAll() {
    return `This action returns all operadoresLogisticos`;
  }

  findOne(id: string) {
    return `This action returns a #${id} operadoresLogistico`;
  }

  update(id: string, updateOperadoresLogisticoDto: UpdateOperadoresLogisticoDto) {
    return `This action updates a #${id} operadoresLogistico`;
  }

  remove(id: string) {
    return `This action removes a #${id} operadoresLogistico`;
  }
}
