import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { JwtAuthGuard } from 'src/common/guards/roles/jwt.guard';
import { RolesGuard } from 'src/common/guards/roles/roles.guard';

@UseGuards(JwtAuthGuard,RolesGuard)
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @Post('create-task')
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get('get-all')
  async findAll() {
    return await this.tasksService.findAll();
  }

  @Get('get/:id')
  async findOne(@Param('id') id: string) {
    return await this.tasksService.findOne(+id);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
