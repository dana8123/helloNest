import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './boards/board.repository';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './boards/configs/typeorm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    BoardsModule,
    TypeOrmModule.forRoot(typeORMConfig),
    TypeOrmModule.forFeature([BoardRepository]),
    AuthModule,
  ],
})
export class AppModule {}
