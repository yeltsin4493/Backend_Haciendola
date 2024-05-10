import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiCreatedResponse({
    description:
      'Account created successfully. You can now log in with your credentials.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  @ApiCreatedResponse({
    description: 'Login successful. Welcome back!',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
