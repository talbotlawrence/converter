function toCelsius () {
	var finalTemp = (userTemp - 32) * (5/9);
	var userTemp = document.getElementById("fahrenheit").value - 32 * 5 / 9; 
}

function toFahrenheit () {
	finalTemp = (userTemp)
	= document.getElementById("celsius").value * 9 / 5 + 32;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

var tempInput = document.getElementById("temperature");

/////////////////////////////////////////////////////////////////////////////////////////////////////
var fieldElement = document.getElementById("submit").value;

fieldElement.addEventListener("keyup", function(event){
        console.log("event", event);            
        outputEl.innerHTML = event.target.value;
});             //anonymous function or Lambda 

if (temperature === "celsiusNumber") {
	celsius = document.getElementById("celsius").value * 9 / 5 + 32;
	document.getElementById("fahrenheit").value = ;
} else {
	fahrenheit = document.getElementById("fahrenheit").value - 32 * 5 / 9;
	document.getElementById("fahrenheit").value = ;
}


// Create a block level element that will hold the text of the converted temperature.
// Create a button that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.