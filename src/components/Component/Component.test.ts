import Component from "./Component";

describe("Given a Component component", () => {
  describe("When intantiated with document.body as a parent and 'div' as tag", () => {
    test("Then it should return a div as a child", () => {
      const tag = document.createElement("div");
      const classname = "test";

      new Component(document.body, "div", classname);

      expect(document.appendChild(tag)).not.toBeNull();
    });
  });
});
