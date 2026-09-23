import { type Todo } from "./types.ts";
import { render } from "./render.ts";

const todoArray: Todo[] = [];

export function addTodo(elementToAdd: HTMLInputElement) {
  const newTodo: Todo = {
    id: Math.random().toString().slice(2, 10),
    title: elementToAdd.value,
    done: false,
  };

  todoArray.push(newTodo);
  render(todoArray);
}

// function removeTodo(elementToRemove: )
