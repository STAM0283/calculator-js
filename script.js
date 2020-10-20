function insererNum(numéro){
	document.form.textview.value = document.form.textview.value + numéro;

}
function effacer(){
	document.form.textview.value = "";
}

function retour(){
	var valeur = document.form.textview.value;

	document.form.textview.value = valeur.substring(0, valeur.length-1);
}

function egal(){
	valeur = document.form.textview.value;
	document.form.textview.value = eval(valeur);
}
function racineCaree(){
	document.form.textview.value = Math.sqrt(document.form.textview.value);

}

function dixPuissanceX(){
	document.form.textview.value = Math.pow(10, document.form.textview.value);

}

function xPuissanceY(numéro2){
	document.form.textview.value = document.form.textview.value ** numéro2;
}
function round(){
	document.form.textview.value = Math.round(document.form.textview.value);

}

const start = document.querySelector('#input1');
const reset = document.querySelector('#input3');
const pause = document.querySelector('#input2');
const input = document.querySelector('#textchrono');
let timer;

let ms = 0;
let s  = 0;
let m  = 0;

start.addEventListener('click', depart);
pause.addEventListener('click', stop);
reset.addEventListener("click", () => {
	input.value = "00:00:00";
})

function depart(){
	timer = setInterval(run, 10);
}

function run(){
	input.value = m + ":" + s + ":"+ ms;
	ms++;
	if(ms == 100){
		ms = 0;
		s++;
	}
	if(s == 60){
		s = 0;
		m++;
	}

}

function stop(){
	clearInterval(timer);
}

// on va ajouter le chronometre :
