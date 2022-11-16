import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { RegistroUsuarioService } from './registro-usuario.service';
import { RegistroUsuarioDto } from './dto/registro-usuario.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth/register')
export class RegistroUsuarioController {
  constructor(private readonly registroUsuarioService: RegistroUsuarioService) {}

  @Post()
  public async register(
    @Res() res,
    @Body() registerUserDto: RegistroUsuarioDto,
  ): Promise<any> {
    try {
      await this.registroUsuarioService.register(registerUserDto);

      return res.status(HttpStatus.OK).json({
        message: 'Usuario registration successfully!',
        status: 200,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Usuario not registration!',
        status: 400,
      });
    }
  }
}
