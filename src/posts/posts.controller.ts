import { Controller, Get, Post, Body } from '@nestjs/common';
import { PostsService } from './posts.service';  // Импортируем PostsService
import { Post as PostEntity } from './post.entity';  // Импортируем сущность Post

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(): Promise<PostEntity[]> {
    return this.postsService.findAll();  // Вызываем метод findAll из сервиса
  }

  @Post()
  async create(@Body() postData: { title: string; content: string }): Promise<PostEntity> {
    return this.postsService.create(postData.title, postData.content);  // Вызываем метод create из сервиса
  }
}
