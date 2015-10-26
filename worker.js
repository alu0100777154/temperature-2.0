
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

onmessage = function(e) {
  console.log('Message received from main script: '+e.data);
  
  var result;
  var temp = new Temperatura;
//  var original       = document.getElementById("original");
  var tempo = e.data[0];
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
    e.data[0] = result;
  }
  else {
    e.data[0] = "ERROR! Try something like '-4.2C' instead";
  }

  var workerResult = 'Result: ' + (e.data[0]);
  console.log('Posting message back to main script: "'+workerResult+'"');
  postMessage(workerResult);
};