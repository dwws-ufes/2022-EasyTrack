import { PartialType } from '@nestjs/swagger';
import { CreateOperadoresLogisticoDto } from './create-operadores-logistico.dto';

export class UpdateOperadoresLogisticoDto extends PartialType(CreateOperadoresLogisticoDto) {}
