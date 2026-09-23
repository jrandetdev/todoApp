import "../reset.css";
import "../todo.css";
import { setDate, startClock } from "./dateTime.ts";
import { myGetElementById } from "./dom.ts";
import { addTodo } from "./todoStore.ts";

function handleSubmit(event: SubmitEvent) {
  event.preventDefault();
  const input = myGetElementById("newTodo", HTMLInputElement);
  addTodo(input);
}

function setup() {
  setDate();
  startClock();
  const form = myGetElementById("todoForm", HTMLFormElement);
  form.addEventListener("submit", handleSubmit);
}

//intitialisation functions
setup();
