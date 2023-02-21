const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const licenseBadges = {
    MIT: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    GPLv3: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    Apache: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    Unlicense: 'https://img.shields.io/badge/license-Unlicense-blue.svg'
  };

// array of questions for user

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a brief description of your project:'
        },
        {
            type: 'input',
            name: 'video',
            message: 'Enter the URL of a video demonstrating your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use:'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide guidelines for how other developers can contribute to your project:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide examples of how to run tests:'
        },
        {
            type: 'input',
            name: 'video',
            message: 'Enter the URL of a video demonstrating your project:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project:',
            choices: ['MIT', 'GPLv3', 'Apache', 'Unlicense']
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
        }
    ]).then((data) => {
        // Generate README file using data from user input
        const licenseBadge = `![${data.license} License](${licenseBadges[data.license]})`;//for badge
        const readmeText = generateMarkdown(data);
        const filePath = path.join(__dirname, 'README.md');
        // function to write README file
        fs.writeFile('README.md', readmeText, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('README file generated successfully!');
            }

        });


    });

// function to initialize program
function init() {

}

// function call to initialize program
init();
