// JavaScript Document

var key = locked;
var inter;
// Random Function
function start() {
		//Timer
	    var timeleft = 45;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    },1000);
	    if(timeleft === 0) {
        clearInterval(downloadTimer);
		clearInterval(inter);
	}
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
		
	setInterval(moveMoleAround, 1000);
		

		if  (jack == "mole+1") {
		//alert("this worked");
			
		}
		//Random Place Generator
		
}
// Add Score Functions
//function addScore1() {
		/*while (true) {
			var x = document.getElementsByTagName("button");
			if ( x === document.getElementByClassName("active").className) {
			currentScore++;
			}
			else {
			currentScore + 0;
			}
		}
	document.getElementById("score").value = currentScore;
}
	
	

Add 5 Function
function addScore5() {
	currentScore = currentScore + 5
}
*/

function coord() {
		var randomPlaceX = Math.floor(Math.random()*5)+1;
		var randomPlaceY = Math.floor(Math.random()*3)+1;
		var place = "mole" + randomPlaceX + randomPlaceY;
		return place;
		}
		
		 var currentScore = 0;
		 
function moveMoleAround() {
			var coords = coord();
	//		document.getElementById("mole");
	//alert("hi")
			document.getElementById(coords).className="active";

			document.getElementById(coords).addEventListener( "click", function() {
				currentScore++;
				document.getElementById("score").value = currentScore;
			});
			
			setTimeout(removeMoles, 1000);
}
			
	// Interval Variable
	

function removeMoles() {
	

	var array = document.getElementsByClassName("active");
	
	for( var i = 0; i < array.length; i++) {
		array[i].setAttribute("class", "void");
	}


}
function deathmole(){
		timeleft === 0;
	}

