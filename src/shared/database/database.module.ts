import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Post } from '../../posts/post.entity';
import { User } from '../../users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'mysql', // Или 'postgres' для PostgreSQL
        host: 'localhost',
        port: 3306, // 5432 для PostgreSQL
        username: 'root',
        password: 'password',
        database: 'nestjs_db',
        entities: [Post, User],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([Post, User]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {
  constructor(private dataSource: DataSource) {} // Конструктор для получения DataSource
}
