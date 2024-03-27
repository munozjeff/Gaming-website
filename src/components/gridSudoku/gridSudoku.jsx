import React from 'react';
import "./style.css"

function GridSudoku({oneThird}) {
    return(
        <div className='sudoku-grid'>
            {oneThird.map((e,index)=><span key={index} className='sudoku-cell'>{e}</span>)}
        </div>
    )
}
export {GridSudoku}