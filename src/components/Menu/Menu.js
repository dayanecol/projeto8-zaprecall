import "./style.css";

import logo from "../../assets/images/logo.png"

export default function Menu({init,setInit}){
    return(
        <div className="menu">
                <img src={logo} alt="Logo" />
                <h1>ZapRecall</h1>
                <button className="init" onClick={()=>setInit(!init)}>Iniciar Recall!</button>
        </div>
    );
}