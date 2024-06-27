import inquirer from "inquirer"
import chalk, { chalkStderr } from "chalk"

console.log(chalk.bgGreen("\nWelcome to myQuiz CLI App\n"));


const quiz: {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
} = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "What is the correct way to check if two values are not equal in TypeScript?",
        choices: ["a == b", "a === b", "a = b", "a !== b"]
    },
    {
        name: "question_2",
        type: "list",
        message: "What is TypeScript primarily used for?",
        choices: ["A) Front-end web development", "B) Back-end server scripting", "C) Mobile application development", "D) JavaScript code analysis and enhancement"]
    },
    {
        name: "question_3",
        type: "list",
        message: "TypeScript provides which of the following advantages over JavaScript?",
        choices: ["A) Optional static typing", "B) Automatic memory management", "C) Built-in UI components", "D) Integrated database connectivity"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Which of the following statements about TypeScript is true?",
        choices: ["A) It compiles to native machine code.", "B) It is a superset of JavaScript.", "C) It requires a specific IDE for development.", "D) It only supports asynchronous programming."]
    },
    {
        name: "question_5",
        type: "list",
        message: "TypeScript code is ultimately compiled into which language before execution?",
        choices: ["A) JavaScript", "B) Python", "C) Java", "D) C++"]
    },   
]);

let score: number = 0;

switch (quiz.question_1){
    case "a !== b":
        console.log("Q 1. Correct!");
        ++score;
        break;
        default:
            console.log("Q 1. Incorrect");
}
switch (quiz.question_2){
    case "A) Front-end web development":
        console.log("Q 2. Correct!");
        ++score;
        break;
        default:
            console.log("Q 2. Incorrect");
}
switch (quiz.question_3){
    case "A) Optional static typing":
        console.log("Q 3. Correct!");
        ++score;
        break;
        default:
            console.log("Q 3. Incorrect");
}
switch (quiz.question_4){
    case "B) It is a superset of JavaScript.":
        console.log("Q 4. Correct!");
        ++score;
        break;
        default:
            console.log("Q 4. Incorrect");
}
switch (quiz.question_5){
    case "A) JavaScript":
        console.log("Q 5. Correct!");
        ++score;
        break;
        default:
            console.log("Q 5. Incorrect");
}

console.log(chalk.white(`Score: ${score}`));

if (score >= 3) {
    console.log(chalk.bgGreenBright("You Passed"));
} else {
    console.log(chalk.bgRedBright("You Failed."));
}