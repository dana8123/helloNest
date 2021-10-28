import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './boards/board.repository';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './boards/configs/typeorm.config';

@Module({
  imports: [
    BoardsModule,
    TypeOrmModule.forRoot(typeORMConfig),
    TypeOrmModule.forFeature([BoardRepository]),
  ],
})
export class AppModule {}
