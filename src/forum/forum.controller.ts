import { Controller, Delete, Get, Param, Patch, Post, Body, Query } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post-dto';
import { UpdatePostDto } from './dto/update-post-dto';
import { ForumService } from './forum.service';

@Controller('forum')
export class ForumController {

    constructor(private readonly forumService: ForumService){}

    @Get()
    getAll() {
        return this.forumService.getAll();
    }

    @Get('/:id')
    getOne(@Param('id') postId:number) {
        return this.forumService.getOne(postId)
    }

    @Post()
    create(@Body() postData: CreatePostDto) {
        return this.forumService.create(postData)
    }

    @Delete('/:id')
    remove(@Param('id') postId:number){
        return this.forumService.deleteOne(postId)
    }

    @Get("search")
    search(@Query("user") user:string){
        return `We are searching for a post with user ${user}`
    }

    @Patch('/:id')
    patch(@Param('id') postId:number, @Body() updatedData:UpdatePostDto){
        return this.forumService.update(postId, updatedData)
    }


}
