import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';  // Импортируем TypeOrmModule
import { PostsModule } from './posts/posts.module';  // Импортируем PostsModule
import { Post } from './posts/post.entity';  // Импортируем сущность Post

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // или другой тип базы данных (PostgreSQL, SQLite и т.д.)
      host: 'localhost',
      port: 3306,  // Порт вашей базы данных
      username: 'your-username',
      password: 'your-password',
      database: 'your-database',
      entities: [Post],  // Здесь указываем все сущности
      synchronize: true,  // Только для разработки, не используйте в продакшн
    }),
    PostsModule,  // Импортируем PostsModule, где у нас будет работать с PostRepository
  ],
})
export class AppModule {}
