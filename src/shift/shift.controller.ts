import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { ShiftService } from './shift.service';
import { CreateShiftDto } from './dto/create-shift.dto';
import { JwtAuthGuard } from 'src/common/guards/roles/jwt.guard';
import { RolesGuard } from 'src/common/guards/roles/roles.guard';

@UseGuards(JwtAuthGuard)
@Controller('shift')
export class ShiftController {
  constructor(private readonly shiftService: ShiftService) { }

  @UseGuards(RolesGuard)
  @Post('creat-shift')
  create(@Body() createShiftDto: CreateShiftDto) {
    return this.shiftService.create(createShiftDto);
  }

  @UseGuards(RolesGuard)
  @Get('get-all')
  findAll() {
    return this.shiftService.findAll();
  }

  @Get('get-my-shifts')
  async findOne(@Req() req: Request) {
    const user = (req as any).user;
    const userId = user.sub;
    return await this.shiftService.findUserShifts(userId);
  }

  @UseGuards(RolesGuard)
  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return await this.shiftService.remove(+id);
  }
}
