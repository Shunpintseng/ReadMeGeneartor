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
        type:"input",
        name: "description",
        message: "Please provide a short description of your readme?"
    },
    
    {
        type:"checkbox",
        name: "tableOfContents",
        choices: ["Installation","Usage","License","Contributing","Tests","Questions"]
    },
    

];

inquirer.prompt(questions)
.then(function(answers){
const userReadMe = generateReadMe(answers)
    fs.writeFile("readme.md",userReadMe, function(err){
        if(err){
            return console.log(err)
        }
        console.log("done")
    })

})

function generateReadMe(answers){
    let listOfOptions = "";

    answers.tableOfContents.forEach (lolo => listOfOptions += lolo+"\r\n\r\n");
    

    
    return `    
    # ${answers.title}

    //Name of project
    
    ## Table of Contents
    
    ${listOfOptions}
    
    ## Description
    
    ${answers.description}
    
    ## Installation
    
    //user Input
    
    ## Usage
    
    //user input
    
    ## License
    
    //add license options for application
    
    ## Contributing
    Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
    
    Please make sure to update tests as appropriate.
    
    ## Tests
    
    //user input
    
    ## Questions
    
    //user input git hub profile 
    //user input email address`
}







// // // function to write README file
// function writeToFile(fileName, data) {
// }

// // // function to initialize program
// function init() {

// }






// // function call to initialize program
// init();


//npm init

//install my dependencies 

// need - inquirer, fs

// create an array of questions - through inquire propmt

//gerenrate a template file. write a readme in a markdown file as a template

// function that will generate my readme template

// use inquirer to propmt users with questions

// use answers that come back from inquirer - pass into my generate readme function

//write file using tempate generated from readme function

