import { Controller, Post, Req } from '@nestjs/common';
import {Request} from 'express'
@Controller('task')
export class TaskController {
    @Post()
    method (@Req() req: Request){
        return `method ${req.method}`
    }
}
