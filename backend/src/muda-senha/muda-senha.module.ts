import { Module } from '@nestjs/common';
import { MudaSenhaController } from './muda-senha.controller';
import { MudaSenhaService } from './muda-senha.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuarios } from '../usuarios/entities/usuarios.entity';
import { UsuariosService } from '../usuarios/usuarios.service';
import { MailerModule } from '../mailer/mailer.module';

@Module({
  imports: [TypeOrmModule.forFeature([Usuarios]), MailerModule],
  controllers: [MudaSenhaController],
  providers: [MudaSenhaService, UsuariosService],
})
export class MudaSenhaModule {}
