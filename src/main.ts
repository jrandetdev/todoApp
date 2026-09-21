import "./todo.css";
import "./reset.css";
import { setDate, startClock } from "./dateTime.ts";
import dayjs from "dayjs";

const myBirthday = dayjs("1998-12-01");
const now = dayjs();
console.log(now.diff(myBirthday, "hour"));

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
