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

var tira=0;
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
		piece = mypieceson[pos];
		num = 2;
		notify();
	}
	else {
		piece = mypieceson[tira];
		notify();
	}
}

function jogardep(idpeca) {
	var filhos;
	filhos = document.getElementById("PlayerHand2").childNodes;
	for (let i=0; i<filhos.length; i++) {
		if(filhos[i].id == "(" + idpeca + ")" ){
			console.log(filhos[i].id);
			tira = i;
			break;
		}
	}
	piece=mypieceson[tira];
	notify();
	console.log(mypieceson[tira]);
	var peca = filhos[tira];
	document.getElementById("PlayerHand2").removeChild(peca);
}

function printboard(){
	for (let i = 0; i < tabul.length; i++) {
		var boas2 = document.createElement("span");
		let z = tabul[i][0];
		let w = tabul[i][1];
		let cod = 127025 + z * 7 + w;
		if (!isNaN){
			boas2.innerHTML = "&#" + cod;
			document.getElementById("Board2").appendChild(boas2);
		}
	}
}

function tabuleiro_on(){
 	for(let i=0; i<mypieceson.length;i++){
		var boas = document.createElement("span");
 		let z = mypieceson[i][0];
 		let w = mypieceson[i][1];
		let cod = 127075 + z*7+w;
 		boas.setAttribute("id", "(" + z + w + ")");
		boas.setAttribute("class","pecaPlayer");
		boas.setAttribute("onclick","jogardep(" + z + w + ")");
		boas.innerHTML = "&#"+cod;
 		document.getElementById("PlayerHand2").appendChild(boas);
	 }
}

function esq() {
	side = "start";
	document.getElementById("esq").style.display = "none";
	document.getElementById("dir").style.display = "none";
	notify();
}

function dir() {
	side = "end";
	document.getElementById("esq").style.display = "none";
	document.getElementById("dir").style.display = "none";
	notify();
}






