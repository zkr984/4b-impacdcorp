// JavaScript Document

// Define Score Variable
var currentScore = 0

// Add Score Functions
function addScore1() {
	currentScore++;
	document.getElementById("score").value = currentScore;
}
	
	
/*
Add 5 Function
function addScore5() {
	currentScore = currentScore + 5
}
*/

// Random Function
function start() {
		var molePicker = 
		[
			"mole+1",
			"mole+1",
			"mole+1",
			"mole+1",
			"mole+1",
			"mole+0",
			"mole+0",
			"mole+0",
			"mole+0",
			"mole+0",
			//"mole+5"  There are 5 +1 to make +1 more common. +5 not intergrated yet
			];
			
		var randomNumber = Math.floor(Math.random()*molePicker.length);
		var  jack = molePicker[randomNumber];
		
	
		if  (jack == "mole+1") {
		//alert("this worked");
			
		}
		//Random Place Generator
		
}

function placeMole() {
	var id = coord()
	document.getElementById(id).setAttribute("class", "mole");
}

function coord() {
		var randomPlaceX = Math.floor(Math.random()*5)+1;
		var randomPlaceY = Math.floor(Math.random()*3)+1;
		var place = "mole" + randomPlaceX + randomPlaceY;
		return place;
		}

function moveMoleAround() {
			var coords = coord();
			document.getElementById("mole");
		}
		setInterval(moveMoleAround, 1000);
		
