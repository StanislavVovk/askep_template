import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'guards/auth.guard'
import { AuthService } from 'services/common'
import { SignUpDto, LoginDto } from 'dto/common'
import { apiRoutes, AuthRoutes } from 'common/common'
import { AuthResponse } from 'interfaces/AuthResponse'

@Controller(apiRoutes.AUTH)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post(AuthRoutes.SIGNUP)
  signUp(@Body() signUpDto: SignUpDto): Promise<AuthResponse> {
    return this.authService.signUp(signUpDto)
  }

  @Get(AuthRoutes.LOGIN)
  login(@Query() loginDto: LoginDto): Promise<AuthResponse> {
    return this.authService.login(loginDto)
  }
  @UseGuards(JwtAuthGuard)
  @Get(AuthRoutes.CHECK_TOKEN_VALIDITY)
  checkToken(@Query('token') token: string): Promise<void> {
    return this.authService.checkTokenValidity(token)
  }
}
