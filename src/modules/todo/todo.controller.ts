import { successResponse } from '../../shared/response';
import { todoService } from './todo.service';

export const todoController = {
    getAll() {
        return todoService.findAll()
    },

    getOne(id :number) {
        return todoService.findById(id)
    },

    create(body :{title :string}) {
        const todo = todoService.create(body.title)
        
        return successResponse(
            todo,
            "Todo create Successfully"
        )   
        return todoService.create(body.title)
    },

    update(id:number,body :any) {
        
        return todoService.update(id,body)
    },

    remove(id:number) {
        return todoService.remove(id)
    }

}