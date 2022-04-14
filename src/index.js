import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './componets/basicos/Primeiro'
const msg = 'Seja bem-vindo ao curso de React'

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <Primeiro></Primeiro>
        {msg}
    </div>
    
    ,
    document.getElementById('root')
    )