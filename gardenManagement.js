const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

// Function to check temperature and control watering
function checkTemperature(temperature) {
    if (temperature > 80) {
        console.log("Watering on");
    } else {
        console.log("Watering off");
    }
}

console.log(checkTemperature(temperature));

function checkTimeOfDay(timeOfDay) {
    if (timeOfDay === "evening" || timeOfDay === "night") {
        console.log("Lights on");
    } else {
        console.log("Lights off");
    }
}

console.log(checkTimeOfDay(timeOfDay));

