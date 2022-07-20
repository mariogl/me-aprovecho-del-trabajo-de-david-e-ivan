import Component from "../Component/Component.js";
import { IComponent, FilmData } from "../interface.js";

class FilmCard extends Component implements IComponent {
  constructor(parent: HTMLElement, private filmData: FilmData) {
    super(parent, "li", "serie");
    this.render();
  }

  render(): void {
    this.addImage();
  }

  addImage(): void {
    const img = document.createElement("img");
    img.className = "serie__poster";
    img.alt = `${this.filmData.name} poster`;
    img.src = this.filmData.poster;
    this.element.appendChild(img);
  }
}

export default FilmCard;
