// Include packages needed for this application
const fs = require('fs');
const inquirer  = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter Project Title: ",
        name: "title",
    },
    {
        type: "input",
        message: "Enter Project Description: ",
        name: "description",
    },
    {
        type: "input",
        message: "Enter Project Deployed Link: ",
        name: "link",
    },
    {
        type: "input",
        message: "Enter Project Installation Instruction: ",
        name: "instruction",
    },
    {
        type: "input",
        message: "Enter Project Usage Information: ",
        name: "information",
    },
    {
        type: "input",
        message: "Enter Project Contribution Guidelines: ",
        name: "guidlines",
    },
    {
        type: "input",
        message: "Enter Project Test Instruction: ",
        name: "test",
    },
    {
        type: "list",
        message: "Choose desired license for Application: ",
        choices: ['MIT', 'Mozilla Public License 2.0', 'Apache', 'No License'],
        name: "license",
    },
    {
        type: "input",
        message: "Enter Github Username: ",
        name: "username",
    },
    {
        type: "input",
        message: "Enter E-mail address: ",
        name: "email",
    },
     
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
                err ? console.error(err) : console.log('ReadMe successfully created')
                )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt (questions)
            .then((data) =>{
                const myReadme = generateMarkdown(data);
                writeToFile('README.md', myReadme);
            });
}

// Function call to initialize app
init();