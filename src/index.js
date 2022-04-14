import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './componets/basicos/Primeiro'
import ComParametro  from './componets/basicos/ComParametro'
const msg = 'Seja bem-vindo ao curso de React'

ReactDOM.render(
    <div id="app">
        <Primeiro></Primeiro>
        <ComParametro 
        titulo="Segundo Componente" 
        subtitulo="Muito Legal!" />
        {msg}
    </div>
    
    ,
    document.getElementById('root')
    )