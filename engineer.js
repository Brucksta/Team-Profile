const Employee = require('./employee.js')

class Engineer extends Employee {
    constructor(fullName, id, email, github) {
      super(fullName, id, email)
        this.github = github
    }
    getGithub() {
      return this.github
    }
    getRole() {
      return "Engineer"
    }
  }

  module.exports = Engineer