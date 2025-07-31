import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import Task from './entities/task.entity';

@Injectable()
export class TasksService {
  async create(createTaskDto: CreateTaskDto) {
    const task = new Task()
    task.Description = createTaskDto.Description;
    return await task.save();
  }

  async findAll() {
    return Task.find();
  }

  async findOne(id: number) {
    return await Task.findOneBy({ 'id': id });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  async remove(id: number) {
    return await Task.delete({ 'id': id });
  }
}
