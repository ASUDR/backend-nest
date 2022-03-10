import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateFloorDto } from './dto/create-floor.dto';
import { UpdateFloorDto } from './dto/update-floor.dto';
import { FloorsService } from './floors.service';

@ApiTags('floors')
@ApiBearerAuth()
@Controller('floors')
@UseGuards(JwtAuthGuard)
export class FloorsController {
  constructor(private readonly floorsService: FloorsService) {}

  @Post()
  async create(@Body() dto: CreateFloorDto) {
    return this.floorsService.create(dto);
  }

  @Get()
  async findAll() {
    return this.floorsService.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.floorsService.findOne({ id: +id });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateFloorDto) {
    return this.floorsService.update(+id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.floorsService.remove(+id);
  }
}
