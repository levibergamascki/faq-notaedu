import Seta from "./Seta"

function Question({item, aberto, indiceAtual, indice}) {
    return (
        <div className={aberto&&indiceAtual===indice ? "question active": "question"}>
            <p>{item.Question}</p>
            
            <Seta aberto={aberto} indiceAtual={indiceAtual} indice={indice}/>
        </div>
    )
}

export default Question