import "../reset.css";
import "../todo.css";
import { setDate, startClock } from "./dateTime.ts";
import { myGetElementById } from "./dom.ts";
import { renderTodoList } from "./render.ts";
import { load } from "./storage.ts";
import { addTodo } from "./todoStore.ts";
import { todoArray } from "./todoStore.ts";

function handleSubmit(event: SubmitEvent) {
  event.preventDefault();
  const input = myGetElementById("newTodo", HTMLInputElement);
  addTodo(input);
}

function setup() {
  setDate();
  startClock();
  todoArray.push(...load());
  renderTodoList(todoArray);
  const form = myGetElementById("todoForm", HTMLFormElement);
  form.addEventListener("submit", handleSubmit);
}

//intitialisation functions
setup();
