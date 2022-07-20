import Component from "../Component/Component";
import { IComponent, FilmData } from "../interface";

class FilmCard extends Component implements IComponent {
  constructor(parent: HTMLElement, private filmData: FilmData) {
    super(parent, "li", "serie");
  }
}
