// SOUND BUTTON TITLE
window.addEventListener('load', function() { AOS.init(); });

var intro = document.getElementById("intro");
var on = document.getElementById("on");
var off = document.getElementById("off");
var trig = false;

// Volume Button to Mute or Unmute
off.addEventListener('click', function(){
	// document.body.style.backgroundImage = "url(images/bg.jpg)";
// 	Change background on random intervals
	document.body.style.backgroundSize = "contain";
	var backgroundImg=["images/bg.jpg", "images/bg2.jpg", "images/bg3.png", "images/bg4.png"
	]
	setInterval(changeImage, 1000);
	function changeImage() {   
		var i = Math.floor((Math.random() * 3));
		document.body.style.backgroundImage = "url('"+backgroundImg[i]+"')";
		i = i + 1;
	}
	off.style.display = 'none';
	on.style.display = 'inline-block';
	if (trig == false) {
		intro.play();
		intro.volume = 0.2;
		trig = true;
	}
	else{
		intro.muted = false;
	}
});

// Volume Button to Mute or Unmute
on.addEventListener('click', function(){
	document.body.style.backgroundImage = "none";
	document.body.style.backgroundColor="black";
	on.style.display = 'none';
	off.style.display = 'inline-block';
	intro.muted = true;
});

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
	showSlides();
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
	showSlides();
	tindex = 0;
});

audio.addEventListener('ended', function(){
	pause.style.display = 'none';
	play.style.display = 'none';
	replay.style.display = 'inline-block';
	intro.muted = false;
});



//SLIDESHOW
let slideIndex = 0;
let tindex = 0;
const tstamps = [5500, 8000, 18000, 6000, 5000, 16500, 5500, 15000, 6800, 16000,
    42000, 24000, 12000, 8000, 14000, 26000, 23000, 10000]; //hardcode timestamps

//SLIDESHOW
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("sl");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  tindex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (tindex > tstamps.length){
    tindex = 0;
    slideIndex = 0;
    return;
  }

  if (slides[slideIndex-1].id == "fit") {
    slides[slideIndex-1].style.paddingTop = '+5%';
  }

  slides[slideIndex-1].style.display = "inline-block";
  
  setTimeout(showSlides, tstamps[tindex-1]); // Change image every x seconds
}
