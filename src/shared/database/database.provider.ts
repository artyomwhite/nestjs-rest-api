import { DataSource } from 'typeorm';
import { Post } from '../../posts/post.entity';
import { User } from '../../users/user.entity';

export const DatabaseProvider = new DataSource({
  type: 'mysql', // Или 'postgres'
  host: 'localhost',
  port: 3306, // Или 5432 для PostgreSQL
  username: 'root',
  password: 'password',
  database: 'nestjs_db',
  entities: [User, Post], // Добавь все сущности
  synchronize: true, // false в продакшене
});
