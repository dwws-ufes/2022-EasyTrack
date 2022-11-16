import { PartialType } from '@nestjs/swagger';
import { CreateConfiguracoesDto } from './create-configuracoes.dto';

export class UpdateConfiguracoesDto extends PartialType(CreateConfiguracoesDto) { }
