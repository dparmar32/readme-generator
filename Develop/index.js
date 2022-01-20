// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const userQuestions = [
  {
    type: "input",
    message: "What is your user name for git repository?",
    name: "username",
    default: "dparmar32",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    default: "drashteeparmar@gmail.com",
  },
  {
    type: "input",
    message: "What is your project name title?",
    name: "projectName",
    default: "README Generator",
  },
  {
    type: "input",
    message: "What is your project used for?",
    name: "usage",
    default: "homework readme generator",
  },
  {
    type: "input",
    message: "What is the short description of the project?",
    name: "description",
    default: "This project is about generating readme file",
  },
  {
    type: "list",
    message: "What licenses does the project have?",
    name: "license",
    choices: [
      "MIT",
      "Apache 2.0",
      "GNU 3.0",
      "BSD 3",
      "CDDL 1.0",
      "Mozilla 2.0",
      "Eclipse 2.0",
      "None",
    ],
  },
  {
    type: "input",
    message: "What command should you run to install dependencies?",
    name: "installation",
    default: "npm i",
  },
  {
    type: "input",
    message: "What kind of command do you run for testing this project?",
    name: "test",
    default: "npm test",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "contribution",
    default: "Please feel free to reach out on Github.",
  },
];
//     .then((response) =>
//       response.confirm === response.password
//         ? console.log("Success!")
//         : console.log("Your application has error?!")
//     );
// };
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("README file has been created......");
  });
}
// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(userQuestions)
    .then((userAnswers) =>
      writeToFile("README.md", generateMarkdown(userAnswers))
    );
}
// Function call to initialize app
init();
