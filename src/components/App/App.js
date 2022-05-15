import React from "react";
import "../../assets/css/reset.css";
import "../../assets/css/style.css";

import Menu from "../Menu/Menu";
import Deck from "../Deck/Deck";


export default function App() {
    const [init, setInit] = React.useState(false);
    return (
        <>
            {!init ?
                <Menu setInit={setInit} />
                :
                <Deck />
            }
        </>
    );
}