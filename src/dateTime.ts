import { myGetElementById } from "./dom";

export function setDate(): void {
  const fullDate = myGetElementById("fullDate", HTMLParagraphElement);
  if (fullDate !== null) {
    fullDate.textContent = new Date().toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
}

function updateClock(): void {
  const clock = myGetElementById("clock", HTMLParagraphElement);
  if (clock != null) {
    clock.textContent = new Date().toLocaleTimeString();
  }
}

export function startClock(): void {
  updateClock();
  setInterval(updateClock, 1000); // asynchronous operation used to execute code after a certain delay 
}
