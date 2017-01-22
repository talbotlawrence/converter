//IDs from HTML: temperature, fahrenheitRadio, celsiusRadio, converter, clear, output-target

//this works////////////////////////////////////////////////////////////////////
// var form = document.getElementById('name-form');
// form.onsubmit = function(e) {
// 	e.preventDefault();
// 	var temperatureInput =  parseFloat(document.getElementById("temperature").value);
// 	// console.log(temperatureInput);
// 	return temperatureInput;
// };
//this works////////////////////////////////////////////////////////////////////
//User input
var userInput = document.getElementById("temperature").value;
console.log("userInput", userInput)
//Push that button
var buttonPushed = document.getElementById("converter");
buttonPushed.addEventListener("click", determineConverter);

//Where are we sending the Output
var outputTarget = document.getElementById("output-target");

//The enter button is pressed---I straight up googled this below
document.getElementById("temperature").addEventListener("keyup", function(e) {
    if (e.keyCode == 13) {
        document.getElementById("converter").click();
    }
});
//clear the text input
function clearInputText() {
	//var clearClicked = document.getElementById("clear");
	//console.log("temperatureInput", temperatureInput);
    // temperatureInput.innerHTML = "";
    // outputTarget.innerHTML = "";
    window.location.reload();
};

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter(clickEvent) {
	if(document.getElementById("celsiusRadio").checked) {
		console.log("userInput", userInput)
		toCelsius(userInput);
	} else {
		toFahrenheit(userInput);
	}
};


// console.log("pickedcelsiusRadio", pickedcelsiusRadio);
// console.log("pickedfahrenheitRadio", pickedfahrenheitRadio);
// determineConverter (pickedcelsiusRadio, pickedfahrenheitRadio);

// //convert to Celsius and Fahrenheit
// function toCelsius() {
// 	console.log("temperatureInput", temperatureInput)
// 	 var celsiusOutput = temperatureInput * 9 / 5 + 32;
// 	 outputTarget.innerHTML = celsiusOutput;
// }

// function toFahrenheit() {
// 	var fahrenheitOutput = temperatureInput.value - 32 * 5 / 9;
// 	outputTarget.innerHTML = fahrenheitOutput;
// };

//We need to change the colors to red, blue, and green
// function giveItColor() {
// 	if (fahrenheitOutput >= 90 || celsiusOutput >= 32) {
// 	outputTarget.innerHTML.style.color = "red";
// 	} else if (fahrenheitOutput <= 32 || celsiusOutput <= 0) {
// 		outputTarget.innerHTML.style.color = "blue";
// 	} else {
// 		outputTarget.innerHTML.style.color = "green";
// 	}
// };



/////////////////////////////////////////////////////////////////////////////////////////////////////
// var fieldElement = document.getElementById("converter").value;

// if (temperature === "celsiusNumber") {
// 	celsius = document.getElementById("celsiusRadio").value * 9 / 5 + 32;
// 	document.getElementById("fahrenheit").value = ;
// } else {
// 	fahrenheit = document.getElementById("fahrenheitRadio").value - 32) * 5 / 9;
// 	document.getElementById("fahrenheit").value = ;
// }



// there are two radio buttons. If one radio button is checked, then a particular 
//math equation is invoked.
// If the other radio button is selected, then a different but specific math equation is invoked.
// There are two numbers: the first number is the users input. It is stored in an input variable. 
// I may need to convert it to a number if the browser gives it to me as a string
//The other number is the converted number after the equation is executed.
// The new number is already in a variable and sent to the Dom for display. 
//You'll need to get the div by element ID and dump that value into the inner HTML.
// Colors
// With Fahrenheit checked, if the number is greater than blank then turn the color red. 
//If the color is lower than blank, then turn the number blue else the color should be green 



// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.