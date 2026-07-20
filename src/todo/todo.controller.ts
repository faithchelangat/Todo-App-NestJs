import { Controller, Get, Post, Put, Param, Delete, Body } from '@nestjs/common';
import { TodoService } from './todo.service';
import { get } from 'http';



@Controller('todo')
export class TodoController {
    constructor(
        private readonly todoService: TodoService
    ){}

    @Get()
    findAll(){
        return this.todoService.findAll()
    }

    @Post()
    create(@Body('title') title:string){
        return this.todoService.create(title)

    }

    @Put(':id')
    update(@Param('id') id: number, @Body('iscompleted') iscompleted: boolean){
        return this.todoService.update(id, iscompleted)

    }

    @Delete(':id')
    delete(@Param('id') id:number){
        return this.todoService.delete(id)

    }
}
