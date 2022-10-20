var messageTimer =document.getElementById('message-timer-one');

 var timerz = setTimeout( () => {
    messageTimer.innerHTML = 'il vient de se passer 2 seconde'
}, 2000)
console.log(timerz);
var carre = document.getElementById('carre');

var timer = setTimeout( () => {
    carre.classList.add('rond')
}, 5000)
console.log(timer);

var stop = document.getElementById('stop');

stop.addEventListener('click', function(){
    clearTimeout(timer);
})

var interval = setInterval( function(){
    console.log('ok')
}, 2000)

//clearInterval(interval)

var clock = document.getElementById('clock');
var minute = 0;
var seconde = 0;

setInterval( function() {
  seconde ++
  if(seconde >= 60){
    seconde = 0;
    minute ++
  }

  if( seconde > 9){
    clock.innerHTML = minute + ":" + seconde;
  }
  else{
    clock.innerHTML = minute + " :0" + seconde;
  }
}, 1000)
