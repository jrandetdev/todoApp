import { type Todo } from "./types.ts";
import { appendTodo } from "./render.ts";
import { save } from "./storage.ts";

export const todoArray: Todo[] = [];

export function addTodo(elementToAdd: HTMLInputElement) {
  const newTodo: Todo = {
    id: Math.random().toString().slice(2, 10),
    title: elementToAdd.value,
    done: false,
  };

  todoArray.push(newTodo);
  appendTodo(newTodo);
  save(todoArray);
}

export function markTodoAsDone(elementToTick: HTMLLIElement) {
  const index = todoArray.findIndex((todo) => todo.id === elementToTick.id);
  if (todoArray[index]) {
    todoArray[index].done == false
      ? (todoArray[index].done = true)
      : (todoArray[index].done = false);
  }
}

export function removeTodo(elementToRemove: HTMLLIElement) {
  const index = todoArray.findIndex((todo) => todo.id === elementToRemove.id);
  todoArray.splice(index, 1);
  save(todoArray);
  elementToRemove.remove();
}
