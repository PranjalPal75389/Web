const startButton=document.querySelector(".startButton");
const stopButton=document.querySelector(".stopButton");
const resetButton=document.querySelector(".resetButton");
const timer=document.querySelector(".timer");


let interval;
let [hours,minutes,seconds]=[0,0,0];

function stopWatch(){
    seconds++;
    if(seconds>59){
        seconds=0;
        minutes++;
        if(minutes>59){
            minutes=0;
            hours++;
        }
    }
   
   timer.textContent= hours.toString().padStart(2,'0')+':'+ minutes.toString().padStart(2,'0')+':'+ seconds.toString().padStart(2,'0');
}

  function start(){
   
       interval= setInterval(stopWatch,1000);
       startButton.disabled = true;
        stopButton.disabled = false; 
        
    }
  
  function stop(){
    clearInterval(interval);
    startButton.disabled = false; 
    stopButton.disabled = true; 
  }
  function reset(){
    clearInterval(interval);
    startButton.disabled = false; 
    stopButton.disabled = true;
    [hours, minutes, seconds] = [0, 0, 0];
   timer.textContent= hours.toString().padStart(2,'0')+':'+ minutes.toString().padStart(2,'0')+':'+ seconds.toString().padStart(2,'0');
 
  }



// const startButton = document.querySelector(".startButton");
// const stopButton = document.querySelector(".stopButton");
// const resetButton = document.querySelector(".resetButton");
// const timer = document.querySelector(".timer");

// let intervalId;
// let totalSeconds = 0;

// function updateTimerDisplay() {
//   const minutes = Math.floor(totalSeconds / 60);
//   const seconds = totalSeconds % 60;
//   timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
// }

// function start() {
//   if (!intervalId) {
//     intervalId = setInterval(() => {
//       totalSeconds++;
//       updateTimerDisplay();
//     }, 1000);
//   }
//   stopButton.disabled = false;
//   resetButton.disabled = true;
// }

// function stop() {
//   clearInterval(intervalId);
//   intervalId = null;
//   stopButton.disabled = true;
//   resetButton.disabled = false;
// }

// function reset() {
//   clearInterval(intervalId);
//   intervalId = null;
//   totalSeconds = 0;
//   updateTimerDisplay();
//   stopButton.disabled = true;
//   resetButton.disabled = false;
// }

// updateTimerDisplay(); // Set initial timer display