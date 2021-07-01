
///////////////////////////////////////
// Using Google, StackOverflow and MDN
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
/* const calcTempAmplitude = function (newTemps) {
    let maxValue = newTemps[0];
    let minValue = newTemps[0];
    for (let i = 0; i < newTemps.length; i++) {
        curTemp = newTemps[i];
        if (typeof curTemp !== 'number') continue;
        if (newTemps[i] > maxValue) {
            maxValue = newTemps[i];
        }
        if (newTemps[i] < minValue) {
            minValue = newTemps[i];
        }
    }
    console.log("Maximum value: ", maxValue);
    console.log("Minimum value: ", minValue);
    return maxValue - minValue;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
 */

// PROBLEM 2:
// Function should now receive 2 arrays of temps
// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays
// 2) Breaking up into sub-problems
// - Merge 2 arrays
/* exempelTemp = [2, 5, 0, -40]
const newCalcTempAmplitudeBug = function (temp1, temp2) {
    const newTemps = temp1.concat(temp2)
    console.log("Merged array: ", newTemps);
    let maxValue = newTemps[0];
    let minValue = newTemps[0];
    for (let i = 0; i < newTemps.length; i++) {
        curTemp = newTemps[i];
        if (typeof curTemp !== 'number') continue;
        if (newTemps[i] > maxValue) {
            maxValue = newTemps[i];
        }
        if (newTemps[i] < minValue) {
            minValue = newTemps[i];
        }
    }
    console.log("Maximum value: ", maxValue);
    console.log("Minimum value: ", minValue);
    return maxValue - minValue;
};
const twoamplitude = newCalcTempAmplitudeBug(temperatures, exempelTemp)
console.log(twoamplitude);
 */

//BUG FIXING


/* const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        // value: Number(prompt('Degrees celsius:'))
        value: 10
    };
    console.table(measurement);
    const kelvis = measurement.value + 273;
    return kelvis;
};

console.log(measureKelvin());

// using a debugger
exempelTemp = [2, 5, 0, 2];
const newCalcTempAmplitudeBug = function (temp1, temp2) {
    const newTemps = temp1.concat(temp2);
    console.log("Merged array: ", newTemps);
    let maxValue = 0;
    let minValue = 0;
    for (let i = 0; i < newTemps.length; i++) {
        curTemp = newTemps[i];
        if (typeof curTemp !== 'number') continue;
        if (newTemps[i] > maxValue) {
            maxValue = newTemps[i];
        }
        if (newTemps[i] < minValue) {
            minValue = newTemps[i];
        }
    }
    console.log("Maximum value: ", maxValue);
    console.log("Minimum value: ", minValue);
    return maxValue - minValue;
};
const twoAmplitudeBug = newCalcTempAmplitudeBug([2, 5, 3], exempelTemp);
// IDENTIFY A BUG
console.log(twoAmplitudeBug); */


///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
Use the problem-solving framework: Understand the problem and break it up into sub-problems!
TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

test1 = [17, 21, 23];
test2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        dayNumber = i + 1
        result += `... ${arr[i]}ºC in ${dayNumber} days`;
    }
    return result;
};
console.log(printForecast(test1));
console.log(printForecast(test2));