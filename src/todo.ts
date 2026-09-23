import { type Todo } from "./types.ts";
import { render } from "./render.ts";
import { myGetElementById } from "./dom.ts";

let form = document.getElementById("todoForm");

let todoArray: Todo[] = [];

function handleSubmit(event: SubmitEvent): void {
  event.preventDefault();

  const todoTitle = myGetElementById("newTodo", HTMLInputElement);

  let newTodo: Todo = {
    id: Math.random().toString().slice(2, 10),
    title: todoTitle.value,
    done: false,
  };

  todoArray.push(newTodo);
  localStorage.setItem("todoList", JSON.stringify(todoArray));

  render(todoArray);
}

/**
 * event listener on the form where on submit, we fire the addtodo
 */
export function init() {
  form = document.getElementById("todoForm");
  if (form) {
    form?.addEventListener("submit", handleSubmit);
  }
}
