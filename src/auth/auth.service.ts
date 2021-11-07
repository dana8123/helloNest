import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentailsDto } from './dto/auth-credential.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async signUp(authCredentailsDto: AuthCredentailsDto): Promise<voide> {
    return this.userRepository.createUser(authCredentailsDto);
  }
}
