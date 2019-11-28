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
		piece = mypieceson[pos];
		num = 2;
		notify();
	}
	else {
		piece = mypieceson[onclickpiece];
		notify();
	}
}


function tabuleiro_on(){
	var piece = document.createElement("span");
	//var PlayerHand2 = document.getElementById("PlayerHand2");
	document.getElementById("PlayerHand2").appendChild(piece);
 	for(let i=0; i<this.mypieceson.length;i++){
 		let z = this.mypieceson[i][0];
 		let w = this.mypieceson[i][1];
		let cod = 127075 + z*7+w;
		console.log(cod); 
 		piece.setAttribute("id", z +" "+w);
		piece.setAttribute("class","pecaPlayer");
		piece.setAttribute("onclick","jogar(");
		piece.innerHTML+="&#"+cod;
 		document.getElementById("PlayerHand2").appendChild(piece);
	 }
}



/*function tabuleiro_on(){
	var jog = document.createElement("div");
 	jog.id = "jog";
 	document.getElementById("tabuleiro").appendChild(jog);

 	for(let i=0; i<jogador2.length;i++){

 		let x = document.createElement("div");
 		let z=jogador2[i][0];
 		let w = jogador2[i][1];
 		let cod = 127075 + z*7+w;

 		x.setAttribute("id", z +" "+w);
 		x.appendChild(document.createTextNode(String.fromCodePoint(cod)));
 		var y = document.createAttribute("class");
 		y.value= "ola";
 		x.setAttributeNode(y);
 		jog.appendChild(x);
 	//x.innerHTML = String.fromCodePoint(jogador[i]);
 	}
	var area = document.createElement("div");
	area.id = "area";
	document.getElementById("tabuleiro").appendChild(area);
}*/





