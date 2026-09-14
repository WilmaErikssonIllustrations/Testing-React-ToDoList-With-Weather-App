import { describe, expect, test } from "vitest";
import {
  validateTitle,
  filterTasks,
  countActiveTasks,
  countCompletedTasks,
} from "../taskUtils";

describe("taskUtils", () => {
  describe("validateTitle", () => {
    test("error if title is empty string", () => {
      //arrange
      const Input = "";
      const expectedError = "Skriv en uppgift innan du fortsätter.";
      //act
      const result = validateTitle(Input);
      //assert
      expect(result).toBe(expectedError);
    });
    test("error if title is empty and contains spaces only", () => {
      //arrange
      const Input = "   ";
      const expectedError = "Skriv en uppgift innan du fortsätter.";
      //act
      const result = validateTitle(Input);
      //assert
      expect(result).toBe(expectedError);
    });
    test("return empty string if title is correct", () => {
      //arrange
      const Input = "tala med Olle om försäkringen";
      //act
      const result = validateTitle(Input);
      //assert
      expect(result).toBe("");
    });
  });
});
