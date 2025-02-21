import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';  // Импортируем TypeOrmModule
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Post } from './post.entity';  // Импортируем сущность Post

@Module({
  imports: [TypeOrmModule.forFeature([Post])],  // Подключаем репозиторий Post
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
