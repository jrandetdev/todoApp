import "./todo.css";
import "./reset.css";
import "./dateTime.ts";
import { setDate, startClock } from "./dateTime.ts";

// const todoItem = {
//   content: "",
//   done: false,
//   dueDate: "",
//   dueTime: "",
// };

// function addTodoItem() {}

function setup() {
  setDate();
  startClock();
}

setup();
