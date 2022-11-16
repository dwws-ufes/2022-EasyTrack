import { Injectable } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import { MudaSenhaDto } from './dto/muda-senha.dto';
import { MailerService } from '../mailer/mailer.service';

@Injectable()
export class MudaSenhaService {
  constructor(
    private readonly usersService: UsuariosService,
    private readonly mailerService: MailerService,
  ) {}

  public async mudaSenha(
    mudaSenhaDto: MudaSenhaDto,
  ): Promise<any> {
    this.sendMailChangePassword(mudaSenhaDto);

    return await this.usersService.updateByPassword(
      mudaSenhaDto.email,
      mudaSenhaDto.senha,
    );
  }

  private sendMailChangePassword(usuario): void {
    this.mailerService
      .sendMail({
        to: usuario.email,
        from: 'from@example.com',
        subject: 'Mudança de senha com sucesso ✔',
        text: 'Mudança de senha com sucesso!',
        template: 'index',
        context: {
          title: 'Mudança de senha com sucesso!',
          description:
            'Mudança de senha com sucesso! ✔, Essa é sua nova senha: ' +
            usuario.senha,
          nameUser: usuario.nome,
        },
      })
      .then((response) => {
        console.log(response);
        console.log('Mudança de senha: Envio de email com sucesso!');
      })
      .catch((err) => {
        console.log(err);
        console.log('Mudança de senha: Envio de email falhou!');
      });
  }
}
