const temperatureElement = document.querySelector(".temperature");
const unitsElement = document.querySelector(".units");
const windSpeedElement = document.querySelector(".windSpeed");
const windChillElement = document.querySelector(".windChill");
const resultUnitsElement = document.querySelector(".resultUnits");

const temperature = temperatureElement.textContent;
const windSpeed = windSpeedElement.textContent;
const units = unitsElement.textContent;
const metric = (units === "℃");
resultUnitsElement.textContent = units;

function calculateWindChill(temperature, velocity, metric) {
    const temp = Number(temperature);
    const windSpeed = Number(velocity);
    if (
        temp === NaN ||
        windSpeed === NaN ||
        (metric && ((temp > 10) || (windSpeed <= 4.8)) ||
        (!metric && ((temp > 50) || (windSpeed <= 3))))
    )
    {
        return "N/A";
    } else {
        if (metric) {
            return Math.round((13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16))));
        } else {
            return Math.round((35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16))));
        }
    }
}

windChillElement.textContent = calculateWindChill(temperature, windSpeed, metric);
if (windChillElement.textContent === "N/A") {
    resultUnitsElement.textContent = "";
}