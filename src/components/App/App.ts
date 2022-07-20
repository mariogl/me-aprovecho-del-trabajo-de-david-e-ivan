import { IComponent } from "../interface.js";
import Component from "../Component/Component.js";

class App extends Component implements IComponent {
  constructor(private title: string) {
    super(document.body, "div", "container");
    this.title = title;

    this.headerAppContainer();
    this.mainAppContainer();
  }

  headerAppContainer(): void {
    const headerContainer = document.createElement("header");
    headerContainer.className = "main-header";
    this.element.appendChild(headerContainer);

    const headerTitle = document.createElement("h1");
    headerTitle.className = "main-title";
    headerContainer.appendChild(headerTitle);
    headerTitle.textContent = this.title;
  }

  mainAppContainer(): void {
    const mainContainer = document.createElement("main");
    mainContainer.className = "main";
    this.element.appendChild(mainContainer);

    const sectionContainer = document.createElement("section");
    sectionContainer.className = "series";
    mainContainer.appendChild(sectionContainer);

    const sectionTitleContainer = document.createElement("h2");
    sectionTitleContainer.className = "section-title";
    sectionContainer.appendChild(sectionTitleContainer);
    sectionTitleContainer.textContent = "Series list";

    const listPending = document.createElement("section");
    listPending.className = "series-pending";
    sectionContainer.appendChild(listPending);

    const listWatched = document.createElement("section");
    listWatched.className = "series-watched";
    sectionContainer.appendChild(listWatched);
  }
}
export default App;
