import FilmCard from "./FilmCard";
import films from "../../series";

describe("Given a component FilmCard", () => {
  describe("When instantiated with a body as parent", () => {
    test("Then return an Element HTML li", () => {
      const parent = document.querySelector("body");
      const filmData = films[0];

      new FilmCard(parent, filmData);

      expect(document.querySelector("li")).not.toBeNull();
    });
  });
});
