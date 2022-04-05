const inquirer = require("inquirer");
const fs = require("fs");
// function checkInput(input) {
//   if (input.length > 0) {
//     return true;
//   } else {
//     return "This line can not be empty";
//   }
// }
// TODO: Create an array of questions for user input
// const questions = () ;
return inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of your project?",
      name: "projectTitle",
      //   validate: checkInput(),
    },
    {
      type: "input",
      message: "Please Provide a description of your project:",
      name: "description",
      validate: (input) => {
        if (input.length > 0) {
          return true;
        } else {
          return "This line can not be empty";
        }
      },
    },
    {
      type: "input",
      message: "Please provide your installation instructions:",
      name: "installation",
    },
    {
      type: "list",
      message: "Chose the appropriate license for this project:",
      name: "license",
      choices: ["Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
    },
    {
      type: "input",
      message: "Did anyone help with this project?",
      name: "credits",
    },
    {
      type: "input",
      message: "How would you like users to contribute to this application?",
      name: "contributing",
    },
    {
      type: "input",
      message: "Please provide your GitHub username:",
      name: "username",
    },

    {
      type: "input",
      message: "Please provide your E-mail address:",
      name: "eMail",
    },
  ])
  .then((response) => {
    console.log(response);

    // use response variable to build string
    const readMeString = buildReadMe(response);
    fs.appendFile("README.md", readMeString, {}, (err) => {
      console.log(err);
    });
  });
/**
 * This takes an object an returns a string
 * @param {Object} response
 * @returns
 */
function buildReadMe(response) {
  return `# ${response.projectTitle}

    ## Description;
   
    ${response.description}
   
    ## Table of Contents
   
    Below are the table of contents for this application:
   
   - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [License](#license)
    - [Questions](#questions)
   
    ## Installation
   
   Below are the instructions for the installation process of this project:
   ${response.installation}
   
   ## Usage
   
   Provide instructions and examples for use. Include screenshots as needed.
   
    To add a screenshot, create an "assets/images" folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
   
   ## Contributing
   
   Please see the following ways to contribute to this application via the developer's request:
   ${response.contributing}
   
   ## License
   
   This project is based around the following license: ${response.license} <br/>
   Please respect all aspects of this license.
   
   ---
   
   ## Questions
   
   For any questions regarding this project please feel free to each out to me on GitHub @ https:github.com/${response.username} or contact me personally via E-mail: ${response.eMail}`;
}

// //   usage information, contribution guidelines, and test instructions
// // TODO: Create a function to write README file
// // function writeToFile(fileName, data) {}

// // fs.appendFile('README.md', `${process.argv[2]}\n`, (err)

// // TODO: Create a function to initialize app
// // function init() {}

// // // Function call to initialize app
// // init();
