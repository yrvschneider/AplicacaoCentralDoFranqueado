import express from 'express';
import bodyParser from 'body-parser';
import fibonacciRotas from './rotas/fibonacci.js';


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/calculaFibonacci', fibonacciRotas);



app.listen(PORT, () => console.log(`Servidor Rodando na porta http://localhost:${PORT}`));