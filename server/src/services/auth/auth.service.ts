import { Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from 'schemas/common'

import { JwtService } from '@nestjs/jwt'
import { SignUpDto, LoginDto } from 'dto/common'
import { compare, hash } from 'bcrypt'
import { env } from 'process'
import { AuthResponse } from 'interfaces/AuthResponse'

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService
  ) {}
  // todo think about separation user validation services and creating user

  async signUp(signUpDto: SignUpDto): Promise<AuthResponse> {
    const { name, email, password } = signUpDto
    const hashedPassword = await hash(password, Number(env.SALT))

    if (await this.userModel.findOne({ email: email }).exec()) {
      throw new UnauthorizedException('User with this email already exists')
    }

    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword
    })

    const userId = user._id
    const token = this.jwtService.sign({ id: userId })

    return { token: token, name: name, email: email }
  }

  async login(loginDto: LoginDto): Promise<AuthResponse> {
    const { email, password } = loginDto
    const user = await this.userModel.findOne({ email })

    if (!user) {
      throw new UnauthorizedException('There is no user with this email ')
    }
    const isPasswordMatched = await compare(password, user.password)
    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password')
    }
    const token = this.jwtService.sign({ id: user._id })

    return { token: token, name: user.name, email: email }
  }

  async checkTokenValidity(token: string) {
    this.jwtService.verify(token)
  }
}
