const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

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

while (soilMoisture < 40) {
    soilMoisture += 5;
    console.log(soilMoisture);
}

console.log(soilMoisture);
