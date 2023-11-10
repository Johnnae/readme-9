//  Include packages needed for this application
const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
// array of questions for user input
const questions = [ 
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a brief description of your project.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'what are the steps required to install your project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use.'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license would you like to use?',
    choices: ['MIT','Apache','GPL','BSD','ISC','GNU','None']
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What are the contribution guidelines?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions?'
  },
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
      
      
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// function to initialize app
function init() { 
    inquirer.prompt(questions).then(res =>{
        console.log("make read me")
        writeToFile("./output/README.md",generateMarkdown({...res}))
    })
}

// Function call to initialize app
init();
