import { Module } from '@nestjs/common';
import { ForumController } from './forum/forum.controller';
import { ForumService } from './forum/forum.service';

@Module({
  imports: [],
  controllers: [ForumController],
  providers: [ForumService],
})
export class AppModule {}
