const User = require("./User");

test("User is valid whith data", () => {
  const user = new User(
    "Loris",
    "Laurenti",
    "lloris19@outlook.fr",
    new Date(2004, 1, 1)
  );
  expect(user.isValid()).toBe(true);
});

test("User is valid whith data", () => {
  const user = new User(
    "Loris",
    null,
    "lloris19@outlook.fr",
    new Date(2004, 1, 1)
  );
  expect(user.isValid()).toBe(false);
});

test("User is valid whith data", () => {
  const user = new User(
    "Loris",
    "Laurenti",
    "lloris19@com",
    new Date(2004, 1, 1)
  );
  expect(user.isValid()).toBe(false);
});

test("User is valid whith data", () => {
  const user = new User(
    "Loris",
    "Laurenti",
    "lloris19@outlook.fr",
    new Date(2023, 1, 1)
  );
  expect(user.isValid()).toBe(false);
});
