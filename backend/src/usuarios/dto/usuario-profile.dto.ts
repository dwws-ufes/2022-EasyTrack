import { OmitType } from '@nestjs/swagger';
import { UsuarioDto } from './usuario.dto';

export class UserProfileDto extends OmitType(UsuarioDto, ['senha'] as const) {}
