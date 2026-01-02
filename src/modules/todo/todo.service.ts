import { DBTodo } from "./todo.data";
import { Todo } from "./todo.model";

let todos: Todo[] = [...DBTodo]
let nextId = todos.length + 1

export const todoService = {
    findAll() {
        return todos
    },
    findById(id: number) {
        return todos.find(t => t.id === id )
    },

    create(tittle :string) {
        const todo:Todo = {
            id: nextId++,
            tittle,
            competed : false
        }
        // push todo data
        todos.push(todo)
        return todo
        
    },

    update(id : number,  data:Partial<Todo>) {
        const todo = this.findById(id)
        if (!todo) return null 
        Object.assign(todo,data)
        return todo
    },

    remove(id:number) {
        todos =todos.filter(t => t.id !== id)
        return true
    }
    
}