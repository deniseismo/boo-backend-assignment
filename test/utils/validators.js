import { expect } from "chai";

export const validateNotEmpty = (received) => {
  expect(received).to.not.be.null;
  expect(received).to.not.be.undefined;
};

export const validateEquality = (received, expected) => {
  expect(received).to.equal(expected);
};
