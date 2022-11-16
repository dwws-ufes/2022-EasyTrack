import { Injectable } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import * as bcrypt from 'bcrypt';
import { RegistroUsuarioDto } from './dto/registro-usuario.dto';
import { IUsuarios } from '../usuarios/interfaces/usuarios.interface';
import { MailerService } from '../mailer/mailer.service';

@Injectable()
export class RegistroUsuarioService {
  constructor(
    private readonly usersService: UsuariosService,
    private readonly mailerService: MailerService,
  ) {}

  public async register(registerUserDto: RegistroUsuarioDto): Promise<IUsuarios> {
    registerUserDto.senha = bcrypt.hashSync(registerUserDto.senha, 8);

    this.sendMailRegisterUser(registerUserDto);

    return this.usersService.create(registerUserDto);
  }

  private sendMailRegisterUser(usuario): void {
    this.mailerService
      .sendMail({
        to: usuario.email,
        from: 'from@example.com',
        subject: 'Registro com suscesso ✔',
        text: 'Registro com suscesso',
        template: 'index',
        context: {
          title: 'Registro com suscesso',
          description:
            "Conseguiu! Seu registro foi realizado com sucesso.✔",
          nameUser: usuario.name,
        },
      })
      .then((response) => {
        console.log(response);
        console.log('Registro de usuario: Envio de email com sucesso!');
      })
      .catch((err) => {
        console.log(err);
        console.log('Registro de usuario: Envio de email falhou!');
      });
  }
}
