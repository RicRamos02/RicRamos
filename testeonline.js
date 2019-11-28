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

var tira;
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
		piece = mypieceson[onclickpiece];
		notify();
	}
}


function jogar(id) {
	var filhos;
	filhos = document.getElementById("PlayerHand2").childNodes;
	for (let i=0; i<filhos.length; i++) {
		if(filhos[i].id=="(" + id + ")"){
			this.tira = i;
			break;
		}
	}
	this.piece=mypieceson[tira];
	var peca = fihos[tira];
	document.getElementById("PlayerHand2").removeChild(peca);
}

function printboard(){
	var piece = document.createElement("span");
	document.getElementById("Board2").appendChild(piece);
	console.log(tabul[1],tabul[1],tabul[1]);
	for (let i=0; i<this.tabul.length; i++){
		let z = this.tabul[i][0];
		let w = this.tabul[i][1];
		let cod = 127075 + z * 7 + w;
		piece.setAttribute("id","(" + z + w + ")");
		piece.setAttribute("class", "pecaPlayer");
		piece.innerHTML += "&#" + cod;
		document.getElementById("Board2").appendChild(piece);
	}
}

function tabuleiro_on(){
	var piece = document.createElement("span");
	document.getElementById("PlayerHand2").appendChild(piece);
 	for(let i=0; i<this.mypieceson.length;i++){
 		let z = this.mypieceson[i][0];
 		let w = this.mypieceson[i][1];
		let cod = 127075 + z*7+w;
 		piece.setAttribute("id", z +" "+w);
		piece.setAttribute("class","pecaPlayer");
		piece.setAttribute("onclick","jogar(" + id + ")");
		piece.innerHTML+="&#"+cod;
 		document.getElementById("PlayerHand2").appendChild(piece);
	 }
}





