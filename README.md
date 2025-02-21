# NestJS REST API with Sequelize and MySQL

Этот проект представляет собой REST API, разработанный на NestJS, с функционалом авторизации и регистрации пользователей, а также интеграцией с внешним API для получения и хранения данных. Система использует JWT для аутентификации, поддерживает рефреш-токены и хранит данные в MySQL с использованием ORM Sequelize.

## Основные функции

- **Регистрация пользователя**: Пользователь может зарегистрироваться, предоставив email и пароль.
- **Авторизация пользователя**: Авторизация с использованием email и пароля. Возвращает Access и Refresh токены.
- **Обновление Access токена**: Обновление Access токена с использованием Refresh токена.
- **Выход из системы**: Инвалидация Refresh токена при выходе из системы.
- **Интеграция с внешним API**: Получение данных из JSONPlaceholder API и их сохранение в базе данных.
- **Защищенные маршруты**: Доступ к защищенным маршрутам с использованием Access токена.

## Технологии

- **NestJS**: Основной фреймворк для разработки API.
- **MySQL**: База данных для хранения данных.
- **Sequelize**: ORM для работы с базой данных.
- **JWT**: Аутентификация и авторизация.
- **Swagger**: Документация API.

## Установка и запуск

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/yourusername/nestjs-rest-api.git
   cd nestjs-rest-api
2. Установите зависимости:

bash
Copy
npm install

3.Создайте файл .env в корне проекта и настройте переменные окружения:

env
Copy
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=yourpassword
DATABASE_NAME=nestjs_db
JWT_SECRET=your_jwt_secret
JWT_EXPIRATION=1h
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRATION=7d

4.Запустите проект:

bash
Copy
npm run start

5. Откройте Swagger UI для тестирования API:

http://localhost:3000/api


Основные маршруты API

POST /auth/register: Регистрация пользователя.

POST /auth/login: Авторизация и получение токенов.

POST /auth/refresh: Обновление Access токена.

GET /posts: Получение списка постов (защищенный маршрут).

GET /external/posts: Получение и сохранение постов из внешнего API.