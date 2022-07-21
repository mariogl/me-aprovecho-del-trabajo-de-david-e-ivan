import FilmCard from "./FilmCard";
import films from "../../series";

describe("Given a component FilmCard", () => {
  const parent = document.querySelector("body");
  const filmData = films[0];
  describe("When instantiated with a body as parent", () => {
    test("Then return an Element HTML li", () => {
      new FilmCard(parent, filmData);

      expect(document.querySelector("li")).not.toBeNull();
    });
  });

  describe("When it calls the method addImage", () => {
    test("Then create a new HTML element as img", () => {
      const filmCard = new FilmCard(parent, filmData);
      const image = document.createElement("img");

      filmCard.element.appendChild(image);

      expect(document.querySelector("img")).not.toBe(null);
    });
  });
});
