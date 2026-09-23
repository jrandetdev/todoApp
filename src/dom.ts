export function myGetElementById<T extends HTMLElement>(id: string, type: new () => T): T {
  let element = document.getElementById(id);
  if (element === null || !(element instanceof type))
    throw new Error(`Element #${id} cannot be found!`);
  return element;
}
