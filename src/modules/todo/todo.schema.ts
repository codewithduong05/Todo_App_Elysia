import {t} from 'elysia'

export const createTodoSchema = {
    body : t.Object({
        title : t.String()
    })
}
        
export const updateTodoSchema = {
    body : t.Object({
        title : t.String(),
        completed : t.Boolean()
    })
}

export const patchTodoSchema = {
    body : t.Partial(
        t.Object({
            title : t.String(),
            completed : t.Boolean()
        })
    )
}