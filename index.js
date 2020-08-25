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
        "APACHE 2.0",
        "BSD 3",
        "GPL 3.0",
        "MIT",
        "None",
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
  var badges =[{
    name: "APACHE 2.0", 
    image: "[![License: APACHE 2.0](https://img.shields.io/badge/License-APACHE%202.0-red.svg)]",
    url: "https://opensource.org/licenses/APACHE-2.0"
  },
  {
    name: "BSD 3",
    image: "[![License: BSD 3](https://img.shields.io/badge/License-BSD%203-green.svg)]",
    url: "https://opensource.org/licenses/BSD-3-Clause"
  },
  {
    name: "GPL 3.0",
    image: "[![License: GPL 3.0](https://img.shields.io/badge/License-GPL%203.0-purple.svg)]",
    url: "https://opensource.org/licenses/GPL-3.0"
  },
  {
    name: "MIT",
    image: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
    url: "https://opensource.org/licenses/MIT"
  },
  {
    name: "None",
    image: "[![License: None](https://img.shields.io/badge/license-None-blue.svg)]",
    url: "https://opensource.org/osd-annotated"
  },
];


  var badge;
  if (data.license === "APACHE 2.0"){
      badge = badges[0]
  }
  else if (data.license === "BSD 3"){
      badge = badges[1]
  }
  else if (data.license === "GPL 3.0"){
      badge = badges[2]
  }
  else if (data.license === "MIT"){
      badge = badges[3]
}
  else (badge = badges[4]);



  fs.writeFile(filename, 
    `# ${data.title.toUpperCase()}
  ${badge.image}(${badge.url})
  ## Description
  ${data.description}
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  ## Installation
  ${data.install}
  ## License
  The Linces type chosen for this app is:

  **${badge.name}**
  
  For more details on this license type please use the following link: 

  ${badge.url}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any questions please feel free to contact me via the links below:
  * GitHub: [${data.userName}](https://github.com/${data.userName})
  * E-Mail: ${data.email}`
    , function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Completed!");

  });
});