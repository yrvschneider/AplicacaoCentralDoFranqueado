import express from 'express';

const router = express.Router();

var fibonacciArray = [];
var zeta = 0;
var total = 0;
var termo = 0;
var resultado = "";

router.post('/', (req, res) => {

    const fibonacci = req.body;
    console.log(req.body);

    var fibonacciArray = [];
    zeta = 0;
    total = 0;
    termo = 0;
    resultado = "";
    var calculo = calculaFibonacci(fibonacci.termo);
    res.send(calculo);
});


function calculaFibonacci(stermo) {

var ultimo = 1;
var penultimo = 1;
var fibonacci = 0;
var count = 1;
termo = stermo;


//calcula o tamanho da array
if(termo >= 1) {
    count = 3;
    console.info("Fibonacci:" + 0);
    console.info("Fibonacci:" + 1);
    console.info("Fibonacci:" + 1);
}
while(fibonacci <= termo) {
    fibonacci = ultimo + penultimo;
    if(fibonacci <= termo){
        penultimo = ultimo;
        ultimo = fibonacci;
        count++;
        console.log("Fibonacci:" + fibonacci);
    }
}
//reinicia variaveis
    fibonacciArray = [count];
    ultimo = 1;
    penultimo = 1;
    fibonacci = 0;
    count = 1;
    

//Popula array
if (termo >= 1) {
    count = 3;
    fibonacciArray[0] = 0;
    fibonacciArray[1] = 1;
    fibonacciArray[2] = 1;
}
while (fibonacci <= termo) {
    fibonacci = ultimo + penultimo;
    if(fibonacci <= termo) {
        penultimo = ultimo;
        ultimo = fibonacci;
        fibonacciArray[count] = fibonacci;
        count++;
    }
}
        calculaZeta(count);
        console.log(resultado.toString());
        return resultado;
}

function calculaZeta(ultimaPosicao) {
  
    if(fibonacciArray.length >= ultimaPosicao && termo>0) {
    
        var valor = fibonacciArray[ultimaPosicao - 1];
        
        ultimaPosicao = ultimaPosicao - 1;

        if((total + valor) > termo) {
            calculaZeta(ultimaPosicao);
        }else if((total + valor) < termo){
            zeta += 1;
            total += valor;
            resultado = resultado + ' + ' + valor.toString();
            calculaZeta(ultimaPosicao);
        }else {
            zeta += 1;
            resultado = resultado + ' + ' + valor.toString() + ' zeta: ' + zeta.toString();
            return;
        }
    }else {
        resultado = 'zero'
        return;
    }
}

export default router;