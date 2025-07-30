import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import User from './user.entity';
import * as bcrypt from 'bcrypt'



@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    console.log(createUserDto);

    const user = new User()
    const hash =await bcrypt.hash(createUserDto.password, 12)
    user.password = hash;
    user.role = createUserDto.role;
    user.username = createUserDto.username;

    return await user.save();
  }

  async findAll() {
    return await User.find();


  }

  async findOne(id: number) {
    return await User.findOneBy({ 'id': id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
