import React, { useState } from 'react';
import "./style.css"

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
                <img src="/src/assets/party-popper-joypixels.gif" alt="" />
            </figure>
            <figure>
                <img src="/src/assets/golden_cup.png" alt="" />
            </figure>
            <figure>
                <img src="/src/assets/party-popper-joypixels (1).gif" alt="" />
            </figure>
            <div className="button-section">
                <button className="restart-button" onClick={()=>setReset(true)}>Reiniciar</button>
            </div>
        </div>
    )
    return{winUi,reset,setReset}
}
export {winnerCustomHooks}