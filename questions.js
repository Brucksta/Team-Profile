const inquirer = require('inquirer');
const Employee = require('./employee.js');
const Manager = require('./manager.js');
const Engineer = require('./engineer.js');
const Intern = require('./intern.js');
const render = require('./template.js');
const fs = require("fs");


const MANAGER = "MANAGER"
const ENGINEER = "ENGINEER"
const INTERN = "INTERN"

const PEOPLE = []

const promptType = inquirer.prompt([
    {
    name: 'UserType',
    type: 'list',
    message: 'Would you like to add a manager, engineer or intern',
    choices: [
        {name: "Manager", value: "MANAGER"},
        {name: "Engineer", value: "ENGINEER"},
        {name: "Intern", value: "INTERN"},
    ]
    },
    {
        type: 'input',
        name: 'managername',  
        message: 'What is the name of your team manager?',
        when: (answers) => answers.UserType === MANAGER
      },
      {
        type: 'input',
        name: 'managerid',
        message: 'What is your team managers employee ID?',
        when: (answers) => answers.UserType === MANAGER
      },
      {
        type: 'input',
        name: 'manageremail',
        message: 'What is your team managers email address?',
        when: (answers) => answers.UserType === MANAGER
    
      },
      {
        type: 'input',
        name: 'managerphnumber',
        message: 'What is your team managers office number?',
        when: (answers) => answers.UserType === MANAGER
      },
      // {
      //   type: 'input',
      //   name: 'createNew',
      //   message: 'would you like to add another employee?',
      //   when: (answers) => answers.UserType === MANAGER
      // },
      {
        type: 'input',
        name: 'engineersname',  
        message: 'What is the name of your Engineer?',
        when: (answers) => answers.UserType === ENGINEER
      },
      {
        type: 'input',
        name: 'engineersid',
        message: 'What is your Engineers employee ID?',
        when: (answers) => answers.UserType === ENGINEER
      },
      {
        type: 'input',
        name: 'engineersemail',
        message: 'What is your Engineers email address?',
        when:  (answers) => answers.UserType === ENGINEER
      },
      {
        type: 'input',
        name: 'engineersgithub',
        message: 'What is your Engineers Github username?',
        when: (answers) => answers.UserType === ENGINEER
      },
      {
        type: 'input',
        name: 'internsname',  
        message: 'What is the name of your Intern?',
        when: (answers) => answers.UserType === INTERN
      },
      {
        type: 'input',
        name: 'internsid',
        message: 'What is your Interns employee ID?',
        when: (answers) => answers.UserType === INTERN
      },
      {
        type: 'input',
        name: 'internsemail',
        message: 'What is your Interns email address?',
        when: (answers) => answers.UserType === INTERN
      },
      {
        type: 'input',
        name: 'internsschool',
        message: 'What is your Interns School?',
        when: (answers) => answers.UserType === INTERN
      },
])


    
 //outputting answers to manager/engineer/intern class or ask again 
.then((answers) => {
     if (answers.UserType = MANAGER) {
         PEOPLE.push(new Manager(answers.managername, answers.managerid, answers.manageremail, answers.managerphnumber))
     }
     if (answers.UserType = ENGINEER){
       PEOPLE.push(new Engineer(answers.engineersname, answers.engineersid, answers.engineersemail, answers.engineersgithub))
     }
     if (answers.UserType = INTERN){
      PEOPLE.push(new Intern(answers.internsname, answers.internsid, answers.internsemail, answers.internsschool))
    }
     if (answers.createNew) {
         init();
     }
     return PEOPLE
 })
 
//  .then(() => console.log(PEOPLE))
 .then((answers) => {
   console.log(answers)
  const htmlContent = render(answers)

      fs.writeFile('answers.html', htmlContent, (err) =>
        err ? console.log(err) : console.log('Successfully created readme.html!')
      );
    });
//  exports.prompt = prompt
// const init = () =>
// promptType().
