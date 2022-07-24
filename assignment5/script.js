console.log("");

// A
console.log("A");
const lucasHeightMeter = 1.69;
const lucasMassKg = 78;
const lucasBmi = lucasMassKg/[lucasHeightMeter * lucasHeightMeter];

const peterHeightMeter = 1.95;
const peterMassKg = 92;
const peterBmi = peterMassKg/[peterHeightMeter * peterHeightMeter];

var lucasHigherBmi = Boolean(lucasBmi > peterBmi);

console.log("The BMI of Peter is " + peterBmi, ", The BMI of Lucas is " + lucasBmi, " , Peter's BMI is higher than Lucas's BMI that is " + !lucasHigherBmi);

// B

console.log("B");
let celsiusTemp = 0;
var fahrenheitTemp = `${celsiusTemp}°C is ${(celsiusTemp * 1.8) + 32}°F`;
console.log(fahrenheitTemp);

let fahrenheitTemp2 = 32;
var celsiusTemp2 = `${fahrenheitTemp2}°F is ${(fahrenheitTemp2 - 32) * 5/9}°C`;
console.log(celsiusTemp2);


// C

console.log("C");

if (lucasBmi > peterBmi) {
    console.log("Lucas's BMI(" + (lucasBmi) + ") is higher than Peter's BMI(" + (peterBmi) + ")!");
}
else {
    console.log("Peter's BMI(" + (peterBmi) + ") is higher than Lucas's BMI(" + (lucasBmi) + ")!");
}

// D

console.log("D");

function CovertCelsiusToFahrenheit(celsius) {var fahrenheit = (celsius * 1.8 + 32);
console.log(`${celsius}°C is ${fahrenheit}°F;`);
return celsius;
}


function CovertFahrenheitToCelsius(fahrenheit) {var celsius = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}°F is ${celsius}°C;`);
    return fahrenheit;
    }

CovertCelsiusToFahrenheit(100);
CovertCelsiusToFahrenheit(0);
CovertCelsiusToFahrenheit(10);
CovertFahrenheitToCelsius(32);
CovertFahrenheitToCelsius(10);
CovertFahrenheitToCelsius(102);