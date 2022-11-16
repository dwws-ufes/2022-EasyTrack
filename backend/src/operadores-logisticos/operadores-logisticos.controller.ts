import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { OperadoresLogisticosService } from './operadores-logisticos.service';
import { CreateOperadoresLogisticoDto } from './dto/create-operadores-logistico.dto';
import { UpdateOperadoresLogisticoDto } from './dto/update-operadores-logistico.dto';

@ApiTags('operadores-logisticos')
@UseGuards(AuthGuard('jwt'))
@Controller('operadores-logisticos')
export class OperadoresLogisticosController {
  constructor(private readonly operadoresLogisticosService: OperadoresLogisticosService) {}

  @Post()
  create(@Body() createOperadoresLogisticoDto: CreateOperadoresLogisticoDto) {
    return this.operadoresLogisticosService.create(createOperadoresLogisticoDto);
  }

  @Get()
  findAll() {
    return this.operadoresLogisticosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.operadoresLogisticosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOperadoresLogisticoDto: UpdateOperadoresLogisticoDto) {
    return this.operadoresLogisticosService.update(id, updateOperadoresLogisticoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.operadoresLogisticosService.remove(id);
  }
}
