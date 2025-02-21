import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';  // Импортируем InjectRepository
import { Repository } from 'typeorm';  // Импортируем Repository
import { Post } from './post.entity';  // Импортируем сущность Post

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)  // Инжектируем репозиторий для работы с сущностью Post
    private postsRepository: Repository<Post>,  // Репозиторий для сущности Post
  ) {}

  // Получение всех постов
  async findAll(): Promise<Post[]> {
    return this.postsRepository.find();  // Используем метод find репозитория
  }

  // Создание нового поста
  async create(title: string, content: string): Promise<Post> {
    const post = this.postsRepository.create({ title, content });  // Создаем новый объект Post
    return this.postsRepository.save(post);  // Сохраняем новый пост в базе данных
  }
}
