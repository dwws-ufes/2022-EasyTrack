import { PartialType } from '@nestjs/swagger';
import { CreateRegistroMovimentacoeDto } from './create-registro-movimentacoe.dto';

export class UpdateRegistroMovimentacoeDto extends PartialType(CreateRegistroMovimentacoeDto) {}
