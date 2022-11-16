import {
  Controller,
  Post,
  Body,
  UseGuards,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { MudaSenhaService } from '../muda-senha/muda-senha.service';
import { AuthGuard } from '@nestjs/passport';
import { MudaSenhaDto } from './dto/muda-senha.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@UseGuards(AuthGuard('jwt'))
@Controller('auth/muda-senha')
export class MudaSenhaController {
  constructor(private readonly changePasswordService: MudaSenhaService) {}

  @Post()
  public async mudaSenha(
    @Res() res,
    @Body() mudaSenhaDto: MudaSenhaDto,
  ): Promise<any> {
    try {
      await this.changePasswordService.mudaSenha(mudaSenhaDto);

      return res.status(HttpStatus.OK).json({
        message: 'Request Change password Successfully!',
        status: 200,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Change password failed!',
        status: 400,
      });
    }
  }
}
