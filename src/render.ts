import { myGetElementById } from "./dom";
import { type Todo } from "./types.ts";
import { createIcons, Trash } from "lucide";
import { removeTodo } from "./todoStore.ts";

let todoList = myGetElementById("todoList", HTMLUListElement);

function handleTodoClick(event: PointerEvent) {
  const currentElement = event.target;
  if (currentElement instanceof Element) {
    const tickButton = currentElement.closest(".surface.tick-button");
    const deleteButton = currentElement.closest(".deleteButton");
    const todo = currentElement.closest(".todo");
    if (!(todo instanceof HTMLLIElement)) return;
    if (tickButton) {
      todo.style.setProperty("text-decoration", "line-through");
    }
    if (deleteButton) {
      removeTodo(todo);
    }
  } else {
    return;
  }
}

todoList.addEventListener("click", handleTodoClick);

export function appendTodo(newTodo: Todo) {
  const newTodoElement = document.createElement("li"); // gives me a detached element li
  newTodoElement.id = newTodo.id;
  newTodoElement.classList.add("surface", "todo", "glass");

  newTodoElement.innerHTML = /*html*/ `
    <button class="surface tick-button" type="button" aria-pressed="false" aria-label="Mark todo as done">
    </button>
      <span class="todoTitle"></span>
      <time datetime="2026-09-21">Sep 21</time>
      <time datetime="14:30">14:30</time>
      <button type="button" class="deleteButton">
        <i data-lucide="trash"></i>
      </button>
      `;

  const todoTitle = newTodoElement.querySelector(".todoTitle");
  if (!todoTitle) throw new Error("Class todoTitle cannot be found");
  todoTitle.textContent = newTodo.title;

  todoList.appendChild(newTodoElement);
  createIcons({
    icons: {
      Trash,
    },
    root: newTodoElement,
  });
}

export function renderTodoList(todoArray: Todo[]) {
  if (!Array.isArray(todoArray) || !todoArray)
    throw new Error("Invalid todoArray");
  if (typeof todoArray === "undefined")
    throw new Error("Todo List element #todoList cannot be undefined!");
  for (const todo of todoArray) {
    appendTodo(todo);
  }
}
