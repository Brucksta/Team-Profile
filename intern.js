const Employee = require('./employee.js')

class Intern extends Employee {
    constructor(fullName, id, email, school) {
      super(fullName, id, email)
        this.school = school
    }
  }

  module.exports = Intern