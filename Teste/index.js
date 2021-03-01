var fibonacciArray = [];
var zeta = 0;
var total = 0;
var termo = 0;
var resultado = document.querySelector('#resultado');

function calculaFibonacci() {
    var ultimo = 1;
    var penultimo = 1;
    var fibonacci = 0;
    var count = 1;
    termo = parseInt(document.querySelector('#stermo').value);


//Ira calcular o tamanho da Array
    if(termo >= 1) {
        count = 3;
    }
    while(fibonacci <= termo){
        fibonacci = ultimo + penultimo;
        if(fibonacci <= termo){
            penultimo = ultimo;
            ultimo = fibonacci;
            count++;
        }
    }

//Ira reiniciar as Variaveis, para começar a popular as array
    fibonacciArray = [count];
    ultimo = 1;
    penultimo = 0;
    fibonacci = 0;
    count = 1;

//Ira começar a popular as Array
    if(termo >= 1){
        count = 3;
        fibonacciArray[0] = 0;
        fibonacciArray[1] = 1;
        fibonacciArray[2] = 1;
    }
    while(fibonacci <= termo){ //Verifica se fibonacci é menor ou igual a termo
        fibonacci = ultimo + penultimo; //Então fibonacci recebe ultimo + penultimo
        if(fibonacci <= termo){ //Agora ira verificar para ver se fibonacci é menor ou igual ao termo, se fibonacci for menor que termo
            penultimo = ultimo;
            ultimo = fibonacci;
            fibonacciArray[count] = fibonacci;
            count++
        }
    }
    calculaZeta(count);
    document.getElementById('resultado').innerHTML = resultado;
    return resultado;
}

//Funçao Recursiva 
function calculaZeta(ultimaPosicao){ 

    if(fibonacciArray.length >= ultimaPosicao && termo > 0){ 

        var valor = fibonacciArray[ultimaPosicao - 1];

        ultimaPosicao = ultimaPosicao - 1;

        if((total + valor) > termo){
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