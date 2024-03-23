const prompt = require("prompt-sync")({ sigint: true }); 

// Define our function that works out our speed and demerit points
function calculateDemeritPoits(speed) {
      // Ensure the value for speed is not null/empty
    if (speed === "") {
        return "Invalid input. Enter a valid numerical value for speed";
    }
       
    const speedLimit = 70
    let demeritPoints=0

    if (speed > speedLimit){
        const extraSpeed=(speed-speedLimit)
        demeritPoints = Math.floor(extraSpeed / 5); // Calculate demerit points and use Math.floor to round our result  down
    }
      // Create the output message based on speed user inputed

    let message;
    if (speed <= speedLimit) {
      message = 'Ok';
    } else if (demeritPoints<=12){
        message = `Your Dermit points are: ${demeritPoints}`;
    } else {
        message="Lisence suspended"
    }
    return message; // Return the message
}
const speed = prompt("Enter Vehicle Speed: "); // Get user input
const speedResult= (calculateDemeritPoits(speed))
console.log(speedResult)


  
