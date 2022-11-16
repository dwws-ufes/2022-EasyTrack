import { Injectable } from '@nestjs/common';
import { CreateConfiguracoesDto } from './dto/create-configuracoes.dto';
import { UpdateConfiguracoesDto } from './dto/update-configuracoes.dto';

@Injectable()
export class ConfiguracoesService {
  create(createConfiguracoeDto: CreateConfiguracoesDto) {
    return 'This action adds a new configuracoes';
  }

  findAll() {
    return `This action returns all configuracoes`;
  }

  findOne(id: string) {
    return `This action returns a #${id} configuracoes`;
  }

  update(id: string, updateConfiguracoeDto: UpdateConfiguracoesDto) {
    return `This action updates a #${id} configuracoes`;
  }

  remove(id: string) {
    return `This action removes a #${id} configuracoes`;
  }
}
