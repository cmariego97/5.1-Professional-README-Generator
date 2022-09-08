// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your project\'s name?',
            name: 'projectName',
        },
        {
            type: 'input',
            message: 'Please write a short description of your project?',
            name: 'description',
        },
        {
            type: 'list',
            message: 'What kind of license should your project have?',
            choices: ['Apache', 'CC', 'GPLv3', 'GPLv2', 'ISC', 'MIT', 'WTFPL', 'N/A'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            name: 'installation',
            default: '',
        },
        {
            type: 'input',
            message: 'What command should be run to run tests?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What does the user need to know about using the repo?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What does the user need to know about contributing to the repo?',
            name: 'contribution',
        },
]

// console.log array of questions
console.log(questions);

// userAnswers (answers??)
const userAnswers = (answers) => {
    inquirer.prompt(questions)
    .then()
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('success! README generated!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    //TODO: what is userAnswers???
    .then(function (userAnswers) {
        console.log(userAnswers);

        // calling writeToFile function
        writeToFile("README.md", generateMarkdown, userAnswers);
    });
}

// Function call to initialize app
init();
