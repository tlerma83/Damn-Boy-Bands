var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
var loopCount = 5;
// Keep track of which band we're on in the loop
var currentBand = "";


var currentVeggie = "";

var bandElement= document.getElementById("boy-bands");

var veggieElement = document.getElementById("vegetables");

// Start looping
for (var i = 0; i < loopCount; i++) {

    currentBand = bands[i];
    console.log(currentBand);
    bandElement.innerHTML += "<p>" + currentBand + "</p>"; 
    
    currentVeggie = vegetables[i];
    console.log(currentVeggie);
    veggieElement.innerHTML += "<p>" + currentVeggie + "</p>";
}


