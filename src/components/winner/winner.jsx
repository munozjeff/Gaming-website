import React, { useState } from 'react';
import "./style.css"
import party_popper_joypixels from "../../assets/party-popper-joypixels.gif"
import party_popper_joypixels1 from "../../assets/party-popper-joypixels1.gif"
import golden_cup from "../../assets/golden_cup.png"

function winnerCustomHooks() {
    const [reset,setReset]=useState(false)

    const winUi = (player)=>(
        <div className="winner">
            <div className="notification">
                <h2>PLAYER {player} WIN</h2>
                <h2>¡Ganaste la partida!</h2>
                <p>¡Felicidades! Has ganado la partida con éxito.</p>
            </div>
            <figure>
                <img src={party_popper_joypixels} alt="" />
            </figure>
            <figure>
                <img src={golden_cup} alt="" />
            </figure>
            <figure>
                <img src={party_popper_joypixels1} alt="" />
            </figure>
            <div className="button-section">
                <button className="restart-button" onClick={()=>setReset(true)}>Reiniciar</button>
            </div>
        </div>
    )
    return{winUi,reset,setReset}
}
export {winnerCustomHooks}