"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

var first = document.querySelector('#original');

var result = document.querySelector('#converted');

function Medida(valor, tipo) {
    this.valor=valor || 0;
    this.tipo=tipo || "C";
    
    this.get_valor = function(){
        return this.valor;
    };
    
    this.get_tipo = function(){
        return this.tipo;
    };
    this.set_valor = function(valor){
        this.valor=valor;
    };
    this.set_tipo = function(tipo){
        this.tipo=tipo;
    };
    
    
};

function Temperatura () {
}

Temperatura.prototype = new Medida();
Temperatura.prototype.constructor = Temperatura;

Temperatura.prototype.CtoF = function(){
  return (get_valor()*9/5)+32;
};

Temperatura.prototype.FtoC = function(){
  return (get_valor()-32)*5/9;
};


if (window.Worker) { //check if Browser supports the Worker api.
	// Requires script name as input
	var myWorker = new Worker("worker.js");

	first.onchange = function() {
	  myWorker.postMessage([first.value]); //sending message as array to the worker
	  console.log('Message posted to worker '+first.value);
	};


	myWorker.onmessage = function(e) {
                console.log(e);
		result.textContent = e.data;
		console.log('Message received from worker '+e.data);
	};
}


/*
function calculate() {
  var result;
  var temp = new Temperatura;
  var original       = document.getElementById("original");
  var tempo = original.value;
  var regexp = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([cCfF])\s*$/i;
  
  var m = tempo.match(regexp);
  
  if (m) {
    temp.set_valor(parseFloat(m[1]));  //num
    temp.set_tipo(m[2]);               //type
    if (temp.tipo === 'c' || temp.tipo === 'C') {
      result = (temp.valor * 9/5)+32;  //1,8
      result = result.toFixed(1)+" Farenheit";
    }
    else {
      result = (temp.valor - 32)*5/9;
      result =  result.toFixed(1)+" Celsius";
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }
}*/