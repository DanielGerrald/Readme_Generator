var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
  {
    type: "input",
    message: "What is the Title of this Readme?",
    name: "title",
  },
  {
    type: "Description",
    message: "Please provide a short description for this Readme.",
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps needed to install?",
    name: "install",
  },
{
    type: "input",
    message: "What is this app used for?",
    name: "usage",
},
{
    type: "list",
    message: " Please choose a license.",
    name: "license",
    choices: [
        "Eclipse Public License 1.0",
        "The MIT License",
        "Mozilla Public License 2.0",
        "The Unlicense",
    ]
},
{
    type: "input",
    message: "What are the contribution guidelines?",
    name: "contribution"
},
{
    type: "input",
    message: "What are the testing instructions?",
    name: "tests",
},
{
    type: "input",
    message: "Please enter your Github username.",
    name: "userName",
},
{
    type: "input",
    message: "Please enter your email address.",
    name: "email",
}
]).then(function(data) {

  var filename = data.title.toLowerCase().split(' ').join('') + ".md";
  var badge;
  if (data.license === "Eclipse Public License 1.0"){
      badge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  }
  else if (data.license === "The MIT License"){
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if (data.license === "Mozilla Public License 2.0"){
      badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
  else (badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)")

  fs.writeFile(filename, 
    "# " + data.title.toUpperCase() + "\n" + badge + "\n" +
    "## Description" + "\n" + data.description + "\n" + 
    "## Table of Contents" + "\n" + 
    "1. [Installation](#installation)" + "\n" + 
    "2. [Usage](#usage)" + "\n" +
    "3. [License](#license)" + "\n" +
    "4. [Contributing](#contributing)" + "\n" +
    "5. [Tests](#tests)" + "\n" +
    "6. [Questions](#questions)" + "\n" +
    "## Installation" + "\n" + data.install + "\n" +
    "## Usage" + "\n" + data.usage + "\n" +
    "## License" + "\n" + "The Linces type chosen for this app is:  " + "**"+data.license+"**" + "\n" +
    "## Contributing" + "\n" + data.contribution + "\n" +
    "## Tests" + "\n" + data.tests + "\n" +
    "## Questions" + "\n" + 
    "If you have any questions please feel free to contact me via the links below: " + "\n" +
    "* GitHub: " + "["+data.userName+"](https://github.com/"+data.userName+")" + "\n" +
    "* E-Mail: " + data.email
    , function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Completed!");

  });
});