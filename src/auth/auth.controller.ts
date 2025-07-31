import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.Login(createAuthDto);
  }


  @Get('singing')
  Signing(@Req() req: Request) {
    const token = req.headers['authorization']
    return this.authService.Signing(token);
  }

  @Get(':id')
  findOne(@Param('username') username: string) {
    return this.authService.findOne(username);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
