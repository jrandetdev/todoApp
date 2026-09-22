export function setDate(): void {
  const fullDate = document.getElementById("fullDate");
  if (fullDate !== null) {
    fullDate.textContent = new Date().toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
}

function updateClock(): void{
  const clock = document.getElementById("clock");
  if (clock != null) {
    clock.textContent = new Date().toLocaleTimeString();
  }
}

export function startClock(): void{
  updateClock();
  setInterval(updateClock, 1000);
}
