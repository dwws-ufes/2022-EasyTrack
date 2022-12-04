import { Injectable } from '@nestjs/common';
import { CreateRegistroMovimentacoeDto } from './dto/create-registro-movimentacoe.dto';
import { UpdateRegistroMovimentacoeDto } from './dto/update-registro-movimentacoe.dto';

@Injectable()
export class RegistroMovimentacoesService {
  create(createRegistroMovimentacoeDto: CreateRegistroMovimentacoeDto) {
    return 'This action adds a new registroMovimentacoe';
  }

  findAll() {
    return `This action returns all registroMovimentacoes`;
  }

  findOne(id: string) {
    return `This action returns a #${id} registroMovimentacoe`;
  }

  update(id: string, updateRegistroMovimentacoeDto: UpdateRegistroMovimentacoeDto) {
    return `This action updates a #${id} registroMovimentacoe`;
  }

  remove(id: string) {
    return `This action removes a #${id} registroMovimentacoe`;
  }
}
