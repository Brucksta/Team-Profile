const Employee = require('./employee.js')

class Manager extends Employee {
    constructor(fullName, id, email, officeNumber) {
      super(fullName, id, email); 
      this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
      return this.officeNumber
    }

    getRole() {
      return "Manager"
    }
  }

  const manager = new Manager('peter', 1, "peterb@gmail.com", 0431149676)

module.exports = Manager
