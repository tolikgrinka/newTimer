let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector("#countdown");
let int = null;
let play = document.getElementById('play');
let stop = document.getElementById('stop');
document.getElementById("clock").addEventListener("dblclick", () => {
    if(int != null) {
        clearInterval(int);
play.style.display = 'none';
stop.style.display = 'block';
    }
    int = setInterval(displayTimer, 10);
});
document.getElementById("clock").addEventListener("click", () => {
    clearInterval(int);
    play.style.display = 'block';
    stop.style.display = 'none';
});

 function displayTimer() {
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ?  '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    let ms = 
        milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;

    timeRef.innerHTML = `${h}:${m}:${s}:${ms}`;
};
int = setInterval(displayTimer, 10);

// Animation





var circle1 = document.getElementById("circle1");
setInterval(function repeat(){
  function show(element){
    element.style.display='block';
  }
  setTimeout(show(circle1), 1000);
function hide(element){
  element.style.display='none';
  setTimeout(function(){if (circle1.style.display === "none") { 
    circle1.style.display = "block"; 
  };},1000)
}

setTimeout(hide(circle1), 5000);
}, 5000);


var circle2 = document.getElementById("circle2");
setInterval(function repeat(){
  function show(element){
    element.style.display='block';
  }
  setTimeout(show(circle2), 2000);
function hide(element){
  element.style.display='none';
  setTimeout(function(){if (circle2.style.display === "none") { 
    circle2.style.display = "block";  
  };},2000)
}

setTimeout(hide(circle2), 5000);
}, 5000);


var circle3 = document.getElementById("circle3");
setInterval(function repeat(){
  function show(element){
    element.style.display='block';
  }
  setTimeout(show(circle3), 3000);
function hide(element){
  element.style.display='none';
  setTimeout(function(){if (circle3.style.display === "none") { 
    circle3.style.display = "block";  
  };},3000)
}

setTimeout(hide(circle3), 5000);
}, 5000);




var circle4 = document.getElementById("circle4");
setInterval(function repeat(){
  function show(element){
    element.style.display='block';
  }
  setTimeout(show(circle4), 4000);
function hide(element){
  element.style.display='none';
  setTimeout(function(){if (circle4.style.display === "none") { 
    circle4.style.display = "block";  
  };},4000)
}

setTimeout(hide(circle4), 5000);
}, 5000);
