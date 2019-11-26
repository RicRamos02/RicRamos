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

function chekarHandOn() {
	if (check(mypieces, tabu[0].left, tabu[tabu.length - 1].right).pos === -1 && array.length === 0) {
		document.getElementById("warnings2").innerHTML = "You can't play";
		document.getElementById("buttonDeck2").style.display = "none";
		document.getElementById("buttonPass2").style.display = "block"
	}
	else if (check(mypieces, tabu[0].left, tabu[tabu.length - 1].right).pos === -1) {
		document.getElementById("buttonDeck2").style.display = "block";
		document.getElementById("warnings2").innerHTML = "Get new pieces";
	}
	else {
		document.getElementById("buttonDeck2").style.display = "none";
		document.getElementById("warnings2").innerHTML = "Your turn";
	}

	
}

