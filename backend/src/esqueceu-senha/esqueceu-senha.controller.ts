import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EsqueceuSenhaService } from '../esqueceu-senha/esqueceu-senha.service';
import { EsqueceuSenhaDto } from './dto/esqueceu-senha.dto';

@ApiTags('auth')
@Controller('auth/esqueceu-senha')
export class EsqueceuSenhaController {
  constructor(private readonly forgotPasswordService: EsqueceuSenhaService) {}

  @Post()
  public async esqueceuSenha(
    @Res() res,
    @Body() esqueceuSenhaDto: EsqueceuSenhaDto,
  ): Promise<any> {
    try {
      await this.forgotPasswordService.esqueceuSenha(esqueceuSenhaDto);

      return res.status(HttpStatus.OK).json({
        message: 'Request Reset Senha com sucesso!',
        status: 200,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Esqueceu senha falhou!',
        status: 400,
      });
    }
  }
}
