import { ToDoStatus } from "./enums/todo-status.enum";

export interface Todo{
    title: string;
    status: ToDoStatus
}