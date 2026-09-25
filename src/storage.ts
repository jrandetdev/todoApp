import type { Todo } from "./types";

export function save(todoArray: Todo[]) {
  localStorage.setItem("todoArray", JSON.stringify(todoArray));
}

export function load(): Todo[] {
  const serialisedArray = localStorage.getItem("todoArray");
  if (!serialisedArray) return [];
  return JSON.parse(serialisedArray);
}
