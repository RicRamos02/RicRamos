

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
	notify();
	skip=null;
}
function pedirpeca() {
	piece = null;
	notify();
}

function mostrarpeca(nova) {
	var boas = document.createElement("span");
	let z = nova[0];
	let w = nova[1];
	let cod = 127075 + z * 7 + w;
	boas.setAttribute("id", "(" + z + w + ")");
	boas.setAttribute("class", "pecaPlayer");
	boas.setAttribute("onclick", "jogardep(" + z + w + ")");
	boas.innerHTML = "&#" + cod;
	document.getElementById("PlayerHand2").appendChild(boas);
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
console.log(piece)
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
	console.log(piece)
	notify();
	console.log(mypieceson[tira]);
	var peca = filhos[tira];
	document.getElementById("PlayerHand2").removeChild(peca);
}

function printboard(tab_recebido){
	console.log(tab_recebido)
	var filhos = document.getElementById("Board2").childNodes;
	for (let i=0; i<filhos.length; i++) {
		document.getElementById("Board2").removeChild(filhos[i]);
	}	
	document.getElementById("Board2").innerHTML="";
	for (let i = 0; i < tab_recebido.length; i++) {
		var boas2 = document.createElement("span");
		let z = tab_recebido[i][0];
		let w = tab_recebido[i][1];
		let cod;
		if (tab_recebido[i][0]==tab_recebido[i][1])
			cod = 127075 + z * 7 + w;
		else
			cod = 127025 + z * 7 + w;
		if (!isNaN(cod)){
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

function esquerda() {
	side = "start";
	document.getElementById("esquerda").style.display = "none";
	document.getElementById("direita").style.display = "none";
	notify();
	side = null;
}

function direita() {
	side = "end";
	document.getElementById("esquerda").style.display = "none";
	document.getElementById("direita").style.display = "none";
	notify();
	side = null;
}



lines = 1;
function ranking() {
	var a = document.getElementById("tabela");
	fetch ('http://twserver.alunos.dcc.fc.up.pt:8008/ranking', {
	method:'POST',
	body: JSON.stringify(a)
})
.then(response => {
	return response.json();
})
.then(function(response) {
	console.log(response);
	if (response.error==null) {
		var table = document.getElementById("tabela");
		for (var i=0; i<response.ranking.length;i++) {
			var server_data = table.insertRow(lines);
			var cell1 = server_data.insertCell(0);
			var cell2 = server_data.insertCell(1);
			var cell3 = server_data.insertCell(2);
			cell1.innerHTML = response.ranking[i].nick;
			cell2.innerHTML = response.ranking[i].victories;
			cell3.innerHTML = response.ranking[i].games;
			lines++;
		}
	}
})
}

function registo () {
	var pass = document.getElementById("pass").value;
	nome = document.getElementById("user").value;
	if((nome!="")&&(pass!="")){
		var x = JSON.stringify({nick:nome,pass:pass});
		fetch('http://twserver.alunos.dcc.fc.up.pt:8008/register', {
		method:'POST',
		body:x
	})
	.then(response =>{return response.json();
	})
	.then(function(response) {
		if(response.error!=null)
		alert("User registered with a different password");
		else{
			loginFunc();
		}
	})
}
}

var game_id = 0;
function join(){
	limpar();
	var group = 1234567654321;
	var pass = document.getElementById("pass").value;
	if ((nome!="")&&(pass!="")){
		var x = JSON.stringify({group:group,nick:nome,pass:pass});
		fetch('http://twserver.alunos.dcc.fc.up.pt:8008/join', {
		method:'POST',
		body:x
	})
	.then(response=>{console.log(response);return response.json();
	})
	.then(function(response) {
		if(response.error!=null)
			alert("Pairing error");
		else {
			disappear2();
			start2();
			for (let j=0; j<response.hand.length; j++){
				mypieceson[j][0] = response.hand[j][0];
				mypieceson[j][1] = response.hand[j][1];
			}
			game_id = response.game;
			maxonline(mypieceson);
			update();
			tabuleiro_on();
			alert("coisas");
		}
	})
}
}

function notify(){
	var pass = document.getElementById("pass").value;
	if (piece == null ) {
		var x = JSON.stringify({nick:nome,pass:pass,game:game_id,piece:null});
		fetch('http://twserver.alunos.dcc.fc.up.pt:8008/notify', {
			method: 'POST',
			body: x
		})
			.then(response => {
				return response.json();
			})
			.then(data => {
				console.log("Entrei no notify na parte de pedir ao monte")
				mostrarpeca(data.piece);
			})
	}
	else if (skip != null) {
		var x = JSON.stringify({ nick: nome, pass: pass, game: game_id, piece: piece, side: side, skip: skip })
		fetch('http://twserver.alunos.dcc.fc.up.pt:8008/notify', {
			method: 'POST',
			body: x
		})
			.then(response => {
				return response.json();
			})
			.then(function (response) {
				console.log("Passei a vez")
			})
	}
	else {
		var x = JSON.stringify({ nick: nome, pass: pass, game: game_id, piece: piece, side: side})
		fetch('http://twserver.alunos.dcc.fc.up.pt:8008/notify', {
			method: 'POST',
			body: x
		})
			.then(response => {
				return response.json();
			})
			.then(function (response) {
				console.log("Entrei no notify na parte de jogar uma peça")
				if (response.side != null) {
					document.getElementById("warnings2").innerHTML = escolhelado;
					document.getElementById("esquerda").style.display = "block";
					document.getElementById("direita").style.display = "block";
				}
				if (response.error == "Tile fits neither side")
					document.getElementById("warnings2").innerHTML = "Não podes jogar essa peça!";
				else if (response.error != "Tile fits neither side" && response.error != null)
					document.getElementById("warnings2").innerHTML = "Não é a tua vez!";
				alert("tentei jogar");
			})
	}
}

function update(){
		evtSource = new EventSource("http://twserver.alunos.dcc.fc.up.pt:8008/update?nick=" + nome + "&game=" + game_id);
		evtSource.onmessage = function(event){
			console.log("teste")
			const data1 = JSON.parse(event.data);

			console.log(data1);
			if(data1.turn == nome){
				console.log("teste")
				console.log("turno" + data1);
				for (let i=0; i<data1.board.line.length; i++){
					tabul[i][0] = data1.board.line[i][0];
					tabul[i][1] = data1.board.line[i][1];
				}
				printboard(data1.board.line);
				if (num==1)
					document.getElementById("warnings2").innerHTML = pecamaior;
				else
					document.getElementById("warnings2").innerHTML = tuavez;
			}
			else if (data1.turn != nome) {
				console.log("teste")
				document.getElementById("warnings2").innerHTML = espera;
				printboard(data1.board.line);
			}
			if(data1.winner != null){
				console.log("teste")
				alert(data1.winner + " ganhou!");
				evtSource.close();
			}
		} 	 
}

function desistir(){
	var pass = document.getElementById("pass").value;
	var url = "http://twserver.alunos.dcc.fc.up.pt:8008/leave";
	var desiste = JSON.stringify({game:game_id , nick:nome , pass:pass});
	fetch(url,{method:'POST',body:desiste}).
	then(response=>{
		return response.json();
	}).
	then(function(data) {
		if(data.error==null){
			estado = "acaba";
			update();
			game_id=0;
		}
	})
}


