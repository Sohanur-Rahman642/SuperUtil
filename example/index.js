import readline from "readline";
import { reverseString, countSubstringOccurrences } from "superutil";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function takeInput(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

function chooseOperation() {
  rl.question(
    "Choose one option:\n1. Reverse a string\n2. Count the number of sub-string in a string\nChoose-> ",
    async (option) => {
      switch (option.trim()) {
        case "1":
          const inputStr = await takeInput("Enter a string to reverse: ");
          console.log("Reversed string: ", reverseString(inputStr));
          rl.close();
          break;
        case "2":
          const str = await takeInput("Enter the first string: ");
          const subStr = await takeInput("Enter the sub-string: ");
          console.log(
            "Total number of substring presence is: ",
            countSubstringOccurrences(str, subStr)
          );
          rl.close();
          break;
        default:
          console.log("Invalid option. Please choose either 1 or 2.");
          chooseOperation();
      }
    }
  );
}

chooseOperation();
