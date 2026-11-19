import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const dbConfig = {
  type: 'postgres' as const,
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'secret',
  database: process.env.DB_DATABASE || 'nestjs_db',
  autoLoadEntities: true,
  synchronize: true,
};

@Module({
  imports: [
    ...(process.env.SKIP_DB === 'true' ? [] : [TypeOrmModule.forRoot(dbConfig)]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}