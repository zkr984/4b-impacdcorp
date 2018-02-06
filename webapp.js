// JavaScript Document
//Defining Variables
 var currentScore = 0;
var downloadTimer;
var inter;
var inter5;
var x;
var timeleft;
var saveScore;
var highScore = 0;

//Time Check/Timer Function

function timeCheck(){
   for(timeLeft >0, timeLeft--) {
    timeleft--;
	  document.getElementById("countdowntimer").textContent = timeleft;
	    if(timeleft <= 0){
			//stops timer
    clearInterval(downloadTimer);
	//saves score
	var saveScore = currentScore;
	currentScore = 0;


}
}

function highScore(){
if 	(highScore < currentScore){
	
	}
}


function start() {

	// add this event listener to all of the buttons
	//Not working
	/*	document.getElementById("mole11").addEventListener("click", function() {
		document.getElementById("mole11").removeEventListener( "click", addScore5);
		document.getElementById("mole11").removeEventListener( "click", addScore1);});
		
		document.getElementById("mole12").addEventListener("click", function() {
		document.getElementById("mole12").removeEventListener( "click", addScore5);
		document.getElementById("mole12").removeEventListener( "click", addScore1);});
		
		document.getElementById("mole13").addEventListener("click", function() {
		document.getElementById("mole13").removeEventListener( "click", addScore5);
		document.getElementById("mole13").removeEventListener( "click", addScore1);});
		
		document.getElementById("mole14").addEventListener("click", function() {
		document.getElementById("mole14").removeEventListener( "click", addScore5);
		document.getElementById("mole14").removeEventListener( "click", addScore1);});
		
		document.getElementById("mole15").addEventListener("click", function() {
		document.getElementById("mole15").removeEventListener( "click", addScore5);
		document.getElementById("mole15").removeEventListener( "click", addScore1);});

		document.getElementById("mole21").addEventListener("click", function() {
		document.getElementById("mole21").removeEventListener( "click", addScore5);
		document.getElementById("mole21").removeEventListener( "click", addScore1);});
		
		document.getElementById("mole22").addEventListener("click", function() {
		document.getElementById("mole22").removeEventListener( "click", addScore5);
		document.getElementById("mole22").removeEventListener( "click", addScore1);});
		
		document.getElementById("mole23").addEventListener("click", function() {
		document.getElementById("mole23").removeEventListener( "click", addScore5);
		document.getElementById("mole23").removeEventListener( "click", addScore1);});
		
		document.getElementById("mole24").addEventListener("click", function() {
		document.getElementById("mole24").removeEventListener( "click", addScore5);
		document.getElementById("mole24").removeEventListener( "click", addScore1);});
		
		document.getElementById("mole25").addEventListener("click", function() {
		document.getElementById("mole25").removeEventListener( "click", addScore5);
		document.getElementById("mole25").removeEventListener( "click", addScore1);});
	
		document.getElementById("mole31").addEventListener("click", function() {
		document.getElementById("mole31").removeEventListener( "click", addScore5);
		document.getElementById("mole31").removeEventListener( "click", addScore1);});
		
		document.getElementById("mole32").addEventListener("click", function() {
		document.getElementById("mole32").removeEventListener( "click", addScore5);
		document.getElementById("mole32").removeEventListener( "click", addScore1);});
	
		document.getElementById("mole33").addEventListener("click", function() {
		document.getElementById("mole33").removeEventListener( "click", addScore5);
		document.getElementById("mole33").removeEventListener( "click", addScore1);});
		
		document.getElementById("mole34").addEventListener("click", function() {
		document.getElementById("mole34").removeEventListener( "click", addScore5);
		document.getElementById("mole34").removeEventListener( "click", addScore1);});
		
		document.getElementById("mole35").addEventListener("click", function() {
		document.getElementById("mole35").removeEventListener( "click", addScore5);
		document.getElementById("mole35").removeEventListener( "click", addScore1);});

	// add this event listener to all of the buttons
	for (  x = 0; x < 6;  x++){
	document.getElementById("mole1" + x).addEventListener("click", function() {
		document.getElementById("mole1" + x).removeEventListener( "click", addScore5);
		document.getElementById("mole1" + x).removeEventListener( "click", addScore1);});
	}
	for(  x = 0; x < 6; x++){
	document.getElementById("mole2" + x).addEventListener("click", function() {
		document.getElementById("mole2" + x).removeEventListener( "click", addScore5);
		document.getElementById("mole2" + x).removeEventListener( "click", addScore1);});
	}
	for(  x = 0; x < 6; x++){
	document.getElementById("mole3" + x).addEventListener("click", function() {
		document.getElementById("mole3" + x).removeEventListener( "click", addScore5);
		document.getElementById("mole3" + x).removeEventListener( "click", addScore1);});
	}
*/
		//Timer
		
	    
//Checks Time every second
     downloadTimer = setInterval(timeCheck,1000);
	
	var timeleft = 45;
	//Timer Interval
	var t=setInterval(countdown_timer, 1000); 
//Timer
	function countdown_timer()  {
		//Changes timer 
		document.getElementById("time").innerHTML = timeleft;
		timeleft--;
		if(timeleft == -1) {
			//stops timer
			clearInterval(t);
			//Alerts when time is over
			alert("Time's Up!");
			highScore();
	  }
	}
//Picks Type of Mole
// Not used yet
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
			//Picks Random Mole From Array
		var randomNumber = Math.floor(Math.random()*molePicker.length);
		var  jack = molePicker[randomNumber];
		
		// Makes a New +1 Mole every second
	inter = setInterval(moveMoleAround1, 1000);
	
	//Makes a new +5 mole every 5 seconds
	inter5 = setInterval(moveMoleAround5, 5000);
		

		//Random Place Generator
		
}
//Adds Score when a +1 Mole is clicked
function addScore1(){
				currentScore++;
				document.getElementById("score").value = currentScore;
			}
		// Adds 5 When a +5 Mole is clicked
function addScore5(){
				currentScore = currentScore + 5;
				document.getElementById("score").value = currentScore;
			}
		//Determines random place of Mole
function coord() {
	//gets random x and y coords
		var randomPlaceX = Math.floor(Math.random()*5)+1;
		var randomPlaceY = Math.floor(Math.random()*3)+1;
		var place = "mole" + randomPlaceX + randomPlaceY;
		return place;
		}
		
	//makes a +5 mole	
function moveMoleAround5() {
			var coords = coord();
	//changing class
			document.getElementById(coords).className="silver";
//adding event listener
			document.getElementById(coords).addEventListener( "click", addScore5 );
			
			setTimeout(removeMoles5, 500);
}
		//Makes a +1 Mole 
function moveMoleAround1() {
			var coords = coord();
	//changing class
			document.getElementById(coords).className="active";
// adding event listener 
			document.getElementById(coords).addEventListener( "click", addScore1 );
			
			setTimeout(removeMoles1, 1000);
}
			
	// Interval Variable
	//Removes all +5 Moles
function removeMoles5() {
	
//Getting Array of all +5 Moles (silver moles)
	var array = document.getElementsByClassName("silver");
	//looping through all +5 moles
	for( var i = 0; i < array.length; i++) {
		array[i].removeEventListener( "click", addScore5);
		array[i].setAttribute("class", "void");
		
	}
}
//Removing all +1 moles
function removeMoles1() {
	
//Getting Array of all +1 Moles 
	var array = document.getElementsByClassName("active");
	//looping through all +1 moles and making them inactive
	for( var i = 0; i < array.length; i++) {
		array[i].removeEventListener( "click", addScore1);
		array[i].setAttribute("class", "void");
		
	}


}
//cookies
var highScore = 0;
function savecookies(){
	 var exdays= 69;
	 highScore = saveScore + highScore;
	 var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = highScore;

}
function loadcookies(){
	
}
function clearcookies(){
	
}
//apparently changes the skin of mole
function skinchange(page, skin){
	alert(page);
	alert(skin);
	document.getElementsById(page).setAttribute('href', skin);
	}
	  if(timeleft <= 0){
    clearInterval(downloadTimer);
	var saveScore = currentScore;
	currentScore = 0;

