import { Injectable } from '@nestjs/common';
import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';
import Task from 'src/tasks/entities/task.entity';
import User from 'src/users/user.entity';
import Shift from './entities/shift.entity';
@Injectable()
export class ShiftService {
  async create(createShiftDto: CreateShiftDto) {
    const shift = new Shift()
    const user = await User.findOneBy({ 'id': createShiftDto.user })
    if (!user) throw new Error('User not found');
      shift.user = user;

    const task = await Task.findOneBy({ 'id': createShiftDto.task })
    if (!task) throw new Error('task not found');
      shift.task = task;

    shift.start_time = createShiftDto.start_time;
    shift.end_time = createShiftDto.end_time;
    await shift.save()
    return shift;
  }

  async findAll() {
    return  await Shift.find();
  }

  async findOne(id: number) {
    return await Shift.findOneBy({'id':id});
  }

  update(id: number, updateShiftDto: UpdateShiftDto) {
    return `This action updates a #${id} shift`;
  }

  async remove(id: number) {
    return await Shift.delete({'id':id});
  }
}
