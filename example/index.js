import readline from "readline";
import {
  reverseString,
  countSubstringOccurrences,
  deepMerge,
  formatDateInTimezone,
} from "superutil";

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
    "Choose one option:" +
      "\n1. Reverse a string" +
      "\n2. Count the number of sub-string in a string" +
      "\n3. Deep Merge two objects" +
      "\n4. Format a date with your timezone" +
      "\nChoose-> ",
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
        case "3":
          try {
            const targetObj = await takeInput(
              "Enter the first object as JSON format: "
            );
            const sourceObj = await takeInput(
              "Enter the second object as JSON format: "
            );

            const mergedObj = deepMerge(
              JSON.parse(targetObj),
              JSON.parse(sourceObj)
            );
            console.log("target ", JSON.parse(targetObj));
            console.log("source ", JSON.parse(sourceObj));
            console.log("merged object: ", mergedObj);
          } catch (error) {
            console.log(error);
          }

          rl.close();
          break;
        case "4":
          const inputDate = await takeInput("Enter a Date: ");
          const inputTimeZone = await takeInput(
            "Enter your preffered timezone: "
          );

          const date = new Date(inputDate);
          const timezone = inputTimeZone;

          console.log("formatted date: ", formatDateInTimezone(date, timezone));

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
