onmessage = function(e) {
  console.log('Message received from main script: '+e.data);
  
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

  var workerResult = 'Result: ' + (e.data[0]);
  console.log('Posting message back to main script: "'+workerResult+'"');
  postMessage(workerResult);
};