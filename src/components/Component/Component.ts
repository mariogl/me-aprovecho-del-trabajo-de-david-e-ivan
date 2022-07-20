import IComponent from "../interface";

class Component implements IComponent {
  element: HTMLElement;

  constructor(parent: HTMLElement, tag: string, className: string) {
    this.element = document.createElement(tag);
    this.element.className = className;
    parent.appendChild(this.element);
  }
}

export default Component;
