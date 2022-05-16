import React from "react";
import "./style.css"
import smallLogo from "../../assets/images/logo-pequeno.png";
import play from "../../assets/images/play.png";
import right from "../../assets/images/right.png";
import wrong from "../../assets/images/wrong.png";
import doubt from "../../assets/images/doubt.png";
import arrow from "../../assets/images/setinha.png";
import party from "../../assets/images/party.png";
import sad from "../../assets/images/sad.png";

export default function Deck({init,setInit}) {
    const [status,setStatus]=React.useState([]);

    return (
        <div className="deck">
            <header>
                <div>
                    <img src={smallLogo} alt="logo" />
                    <h1>ZapRecall</h1>
                </div>
            </header>
            <main>
                {cards.sort(randomNumber).map((card,index) => <Card status={status} setStatus={setStatus} question={card.question} answer={card.answer} index={index} key={index+1}/>)}
            </main>
            <footer>
                <Footer status={status} init= {init} setInit={setInit}/>
            </footer>
        </div>

    );
}

function Footer({status,init, setInit}){
    const found = status.find(item => item === wrong);

    if (status.length===cards.length){
        return (
            <>
                {(found===undefined)?
                    <div className="result">
                        <div>
                            <img src={party} alt="party"/>
                            <h2><strong>Parabéns!</strong></h2>
                        </div>
                        <div>
                            Você não esqueceu de nenhum flashcard!
                        </div>
        
                        <h2>{status.length}/{cards.length} CONCLUÍDOS</h2>
                        <div className="status">{status.map(item=> <Status icon={item}  />)}</div>
                        <button className="reinit" onClick={()=>setInit(!init)}>REINICIAR RECALL</button>
                    </div>
                    :
                    <div className="result">
                        <div>
                            <img src={sad} alt="sad"/>
                            <h2><strong>Putz...</strong></h2>
                        </div>
                        <div>
                        Ainda faltam alguns...Mas não desanime!
                        </div>
        
                        <h2>{status.length}/{cards.length} CONCLUÍDOS</h2>
                        <div className="status">{status.map(item=> <Status icon={item}  />)}</div>
                        <button className="reinit" onClick={()=>setInit(!init)}>REINICIAR RECALL</button>   
                    </div>
                }
            </>
            );
    }
    return (
        <>
            <h2>{status.length}/{cards.length} CONCLUÍDOS</h2>
            <div className="status">{status.map(item=> <Status icon={item}  />)}</div>
        </>
       
    );
}

function Status({icon}){
    return(
        <img src={icon} alt="icone" />
    );
}


function Card({status, setStatus ,question, answer, index }) {
    const [step, setStep] = React.useState(1);
    const [icon,setIcon] = React.useState(play);
    const [result, setResult]= React.useState("");
    
   

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
                        setResult(item.class);
                        setStatus([...status,item.icon]);  
                        }} >{item.text}</button>)}
                </div>
            </div>
        );

    }
    if (step===4){
        return (
            <div className="initial finished">
                <div>
                    <h2 className={result}>Pergunta {index + 1}</h2>
                    <img src={icon} alt="icon"  />
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