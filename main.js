var ms = 0, s = 0, m = 0;
var timer;

var stopwatchEl = document.querySelector('.stopwatch');
var lapscontainer = document.querySelector('.laps');

function start(){
  if(!timer){   //!timer is used ..because if we hit start button multiple time,there is prblem on digits changing in seconds(they changes too fast)
  timer = setInterval(run,10);
  }
}

function run(){
  stopwatchEl.textContent = getTimer();
  ms++;
  if(ms == 100){
    ms = 0;
    s++;
  }
  if(s == 60){
    s = 0;
    m++;
  }
}

function pause(){
  stopTimer();
}

function stop(){
  clearInterval(timer);
  timer = false;
  ms = 0;
  s = 0;
  stopwatchEl.textContent = getTimer();
}

function stopTimer(){
  clearInterval(timer);
  timer = false;  //this is used because start doesnt work
}

function getTimer(){
  return  (m < 10 ? "0" + m : m) +":" + (s < 10 ? "0" +s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}

function restart(){
  stop();
  start();
}

function lap(){
  if(timer){
    var li = document.createElement('li');
    li.innerText = getTimer();
    lapscontainer.appendChild(li);
  }
}

function resetLaps(){
  lapscontainer.innerHTML = "";
}