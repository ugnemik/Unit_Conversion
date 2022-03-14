let userInput = document.getElementById("user-input");
let lengthResult = document.getElementById("length-result");
let volumeResult = document.getElementById("volume-result");
let massResult = document.getElementById("mass-result");

userInput.addEventListener("keydown", function (event) {
  let value = userInput.value;

  if (event.keyCode == 13) {
    //   length result
    let result1 = value * 3.28084;
    let result2 = value / 3.28084;
    let getMetersToFeet = value + " meters = " + result1.toFixed(3) + " feet";
    let getFeetToMeters = value + " feet = " + result2.toFixed(3) + " meters";
    lengthResult.innerHTML = getMetersToFeet + " | " + getFeetToMeters;

    // volume result
    let result3 = value * 0.264172;
    let result4 = value / 0.264172;
    let getLitersToGallons =
      value + " liters = " + result3.toFixed(3) + " gallons";
    let getGallonsToLiters =
      value + " gallons = " + result4.toFixed(3) + " liters";
    volumeResult.innerHTML = getLitersToGallons + " | " + getGallonsToLiters;

    // mass result
    let result5 = value * 2.20462;
    let result6 = value / 2.20462;
    let getKilosToPounds =
      value + " kilograms = " + result5.toFixed(3) + " pounds";
    let getPoundsToKilos =
      value + " pounds = " + result6.toFixed(3) + " kilograms";
    massResult.innerHTML = getKilosToPounds + " | " + getPoundsToKilos;
  }
});
