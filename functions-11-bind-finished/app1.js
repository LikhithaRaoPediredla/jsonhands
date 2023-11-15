const startGameBtn = document.getElementById('start-game-btn');
let gameIsRunning= false;
function userChoice(){
    console.log("inside user choice")
    const player= prompt("enter you choice in R,P,S").toUpperCase();
    console.log(player)

   if(player!="R"&&player!="P"&&player!="S"){
    alert("entered invalid hence picked rock for you");
    return "R";
   }
   return player;
}
function computerChoice(){
    console.log("inside computer choise function");
    let ran= Math.random();
    console.log(`random value picked ${ran}`);
    if (ran < 0.34) {
        return "R";
      } else if (ran < 0.67) {
        return "P";
      } else {
        return "S";
      }
}

function getWinner(pC,cC){
    console.log("inside getwinner function");
    console.log(`player choice=${pC} and computerchoice = ${cC}`)
    if(pC === cC){
        return "Draw";
    }
    else if( (cC === "R" && pC === "P") ||
      (cC === "P" && pC === "S") ||
      (cC === "S" && pC === "R")){
        return "player";
      }
    return "computer";
    


}

function game(){
    console.log("inside game function")
    const winner=getWinner(userChoice(),computerChoice());
    console.log(`game return winner is ${winner}`);
    return winner;
}
startGameBtn.addEventListener('click',()=>{
    if (gameIsRunning) {
        return;
      }
      gameIsRunning = true;
      console.log('Game is starting...');
      let yay= game();
      alert(`winner is ${yay}`);
      gameIsRunning= false;


})