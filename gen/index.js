//  Include packages needed for this application
const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
// array of questions for user input
const questions = [ 
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      }, 
      {
        type: 'input',
        name: 'User Story',
        message: 'What is your User Story?'
      }, 
      {
        type: 'input',
        name: 'Link',
        message: 'What is your link to finished app?'
      },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// function to initialize app
function init() { 
    inquirer.prompt(questions).then(res =>{
        console.log("make read me")
        writeToFile("README.md",generateMarkdown({...res}))
    })
}

// Function call to initialize app
init();
