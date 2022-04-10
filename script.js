// SOUND BUTTON TITLE

var intro = document.getElementById("intro");
var on = document.getElementById("on");
var off = document.getElementById("off");
var trig = false;


off.addEventListener('click', function(){
	off.style.display = 'none';
	on.style.display = 'inline-block';
	if (trig == false) {
		intro.play();
		trig = true;
	}
	else{
		intro.muted = false;
	}
});

on.addEventListener('click', function(){
	on.style.display = 'none';
	off.style.display = 'inline-block';
	intro.muted = true;
});


// SOUND BUTTON TITLE


// SOUND BUTTONS MAIN PAGE

var audio = document.getElementById("test");
var pause = document.getElementById("pause");
var play = document.getElementById("play");
var replay = document.getElementById("replay");

var end = false;
var tally = 1 //USE THIS TO TOGGLE IF STATEMENTS BELOW


play.addEventListener('click', function(){
	play.style.display = 'none';
	//if statement here so that the sign changes according to timestamps
	pause.style.display = 'inline-block';
	replay.style.display = 'none';
	audio.play();
	intro.muted = true;
});

pause.addEventListener('click', function(){
	pause.style.display = 'none';
	play.style.display = 'inline-block';
	replay.style.display = 'none';
	audio.pause();
});

replay.addEventListener('click', function(){
	play.style.display = 'none';
	pause.style.display = 'inline-block';
	replay.style.display = 'none';
	audio.play();
});

audio.addEventListener('ended', function(){
	pause.style.display = 'none';
	play.style.display = 'none';
	replay.style.display = 'inline-block';
	console.log("Finished!");
});



// SOUND BUTTONS MAIN PAGE