import { IComponent } from "../interface.js";

class Component implements IComponent {
  element: HTMLElement;

  constructor(parent: HTMLElement, tag: string, className: string) {
    this.element = document.createElement(tag);
    this.element.className = className;
    if (tag === "section") {
      parent.appendChild(document.body);
    } else {
      parent.appendChild(this.element);
    }
  }
}

export default Component;
