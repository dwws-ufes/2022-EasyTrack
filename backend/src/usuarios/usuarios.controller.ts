import {
  Controller,
  Put,
  Get,
  Body,
  Res,
  Param,
  UseGuards,
  HttpStatus,
  NotFoundException,
  Delete,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { AuthGuard } from '@nestjs/passport';
import { UserProfileDto } from './dto/usuario-profile.dto';
import { UserUpdateDto } from './dto/usuario-update.dto';
import { IUsuarios } from './interfaces/usuarios.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('usuarios')
@UseGuards(AuthGuard('jwt'))
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usersService: UsuariosService) {}

  @Get()
  public async findAllUser(): Promise<IUsuarios[]> {
    return this.usersService.findAll();
  }

  @Get('/:userId')
  public async findOneUser(@Param('userId') userId: string): Promise<IUsuarios> {
    return this.usersService.findById(userId);
  }

  @Get('/:userId/profile')
  public async getUser(
    @Res() res,
    @Param('userId') userId: string,
  ): Promise<IUsuarios> {
    const usuario = await this.usersService.findById(userId);

    if (!usuario) {
      throw new NotFoundException('Usuario does not exist!');
    }

    return res.status(HttpStatus.OK).json({
      usuario: usuario,
      status: 200,
    });
  }

  @Put('/:userId/profile')
  public async updateProfileUser(
    @Res() res,
    @Param('userId') userId: string,
    @Body() userProfileDto: UserProfileDto,
  ): Promise<any> {
    try {
      await this.usersService.updateProfileUser(userId, userProfileDto);

      return res.status(HttpStatus.OK).json({
        message: 'Usuario Updated successfully!',
        status: 200,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Usuario not updated!',
        status: 400,
      });
    }
  }

  @Put('/:userId')
  public async updateUser(
    @Res() res,
    @Param('userId') userId: string,
    @Body() userUpdateDto: UserUpdateDto,
  ) {
    try {
      await this.usersService.updateUser(userId, userUpdateDto);

      return res.status(HttpStatus.OK).json({
        message: 'Usuario Updated successfully!',
        status: 200,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Usuario not updated!',
        status: 400,
      });
    }
  }

  @Delete('/:userId')
  public async deleteUser(@Param('userId') userId: string): Promise<void> {
    const usuario = this.usersService.deleteUser(userId);
    if (!usuario) {
      throw new NotFoundException('Usuario does not exist!');
    }
    return usuario;
  }
}
