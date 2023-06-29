import { Module } from '@nestjs/common';
import { PostController } from './folder/post.controller';

@Module({
  controllers: [PostController]
})
export class PostModule {}
