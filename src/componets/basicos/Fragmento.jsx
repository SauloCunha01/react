import React from "react"

export default function(){
    return(
        /*Ao invés de <div/> poed ser usado o React.fragment para no inspecionar não aparecer as tags <div> */
        <React.Fragment>
            <h2>Fragmento</h2>
            <p>Cuidado com esse Erro!</p>
        </React.Fragment>
    );
}