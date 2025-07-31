import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShiftService } from './shift.service';
import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';

@Controller('shift')
export class ShiftController {
  constructor(private readonly shiftService: ShiftService) {}

  @Post('creat-shift')
  create(@Body() createShiftDto: CreateShiftDto) {
    return this.shiftService.create(createShiftDto);
  }

  @Get('get-all')
  findAll() {
    return this.shiftService.findAll();
  }

  @Get('get-shift/:id')
  async findOne(@Param('id') id: string) {
    return await this.shiftService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShiftDto: UpdateShiftDto) {
    return this.shiftService.update(+id, updateShiftDto);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return await this.shiftService.remove(+id);
  }
}
