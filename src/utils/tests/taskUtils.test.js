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
  describe("filterTasks", () => {
    test("return all tasks when filter after all has been clicked", () => {
      //arrange
      const mockTasks = [
        { id: 1, title: "Aktiv uppgift", completed: false },
        { id: 2, title: "Klar uppgift", completed: true },
      ];
      const selectedFilter = "all";
      //act
      const result = filterTasks(mockTasks, selectedFilter);
      //assert
      expect(result).toHaveLength(2);
    });
    test("return completed tasks when filter after completed has been clicked", () => {
      //arrange
      const mockTasks = [
        { id: 1, title: "Aktiv uppgift", completed: false },
        { id: 2, title: "Klar uppgift", completed: true },
      ];
      const selectedFilter = "completed";
      //act
      const result = filterTasks(mockTasks, selectedFilter);
      //assert
      expect(result).toHaveLength(1);
      expect(result[0].completed).toBe(true);
    });
    test("return active tasks when filter after active has been clicked", () => {
      //arrange
      const mockTasks = [
        { id: 1, title: "Aktiv uppgift", completed: false },
        { id: 2, title: "Klar uppgift", completed: true },
      ];
      const selectedFilter = "active";
      //act
      const result = filterTasks(mockTasks, selectedFilter);
      //assert
      expect(result).toHaveLength(1);
      expect(result[0].completed).toBe(false);
    });
    test("returns empty array when filtering an empty task list", () => {
      // arrange
      const mockTasks = [];
      const selectedFilter = "active";
      // act
      const result = filterTasks(mockTasks, selectedFilter);
      // assert
      expect(result).toEqual([]);
    });
    test("returns 0 active tasks when list is empty", () => {
      // arrange
      const mockTasks = [];
      // act
      const activeCount = countActiveTasks(mockTasks);
      // assert
      expect(activeCount).toBe(0);
    });
  });
  describe("task count functions", () => {
    test("count correct number of active tasks", () => {
      //arrange
      const mockTasks = [
        { id: 1, completed: false },
        { id: 2, completed: false },
        { id: 3, completed: true },
      ];
      //act
      const activeCount = countActiveTasks(mockTasks);
      //assert
      expect(activeCount).toBe(2);
    });
    test("count correct number of completed tasks", () => {
      //arrange
      const mockTasks = [
        { id: 1, completed: false },
        { id: 2, completed: false },
        { id: 3, completed: true },
      ];
      //act
      const completedCount = countCompletedTasks(mockTasks);
      //assert
      expect(completedCount).toBe(1);
    });
  });
});
