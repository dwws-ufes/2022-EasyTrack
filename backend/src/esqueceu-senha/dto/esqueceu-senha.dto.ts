import { PickType } from '@nestjs/swagger';
import { UsuarioDto } from '../../usuarios/dto/usuario.dto';

export class EsqueceuSenhaDto extends PickType(UsuarioDto, ['email'] as const) {}
