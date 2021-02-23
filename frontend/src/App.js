import React, { Component } from 'react'
import Caracol from './logos/caracol.png'

import Logos from './logos/Logos'
import './App.css'
import api from './api/index'
export default class App extends Component {

        state = {
        resultado: '',
        }
        async componentDidMount(){
            
            const request = {"termo": 200};
            const response = await api.post('',request);
            this.setState({resultado: response.data});
        }

    render() {
        return (
            <div className="App">
                <div className="logotipo"><a href=""><img src={Caracol}/></a></div>

                    <div className="linha">
                    
                    <div className="Calculadora">
                    <h2>Representação Fibonacci</h2>
                    <form action="http://localhost:5000/calculadorFibonacci" method="POST">
                    <input type="number" className="digitado"/>
                    <button className="enviar">Mostrar</button>
                    <div className="resultado"></div>
                    </form>
                    </div>
                    </div>

                <div className="logos"><Logos /></div>
            </div>
        )
    }
}