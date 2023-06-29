import { Controller } from '@nestjs/common';
import { get } from 'http';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService){}
    @Get{}
    getAllPost{
        return this.postService.getAllPost();
    }

}
