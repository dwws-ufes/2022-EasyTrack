import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuarios } from '../usuarios/entities/usuarios.entity';
import { EsqueceuSenhaDto } from './dto/esqueceu-senha.dto';
import { MailerService } from '../mailer/mailer.service';
import * as bcrypt from 'bcrypt';
import { UtilsService } from '../utils/utils.service';

@Injectable()
export class EsqueceuSenhaService {
  constructor(
    @InjectRepository(Usuarios)
    private readonly usuarioRepository: Repository<Usuarios>,
    private readonly mailerService: MailerService,
    private readonly utilsService: UtilsService,
  ) {}

  public async esqueceuSenha(
    esqueceuSenhaDto: EsqueceuSenhaDto,
  ): Promise<any> {
    const userUpdate = await this.usuarioRepository.findOneBy({
      email: esqueceuSenhaDto.email,
    });
    const passwordRand = this.utilsService.generatePassword();
    userUpdate.senha = bcrypt.hashSync(passwordRand, 8);

    this.sendMailEsqueceuSenha(userUpdate.email, passwordRand);

    return await this.usuarioRepository.save(userUpdate);
  }

  private sendMailEsqueceuSenha(email, senha): void {
    this.mailerService
      .sendMail({
        to: email,
        from: 'from@example.com',
        subject: 'Nova senha gerada com sucesso ✔',
        text: 'Nova senha gerada!',
        template: 'index',
        context: {
          title: 'Forgot Senha successful!',
          description:
            'Request de reset de senha com sucesso! ✔. Essa é sua nova senha: ' +
            senha,
        },
      })
      .then((response) => {
        console.log(response);
        console.log('Esqueceu Senha: Email enviado com sucesso!');
      })
      .catch((err) => {
        console.log(err);
        console.log('Esqueceu Senha: Envio de email falhou!');
      });
  }
}
