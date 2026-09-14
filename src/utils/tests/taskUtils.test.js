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
      //assert
      const result = validateTitle(Input);
      //act
      expect(result).toBe(expectedError);
    });
    test("error if title is empty and contains spaces only", () => {
      //arrange
      const Input = "   ";
      const expectedError = "Skriv en uppgift innan du fortsätter.";
      //assert
      const result = validateTitle(Input);
      //act
      expect(result).toBe(expectedError);
    });
  });
});
