import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/common/guards/roles/jwt.guard';
import { RolesGuard } from 'src/common/guards/roles/roles.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard,RolesGuard)
  @Get('get_all')
  async findAll() {
    return await this.usersService.findAll();
  }
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Get('get-user/:id')
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard,RolesGuard)
  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(+id);
  }
}
