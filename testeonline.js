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
		if (!isNaN(cod)){
			boas2.innerHTML = "&#" + this.cod;
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
			getUser();
		}
	})
}
}

function join(){
	limpar();
	var group = 12;
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
			console.log("tou aqui");
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
				console.log(response); return response.json();
			})
			.then(data => {
				
				console.log("data", data);
			})
			/*.then(function (response) {
			
				alert("pedi peca");
				printboard();
			})*/
	}
	else {
		console.log(piece);
		var x = JSON.stringify({ nick: nome, pass: pass, game: game_id, piece: piece, side: side })
		fetch('http://twserver.alunos.dcc.fc.up.pt:8008/notify', {
			method: 'POST',
			body: x
		})
			.then(response => {
				console.log(response); return response.json();
			})
			.then(function (response) {
				if (response.side != null) {
					document.getElementById("warnings2").innerHTML = escolhelado;
					document.getElementById("esq").style.display = "block";
					document.getElementById("dir").style.display = "block";
				}
				alert("tentei jogar");
				printboard();
			})
	}
}

function update(){
	if(estado == "inicia"){
		evtSource = new EventSource("http://twserver.alunos.dcc.fc.up.pt:8008/update?nick=" + nome + "&game=" + game_id);
		evtSource.onmessage = function(event){
			const data1 = JSON.parse(event.data);
			if(data1.turn == nome){
				for (let i=0; i<data1.board.line.length; i++){
					tabul[i][0] = data1.board.line[i][0];
					tabul[i][1] = data1.board.line[i][1];
				}
				printboard();
				if (num==1)
					document.getElementById("warnings2").innerHTML = pecamaior;
				else
					document.getElementById("warnings2").innerHTML = tuavez;
			}
			else if (data1.turn != nome)
				document.getElementById("warnings2").innerHTML = espera;
			if(data1.winner != null){
				alert(data1.winner + " ganhou!");
				estado = "acaba";
				update();
			}
		}
	}
	else {
		evtSource.close();
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
			game_id=0;
			estado = "acaba";
			update();
		}
	})
}


