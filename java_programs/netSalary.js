const prompt = require("prompt-sync")({ sigint: true }); 
//Declare out function that calculates our monthly Tax
function calculateMontlyPayee(salary){
    //Calculate the nhif deduction 
    let nhif;
    if (salary<=5999){
        nhif=150
    } else if(salary<=7999){
        nhif=300
    } else if(salary<=11999){
        nhif=400
    } else if(salary<=14999){
        nhif=500
    } else if(salary<=19999){
        nhif=600
    } else if(salary<=24999){
        nhif=750
    } else if(salary<=29999){
        nhif=850
    } else if(salary<=34999){
        nhif=900
    } else if(salary<=39999){
        nhif=950
    } else if(salary<=44999){
        nhif=1000
    } else if(salary<=49999){
        nhif=1100
    } else if(salary<=59999){
        nhif=1200
    } else if(salary<=69999){
        nhif=1300
    } else if(salary<=79999){
        nhif=1400
    } else if(salary<=89999){
        nhif=1500
    } else if(salary<=99999){
        nhif=1600
    } else if(salary === 0){
        nhif=0
    } else {
        nhif=1700
    }

    const grossSalary= salary - nhif

    let payee;
    if ( grossSalary <=24000){
        payee = 0.1*grossSalary
    } else if (grossSalary <=32333){
        payee = 0.25*grossSalary
    } else if (grossSalary <=500000){
        payee = 0.3*grossSalary
    } else if (grossSalary <=800000){
        payee = 0.325*grossSalary
    } else if (grossSalary >800000){
        payee = 0.35*grossSalary
    } else if (grossSalary === 0){
        payee = 0
    } else if ( grossSalary === "") {
        return "Invalid Input. Kindly enter a valid numerical value"
    }
    return payee; // Return the message
    
}
const salary = prompt("Please enter your salary: "); // Get user input
// Call the function and print the result
const payeeResult= (calculateMontlyPayee(salary))
//See our monthly tax
console.log(`Your Montly tax is : Ksh ${payeeResult}`)