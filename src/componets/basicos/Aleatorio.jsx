import React from "react"

export default (props)=>{
    /* const min = props.min; const max = props.max; 
    A linha acima pode ser utilizada, mas utilizaremos as definições JavaScript 
    de Objetos como na linha abaixo:
    */
   const {min, max} = props;
    const x = parseInt(Math.random()* (max - min) + min);
    return(
        <div>
            <h3>Número Aleatório</h3>
            <p>Valor Min: {min}</p>
            <p>Valor Max: {max}</p>
            <h2>Valor Escolhido: {x}</h2>
        </div>
    );

}