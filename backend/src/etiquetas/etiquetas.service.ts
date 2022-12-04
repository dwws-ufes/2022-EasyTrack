import { Injectable } from '@nestjs/common';
import { CreateEtiquetaDto } from './dto/create-etiqueta.dto';
import { UpdateEtiquetaDto } from './dto/update-etiqueta.dto';

@Injectable()
export class EtiquetasService {
  create(createEtiquetaDto: CreateEtiquetaDto) {
    return 'This action adds a new etiqueta';
  }

  findAll() {
    return `This action returns all etiquetas`;
  }

  findOne(id: string) {
    return `This action returns a #${id} etiqueta`;
  }

  update(id: string, updateEtiquetaDto: UpdateEtiquetaDto) {
    return `This action updates a #${id} etiqueta`;
  }

  remove(id: string) {
    return `This action removes a #${id} etiqueta`;
  }
}
