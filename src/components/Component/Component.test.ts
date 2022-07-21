import Component from "./Component";

describe("Given a Component component", () => {
  describe("When intantiated with a div as a parent and 'main' as tag", () => {
    test("Then it should show a main", () => {
      const container = document.createElement("div");
      const classname = "test";

      new Component(container, "main", classname);

      expect(container.querySelector("main")).not.toBeNull();
    });
  });

  describe("When instantiated with a div as a parent and 'section' as tag", () => {
    test("Then it should blablabla", () => {
      const container = document.createElement("div");
      const classname = "test";

      new Component(container, "section", classname);

      expect(container.querySelector("section")).not.toBeNull();
    });
  });
});
