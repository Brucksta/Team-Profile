const Employee = require('./employee.js')

class Engineer extends Employee {
    constructor(fullName, id, email, github) {
      super(fullName, id, email)
        this.github = github
    }
  }

  module.exports = Engineer