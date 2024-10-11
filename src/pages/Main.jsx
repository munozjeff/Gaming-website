import React from 'react'
import { GameCard } from '../components/gameCard/GameCard'
import JigsawPuzzleImage from '../assets/Puzzle.png'
import triki from '../assets/triki.png'
import ahorcado from '../assets/juego-del-ahorcado.png'

export const Main = ({clickHandler=()=>{}}) => {
  return (
    <div className='selector-game'>
        <GameCard id={1} image={JigsawPuzzleImage} name={"Rompe cabezas"} clickHandler={clickHandler}/>
        <GameCard id={2} image={triki} name={"triqui"} clickHandler={clickHandler}/>
        <GameCard id={3} image={ahorcado} name={"Ahorcado"} clickHandler={clickHandler}/>
    </div>
  )
}
