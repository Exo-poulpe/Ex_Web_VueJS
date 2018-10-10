
var myTimer;
var pauseTimer;
const DefaultTime = 10; // 1200
const DefaultTimePause = 5;
var timePassed = DefaultTime;
var pauseTime = DefaultTimePause;
var timer_on = 0;

$("p").hide();

VueJs vue = new VueJs();

var msg = new Vue({
el: '#Msg',
data: {
  timer: DefaultTime
}
})

var state = new Vue({
  el: "#state",
  data:{
    info: "Stop"
  }
})


$(document).ready(function(){
    $("#PlayBtn").click(function(){
        Play();
    });
});

$(document).ready(function(){
    $("#PauseBtn").click(function(){
        Pause();
    });
});

$(document).ready(function(){
    $("#StopBtn").click(function(){
        Stop();
    });
});

function Play()
{
  if (timer_on == 0)
  {
    $("p").css("color","black");
    $("#state").css("color","black");
  state.info="Working"
  clearInterval(pauseTimer);
  $("p").show();
  myTimer = window.setInterval(Time,1000);
  timer_on = 1;
  }

}

function Pause()
{
  $("p").css('color', 'red');
  $("#state").css("color","red");

  state.info = "Pause";
  clearTimeout(myTimer);
  pauseTimer = setInterval(PauseTime,1000);
  timer_on = 0;
}

function Stop()
{
  state.info="Stop";
  $("#state").css("color","red");
  if (timer_on == 1) {
    clearInterval(myTimer);
    timePassed = DefaultTime;
    timer_on = 0;
  }
  else {
    clearInterval(pauseTimer);
    timePassed = DefaultTimePause;
  }

}

function Time()
{
  if (timePassed <= 0) {
    Pause();
    timePassed = DefaultTime;
  }
  else {
  timePassed -= 1;
  let Min = Math.floor(timePassed / 60);
  let Sec = timePassed - Min * 60;
  let valM = (DefaultTime - Min);
  let val = Min + ":" + Sec;
  msg.timer = val;
  }
}

function PauseTime()
{
  if (pauseTime <= 0) {
    Play();
    pauseTime = DefaultTimePause;
  }
  else {

  pauseTime -= 1;
  let Min = Math.floor(pauseTime / 60);
  let Sec = pauseTime - Min * 60;
  let valM = (DefaultTimePause - Min);
  let val = Min + ":" + Sec;
  msg.timer = val;
  console.log(val);
  }
}
