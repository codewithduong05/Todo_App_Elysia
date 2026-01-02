import {Elysia} from 'elysia'
import { todoController } from './todo.controller'
import { createTodoSchema, updateTodoSchema } from './todo.schema'


export const todoRoutes = new Elysia({prefix : "/todos"})

    .get("/" , () => todoController.getAll)

    .get("/:id", ({params}) => 
    todoController.getOne(Number(params.id))
    )

    .post(
    "/",
    ({body}) => todoController.create(body),
    createTodoSchema
    )

    .put(
        "/:id",
        ({params,body}) =>
        todoController.update(Number(params.id),body),
        updateTodoSchema
    )

    .patch(
        "/:id",
        ({params,body}) =>
            todoController.update(Number(params.id),body)
        
    )
