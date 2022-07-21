import series from "../../series.js";
import Component from "../Component/Component.js";
import FilmCard from "../FilmCard/FilmCard.js";
import { IComponent } from "../interface.js";

class SectionLists extends Component implements IComponent {
  constructor(
    parent: HTMLElement,
    className: string,
    private title: string,
    private text: string,
    private listClass: string
  ) {
    super(parent, "section", className);

    this.title = title;
    this.text = text;

    this.renderSection();
  }

  renderSection(): void {
    const sectionHeading = document.createElement("h3");
    sectionHeading.className = "subsection-title";
    this.element.appendChild(sectionHeading);
    sectionHeading.textContent = this.title;

    const sectionParagraph = document.createElement("p");
    sectionParagraph.className = "info";
    this.element.appendChild(sectionParagraph);
    sectionParagraph.textContent = this.text;

    const sectionList = document.createElement("ul");
    sectionList.className = `series-list ${this.listClass}`;
    this.element.appendChild(sectionList);
    new FilmCard(sectionList, series[0]);
    new FilmCard(sectionList, series[1]);
    new FilmCard(sectionList, series[2]);
    new FilmCard(sectionList, series[3]);
  }
}
export default SectionLists;
