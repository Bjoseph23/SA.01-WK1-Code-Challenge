const prompt = require("prompt-sync")({ sigint: true });

function calculateMontlyPayee(grossSalary) {
  
  const salary = grossSalary; // I equated salary to grossSalary so that i could be able to use it in nhif & netSalary calculation. it only served this purpose)

  // Calculate Affordable Housing Levy (abreviation I used is 'ahl')
  const ahl = salary * 0.015 * 2; 
  // Calculate NHIF deduction
  let nhif;
  if (salary <= 5999) {
    nhif = 150;
  } else if (salary <= 7999) {
    nhif = 300;
  } else if (salary <= 11999) {
    nhif = 400;
  } else if (salary <= 14999) {
    nhif = 500;
  } else if (salary <= 19999) {
    nhif = 600;
  } else if (salary <= 24999) {
    nhif = 750;
  } else if (salary <= 29999) {
    nhif = 850;
  } else if (salary <= 34999) {
    nhif = 900;
  } else if (salary <= 39999) {
    nhif = 950;
  } else if (salary <= 44999) {
    nhif = 1000;
  } else if (salary <= 49999) {
    nhif = 1100;
  } else if (salary <= 59999) {
    nhif = 1200;
  } else if (salary <= 69999) {
    nhif = 1300;
  } else if (salary <= 79999) {
    nhif = 1400;
  } else if (salary <= 89999) {
    nhif = 1500;
  } else if (salary <= 99999) {
    nhif = 1600;
  } else if (salary === 0) {
    nhif = 0;
  } else {
    nhif = 1700;
  }

  // Calculate net salary (gross salary minus AHL and NHIF deductions)
  const netSalary = salary - (ahl + nhif);

  // Calculate PAYE tax based on net salary
  let payee;
  if (netSalary <= 24000) {
    payee = 0.1 * netSalary;
  } else if (netSalary <= 32333) {
    payee = 0.25 * netSalary;
  } else if (netSalary <= 500000) {
    payee = 0.3 * netSalary;
  } else if (netSalary <= 800000) {
    payee = 0.325 * netSalary;
  } else {
    payee = 0.35 * netSalary;functional
  }
  return {payee,ahl,nhif,};
}
// Get user input
const grossSalary = prompt("Please enter your gross salary: ");

// Call the function and print the result (I figured that i had to put it in functional scope for it stop giving an error)


const result = calculateMontlyPayee(grossSalary);
/*See our values. (I figured to avoid errors related to functional and block scope errors, i learned how to use
 the result. to get the specific calculations from the object returned from the function so that I could use it for output*/

  console.log(`Your monthly PAYE tax is: Ksh ${result.payee}`);
  console.log(`Total Affordable Housing Levy: Ksh ${result.ahl}`);
  console.log(`Total NHIF deduction: Ksh ${result.nhif}`);


//( I could'nt find a solution to the NSSF calculation I was just getting errors and I had no time left)