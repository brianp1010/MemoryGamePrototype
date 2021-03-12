/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

//Global variables
var pattern = [2, 2, 4, 3 ,2 ,1 ,2, 4];
var progress = 0 ;
var gamePlaying = false ;


function startGame()
{
  //initialize the game variables
  progress = 0; 
  gamePlaying = true;

  // swaps the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
}

function stopGame()
{
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}