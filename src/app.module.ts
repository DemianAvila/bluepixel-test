import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { SessionsModule } from './sessions/sessions.module';

@Module({
  imports: [TasksModule, UsersModule, SessionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
