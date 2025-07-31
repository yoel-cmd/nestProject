import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './users/user.entity';
import Task from './tasks/entities/task.entity';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { ShiftModule } from './shift/shift.module';
import { GuardModule } from './guard/guard.module';
import Shift from './shift/entities/shift.entity';

@Module({
  imports: [UsersModule, AuthModule, TypeOrmModule.forRoot({
    url: 'mysql://root@localhost:3306/',
    type: 'mysql',
    database: 'db_nest',
    entities: [User,Task,Shift],
    synchronize: true
  }), TasksModule, ShiftModule, GuardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
