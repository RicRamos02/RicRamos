//Começar o jogo online
function start2(){
	document.getElementById("startGame2").style.display="none";
	document.getElementById("board3").style.display ="block";
	document.getElementById("forfeit2").style.display = "block";
	document.getElementById("Board2").innerHTML="";
	document.getElementById("PlayerHand2").innerHTML="";
	document.getElementById("Deck2").innerHTML="";
}
function limpar(){
    document.getElementById("buttonRules").style.display = "none";
    document.getElementById("scores").style.display = "none";
    document.getElementById("titulo").style.display = "none";
    document.getElementById("logo").style.display = "none";
}

function passTurn2(){
    skip="passar";
}
function pedirpeca() {
	piece = null;
}

function disappear2(){
    var left = document.getElementById("leftContainer");
    var gameBoard = document.getElementById("BoardOnline");
    left.style.display = "none";
    gameBoard.style.display = "block";
  
}


var pos=0;

function maxonline(array) {
	var i;
	var max=0;
	var esq=0;
	for (i=0; i<array.length; i++) {
		if ((array[i][0]+array[i][1]) > max) {
			max = (array[i][0]+array[i][1]);
			pos = i;
			esq = array[i][0];
		}
		else if ((array[i][0]+array[i][1]) == max) {
			if (array[i][0] > esq){
				max = (array[i][0]+array[i][1]);
				pos = i;
			}
		}
	}
	console.log(pos);
}
var num = 1;
function jogar() {
	if (num == 1){
		piece = mypieces[pos];
		num = 2;
		notify();
	}
	else {
		piece = mypieces[onclickpiece];
		notify();
	}
}


function tabuleiro_on(){
	var jog = document.createElement("span");
	var PlayerHand2 = document.getElementById("PlayerHand2");
 	for(let i=0; i<mypieces.length;i++){
 		let z=mypieces[i][0];
 		let w = mypieces[i][1];
 		let cod = 127075 + z*7+w;
 		jog.setAttribute("id", z +" "+w);
		jog.innerHTML="&#"+(conta);
		jog.setAttribute("class","pecaPlayer");
 		PlayerHand2.appendChild(jog);
	 }
}






