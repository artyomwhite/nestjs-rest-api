import { Module } from '@nestjs/common';
import { PostsService } from '../posts/posts.service';
import { PostsController } from '../posts/posts.controller';
import { Post } from '../posts/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService],
})
export class AuthModule {}
