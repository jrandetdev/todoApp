/**
 * Finds an element by id and checks that it has the expected type.
 * @param id - The element's id, without "#"
 * @param type - The expected class, e.g. HTMLUListElement
 * @returns The element, typed precisely
 * @throws {Error} If the element is missing or of the wrong type
 */
export function myGetElementById<T extends HTMLElement>(id: string, type: new () => T): T {
  let element = document.getElementById(id);
  if (element === null || !(element instanceof type))
    throw new Error(`Element #${id} cannot be found!`);
  return element;
}
