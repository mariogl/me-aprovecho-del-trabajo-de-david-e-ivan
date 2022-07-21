import { IComponent } from "../interface.js";
import Component from "../Component/Component.js";
import SectionLists from "../SectionList/SectionList.js";

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

    new SectionLists(
      sectionContainer,
      "series-pending",
      "Pending Series",
      "You have 4 series pending to watch",
      ""
    );

    const listWatched = document.createElement("section");
    listWatched.className = "series-watched";
    sectionContainer.appendChild(listWatched);
    new SectionLists(
      sectionContainer,
      "series-watched",
      "Watched Series",
      "You have watched 4 series",
      "series-list--watched"
    );
  }
}
export default App;
