
const Employee = require("./employee");


test("Creating an Employee", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});
test("Naming an employee", () => {
  const name = "Peter";
  const newName = new Employee(name);
  expect(newName.fullName).toBe(name);
});
test("Setting employee id", () => {
  const testValue = 100;
  const newEmployee = new Employee("SetID", testValue);
  expect(newEmployee.id).toBe(testValue);
});
test("Adding email address", () => {
  const testValue = "test@test.com";
  const newEmployee = new Employee("EmailSet", 1, testValue);
  expect(newEmployee.email).toBe(testValue);
});
test("Can get name using getName()", () => {
  const testValue = "Bob";
  const newEmployee = new Employee(testValue);
  expect(newEmployee.getName()).toBe(testValue);
});
test("Can get employee id using getId()", () => {
  const testValue = 100;
  const newEmployee = new Employee("GotID", testValue);
  expect(newEmployee.getId()).toBe(testValue);
});
test("Can get email address using getEmail()", () => {
  const testValue = "test@test.com";
  const newEmployee = new Employee("GotEmail", 1, testValue);
  expect(newEmployee.getEmail()).toBe(testValue);
});
test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const newEmployee = new Employee("Bob", 1, "test@test.com");
  expect(newEmployee.getRole()).toBe(testValue);
});