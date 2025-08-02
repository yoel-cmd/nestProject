import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import Task from './entities/task.entity';

@Injectable()
export class TasksService {
  async create(createTaskDto: CreateTaskDto) {
    const task = new Task()
    task.Description = createTaskDto.Description;
    return await task.save();
  }

  async findAll() {
    return await Task.find();
  }

  async findOne(id: number) {
    return await Task.findOneBy({ 'id': id });
  }

  async remove(id: number) {
    return await Task.delete({ 'id': id });
  }
}
