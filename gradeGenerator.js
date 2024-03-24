const prompt = require("prompt-sync")({ sigint: true }); 

const marks = prompt("Please enter your marks: "); // Get user input
// Define our function that works out our grade
function calculateStudentGrade(marks) {
  let grade;
  if (marks < 40) {
    grade = 'E';
  } else if (marks <= 49) { 
    grade = 'D';
  } else if (marks <= 59) {
    grade = 'C';
  } else if (marks <= 79) {
    grade = 'B';
  } else {
    grade = 'A';
  }
  return grade; // Return the calculated grade
}

const calculatedGrade = calculateStudentGrade(marks); // Call the function

const gradeMessage = `With a mark of ${marks}, you have a grade of ${calculatedGrade}`; // Fix typo
console.log(gradeMessage); // Print the grade message