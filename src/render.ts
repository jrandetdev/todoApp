import { myGetElementById } from "./dom";
import { type Todo } from "./types.ts";
// import binIcon from "../public/icons/bin.svg";

let todoList = myGetElementById("todoList", HTMLUListElement);

function renderTodoElement(newTodo: Todo) {
  const newTodoElement = document.createElement("li"); // gives me a detached element li
  todoList.appendChild(newTodoElement);
  newTodoElement.innerHTML = /*html*/ `
    <li class="surface todo glass">
      <button
        class="surface tick-button"
        type="button"
        aria-pressed="false"
        aria-label="Mark todo as done"
      ></button>
      <span>
        ${newTodo.title}
      </span>
      <time datetime="2026-09-21">Sep 21</time>
      <time datetime="14:30">14:30</time>
    </li>
  `;
}

export function render(todoArray: Todo[]) {
  if (!Array.isArray(todoArray) || !todoArray)
    throw new Error("Invalid todoArray");
  if (typeof todoArray === "undefined")
    throw new Error("Todo List element #todoList cannot be undefined!");

  for (const todo of todoArray) {
    renderTodoElement(todo);
  }
}
