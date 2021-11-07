import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentailsDto } from './dto/auth-credential.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(authCredentailsDto: AuthCredentailsDto): Promise<void> {
    const { username, password } = authCredentailsDto;
    const user = this.create({ username, password });

    await this.save(user);
  }
}
