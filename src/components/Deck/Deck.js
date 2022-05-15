import "./style.css"
import smallLogo from "../../assets/images/logo-pequeno.png";

export default function Deck(){
    return (
        <div className="deck">
            <header>
                <img src={smallLogo} alt="logo" />
                <h1>ZapRecall</h1>  
            </header>
            <main>
                {cards.sort(randomNumber).map(card => <Card question={card.question} answer={card.answer} />)}
            </main>
            <footer>

            </footer>
        </div>
        
    );
}

function Card ({question,answer}){
    return (
        <div className="card">
            
        </div>
    );
}


function randomNumber() {
    return Math.random() - 0.5;
}

const cards = [
    {
       question: "O que é JSX?",
       answer: "Uma extensão de linguagem do JavaScript",
    },
    {
        question: "O React é __ ",
        answer: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
        question: "Componentes devem iniciar com __ ",
        answer: "letra maiúscula",
    },
    {
        question: "Podemos colocar __ dentro do JSX",
        answer: "expressões",
    },
    {
        question: "O ReactDOM nos ajuda __ ",
        answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
        question: "Usamos o npm para __ ",
        answer: "gerenciar os pacotes necessários e suas dependências",
    },
    {
        question: "Usamos props para __",
        answer: "passar diferentes informações para componentes",
    },
    {
        question: "Usamos estado (state) para __",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    }
]