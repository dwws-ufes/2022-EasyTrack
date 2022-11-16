import { PartialType } from '@nestjs/swagger';
import { UsuarioDto } from './usuario.dto';

export class UserUpdateDto extends PartialType(UsuarioDto) {}
