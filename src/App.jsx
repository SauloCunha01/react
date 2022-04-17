import React from "react"
import ComParametro from "./componets/basicos/ComParametro"
import Fragmento from "./componets/basicos/Fragmento"

export default function App(){
    return(
        /* 
        App.jsx Representa a aplicação
        Esta função esta totalmente sem otimização
        */
        <div id="app">
            <h1>Fundamentos de React</h1>
            <ComParametro
            titulo="Situação do Aluno"
            Subtítulo="Pedro Silva"
            />
            <Fragmento/> 
        </div>
     );
}