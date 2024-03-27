import React from 'react'
import './style.css'

export const GameCard = ({image,name,id=0,clickHandler=()=>{}}) => {
  return (
    <div className='card-game-container' onClick={()=>clickHandler(id)}>
        <img className='card-game' src={image} alt="" />
        <h3>{name}</h3>
    </div>
  )
}
