// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const async = require("async");
// TODO: Create an array of questions for user input
// const questions = [
function getUserInput() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is your user name for git repository?",
        name: "username",
        default: "git repository",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email address",
      },
      {
        type: "input",
        message: "What is your project name?",
        name: "project name",
      },
      {
        type: "input",
        message: "What is the short description of the project?",
        name: "description",
      },
      {
        type: "list",
        message: "What licenses does the project have?",
        name: "license",
        choices: ["MIT", "Apache 2.0", "GNU 3.0", "BSD 3", "CDDL 1.0", "Mozilla 2.0", "Eclipse 2.0", "None"],
      },
      {
        type: "input",
        message: "What command should you run to install dependencies?",
        name: "package",
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
      },
    ])
    .then((response) =>
      response.confirm === response.password
        ? console.log("Success!")
        : console.log("Your application has error?!")
    );
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  FileSystem.writeFile(fileName, data, function (err) {
    if (err) {
      console.error(err);
    }
  });
}
// TODO: Create a function to initialize app
async function init() {
  try {
    const userInputInfo = await getUserInput();
    generateMarkdown(userInputInfo);
    writeToFile('README.md', generateMarkdown(userInputInfo));
  } catch (err) {
    console.log(err);
  }
}
// Function call to initialize app
init();
