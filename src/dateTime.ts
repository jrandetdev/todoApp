export function setDate() {
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

function updateClock() {
  const clock = document.getElementById("clock");
  if (clock != null) {
    clock.textContent = new Date().toLocaleTimeString();
  }
}

export function startClock() {
  updateClock();
  setInterval(updateClock, 1000);
}
