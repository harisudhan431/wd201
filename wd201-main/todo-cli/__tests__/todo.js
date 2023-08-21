/* eslint-disable no-undef */
let TodoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = TodoList();
describe("Todo test cases", () => {
  beforeAll(() => {
    let today = new Date();
    let one_Day = 60 * 60 * 24 * 1000;
    [
      {
        title: "Wd201 Node.js",
        completed: false,
        dueDate: new Date(today.getTime() - 1 * one_Day).toISOString().slice(0, 10),
      },
      {
        title: "Wd201 l2",
        completed: false,
        dueDate: new Date().toISOString().slice(0, 10),
      },
      {
        title: "Wd201 todoList",
        completed: false,
        dueDate: new Date(today.getTime() + 1 * one_Day).toISOString().slice(0, 10),
      },
    ].forEach(add);
  });
  test("Add new todo", () => {
    expect(all.length).toEqual(3);

    add({
      title: "Take the test",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });

    expect(all.length).toEqual(4);
  });

  test("Todo mark as complete", () => {
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });

  test("Test for overdue", () => {
    expect(overdue().length).toEqual(1);
  });

  test("Test due today", () => {
    expect(dueToday().length).toEqual(2);
  });

  test("Test for due later", () => {
    expect(dueLater().length).toEqual(1);
  });
});