import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt'
import { UnauthorizedException } from '@nestjs/common';
import User from 'src/users/user.entity';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
  ) { }
  async Login(createAuthDto: CreateAuthDto): Promise<{ access_token: string }> {
    const passDb = await this.findOne(createAuthDto.username);
    const val = await bcrypt.compare(createAuthDto.password, passDb?.password)
    if (!passDb || !val) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { sub: passDb.role, username: passDb.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async Signing(token: any) {
    try {
      const payload = await this.jwtService.verifyAsync(token)
      return payload
    } catch (error) {
      throw new UnauthorizedException('Invalid credentials')
    }
  }

  findAll() {
    return;
  }

  async findOne(username: string) {
    return await User.findOneBy({ 'username': username });
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
