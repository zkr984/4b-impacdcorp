// JavaScript Document


// Random Function
function start() {
		//Timer
	    var timeleft = 45;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);	
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

function coord() {
		var randomPlaceX = Math.floor(Math.random()*5)+1;
		var randomPlaceY = Math.floor(Math.random()*3)+1;
		var place = "mole" + randomPlaceX + randomPlaceY;
		return place;
		}
		


function moveMoleAround() {
			var coords = coord();
	//		document.getElementById("mole");
			document.getElementById(coords).className="active";
			setTimeout(document.getElementById(coords).className="void",3000);
						}
			
	// Interval Variable
	var interval = 1000;
		setInterval(moveMoleAround, interval);
<<<<<<< HEAD


=======
	//Timer
	    var timeleft = 45;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);	
	
