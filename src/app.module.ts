import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoModule } from './todo/todo.module';
import {join} from 'path';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "better-sqlite3",
    database: 'database.sqlite',
    //entities: [__dirname, '/**/*.entity{.ts,.js}'],
    entities: [join(__dirname, '**', '*.entity.{js,ts}')],
    synchronize: true
}),
TodoModule]
})
export class AppModule {}
