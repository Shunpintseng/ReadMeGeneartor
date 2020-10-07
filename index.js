const inquirer = require("inquirer");
const fs = require("fs")
// array of questions for user
const questions = [
    {
        type:"input",
        name: "title",
        message: "what is your readme title?"
    },
       
    {
        type:"checkbox",
        name: "tableOfContents",
        choices: ["Description","Installation","Usage","License","Tests","Questions"]
    },

    {
        type:"input",
        name: "description",
        message: "Please provide a short description of your readme?"
    },

    {
        type:"input",
        name: "installation",
        message: "Please provide installation instruction?"
    },
    
    {
        type:"input",
        name: "usage",
        message: "What is the usage of this program?"
    },
    
    {
        type:"checkbox",
        name: "license",
        choices: ["[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)","[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)","[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)](http://perso.crans.org/besson/LICENSE.html)]"]
    },

    {
        type:"input",
        name: "Questions",
        message: "Are there anything you want to let the user know before running this application?"
    },

    {
        type:"input",
        name: "email",
        message: "What's your e-mail address"
    },

    {
        type:"input",
        name: "github",
        message: "What's your github username"
    },
    
];

inquirer.prompt(questions)
.then(function(answers){
const userReadMe = generateReadMe(answers)
    fs.writeFile("readme.md",userReadMe, function(err){
        
    })

})

function generateReadMe(answers){
   
    let listOfOptions = "";

    answers.tableOfContents.forEach (lolo => listOfOptions += lolo+"\r\n\r\n");
        
return `    
# ${answers.title}
       
## Table of Contents
    
${listOfOptions}
    
## Description
    
    ${answers.description}
    
## Installation
    
    ${answers.installation}
    
## Usage

    ${answers.usage}
       
## License

    ${answers.license}    
    
## Tests
    
## Questions

    ${answers.questions}  

    -Contact information:

### https://github.com/${answers.github}

    ${answers.email}`    
}