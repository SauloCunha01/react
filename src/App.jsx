import React from "react"
import ComParametro from "./componets/basicos/ComParametro"
import Fragmento from "./componets/basicos/Fragmento"
import Aleatorio from "./componets/basicos/Aleatorio"
/* Export default = você pode retornar uma função anônima (remove App)
remove a palavra function e converte para uma função parametrizada ( =>)
Remover parametros da função, já que só tem apenas um parâmetro nela
pode ficar somente com () ou _ 1° sem parametro e 2º com um parametro mas nqo me importo com ele
retirar o corpo da função { } isso retorna implicitamente tudo que está dentro da função
*/
export default _props=>


        <div id="app">
            <h1>Fundamentos de React</h1>
            
            <Aleatorio min={3} max={15} />
        </div>

