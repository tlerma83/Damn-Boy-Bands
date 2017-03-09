var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
var loopCount = 5;
// Keep track of which band we're on in the loop
var currentBand = "";


var currentVeggie = "";

var bandElement= document.getElementById("boy-bands");

var veggieElement = document.getElementById("vegetables");

for (var loopTracker = 0; loopTracker < loopCount; loopTracker++) {

  // Add the band names into the correct <div>
    currentBand = bands[loopTracker];
    var paragraphs = document.createElement("p");
    paragraphs.innerHTML = currentBand;
    bandElement.appendChild(paragraphs);
    
    currentVeggie = vegetables[loopTracker];
    var paragraph2 = document.createElement("p");
    paragraph2.innerHTML = currentVeggie;
    veggieElement.appendChild(paragraph2);

}

