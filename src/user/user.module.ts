import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { PostEntity } from '../entities/post.entity';
import { CommentEntity } from '../entities/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, PostEntity, CommentEntity])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
