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




//ao clicar remover e adicionar versão online
function remove(idpiece){
	document.getElementById("left2").style.visibility = "hidden";
	document.getElementById("right2").style.visibility = "hidden";
	if (bool === 1) return;
	var filhos;
	var board = document.getElementById("Board2");
	filhos = document.getElementById("PlayerHand").childNodes;
	var i;
	for (i = 0; i < filhos.length; i++) {
		document.getElementById(filhos[i].id).style.color = "white";
	}
	for (i = 0; i < filhos.length; i++) {
		if (filhos[i].id == "piece(" + idpiece + ")") {
			break;
		}
	}
	var change = filhos[i];
	var test = jogada2(mypieces[i], tabu[0].left, tabu[tabu.length - 1].right);
	if (test.pos === -1) {
		document.getElementById("warnings").innerHTML = "Can't play piece";
		return;
	}
	document.getElementById(filhos[i].id).style.color = "green";
	onclickpiece = i;
	if (checkleftp(mypieces[onclickpiece], tabu[0].left) !== -1) {
		document.getElementById("left").style.visibility = "visible";
	}
	if (checkrightp(mypieces[onclickpiece], tabu[tabu.length - 1].right) !== -1) {
		document.getElementById("right").style.visibility = "visible";
	}

}

