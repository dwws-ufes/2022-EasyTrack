import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { RegistroMovimentacoesService } from './registro-movimentacoes.service';
import { CreateRegistroMovimentacoeDto } from './dto/create-registro-movimentacoe.dto';
import { UpdateRegistroMovimentacoeDto } from './dto/update-registro-movimentacoe.dto';


@ApiTags('registro-movimentacoes')
@UseGuards(AuthGuard('jwt'))
@Controller('registro-movimentacoes')
export class RegistroMovimentacoesController {
  constructor(private readonly registroMovimentacoesService: RegistroMovimentacoesService) { }

  @Post()
  create(@Body() createRegistroMovimentacoeDto: CreateRegistroMovimentacoeDto) {
    return this.registroMovimentacoesService.create(createRegistroMovimentacoeDto);
  }

  @Get()
  findAll() {
    return this.registroMovimentacoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registroMovimentacoesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistroMovimentacoeDto: UpdateRegistroMovimentacoeDto) {
    return this.registroMovimentacoesService.update(id, updateRegistroMovimentacoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registroMovimentacoesService.remove(id);
  }
}
