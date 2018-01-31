// JavaScript Document
 var currentScore = 0;
var downloadTimer;
var inter;
var inter5;
// Random Function
//Time Check Function

function timeCheck(){
    timeleft--;
	  document.getElementById("countdowntimer").textContent = timeleft;
	    if(timeleft <= 0){
    clearInterval(downloadTimer);

}
}
function start() {
	// add this event listener to all of the buttons
	/*for
	document.getElementById("mole" + x).addEventListener("click", function() {
		removeEventListener(x);
	}*/
		//Timer
		
	    var timeleft = 45;

     downloadTimer = setInterval(timeCheck,1000);
	
	 

    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    },1000);
	    if(timeleft <= 0) {
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
		
	inter = setInterval(moveMoleAround1, 1000);
	inter5 = setInterval(moveMoleAround5, 5000);
		

		if  (jack == "mole+1") {
		//alert("this worked");
			
		}
		//Random Place Generator
		
}
/*function addScore11() {
var class = document.getElementById("mole11").className;
if (class == "active"){
currentScore++;
}
}*/
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
function addScore1(){
				currentScore++;
				document.getElementById("score").value = currentScore;
			}
function addScore5(){
				currentScore = currentScore + 5;
				document.getElementById("score").value = currentScore;
			}

function coord() {
		var randomPlaceX = Math.floor(Math.random()*5)+1;
		var randomPlaceY = Math.floor(Math.random()*3)+1;
		var place = "mole" + randomPlaceX + randomPlaceY;
		return place;
		}
		
		
function moveMoleAround5() {
			var coords = coord();
	//		document.getElementById("mole");
	alert("hi");
			document.getElementById(coords).className="silver";

			document.getElementById(coords).addEventListener( "click", addScore5 );
			
			setTimeout(removeMoles5, 500);
}
		 
function moveMoleAround1() {
			var coords = coord();
	//		document.getElementById("mole");
	//alert("hi")
			document.getElementById(coords).className="active";

			document.getElementById(coords).addEventListener( "click", addScore1 );
			
			setTimeout(removeMoles1, 1000);
}
			
	// Interval Variable
	
function removeMoles5() {
	

	var array = document.getElementsByClassName("silver");
	
	for( var i = 0; i < array.length; i++) {
		array[i].removeEventListener( "click", addScore1);
		array[i].setAttribute("class", "void");
		
	}
}

function removeMoles1() {
	

	var array = document.getElementsByClassName("active");
	
	for( var i = 0; i < array.length; i++) {
		array[i].removeEventListener( "click", addScore1);
		array[i].setAttribute("class", "void");
		
	}


}
function deathmole(){
		timeleft = 0;
		alert('images/gameover.jpeg');
		
	}

