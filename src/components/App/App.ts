import IComponent from "../interface.js";
import Component from "../Component/Component.js";

class App extends Component implements IComponent {
  constructor(private title: string) {
    super(document.body, "div", "container");
    this.title = title;

    this.renderAppContainer();
  }

  renderAppContainer(): void {
    const appContainer = document.createElement("div");
    appContainer.className = "container";
    this.element.appendChild(appContainer);

    const headerContainer = document.createElement("header");
    headerContainer.className = "main-header";
    appContainer.appendChild(headerContainer);

    const headerTitle = document.createElement("h1");
    headerTitle.className = "main-title";
    headerContainer.appendChild(headerTitle);
    headerTitle.textContent = this.title;
  }
}
export default App;
