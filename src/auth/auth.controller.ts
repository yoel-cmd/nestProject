import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

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
}
