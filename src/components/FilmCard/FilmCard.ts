import Component from "../Component/Component.js";
import { IComponent, FilmData } from "../interface.js";

class FilmCard extends Component implements IComponent {
  constructor(parent: HTMLElement, private filmData: FilmData) {
    super(parent, "li", "serie");
    this.render();
  }

  render(): void {
    this.addImage();
    this.addTitle();
  }

  addImage(): void {
    const img = document.createElement("img");
    img.className = "serie__poster";
    img.alt = `${this.filmData.name} poster`;
    img.src = this.filmData.poster;
    this.element.appendChild(img);
  }

  addTitle(): void {
    const title = document.createElement("h4");
    title.className = "serie__title";
    title.textContent = `${this.filmData.name}`;
    this.element.appendChild(title);

    const infoData = document.createElement("p");
    infoData.className = "serie__info";
    infoData.textContent = `${this.filmData.creator} (${this.filmData.year})`;
    this.element.appendChild(infoData);
  }
}

export default FilmCard;
