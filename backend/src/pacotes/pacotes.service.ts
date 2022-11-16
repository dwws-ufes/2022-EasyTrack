import { Injectable } from '@nestjs/common';
import { CreatePacoteDto } from './dto/create-pacote.dto';
import { UpdatePacoteDto } from './dto/update-pacote.dto';

@Injectable()
export class PacotesService {
  create(createPacoteDto: CreatePacoteDto) {
    return 'This action adds a new pacote';
  }

  findAll() {
    return `This action returns all pacotes`;
  }

  findOne(id: string) {
    return `This action returns a #${id} pacote`;
  }

  update(id: string, updatePacoteDto: UpdatePacoteDto) {
    return `This action updates a #${id} pacote`;
  }

  remove(id: string) {
    return `This action removes a #${id} pacote`;
  }
}
