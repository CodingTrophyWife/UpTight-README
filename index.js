// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "Title"
    },
    {
        type: "input",
        message: "What is your project about?",
        name: "Description",
    
    },
    {
        type: "input",
        message: "How would a user install this program?",
        name: "Table of contents",
      
    },
    {
        type: "input",
        message: "How would a user install this program?",
        name: "Installation",
      
    },
    {
        type: "input",
        message: "How would a user use this program?",
        name: "Usage"
    },
    {
        type: "checkbox",
        message: "Please choose a license",
        name: "License",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
      
    },
    {
        type: "input",
        message: "Is there anyone you want to give a shout out to for helping you?",
        name: "ShoutOuts",
    
    },
    {
        type: "input",
        message: "Please explain how users may test your application",
        name: "Tests",
      
    },
    {
        type: "input",
        message: "Please list instructions for those who wish to contact you",
        name: "Questions",
      
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "Username",
      
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
      
    } 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();










// inquirer.prompt([
//   .then((response) => {
//     var readme = "# " + response.Title + "\n\n";
//     readme += response.Description + "\n\n";
//     readme += "## Installation \n";
//     readme += response.Installation + "\n\n";
//     readme += "## ShoutOuts \n";
//     readme += response.ShoutOuts + "\n\n";
//     readme += "## Usage \n";
//     readme += response.Usage + "\n\n";
//     readme += "##License \n";
//     readme += response.License + "\n\n";

//     fs.writeFile('readme.md', readme, (err) => {
//         err ? console.error(err) : console.log('Success!')
//     });
// });
