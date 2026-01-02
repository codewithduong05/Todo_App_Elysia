//src/app.ts
import { Elysia } from "elysia";
import { todoRoutes } from "./modules/todo/todo.routes";

export const app = new Elysia()
  .group("/api", app => app.use(todoRoutes))
