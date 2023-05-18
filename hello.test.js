const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("CI/CD en su maxima expresion, actualizammos local y se refleja en Cloud AWS");
  });
});
