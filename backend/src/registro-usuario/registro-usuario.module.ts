import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroUsuarioController } from './registro-usuario.controller';
import { RegistroUsuarioService } from './registro-usuario.service';
import { UsuariosService } from '../usuarios/usuarios.service';
import { Usuarios } from '../usuarios/entities/usuarios.entity';
import { MailerModule } from 'src/mailer/mailer.module';

@Module({
  imports: [TypeOrmModule.forFeature([Usuarios]), MailerModule],
  controllers: [RegistroUsuarioController],
  providers: [RegistroUsuarioService, UsuariosService],
})
export class RegistroUsuarioModule {}
