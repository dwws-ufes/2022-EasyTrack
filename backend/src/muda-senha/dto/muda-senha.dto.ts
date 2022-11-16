import { PickType } from '@nestjs/swagger';
import { UsuarioDto } from '../../usuarios/dto/usuario.dto';

export class MudaSenhaDto extends PickType(UsuarioDto, [
  'email',
  'senha',
] as const) {}
