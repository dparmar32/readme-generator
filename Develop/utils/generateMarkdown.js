// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)]`;
  }
  if (license == "Apache 2.0") {
    return `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-yellow.svg)]`;
  }
  if (license == "GNU 3.0") {
    return `[![License: GNU 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
  }
  if (license == "BSD 3") {
    return `[![License: BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`;
  }
  if (license == "CDDL") {
    return `[![License: CDDL 1.0](https://img.shields.io/badge/License--CDDL-1.0-red.svg)]`;
  }
  if (license == "Mozilla 2.0") {
    return `[![License: Mozilla 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
  }
  if (license == "Eclipse 2.0") {
    return `[![License: Eclipse 2.0](https://img.shields.io/badge/License--Eclipse-2.0-yellow.svg)]`;
  } else {
    return "";
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// licenses : https://opensource.org/licenses/category
function renderLicenseLink(license) {
  if (license == "MIT") {
    return "https://opensource.org/licenses/MIT";
  }
  if (license == "Apache") {
    return "https://opensource.org/licenses/Apache-2.0";
  }
  if (license == "GNU") {
    return "https://opensource.org/licenses/GPL-3.0";
  }
  if (license == "BSD") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  }
  if (license == "CDDL") {
    return "https://opensource.org/licenses/CDDL-1.0";
  }
  if (license == "Mozilla Public") {
    return "https://opensource.org/licenses/MPL-2.0";
  }
  if (license == "Eclipse") {
    return "https://opensource.org/licenses/EPL-2.0";
  } else {
    return "";
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `${license}\n${renderLicenseLink(license)}`;
  } else {
    return '';
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## Questions
  You can reach me at ${data.email}.
  You can also view more projects at ${data.github}.
`;
}
module.exports = generateMarkdown;
