import "../reset.css";
import "../todo.css";
import { setDate, startClock } from "./dateTime.ts";
import { init } from "./todo.ts";
import dayjs from "dayjs";

const myBirthday = dayjs("1998-12-01");
const now = dayjs();
console.log(now.diff(myBirthday, "hour"));

function setup() {
  setDate();
  startClock();
}

setup();
init();
