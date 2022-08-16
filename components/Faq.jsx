import { useState } from "react";
import dados from "../pages/dados";
import Question from "./Question";
import Answer from "./Answer";


function Faq(){
    const [aberto, setAberto] = useState(false);
    const [indiceAtual, setIndiceAtual] = useState(null);
    const compClick = (x) => {
        const indiceClick = parseInt(x.currentTarget.id)
        setIndiceAtual(indiceClick)
        aberto&&indiceClick === indiceAtual ? setAberto(false) : setAberto(true)
     }
 
     return (
     dados.map((item, indice) => {
         return (
         <div className='faq' key={indice} onClick={compClick} id={indice}>
             <Question item={item} aberto={aberto} indice={indice} indiceAtual={indiceAtual}/>
             <Answer item={item} aberto={aberto} indice={indice} indiceAtual={indiceAtual}/>
         </div>
         )
     }))
}

export default Faq