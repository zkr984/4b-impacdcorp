// JavaScript Document
//Defining Global Variable
 var currentScore = 0;
var downloadTimer;
var inter;
var inter5;
var timeleft;
var saveScore;
var array;
var highScore = 0;

//Time Check/Timer Function
// Random Function
//Time Check Function


/*function timeCheck(){
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
*/



//starts Game
function start() {

	
	timeleft = 45;
		
	inter = setInterval(moveMoleAround1,2000);
	inter5 = setInterval(moveMoleAround5, 5000);
	var t=setInterval(countdown_timer, 1000); 

	function countdown_timer()  {
		document.getElementById("time").innerHTML = timeleft;
		timeleft--;
		if(timeleft == -1) {
			clearInterval(t);
			clearInterval(inter);
			//clearInterval(inter5);
			alert("Time's Up!");
			
		//makes HighScore
			if 	(currentScore > highScore){
	highScore = currentScore;
	document.getElementById("highScore").value = highScore;
	currentScore = 0;
	}

	  }
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
			//"mole+5"  There are 5 +1 to make +1 more common. 
			];
			
		var randomNumber = Math.floor(Math.random()*molePicker.length);
		var  jack = molePicker[randomNumber];
	
		

		//Random Place Generator
		
} // end start function


function addScore1(){
				currentScore++;
				document.getElementById("score").innerHTML = currentScore;
				array = document.getElementsByClassName("active");
		for( var i = 0; i < array.length; i++) {
		array[i].removeEventListener( "click", addScore1);
		array[i].setAttribute("class", "void");
		
	}
			}
function addScore5(){
				currentScore = currentScore + 5;
				document.getElementById("score").innerHTML = currentScore;
			}

function deathScore(){
	alert("YOU HIT ERIN! YOU LOST!");
}

function coord() {
		var randomPlaceX = Math.floor(Math.random()*3)+1;
		var randomPlaceY = Math.floor(Math.random()*5)+1;
		var place = "mole" + randomPlaceX + randomPlaceY;
		return place;
		}
		
		
function moveMoleAround5() {
			var coords = coord();
	//		document.getElementById("mole");
	//alert("hi");
			document.getElementById(coords).className="silver";

			document.getElementById(coords).addEventListener( "click", addScore5 );
			
			setTimeout(removeMoles5, 500);
}
		 
function moveMoleAround1() {
			var coords = coord();
	//		document.getElementById("mole");
	//alert("hi");
	//alert(coords);
			document.getElementById(coords).setAttribute("class", "active");

			document.getElementById(coords).addEventListener( "click", addScore1 );
			
			setTimeout(removeMoles1, 1000);
}
			
	
	
function removeMoles5() {
	

	var array = document.getElementsByClassName("silver");
	
	for( var i = 0; i < array.length; i++) {x
		array[i].removeEventListener( "click", addScore5);
		array[i].setAttribute("class", "void");
		
	}
}

function removeMoles1() {
	

	array = document.getElementsByClassName("active");
		for( var i = 0; i < array.length; i++) {
		array[i].removeEventListener( "click", addScore1);
		array[i].setAttribute("class", "void");
		
	}
}

var highScore = 0;
/*
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
function skinchange(page, skin){
	alert(page);
	alert(skin);
	document.getElementsById(page).setAttribute('href', skin);
	}*/
	  if(timeleft <= 0){
    clearInterval(downloadTimer);
	var saveScore = currentScore;
	currentScore = 0;}
	
	function clock(){
		
		
		
		
		
	}