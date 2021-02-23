import React, { Component } from 'react'
import NodeJs from './nodejs.png'
import ReactJs from './reactjs.png'
import Central from './central.png'
import GitHub from './github.png'
import LinkeDin from './linkedin.png'

export default class Logos extends Component {
    render() {
        return (
            <div>
                <a href="https://pt-br.reactjs.org/" target="_blank"><img src={ReactJs}/></a>
                <a href="https://nodejs.org/en/" target="_blank"><img src={NodeJs}/></a>
                <a href="https://centraldofranqueado.com.br/" target="_blank"><img src={Central}/></a>
                <a href="https://github.com/yrvschneider" target="_blank"><img src={GitHub}/></a>
                <a href="https://www.linkedin.com/in/yurischneider23/" target="_blank"><img src={LinkeDin}/></a>
            </div>
        )
    }
}