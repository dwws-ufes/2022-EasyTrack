import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ConfiguracoesService } from './configuracoes.service';
import { CreateConfiguracoesDto } from './dto/create-configuracoes.dto';
import { UpdateConfiguracoesDto } from './dto/update-configuracoes.dto';

@ApiTags('configuracoes')
@UseGuards(AuthGuard('jwt'))
@Controller('configuracoes')
export class ConfiguracoesController {
  constructor(private readonly configuracoesService: ConfiguracoesService) { }

  @Post()
  create(@Body() createConfiguracoeDto: CreateConfiguracoesDto) {
    return this.configuracoesService.create(createConfiguracoeDto);
  }

  @Get()
  findAll() {
    return this.configuracoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.configuracoesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConfiguracoeDto: UpdateConfiguracoesDto) {
    return this.configuracoesService.update(id, updateConfiguracoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.configuracoesService.remove(id);
  }
}
