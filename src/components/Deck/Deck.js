import React from "react";
import "./style.css"
import smallLogo from "../../assets/images/logo-pequeno.png";
import play from "../../assets/images/play.png";
import right from "../../assets/images/right.png";
import wrong from "../../assets/images/wrong.png";
import doubt from "../../assets/images/doubt.png";
import arrow from "../../assets/images/setinha.png";

export default function Deck() {
   
    return (
        <div className="deck">
            <header>
                <div>
                    <img src={smallLogo} alt="logo" />
                    <h1>ZapRecall</h1>
                </div>
            </header>
            <main>
                {cards.sort(randomNumber).map((card,index) => <Card question={card.question} answer={card.answer} index={index} key={index+1}/>)}
            </main>
            <footer>
            </footer>
        </div>

    );
}


function Card({question, answer, index }) {
    const [step, setStep] = React.useState(1);
    const [icon,setIcon] = React.useState(play);
    const [classColor,setClassColor]=React.useState(""); 
   

    if (step === 1) {
        return (
            <div className="initial">
                <div>
                    <h2>Pergunta {index + 1}</h2>
                    <img src={icon} alt="play" onClick={() => setStep(2)} />
                </div>
            </div>
        );
    }
    if (step === 2) {
        return (
            <div className="question" >
                <p>{question}</p>
                <img src={arrow} alt="turn card" onClick={() => setStep(3)} />
            </div>
        );
    }
    if (step === 3) {
        
        return (
            <div className="answer" >
                <p>{answer}</p>
                <div className="buttons">
                    {buttons.map(item=> <button className={item.class} onClick={() => {
                        setStep(4);
                        setIcon(item.icon);
                        setClassColor(item.class);
                        }} >{item.text}</button>)}
                </div>
            </div>
        );

    }
    if (step===4){
        return (
            <div className="initial finished">
                <div>
                    <h2 className={classColor}>Pergunta {index + 1}</h2>
                    <img src={icon} alt="play" onClick={() => setStep(1)} />
                </div>
            </div>
        );
    }
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

const buttons =[
    {
        text: "Não lembrei",
        status:"incorrect",
        class: "wrong",
        color:"red",
        icon: wrong,
    },

    {
        text: "Quase não lembrei",
        status:"correct",
        class:"doubt",
        color:"yellow",
        icon: doubt,
    },

    {
        text: "Zap!",
        status:"correct",
        class:"right",
        color:"green",
        icon: right,
    },
]