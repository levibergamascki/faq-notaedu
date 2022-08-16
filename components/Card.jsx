import Faq from "./Faq";
import Title from "./Title";
import Imagem from "./Imagem";

function Card(){
    return(
        <div className="card">
            <Title />
            <Faq />
            <Imagem />

        </div>
    )
}

export default Card;