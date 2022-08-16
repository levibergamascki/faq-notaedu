function Answer({item, indice, indiceAtual, aberto}) {
    return (
        <div className={aberto&&indiceAtual===indice ? "answer open" : "answer"}>
            <p>{item.Answer}</p>
        </div>
    )
}

export default Answer