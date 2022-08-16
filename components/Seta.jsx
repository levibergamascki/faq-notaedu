function Seta({aberto, indiceAtual, indice}) {
    
    
    return (
        <div className={aberto&&indiceAtual===indice ? "seta rodada" : "seta"}>
            
        </div>
    )
}

export default Seta
