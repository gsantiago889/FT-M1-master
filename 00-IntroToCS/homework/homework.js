'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  num = num+'';
  let bin = num;
  num = num.toString().split('').reverse();
  let resultado=0;
  
  for(let i = 0; i < num.length; i ++){      
      resultado = resultado + (num[i] * Math.pow(2, i));       
    }

  console.log('Binario ingresado: '+ bin + ' resultado en decimal : ' + resultado);  
  return resultado;

}

function DecimalABinario(num) {
  // tu codigo aca
  let dec = num;
  let i=0
  let bin=[];
  while((num / 2) > 0){
      bin.push(num % 2);
      num = Math.floor(num /= 2);
  }
  let resultado = bin.reverse();
  resultado = resultado.join('');
  console.log('Decimal ingresado: '+ dec + ' resultado en binario: '+ resultado);  
  return resultado;

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}