const start = document.getElementById("start_button");
const stop = document.getElementById("stop_button");
const reset = document.getElementById("reset_button");
const msec = document.getElementById("msec_1");
const sec1 = document.getElementById("sec_1");
const sec2 = document.getElementById("sec_2");
const min = document.getElementById("min_1");
let time = 0;
let time_id = null;
stop.disabled = true;
reset.disabled = true;

start.addEventListener("click",function(){
  time_id = setInterval(time_count,100);
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
});

stop.addEventListener("click",function(){
  clearTimeout(time_id);
  stop.disabled = true;
  start.disabled = false;
});

reset.addEventListener("click",function(){
  clearTimeout(time_id);
  stop.disabled = true;
  reset.disabled = true;
  start.disabled = false;
  time = 0;
  msec.innerHTML = 0;
  sec1.innerHTML = 0;
  sec2.innerHTML = 0;
  min.innerHTML = 0;
});

function time_count(){
  time++;
  let time1 = time%10;
  let time2 = Math.floor(time/10%10);
  let time3 = Math.floor(time/100%6);
  let time4 = Math.floor(time/600%10);
  msec.innerHTML = time1;
  sec1.innerHTML = time2;
  sec2.innerHTML = time3;
  min.innerHTML = time4;
}