let todoList = document.getElementById("todoList");

export function render(todoArray: Todo[]) {
  if (!todoList) throw new Error("Todo List element #todoList not found!");
  if (!Array.isArray(todoArray) || !todoArray)
    throw new Error("Invalid todoArray");
  if (typeof todoArray === "undefined")
    throw new Error("Todo List element #todoList cannot be undefined!");

  for (let i = 0; i < todoArray.length; i++) {
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
          ${todoArray[i].title}
        </span>
        <time datetime="2026-09-21">Sep 21</time>
        <time datetime="14:30">14:30</time>
      </li>
    `;
  }
}
