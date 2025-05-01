const { caesarCipherLogic } = require("./script");

test("fails if output-text is not converting capital letters", () => {
  expect(caesarCipherLogic("capitalLetters", 3, "right")).toBe(false); // this might still fail for logic reasons, which is fine in red phase
});

test("shifts lowercase letters correctly", () => {
  expect(caesarCipherLogic("abc", 1, "right")).toBe("bcd");
  expect(caesarCipherLogic("xyz", 2, "right")).toBe("zab");
});

test("shifts capital letters correctly and returns lowercase", () => {
  expect(caesarCipherLogic("ABC", 1, "right")).toBe("bcd");
});

test("does not change punctuation or numbers", () => {
  expect(caesarCipherLogic("a! b2", 1, "right")).toBe("b! c2");
});