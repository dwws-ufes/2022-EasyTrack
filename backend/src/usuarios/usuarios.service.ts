import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuarios } from './entities/usuarios.entity';
import { IUsuarios } from './interfaces/usuarios.interface';
import { UsuarioDto } from './dto/usuario.dto';
import * as bcrypt from 'bcrypt';
import { UserProfileDto } from './dto/usuario-profile.dto';
import { UserUpdateDto } from './dto/usuario-update.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuarios)
    private readonly usuarioRepository: Repository<Usuarios>,
  ) { }

  public async findAll(): Promise<Usuarios[]> {
    return await this.usuarioRepository.find();
  }

  public async findByEmail(email: string): Promise<Usuarios> {
    const usuario = await this.usuarioRepository.findOne({
      where: {
        email: email,
      },
    });

    if (!usuario) {
      throw new NotFoundException(`Usuario ${email} não encontraod`);
    }

    return usuario;
  }

  public async findById(userId: string): Promise<Usuarios> {
    const usuario = await this.usuarioRepository.findOneBy({
      id: userId,
    });

    if (!usuario) {
      throw new NotFoundException(`Usuario #${userId} não encontraod`);
    }

    return usuario;
  }

  public async create(userDto: UsuarioDto): Promise<IUsuarios> {
    try {
      return await this.usuarioRepository.save(userDto);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  public async updateByEmail(email: string): Promise<Usuarios> {
    try {
      const usuario = await this.usuarioRepository.findOneBy({ email: email });
      usuario.senha = bcrypt.hashSync(Math.random().toString(36).slice(-8), 8);

      return await this.usuarioRepository.save(usuario);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  public async updateByPassword(
    email: string,
    senha: string,
  ): Promise<Usuarios> {
    try {
      const usuario = await this.usuarioRepository.findOneBy({ email: email });
      usuario.senha = bcrypt.hashSync(senha, 8);

      return await this.usuarioRepository.save(usuario);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  public async updateProfileUser(
    id: string,
    userProfileDto: UserProfileDto,
  ): Promise<Usuarios> {
    try {
      const usuario = await this.usuarioRepository.findOneBy({ id: id });
      usuario.nome = userProfileDto.nome;
      usuario.sobrenome = userProfileDto.sobrenome;
      usuario.documento = userProfileDto.documento;
      usuario.email = userProfileDto.email;
      usuario.usuario = userProfileDto.usuario;

      return await this.usuarioRepository.save(usuario);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  public async updateUser(
    id: string,
    userUpdateDto: UserUpdateDto,
  ): Promise<UpdateResult> {
    try {
      const usuario = await this.usuarioRepository.update(
        {
          id: id,
        },
        { ...userUpdateDto },
      );

      if (!usuario) {
        throw new NotFoundException(`Usuario #${id} does not exist`);
      }

      return usuario;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  public async deleteUser(id: string): Promise<void> {
    const usuario = await this.findById(id);
    await this.usuarioRepository.remove(usuario);
  }
}
